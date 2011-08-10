package com.study.innerClass.Sequence;

//一个集合类，可以通过Selector（Iterator）遍历
public class Sequence {
	private Object[] items;//object数组存放数据
	private int next =0;
	public Sequence(int size){
		items = new Object[size];
	}
	public void add(Object x){
		if(next<items.length){
			items[next++]=x;
		}
	}
	class SequenceSelector implements Selector{
		private int i = 0;
		public Object current() {
			return items[i];
		}
		public boolean end() {
			return i == items.length;
		}
		public void next() {
			if(i<items.length){
				i++;
			}
		}
	}
	public Selector selector(){
		return new SequenceSelector();
	}
}
