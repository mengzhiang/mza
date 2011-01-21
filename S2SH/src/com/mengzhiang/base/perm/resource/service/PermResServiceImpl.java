package com.mengzhiang.base.perm.resource.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mengzhiang.base.dao.PaginationSupport;
import com.mengzhiang.base.perm.resource.dao.PermResourceDao;
import com.mengzhiang.base.perm.resource.model.PermResource;

//  更改“XXXX”为您的模块名成
@Service
public class PermResServiceImpl implements PermResService{
	@Resource
	private PermResourceDao dao;

	public void setDao(PermResourceDao dao) {
		this.dao = dao;
	}
	
	public PaginationSupport listpage(int startIndex,int pageSize) {
		return dao.findPageByCriteria(startIndex,pageSize);
	}
	public void save(PermResource model){
		dao.saveOrUpdate(model);
	}
	public String delAll(List<PermResource> list) {
		dao.deleteAll(list);
		return "success";
	}
	public PermResource getById(long id) {
		return dao.get(id);
	}
}
