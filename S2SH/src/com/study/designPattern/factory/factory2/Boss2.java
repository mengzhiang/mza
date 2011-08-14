package com.study.designPattern.factory.factory2;

/**
 * 需求：老板说我要造自行车
 * 变更：我不生产自行车改生产汽车
 * 我需要把所有的new Bicycle改成new Car，可能有很多处
 * 于是我更改了设计，所有人都从一个统一的工厂来拿车，
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
 */
public class Boss2 {
	//老板有很多车间都生产自行车
	public Car chejian1(){
		return Factory.getCar();
	}
	//老板有很多车间都生产自行车
	public Car chejian2(){
		return Factory.getCar();
	}
	//老板有很多车间都生产自行车
	public Car chejian3(){
		return Factory.getCar();
	}
}
