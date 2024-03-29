package com.mengzhiang.base.perm.privilege.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.annotation.Resource;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Service;

import com.mengzhiang.base.perm.resmodel.dao.PermResModelTreeDao;
import com.mengzhiang.base.perm.resmodel.model.PermResModelTreeEntity;
import com.mengzhiang.base.perm.resource.dao.PermResourceDao;
import com.mengzhiang.base.perm.resource.model.PermResource;
import com.mengzhiang.base.perm.role.dao.PermRoleDao;
import com.mengzhiang.base.perm.role.model.PermRole;
import com.mengzhiang.base.perm.user.dao.PermUserDao;
import com.mengzhiang.base.perm.user.model.PermUser;

/**
 * Created on 2010-8-9
 * <p>
 * 名称: S2SH工程-权限模块
 * </p>
 * <p>
 * 描述: [权限Service实现]
 * </p>
 * <p>
 * 版本: Copyright (c) 2010
 * </p>
 * 
 * @author: 孟志昂
 * @email: mengzhiang@gmail.com
 * @version:$Revision$
 */
@Service
public class PermServiceImpl implements PermService {
	@Resource
	private PermResourceDao permResourceDao;
	@Resource
	private PermRoleDao permRoleDao;
	@Resource
	private PermUserDao permUserDao;
	@Resource
	private PermResModelTreeDao permResModelTreeDao;

	public void setPermUserDao(PermUserDao permUserDao) {
		this.permUserDao = permUserDao;
	}


	public void setPermResourceDao(PermResourceDao permResourceDao) {
		this.permResourceDao = permResourceDao;
	}


	public void setPermRoleDao(PermRoleDao permRoleDao) {
		this.permRoleDao = permRoleDao;
	}

	/**
	 * Created on 2010-8-9
	 * <p>
	 * Description:[得到所有的资源]
	 * </p>
	 * 
	 * @author:孟志昂
	 * @email: mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 */
	public List<PermResource> loadAllPermResource() {
		return permResourceDao.loadAll();
	};

	/**
	 * Created on 2010-8-9
	 * <p>
	 * Description:[取得总记录数]
	 * </p>
	 * 
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @return
	 */
	public int getTotal() {
		return 1;
	};

	/**
	 *  Created on 2010-8-11 
	 * <p>Description:[通过角色获取权限]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param permrole
	 * @return
	 */
	public List<PermResource> getPermResourceByPermRole(PermRole permrole) {
		DetachedCriteria dc = DetachedCriteria.forClass(PermResource.class);
		dc.add(Restrictions.eq("id", permrole.getId()));
		return permResourceDao.findPageByCriteria(dc);
	}
	/**
	 *  Created on 2010-8-13 
	 * <p>Description:[判断该是否存在该用户]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param pu
	 * @return
	 */
	public String checkUserAccount(PermUser pu){
		String info = "";
		List<PermUser> list = permUserDao.findByProperty("username", pu.getUsername());
		if(list.size()==1){
			if(pu.getPassword().equals(list.get(0).getPassword())){
				info = "true";
			}else{
				info = "密码错误";
			}
		}if(list.size()==0){
			System.out.println("用户不存在！");
				info = "该用户不存在";
		}else{
			System.out.println("登陆错误");
		}
		return info;
	}
	
	/**
	 *  Created on 2010-10-26
	 * <p>Description:[测试级联保存成功。]</p>
	 * @author:孟志昂
	 * @email: mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 */
	public String saveRoleAndUser(){
		PermRole role = new PermRole();
		role.setName("role1");
		role.setCode("role1");
		
//		PermResource pers = new PermResource();
//		pers.setName("pers2");
//		pers.setCode("pers2");
//		Set<PermResource> resset = new HashSet<PermResource>();
//		resset.add(pers);
		PermResModelTreeEntity model = new PermResModelTreeEntity();
		model.setCode("test");
		model.setName("test");
		model.setName("test");
		model.setParentid(1);
		Set<PermResModelTreeEntity> mset = new HashSet<PermResModelTreeEntity>();
		mset.add(model);
		
		PermUser user = new PermUser();
		user.setPassword("user1");
		user.setUsername("user1");
		Set<PermUser> userset = new HashSet<PermUser>();
		userset.add(user);
		
		role.setPermResModelTreeEntity(mset);
		role.setPermUser(userset);
		
		permUserDao.save(user);
		permResModelTreeDao.save(model);
		permRoleDao.save(role);
		return null;
	}
}
