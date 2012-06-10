package com.test.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.test.exception.business.EcpPageBusinessException;

/**
 * ����SpringMVC simple controller
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
		throw new EcpPageBusinessException("ҳ���ת:�ͻ��ɼ��쳣","�����ɼ��쳣");
	}
	//@RequestMapping("/test")
	//ModelAndView handleRequest(HttpServletRequest arg0, HttpServletResponse arg1)
	//		throws Exception {

		// ModelAndView mav = new ModelAndView("hello.jsp");
		// mav.addObject("message", "Hello World!");
		// return mav;

		// ��תҵ���쳣,����ҵ����ʾ��Ϣ�͵�������ʾ��Ϣ
		// throw new EcpPageBusinessException(new ExceptionMessage("�ͻ��ɼ��쳣��ʾ��Ϣ",
		// "������������ʾ��Ϣ"));
		// ��תϵͳ�쳣
		//throw new EcpPageSystemException(new NullPointerException("s"));
	//}

}
