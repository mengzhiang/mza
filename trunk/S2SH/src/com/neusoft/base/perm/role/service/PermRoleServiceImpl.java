package com.neusoft.base.perm.role.service;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.neusoft.base.dao.PaginationSupport;
import com.neusoft.base.perm.role.dao.PermRoleDao;
import com.neusoft.base.perm.role.model.PermRole;
import com.neusoft.base.perm.role.model.PermRoleTreeModel;

//  更改“XXXX”为您的模块名成
@Service
public class PermRoleServiceImpl implements PermRoleService{
	@Resource
	private PermRoleDao dao;

	public void setDao(PermRoleDao dao) {
		this.dao = dao;
	}
	
	public PaginationSupport listpage(int startIndex,int pageSize) {
		return dao.findPageByCriteria(startIndex,pageSize);
	}
	public void save(PermRole model){
		dao.saveOrUpdate(model);
	}
	public String delAll(List<PermRole> list) {
		dao.deleteAll(list);
		return "success";
	}
	public PermRole getById(long id) {
		return dao.get(id);
	}
	
	public List<PermRoleTreeModel> getTree() {
		List<PermRoleTreeModel> tmlist = geneTree(0,0);
		return tmlist;
	}
	
	private List<PermRoleTreeModel> geneTree(long parentid,int level){
		List<PermRoleTreeModel> treelist = new ArrayList<PermRoleTreeModel>();
		List<PermRole> list = dao.findByProperty("parentid", (int)parentid);
		for(PermRole pr :list){
			PermRoleTreeModel prm = new PermRoleTreeModel();
			prm.setId(pr.getId());
			prm.setCode(pr.getCode());
			prm.setName(pr.getName());
			prm.setText(pr.getName());
			prm.setDetail(pr.getDetail());

			if(isleaf(pr.getId())){
				prm.setLeaf(true);
			}else{
				prm.setLeaf(false);
				prm.setChildren(geneTree(pr.getId(),0));
			}
			treelist.add(prm);
		}
		return treelist;
	}
	
	private boolean isleaf(long id){
		List<PermRole> list = dao.findByProperty("parentid",(int)id);
		if(list.size()>0){
			return false;
		}else{
			return true;
		}
	}
}
