package com.study.innerClass.FunInnerClass.test9;

import junit.framework.TestCase;

public class TestTest10Class extends TestCase {
	public void testTest9Class(){
		Test10Class t10c = new Test10Class();
		assertNotNull(t10c.fun(true));
		assertNull(t10c.fun(false));
	}
}
