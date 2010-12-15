package com.only.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

public class EncodeFilter implements Filter{

	/**
	 * 初始化filter
	 *  Created on 2010-12-15
	 * <p>Description:[方法功能中文描述]</p>
	 * @author:孟志昂
	 */
	@Override
	public void init(FilterConfig config) throws ServletException {
	}
	
	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {
		request.setCharacterEncoding("UTF-8");
		chain.doFilter(request, response);
	}

	@Override
	public void destroy() {
	}
}
