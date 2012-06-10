package com.test.exception.business;

import com.test.message.ExceptionMessage;

/**

 * @author mza
 *
 */
public class EcpBusinessException extends RuntimeException{
	
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
