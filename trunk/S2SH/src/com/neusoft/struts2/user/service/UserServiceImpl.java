package com.neusoft.struts2.user.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.neusoft.struts2.user.dao.UserDao;
import com.neusoft.struts2.user.model.User;

@Service
public class UserServiceImpl implements UserService {
	//要把userDao注入进来必须加上@Resource
	@Resource
	private UserDao userDao;

	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}
	
	public void save(User user){
		userDao.save(user);
	}
	
	public List<User> list(){
		return userDao.list();
	}
	//通过ID查询user
	public User getUserById(long id) {
		return userDao.getUserById(id);
		
	}
}
