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
 * ≤‚ ‘SpringMVC simple controller
 * 
 * @author mza
 * 
 */
public class ajaxController implements Controller {

	@Override
	public ModelAndView handleRequest(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		response.setContentType("text/Xml;charset=gbk");
		
		response.getOutputStream().write(new String("test").getBytes());
		return new ModelAndView();
	}

}
