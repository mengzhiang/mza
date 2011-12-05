package com.study.rmi;

import java.net.MalformedURLException;
import java.rmi.Naming;
import java.rmi.NotBoundException;
import java.rmi.RemoteException;

public class HelloClient {

	/**
	 *  Created on 2011-12-5 
	 * <p>Description:[方法功能中文描述]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param args
	 */
	public static void main(String[] args) {
		try {
			IHello ihello = (IHello) Naming.lookup("rmi://localhost:1099/RHello");
			System.out.println(ihello.helloWorld());
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (RemoteException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (NotBoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		

	}

}
