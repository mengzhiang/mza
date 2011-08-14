package com.study.innerClass.nested.ClassInInterface;

public interface ClassInInterface {
	void howdy();
	class Test implements ClassInInterface{
		public void howdy() {
			System.out.println("test");
		}
	}
}
