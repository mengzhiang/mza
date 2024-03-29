package com.mengzhiang.base.service;

import java.util.List;

import com.mengzhiang.base.dao.PaginationSupport;

public interface BaseService {
	public PaginationSupport listpage(int startIndex,int pageSize);
	public void save(Object o);
	public Object getById(long id);
	public String delAll(List list);
}
