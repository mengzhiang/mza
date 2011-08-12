package com.study.innerClass.FunInnerClass.Parcel10.test15;

public class Test15 {
	public Test15Class getTest15(final int i){
		return new Test15Class(i){
			
		};
	}
	public Test15Class getTest15(){
		return new Test15Class(){
			
		};
	}
}
