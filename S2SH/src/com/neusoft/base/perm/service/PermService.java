package com.neusoft.base.perm.service;

import java.util.List;

import com.neusoft.base.perm.model.PermResource;

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
	public List<PermResource> list(PermResource res);
	/**
	 *  Created on 2010-8-9 
	 * <p>Description:[取得总记录数]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @return
	 */
	public int getTotal();
}
