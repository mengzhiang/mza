package com.neusoft.struts2.user.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.neusoft.struts2.user.model.User;
import com.neusoft.struts2.user.service.UserService;
import com.opensymphony.xwork2.ActionSupport;

@Controller
public class UserAction extends ActionSupport {
	
	private User user;
	private List<User> users;
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
	
	public String list(){
		users = userService.list();
		return SUCCESS;
	}
	
	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}
}
