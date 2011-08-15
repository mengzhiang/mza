package com.study.innerClass.Sequence.Iterator;
/**
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
*/
public class MyArrayList implements MyCollection{
	private Object[] items ;
	//填充的时候用来表示填充到哪个位置。
	private static int fill_index = 0;
	public MyArrayList(int length){
		items = new Object[length];
	}
	
	public void add(Object o){
		items[fill_index++] = o;
	}
	
	public int size(){
		return items.length;
	}
	
	public MyIterator iterator(){
		return new MyArrayListIterator();
	}
	
	/**
	 * 通过内部类实现iterator方法
	 */
	class MyArrayListIterator implements MyIterator{
		//用来保存遍历到哪一个
	    int search_index = 0;
		public boolean hasNext() {
			return search_index!=items.length;
		}

		public Object next() {
			return items[search_index++];
		}
	}
}
