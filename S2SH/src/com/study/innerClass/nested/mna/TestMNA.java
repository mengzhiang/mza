package com.study.innerClass.nested.mna;

import junit.framework.TestCase;


public class TestMNA extends TestCase {
	public void testmn(){
		MNA m = new MNA();
		//外部类对象创建嵌套类通过.new 方法
		MNA.A ma = m.new A();
		MNA.A.B mab = ma.new B();
		mab.h();
	}
}
