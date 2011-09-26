package com.study.init;

public class Singleton2 {
	private Singleton2(){};
	//当类加载时就初始化一个Singleton2的对象。
	//也可以当请求的时候再初始化。
	//private static Singleton2 s2 = new Singleton2();
	private static Singleton2 s2;
	//如何返回单例的问题。
	//1：方法返回，只能是静态方法，因为外部没有办法创建单例实例。
	public static Singleton2 getSingleton2(){
		//return new Singleton2();这样每次返回一个对象就不是单例了。只能返回一个。
		//因为返回方法是静态的，所以返回的s2也必须是静态的。
		//延迟加载，当真正需要的时候再初始化s2；
		if(s2==null){
			s2 = new Singleton2();
		}
		return s2;
	}
}
