package com.wojia.login;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;



@Controller
@RequestMapping("/test")
public class LoginController{
	
	@RequestMapping
	public String test1(){
		return "login/login_success";
	}

}
