<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
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
  <script type='text/javascript' src='/dwrtest/dwr/interface/JTest.js'></script>
  <script type='text/javascript' src='/dwrtest/dwr/engine.js'></script>
  <script type='text/javascript' src='/dwrtest/dwr/util.js'></script>
	
  </head>
  
  <body>
    <script type="text/javascript">
    	function test(){
    	 var cl = JTest.hello(); 	
    	 tttt=setTimeout('alert()',1000);
    	 }
    	 test();	
    </script>
  </body>
</html>