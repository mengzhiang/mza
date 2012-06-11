package com.test.exception.system;

import com.test.message.ExceptionMessage;

/**
 * ajax请求返回的系统异常
 * 弹出框提示
 * 
 * @author mza
 *
 */
public class EcpAjaxSystemException extends EcpSystemException{

	public EcpAjaxSystemException(Exception exception) {
		super(exception);
		// TODO Auto-generated constructor stub
	}
}
