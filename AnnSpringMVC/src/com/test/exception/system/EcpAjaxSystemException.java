package com.test.exception.system;

import com.test.message.ExceptionMessage;

/**

 * @author mza
 *
 */
public class EcpAjaxSystemException extends EcpSystemException{

	public EcpAjaxSystemException(Exception exception) {
		super(exception);
	}
}
