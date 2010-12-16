<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="com.only.util.*" %>
<%@ page import="java.sql.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<%

String name = request.getParameter("name"); 
String pwd = request.getParameter("pwd");
Connection conn = DBUtil.getConnection();
Statement stmt = conn.createStatement();

String sql = "select * from t_user where name='"+name+"' and pwd = '"+pwd+"'";
ResultSet rs = stmt.executeQuery(sql);
if(rs.next()){
	String currentUserName = rs.getString(1);
	//在session中记录user 说明登录成功！
	request.getSession().setAttribute("currentUserName",currentUserName);
	out.println(name+"登陆成功！2秒钟后跳转到用户页面");
	int stayTime =2;
	String URL = "user/user_list.jsp";
	String content=stayTime+";URL="+URL;
	response.setHeader("REFRESH",content);
}else{
	out.println("用户名密码错误，请重新登录！");
};
%>
</body>
</html>