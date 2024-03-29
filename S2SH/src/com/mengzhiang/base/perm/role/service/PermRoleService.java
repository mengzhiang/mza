package com.mengzhiang.base.perm.role.service;

import java.util.List;

import com.mengzhiang.base.dao.PaginationSupport;
import com.mengzhiang.base.perm.role.model.PermRole;
import com.mengzhiang.base.perm.role.model.PermRoleTreeModel;

//1：更改 “XXXX”为您的模块名称

public interface PermRoleService {
	public PaginationSupport listpage(int startIndex,int pageSize);
	public void save(PermRole model);
	public PermRole getById(long id);
	public String delAll(List<PermRole> list);
	public List<PermRoleTreeModel> getTree();
	/**
	 *  Created on 2011-1-19 
	 * <p>Description:[保存角色所属资源信息]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param sid
	 * @param resModelIds
	 * @return
	 */
	public String saveRoleWithResModel(long sid, String resModelIds);
	/**
	 *  Created on 2011-1-19 
	 * <p>Description:[保存角色包含的用户信息]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param sid
	 * @param resModelIds
	 * @return
	 */
	public String saveRoleWithUser(long sid, String resModelIds);
	
	/**
	 *  Created on 2011-1-20 
	 * <p>Description:[删除角色包含的用户信息]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param sid
	 * @param resModelIds
	 * @return
	 */
	public String deleteRoleWithUser(long sid, String resModelIds);
}
