<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
if(("admin").equals(name)&&("123").equals(pwd)){
	out.println(name+"登陆成功！2秒钟后跳转到用户页面");
	int stayTime =2;
	String URL = "user/user_list.jsp";
	String content=stayTime+";URL="+URL;
	response.setHeader("REFRESH",content);
}else{
	out.println(name+"登陆失败！");
};
%>
</body>
</html>