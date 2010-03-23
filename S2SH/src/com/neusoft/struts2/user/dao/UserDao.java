package com.neusoft.struts2.user.dao;

import java.util.List;

import com.neusoft.struts2.user.model.User;

public interface UserDao {
	public void addUser(User user);
	public List<User> list();
}
