package com.neusoft.struts2.user.dao;

import java.util.List;

import com.neusoft.base.dao.Page;
import com.neusoft.struts2.user.model.User;

public interface UserDao {
	public void save(User user);
	public List<User> list(User user);
	public User getUserById(long id);
//	public String delUserById(long id);
//	/**
//	 * 分页查询
//	 * @return
//	 */
//	public List<User> listWithPage();

	public List<User> list(Page p);
	
	public int getTotal();
}
