package com.study.designPattern.factory.factory4;

public class CarFactory implements Factory{
	private CarFactory(){};
	public Vehicle make() {
		return new Car();
	}
	public static Factory getInstance(){
		return new CarFactory();
	}
}
