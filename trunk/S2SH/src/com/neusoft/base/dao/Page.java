package com.neusoft.base.dao;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;


public class Page<T> {
    //-- 公共变量 --//
    public static final String ASC = "asc";
    public static final String DESC = "desc";

    protected int start = 0;
    //-- 分页参数 --//
    protected int pageNo = 1;
    protected int pageSize = 1;
    protected String orderBy = null;
    protected String order = null;
    protected boolean autoCount = true;

    //-- 返回结果 --//
    protected List<T> result =  new ArrayList<T>();
    protected long totalCount = -1;

    //-- 构造函数 --//
    public Page() {
    }

    public Page(int pageSize) {
        this.pageSize = pageSize;
    }

    //-- 访问查询参数函数 --//
    
    public int getPageNo() {
        return pageNo;
    }

    
    /**
     * 设置某一页
     * @param pageNo
     */
    public void setPageNo(final int pageNo) {
        this.pageNo = pageNo;

        if (pageNo < 1) {
            this.pageNo = 1;
        }
    }

    /**
     * 设置那一页，并返回page对象
     * @param thePageNo
     * @return
     */
    public Page<T> pageNo(final int thePageNo) {
        setPageNo(thePageNo);
        return this;
    }

    
    /**
     * 得到每页多少条
     * @return
     */
    public int getPageSize() {
        return pageSize;
    }

    
    /**
     * 设置每页多少条
     * @param pageSize
     */
    public void setPageSize(final int pageSize) {
        this.pageSize = pageSize;

        if (pageSize < 1) {
            this.pageSize = 1;
        }
    }

    /**
     * 设置每页多少条并返回page对象
     * @param thePageSize
     * @return
     */
    public Page<T> pageSize(final int thePageSize) {
        setPageSize(thePageSize);
        return this;
    }

    
    /**
     * 得到当前页的第一条记录
     * @return
     */
    public int getFirst() {
        return ((pageNo - 1) * pageSize) + 1;
    }

    
    /**
     * 得到按什么排序
     * @return
     */
    public String getOrderBy() {
        return orderBy;
    }

    
    /**
     * 设置排序
     * @param orderBy
     */
    public void setOrderBy(final String orderBy) {
        this.orderBy = orderBy;
    }

    /**
     * 设置排序并返回Page
     * @param theOrderBy
     * @return
     */
    public Page<T> orderBy(final String theOrderBy) {
        setOrderBy(theOrderBy);
        return this;
    }

    
    /**
     * 得到排序
     * @return
     */
    public String getOrder() {
        return order;
    }

    
    /**
     * 设置排序
     * @param order
     */
    public void setOrder(final String order) {
        //检查order字符串的合法值
        String[] orders = StringUtils.split(StringUtils.lowerCase(order), ',');
        for (String orderStr : orders) {
            if (!StringUtils.equals(DESC, orderStr) && !StringUtils.equals(ASC, orderStr)) {
                throw new IllegalArgumentException("排序方向" + orderStr + "不是合法值");
            }
        }

        this.order = StringUtils.lowerCase(order);
    }

    /**
     * 设置排序
     * @param theOrder
     * @return
     */
    public Page<T> order(final String theOrder) {
        setOrder(theOrder);
        return this;
    }

    
    /**
     * 是否被设置排序
     * @return
     */
    public boolean isOrderBySetted() {
        return (StringUtils.isNotBlank(orderBy) && StringUtils.isNotBlank(order));
    }

    
    /**
     * 是否自动计数
     * @return
     */
    public boolean isAutoCount() {
        return autoCount;
    }

    
    /**
     * 设置自动计数
     * @param autoCount
     */
    public void setAutoCount(final boolean autoCount) {
        this.autoCount = autoCount;
    }

    /**
     * 设置自动计数
     * @param theAutoCount
     * @return
     */
    public Page<T> autoCount(final boolean theAutoCount) {
        setAutoCount(theAutoCount);
        return this;
    }

    //-- 访问查询结果函数 --//

    
    public List<T> getResult() {
        return result;
    }

    
    /**
     * 设置result
     * @param result
     */
    public void setResult(final List<T> result) {
        this.result = result;
    }

    
    /**
     * 得到总条数
     * @return
     */
    public long getTotalCount() {
        return totalCount;
    }

    
    /**
     * 设置总条数
     * @param totalCount
     */
    public void setTotalCount(final long totalCount) {
        this.totalCount = totalCount;
    }
    
    /**
     * 得到总共多少页
     * @return
     */
    public long getTotalPages() {
        if (totalCount < 0) {
            return -1;
        }

        long count = totalCount / pageSize;
        if (totalCount % pageSize > 0) {
            count++;
        }
        return count;
    }

    /**
     * 是否有下一页
     * @return
     */
    public boolean isHasNext() {
        return (pageNo + 1 <= getTotalPages());
    }

    
    /**
     * 获取下一页
     * @return
     */
    public int getNextPage() {
        if (isHasNext()) {
            return pageNo + 1;
        } else {
            return pageNo;
        }
    }

    /**
     * 是否还有上一页
     * @return
     */
    public boolean isHasPre() {
        return (pageNo - 1 >= 1);
    }

    /**
     * 获取上一页
     */
    public int getPrePage() {
        if (isHasPre()) {
            return pageNo - 1;
        } else {
            return pageNo;
        }
    }

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}
}

