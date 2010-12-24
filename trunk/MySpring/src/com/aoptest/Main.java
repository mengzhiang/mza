package com.aoptest;

public class Main {


	public static void main(String[] args) {
		
		DynaProxy proxyfactory = new DynaProxy();
		//目标对象的代理
		IHello ih = (IHello)proxyfactory.getProxy(new Hello());
		ih.sayHello();
		
	}

}
