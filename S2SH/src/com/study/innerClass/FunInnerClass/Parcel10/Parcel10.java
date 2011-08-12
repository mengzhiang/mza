package com.study.innerClass.FunInnerClass.Parcel10;

import com.study.innerClass.Parcel.parcel4.Destination;

public class Parcel10 {
	public void test(){};
	public Destination destination(final String dest, final float price) {
		// 可以初始化参数的内部类，前提是参数都是final类型
		return new Destination() {
			private int cost;
			//实例化操作来初始化类，不能用构造器，ifelse判断
			{
				cost = Math.round(price);
				System.out.println(cost);
				if (cost > 100) {
					System.out.println("Over budget!");
				}
			}
			private String label = dest;

			public String readLabel() {
				return label;
			}
		};
	}
}
