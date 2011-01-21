package com.mengzhiang.base.perm.resmodel.model;

import java.util.List;

/**
 * Created on 2010-10-23
 * <p>名称: S2SH工程-用户模块</p>
 * <p>描述: [多选树]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
*/
public class PermResMultiModelTreeModel {
	
	private long id;
	
	private String text;
	
	private String url;
	
	private boolean leaf;
	
	private boolean checked;
	
	private List<PermResMultiModelTreeModel> children;
	
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
	public List<PermResMultiModelTreeModel> getChildren() {
		return children;
	}
	public void setChildren(List<PermResMultiModelTreeModel> children) {
		this.children = children;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public boolean isChecked() {
		return checked;
	}
	public void setChecked(boolean checked) {
		this.checked = checked;
	}
}
