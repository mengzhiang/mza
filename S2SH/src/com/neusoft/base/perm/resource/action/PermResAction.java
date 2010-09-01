package com.neusoft.base.perm.resource.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.neusoft.base.action.BaseAction;
import com.neusoft.base.perm.resource.model.PermResModelTreeModel;
import com.neusoft.base.perm.resource.model.PermResource;
import com.neusoft.base.perm.resource.service.PermResService;
import com.neusoft.base.utils.JsonUtil;
import com.opensymphony.xwork2.ModelDriven;

//更改XXXX为模块名称


@Controller
@Scope("prototype")
public class PermResAction extends BaseAction implements ModelDriven<PermResource> {

	private static final long serialVersionUID = 6386120048313640262L;
	private PermResource permResource = new PermResource();// 这里要手动new一下
	
	private List<PermResource> list;
	private long sid;
	
	private List<PermResModelTreeModel> tree;
	
	@Resource
	private PermResService service;

	public void setService(PermResService service) {
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
	
	public String listpage() {
		this.setPaginationSupport(service.listpage(this.getStart(), this
				.getLimit()));
		this.setSuccess(true);
		return SUCCESS;
	}

	public String load() {
		permResource = service.getById(sid);
		return SUCCESS;
	}

	public String save() {
		service.save(permResource);
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
	
	public PermResource getPermResource() {
		return permResource;
	}

	public void setPermResource(PermResource permResource) {
		this.permResource = permResource;
	}

	public List<PermResource> getList() {
		return list;
	}

	public void setList(List<PermResource> list) {
		this.list = list;
	}
	
	public List<PermResModelTreeModel> getTree() {
		return tree;
	}

	public void setTree(List<PermResModelTreeModel> tree) {
		this.tree = tree;
	}


	public PermResource getModel() {
		return permResource;
	}
}
