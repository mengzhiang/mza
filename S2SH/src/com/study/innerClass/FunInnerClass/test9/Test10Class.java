package com.study.innerClass.FunInnerClass.test9;

public class Test10Class {
	public String fun(boolean b) {
		if (b) {
			class InnerClassImpTest9Interface implements Test9Interface {
				public String fun() {
					return "InnerClassImpTest9Interface";
				}
			}
			return new InnerClassImpTest9Interface().fun();
		} else {
			return null;
		}
	}
}
