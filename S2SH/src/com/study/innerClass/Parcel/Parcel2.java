package com.study.innerClass.Parcel;
//包裹
public class Parcel2 {
	//内部类content具有外围类所有元素的访问权限，可以访问private元素。返回content对象给访问private元素开了一个窗口
	private String name ="private name";
	//内容
	class Contents{
		private int i =11;
		public int value(){return i;}
		public String name(){
			return name;
		}
	}
	//目的地
	class Destination{
		private String label;
		Destination(String whereTo){
			label = whereTo;
		}
		String readLabel(){return label;};
	}
	public Contents contents(){
		return new Contents();
	}
	
	//运送
	public void ship(String dest){
		Contents c = new Contents();
		Destination d = new Destination(dest);
		System.out.println(d.readLabel()+c.value());
	}
	
}
