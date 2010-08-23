package com.neusoft.base.action;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.neusoft.base.dao.PaginationSupport;
import com.neusoft.base.dao.QueryFilter;
import com.opensymphony.xwork2.ActionSupport;
@Controller
@Scope("prototype") 
public class BaseAction extends ActionSupport {
	
	/**
	 * 考虑分页的封装，不用makepage，这个在Action的所有方法被调用的前面都有一个
	 * 方法来完成读取Start和limit并放到一个上下文里pageContext，这个是线程安全的，
	 * 然后当dao的方法调用的时候，调用后吧这个分页给加上，这样代码中完全屏蔽了分页
	 * 的出现。
	 * 因为strust2的Action是单实例的，所以start和limit也是安全的，没有事
	 * 线程变量是方法级的。
	 * 
	 */
	private static final long serialVersionUID = 6819950691781984887L;
	private int start;
	private int limit;
	private String strJson;
	private boolean success;
	private String strFilter;
	private PaginationSupport paginationSupport;
	private QueryFilter queryFilter = new QueryFilter();

	public String getStrJson() {
		return strJson;
	}
	public void setStrJson(String strJson) {
		this.strJson = strJson;
	}

	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public String getStrFilter() {
		return strFilter;
	}
	public void setStrFilter(String strFilter) {
		this.strFilter = strFilter;
	}
	public PaginationSupport getPaginationSupport() {
		return paginationSupport;
	}
	public void setPaginationSupport(PaginationSupport paginationSupport) {
		this.paginationSupport = paginationSupport;
	}
	public int getStart() {
		return start;
	}
	public void setStart(int start) {
		this.start = start;
	}
	public int getLimit() {
		return limit;
	}
	public void setLimit(int limit) {
		this.limit = limit;
	}
	public QueryFilter getQueryFilter() {
		return queryFilter;
	}
	public void setQueryFilter(QueryFilter queryFilter) {
		this.queryFilter = queryFilter;
	}
}
