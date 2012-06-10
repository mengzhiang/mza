package com.test.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.test.exception.business.EcpPageBusinessException;

/**
 * 测试SpringMVC simple controller
 * 
 * @author mza
 * 
 */
@Controller
@RequestMapping("/hello")
public class HelloController {

	@RequestMapping("/normal")
	public String normal(ModelMap modelmap, HttpServletRequest request) {
		return "ajax";
	}
	@RequestMapping("/pageBusi")
	public String pageBusi(ModelMap modelmap, HttpServletRequest request) {
		throw new EcpPageBusinessException("页面调转:客户可见异常","开发可见异常");
	}
	//@RequestMapping("/test")
	//ModelAndView handleRequest(HttpServletRequest arg0, HttpServletResponse arg1)
	//		throws Exception {

		// ModelAndView mav = new ModelAndView("hello.jsp");
		// mav.addObject("message", "Hello World!");
		// return mav;

		// 调转业务异常,给出业务提示信息和调试用提示信息
		// throw new EcpPageBusinessException(new ExceptionMessage("客户可见异常提示信息",
		// "开发调试用提示信息"));
		// 调转系统异常
		//throw new EcpPageSystemException(new NullPointerException("s"));
	//}

}
