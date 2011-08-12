package com.study.innerClass.FunInnerClass.Parcel6;

public class Parcel6 {
	public String fun(boolean b){
		if(b){
			class InnerClass{
				private String name="InnerClass";
				public String getName(){
					System.out.println(name);
					return name;
				}
			}
			InnerClass inc = new InnerClass();
			return inc.name;
		}else{
			return "error";
		}
	}
}
