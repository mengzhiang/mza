package com.study.innerClass.FunInnerClass.Parcel8;

import com.study.innerClass.FunInnerClass.Wrapping;

import junit.framework.TestCase;

public class Parcel8Test extends TestCase {
	public void testParcel8(){
		Parcel8 p8 = new Parcel8();
		Wrapping wr = p8.wrapping(3);
		assertEquals(wr.value(),30);
	}
}
