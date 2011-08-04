<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.sql.*"  %>
<%@ page import="com.only.util.*"  %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>用户管理</title>
</head>
<body>
<a href="user_add_input.jsp">新增用户</a>
<a href="../logout.jsp">退出系统</a>
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
Connection conn = DBUtil.getConnection();
Statement stmt = conn.createStatement();
String sql = "select * from t_user order by id";
ResultSet rs = stmt.executeQuery(sql);
String str = "<table border='1'><tr><td>编号</td><td>用户名</td><td>密码</td><td>修改</td><td>删除</td></tr>";
while(rs.next()){
	str +="<tr>";
	str += "<td>"+rs.getString(1)+"</td>";
	str += "<td>"+rs.getString(2)+"</td>";
	str += "<td>"+rs.getString(3)+"</td>";
	str += "<td><a href='user_update_input.jsp?id="+rs.getString(1)+"'>修改</a></td>";
	str += "<td><a href='user_delete.jsp?id="+rs.getString(1)+"'>删除</a></td>";
	str +="</tr>";
}
out.println(str);
rs.close();
stmt.close();
conn.close();

%>

</body>
</html>