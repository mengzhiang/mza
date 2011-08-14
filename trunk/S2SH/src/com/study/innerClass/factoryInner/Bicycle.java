package com.study.innerClass.factoryInner;

//其他类可以通过new创建这个类，为了统一接口，只能通过一种方法获得实例。
//不能new就用匿名的构造方法,但是匿名了，工厂就只能在Bicycle类内部。所以有了工厂类
//就像Service不能通过new来做，只能通过工厂来生产，通过Spring注入方法。
//Spring注入两种方式一种是构造器，还有其他方式
class Bicycle implements Vehicle{
	private  Bicycle(){}; 
	public void run() {
		System.out.println("Bicycle");
	}
	//外部无法创建Bicycle实例，所以也无法访问他的public方法，只能是static的方法
	public static Factory getFactory(){
		return new Factory(){
			public Vehicle make() {
				return new Bicycle();
			}
		};
	}
}
