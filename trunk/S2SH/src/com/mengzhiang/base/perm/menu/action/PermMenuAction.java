package com.mengzhiang.base.perm.menu.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.mengzhiang.base.action.BaseAction;
import com.mengzhiang.base.perm.menu.model.PermMenuEntity;
import com.mengzhiang.base.perm.menu.service.PermMenuService;
import com.mengzhiang.base.utils.JsonUtil;
import com.opensymphony.xwork2.ModelDriven;

//更改XXXX为模块名称


@Controller
@Scope("prototype")
public class PermMenuAction extends BaseAction implements ModelDriven<PermMenuEntity> {

	private static final long serialVersionUID = 6386120048313640262L;
	private PermMenuEntity permMenuEntity = new PermMenuEntity();// 这里要手动new一下
	
	private List<PermMenuEntity> list;
	private long sid;
	
	@Resource
	private PermMenuService service;

	public void setService(PermMenuService service) {
		this.service = service;
	}

	@Override
	public String execute() {
		return SUCCESS;
	}

	public String listpage() {
		this.setPaginationSupport(service.listpage(this.getStart(), this
				.getLimit()));
		this.setSuccess(true);
		return SUCCESS;
	}

	public String load() {
		permMenuEntity = service.getById(sid);
		return SUCCESS;
	}

	public String save() {
		service.save(permMenuEntity);
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
	
	public PermMenuEntity getPermMenuEntity() {
		return permMenuEntity;
	}

	public void setPermMenuEntity(PermMenuEntity permMenuEntity) {
		this.permMenuEntity = permMenuEntity;
	}


	public List<PermMenuEntity> getList() {
		return list;
	}

	public void setList(List<PermMenuEntity> list) {
		this.list = list;
	}

	public PermMenuEntity getModel() {
		return permMenuEntity;
	}
}
