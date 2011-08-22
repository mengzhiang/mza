package com.study.zhishu;

public class Zhishu {

	/**
	 * 求质数，(只能为1和他自己整除，其他的都不行)
	 * @author mengzhiang
	 */
	public static void main(String[] args) {
		int x= 12;
		x = x-x/12;
		System.out.println(x);
		
		int a = 1;  
		a += a++ + a++ + a++; 
		System.out.println(a);
		
		for(int i=1;i<100;i++){
			int flag =0;
			for(int j=2;j<i;j++){
				//如果i被整除，说明i不是质数，标出来
				if(i%j==0){
					flag=1;
					break;
				}
			}
			//如果都不能被整除，说明是质数
			if(flag==0){
				System.out.println(i);
			}
		}
	}
}
