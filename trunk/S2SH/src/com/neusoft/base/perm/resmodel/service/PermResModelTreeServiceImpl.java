package com.neusoft.base.perm.resmodel.service;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.neusoft.base.dao.PaginationSupport;
import com.neusoft.base.perm.resmodel.dao.PermResModelTreeDao;
import com.neusoft.base.perm.resmodel.model.PermResModelTreeEntity;
import com.neusoft.base.perm.resmodel.model.PermResModelTreeModel;

//  更改“XXXX”为您的模块名成
@Service
public class PermResModelTreeServiceImpl implements PermResModelTreeService{
	@Resource
	private PermResModelTreeDao dao;

	public void setDao(PermResModelTreeDao dao) {
		this.dao = dao;
	}
	
	public PaginationSupport listpage(int startIndex,int pageSize) {
		return dao.findPageByCriteria(startIndex,pageSize);
	}
	public void save(PermResModelTreeEntity model){
		dao.saveOrUpdate(model);
	}
	public String delAll(List<PermResModelTreeEntity> list) {
		dao.deleteAll(list);
		return "success";
	}
	public PermResModelTreeEntity getById(long id) {
		return dao.get(id);
	}
	public List<PermResModelTreeModel> getTree() {
		List<PermResModelTreeModel> tmlist = geneTree(0,0);
		return tmlist;
	}
	private List<PermResModelTreeModel> geneTree(int parentid,int level){
		List<PermResModelTreeModel> treelist = new ArrayList<PermResModelTreeModel>();
		List<PermResModelTreeEntity> list = dao.findByProperty("parentid", parentid);
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
