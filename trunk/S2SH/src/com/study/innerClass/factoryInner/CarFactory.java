package com.study.innerClass.factoryInner;

public class CarFactory implements Factory {
	public Vehicle make() {
		return new Car();
	}
}
