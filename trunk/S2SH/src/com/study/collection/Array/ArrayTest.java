package com.study.collection.Array;

import java.lang.reflect.*;

public class ArrayTest {
	public static void main(String args[]) {
		int i_l1 = args.length; // 直接用数组对象的 length 属性
		int i_l2 = Array.getLength(args); // getLength() 是 Array 反射类的静态方法
		System.out.println("args.length   =   " + i_l1);
		System.out.println("Array.getLength(args)   =   " + i_l2);
	}
}
