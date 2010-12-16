package com.only.util;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBUtil {
	/**
	 *  Created on 2010-12-16 
	 * <p>Description:[获得一个数据库连接，每次请求都启动一个数据库连接]</p>
	 * @param
	 * @return
	 */
	public static Connection getConnection(){
		
		String url = "jdbc:mysql://localhost:3306/bbs?user=root&password=123456";
		Connection conn = null;
		try {
			Class.forName("com.mysql.jdbc.Driver");	
			conn = DriverManager.getConnection(url);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return conn;
	}
}
