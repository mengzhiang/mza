package com.study.innerClass.FunInnerClass.Parcel9;

import junit.framework.TestCase;

public class AnonymousConstructorTest extends TestCase {
	public void testAnonymousConstructor(){
		AnonymousConstructor ac = new AnonymousConstructor();
		Base b = ac.getBase(1);
		b.f();
	}
}
