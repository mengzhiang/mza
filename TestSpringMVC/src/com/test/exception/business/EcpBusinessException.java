package com.test.exception.business;

import com.test.message.ExceptionMessage;

/**
 * 通用业务异常
 * 
 * @author mza
 *
 */
public class EcpBusinessException extends RuntimeException{
	
	public EcpBusinessException(ExceptionMessage exceptionMessage) {
		super();
		this.exceptionMessage = exceptionMessage;
	}

	protected ExceptionMessage exceptionMessage;

	public ExceptionMessage getExceptionMessage() {
		return exceptionMessage;
	}

	public void setExceptionMessage(ExceptionMessage exceptionMessage) {
		this.exceptionMessage = exceptionMessage;
	}

}
