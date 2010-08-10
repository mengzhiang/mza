package com.neusoft.base.perm.dao;

import java.util.List;

import com.neusoft.base.perm.model.PermRole;

/**
 * Created on 2010-8-9
 * <p>名称: S2SH工程-权限模块</p>
 * <p>描述: [权限接口]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
*/
public interface PermRoleDao {
	/**
	 *  Created on 2010-8-9
	 * <p>Description:[得到所有的资源]</p>
	 * @author:孟志昂
	 * @email: mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 */
	public List<PermRole> list(PermRole res);
	public int getTotal();
}
