package com.study.innerClass.Parcel.parcel4;


public class Parcel2 {
	private class PContents implements Contents{
		private int i =11;
		public int value(){return i;}
	}
	private class PDestination implements Destination{
		private String label;
		PDestination(String whereTo){
			label = whereTo;
		}
		public String readLabel(){return label;};
	}
	
	public Contents contents(){
		return new PContents();
	}
	
	public Destination destination(String whereTo){
		return new PDestination(whereTo);
	}
	
}
