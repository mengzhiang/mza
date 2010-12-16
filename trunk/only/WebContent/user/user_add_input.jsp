<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.sql.*"%>
<%@ page import="com.only.util.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>修改用户信息</title>
</head>
<body>
<form action="user_add.jsp" method="post">
<table border="1">
	<tr>
		<td>编号：</td>
		<td><input type="text" name="id"></td>
	</tr>
	<tr>
		<td>用户名：</td>
		<td><input type="text" name="name"></td>
	</tr>
	<tr>
		<td>密码：</td>
		<td><input type="text" name="pwd"></td>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td><input type="submit" value="提交">&nbsp;&nbsp;&nbsp;<a href="user_list.jsp">返回</a></td>
	</tr>
</table>
</form>
</body>
</html>