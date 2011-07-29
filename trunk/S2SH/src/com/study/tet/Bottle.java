package com.study.tet;

import java.util.ArrayList;

import com.lowagie.text.List;

public class Bottle {

/**
 * 50块钱买多少瓶汽水，1元一瓶，
 * 5空瓶换一瓶，
 * 加以瓶盖0.1元
 *  Created on 2011-7-29 
 * <p>Description:[方法功能中文描述]</p>
 * @author 孟志昂 mengzhiang@gmail.com
 * @update:[日期YYYY-MM-DD] [更改人姓名]
 * @param args
 */
	
	public static int[] getQs(int money,int dajia,int hj){
		int yuanben = money/dajia;
		int yuer = money%dajia;
		ArrayList l = new ArrayList();
		l = Bottle.getys(l,yuanben,hj);
		int qishui = 50;
		int kongping = 0; 
		for(Object o :l){
			int[] a = (int[])o;
			qishui = qishui+a[0];
			kongping = kongping+a[1];
			System.out.println(a[0]+"/3余"+a[1]);
		}
		System.out.println(qishui+"--"+kongping+"--"+yuer);
		return new int[]{qishui,kongping,yuer};
	}
	/**
	 *  Created on 2011-7-29 
	 * <p>Description:[递归取余过程]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param list
	 * @param beichushu
	 * @param chushu
	 * @return
	 */
	private static ArrayList getys(ArrayList list,int beichushu,int chushu){
		int shang = beichushu/chushu;
		int yushu = beichushu%chushu;
		list.add(new int[]{shang,yushu});
		System.out.println(beichushu+"aa"+yushu);
		if(beichushu!=yushu){
			getys(list,shang,chushu);
		}
		return list;
	}

}
