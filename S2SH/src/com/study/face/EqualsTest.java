package com.study.face;

public class EqualsTest {
	
	public String name ;

//	@Override
//	public boolean equals(Object o) {
//		EqualsTest et = (EqualsTest)o;
//		if(et.name == name){
//			return true;
//		}else{
//			return false;
//		}
//	}
	public  static void main(String[] args){
		EqualsTest t1 = new EqualsTest();
		t1.name= "t1";
		EqualsTest t2 = new EqualsTest();
		t2.name ="t1";
		
		//普通对象==和equals是一样的，其实equals里就是==，
		//但是为了方便对象比较，自己可以重写这个equals；
		//String就是自己重写了这个equals，所以==和equals就不一样了。
		System.out.println(t1==t2);
		System.out.println(t1.equals(t2));
	}
}
