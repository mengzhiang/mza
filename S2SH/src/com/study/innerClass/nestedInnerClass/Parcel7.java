package com.study.innerClass.nestedInnerClass;

import com.study.innerClass.Parcel.parcel4.Contents;

public class Parcel7 {
	/**
	 * 类似于js中创建匿名函数
	 * return new function(){
	 * 
	 * }
	 * 不同之处在于Contents是一个public的上层接口。
	 * 你可以在new Contents里随便实现。
	 * 而这个实现是一个类，没有名字只有接口名字的类
	 */
	public Contents content(){
		return new Contents(){
			String s ="";
		};
	}
}
