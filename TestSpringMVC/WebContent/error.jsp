<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script type="text/javascript" src="jquery-1.4.2.js"></script>
<script type="text/javascript" src="debug.js"></script>
</head>
<body>
customer message
${exceptionMessage.message}
<br>
<div class="debug_message" style="display: none">
	developer message:
	${exceptionMessage.detail}
</div>
</body>
</html>