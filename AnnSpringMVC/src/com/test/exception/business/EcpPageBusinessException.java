package com.test.exception.business;

import com.test.message.ExceptionMessage;

/**
 * 页面跳转业务异常
 * 调转到公共error.jsp页面，
 * 默认显示message
 * 打开调试后显示detail
 * @author mza
 *
 */
public class EcpPageBusinessException extends EcpBusinessException{
	public EcpPageBusinessException(){
		super();
	}
	public EcpPageBusinessException(String message){
		super(message);
	}
	
	public EcpPageBusinessException(String message,String detail){
		super(message,detail);
	}
	
	public EcpPageBusinessException(ExceptionMessage exceptionMessage) {
		super(exceptionMessage);
	}
	

}
