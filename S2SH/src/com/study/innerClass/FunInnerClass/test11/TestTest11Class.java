package com.study.innerClass.FunInnerClass.test11;

import junit.framework.TestCase;

public class TestTest11Class extends TestCase{
	public void testTest11Class(){
		Test11Class t11c = new Test11Class();
		Test11Interface t11i = t11c.fun();
		assertNotNull(t11i);
		//Test11ClassInnerClass对外不可见，不能向下转型
		//Test11ClassInnerClass t11cic = (Test11ClassInnerClass)t11i;
	}
}
