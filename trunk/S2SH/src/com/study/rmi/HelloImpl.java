package com.study.rmi;

import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;

public class HelloImpl extends UnicastRemoteObject implements IHello{

	protected HelloImpl() throws RemoteException {
		super();
	}

	/**
	 * <p>Description:[字段功能描述]</p>
	 */
	private static final long serialVersionUID = -4693793002926584481L;

	@Override
	public String helloWorld() throws RemoteException {
		return "hello world！";
	}

}
