package com.study.innerClass.FunInnerClass.Parcel9;

public class AnonymousConstructor {
	{
		System.out.println("123");
	};
	public Base getBase(int i){
		return new Base(i){
			{System.out.println("inside instance initializer");}
			public void f() {
				System.out.println("in innerClass f()");
			}
		};
	}
}
