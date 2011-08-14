package com.study.innerClass.factory;

//交通工具接口
interface Vehicle {
	//接口所有的方法都是public的
	void run();
}
class Car implements Vehicle{
	public void run(){
		System.out.println("Car");
	}
} 
class Bicycle implements Vehicle{
	public void run() {
		System.out.println("Bicycle");
	}
}

//工厂接口
interface Factory{
	Vehicle make();
}
class CarFactory implements Factory{
	public Vehicle make(){
		System.out.println("Making Car");
		return new Car();
	}
}
class BicycleFactory implements Factory{
	public Vehicle make(){
		System.out.println("Making Bicycle");
		return new Bicycle();
	}
}

public class Consumer{
	public static void begin(Factory f){
		f.make();
	}
	public static void main(String[] args){
		begin(new CarFactory());
		begin(new BicycleFactory());
	}
}