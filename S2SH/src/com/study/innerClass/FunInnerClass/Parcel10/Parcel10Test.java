package com.study.innerClass.FunInnerClass.Parcel10;

import junit.framework.TestCase;

import com.study.innerClass.Parcel.parcel4.Destination;

public class Parcel10Test extends TestCase{
	public void testParcel10(){
		Parcel10 p  = new Parcel10();
		Destination d = p.destination("zhengzhou", 101.345F);
		assertEquals(d.readLabel(),"zhengzhou");
	}
	
}
