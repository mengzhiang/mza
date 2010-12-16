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
<%
	String id = request.getParameter("id");
	Connection conn = DBUtil.getConnection();
	Statement stmt = conn.createStatement();
	
	String check = "select * from t_user where id="+id;
	System.out.println(check);
	ResultSet crs = stmt.executeQuery(check);
	if(!crs.next()){
		out.println("用户不存在！");
		return;
	}
	String sql = "select * from t_user where id=" + id;
	ResultSet rs = stmt.executeQuery(sql);
	rs.next();
	String user_id = rs.getString(1);
	String user_name = rs.getString(2);
	String user_pwd = rs.getString(3);
	rs.close();
	stmt.close();
	conn.close();
%>
<form action="user_update.jsp" method="post">
<table border="1">
	<tr>
		<td>编号：</td>
		<td><input type="text" name="id" value="<%=user_id%>"></td>
	</tr>
	<tr>
		<td>用户名：</td>
		<td><input type="text" name="name" value="<%=user_name%>"></td>
	</tr>
	<tr>
		<td>密码：</td>
		<td><input type="text" name="pwd" value="<%=user_pwd%>"></td>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td><input type="submit" value="提交">&nbsp;&nbsp;&nbsp;<a href="user_list.jsp">返回</a></td>
	</tr>
</table>
</form>
</body>
</html>