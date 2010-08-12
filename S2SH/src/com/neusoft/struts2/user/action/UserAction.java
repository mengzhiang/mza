package com.neusoft.struts2.user.action;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.neusoft.base.action.BaseAction;
import com.neusoft.base.dao.Page;
import com.neusoft.struts2.user.model.TreeModel;
import com.neusoft.struts2.user.model.User;
import com.neusoft.struts2.user.service.UserService;

@Controller
@Scope("prototype") 
public class UserAction extends BaseAction {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 5133585599464228486L;
	private User user;
	private List<User> users;
	private List<TreeModel> tree;
	private long sid;
	private int totalcount;
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

	@Override
	public String execute(){
		return SUCCESS;
	}
	
	/**
	 * 列表方法
	 * @return
	 */
	public String list(){
		users = userService.list(user);
		return SUCCESS;
	}
	
	/**
	 * 列表方法
	 * @return
	 */
	public String listpage(){
		this.setTotalcount(getTotal());
		Page p = super.makePager();
		users = userService.listpage(p);
		return SUCCESS;
	}
	
	/**
	 * 获取所有user的数量
	 * @return
	 */
	public int getTotal(){
		return userService.getTotal();
	}
	
	/**
	 * 返回tree
	 * @return
	 */
	public String querytree(){
		tree = userService.getTree();
		  
//		new ArrayList<TreeModel>();
//		TreeModel n1 = new TreeModel();
//		n1.setId(1);
//		n1.setLeaf(false);
//		n1.setText("not leaf");
//			TreeModel n1c1 = new TreeModel();
//			n1c1.setId(11);
//			n1c1.setLeaf(true);
//			n1c1.setText("子节点1");
//			List<TreeModel> n1list = new ArrayList<TreeModel>();
//			n1list.add(n1c1);
//		n1.setChildren(n1list);
//		
//		TreeModel n2 = new TreeModel();
//		n2.setId(2);
//		n2.setLeaf(true);
//		n2.setText("is leaf");
//		
//		tree.add(n1);
//		tree.add(n2);
		
		return SUCCESS;
	}

	/**
	 *  Created on 2010-7-29 
	 * <p>Description:[通过id取得user]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @return
	 */
	public String load(){
		user = userService.getUserById(sid);
		return SUCCESS;
	}
	/**
	 * 保存一个User对象
	 * @return
	 */
	public String save(){
		userService.save(user);
		return SUCCESS;
	}
	/**
	 * 删除
	 */
	public String del(){
		userService.delUserById(sid);
		return SUCCESS;
	}
	
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

	public int getTotalcount() {
		return totalcount;
	}

	public void setTotalcount(int totalcount) {
		this.totalcount = totalcount;
	}

	public List<TreeModel> getTree() {
		return tree;
	}

	public void setTree(List<TreeModel> tree) {
		this.tree = tree;
	}
}
