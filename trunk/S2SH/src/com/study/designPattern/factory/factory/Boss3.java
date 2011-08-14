package com.study.designPattern.factory.factory;

/**
 * 需求：老板说我要造自行车
 * 
 * 变更：我不生产自行车改生产汽车
 * 我需要把所有的new Bicycle改成new Car，可能有很多处
 * 于是我更改了设计，所有人都从一个统一的工厂来拿车，
 * 
 * 变更：我想一二车间生产自行车，三生产汽车
   车间方法不仅要能返回汽车还要返回自行车，于是反正都是车，都要跑，就返回一个接口即可
 * 
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
 */
public class Boss3 {
	public Bicycle chejian1(){
		return (Bicycle)Factory3.getVehicle("Bicycle");
	}
	public Bicycle chejian2(){
		return (Bicycle)Factory3.getVehicle("Bicycle");
	}
	public Car chejian3(){
		return (Car)Factory3.getVehicle("Car");
	}
}
