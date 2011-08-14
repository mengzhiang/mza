package com.study.innerClass.nested.nested2;

import junit.framework.TestCase;

public class TestTestNested2 extends TestCase {
	public void testTestNested2(){
		TestNested2.InnerClass ic = new TestNested2.InnerClass();
		ic.age="12";
		assertEquals(ic.age,"12");
	}
}
