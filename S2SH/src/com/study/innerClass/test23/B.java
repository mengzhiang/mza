package com.study.innerClass.test23;

/**
 * @author: mengzhiang
*/
public class B {
	private   U[] items;
	public B(int length){
		items = new U[length];
	}
	private int i;
	public void add(U u){
		items[i++]=u;
	}
	public void setNull(int index){
		items[index] = null;
	}
	public void iterator(){
		for(int j=0;j<items.length;j++){
			U u = items[j];
			u.f1();
			u.f2();
			u.f3();
		}
	}
	public static void main(String[] args){
		//回调，A把对象交给了B，b来调用对象
		//像三个消息
		A a1 =new A();
		A a2 = new A();
		A a3 = new A();
		//消息队列
		B b = new B(3);
		//添加到消息队列中
		//其实添加到b中的不仅仅是一个对象，他是一个闭包他能访问包含他的对象
		b.add(a1.getU());
		b.add(a2.getU());
		b.add(a3.getU());
		//消息队列来执行消息内容
		b.iterator();
		
	}
}
