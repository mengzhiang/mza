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

	public EcpPageBusinessException(ExceptionMessage exceptionMessage) {
		super(exceptionMessage);
	}
	

}
