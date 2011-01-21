package com.mengzhiang.template.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.mengzhiang.base.action.BaseAction;
import com.mengzhiang.base.utils.JsonUtil;
import com.mengzhiang.template.model.XxxxEntity;
import com.mengzhiang.template.service.XxxxService;
import com.opensymphony.xwork2.ModelDriven;

//更改XXXX为模块名称

@Controller
@Scope("prototype")
public class XxxxAction extends BaseAction implements ModelDriven<XxxxEntity> {

	private static final long serialVersionUID = 6386120048313640262L;
	private XxxxEntity entity = new XxxxEntity();// 这里要手动new一下
	private List<XxxxEntity> list;
	private long sid;

	@Resource
	private XxxxService service;

	public void setService(XxxxService service) {
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
		entity = service.getById(sid);
		return SUCCESS;
	}

	public String save() {
		service.save(entity);
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

	public XxxxEntity getEntity() {
		return entity;
	}

	public void setEntity(XxxxEntity entity) {
		this.entity = entity;
	}

	public List<XxxxEntity> getList() {
		return list;
	}

	public void setList(List<XxxxEntity> list) {
		this.list = list;
	}

	public XxxxEntity getModel() {
		return null;
	}
}
