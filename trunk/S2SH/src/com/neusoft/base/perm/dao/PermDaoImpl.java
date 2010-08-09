package com.neusoft.base.perm.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.neusoft.base.dao.BaseDao;
import com.neusoft.base.perm.model.PermResource;

/**
 * Created on 2010-8-9
 * <p>名称: S2SH工程-公共模块</p>
 * <p>描述: [权限Dao]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
*/
@Repository
public class PermDaoImpl extends BaseDao<PermResource,Long> implements PermDao {
	/**
	 *  Created on 2010-8-9
	 * <p>Description:[得到所有的资源]</p>
	 * @author:孟志昂
	 * @email: mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 */
	public List<PermResource> list(PermResource res){
		return (List<PermResource>)super.find();
	};
	/**
	 *  Created on 2010-8-6
	 * <p>Description:[得到数据总数]</p>
	 * @author:孟志昂
	 * @email: mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 */
	public int getTotal(){
		return super.getAllRowCount("from PermResource where 1=1");
	}
}
