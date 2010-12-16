package com.wojia.user.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.wojia.user.model.User;



@Controller
public class UserController{

	private static String LIST = "user/list";	//列表页面
	private static String ADD_SUCCESS = "user/add_success";	//新增成功页面
	
	@RequestMapping
	public String list(){
		
		return LIST;
	}

	@RequestMapping
	public String add(User user){
		System.out.println(user.getUsername());
		return ADD_SUCCESS;
	}
	
	@RequestMapping
	public String update(){
		return "login/login_failure";
	}
	
	@RequestMapping
	public String delete(){
		return "login/login_failure";
	}
}
