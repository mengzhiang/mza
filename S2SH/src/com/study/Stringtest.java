package com.study;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;

public class Stringtest {


	/**
	 *  Created on 2010-12-8 
	 * <p>Description:[计算字符串中相同字符的数量]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param args
	 */
	public static void main(String[] args) {
		String s="aabbbbcccccc";
		String[] arr = s.split("");
		Map<String,Integer> m = new HashMap<String,Integer>();
		for(int i=0,len=arr.length;i<len;i++){
			if(!arr[i].equals("")){
				if(m.containsKey(arr[i])){
					m.put(arr[i], m.get(arr[i])+1);
				}else{
					m.put(arr[i], 1);
				}
			}
		}
		Iterator it = m.entrySet().iterator();
		while(it.hasNext()){
			Entry entry = (Entry)it.next();
			System.out.println(entry.getKey()+"="+entry.getValue());
		}
	}

}
