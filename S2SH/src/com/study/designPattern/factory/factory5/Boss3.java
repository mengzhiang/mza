package com.study.designPattern.factory.factory5;

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
 * 变更：现在老板想生产电动车，二工厂改生产电动车
 * 我需要增加电动车类实现交通工具接口，还需要修改工厂类让他能生产电动车。
 * 麻烦，每增加一个新品种都需要更改工厂类，给每个品种建一个工厂岂不更好，
 * 这样如果新增一个品种只需要增加他和他的工厂，然后告诉车间用我这个工厂，其他照旧就好了
 * 优点：当新增加车的类型时对以前的方法和类不造成影响，这个就是代码的可扩展性
 * 
 * 变更：老板说其他人都不能随便通过其他渠道获得我的车，只能通过我的工厂
 * 因为其他类可以不通过工厂方式来创建车，可以直接通过new来做，怎么保证他们只能通过我的车厂呢。
 * 把车的构造方法设为私有，这样他们都创建不了我的车了，包括车厂。
 * 怎么办呢？只有车内部可以访问车的构造方法，就把车厂放到类内部吧，
 * 车厂和车本身就是相伴而生的，是一个整体，先设计出来车，然后设计出制造车的流水线工厂
 * 我只要知道这个车就能获得这个车的工厂，我自己就能源源不断的生产汽车了。
 * 而且车厂有什么更新，我不需要知道，我只要调用接口就行了
 * 这个世界清静了，少了好多类，看起来更优雅更简洁了
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
 */
public class Boss3 {
	public static void main(String[] args){
		//我只要知道这个车就能获得这个车的厂，就能自己生产车
		Factory f = Car.factory;
		f.make();
		Bicycle.factory.make();
		EletroCar.factory.make();
			//如果构造方法是私有的，反射也不能创建对象
			try {
				EletroCar.class.newInstance();
			} catch (InstantiationException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IllegalAccessException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	}
}
