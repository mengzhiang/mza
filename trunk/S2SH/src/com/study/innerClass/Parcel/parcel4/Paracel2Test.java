package com.study.innerClass.Parcel.parcel4;

import junit.framework.TestCase;

public class Paracel2Test extends TestCase {
	public void testParacel2(){
		Parcel2 p = new Parcel2();
		//完全隐藏 实现，只提供接口，无法访问内部
		//在Parcel提供了Contents实现，又向上转型之后返回回来
		//想要在外部类中访问内部类必须通过调用外部类给出的借口方法
		//Parcel1.Contents cd = new Parcel1.Contents();
		Contents d = p.contents();
		//可以通过.new 通过外部类创建内部类
		//Contents d2 = p.new PContents();
        //assertNotSame(d,d2);
	}
}
