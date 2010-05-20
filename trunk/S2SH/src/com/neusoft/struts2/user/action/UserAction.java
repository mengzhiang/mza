package com.neusoft.struts2.user.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.neusoft.struts2.user.model.User;
import com.neusoft.struts2.user.service.UserService;
import com.opensymphony.xwork2.ActionSupport;

@Controller
@Scope("prototype") 
public class UserAction extends ActionSupport {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 5133585599464228486L;
	private User user;
	private List<User> users;
	private long sid;
	@Resource
	private UserService userService;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

//	@Override
//	public String execute(){
//		userService.save(user);
//		return SUCCESS;
//	}
	
	/**
	 * 列表方法
	 * @return
	 */
	public String list(){
		users = userService.list(user);
		return SUCCESS;
	}
	
//	public String edit(){
//		user = userService.getUserById(sid);
//		return SUCCESS;
//	}
	/**
	 * 保存一个User对象
	 * @return
	 */
//	public String save(){
//		userService.save(user);
//		return SUCCESS;
//	}
//	/**
//	 * 删除
//	 */
//	public String del(){
//		userService.delUserById(sid);
//		return SUCCESS;
//	}
	
	/**
	 * 新增
	 * @return
	 */
	public String add(){
		return SUCCESS;
	}

	
	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

	public long getSid() {
		return sid;
	}

	public void setSid(long sid) {
		this.sid = sid;
	}

}
