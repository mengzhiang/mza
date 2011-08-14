package com.study.designPattern.factory.factory4;

//这个就是单例模式
//1:构造方法私有，只能通过此类的静态方法返回对象实例。
//2:对象只创建一次，以后都用这个对象
//3:问题，多线程状态下会有问题。
public class ElectroCarFactory implements Factory{
	private static ElectroCarFactory electroCarFactory;
	private ElectroCarFactory(){};
	public Vehicle make() {
		return new EletroCar();
	}
	public static ElectroCarFactory getInstance(){
		if(electroCarFactory==null){
			electroCarFactory = new ElectroCarFactory();
		}
		return electroCarFactory;
	}
}
