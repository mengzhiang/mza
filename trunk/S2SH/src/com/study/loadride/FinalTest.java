package com.study.loadride;

public class FinalTest {
	final int i = 10;
	int j =13;
	void test(){
		//final修饰的变量不可修改
		//i=20;
		j=20;
	}
	final void testf(){
		j=20;
		System.out.println(j);
	}
	//可以重载final修饰的类
	void testf(int s){
		j=30;
		System.out.println(j);
	}
	
	public static void main(String[] args){
		FinalTest test = new FinalTest();
		test.testf();
		test.testf(1);
	}
}
/*一个java文件中只能有一个类是public并且和文件名相同*/
class FinalTestSubType extends FinalTest{
	//不能重写final类
	//void testf(){}
	void testf(int s){
		j=40;
	}
}
