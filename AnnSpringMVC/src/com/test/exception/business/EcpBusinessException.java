package com.test.exception.business;

import com.test.message.ExceptionMessage;

/**
* common business exception
 * @author mza
 *
 */
public class EcpBusinessException extends RuntimeException{
	
	private static final long serialVersionUID = -2044343593998763991L;

	public EcpBusinessException(){

	}
	public EcpBusinessException(String message){
		ExceptionMessage exceptionMessage = new ExceptionMessage(message,null);
		this.exceptionMessage = exceptionMessage;
	}
	
	public EcpBusinessException(String message,String detail){
		ExceptionMessage exceptionMessage = new ExceptionMessage(message,detail);
		this.exceptionMessage = exceptionMessage;
	}
	
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
