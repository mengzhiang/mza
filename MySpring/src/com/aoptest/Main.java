package com.aoptest;

public class Main {


	public static void main(String[] args) {
		
		DynaProxy proxyfactory = new DynaProxy();
		//Ŀ�����Ĵ���
		IHello ih = (IHello)proxyfactory.getProxy(new Hello());
		ih.sayHello();
		
	}

}
