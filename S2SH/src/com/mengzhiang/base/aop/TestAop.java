package com.mengzhiang.base.aop;

import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class TestAop {
    
    /** *//**
     * 在IDocService的实际方法开始前进行前置处理--权限检查
     */
	//@Before("execution(* com.neusoft.struts2.user.service.UserService.* (..))")
    public void test() throws Throwable {
    	System.out.println("进入代理类了");
    }
 
}