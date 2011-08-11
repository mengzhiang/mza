package com.study.innerClass.FunInnerClass;

import com.study.innerClass.Parcel.parcel4.Destination;

public class Parcle5 {
	public Destination destination(String dest){
		//在方法内定义一个类，这个类无论如何其他方法都无法访问
		class PDestination implements Destination{
			private String label;
			public PDestination(String whereTo){
				this.label = whereTo;
			}
			public void readLabel(){
				System.out.println(label);
			}
		}
		return new PDestination(dest);
	}
	
	public void fun2(){
		//同一个类其他方法中定义的内部类，其他方法都无法使用
		//PDestination pd = new PDestination();
	}
}
