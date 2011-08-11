package com.study.innerClass.FunInnerClass.test9;

public class Test9Class {
	public Test9Interface fun(){
		class InnerClassImpTest9Interface implements Test9Interface{
			public String fun() {
				return "InnerClassImpTest9Interface";
			}
		}
		return new InnerClassImpTest9Interface();
	}
}
