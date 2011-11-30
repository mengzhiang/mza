package com.mengzhiang;

import javax.ejb.Remote;
import javax.ejb.Stateless;

@Stateless
@Remote
public class FirstEjbBean implements FirstEjb{
	public String sayHello(){
		return "hello";
	}
}
