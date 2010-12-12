package com.wojia.test;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class TestServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		this.doPost(req,resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		System.out.println("doPost..................");
		
		resp.setContentType("text/xml;charset=UTF-8");
		PrintWriter  sos =resp.getWriter();

		
		String str ="";
		try {
			Class.forName("com.mysql.jdbc.Driver");	
		} catch (ClassNotFoundException e) {
			System.out.println("load Driver fail");
			e.printStackTrace();
		}
		//String url = "jdbc:mysql://localhost:3306/mengzhiang?user=mengzhiang&password=m19860906";
		String url = "jdbc:mysql://localhost:3306/bbs?user=root&password=123456";
		try {

			Connection conn = DriverManager.getConnection(url);

			Statement stmt = conn.createStatement();
			sos.println("驱动加载成功");
			String sql = "select * from t_user";
			ResultSet rs = stmt.executeQuery(sql);
			sos.println("sql执行成功");
			while(rs.next()){
				str +=rs.getString(1);
			}
			sos.println("全部成功");
		} catch (SQLException e) {
			e.printStackTrace();
		}
		sos.println(str);
	}

}
