package com.study.innerClass.nestedInnerClass;

import com.study.innerClass.Parcel.parcel4.Contents;

public class Parcel7Two {
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
		class MyContents implements Contents{}
		return new MyContents();
		/**
		 * 因为MyContents是一次性的，几乎不需要名字
		 * 所以可以简写成
		 * return new Contents(){
		 * 
		 * }
		 * 相当于一个构造函数
		 */
	}
}
