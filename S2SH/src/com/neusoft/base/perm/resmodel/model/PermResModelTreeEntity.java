package com.neusoft.base.perm.resmodel.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



/**
 * Created on 2010-8-11
 * <p>名称: S2SH工程-用户模块</p>
 * <p>描述: [树Entity]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
*/
@Entity
@Table(name="`t_perm_res_model_tree`")
public class PermResModelTreeEntity {
	private long id;
	private int parentid;
	private String name;
	private String code;
	private int number;
	private int leaf;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	@Column
	public int getParentid() {
		return parentid;
	}
	public void setParentid(int parentid) {
		this.parentid = parentid;
	}
	@Column
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Column
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	@Column
	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}
	@Column
	public int getLeaf() {
		return leaf;
	}
	public void setLeaf(int leaf) {
		this.leaf = leaf;
	}
	
}
