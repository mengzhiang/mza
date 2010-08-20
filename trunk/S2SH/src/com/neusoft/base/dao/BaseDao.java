package com.neusoft.base.dao;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.CriteriaSpecification;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.HibernateTemplate;

/**
 * Created on 2010-7-30
 * <p>
 * 名称: S2SH工程-用户模块--基础Dao
 * </p>
 * <p>
 * 描述: [描述该类概要功能介绍]
 * </p>
 * <p>
 * 版本: Copyright (c) 2010
 * </p>
 * 
 * @author: 孟志昂 1:为什么不继承Spring的hibernateDaoSupport，
 *          答：因为hibernateDaoSupport本身没有注入SessionFactory
 *          ，如果你继承了hibernateDaoSupport你就要自己注入SessionFactory
 *          但是又不能和原来的方法名一样，所以只能按类型注入，然后aop的时候就会有问题，所以没有继承。
 *          另一种方法，Dao中注入hibernateTemplate
 *          ，因为HibernateDaoSupport核心就是hibernateTemplate，用也是用hibernateTemplate，
 *          继承hibernateDaoSupport就是为了得到hibernateTemplate
 *          ，所以就直接在我的Dao里注入这个hibernateTemplate就可以了，当然
 *          Spring的配置文件中需要加入这个hibernateTemplate的配置。 这里使用泛型Dao,当baseDao被实例化的时候就
 *          通过他的父类的参数类型来决定了这个Dao的entityClass是谁？
 * @email: mengzhiang@gmail.com
 * @version:$Revision$
 */
public class BaseDao<T, PK extends Serializable> implements IBaseDao<T, PK> {

	@Resource
	private HibernateTemplate hibernateTemplate;

