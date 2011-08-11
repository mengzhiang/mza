package com.study.innerClass.Parcel.test6.pack3;

import com.study.innerClass.Parcel.test6.pack1.Interface1;
import com.study.innerClass.Parcel.test6.pack2.Class2;

public class Class3 extends Class2{
	public void fun4(){
		Class2 c2 = new Class2();
		c2.fun1();
		//要在子类中调用父类中的方法，如果不在一个包中只能使用super方式。
		//c2.fun2();
		super.fun2();
	}
	public Interface1 fun5(){
		//内部类不适用与继承访问protected方法，但适用于同一个包下访问protected方法
		//所以不同包下继承也没办法访问内部类，只能通过访问父类的protected返回内部类实例来获得父类中的内部类
		//return new InerClass();
		return super.fun2();
	}
}
