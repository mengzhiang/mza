package com.study.innerClass.Parcel.test6.pack2;

import com.study.innerClass.Parcel.test6.pack1.Interface1;

public class Class3 {
	public void fun4(){
		Class2 c2 = new Class2();
		c2.fun1();
		Class2.InerClass i1 = c2.new InerClass();
		//要在子类中调用父类中的方法，如果不在一个包中只能使用super方式。
		//c2.fun2();
	}
	protected Interface1 fun5(){
		//同一个包中就可以访问内部类
		Class2 c2 = new Class2();
		c2.fun1();
		Class2.InerClass i1 = c2.new InerClass();
		return i1;
	}
}
