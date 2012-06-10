package com.test.message;

/**
 * 错误提示信息
 * @author mza
 *
 */
public class ExceptionMessage {
	
	public ExceptionMessage(String message, String detail) {
		super();
		this.message = message;
		this.detail = detail;
	}
	//给用户看的提示信息
	private String message;
	//给开发人员看的详细错误信息（默认隐藏）
	private String detail;
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
	
}
