package com.study.innerClass.Parcel.test7;

public class Test7 {
	private String prip;
	private void prifun(){};
	
	class InnerClass{
		private String inerp;
		void inerfun(){
			prip ="prip";
			prifun();
		}
	}
	//内部类可以访问外部类的private属性，外部类可以构造内部类，并返回内部类，这样可以访问属性。
	public void pubfun(){
		InnerClass in = new InnerClass();
		in.inerfun();
		//外部类可以访问内部类的private属性。
		in.inerp = "123";
	}
}
