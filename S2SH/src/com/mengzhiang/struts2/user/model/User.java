package com.mengzhiang.struts2.user.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;



@Entity
@Table(name="t_user")
@Cache(usage=CacheConcurrencyStrategy.READ_ONLY) 
public class User implements Comparable<User> , Serializable {
	/**
	 * <p>Description:[字段功能描述]</p>
	 */
	private static final long serialVersionUID = -5962036411376046216L;
	private long id;
	private String name;
	private String pwd;
	public User() {
		super();
	}
	
	public User(long id, String name, String pwd) {
		super();
		this.id = id;
		this.name = name;
		this.pwd = pwd;
	}
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
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	@Override
	public int compareTo(User u) {
		if(this.id>u.id){
			return -1;
		}if(this.id<u.id){
			return 1;
		}else{
			return 0;
		}
		
	}

}
