package com.mengzhiang.base.dao;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

import org.hibernate.criterion.DetachedCriteria;

public interface IBaseDao<T,PK extends Serializable> {

	// -------------------- 基本检索、增加、修改、删除操作 --------------------
	/**
	 * 获取全部实体
	 * @param criterions
	 * @return
	 */
	public List<T> loadAll();
	
	/**
	 *  Created on 2010-7-29 
	 * <p>Description:[保存实体]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param entity
	 */
	public void save(final T entity);
	
    /**
     *  Created on 2010-8-10 
     * <p>Description:[更新实体]</p>
     * @author 孟志昂 mengzhiang@gmail.com
     * @update:[日期YYYY-MM-DD] [更改人姓名]
     * @param entity
     */
    public void update(T entity);
    /**
     *  Created on 2010-8-10 
     * <p>Description:[增加或更新实体]</p>
     * @author 孟志昂 mengzhiang@gmail.com
     * @update:[日期YYYY-MM-DD] [更改人姓名]
     * @param entity
     */
    public void saveOrUpdate(T entity);
    /**
     *  Created on 2010-8-10 
     * <p>Description:[增加或更新集合中的全部实体]</p>
     * @author 孟志昂 mengzhiang@gmail.com
     * @update:[日期YYYY-MM-DD] [更改人姓名]
     * @param entities
     */
    public void saveOrUpdateAll(Collection<T> entities);
    /**
     *  Created on 2010-7-29 
     * <p>Description:[通过ID获取entity]</p>
     * @author 孟志昂 mengzhiang@gmail.com
     * @update:[日期YYYY-MM-DD] [更改人姓名]
     * @param id
     * @return
     */
	public T get(final PK id);
    /**
     *  Created on 2010-7-30 
     * <p>Description:[删除指定的实体]</p>
     * @author 孟志昂 mengzhiang@gmail.com
     * @update:[日期YYYY-MM-DD] [更改人姓名]
     * @param entity
     */
    public void delete(T entity);
    
    /**
     *  Created on 2010-8-10 
     * <p>Description:[删除集合中的全部实体]</p>
     * @author 孟志昂 mengzhiang@gmail.com
     * @update:[日期YYYY-MM-DD] [更改人姓名]
     * @param entities
     */
    public void deleteAll(Collection<T> entities);
	/**
	 *  Created on 2010-7-29 
	 * <p>Description:[获取所有记录数]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param hql
	 * @return
	 */
	public int getAllRowCount(String hql);

	/**
	 *  Created on 2010-7-29 
	 * <p>Description:[公共分页查询方法（两个参数，开始索引和显示条数）]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param hql
	 * @param offset
	 * @param length
	 * @return
	 */
	public PaginationSupport findPageByCriteria(int start,int limit);
	/**
	 *  Created on 2010-8-11 
	 * <p>Description:[条件查询]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param detachedCriteria
	 * @return
	 */
	public List<T> findPageByCriteria(final DetachedCriteria detachedCriteria);
	/**
	 *  Created on 2010-8-12 
	 * <p>Description:[根据单个属性查询]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param propertyname
	 * @param flag
	 * @param value
	 * @return
	 */
	public List<T> findByProperty(String propertyname,String flag,Object value);
    /** *//**  
     * 根据某个具体属性进行查找  
     */  
    public List<T> findByProperty(String propertyName, Object value);
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
	public PaginationSupport findByProperties(List<Parameter> list,int startIndex,int pageSize);
    /** *//**  
     * 根据hql加载分页，指定页大小和起始位置  
     */  
    public PaginationSupport findPageByQuery(final String hql, final int pageSize, final int startIndex, Object...values);
}
