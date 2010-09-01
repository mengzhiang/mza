package com.neusoft.base.perm.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.neusoft.base.dao.PaginationSupport;
import com.neusoft.base.perm.dao.PermMenuDao;
import com.neusoft.base.perm.model.PermMenuEntity;

//  更改“XXXX”为您的模块名成
@Service
public class PermMenuServiceImpl implements PermMenuService{
	@Resource
	private PermMenuDao dao;

	public void setDao(PermMenuDao dao) {
		this.dao = dao;
	}
	public PaginationSupport listpage(int startIndex,int pageSize) {
		return dao.findPageByCriteria(startIndex,pageSize);
	}
	public void save(PermMenuEntity model){
		dao.saveOrUpdate(model);
	}
	public PermMenuEntity getById(long id) {
		return dao.get(id);
	}
	public String delAll(List<PermMenuEntity> list) {
		dao.deleteAll(list);
		return "success";
	}
}
