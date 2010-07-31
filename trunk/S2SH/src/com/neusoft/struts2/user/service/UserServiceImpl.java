package com.neusoft.struts2.user.service;

import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Session;
import org.springframework.stereotype.Service;

import com.neusoft.base.dao.Page;
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
	
	public List<User> list(User user){
		return userDao.list(user);
		}
	/**
	 *  Created on 2010-7-29
	 * <p>Description:[通过ID查询user]</p>
	 * @author:孟志昂
	 * @email: mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 */
	public User getUserById(long id) {
		return userDao.getUserById(id);
	}
	
	/**
	 *  Created on 2010-7-30 
	 * <p>Description:[通过ID删除USER对象]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param id
	 * @return
	 */
	public String delUserById(long id) {
		return userDao.delUserById(id);
	}

	public List<User> listpage(Page p) {
		return userDao.list(p);
	}
	
	public int getTotal(){
		return userDao.getTotal();
	}
}
