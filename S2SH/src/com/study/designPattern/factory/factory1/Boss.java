package com.study.designPattern.factory.factory1;

/**
 * 需求：老板说我要造自行车
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
 */
public class Boss {
	//老板有很多车间都生产自行车
	public Bicycle chejian1(){
		return new Bicycle();
	}
	//老板有很多车间都生产自行车
	public Bicycle chejian2(){
		return new Bicycle();
	}
	//老板有很多车间都生产自行车
	public Bicycle chejian3(){
		return new Bicycle();
	}
}
