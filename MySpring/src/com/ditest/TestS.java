package com.ditest;

public class TestS {


	/**
	 *  Created on 2010-12-23 
	 * <p>Description:[测试自己写的spring]</p>
	 * @param
	 * @author 孟志昂 mengzha@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param args
	 */
	public static void main(String[] args) {
		MZABeanFactory factory = new MZABeanFactory("myspring.xml");
		HelloBean hello =(HelloBean)factory.get("hello");
		hello.sayHello();

	}

}
