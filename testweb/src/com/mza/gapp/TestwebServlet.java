package com.mza.gapp;

import java.io.IOException;
import javax.servlet.http.*;

@SuppressWarnings("serial")
public class TestwebServlet extends HttpServlet {
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		resp.setContentType("text/html; charset=UTF-8");
		resp.getWriter().println("Hello, ÕâÊÇÔú¸çµÄgoogle app engine");
	}
}
