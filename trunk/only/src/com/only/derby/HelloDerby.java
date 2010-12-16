package com.only.derby;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

/**
 * Created on 2010-12-16
 * <p>名称: 无框架_子系统名_模块名</p>
 * <p>描述: [通过单独进程启动derby然后连接数据库]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
*/
public class HelloDerby {
	public static void main(String args[]){
		try {
			Class.forName("org.apache.derby.jdbc.ClientDriver");


			String url = "jdbc:derby://localhost:1527/bbs";
			Connection conn = DriverManager.getConnection(url);
			Statement stmt = conn.createStatement();
			String sql = "select * from t_user";
			ResultSet rs = stmt.executeQuery(sql);
			while(rs.next()){
				System.out.println(rs.getString(1)+rs.getString(2)+rs.getString(3));
			}
			rs.close();
			stmt.close();
			conn.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
}
