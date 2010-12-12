package com.wojia.login;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;



@Controller
@RequestMapping("/test")
public class LoginController{
	
	@RequestMapping(method = RequestMethod.GET)
	public ModelAndView test1(){
		return new ModelAndView("login_success");
	}

}
