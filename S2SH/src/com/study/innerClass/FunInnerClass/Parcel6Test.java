package com.study.innerClass.FunInnerClass;

import junit.framework.TestCase;

public class Parcel6Test extends TestCase{
	public void testParcel6(){
		Parcel6 p6 = new Parcel6();
		assertEquals(p6.fun(true),"InnerClass");
	}
}
