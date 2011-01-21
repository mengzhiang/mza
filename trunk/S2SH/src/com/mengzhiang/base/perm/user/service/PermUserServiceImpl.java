package com.mengzhiang.base.perm.user.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mengzhiang.base.dao.PaginationSupport;
import com.mengzhiang.base.perm.user.dao.PermUserDao;
import com.mengzhiang.base.perm.user.model.PermUser;


@Service
public class PermUserServiceImpl implements PermUserService{
	@Resource
	private PermUserDao dao;

	public void setDao(PermUserDao dao) {
		this.dao = dao;
	}
	public PaginationSupport listpage(int startIndex,int pageSize) {
		return dao.findPageByCriteria(startIndex,pageSize);
	}
	public void save(PermUser permuser){
		dao.saveOrUpdate(permuser);
	}
	public PermUser getById(long id) {
		return dao.get(id);
	}
	public String delAll(List<PermUser> list) {
		dao.deleteAll(list);
		return "success";
	}
	public boolean isUnique(PermUser permUser) {
		List<PermUser> list = dao.findByProperty("username", permUser.getUsername());
		if(list.size()>0){
			return false;
		}else{
			return true;
		}
	}
	public List<PermUser> findByProperty(String pro,Object value){
		return dao.findByProperty(pro, value);
	}
	public PaginationSupport getUserByRole(int startIndex,int pageSize){
		String hql ="from PermUser";
		Object[] values = new Object[2];
		values[1] = 1;
		return dao.findPageByQuery(hql, pageSize, startIndex, values);
	}
}
