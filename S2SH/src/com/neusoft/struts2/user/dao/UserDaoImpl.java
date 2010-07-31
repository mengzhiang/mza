package com.neusoft.struts2.user.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.neusoft.base.dao.BaseDao;
import com.neusoft.base.dao.Page;
import com.neusoft.struts2.user.model.User;

/**
 * 建议改成泛型的方式
 * @author Administrator
 *
 */
@SuppressWarnings("unchecked")
@Repository
public class UserDaoImpl extends BaseDao<User,Long> implements UserDao {
	

	public void save(User user){
		super.save(user);
	}
	
	public List<User> list(User user){
		return (List<User>)super.find();
	}
	/**
	 * 通过ID查询USER对象
	 */
	public User getUserById(long id) {
		return (User)super.get(id);
	}
	/**
	 * 通过ID删除USER对象
	 */
	public String delUserById(long id) {
		super.del(super.get(id));
		return "success";
	}

	public List<User> list(Page p) {
		String hql = "from User where 1=1";
		return	(List<User>)super.queryForPage(hql, p.getStart(), p.getPageSize());
	}

	public int getTotal() {
		String hql = "from User where 1=1";
		return super.getAllRowCount(hql);
	}
}
