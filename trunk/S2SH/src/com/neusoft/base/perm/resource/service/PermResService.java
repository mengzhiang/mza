package com.neusoft.base.perm.resource.service;

import java.util.List;

import com.neusoft.base.dao.PaginationSupport;
import com.neusoft.base.perm.resource.model.PermResModelTreeModel;
import com.neusoft.base.perm.resource.model.PermResource;

//1：更改 “XXXX”为您的模块名称

public interface PermResService {
	public PaginationSupport listpage(int startIndex,int pageSize);
	public void save(PermResource model);
	public PermResource getById(long id);
	public String delAll(List<PermResource> list);
	public List<PermResModelTreeModel> getTree();
}
