package com.neusoft.base.action;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.neusoft.base.dao.Page;
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
	/**
	 * 设置分页。初始化分页对象
	 * @param pageNumber
	 * @param total
	 * @param pageSize
	 * @param ListStep
	 * @return
	 */
	public Page<Object> makePager(String pageNumber, int total, int pageSize,
			int ListStep) {
		Page<Object> Page = new Page<Object>();
		// 设置总数
		Page.setTotalCount(total);
		// 设置每页显示多少数据
		Page.setPageSize(limit);
		Page.setStart(start);
		return Page;
	}
	/**
	 * 设置分页。初始化分页对象
	 * @param pageNumber
	 * @param total
	 * @param pageSize
	 * @param ListStep
	 * @return
	 */
	public Page<Object> makePager() {
		Page<Object> Page = new Page<Object>();
		Page.setPageSize(limit);
		Page.setStart(start);
		return Page;
	}
}
