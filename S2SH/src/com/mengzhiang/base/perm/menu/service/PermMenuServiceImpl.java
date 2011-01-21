package com.mengzhiang.base.perm.menu.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mengzhiang.base.dao.PaginationSupport;
import com.mengzhiang.base.perm.menu.dao.PermMenuDao;
import com.mengzhiang.base.perm.menu.model.PermMenuEntity;


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
