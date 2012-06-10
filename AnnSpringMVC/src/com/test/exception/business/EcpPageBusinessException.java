package com.test.exception.business;

import com.test.message.ExceptionMessage;

/**
 * page business exception
 * @author mza
 *
 */
public class EcpPageBusinessException extends EcpBusinessException{
	
	private static final long serialVersionUID = 4760443523616568248L;

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
