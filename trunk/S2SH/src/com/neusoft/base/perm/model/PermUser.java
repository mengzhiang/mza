package com.neusoft.base.perm.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
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
@Table(name="t_perm_user")
public class PermUser {
	//id
	private long id;
	//用户名称
	private String username;
	//用户密码
	private String password;
	//用户说明
	private String detail;

	//角色
    private Set<PermRole> permRole; 
    
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
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	@Column
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Column
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
	
	@ManyToMany(
			cascade = {CascadeType.PERSIST, CascadeType.MERGE }, 
			mappedBy="permUser",//主控方交给role，由role来维护中间表。
			targetEntity=com.neusoft.base.perm.model.PermRole.class
				) 
	public Set<PermRole> getPermRole() {
		return permRole;
	}
	public void setPermRole(Set<PermRole> permRole) {
		this.permRole = permRole;
	}
	
}
