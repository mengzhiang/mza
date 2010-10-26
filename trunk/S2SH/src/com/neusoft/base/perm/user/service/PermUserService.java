package com.neusoft.base.perm.user.service;

import java.util.List;

import com.neusoft.base.dao.PaginationSupport;
import com.neusoft.base.perm.user.model.PermUser;

public interface PermUserService {
	public PaginationSupport listpage(int startIndex,int pageSize);
	public void save(PermUser permuser);
	public PermUser getById(long id);
	public String delAll(List<PermUser> list);
	public boolean isUnique(PermUser permUser);
	public List<PermUser> findByProperty(String pro,Object value);
	public PaginationSupport getUserByRole(int startIndex,int pageSize);
}
