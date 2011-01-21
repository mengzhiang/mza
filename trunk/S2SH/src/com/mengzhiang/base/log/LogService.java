package com.mengzhiang.base.log;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

/**
 * Created on 2010-8-6
 * <p>名称: S2SH工程-日志记录</p>
 * <p>描述: [日记记录模块]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
*/
@Component
@Aspect
public class LogService {
	@Before("execution(* com.mengzhiang.struts2.user.service.UserService.* (..))")
    public void logBefore() throws Throwable {
    	//System.out.println("log before日记记录");
    }
	
	@After("execution(* com.mengzhiang.struts2.user.service.UserService.* (..))")
    public void logAfter() throws Throwable {
    	//System.out.println("log after 日记记录");
    }
}
