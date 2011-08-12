package com.study.innerClass.FunInnerClass.Parcel9;

import com.study.innerClass.Parcel.parcel4.Destination;

public class Parcel9 {
	public Destination destination(final String dest){
		//传进来的dest是不可修改的。可以防止进方法之后其他地方修改。
		//dest ="test";
		//可以给匿名内部类初始化参数
		//在内部类中使用的外部参数必须被声明式final的。
		return new Destination(){
			private String label = dest;
			public String readLabel(){
				return label;
			}
		};
	}
}
