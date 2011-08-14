package com.study.innerClass.nested.mna;
//内部类无论嵌套多少层都可以访问外部类的所有属性和方法
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
