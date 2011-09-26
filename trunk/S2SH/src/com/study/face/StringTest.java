package com.study.face;

public class StringTest {
	public static void main(String[] args){
		Object o1 = new Object();
		Object o2 = new Object();
		System.out.println(o1==o2);
		System.out.println(o1.equals(o2));
		String s1 = "test";
		String s2 = "test";
		String s3 = new String("test");
		System.out.println(s1==s3);
		System.out.println(s1.equals(s3));
		
	}
}
