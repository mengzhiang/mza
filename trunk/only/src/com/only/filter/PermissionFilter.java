package com.only.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created on 2010-12-16
 * <p>名称: 无框架_子系统名_模块名</p>
 * <p>描述: [权限过滤filter防止直接访问jsp页面]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
*/
public class PermissionFilter implements Filter{

	@Override
	public void doFilter(ServletRequest req, ServletResponse resp,
			FilterChain chain) throws IOException, ServletException {
		HttpServletRequest httpRequest = (HttpServletRequest)req;
		HttpServletResponse httpResponse = (HttpServletResponse)resp;
		Object username = httpRequest.getSession().getAttribute("currentUserName");
		//当session中没有当前用户，并且当前用户要访问其他资源，则直接跳到登陆页面
		if(username == null&&!httpRequest.getServletPath().equals("/login.jsp")&&!httpRequest.getServletPath().equals("/validate.jsp")){
			httpResponse.sendRedirect(httpRequest.getContextPath()+"/login.jsp");
			return;
		}

		chain.doFilter(req, resp);
	}
	@Override
	public void init(FilterConfig config) throws ServletException {
	}

	@Override
	public void destroy() {
	}
}
