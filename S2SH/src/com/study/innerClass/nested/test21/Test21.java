package com.study.innerClass.nested.test21;

public interface Test21 {
	 String test();
	 class NestedClass {
		static void rettest(Test21 t){
			System.out.println(t.test());
		}
	}
}
