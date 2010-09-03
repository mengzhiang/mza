package com.neusoft.base.perm.role.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.neusoft.base.action.BaseAction;
import com.neusoft.base.perm.role.model.PermRole;
import com.neusoft.base.perm.role.model.PermRoleTreeModel;
import com.neusoft.base.perm.role.service.PermRoleService;
import com.neusoft.base.utils.JsonUtil;
import com.opensymphony.xwork2.ModelDriven;

//更改XXXX为模块名称


@Controller
@Scope("prototype")
public class PermRoleAction extends BaseAction implements ModelDriven<PermRole> {

	private static final long serialVersionUID = 6386120048313640262L;
	private PermRole permRole = new PermRole();// 这里要手动new一下

	private List<PermRole> list;
	private long sid;
	
	private List<PermRoleTreeModel> tree;
	
	@Resource
	private PermRoleService service;

	public void setService(PermRoleService service) {
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
		permRole = service.getById(sid);
		return SUCCESS;
	}

	public String save() {
		service.save(permRole);
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
	
	public List<PermRole> getList() {
		return list;
	}

	public void setList(List<PermRole> list) {
		this.list = list;
	}

	public PermRole getModel() {
		return permRole;
	}

	public List<PermRoleTreeModel> getTree() {
		return tree;
	}

	public void setTree(List<PermRoleTreeModel> tree) {
		this.tree = tree;
	}
}
