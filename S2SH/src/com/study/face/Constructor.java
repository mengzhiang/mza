package com.study.face;

/**
 * @author 子弹哥
 * 
 */
public class Constructor {

	private int a, b, c;

	public void Constructor() {
		a = 3;
		b = 5;
		c = a + b;
	}

	public void test() {
		System.out.println("The value of c ：" + c);
	}

	public static void main(String[] args) {
		Constructor c = new Constructor();
		c.test();
	}
}
