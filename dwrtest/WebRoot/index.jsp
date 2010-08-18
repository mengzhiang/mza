<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
  <!-- JTest.js是dwr在调用的时候自动生成的，所以找不到这个文件，也不需要找，只要这么写就行了。默认就放在interface/下面 -->
  <script type='text/javascript' src='dwr/interface/JTest.js'></script>
  <!--engine.js和util.js这两个工具类是存在dwr.jar包里的，所以也不需要引入，当dwr调用的时候他会从jar包里读流出来。  -->
  <script type='text/javascript' src='dwr/engine.js'></script>
  <script type='text/javascript' src='dwr/util.js'></script>
	
  </head>
  
  <body>
    <script type="text/javascript">
    	function test(){
    	 JTest.hello(callback); 	
    	 }
    	 function callback(str){
    	 	alert(str);
    	 }
    	 test();	
    </script>
  </body>
</html>
