package com.neusoft;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

import org.jdom.Document;
import org.jdom.Element;
import org.jdom.input.SAXBuilder;
import org.jdom.xpath.XPath;

public class TestJDBC {

	public static void main(String[] args) {
		
		try {
			//加载驱动类
			Class.forName("com.mysql.jdbc.Driver");
			//通过DriverManager获取Connection
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/bbs","root","123456");
			//获取statement
			Statement stmt = conn.createStatement();
			SAXBuilder builder = new SAXBuilder();   
			Document doc = builder.build(TestJDBC.class.getResourceAsStream("user.hbm.xml"));
			Element element = doc.getRootElement();
			Element clasel = (Element)XPath.selectSingleNode(element, "/class");
			String table_name =  clasel.getAttributeValue("table");
			String xxx = "t_user";
			String column_name1 = "id";
			String column_name2 = "name";
			String column_name3 = "pwd";
			String id = null;
			String name ="'hibernate'";
			String pwd = "123123";
			String sql = 
				"insert into "
				+table_name
				+"("+column_name1+","+column_name2+","+column_name3+")"
				+" values("+id+","+name+","+pwd+")";
			System.out.println(sql);
			stmt.executeUpdate(sql);
			conn.close();
		}catch (Exception e) {
			e.printStackTrace();
		}
	}

}
