package com.neusoft.base.perm.role.model;

import java.util.List;
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

import com.neusoft.base.perm.resource.model.PermResource;
import com.neusoft.base.perm.user.model.PermUser;



/**
 * Created on 2010-8-9
 * <p>名称: S2SH工程-权限模块</p>
 * <p>描述: [角色Entity]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
 * 
 * 把关系的维护都放在role这里，role负责他和资源，角色之间的关系
 * 1：新增一个用户，增加角色，新增用户，然后找到这个角色，
 *     给这个角色的用户set加上这个用户，然后保存这个角色，不能直接给用户set加上这个角色是不能保存的。
 * 2：新增一个资源，是一样的，总之就是关系的维护方都在角色一段，只有保存角色信息才能维护他们之间的关系。
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
	//父节点
	private int parentid;
	//number
	private int number;
	//资源
    private Set<PermResource> permResources; 
	//用户
    private Set<PermUser> permUser; 
    
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
	@Column
	public int getParentid() {
		return parentid;
	}
	public void setParentid(int parentid) {
		this.parentid = parentid;
	}
	@Column
	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}
	/**
	 CascadeType.MERGE 表示联动修改
	 CascadeType.PERSIST 表示联动新增
	 */
	@ManyToMany(
			targetEntity=com.neusoft.base.perm.resource.model.PermResource.class,  
			cascade={CascadeType.MERGE,CascadeType.PERSIST}       
			   )  
	@JoinTable(
			name="t_perm_role_and_resources",  
			joinColumns={@JoinColumn(name="roleid")},//  
			inverseJoinColumns={@JoinColumn(name="resid")}  
			  ) 
	public Set<PermResource> getPermResources() {
		return permResources;
	}
	public void setPermResources(Set<PermResource> permResources) {
		this.permResources = permResources;
	}
	
	@ManyToMany(
			targetEntity=com.neusoft.base.perm.user.model.PermUser.class,  
			cascade={CascadeType.MERGE,CascadeType.PERSIST}       
			   )  
	@JoinTable(
			name="t_perm_user_and_role",  
			joinColumns={@JoinColumn(name="roleid")},  
			inverseJoinColumns={@JoinColumn(name="userid")}  
			  ) 
	public Set<PermUser> getPermUser() {
		return permUser;
	}
	public void setPermUser(Set<PermUser> permUser) {
		this.permUser = permUser;
	}
}
