package com.study.innerClass.nested.nested2;

public class TestNested2 {
	private static String OutStaticName="OutStaticName";
	private  String outName="OutName";
	//如果一个类被声明为static的，那这个类就不能访问其他外部的非静态方法和属性
	static class InnerClass{
		public String name;
		//静态内部类可以定义static的方法和属性
		//静态内部类可以访问外部类的属性
		public static String age;
		public  static String getOutNameStatic(){
			return OutStaticName;
		}
//		public String getOutName(){
//			return outName;
//		}
	}
}

