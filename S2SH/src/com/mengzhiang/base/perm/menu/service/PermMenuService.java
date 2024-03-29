package com.mengzhiang.base.perm.menu.service;

import java.util.List;

import com.mengzhiang.base.dao.PaginationSupport;
import com.mengzhiang.base.perm.menu.model.PermMenuEntity;



//1：更改 “XXXX”为您的模块名称

public interface PermMenuService {
	public PaginationSupport listpage(int startIndex,int pageSize);
	public void save(PermMenuEntity model);
	public PermMenuEntity getById(long id);
	public String delAll(List<PermMenuEntity> list);
}
