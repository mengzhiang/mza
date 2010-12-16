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
	String user_id = request.getParameter("id");
	String user_name = request.getParameter("name");
	String user_pwd = request.getParameter("pwd");
	Connection conn = DBUtil.getConnection();
	Statement stmt = conn.createStatement();
	
	//防止重复id，先判断
	String check = "select * from t_user where id="+user_id;
	ResultSet rs = stmt.executeQuery(check);
	if(rs.next()){
		out.println("\""+user_id+"\"已被使用，请更换id！");
		return;
	}
	String sql = "insert into t_user values("+user_id+",'"+user_name+"','"+user_pwd+"')";
	System.out.println(sql);
	
	int i = stmt.executeUpdate(sql);
	if(i==1){
		out.println("新增成功!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='user_list.jsp'>返回主页面</a>");
	}else{
		out.println("新增失败，请重试！");
	}
	stmt.close();
	conn.close();
%>

</body>
</html>