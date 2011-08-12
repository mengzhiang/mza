package com.study.innerClass.FunInnerClass.Parcel10.test11;


public class Test7 {
	private String prip;
	private void prifun(){};
	

	//内部类可以访问外部类的private属性，外部类可以构造内部类，并返回内部类，这样可以访问属性。
	public InnerClass pubfun(){
		//创建匿名内部类的前提是必须有一个外部类匿名内部类的父类或者接口
		return new InnerClass(){
			private String inerp;
			void inerfun(){
				prip ="prip";
				prifun();
			}
		};
	}
}
