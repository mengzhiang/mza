package com.neusoft.base.perm.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



/**
 * Created on 2010-8-9
 * <p>名称: S2SH工程-权限模块</p>
 * <p>描述: [角色Entity]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
*/
@Entity
@Table(name="t_perm_role")
public class PermRole {
	//id
	private long id;
	//角色名称
	private String name;
	//角色编码
	private String code;
	//角色说明
	private String detail;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
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
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
	
}
