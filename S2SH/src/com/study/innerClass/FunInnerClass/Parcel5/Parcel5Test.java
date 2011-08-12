package com.study.innerClass.FunInnerClass.Parcel5;

import junit.framework.TestCase;

import com.study.innerClass.Parcel.parcel4.Destination;

public class Parcel5Test extends TestCase {
	public void testParcel5(){
		Parcle5 p5 = new Parcle5();
		Destination d = p5.destination("河南");
		assertNotNull(d);
	}
}
