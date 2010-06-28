package com.neusoft.base.action;

import com.neusoft.base.dao.Page;
import com.opensymphony.xwork2.ActionSupport;

public class BaseAction extends ActionSupport {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 6819950691781984887L;

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
		Page.setPageSize(pageSize);

		return Page;
	}
}
