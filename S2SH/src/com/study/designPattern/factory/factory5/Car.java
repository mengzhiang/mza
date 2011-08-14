package com.study.designPattern.factory.factory5;

public class Car implements Vehicle {
	private Car(){};
	public void run() {
	}
	public static Factory factory = new Factory(){
		public Vehicle make() {
			return new Car();
		}
	};
}
