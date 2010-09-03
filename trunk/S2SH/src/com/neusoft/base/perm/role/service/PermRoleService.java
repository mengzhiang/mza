package com.neusoft.base.perm.role.service;

import java.util.List;

import com.neusoft.base.dao.PaginationSupport;
import com.neusoft.base.perm.role.model.PermRole;
import com.neusoft.base.perm.role.model.PermRoleTreeModel;

//1：更改 “XXXX”为您的模块名称

public interface PermRoleService {
	public PaginationSupport listpage(int startIndex,int pageSize);
	public void save(PermRole model);
	public PermRole getById(long id);
	public String delAll(List<PermRole> list);
	public List<PermRoleTreeModel> getTree();
}
