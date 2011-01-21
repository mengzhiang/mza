package com.mengzhiang.base.perm.resmodel.model;

import java.util.List;

public class PermResModelTreeModel {
	
	private long id;
	
	private String text;
	
	private String url;
	
	private boolean leaf;
	
	private List<PermResModelTreeModel> children;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public boolean isLeaf() {
		return leaf;
	}
	public void setLeaf(boolean leaf) {
		this.leaf = leaf;
	}
	public List<PermResModelTreeModel> getChildren() {
		return children;
	}
	public void setChildren(List<PermResModelTreeModel> children) {
		this.children = children;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
}
