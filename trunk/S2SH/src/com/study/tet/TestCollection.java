package com.study.tet;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import java.util.TreeSet;

public class TestCollection {

	/**
	 *  Created on 2011-6-30 
	 * <p>Description:[方法功能中文描述]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param args
	 */
	public static void main(String[] args) {
		List list = new ArrayList();
		list.add(5);
		list.add(0);
		list.add(9);
		list.add(4);
		Collections.sort(list);
		for(Object o :list){
			System.out.println(o);
		}
		Set set = new HashSet();
		set.add(4);
		set.add("5");
		set.add(4);
		Iterator its = set.iterator();
		while(its.hasNext()){
			Object o = its.next();
			System.out.println(o.toString());
		};
		Map map = new HashMap();
		map.put("2",1);
		map.put("4",3);
		map.put("4",5);
		Iterator it = map.entrySet().iterator();
		while(it.hasNext()){
			Map.Entry<String, Integer> entry1 = (Map.Entry<String,Integer>)it.next();
			System.out.println(entry1.getKey()+"="+entry1.getValue());
		}
		
//		Set tset = new TreeSet();
//		tset.add(4);
//		tset.add(5);
//		Map tmap = new TreeMap();
//		tmap.put("2",1);
//		tmap.put("4",3);
	}

}
