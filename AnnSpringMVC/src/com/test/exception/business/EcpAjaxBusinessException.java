package com.test.exception.business;

import com.test.message.ExceptionMessage;

/**
 * ajax business exception
 * 
 * @author mza
 * 
 */
public class EcpAjaxBusinessException extends EcpBusinessException {

	private static final long serialVersionUID = 8753785346252212889L;

	public EcpAjaxBusinessException() {
		super();
	}

	public EcpAjaxBusinessException(String message) {
		super(message);
	}

	public EcpAjaxBusinessException(String message, String detail) {
		super(message, detail);
	}

	public EcpAjaxBusinessException(ExceptionMessage exceptionMessage) {
		super(exceptionMessage);
	}
}
