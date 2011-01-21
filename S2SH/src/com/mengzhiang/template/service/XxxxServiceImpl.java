package com.mengzhiang.template.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mengzhiang.base.dao.PaginationSupport;
import com.mengzhiang.template.dao.XxxxDao;
import com.mengzhiang.template.model.XxxxEntity;

//  更改“XXXX”为您的模块名成
@Service
public class XxxxServiceImpl implements XxxxService{
	@Resource
	private XxxxDao dao;

	public void setDao(XxxxDao dao) {
		this.dao = dao;
	}
	public PaginationSupport listpage(int startIndex,int pageSize) {
		return dao.findPageByCriteria(startIndex,pageSize);
	}
	public void save(XxxxEntity model){
		dao.saveOrUpdate(model);
	}
	public XxxxEntity getById(long id) {
		return dao.get(id);
	}
	public String delAll(List<XxxxEntity> list) {
		dao.deleteAll(list);
		return "success";
	}
}