	public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
		this.hibernateTemplate = hibernateTemplate;
	}

	public Class<T> entityClass;

	@SuppressWarnings("unchecked")
	public BaseDao() {
		// 得到
		this.entityClass = GenericsUtils.getSuperClassGenricType(this
				.getClass());
	}

	public void setEntityClass(Class<T> type) {
		this.entityClass = type;
	}

	// -------------------- 基本检索、增加、修改、删除操作 --------------------
	/**
	 * 获取全部实体
	 * 
	 * @param criterions
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<T> loadAll() {
		return (List<T>) hibernateTemplate.loadAll(entityClass);
	}

	/**
	 * Created on 2010-7-29
	 * <p>
	 * Description:[保存实体]
	 * </p>
	 * 
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param entity
	 */
	public void save(final T entity) {
		hibernateTemplate.save(entity);
	}

	/**
	 * Created on 2010-8-10
	 * <p>
	 * Description:[更新实体]
	 * </p>
	 * 
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param entity
	 */
	public void update(T entity) {
		hibernateTemplate.update(entity);
	}

	/**
	 * Created on 2010-8-10
	 * <p>
	 * Description:[增加或更新实体]
	 * </p>
	 * 
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param entity
	 */
	public void saveOrUpdate(T entity) {
		hibernateTemplate.saveOrUpdate(entity);
	}

	/**
	 * Created on 2010-8-10
	 * <p>
	 * Description:[增加或更新集合中的全部实体]
	 * </p>
	 * 
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param entities
	 */
	public void saveOrUpdateAll(Collection<T> entities) {
		hibernateTemplate.saveOrUpdateAll(entities);
	}

	/**
	 * Created on 2010-7-29
	 * <p>
	 * Description:[通过ID获取entity]
	 * </p>
	 * 
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param id
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public T get(final PK id) {
		return (T) hibernateTemplate.get(entityClass, id);

	}

	/**
	 * Created on 2010-7-30
	 * <p>
	 * Description:[删除指定的实体]
	 * </p>
	 * 
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param entity
	 */
	public void delete(T entity) {
		hibernateTemplate.delete(entity);
	}

	/**
	 * Created on 2010-8-10
	 * <p>
	 * Description:[删除集合中的全部实体]
	 * </p>
	 * 
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param entities
	 */
	public void deleteAll(Collection<T> entities) {
		hibernateTemplate.deleteAll(entities);
	}

	/**
	 * Created on 2010-7-29 Description:[获取所有记录数]
	 * 
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param hql
	 * @return
	 */
	public int getAllRowCount(String hql) {
		int count = hibernateTemplate.find(hql).size();
		return count;
	}

	
	/**
	 *  Created on 2010-8-19 
	 * <p>Description:[根据DetachedCriteria加载分页，指定页大小和起始位置]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param detachedCriteria
	 * @param pageSize
	 * @param startIndex
	 * @return
	 */
	public PaginationSupport findPageByCriteria(final DetachedCriteria detachedCriteria, final int pageSize, final int startIndex){      
        return (PaginationSupport)hibernateTemplate.executeWithNativeSession(new HibernateCallback(){      
            @SuppressWarnings("unchecked")
			public Object doInHibernate(Session session) throws HibernateException{      
                Criteria criteria = detachedCriteria.getExecutableCriteria(session);   
                int totalCount = ((Integer) criteria.setProjection(Projections.rowCount()).uniqueResult()).intValue();      
                criteria.setProjection(null);   
                List items = criteria.setFirstResult(startIndex).setMaxResults(pageSize).list();   
                items = transformResults(items);   
                PaginationSupport ps = new PaginationSupport(items, totalCount, pageSize, startIndex);      
                return ps;      
            }   
        });      
    }

	/**
	 * Created on 2010-7-29
	 * <p>
	 * Description:[公共分页查询方法（两个参数，开始索引和显示条数）]
	 * </p>
	 * 
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param start
	 *            开始索引
	 * @param limit
	 *            显示条数
	 * @return
	 */
	public PaginationSupport findPageByCriteria(int start, int limit) {
		DetachedCriteria dc = DetachedCriteria.forClass(entityClass);
		//如果线程变量里有过滤数据则加上，否则不加
		
		return this.findPageByCriteria(dc,limit,start);
	}

	/**
	 * Created on 2010-8-11
	 * <p>
	 * Description:[条件查询]
	 * </p>
	 * 
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param detachedCriteria
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<T> findPageByCriteria(final DetachedCriteria detachedCriteria) {
		return (List<T>) hibernateTemplate
				.executeWithNativeSession(new HibernateCallback() {
					public Object doInHibernate(Session session)
							throws HibernateException {
						Criteria criteria = detachedCriteria
								.getExecutableCriteria(session);
						List list = criteria.list();
						return list;
					}
				});

	}

	/**
	 * Created on 2010-8-12
	 * <p>
	 * Description:[根据单个属性查询]
	 * </p>
	 * 
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param propertyname
	 * @param flag
	 * @param value
	 * @return
	 */
	public List<T> findByProperty(String propertyname, String flag, Object value) {
		DetachedCriteria dc = DetachedCriteria.forClass(entityClass);
		if ("EQ".equals(flag)) {
			dc.add(Restrictions.eq(propertyname, value));
		}
		return findPageByCriteria(dc);
	}

	/** */
	/**
	 * 根据某个具体属性进行查找
	 */
	public List<T> findByProperty(String propertyName, Object value) {
		String queryString = "from " + entityClass.getName()
				+ " as model where model." + propertyName + "= ?";
		return (List<T>) hibernateTemplate.find(queryString, value);
	}

	/**
	 * Created on 2010-8-12
	 * <p>
	 * Description:[根据属性list查询]
	 * </p>
	 * 
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param propertyname
	 * @param flag
	 * @param value
	 * @return
	 */
	public PaginationSupport findByProperties(List<Parameter> list,int startIndex,int pageSize) {
		DetachedCriteria dc = this.buildFilterCriterion(list);
		return findPageByCriteria(dc,pageSize,startIndex);
	}
	
	/**
	 *  Created on 2010-8-19 
	 * <p>Description:[通过list构建查询]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param list
	 * @return
	 */
	public DetachedCriteria buildFilterCriterion(List<Parameter> list){
		DetachedCriteria dc = DetachedCriteria.forClass(entityClass);
		for (Parameter par : list) {
			Object value = new Object();
			String strValue = par.getValue();
			String property = par.getProperty();
			String type = par.getType();
			if ("long".equals(type)) {
				value = Long.parseLong(strValue);
			} else if ("int".equals(type)) {
				value = Integer.parseInt(strValue);
			} else{
				value = strValue;
			}
			if (Condition.MARK_EQUAL.equals(par.getCondition().trim())) {
				dc.add(Restrictions.eq(property, value));
			} else if (Condition.MARK_LIKE.equals(par.getCondition().trim())) {
				dc.add(Restrictions.like(property, value));
			} else if (Condition.MARK_LARGER.equals(par.getCondition().trim())) {
				dc.add(Restrictions.gt(property, value));
			} else if (Condition.MARK_SMALLER.equals(par.getCondition().trim())) {
				dc.add(Restrictions.lt(property, value));
			} else if (Condition.MARK_ELARGER.equals(par.getCondition().trim())) {
				dc.add(Restrictions.ge(property, value));
			} else if (Condition.MARK_ESMALLER
					.equals(par.getCondition().trim())) {
				dc.add(Restrictions.le(property, value));
			} else if (Condition.MARK_IN.equals(par.getCondition().trim())) {
				dc.add(Restrictions.in(property, par.getValue().split(",")));
			} else {

			}
		}
		return dc;
	}
    /** *//**  
     * 将联合查询的结果内容从Map或者Object[]转换为实体类型，如果没有转换必要则直接返回  
     */  
    @SuppressWarnings("unchecked")
	private List transformResults(List items){   
        if (items.size() > 0){   
            if (items.get(0) instanceof Map){   
                ArrayList list = new ArrayList(items.size());   
                for (int i = 0; i < items.size(); i++){   
                    Map map = (Map)items.get(i);   
                    list.add(map.get(CriteriaSpecification.ROOT_ALIAS));   
                }   
                return list;   
            } else if (items.get(0) instanceof Object[]){   
                ArrayList list = new ArrayList(items.size());   
                int pos = 0;   
                for (int i = 0; i < ((Object[])items.get(0)).length; i++){   
                    if (((Object[])items.get(0))[i].getClass() == entityClass){   
                        pos = i;   
                        break;   
                    }   
                }   
                for (int i = 0; i < items.size(); i++){   
                    list.add(((Object[])items.get(i))[pos]);   
                }   
                return list;   
            } else  
                return items;   
        } else  
            return items;   
    } 
}
