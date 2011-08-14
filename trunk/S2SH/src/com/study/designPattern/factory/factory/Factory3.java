package com.study.designPattern.factory.factory;

public class Factory3 {
	public static Vehicle getVehicle(String name){
		if(name.equals("Car")){
			return new Car();
		}else{
			return new Bicycle();
		}
	}
}
