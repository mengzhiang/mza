package com.neusoft.base.perm.dao;

import java.util.List;

import com.neusoft.base.perm.model.PermRoleAndRes;

/**
 * Created on 2010-8-9
 * <p>名称: S2SH工程-权限模块</p>
 * <p>描述: [权限接口]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
*/
public interface PermRoleAndResDao {
	/**
	 *  Created on 2010-8-9
	 * <p>Description:[得到所有的资源]</p>
	 * @author:孟志昂
	 * @email: mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 */
	public List<PermRoleAndRes> list(PermRoleAndRes res);
	/**
	 *  Created on 2010-8-10 
	 * <p>Description:[获得总数]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @return
	 */
	public int getTotal();
}
