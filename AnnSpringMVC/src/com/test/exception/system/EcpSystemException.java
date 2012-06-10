package com.test.exception.system;

import java.io.FileNotFoundException;
import java.io.PrintStream;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.test.message.ExceptionMessage;


public class EcpSystemException extends Exception{

	protected final Log logger = LogFactory.getLog(getClass());
	
	private static final long serialVersionUID = -132411326354318110L;

	public EcpSystemException(Exception exception) {
		super();
		String messge ="系统正在维护，请稍候！";

			//print stackTrace to string
			//exception.printStackTrace();
			
		this.exceptionMessage = new ExceptionMessage(messge,exception.toString());
	}
	
	protected ExceptionMessage exceptionMessage;

	public ExceptionMessage getExceptionMessage() {
		return exceptionMessage;
	}

	public void setExceptionMessage(ExceptionMessage exceptionMessage) {
		this.exceptionMessage = exceptionMessage;
	}
}
