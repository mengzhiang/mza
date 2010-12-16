<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.sql.*"  %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>用户管理</title>
</head>
<body>
<%
/**
显示所有用户信息，没有数据模型的概念，完全过程化。没有javabean
1:先从数据库中取出来。
	a:加载驱动,需要mysql驱动包,通过连接字符串获得数据库连接
	b:通过数据库连接 获得statement
	c:执行sql获得resultset
	d：循环resultset输出内容
	e：关闭statement和conn
*/
Class.forName("com.mysql.jdbc.Driver");
String str ="jdbc:mysql//localhost:3306/bbs?user=root&password=123456";
Connection conn = DriverManager.getConnection(str);
conn.createStatement();
%>
</body>
</html>