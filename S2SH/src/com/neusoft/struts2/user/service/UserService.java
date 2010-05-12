package com.neusoft.struts2.user.service;

import java.util.List;

import com.neusoft.struts2.user.model.User;

public interface UserService {
	public void save(User user);
	public List<User> list();
	public User getUserById(long id);
	public String delUserById(long id);
}
