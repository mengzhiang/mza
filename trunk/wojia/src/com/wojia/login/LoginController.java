package com.wojia.login;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;



@Controller
public class LoginController{
	
	@RequestMapping
	public String test1(){
		return "login/login_success";
	}

	@RequestMapping
	public String test2(){
		return "login/login_failure";
	}
}
