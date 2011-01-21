package com.mengzhiang.struts2.user.service;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mengzhiang.base.dao.PaginationSupport;
import com.mengzhiang.base.dao.Parameter;
import com.mengzhiang.struts2.user.dao.TreeDao;
import com.mengzhiang.struts2.user.dao.UserDao;
import com.mengzhiang.struts2.user.model.Tree;
import com.mengzhiang.struts2.user.model.TreeModel;
import com.mengzhiang.struts2.user.model.User;

@Service
public class UserServiceImpl implements UserService {
	//要把userDao注入进来必须加上@Resource
	@Resource
	private UserDao userDao;

	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}
	
	@Resource
	private TreeDao treeDao;

	public void setTreeDao(TreeDao treeDao) {
		this.treeDao = treeDao;
	}

	/**
	 *  Created on 2010-8-6
	 * <p>Description:[保存User]</p>
	 * @author:孟志昂
	 * @email: mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 */
	public void save(User user){
		userDao.saveOrUpdate(user);
	}
	
	/**
	 *  Created on 2010-8-6
	 * <p>Description:[列出User]</p>
	 * @author:孟志昂
	 * @email: mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 */
	public List<User> list(User user){
		return userDao.loadAll();
		}
	/**
	 *  Created on 2010-7-29
	 * <p>Description:[通过ID查询user]</p>
	 * @author:孟志昂
	 * @email: mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 */
	public User getUserById(long id) {
		return userDao.get(id);
	}
	
	/**
	 *  Created on 2010-7-30 
	 * <p>Description:[通过ID删除USER对象]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param id
	 * @return
	 */
	public String delUserById(long id) {
		userDao.delete(userDao.get(id));
		return "success";
	}
	/**
	 *  Created on 2010-7-30 
	 * <p>Description:[批量删除User]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param id
	 * @return
	 */
	public String delAllUser(List<User> userlist) {
		userDao.deleteAll(userlist);
		return "success";
	}

	/**
	 *  Created on 2010-8-6
	 * <p>Description:[翻页查询方法]</p>
	 * @author:孟志昂
	 * @email: mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 */
	@SuppressWarnings("unchecked")
	public PaginationSupport listpage(int startIndex,int pageSize) {
		return userDao.findPageByCriteria(startIndex,pageSize);
	}
	
	/**
	 *  Created on 2010-8-6
	 * <p>Description:[得到数据总数]</p>
	 * @author:孟志昂
	 * @email: mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 */
	public int getTotal(){
		return userDao.loadAll().size();
	}
	/**
	 * Created on 2010-8-12
	 * <p>
	 * Description:[根据属性list查询]
	 * </p>
	 * 
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param propertyname
	 * @param flag
	 * @param value
	 * @return
	 */
	public PaginationSupport queryByFilter(List<Parameter> list,int startIndex,int pageSize){
		return userDao.findByProperties(list,startIndex,pageSize);
	}
	/**
	 *  Created on 2010-8-12 
	 * <p>Description:[得到树]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @return
	 */
	public List<TreeModel> getTree(){
		//递归调用方法使list中的数据构造成TreeModel
		List<TreeModel> tmlist = geneTree(0,0);
		return tmlist;
	}
	
	/**
	 *  Created on 2010-8-12 
	 * <p>Description:[递归生成树]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param parentid
	 * @param level
	 * @return
	 */
	private List<TreeModel> geneTree(int parentid,int level){
		List<TreeModel> treelist = new ArrayList<TreeModel>();
		List<Tree> list = treeDao.findByProperty("parentid", parentid);
		for(Tree tree :list){
			TreeModel tm = new TreeModel();
			tm.setId(tree.getId());
			tm.setText(tree.getTitle());
			tm.setUrl(tree.getUrl());
			//0非叶子节点1是叶子节点
			if(tree.getLeaf()==0){
				tm.setLeaf(false);
				tm.setChildren(geneTree(Integer.parseInt(Long.toString(tree.getId())),level+1));
			}else{
				tm.setLeaf(true);
			}
			treelist.add(tm);
		}
		return treelist;
	}
}
