package com.test.exception.business;

import com.test.message.ExceptionMessage;

/**
 * ͨ��ҵ���쳣
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
