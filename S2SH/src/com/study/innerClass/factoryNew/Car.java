package com.study.innerClass.factoryNew;

public class Car implements Vehicle {

	public void run(){
		System.out.println("Car");
	}
	public static Factory factory = new Factory(){
		public Vehicle make(){
			System.out.println("Making Car");
			return new Car();
		}
	};

}
