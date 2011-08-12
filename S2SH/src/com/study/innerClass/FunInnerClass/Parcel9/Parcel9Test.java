package com.study.innerClass.FunInnerClass.Parcel9;

import junit.framework.TestCase;

import com.study.innerClass.Parcel.parcel4.Destination;

public class Parcel9Test extends TestCase{
	public void testParcel9Test(){
		Parcel9 p9 = new Parcel9();
		String s = "helloworld";
		Destination d = p9.destination(s);
		assertEquals(d.readLabel(),"helloworld");
	}
}
