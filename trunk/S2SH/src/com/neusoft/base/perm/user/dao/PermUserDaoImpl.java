package com.neusoft.base.perm.user.dao;

import org.springframework.stereotype.Repository;

import com.neusoft.base.dao.BaseDao;
import com.neusoft.base.perm.user.model.PermUser;

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
public class PermUserDaoImpl extends BaseDao<PermUser,Long> implements PermUserDao {
}
