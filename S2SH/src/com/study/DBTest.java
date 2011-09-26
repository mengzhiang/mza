package com.study;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DBTest {

	/**
	 *  Created on 2011-6-28 
	 * <p>Description:[方法功能中文描述]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param args
	 */
	public static void main(String[] args) {
		try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		try {
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/bbs?user=root&password=123456");
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery("select * from t_user");
			while(rs.next()){
				//System.out.println(rs.getString(1)+rs.getString(2)+rs.getString(3));
			}
			stmt.close();
			return;
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			System.out.println("finally out");
		}
	}

}
