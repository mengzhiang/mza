package com.ditest;

public class TestS {


	/**
	 *  Created on 2010-12-23 
	 * <p>Description:[�����Լ�д��spring]</p>
	 * @param
	 * @author ��־�� mengzha@gmail.com
	 * @update:[����YYYY-MM-DD] [����������]
	 * @param args
	 */
	public static void main(String[] args) {
		MZABeanFactory factory = new MZABeanFactory("myspring.xml");
		HelloBean hello =(HelloBean)factory.get("hello");
		hello.sayHello();

	}

}
