package com.mengzhiang.base.perm.resmodel.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mengzhiang.base.dao.PaginationSupport;
import com.mengzhiang.base.perm.resmodel.dao.PermResModelTreeDao;
import com.mengzhiang.base.perm.resmodel.model.PermResModelTreeEntity;
import com.mengzhiang.base.perm.resmodel.model.PermResModelTreeModel;
import com.mengzhiang.base.perm.resmodel.model.PermResMultiModelTreeModel;
import com.mengzhiang.base.perm.role.dao.PermRoleDao;
import com.mengzhiang.base.perm.role.model.PermRole;

//  更改“XXXX”为您的模块名成
@Service
public class PermResModelTreeServiceImpl implements PermResModelTreeService {
	@Resource
	private PermResModelTreeDao dao;

	public void setDao(PermResModelTreeDao dao) {
		this.dao = dao;
	}

	/**
	 * 注入角色dao
	 */
	@Resource
	private PermRoleDao roledao;

	public void setDao(PermRoleDao roledao) {
		this.roledao = roledao;
	}

	public PaginationSupport listpage(int startIndex, int pageSize) {
		return dao.findPageByCriteria(startIndex, pageSize);
	}

	public void save(PermResModelTreeEntity model) {
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
		List<PermResModelTreeModel> tmlist = geneTree(0, 0);
		return tmlist;
	}

	private List<PermResModelTreeModel> geneTree(int parentid, int level) {
		List<PermResModelTreeModel> treelist = new ArrayList<PermResModelTreeModel>();
		List<PermResModelTreeEntity> list = dao.findByProperty("parentid",
				parentid);
		for (PermResModelTreeEntity tree : list) {
			PermResModelTreeModel tm = new PermResModelTreeModel();
			tm.setId(tree.getId());
			tm.setText(tree.getName());
			tm.setUrl(tree.getCode());
			// 0非叶子节点1是叶子节点
			if (tree.getLeaf() == 0) {
				tm.setLeaf(false);
				tm.setChildren(geneTree(Integer.parseInt(Long.toString(tree
						.getId())), level + 1));
			} else {
				tm.setLeaf(true);
			}
			treelist.add(tm);
		}
		return treelist;
	}

	/**
	 * Created on 2010-12-28
	 * Description:[通过角色id查询资源树信息]
	 * 
	 * @author:孟志昂
	 * @email: mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 */
	public List<PermResMultiModelTreeModel> getMuTree(long roleid) {
		Set<PermResModelTreeEntity> resset = new HashSet<PermResModelTreeEntity>();
		PermRole role = roledao.get(roleid);
		if(role!=null){
			 resset = role.getPermResModelTreeEntity();
		}
		
		List<PermResMultiModelTreeModel> tmlist = geneMuTree(0, 0, resset);
		return tmlist;
	}

	/**
	 * Created on 2010-12-29
	 * Description:[递归多选资源树]
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param parentid
	 * @param level
	 * @param resset
	 * @return
	 */
	private List<PermResMultiModelTreeModel> geneMuTree(int parentid,
			int level, Set<PermResModelTreeEntity> resset) {
		List<PermResMultiModelTreeModel> treelist = new ArrayList<PermResMultiModelTreeModel>();
		List<PermResModelTreeEntity> list = dao.findByProperty("parentid",
				parentid);
		for (PermResModelTreeEntity tree : list) {
			PermResMultiModelTreeModel tm = new PermResMultiModelTreeModel();
			tm.setId(tree.getId());
			tm.setText(tree.getName());
			tm.setUrl(tree.getCode());
			// 如果角色资源包含该资源则设置选中
			if (resset.contains(tree)) {
				tm.setChecked(true);
			} else {
				tm.setChecked(false);
			}
			// 0非叶子节点1是叶子节点
			if (tree.getLeaf() == 0) {
				tm.setLeaf(false);
				tm.setChildren(geneMuTree(Integer.parseInt(Long.toString(tree
						.getId())), level + 1, resset));
			} else {
				tm.setLeaf(true);
			}
			treelist.add(tm);
		}
		return treelist;
	}
}
