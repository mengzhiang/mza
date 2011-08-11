package com.study.innerClass.FunInnerClass.test9;

import junit.framework.TestCase;

public class TestTest9Class extends TestCase {
	public void testTest9Class(){
		Test9Class t9c = new Test9Class();
		assertEquals(t9c.fun().fun(),"InnerClassImpTest9Interface");
	}
}
