package com.neusoft.struts2.user.dao;

import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import com.neusoft.struts2.user.model.User;

@Repository
public class UserDaoImpl implements UserDao {
	@Resource
	private SessionFactory sessionFactory ;
	
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public void addUser(User user){
		Session session = sessionFactory.openSession();
		session.save(user);
		session.close();
	}
	
	@SuppressWarnings("unchecked")
	public List<User> list(){
		Session session = sessionFactory.openSession();
		Criteria criteria = session.createCriteria(User.class);
		List<User> users = criteria.list();
		return users;
	}
}
