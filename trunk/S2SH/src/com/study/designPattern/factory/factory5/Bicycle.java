package com.study.designPattern.factory.factory5;

public class Bicycle implements Vehicle {
	private Bicycle(){};
	public void run() {
	}
	public static Factory factory = new Factory(){

		public Vehicle make() {
			return new Bicycle();
		}
		
	};
}
