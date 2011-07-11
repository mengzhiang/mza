package com.study;

import java.util.ArrayList;
import java.util.List;

public class OverRideTestTwo extends OverRideTest {

	/**
	 *  Created on 2011-6-29 
	 * <p>Description:[方法功能中文描述]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param args
	 */
	public static void main(String[] args) {
		

	}

	public String test(){
		return "123";
	}
	//子类覆盖父类方法不能更改返回值类型。OverLoad可以。
//	public List test(){
//		return new ArrayList();
//	}
}
