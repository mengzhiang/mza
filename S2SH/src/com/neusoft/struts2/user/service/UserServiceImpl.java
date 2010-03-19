package com.neusoft.struts2.user.service;

import com.neusoft.struts2.user.dao.UserDao;

public class UserServiceImpl implements UserService {
	private UserDao userDao;

	public UserDao getUserDao() {
		return userDao;
	}

	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}
	
	public void addUser(User user){
		userDao
	}
}
