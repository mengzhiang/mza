package com.study.rmi;

import java.rmi.Naming;
import java.rmi.registry.LocateRegistry;

public class HelloServer {
	public  static void main(String[] args){
		try{
			IHello rhello = new HelloImpl();
			LocateRegistry.createRegistry(1099);
			Naming.bind("rmi://localhost:1099/RHello", rhello);
			 System.out.println(">>>>>INFO:远程IHello对象绑定成功！"); 
			}catch(Exception e){
				e.printStackTrace();
			}
	}

}

