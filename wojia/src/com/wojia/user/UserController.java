package com.wojia.user;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;



@Controller
public class UserController{
	
	@RequestMapping
	public String test1(){
		return "login/login_success";
	}

	@RequestMapping
	public String test2(){
		return "login/login_failure";
	}
}
