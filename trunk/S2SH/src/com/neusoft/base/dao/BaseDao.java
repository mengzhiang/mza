package com.neusoft.base.dao;

import java.io.Serializable;
import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.criterion.Criterion;

public class BaseDao<T,PK extends Serializable>{
	
	@Resource
	private SessionFactory sessionFactory ;
	
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	public Class<T> entityClass;
	
	@SuppressWarnings("unchecked")
	public BaseDao() {
		//得到
	  this.entityClass = GenericsUtils.getSuperClassGenricType(this.getClass());
	}
	
    public BaseDao(final SessionFactory sessionFactory, final Class<T> entityClass) {
        this.sessionFactory = sessionFactory;
        this.entityClass = entityClass;
    }
    
	public void setEntityClass(Class<T> type){
        this.entityClass=type;
    }
	
	public Session getSession(){
		return sessionFactory.getCurrentSession();
	}
	
	public void save(final T entity) {
		getSession().saveOrUpdate(entity);
	}
	/**
	 * 通过Criterion查询
	 * @param criterions
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<T> find(final Criterion... criterions) {
		return createCriteria(criterions).list();
	}	
	   
	/**
	 * 创建Criterion对象
	 * 不定参数是1.5以后的新特性
	 * @param criterions
	 * @return
	 */
	public Criteria createCriteria(final Criterion... criterions) {
			Transaction tx = getSession().beginTransaction();
			tx.begin();
	        Criteria criteria = getSession().createCriteria(entityClass);
	        for (Criterion c : criterions) {
	            criteria.add(c);
	        }
	       /// tx.commit();
	        return criteria;
	    }
	/**
	 * 获取所有的记录数
	 * @param hql
	 */
	public void getAllRowCount(String hql){
		Session session = getSession();
		Transaction tx = session.beginTransaction();
		Query query = session.createQuery(hql);
		query.list().size();
		tx.commit();
	}
	
	@SuppressWarnings("unchecked")
	public List<T> queryForPage(final String hql,final int offset,final int length){
		Session session = getSession();
		Transaction tx = session.beginTransaction();
		Query query = session.createQuery(hql);
		query.setFirstResult(offset);
		query.setMaxResults(length);
		List<T> list = query.list();
		tx.commit();
		return list;
	}
}