package com.study.sort;

import java.util.ArrayList;
import java.util.List;

public class SortTwo {

	/**
	 *  Created on 2011-6-30 
	 * <p>Description:[二分排序]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param args
	 */
	public static void main(String[] args) {
		
		List list = new ArrayList();
		list.add(1);
		list.add(0);
		list.add(2);
		list.add(8);
		list.add(5);
		list.add(7);
		list.add(3);
		list.add(9);
		SortTwo st = new SortTwo();
		list = st.sort(list);
		for(Object o :list){
			System.out.println((Integer)o);
		}
	}

	/**
	 *  Created on 2011-6-30 
	 * <p>Description:[递归方法]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param arr
	 * @return
	 */
	public List sort(List arr){
		int len = arr.size();
		if(len==0){
			return new ArrayList();
		}
		//取中间值
		int midindex = Math.round(len/2);
		Integer mid = (Integer)arr.get(midindex);
		//创建三部分
		List farr = new ArrayList();
		List larr = new ArrayList();
		List midarr = new ArrayList();
		//大于中间值的放右边，小于的放左边，相等的放中间
		for(int i=0;i<len;i++){
			if((Integer)arr.get(i)>mid){
				larr.add(arr.get(i));
			}else if((Integer)arr.get(i)<mid){
				farr.add(arr.get(i));
			}else if((Integer)arr.get(i)==mid){
				midarr.add(arr.get(i));
			}
		}
		//递归分割
		List temparr = sort(farr);
		List temparrt = sort(larr);
		sort(farr).addAll(midarr);
		temparr.addAll(temparrt);
		//返回左边加中间加右边
		return temparr;
	}
}
