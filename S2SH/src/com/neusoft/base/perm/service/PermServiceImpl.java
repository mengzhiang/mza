package com.neusoft.base.perm.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.annotation.Resource;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Service;

import com.neusoft.base.perm.dao.PermResourceDao;
import com.neusoft.base.perm.dao.PermRoleDao;
import com.neusoft.base.perm.dao.PermUserDao;
import com.neusoft.base.perm.model.PermResource;
import com.neusoft.base.perm.model.PermRole;
import com.neusoft.base.perm.model.PermUser;

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
		
//		PermRole role = new PermRole();
//		role.setName("role1");
//		role.setCode("role1");
//		
//		PermResource pers = new PermResource();
//		pers.setName("pers2");
//		pers.setCode("pers2");
//		Set<PermResource> resset = new HashSet<PermResource>();
//		resset.add(pers);
//		
//		PermUser user = new PermUser();
//		user.setPassword("user1");
//		user.setUsername("user1");
//		Set<PermUser> userset = new HashSet<PermUser>();
//		userset.add(user);
//		
//		role.setPermResources(resset);
//		role.setPermUser(userset);
//		
//		permUserDao.save(user);
//		permResourceDao.save(pers);
//		permRoleDao.save(role);
		
		
		DetachedCriteria dc = DetachedCriteria.forClass(PermResource.class);
		dc.add(Restrictions.eq("id", permrole.getId()));
		return permResourceDao.findPageByCriteria(dc);
	}
}
