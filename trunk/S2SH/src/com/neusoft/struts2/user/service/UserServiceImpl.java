package com.neusoft.struts2.user.service;

import java.util.List;

import javax.annotation.Resource;

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
	
	/**
	 *  Created on 2010-8-6
	 * <p>Description:[保存User]</p>
	 * @author:孟志昂
	 * @email: mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 */
	public void save(User user){
		userDao.saveOrUpdate(user);
	}
	
	/**
	 *  Created on 2010-8-6
	 * <p>Description:[列出User]</p>
	 * @author:孟志昂
	 * @email: mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 */
	public List<User> list(User user){
		return userDao.loadAll();
		}
	/**
	 *  Created on 2010-7-29
	 * <p>Description:[通过ID查询user]</p>
	 * @author:孟志昂
	 * @email: mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 */
	public User getUserById(long id) {
		return userDao.get(id);
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
		userDao.delete(userDao.get(id));
		return "success";
	}

	/**
	 *  Created on 2010-8-6
	 * <p>Description:[翻页查询方法]</p>
	 * @author:孟志昂
	 * @email: mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 */
	@SuppressWarnings("unchecked")
	public List<User> listpage(Page p) {
		return userDao.findPageByCriteria(p.getStart(), p.getPageSize());
	}
	
	/**
	 *  Created on 2010-8-6
	 * <p>Description:[得到数据总数]</p>
	 * @author:孟志昂
	 * @email: mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 */
	public int getTotal(){
		return userDao.loadAll().size();
	}
}
