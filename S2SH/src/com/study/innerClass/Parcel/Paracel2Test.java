package com.study.innerClass.Parcel;

import junit.framework.TestCase;

public class Paracel2Test extends TestCase {
	public void testParacel2(){
		Parcel2 p = new Parcel2();
		p.ship("河南郑州");
		//想要在外部类中访问内部类必须通过调用外部类给出的借口方法
		//Parcel1.Contents cd = new Parcel1.Contents();
		Parcel2.Contents d = p.contents();
		//可以通过.new 通过外部类创建内部类
		Parcel2.Contents d2 = p.new Contents();
		assertNotSame(d,d2);
		//在外部可以通过内部类访问到内部类包裹类的私有变量。
		//内部类有一个指向包裹类的引用。
		assertEquals(d.value(),11);
		assertEquals(d.name(),"private name");
		int[] s = new int[10];
		Parcel1[] ps = new Parcel1[10];
	}
}
