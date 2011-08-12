package com.study.innerClass.FunInnerClass.Parcel10.test12;

public class Test9Class {
	//使用匿名内部类实现
	public Test9Interface fun(){
		return new Test9Interface(){
			public String fun() {
				return "InnerClassImpTest9Interface";
			}
		};
	}
}
