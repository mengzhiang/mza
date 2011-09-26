package com.study.init;

public class Block {
	static int i;
	//无论创建多少个对象，这段代码只在类加载的时候执行一遍，可以用力单例模式
	static {
		i++;
		System.out.println("init i");
	}
	public static void main(String[] args){
		Block b1 = new Block();
		System.out.println(b1.i);
		Block b2 = new Block();
		System.out.println(b2.i);
	}
}
