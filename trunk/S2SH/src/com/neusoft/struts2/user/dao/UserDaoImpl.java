package com.neusoft.struts2.user.dao;

import org.springframework.stereotype.Repository;

import com.neusoft.base.dao.BaseDao;
import com.neusoft.struts2.user.model.User;

/**
 * 建议改成泛型的方式
 * @author Administrator
 *
 */
@Repository
public class UserDaoImpl extends BaseDao<User,Long> implements UserDao {
	

}
