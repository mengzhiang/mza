package com.study.innerClass.Parcel.test6.pack2;

import com.study.innerClass.Parcel.test6.pack1.Interface1;

public class Class2 {
	protected class InerClass implements Interface1{
		public void function1() {}
	}
	public void fun1(){};
	protected Interface1 fun2(){
		return new InerClass();
	};
	private void fun3(){};
}
