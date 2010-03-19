package com.neusoft.struts2.user.action;

import org.springframework.stereotype.Controller;

import com.neusoft.struts2.user.model.User;
import com.opensymphony.xwork2.ActionSupport;

@Controller
public class UserAction extends ActionSupport {
	
	private User user;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String execute(){
		return SUCCESS;
	}
}
