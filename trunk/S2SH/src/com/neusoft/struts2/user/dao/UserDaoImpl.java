package com.neusoft.struts2.user.dao;

import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.neusoft.struts2.user.model.User;

/**
 * 建议改成泛型的方式
 * @author Administrator
 *
 */
@Repository
public class UserDaoImpl implements UserDao {
	@Resource
	private SessionFactory sessionFactory ;
	
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	@Transactional	
	public void save(User user){
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		session.saveOrUpdate(user);
		tx.commit();
		session.close();
	}
	
	@SuppressWarnings("unchecked")
	public List<User> list(){
		Session session = sessionFactory.openSession();
		Criteria criteria = session.createCriteria(User.class);
		List<User> users = criteria.list();
		return users;
	}
	/**
	 * 通过ID查询USER对象
	 */
	public User getUserById(long id) {
		Session session = sessionFactory.openSession();
		return (User)session.get(User.class, id);
	}
}
