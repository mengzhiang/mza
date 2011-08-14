package com.study.innerClass.nested.ClassInInterface;

public class ClassInClass implements ClassInInterface {
	public void howdy() {
		ClassInInterface.Test ct = new ClassInInterface.Test();
		ct.howdy();
	}
}
