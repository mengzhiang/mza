package com.study.innerClass.test23;
/**
 * @author: mengzhiang
*/
public class A {
	private int i = 0;
	private void callback(){
		System.out.println("callback"+i++);
	}
	public U getU(){
		return new U(){
			public void f1() {
				callback();
			}
			public void f2() {
				callback();
			}
			public void f3() {
				callback();
			}
		};
	}
}
