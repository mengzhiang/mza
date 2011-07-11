package com.study.sort;

public class Sort {
	/**
	 *  Created on 2011-6-30 
	 * <p>Description:[冒泡排序算法]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param args
	 */
	public  static void main(String[] args){
		/**
		 * 换位排序，两重循环，互换位置
		 */
		int[] arr = {9,0,8,2,6,7,1,5,4,10,3};
		int len = arr.length;
		for(int i =0;i<len;i++){
			for(int j=i+1;j<len;j++){
				if(arr[i]>arr[j]){
					int tempi = arr[i];
					int tempj = arr[j];
					arr[j]=tempi;
					arr[i]=tempj;
				}
			}
		}
		for(int i:arr){
			System.out.print(i);
		}
	}
	
}
