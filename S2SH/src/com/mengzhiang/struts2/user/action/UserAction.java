package com.mengzhiang.struts2.user.action;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.annotation.Resource;

import net.sf.ehcache.Cache;
import net.sf.ehcache.Element;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.mengzhiang.base.action.BaseAction;
import com.mengzhiang.base.utils.JsonUtil;
import com.mengzhiang.struts2.user.model.TreeModel;
import com.mengzhiang.struts2.user.model.User;
import com.mengzhiang.struts2.user.service.UserService;
import com.mengzhiang.tools.cache.CacheUtil;
import com.mengzhiang.tools.cache.SelfPopulatingCacheUtil;
import com.opensymphony.xwork2.ModelDriven;

@Controller
@Scope("prototype")
public class UserAction extends BaseAction implements ModelDriven<User> {



	private static final long serialVersionUID = 5133585599464228486L;
	private User user = new User();// 这里要手动new一下
	private List<User> users;
	private List<TreeModel> tree;
	private long sid;
	@Resource
	private UserService userService;

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	@Override
	public String execute() {
		return SUCCESS;
	}

	/**
	 * 列表方法
	 * 
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public String list() {
//		users = (List<User>)SelfPopulatingCacheUtil.getEcpCache("user1");
//		if( CacheUtil.isInCache("user1")){
//			users = (List<User>)CacheUtil.get("user1");
//
//		}else{
			users = userService.list(user);
//			CacheUtil.put("user1",users);
//		}
		//Collections.sort(users);
//		int page =2;
//		int pageSize =10;
//		List<User> pageuser = new ArrayList<User>();
//		int begin = (page-1)*pageSize;
//		int end = page*pageSize;
//		for(int i=begin;i<=end;i++){
//			pageuser.add(users.get(i));
//		}
//		users = pageuser;
		
		return SUCCESS;
	}

	/**
	 * 列表方法
	 * 
	 * @return
	 */
	public String listpage() {
		this.setPaginationSupport(userService.listpage(this.getStart(), this
				.getLimit()));
		this.setSuccess(true);
		return SUCCESS;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}


	/**
	 * 返回tree
	 * 
	 * @return
	 */
	public String querytree() {
		tree = userService.getTree();
		return SUCCESS;
	}

	/**
	 * Created on 2010-7-29
	 * <p>
	 * Description:[通过id取得user]
	 * </p>
	 * 
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @return
	 */
	public String load() {
		user = userService.getUserById(sid);
		return SUCCESS;
	}

	/**
	 * 保存一个User对象
	 * 
	 * @return
	 */
	public String save() {
		userService.save(user);
		this.setSuccess(true);
		return SUCCESS;
	}

	/**
	 * Created on 2010-8-18
	 * <p>
	 * Description:[方法功能中文描述]
	 * </p>
	 * 
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @return
	 */
	public String delAll() {
		JsonUtil.jsonToObject(this.getStrJson(), this);
		List<User> delUserlist = this.getUsers();
		userService.delAllUser(delUserlist);
		return SUCCESS;
	}

	/**
	 * Created on 2010-8-18
	 * <p>
	 * Description:[方法功能中文描述]
	 * </p>
	 * 
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @return
	 */
	public String delById() {
		userService.delUserById(sid);
		return SUCCESS;
	}

	/**
	 * Created on 2010-8-19
	 * <p>
	 * Description:[根据条件查询]
	 * </p>
	 * 
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @return
	 */
	public String queryByFilter() {
		this.setPaginationSupport(userService.queryByFilter(this
				.getQueryFilter().getFilters(), this.getStart(), this
				.getLimit()));
		return SUCCESS;
	}

	public List<User> getUsers() {
		return users;
	}

	public long getSid() {
		return sid;
	}

	public void setSid(long sid) {
		this.sid = sid;
	}

	public List<TreeModel> getTree() {
		return tree;
	}

	public void setTree(List<TreeModel> tree) {
		this.tree = tree;
	}

	public User getModel() {
		return user;
	}
}
