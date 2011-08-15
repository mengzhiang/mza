package com.study.face;

public class FaceReady {
	public static void main(String[] args) {
		String x = "hello";
		String y = "world";
		String z = new String("helloworld");
		String a = "helloworld";
		System.out.println("x+y equals z:" + (x + y).equals(z));
		System.out.println("a == z:" + (a == z));
		System.out.println("x == hello:" + (x == "hello"));
		System.out.println("a == helloworld:" + (a == "hello" + "world"));
		System.out.println("a == x+y:" + (a == (x + y)));
	}
}
