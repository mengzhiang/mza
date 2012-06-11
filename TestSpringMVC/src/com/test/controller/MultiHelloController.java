package com.test.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;

/**
 * multi controller
 * 
 * @author mza
 * 
 */
public class MultiHelloController extends MultiActionController {
	public ModelAndView list(HttpServletRequest request,
			HttpServletResponse response) {
		ModelAndView mav = new ModelAndView("/WEB-INF/hello/list.jsp");
		return mav;
	}

	public ModelAndView add(HttpServletRequest request,
			HttpServletResponse response) {
		ModelAndView mav = new ModelAndView("/WEB-INF/hello/add.jsp");
		return mav;
	}

	public ModelAndView edit(HttpServletRequest request,
			HttpServletResponse response) {
		ModelAndView mav = new ModelAndView("/WEB-INF/hello/edit.jsp");
		return mav;
	}
}
