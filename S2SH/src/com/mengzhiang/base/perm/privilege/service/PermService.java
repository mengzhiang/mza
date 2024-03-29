package com.mengzhiang.base.perm.privilege.service;

import java.util.List;

import com.mengzhiang.base.perm.resource.model.PermResource;
import com.mengzhiang.base.perm.role.model.PermRole;
import com.mengzhiang.base.perm.user.model.PermUser;

/**
 * Created on 2010-8-9
 * <p>名称: S2SH工程-权限Service</p>
 * <p>描述: [描述该类概要功能介绍]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
*/
public interface PermService {
	/**
	 *  Created on 2010-8-9
	 * <p>Description:[得到所有的资源]</p>
	 * @author:孟志昂
	 * @email: mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 */
	public List<PermResource> loadAllPermResource();
	/**
	 *  Created on 2010-8-9 
	 * <p>Description:[取得总记录数]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @return
	 */
	public int getTotal();
	/**
	 *  Created on 2010-8-11 
	 * <p>Description:[通过角色获取权限]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param permrole
	 * @return
	 */
	public List<PermResource> getPermResourceByPermRole(PermRole permrole);
	/**
	 *  Created on 2010-8-13 
	 * <p>Description:[判断该是否存在该用户]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param pu
	 * @return
	 */
	public String checkUserAccount(PermUser pu);
	/**
	 *  Created on 2010-10-26 
	 * <p>Description:[测试新增角色同时新增资源和用户是否保存成功]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @return
	 */
	public String saveRoleAndUser();
}
