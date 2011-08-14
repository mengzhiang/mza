package com.study.innerClass.nested.parcel11;

import junit.framework.TestCase;

import com.study.innerClass.Parcel.parcel4.Contents;
import com.study.innerClass.Parcel.parcel4.Destination;

public class Parcel11Test extends TestCase{
	public void testParcel11(){
		Contents c = Parcel11.content();
		Destination d = Parcel11.destination("zhengzhou");
		assertEquals(d.readLabel(),"zhengzhou");
	}
}
