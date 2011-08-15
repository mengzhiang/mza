package com.study.face;

 class Parent {

	public static String say() {
		return "parent static say";
	}

	public String say2() {
		return "parent say";
	}
}

 class Child extends Parent {
	public static String say() {
		return "child static say";
	}

	public String say2() {
		return "child say";
	}
}

/**
 * @author 子弹哥
 * 
 */
public class OverRideTest {

	public static void main(String[] args) {
		Parent p = new Child();
		System.out.println(p.say());
		System.out.println(p.say2());

	}

}
