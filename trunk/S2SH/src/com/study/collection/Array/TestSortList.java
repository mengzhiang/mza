package com.study.collection.Array;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import org.apache.commons.beanutils.BeanComparator;
import org.apache.commons.collections.ComparatorUtils;
import org.apache.commons.collections.comparators.ComparableComparator;
import org.apache.commons.collections.comparators.ComparatorChain;
public class TestSortList {
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static void main(String[] args) {
		List<User> list = new ArrayList<User>();
		list.add(new User(2,"姚郁",28));
		list.add(new User(1,"孟志昂",25));
		list.add(new User(3,"矿宗义",30));
		list.add(new User(4,"王仕强",25));
		System.out.println("-----排序前-----");
		for(User u:list){
			System.out.println(u.name+"/"+u.age);
		}
		System.out.println("-----满足：先按age升序排列，再按id降序排列-----");
		List  sortFields = new ArrayList();
		Comparator mycmp = ComparableComparator.getInstance(); 
		mycmp = ComparatorUtils.reversedComparator(mycmp);
		sortFields.add(new BeanComparator("age"));   
	    sortFields.add(new BeanComparator("id",mycmp));   
	    ComparatorChain multiSort = new ComparatorChain(sortFields);
	    Collections.sort(list,multiSort);
		for(User u:list){
			System.out.println(u.id+"/"+u.name+"/"+u.age);
		}
	}
}
