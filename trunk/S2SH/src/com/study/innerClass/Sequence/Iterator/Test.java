package com.study.innerClass.Sequence.Iterator;

import java.util.ArrayList;
import java.util.List;

/**
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
*/
public class Test {
	public static void main(String[] args) {
		MyArrayList myt = new MyArrayList(10);
		myt.add(1);
		myt.add(2);
		MyIterator mi = myt.iterator(); 
		while(mi.hasNext()){
			System.out.println(mi.next());
		}
		//ArrayList创建时不用声明大小，因为ArrayList会自动扩充
		//ArrayList的iterator来自父类AbstractList，
		//而父类的iterator也是通过内部类来实现Iterator接口返回Iterator实例
		List list = new ArrayList();
		list.iterator();
	}
}
