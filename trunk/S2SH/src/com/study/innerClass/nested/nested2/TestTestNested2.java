package com.study.innerClass.nested.nested2;

import junit.framework.TestCase;

public class TestTestNested2 extends TestCase {
	public void testTestNested2(){
		TestNested2.InnerClass ic = new TestNested2.InnerClass();
		//可以直接通过外部类加内部类的方法访问内部类中的static方法
		TestNested2.InnerClass.getOutNameStatic();
		ic.age="12";
		assertEquals(ic.age,"12");
	}
}
