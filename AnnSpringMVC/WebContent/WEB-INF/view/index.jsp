<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%
	String PATH = request.getContextPath();
%>
<link type="text/css" href="<%=PATH%>/css/smoothness/jquery-ui-1.7.2.custom.css" rel="stylesheet" />
<link type="text/css" href="<%=PATH%>/css/debug.css" rel="stylesheet" />
<script type="text/javascript" src="<%=PATH%>/js/jquery-1.4.2.js"></script>
<script type="text/javascript" src="<%=PATH%>/js/jquery-ui-1.7.2.custom.min.js"></script>
<script type="text/javascript" src="<%=PATH%>/js/jquery-exception.js"></script>
<script type="text/javascript">
$(function(){
	$("#ajaxNormal").click(function(){
		$.ajax({
			url:"<%=PATH%>/hello/ajaxNormal",
			dateType:"json",
			success:function(json){
				$("#ajaxNormal").after(json);
			},
			error:function(json){
				alert("error");
			}
		});
	});
	$("#ajaxBusi").click(function(){
		$.ajax({
			url:"<%=PATH%>/hello/ajaxBusi",
			dateType:"json",
			success:function(json){
				$("#ajaxBusi").after(json.message);
			},
			error:function(json){
				alert("error");
			}
		});
	});
	$("#ajaxSys").click(function(){
		$.ajax({
			url:"<%=PATH%>/hello/ajaxSys",
			dateType:"json",
			success:function(json){
					$("#ajaxSys").after(json.message);
				//先判断业务异常，最后系统异常
				$.syse(json.detail);
			},
			error:function(json){
				alert("error");
			}
		});
	});
});
</script>
<title>异常测试</title>
</head>
<body>
<br>
	<br>
	<a href="<%=PATH%>/hello/normal">调转类（正常情况）</a>
	<br>
	<br>
	<a href="<%=PATH%>/hello/pageBusi">调转类（业务异常）</a>
	<br>
	<br>
	<a href="<%=PATH%>/hello/pageSys">调转类（系统异常）</a>
	<br>
	<br>
	<hr>
	<input id="ajaxNormal" type="button" value="正常情况ajax">

	<br>
	<br>
	<input id="ajaxBusi" type="button" value="业务异常ajax">

	<br>
	<br>
	<input id="ajaxSys" type="button" value="系统异常ajax">
	<br>
	<br>
</body>
</html>