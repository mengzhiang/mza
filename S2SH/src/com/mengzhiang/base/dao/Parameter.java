package com.mengzhiang.base.dao;

public class Parameter {

	public Parameter() {
	}
	private String name;
	private String value;
	private String type;
	private String condition;
	private String property;
	
	public Parameter(String value, String condition, String property) {
		this.value = value;
		this.condition = condition;
		this.property = property;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getCondition() {
		return condition;
	}

	public void setCondition(String condition) {
		this.condition = condition;
	}

	public String getProperty() {
		return property;
	}

	public void setProperty(String property) {
		this.property = property;
	}
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
