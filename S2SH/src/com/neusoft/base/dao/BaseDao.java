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

/**
 * Created on 2010-7-30
 * <p>名称: S2SH工程-用户模块--基础Dao</p>
 * <p>描述: [描述该类概要功能介绍]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * 这里使用泛型Dao,当baseDao被实例化的时候就
 * 通过他的父类的参数类型来决定了这个Dao的entityClass是谁？
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
*/
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
	
	/**
	 *  Created on 2010-7-29 
	 * <p>Description:[保存方法]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param entity
	 */
	public void save(final T entity) {
		Session session = getSession();
		Transaction tx = session.beginTransaction();
		session.saveOrUpdate(entity);
		tx.commit();
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
	       // tx.commit();
	        return criteria;
	    }

	/**
	 *  Created on 2010-7-29 
	 * <p>Description:[获取所有记录数]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param hql
	 * @return
	 */
	public int getAllRowCount(String hql){
		Session session = getSession();
		Transaction tx = session.beginTransaction();
		Query query = session.createQuery(hql);
		int count = query.list().size();
		tx.commit();
		return count;
	}
	
	/**
	 *  Created on 2010-7-29 
	 * <p>Description:[公共分页查询方法]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param hql
	 * @param offset
	 * @param length
	 * @return
	 */
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
	
    /**
     *  Created on 2010-7-29 
     * <p>Description:[通过ID获取entity]</p>
     * @author 孟志昂 mengzhiang@gmail.com
     * @update:[日期YYYY-MM-DD] [更改人姓名]
     * @param id
     * @return
     */
    public T get(final PK id) {
        Session session = getSession();
		Transaction tx = session.beginTransaction();
		T t = (T)session.load(entityClass, id);
		//tx.commit();
        return  t;      
    }
    /**
     *  Created on 2010-7-30 
     * <p>Description:[删除对象]</p>
     * @author 孟志昂 mengzhiang@gmail.com
     * @update:[日期YYYY-MM-DD] [更改人姓名]
     * @param entity
     */
    public void del(final T entity){
    	Session session = getSession();
    	Transaction tx = session.beginTransaction();
    	session.delete(entity);
    	tx.commit();
    }
}
