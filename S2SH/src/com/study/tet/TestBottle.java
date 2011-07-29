package com.study.tet;

import java.util.ArrayList;

import junit.framework.TestCase;

/**
 * Created on 2011-7-29
 * <p>名称: S2SH工程-测试bottle类，测试有限原则</p>
 * <p>描述: [描述该类概要功能介绍]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
*/
public class TestBottle extends TestCase {

	public void testgetys(){
		//钱数，单价，换瓶
		// 50    1    5
		int[] a = Bottle.getQs(50, 1, 5);
		int[] m = new int[]{62,2,0};
		boolean e = a[0]==m[0]&&a[1]==m[1]&&a[2]==m[2];
		assertTrue(e);
		// 10    1    5
		int[] a1 = Bottle.getQs(10, 1, 5);
		int[] m1 = new int[]{12,2,0};
		boolean e1 = a1[0]==m1[0]&&a1[1]==m1[1]&&a1[2]==m1[2];
		assertTrue(e1);
	}
}
