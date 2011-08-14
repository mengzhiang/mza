package com.study.designPattern.factory.factory4;

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
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
 */
public class Boss3 {
	public static void main(String[] args){
		//我要试用各个车。
		BicycleFactory.getInstance().make();
		CarFactory.getInstance().make();
		ElectroCarFactory.getInstance().make();
		try {
			//如果构造方法是私有的，反射也不能创建对象
			BicycleFactory.class.newInstance();
		} catch (InstantiationException e) {
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		}
	}
}
