package com.study.innerClass.FunInnerClass.test11;

public class Test11Class {
	private class Test11ClassInnerClass implements Test11Interface{
		
	}
	
	public Test11Interface fun(){
		return new Test11ClassInnerClass();
	}
}
