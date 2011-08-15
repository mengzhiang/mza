package com.study.innerClass.Sequence;

import junit.framework.TestCase;

public class SequenceTest extends TestCase {
	public void testSequence(){
		Sequence s = new Sequence(10);
		for(int i=0;i<10;i++){
			s.add(Integer.toString(i));
		}
		Selector selector = s.selector();
		StringBuilder sb = new StringBuilder();
		while(!selector.end()){
			sb.append(selector.current());
			selector.next();
		}
		assertEquals(sb.toString(),"0123456789");
	}
	
	public void testSequenceReverseSelector(){
		Sequence s = new Sequence(10);
		for(int i=0;i<10;i++){
			s.add(Integer.toString(i));
		}
		ReverseSelector rs = s.reverseSelector();
		while(!rs.begin()){
			System.out.println(rs.prev());
		}
	}
}
