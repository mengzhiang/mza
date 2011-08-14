package com.study.designPattern.factory.factory4;

public class BicycleFactory implements Factory {
	private BicycleFactory(){};
	public Vehicle make() {
		return new Bicycle();
	}
	public static Factory getInstance(){
		return new BicycleFactory();
	}
}
