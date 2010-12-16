package com.only.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBUtil {
	/**
	 *  Created on 2010-12-16 
	 * <p>Description:[获得一个数据库连接，每次请求都启动一个数据库连接]</p>
	 * @param
	 * @return
	 */
	public static Connection getConnection(){
		String url = "jdbc:derby://localhost:1527/bbs";
		Connection conn = null;
		try {
			conn = DriverManager.getConnection(url);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return conn;
	}
}
