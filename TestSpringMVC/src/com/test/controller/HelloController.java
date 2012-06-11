package com.test.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import com.test.exception.business.EcpBusinessException;
import com.test.exception.business.EcpPageBusinessException;
import com.test.exception.system.EcpPageSystemException;
import com.test.message.ExceptionMessage;

/**
 * 测试SpringMVC
 * simple controller
 * @author mza
 * 
 */
public class HelloController implements Controller {

	@Override
	public ModelAndView handleRequest(HttpServletRequest arg0,
			HttpServletResponse arg1) throws Exception {

		// ModelAndView mav = new ModelAndView("hello.jsp");
		// mav.addObject("message", "Hello World!");
		// return mav;
		
		//调转业务异常,给出业务提示信息和调试用提示信息
//		throw new EcpPageBusinessException(new ExceptionMessage("客户可见异常提示信息",
//				"开发调试用提示信息"));
		//调转系统异常
		throw new EcpPageSystemException(new NullPointerException("s"));
	}

}
