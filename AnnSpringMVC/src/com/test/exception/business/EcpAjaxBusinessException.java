package com.test.exception.business;

import com.test.message.ExceptionMessage;

/**

 * @author mza
 *
 */
public class EcpAjaxBusinessException extends EcpBusinessException{
	public EcpAjaxBusinessException(){
		super();
	}
	public EcpAjaxBusinessException(String message){
		super(message);
	}
	
	public EcpAjaxBusinessException(String message,String detail){
		super(message,detail);
	}
	public EcpAjaxBusinessException(ExceptionMessage exceptionMessage) {
		super(exceptionMessage);
	}
}
