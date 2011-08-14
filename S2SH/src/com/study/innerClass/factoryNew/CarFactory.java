package com.study.innerClass.factoryNew;

public class CarFactory implements Factory {
	public Vehicle make() {
		return new Car();
	}
}
