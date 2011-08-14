package com.study.innerClass.nested.mna;

public class MNA {
	private void f(){System.out.println("MNA.f();");};
	class A{
		private void g(){System.out.println("MNA.B.g()");}
		class B{
			public void h(){
				f();
				g();
			}
		}
	}
}
