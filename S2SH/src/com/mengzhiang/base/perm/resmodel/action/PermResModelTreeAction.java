package com.mengzhiang.base.perm.resmodel.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.mengzhiang.base.action.BaseAction;
import com.mengzhiang.base.perm.resmodel.model.PermResModelTreeEntity;
import com.mengzhiang.base.perm.resmodel.model.PermResModelTreeModel;
import com.mengzhiang.base.perm.resmodel.model.PermResMultiModelTreeModel;
import com.mengzhiang.base.perm.resmodel.service.PermResModelTreeService;
import com.mengzhiang.base.utils.JsonUtil;
import com.opensymphony.xwork2.ModelDriven;




/**
 * Created on 2010-12-21
 * <p>名称: S2SH工程-用户模块</p>
 * <p>描述: [资源管理 树]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
*/
@Controller
@Scope("prototype")
public class PermResModelTreeAction extends BaseAction implements ModelDriven<PermResModelTreeEntity> {

	private static final long serialVersionUID = 6386120048313640262L;
	private PermResModelTreeEntity permResModelTreeEntity = new PermResModelTreeEntity();// 这里要手动new一下
	
	private List<PermResModelTreeEntity> list;
	private long sid;
	
	private List<PermResModelTreeModel> tree;
	private List<PermResMultiModelTreeModel> mutree;
	
	
	@Resource
	private PermResModelTreeService service;

	public void setService(PermResModelTreeService service) {
		this.service = service;
	}

	@Override
	public String execute() {
		return SUCCESS;
	}

	/**
	 * 返回tree
	 * 
	 * @return
	 */
	public String querytree() {
		tree = service.getTree();
		return SUCCESS;
	}
	
	/**
	 * 返回多选tree
	 * 
	 * @return
	 */
	public String queryMuTree() {
		mutree = service.getMuTree(sid);
		return SUCCESS;
	}
	
	public String listpage() {
		this.setPaginationSupport(service.listpage(this.getStart(), this
				.getLimit()));
		this.setSuccess(true);
		return SUCCESS;
	}

	public String load() {
		permResModelTreeEntity = service.getById(sid);
		return SUCCESS;
	}

	public String save() {
		service.save(permResModelTreeEntity);
		this.setSuccess(true);
		return SUCCESS;
	}
	
	public String delAll() {
		JsonUtil.jsonToObject(this.getStrJson(), this);
		service.delAll(this.getList());
		return SUCCESS;
	}

	public long getSid() {
		return sid;
	}

	public void setSid(long sid) {
		this.sid = sid;
	}
	
	public PermResModelTreeEntity getPermResModelTreeEntity() {
		return permResModelTreeEntity;
	}

	public void setPermResModelTreeEntity(
			PermResModelTreeEntity permResModelTreeEntity) {
		this.permResModelTreeEntity = permResModelTreeEntity;
	}

	public List<PermResModelTreeEntity> getList() {
		return list;
	}

	public void setList(List<PermResModelTreeEntity> list) {
		this.list = list;
	}

	public List<PermResModelTreeModel> getTree() {
		return tree;
	}

	public void setTree(List<PermResModelTreeModel> tree) {
		this.tree = tree;
	}

	public List<PermResMultiModelTreeModel> getMutree() {
		return mutree;
	}

	public void setMutree(List<PermResMultiModelTreeModel> mutree) {
		this.mutree = mutree;
	}

	public PermResModelTreeEntity getModel() {
		return permResModelTreeEntity;
	}
}
