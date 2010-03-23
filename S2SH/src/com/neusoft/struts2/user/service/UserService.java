package com.neusoft.struts2.user.service;

import java.util.List;

import com.neusoft.struts2.user.model.User;

public interface UserService {
	public void addUser(User user);
	public List<User> list();
}
