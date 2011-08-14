package com.study.innerClass.factoryNew;

class BicycleFactory implements Factory{
	public Vehicle make(){
		System.out.println("Making Bicycle");
		return new Bicycle();
	}
}
