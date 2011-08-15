package com.study.face;

/**
 * @author 子弹哥
 * 
 */
public class FowardReference {

	static int first = test();
	static int second = 2;

	static int test() {
		return second;
	}

	public static void main(String[] args) {
		System.out.println("first = " + first);
	}

}
