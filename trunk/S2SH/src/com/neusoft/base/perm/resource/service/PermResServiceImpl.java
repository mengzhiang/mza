package com.neusoft.base.perm.resource.service;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.neusoft.base.dao.PaginationSupport;
import com.neusoft.base.perm.resource.dao.PermResModelTreeDao;
import com.neusoft.base.perm.resource.dao.PermResourceDao;
import com.neusoft.base.perm.resource.model.PermResModelTreeEntity;
import com.neusoft.base.perm.resource.model.PermResModelTreeModel;
import com.neusoft.base.perm.resource.model.PermResource;

//  更改“XXXX”为您的模块名成
@Service
public class PermResServiceImpl implements PermResService{
	@Resource
	private PermResourceDao dao;

	public void setDao(PermResourceDao dao) {
		this.dao = dao;
	}
	
	@Resource
	private PermResModelTreeDao tmdao;
	
	public void setTmdao(PermResModelTreeDao tmdao) {
		this.tmdao = tmdao;
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
	public List<PermResModelTreeModel> getTree() {
		List<PermResModelTreeModel> tmlist = geneTree(0,0);
		return tmlist;
	}
	private List<PermResModelTreeModel> geneTree(int parentid,int level){
		List<PermResModelTreeModel> treelist = new ArrayList<PermResModelTreeModel>();
		List<PermResModelTreeEntity> list = tmdao.findByProperty("parentid", parentid);
		for(PermResModelTreeEntity tree :list){
			PermResModelTreeModel tm = new PermResModelTreeModel();
			tm.setId(tree.getId());
			tm.setText(tree.getName());
			tm.setUrl(tree.getCode());
			//0非叶子节点1是叶子节点
			if(tree.getLeaf()==0){
				tm.setLeaf(false);
				tm.setChildren(geneTree(Integer.parseInt(Long.toString(tree.getId())),level+1));
			}else{
				tm.setLeaf(true);
			}
			treelist.add(tm);
		}
		return treelist;
	}
}
