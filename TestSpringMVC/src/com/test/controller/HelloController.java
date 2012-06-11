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
 * ����SpringMVC
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
		
		//��תҵ���쳣,����ҵ����ʾ��Ϣ�͵�������ʾ��Ϣ
//		throw new EcpPageBusinessException(new ExceptionMessage("�ͻ��ɼ��쳣��ʾ��Ϣ",
//				"������������ʾ��Ϣ"));
		//��תϵͳ�쳣
		throw new EcpPageSystemException(new NullPointerException("s"));
	}

}
