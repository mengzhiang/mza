package com.study.init;

public class Singleton {
	private static Singleton single;
	//私有的构造方法，保证不会在方法外出现另一个实例
	private Singleton(){
	
	}
	//类加载的时候静态初始化
	static {
		single = new Singleton();
	}
	//返回单例的方法
	public static Singleton getSingleton(){
		return single;
	}
}
