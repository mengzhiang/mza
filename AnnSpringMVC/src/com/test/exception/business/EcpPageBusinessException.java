package com.test.exception.business;

import com.test.message.ExceptionMessage;

/**
 * ҳ����תҵ���쳣
 * ��ת������error.jspҳ�棬
 * Ĭ����ʾmessage
 * �򿪵��Ժ���ʾdetail
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
