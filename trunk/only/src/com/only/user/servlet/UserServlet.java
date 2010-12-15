package com.only.user.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created on 2010-12-15
 * <p>名称: 无框架_子系统名_模块名</p>
 * <p>描述: [为什么只映射doGet和doPost方法？
 *           因为目前html只支持这两种，不过通过ajax可以支持多种put，delete都行]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
*/
public class UserServlet extends HttpServlet{
	
	private static final long serialVersionUID = -8429211622330631808L;

	/**
	 * 这里完全可以根据请求的不同来通过REST来实现CRUD，但是因为html支持问题,不行
	 *  为了统一接口就把方法都转到doPost去做。
	 *  如何实现方法的映射，如果我要调用一个方法，判断url传递的参数。
	 *  不管
	 */
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		this.doPost(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		String name = req.getParameter("name");
		System.out.println(name);
	}

	

}
