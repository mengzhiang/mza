package com.neusoft.struts2.user.action;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.neusoft.struts2.user.model.User;
import com.neusoft.struts2.user.service.UserService;
import com.opensymphony.xwork2.ActionSupport;

@Controller
public class UserAction extends ActionSupport {
	
	private User user;
	@Resource
	private UserService userService;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	@Override
	public String execute(){
		userService.addUser(user);
		return SUCCESS;
	}
}
