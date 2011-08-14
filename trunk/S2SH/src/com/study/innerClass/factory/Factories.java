package com.study.innerClass.factory;

/**
 * 问题：为什么需要工厂模式？
 * 答：刚开始大家都new来创建对象，很好。
 * 但是，后来要改，要把所有new 创建的A对象统统改为B对象。这时需要改很多地方。
 * 于是：大家把创建对象的任务交给了一个人，大家都从他那里拿对象，而不管创建具体的对象
 * ，只要这个对象有这个方法，能运行就行。这样，再改的话，只要改工厂一个方法就行了，
 * 其他地方不用管。
 * 以一种新的方式实现工厂类。
 * 特点：
 * 1：构造函数匿名，不能在外部创建对象
 * 2：因为构造函数匿名，所以工厂类必须在内内部。
 * 3：因为在外部无法创建对象。所以返回工厂的方式只能是类方法或者类属性。
 * 优点：
 * 1：不需要单独的工厂类，每个产品包含自己的工厂，
 * 像种子一样，我给你产品的一部分，你就能生产整个产品了 
 * 缺点：
 * 刚开始难以理解     
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
 */

//Service接口
interface Service {
	void method1();
	void method2();
}
//创建Service的工厂接口
interface ServiceFactory {
	Service getService();
}
//Service实现
class Implementation1 implements Service {
	private Implementation1() {
	}

	public void method1() {
		System.out.println("implements1 method1");
	}

	public void method2() {
		System.out.println("implements1 method2");
	};
	//自己包含工厂
	public static ServiceFactory factory = new ServiceFactory(){
		public Service getService(){
			return new Implementation1();
		}
	};

}

class Implementation2 implements Service {
	private Implementation2() {
	}

	public void method1() {
		System.out.println("implements2 method1");
	}

	public void method2() {
		System.out.println("implements2 method2");
	};
	
	public static ServiceFactory factory = new ServiceFactory(){
		public Service getService(){
			return new Implementation2();
		}
	};
}

class Factories {
	public static void serviceConsumer(ServiceFactory fact) {
		Service s = fact.getService();
		s.method1();
		s.method1();
	}

	public static void main(String[] args){
		serviceConsumer(Implementation1.factory);
		serviceConsumer(Implementation2.factory);
	}
}
