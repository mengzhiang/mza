package com.study.innerClass.FunInnerClass.Parcel8;

import com.study.innerClass.FunInnerClass.Wrapping;

public class Parcel8 {
	public Wrapping wrapping(int x){
		//匿名内部类继承了Wrapping类，
		//说明匿名内部类可以实现或者集成其他类
		//代码需要自己学过才能记住，如果只是背的话肯定会忘记的，
		return new Wrapping(x){
			public int value(){
				return super.value()*10;
			}
		};
	}
}
