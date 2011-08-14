package com.study.innerClass.nested.mna;

import junit.framework.TestCase;

public class TestMNA extends TestCase {
	public void testmn(){
		MNA m = new MNA();
		MNA.A ma = m.new A();
		MNA.A.B mab = ma.new B();
		mab.h();
	}
}
