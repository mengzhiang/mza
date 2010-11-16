<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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
	background-image: url(images/login_bg.png);
	opacity: 0.7;
	background-repeat: no-repeat;
	height: 315px;
	width: 545px;
	margin: 0 auto ;
	position: absolute;
	left: 50%;
	top: 40%;
	margin-left: -272px;
	margin-top: -157px;
}

.login_form {
	width: 480px;
	height: 120px;
	position: absolute;
	margin-top: 120px;
}
.login_form div {
	width: 400px;
	margin-top: 5px;
}

.login_form div span{
	font-family: Verdana, Arial, Helvetica, sans-serif, "宋体";
	height: 28px;
	font-size: 12px;
}

.input_bg {
	width: 180px;
	font-family: Verdana, Arial, Helvetica, sans-serif, "宋体";
	height: 18px;
}

.errormsg {
	margin-left: 15px;
	font-size: 12px;
	color: red;
}

.input_yzm {
	width: 106px;
	font-family: Verdana, Arial, Helvetica, sans-serif, "宋体";
	height: 18px;
	font-size: 12px;
}

input,img {
	vertical-align: middle;
}

.yzmimg {
	cursor: pointer;
}
</style>
<script type="text/javascript" src="ajax/common.js"></script>
<script type="text/javascript" src="index.js"></script>
</head>
<body class="body_bg">
<div class="login_bg">
<div class="login_form" >
	<div>
		<span>用户名：</span>
		<span><input id="username" type="text" name="username"
			class="input_bg"></input></span>
	</div>
	<div>
		<span>密&nbsp;&nbsp;&nbsp;码：</span>
		<span><input id="password" type="password" name="password"
			class="input_bg"></input></span>
	</div>
	<div>
		<span>验证码：</span>
		<span><input id="yzm" type="text" name="yzm" class="input_yzm"></input>
		<img id="yzmpic" width="68" height="22" src="" title="点击更换"
			class="yzmimg" /></span>
	</div>
	<div>
		<span><img id="button" src="images/images/button.gif" /></span>
	</div>

</div>
</div>
</body>
</html>
