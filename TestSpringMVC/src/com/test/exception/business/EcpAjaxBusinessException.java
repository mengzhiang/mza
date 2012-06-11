package com.test.exception.business;

import com.test.message.ExceptionMessage;

/**
 * ajax请求返回的业务异常
 * 按UE要求就近提示
 * @author mza
 *
 */
public class EcpAjaxBusinessException extends EcpBusinessException{
	public EcpAjaxBusinessException(ExceptionMessage exceptionMessage) {
		super(exceptionMessage);
	}
}
