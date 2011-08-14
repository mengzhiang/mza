package com.study.innerClass.nested.test21;

//接口内部的类默认是public和static的，可以用来存放够接口实现共享的公共代码
public interface Test21 {
	 String test();
	 class NestedClass {
		static void rettest(Test21 t){
			System.out.println(t.test());
		}
	}
}
