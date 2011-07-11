package com.study;

public class OverRideTest {

	/**
	 *  Created on 2011-6-29 
	 * <p>Description:[方法功能中文描述]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param args
	 */
	public static void main(String[] args) {
		OverRideTest ort = new OverRideTest();
		System.out.println(ort.test());
		System.out.println(ort.test("one parameter"));
		System.out.println(ort.test("one","two"));
		System.out.println(ort.test(123123));
	}
	
	public String test(){
		return "no parameter";
	}
	
	public String test(String s){
		return s;
	}
	
	public String test(String s,String s1){
		return s+s1;
	}
	
	public long test(long l){
		return l;
	}
}
