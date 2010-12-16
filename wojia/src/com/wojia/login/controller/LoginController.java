package com.wojia.login.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.wojia.login.model.UserAccount;



@Controller
public class LoginController{
	
	@RequestMapping(method = RequestMethod.GET,value="/{id}/{str}")
	public String login(@PathVariable String id,@PathVariable String str,UserAccount user){
		
		System.out.println(user.getUsername());
		return "login/login_success";
	}

	@RequestMapping
	public String test2(){
		return "login/login_failure";
	}
}
