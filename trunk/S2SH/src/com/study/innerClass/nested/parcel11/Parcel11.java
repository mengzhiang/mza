package com.study.innerClass.nested.parcel11;

import com.study.innerClass.Parcel.parcel4.Contents;
import com.study.innerClass.Parcel.parcel4.Destination;

public class Parcel11 {
	private static class ParcelContents implements Contents{
		private int i =11;
		public int value(){return i;}
	}
	private static class ParcelDestination implements Destination{
		private String label;
		private  ParcelDestination(String whereTo){
			label = whereTo;
		}
		public String readLabel() {
			return label;
		}
		//三层嵌套
		public static void f(){};
		static int x=10;
		public static class AnotherLevel{
			public static void f(){};
			static int x =10;
		}
	}
	public static Destination destination(String s){
		return new ParcelDestination(s);
	}
	public static Contents content(){
		return new ParcelContents();
	}
}
