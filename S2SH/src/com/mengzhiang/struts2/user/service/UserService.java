package com.mengzhiang.struts2.user.service;

import java.util.List;

import com.mengzhiang.base.dao.PaginationSupport;
import com.mengzhiang.base.dao.Parameter;
import com.mengzhiang.struts2.user.model.TreeModel;
import com.mengzhiang.struts2.user.model.User;

/**
 * Created on 2010-8-19
 * <p>
 * 名称: S2SH工程-用户模块
 * </p>
 * <p>
 * 描述: [描述该类概要功能介绍]
 * </p>
 * <p>
 * 版本: Copyright (c) 2010
 * </p>
 * 
 * @author: 孟志昂
 * @email: mengzhiang@gmail.com
 * @version:$Revision$
 */
public interface UserService {
	public void save(User user);

	public List<User> list(User user);

	public User getUserById(long id);

	public String delUserById(long id);

	/**
	 * Created on 2010-7-30
	 * <p>
	 * Description:[批量删除User]
	 * </p>
	 * 
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param id
	 * @return
	 */
	public String delAllUser(List<User> userlist);

	public PaginationSupport listpage(int startIndex,int pageSize);

	public int getTotal();

	/**
	 * Created on 2010-8-12
	 * <p>
	 * Description:[得到树]
	 * </p>
	 * 
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @return
	 */
	public List<TreeModel> getTree();

	/**
	 * Created on 2010-8-19
	 * <p>
	 * Description:[根据属性list查询]
	 * </p>
	 * 
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param list
	 * @return
	 */
	public PaginationSupport queryByFilter(List<Parameter> list,int startIndex,int pageSize);
}
