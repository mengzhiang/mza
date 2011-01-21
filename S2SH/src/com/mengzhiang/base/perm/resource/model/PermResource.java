package com.mengzhiang.base.perm.resource.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



/**
 * Created on 2010-8-9
 * <p>名称: S2SH工程-权限模块</p>
 * <p>描述: [权限资源Entity]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
*/
@Entity
@Table(name="t_perm_resources")
public class PermResource {
	//id
	private long id;
	//模块id
	private String modelid;
	//资源名称
	private String name;
	//资源码
	private String code;
	//资源类型
	private String reslx;
	//资源URL
	private String url;
	//类名
	private String classtype_name;
	//方法名
	private String method_name;
	//参数
	private String parametertype_names;
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	@Column
	public String getModelid() {
		return modelid;
	}
	public void setModelid(String modelid) {
		this.modelid = modelid;
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
	public String getReslx() {
		return reslx;
	}
	public void setReslx(String reslx) {
		this.reslx = reslx;
	}
	@Column
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	@Column
	public String getClasstype_name() {
		return classtype_name;
	}
	public void setClasstype_name(String classtypeName) {
		classtype_name = classtypeName;
	}
	@Column
	public String getMethod_name() {
		return method_name;
	}
	public void setMethod_name(String methodName) {
		method_name = methodName;
	}
	@Column
	public String getParametertype_names() {
		return parametertype_names;
	}
	public void setParametertype_names(String parametertypeNames) {
		parametertype_names = parametertypeNames;
	}

}
