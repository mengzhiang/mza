package com.study;

public class SimpleTypeTest {

	/**
	 *  Created on 2011-2-24 
	 * <p>Description:[学习JAVA基本数据类型]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param args
	 */
	public static void main(String[] args) {
		//常用的基本数据类型，分为实数，整数，字符和布尔值
		//实数类型
		//float 4 字节 32位浮点数
		//double 8 字节 64位浮点数
		//整数类型
		//byte 1字节 -128到127 
		//short 2 字节 -32,768到32,767 
		//int 4 字节 -2,147,483,648到2,147,483,647 
		//long 8 字节 -9,223,372,036,854,775,808到9,223,372,036, 854,775,807 
		//字符类型
		//char 2 字节 整个Unicode字符集 
		//布尔值
		//boolean 1 位 True或者false 

		//int四个字节，一个字节是8位 总共32位就是32个0或1，所以范围就是2的32次方 -2,147,483,648~2,147,483,647 ，
		//00000000，00000000，00000000，00000000
		
		System.out.println("int的最大值为："+Integer.toBinaryString(2147483647));
		System.out.println("int的最小值为："+Integer.toBinaryString(-2147483648));
		System.out.println(Integer.MAX_VALUE);
		System.out.println(Integer.MIN_VALUE);

		System.out.println(Long.MAX_VALUE);
		System.out.println(Long.MIN_VALUE);
		int i=2147483647;
		long l=333333333 ;
		double d;
		long s = i*l;
		System.out.println(s);

	}

}
