package com.neusoft.struts2.user.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.neusoft.base.dao.BaseDao;
import com.neusoft.struts2.user.model.User;

/**
 * 建议改成泛型的方式
 * @author Administrator
 *
 */
@SuppressWarnings("unchecked")
@Repository
public class UserDaoImpl extends BaseDao implements UserDao {
	

	@SuppressWarnings("unchecked")
	public void save(User user){
		super.save(user);
	}
	
	@SuppressWarnings("unchecked")
	public List<User> list(User user){
		return (List<User>)super.find();
	}
//	/**
//	 * 通过ID查询USER对象
//	 */
//	public User getUserById(long id) {
//		Session session = sessionFactory.openSession();
//		return (User)session.get(User.class, id);
//	}
//	/**
//	 * 通过ID删除USER对象
//	 */
//	@Transactional	
//	public String delUserById(long id) {
//		Session session = sessionFactory.openSession();
//		Transaction tx = session.beginTransaction();
//		User user =  (User)session.get(User.class, id);
//		session.delete(user);
//		tx.commit();
//		session.close();
//		return "success";
//	}
//	/**
//	 * 分页查询
//	 * @return
//	 */
//	@SuppressWarnings("unchecked")
//	public List<User> listWithPage(){
//		Session session = sessionFactory.openSession();
//		Query query = session.createQuery("from User");
//		query.setFirstResult(0);
//		query.setMaxResults(10);
//		return query.list();
//	}
}
