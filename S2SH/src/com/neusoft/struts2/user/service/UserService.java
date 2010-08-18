package com.neusoft.struts2.user.service;

import java.util.List;

import com.neusoft.base.dao.Page;
import com.neusoft.struts2.user.model.TreeModel;
import com.neusoft.struts2.user.model.User;

public interface UserService  {
	public void save(User user);
	public List<User> list(User user);
	public User getUserById(long id);
	public String delUserById(long id);
	/**
	 *  Created on 2010-7-30 
	 * <p>Description:[批量删除User]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param id
	 * @return
	 */
	public String delAllUser(List<User> userlist);

	public List<User> listpage(Page p);
	public int getTotal();
	/**
	 *  Created on 2010-8-12 
	 * <p>Description:[得到树]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @return
	 */
	public List<TreeModel> getTree();
}
