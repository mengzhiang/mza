package com.test.exception.business;

import com.test.message.ExceptionMessage;

/**
 * ajax���󷵻ص�ҵ���쳣
 * ��UEҪ��ͽ���ʾ
 * @author mza
 *
 */
public class EcpAjaxBusinessException extends EcpBusinessException{
	public EcpAjaxBusinessException(ExceptionMessage exceptionMessage) {
		super(exceptionMessage);
	}
}
