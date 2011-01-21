package com.mengzhiang.base.perm.resource.service;

import java.util.List;

import com.mengzhiang.base.dao.PaginationSupport;
import com.mengzhiang.base.perm.resource.model.PermResource;

//1：更改 “XXXX”为您的模块名称

public interface PermResService {
	public PaginationSupport listpage(int startIndex,int pageSize);
	public void save(PermResource model);
	public PermResource getById(long id);
	public String delAll(List<PermResource> list);
}
