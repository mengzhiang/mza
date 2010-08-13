<%@ page language="java" pageEncoding="UTF-8"%>

<html>
<head>
<style type="text/css">
.body_bg {
	background-color: #5e96c5;
	background-image: url(images/images/bg.gif);
	background-position: left top;
	text-align: center;
	background-repeat: no-repeat;
}

.login_bg {
	background-image: url(images/login_bg.gif);
	background-repeat: no-repeat;
	height: 315px;
	width: 545px;
	margin:0 auto 0 auto;
	position:absolute;  
	left:50%;  
	top:50%;  
	margin-left:-272px;  
	margin-top:-157px;  
}
.login_table {
	width:300px;
	height:120px;
	position:absolute;  
	margin-left:50px;  
	margin-top:120px;  
}
.login_td{
	text-align:left;
	font-family:Verdana, Arial, Helvetica, sans-serif, "宋体"; HEIGHT: 28px;
	font-size:12px;
	width:55px;
}
.input_bg{
	width:180px;
	font-family:Verdana, Arial, Helvetica, sans-serif, "宋体"; HEIGHT: 18px;
}
</style>
<script type="text/javascript" src="ajax/common.js"></script>
<script type="text/javascript" src="index.js"></script>
</head>
<body class="body_bg">
	<div  class="login_bg">
			<table class="login_table">
				<tr>
					<td class="login_td">用户名：</td>
					<td><input id="username" type="text" name="username" class="input_bg"></input></td>
				</tr>
				<tr>
					<td class="login_td">密&nbsp;&nbsp;码：</td>
					<td><input id="password" type="password" name="password" class="input_bg"></input></td>
				</tr>
				<tr>
					<td ></td>
					<td >
						<img id="button"  src="images/images/button.gif"/>
					</td>
				</tr>
				
			</table>
	</div>
</body>
</html>
