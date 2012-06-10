package com.test.exception.system;

import java.io.FileNotFoundException;
import java.io.PrintStream;

import com.test.message.ExceptionMessage;

/**
 * Ecpϵͳ�쳣
 * @author mza
 *
 */
public class EcpSystemException extends Exception{
	
	public EcpSystemException(Exception exception) {
		super();
		String s = "";
		try {
			PrintStream stream ;
			stream = new PrintStream(s);
			exception.printStackTrace(stream);
		} catch (FileNotFoundException e) {
			//file not found
		}
		this.exceptionMessage = new ExceptionMessage(exception.getMessage(),s);
	}
	
	protected ExceptionMessage exceptionMessage;

	public ExceptionMessage getExceptionMessage() {
		return exceptionMessage;
	}

	public void setExceptionMessage(ExceptionMessage exceptionMessage) {
		this.exceptionMessage = exceptionMessage;
	}
}
