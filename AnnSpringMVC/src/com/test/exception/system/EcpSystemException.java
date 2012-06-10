package com.test.exception.system;

import java.io.FileNotFoundException;
import java.io.PrintStream;

import com.test.message.ExceptionMessage;


public class EcpSystemException extends Exception{
	
	public EcpSystemException(Exception exception) {
		super();
		String messge ="系统正在维护，请稍候！";
		String s = "";
		try {
			PrintStream stream ;
			stream = new PrintStream(s);
			exception.printStackTrace(stream);
		} catch (FileNotFoundException e) {
			//file not found
		}
		this.exceptionMessage = new ExceptionMessage(messge,exception.toString()+s);
	}
	
	protected ExceptionMessage exceptionMessage;

	public ExceptionMessage getExceptionMessage() {
		return exceptionMessage;
	}

	public void setExceptionMessage(ExceptionMessage exceptionMessage) {
		this.exceptionMessage = exceptionMessage;
	}
}
