package com.mengzhiang.template.service;

import java.util.List;

import com.mengzhiang.base.dao.PaginationSupport;
import com.mengzhiang.template.model.XxxxEntity;

//1：更改 “XXXX”为您的模块名称

public interface XxxxService {
	public PaginationSupport listpage(int startIndex,int pageSize);
	public void save(XxxxEntity model);
	public XxxxEntity getById(long id);
	public String delAll(List<XxxxEntity> list);
}
