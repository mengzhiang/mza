package com.neusoft.struts2.user.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.neusoft.struts2.user.model.User;

public class UserDaoImpl implements UserDao {
	private SessionFactory factory ;

	public SessionFactory getFactory() {
		return factory;
	}

	public void setFactory(SessionFactory factory) {
		this.factory = factory;
	}
	
	public void addUser(User user){
		Session session = factory.getCurrentSession();
		session.save(user);
	}
}
