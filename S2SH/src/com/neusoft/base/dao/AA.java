//import java.io.Serializable;
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Map;
//
//import org.apache.commons.lang.StringUtils;
//import org.hibernate.Criteria;
//import org.hibernate.Query;
//import org.hibernate.SessionFactory;
//import org.hibernate.criterion.CriteriaSpecification;
//import org.hibernate.criterion.Criterion;
//import org.hibernate.criterion.Disjunction;
//import org.hibernate.criterion.MatchMode;
//import org.hibernate.criterion.Order;
//import org.hibernate.criterion.Projection;
//import org.hibernate.criterion.Projections;
//import org.hibernate.criterion.Restrictions;
//import org.hibernate.impl.CriteriaImpl;
//import org.hibernate.transform.ResultTransformer;
//import org.springframework.util.Assert;
//import org.springframework.util.ReflectionUtils;
//
//
//public class HibernateDao<T, PK extends Serializable> extends SimpleHibernateDao<T, PK> {
//    
//    public HibernateDao() {
//        super();
//    }
//
//    
//    public HibernateDao(final SessionFactory sessionFactory, final Class<T> entityClass) {
//        super(sessionFactory, entityClass);
//    }
//
//    //-- 分页查询函数 --//
//    
//    public Page<T> getAll(final Page<T> page) {
//        return findPage(page);
//    }
//
//    
//    @SuppressWarnings("unchecked")
//    public Page<T> findPage(final Page<T> page, final String hql, final Object... values) {
//        Assert.notNull(page, "page不能为空");
//
//        Query q = createQuery(hql, values);
//
//        if (page.isAutoCount()) {
//            long totalCount = countHqlResult(hql, values);
//            page.setTotalCount(totalCount);
//        }
//
//        setPageParameter(q, page);
//        List result = q.list();
//        page.setResult(result);
//        return page;
//    }
//
//    
//    @SuppressWarnings("unchecked")
//    public Page<T> findPage(final Page<T> page, final String hql, final Map<String, ?> values) {
//        Assert.notNull(page, "page不能为空");
//
//        Query q = createQuery(hql, values);
//
//        if (page.isAutoCount()) {
//            long totalCount = countHqlResult(hql, values);
//            page.setTotalCount(totalCount);
//        }
//
//        setPageParameter(q, page);
//
//        List result = q.list();
//        page.setResult(result);
//        return page;
//    }
//
//    
//    @SuppressWarnings("unchecked")
//    public Page<T> findPage(final Page<T> page, final Criterion... criterions) {
//        Assert.notNull(page, "page不能为空");
//
//        Criteria c = createCriteria(criterions);
//
//        if (page.isAutoCount()) {
//            int totalCount = countCriteriaResult(c);
//            page.setTotalCount(totalCount);
//        }
//
//        setPageParameter(c, page);
//        List result = c.list();
//        page.setResult(result);
//        return page;
//    }
//
//    
//    protected Query setPageParameter(final Query q, final Page<T> page) {
//        //hibernate的firstResult的序号从0开始
//        q.setFirstResult(page.getFirst() - 1);
//        q.setMaxResults(page.getPageSize());
//        return q;
//    }
//
//    
//    protected Criteria setPageParameter(final Criteria c, final Page<T> page) {
//        //hibernate的firstResult的序号从0开始
//        c.setFirstResult(page.getFirst() - 1);
//        c.setMaxResults(page.getPageSize());
//
//        if (page.isOrderBySetted()) {
//            String[] orderByArray = StringUtils.split(page.getOrderBy(), ',');
//            String[] orderArray = StringUtils.split(page.getOrder(), ',');
//
//            Assert.isTrue(orderByArray.length == orderArray.length, "分页多重排序参数中,排序字段与排序方向的个数不相等");
//
//            for (int i = 0; i < orderByArray.length; i++) {
//                if (Page.ASC.equals(orderArray[i])) {
//                    c.addOrder(Order.asc(orderByArray[i]));
//                } else {
//                    c.addOrder(Order.desc(orderByArray[i]));
//                }
//            }
//        }
//        return c;
//    }
//
//    
//    protected long countHqlResult(final String hql, final Object... values) {
//        String fromHql = hql;
//        //select子句与order by子句会影响count查询,进行简单的排除.
//        fromHql = "from " + StringUtils.substringAfter(fromHql, "from");
//        fromHql = StringUtils.substringBefore(fromHql, "order by");
//
//        String countHql = "select count(*) " + fromHql;
//
//        try {
//            Long count = findUnique(countHql, values);
//            return count;
//        } catch (Exception e) {
//            throw new RuntimeException("hql can't be auto count, hql is:" + countHql, e);
//        }
//    }
//
//    
//    protected long countHqlResult(final String hql, final Map<String, ?> values) {
//        String fromHql = hql;
//        //select子句与order by子句会影响count查询,进行简单的排除.
//        fromHql = "from " + StringUtils.substringAfter(fromHql, "from");
//        fromHql = StringUtils.substringBefore(fromHql, "order by");
//
//        String countHql = "select count(*) " + fromHql;
//
//        try {
//            Long count = findUnique(countHql, values);
//            return count;
//        } catch (Exception e) {
//            throw new RuntimeException("hql can't be auto count, hql is:" + countHql, e);
//        }
//    }
//
//    
//    @SuppressWarnings("unchecked")
//    protected int countCriteriaResult(final Criteria c) {
//        CriteriaImpl impl = (CriteriaImpl) c;
//
//        // 先把Projection、ResultTransformer、OrderBy取出来,清空三者后再执行Count操作
//        Projection projection = impl.getProjection();
//        ResultTransformer transformer = impl.getResultTransformer();
//
//        List<CriteriaImpl.OrderEntry> orderEntries = null;
//        try {
//            orderEntries = (List) ReflectionUtils.getFieldValue(impl, "orderEntries");
//            ReflectionUtils.setFieldValue(impl, "orderEntries", new ArrayList());
//        } catch (Exception e) {
//            logger.error("不可能抛出的异常:{}", e.getMessage());
//        }
//
//        // 执行Count查询
//        int totalCount = (Integer) c.setProjection(Projections.rowCount()).uniqueResult();
//
//        // 将之前的Projection,ResultTransformer和OrderBy条件重新设回去
//        c.setProjection(projection);
//
//        if (projection == null) {
//            c.setResultTransformer(CriteriaSpecification.ROOT_ENTITY);
//        }
//        if (transformer != null) {
//            c.setResultTransformer(transformer);
//        }
//        try {
//            ReflectionUtils.setFieldValue(impl, "orderEntries", orderEntries);
//        } catch (Exception e) {
//            logger.error("不可能抛出的异常:{}", e.getMessage());
//        }
//
//        return totalCount;
//    }
//
//    //-- 属性过滤条件(PropertyFilter)查询函数 --//
//
//    
//    public List<T> findBy(final String propertyName, final Object value, final MatchType matchType) {
//        Criterion criterion = buildPropertyFilterCriterion(propertyName, value, matchType);
//        return find(criterion);
//    }
//
//    
//    public List<T> find(List<PropertyFilter> filters) {
//        Criterion[] criterions = buildPropertyFilterCriterions(filters);
//        return find(criterions);
//    }
//
//    
//    public Page<T> findPage(final Page<T> page, final List<PropertyFilter> filters) {
//        Criterion[] criterions = buildPropertyFilterCriterions(filters);
//        return findPage(page, criterions);
//    }
//
//    
//    protected Criterion[] buildPropertyFilterCriterions(final List<PropertyFilter> filters) {
//        List<Criterion> criterionList = new ArrayList<Criterion>();
//        for (PropertyFilter filter : filters) {
//            if (!filter.isMultiProperty()) { //只有一个属性需要比较的情况.
//                Criterion criterion = buildPropertyFilterCriterion(filter.getPropertyName(), filter.getPropertyValue(),
//                        filter.getMatchType());
//                criterionList.add(criterion);
//            } else {//包含多个属性需要比较的情况,进行or处理.
//                Disjunction disjunction = Restrictions.disjunction();
//                for (String param : filter.getPropertyNames()) {
//                    Criterion criterion = buildPropertyFilterCriterion(param, filter.getPropertyValue(), filter
//                            .getMatchType());
//                    disjunction.add(criterion);
//                }
//                criterionList.add(disjunction);
//            }
//        }
//        return criterionList.toArray(new Criterion[criterionList.size()]);
//    }
//
//    
//    protected Criterion buildPropertyFilterCriterion(final String propertyName, final Object propertyValue,
//            final MatchType matchType) {
//        Assert.hasText(propertyName, "propertyName不能为空");
//        Criterion criterion = null;
//        try {
//
//            //根据MatchType构造criterion
//            if (MatchType.EQ.equals(matchType)) {
//                criterion = Restrictions.eq(propertyName, propertyValue);
//            } else if (MatchType.LIKE.equals(matchType)) {
//                criterion = Restrictions.like(propertyName, (String) propertyValue, MatchMode.ANYWHERE);
//            } else if (MatchType.LE.equals(matchType)) {
//                criterion = Restrictions.le(propertyName, propertyValue);
//            } else if (MatchType.LT.equals(matchType)) {
//                criterion = Restrictions.lt(propertyName, propertyValue);
//            } else if (MatchType.GE.equals(matchType)) {
//                criterion = Restrictions.ge(propertyName, propertyValue);
//            } else if (MatchType.GT.equals(matchType)) {
//                criterion = Restrictions.gt(propertyName, propertyValue);
//            }
//        } catch (Exception e) {
//            throw ReflectionUtils.convertReflectionExceptionToUnchecked(e);
//        }
//        return criterion;
//    }
//
//    
//    public boolean isPropertyUnique(final String propertyName, final Object newValue, final Object oldValue) {
//        if (newValue == null || newValue.equals(oldValue)) {
//            return true;
//        }
//        Object object = findUniqueBy(propertyName, newValue);
//        return (object == null);
//    }
//}