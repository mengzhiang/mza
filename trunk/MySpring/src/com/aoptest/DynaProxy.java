package com.aoptest;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

public class DynaProxy implements InvocationHandler {

	/* 被代理对象 */
	private Object target;

	public Object getProxy(Object object) {
		this.target = object;
		//
		return Proxy.newProxyInstance(target.getClass().getClassLoader(),
				target.getClass().getInterfaces(), this);
	}

	@Override
	public Object invoke(Object object, Method method, Object[] args)
			throws Throwable {
		//切面
		System.out.println("proxy front");
		//切入点，可以通过method的name来判断在那个方法切入切面
		return method.invoke(target, args);

	}

}
