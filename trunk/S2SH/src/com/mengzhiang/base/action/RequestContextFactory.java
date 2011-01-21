package com.mengzhiang.base.action;

import com.mengzhiang.base.dao.QueryFilter;




/**
 * Created on 2010-8-23
 * <p>名称: S2SH工程-用户模块</p>
 * <p>描述: [保存上下文信息的单例类，存在线程安全的变量filter，取自edp，每个请求都是不一样的，所以没有问题]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
*/
@SuppressWarnings("unchecked")
public class RequestContextFactory
{

    public static RequestContextFactory instance()
    {
        return instance;
    }

    private RequestContextFactory()
    {
    }

    public QueryFilter createQueryFilter(QueryFilter filter)
    {
        context.set(filter);
        return getQueryFilter();
    }

    public QueryFilter getQueryFilter()
    {
        return (QueryFilter)context.get();
    }


	public void destroyRequestContext()
    {
        context.set(null);
    }

    private static ThreadLocal context = new ThreadLocal();
    private static final RequestContextFactory instance = new RequestContextFactory();

}

