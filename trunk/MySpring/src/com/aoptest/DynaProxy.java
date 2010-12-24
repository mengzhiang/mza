package com.aoptest;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

public class DynaProxy implements InvocationHandler {

	/* ��������� */
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
		//����
		System.out.println("proxy front");
		//����㣬����ͨ��method��name���ж����Ǹ�������������
		return method.invoke(target, args);

	}

}
