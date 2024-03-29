package com.mengzhiang.base.perm.resmodel.service;

import java.util.List;

import com.mengzhiang.base.dao.PaginationSupport;
import com.mengzhiang.base.perm.resmodel.model.PermResModelTreeEntity;
import com.mengzhiang.base.perm.resmodel.model.PermResModelTreeModel;
import com.mengzhiang.base.perm.resmodel.model.PermResMultiModelTreeModel;

//1：更改 “XXXX”为您的模块名称

public interface PermResModelTreeService {
	public PaginationSupport listpage(int startIndex,int pageSize);
	public void save(PermResModelTreeEntity model);
	public PermResModelTreeEntity getById(long id);
	public String delAll(List<PermResModelTreeEntity> list);
	public List<PermResModelTreeModel> getTree();
	public List<PermResMultiModelTreeModel> getMuTree(long sid);
}
