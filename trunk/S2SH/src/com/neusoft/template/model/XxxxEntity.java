package com.neusoft.template.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


//1：更改“XXXX” 为您的实体名
//2：更改“table_name”为您的表名
//3：增加 您需要的属性和get。set方法。（别忘了主键的设置）

@Entity
@Table(name="table_name")
public class XxxxEntity {

	private long id;

	private String username;

	private String password;

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
	
}
