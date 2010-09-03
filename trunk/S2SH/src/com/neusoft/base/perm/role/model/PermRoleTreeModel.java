package com.neusoft.base.perm.role.model;

import java.util.List;

public class PermRoleTreeModel {
	//id
	private long id;
	//角色名称
	private String name;
	//角色编码
	private String code;
	//角色说明
	private String detail;
	//父节点
	private int parentid;
	//number
	private int number;
	
	private String text;
    
	private boolean leaf;
	
	private List<PermRoleTreeModel> children;

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}

	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}

	public int getParentid() {
		return parentid;
	}
	public void setParentid(int parentid) {
		this.parentid = parentid;
	}

	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}
	public boolean isLeaf() {
		return leaf;
	}
	public void setLeaf(boolean leaf) {
		this.leaf = leaf;
	}
	public List<PermRoleTreeModel> getChildren() {
		return children;
	}
	public void setChildren(List<PermRoleTreeModel> children) {
		this.children = children;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	
}
