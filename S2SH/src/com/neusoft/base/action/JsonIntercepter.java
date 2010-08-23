package com.neusoft.base.action;

import com.neusoft.base.dao.QueryFilter;
import com.neusoft.base.utils.JsonUtil;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;

/**
 * Created on 2010-8-23
 * <p>名称: S2SH工程-基本功能</p>
 * <p>描述: [添加自定义的拦截器，把过滤条件添加到线程变量里，然后调用一个方法就可以了]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
*/
public class JsonIntercepter extends AbstractInterceptor{


	private static final long serialVersionUID = 1L;

	@Override
	public String intercept(ActionInvocation invoctaion) throws Exception {
		BaseAction baseAction = (BaseAction)invoctaion.getAction();
		String strFilter = baseAction.getStrFilter();
		QueryFilter qf = new QueryFilter();
		if(strFilter!=null){
			JsonUtil.jsonToObject(strFilter,qf);
		}
		RequestContextFactory.instance().createQueryFilter(qf);
		String result = invoctaion.invoke();
		return result;
	}

}
