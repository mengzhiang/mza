package com.neusoft.base.perm.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.neusoft.base.dao.BaseDao;
import com.neusoft.base.perm.model.PermRoleAndRes;

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
public class PermRoleAndResDaoImpl extends BaseDao<PermRoleAndRes,Long> implements PermRoleAndResDao {

	public int getTotal() {
		// TODO Auto-generated method stub
		return 0;
	}

	public List<PermRoleAndRes> list(PermRoleAndRes res) {
		// TODO Auto-generated method stub
		return null;
	}

}
