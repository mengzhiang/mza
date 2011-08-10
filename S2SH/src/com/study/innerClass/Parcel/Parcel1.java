package com.study.innerClass.Parcel;
//包裹
public class Parcel1 {
	//内容
	class Contents{
		private int i =11;
		public int value(){return i;}
	}
	//目的地
	class Destination{
		private String label;
		Destination(String whereTo){
			label = whereTo;
		}
		String readLabel(){return label;};
	}
	//运送
	public void ship(String dest){
		Contents c = new Contents();
		Destination d = new Destination(dest);
		System.out.println(d.readLabel()+c.value());
	}
	//测试
	public static void main(String[] args) {
		Parcel1 p = new Parcel1();
		p.ship("河南郑州");
		//不能直接访问内部类
		//Parcel1.Contents cd = new Parcel1.Contents();
	}

}
