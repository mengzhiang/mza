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

	public EcpPageBusinessException(ExceptionMessage exceptionMessage) {
		super(exceptionMessage);
	}
	

}
