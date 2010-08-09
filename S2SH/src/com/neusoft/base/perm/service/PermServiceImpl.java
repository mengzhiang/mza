package com.neusoft.base.perm.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.neusoft.base.perm.dao.PermDao;
import com.neusoft.base.perm.model.PermResource;

/**
 * Created on 2010-8-9
 * <p>名称: S2SH工程-权限模块</p>
 * <p>描述: [权限Service实现]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
*/
@Service
public class PermServiceImpl implements PermService{
	@Resource
	private PermDao permDao;

	public void setPermDao(PermDao permDao) {
		this.permDao = permDao;
	}
	
	/**
	 *  Created on 2010-8-9
	 * <p>Description:[得到所有的资源]</p>
	 * @author:孟志昂
	 * @email: mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 */
	public List<PermResource> list(PermResource res){
		return permDao.list(res);
	};
	
	/**
	 *  Created on 2010-8-9 
	 * <p>Description:[取得总记录数]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @return
	 */
	public int getTotal(){
		return permDao.getTotal();
	};
}
