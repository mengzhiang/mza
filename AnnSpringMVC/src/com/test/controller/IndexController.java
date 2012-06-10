package com.test.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * SpringMVC simple controller
 * 
 * @author mza
 * 
 */
@Controller

public class IndexController {
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String index(ModelMap modelmap, HttpServletRequest request) {
		return "index";
	}
}
