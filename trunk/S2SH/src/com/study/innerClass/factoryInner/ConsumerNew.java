package com.study.innerClass.factoryInner;

public class ConsumerNew{
	public static void begin(Factory f){
		f.make();
	}
	public static void main(String[] args){
		begin(new CarFactory());
		begin(Bicycle.getFactory());
	}
}