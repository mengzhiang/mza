package com.study.face;

public class Test2 {
	private static void foo() {
		try {
			System.out.println("try");
			foo();
		} catch (Throwable e) {
			System.out.println("catch");
			foo();
		} finally {
			System.out.println("finally");
			foo();
		}
	}

	public static void main(String[] args) {
		foo();
	}
}
