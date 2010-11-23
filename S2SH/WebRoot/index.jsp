<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<style type="text/css">
	@import url(css/index.css);
</style>
<script type="text/javascript" src="ajax/common.js"></script>
<script type="text/javascript" src="index.js"></script>
</head>
<body class="body_bg">
	<div class="login_bg">
		<form class="login_form" >
			<div>
				<span>用户名：</span>
				<span><input id="username" type="text" name="permUser.username"></input></span>
			</div>
			<div>
				<span>密&nbsp;&nbsp;&nbsp;码：</span>
				<span><input id="password" type="password" name="permUser.password"></input></span>
			</div>
			<div>
				<span>验证码：</span>
				<span><input id="yzm" type="text" class="input_yzm"></input>
				<img id="yzmpic"  src="" title="点击更换" class="yzmimg" /></span>
			</div>
			<div>
				<div id="button"></div>
			</div>
		
		</form>
	</div>
</body>
</html>
