/*jadclipse*/// Decompiled by Jad v1.5.8g. Copyright 2001 Pavel Kouznetsov.

package com.neusoft.base.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class PermSessionUserFilter implements Filter {

	public void destroy() {
	}

	public void doFilter(ServletRequest servletRequest,
			ServletResponse servletResponse, FilterChain fc)
			throws IOException, ServletException {
		HttpServletRequest request = (HttpServletRequest) servletRequest;
		HttpServletResponse response = (HttpServletResponse) servletResponse;
		
		HttpSession session = request.getSession(); 
		request.getContextPath();
		if(session.getAttribute("currentUser")==null&&!request.getServletPath().equals("/index.jsp")){
			response.sendRedirect(request.getContextPath()+"/index.jsp");
			return;
		}
		fc.doFilter(request, response);
	}

	public void init(FilterConfig arg0) throws ServletException {
	}

}
