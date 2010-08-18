<%@ page contentType="text/html; charset=UTF-8"%>
<html>
<head>
<link rel="stylesheet" type="text/css" href="../jslib/ext-3.2.0/resources/css/ext-all.css" />
<script type="text/javascript" src="../jslib/ext-3.2.0/adapter/ext/ext-base.js"></script>
<script type="text/javascript" src="../jslib/ext-3.2.0/ext-all.js"></script>
<script type="text/javascript" src="../jslib/ext-3.2.0/examples/ux/TabCloseMenu.js"></script>
<script type="text/javascript" src="list.js"></script>
<style type="text/css">
.quit {
	margin-top: 71px;
	height: 20px;
	width: 80px;
	cursor: pointer;
	color: yellow;
	border: 1px none;
	margin-left: 960px;
}
</style>
<script type="text/javascript">
	function quit(){
		window.location = "../index.jsp";
		}
</script>
</head>
<body>

<div id="north-div">
<div id="quit" class="quit" onclick="quit()">退出</div>
</div>
<div id="south-div"></div>
<div id="welcome">
<table border="0" cellpadding="0" cellspacing="0" width="100%">
	<tr>
		<td height="100%"><img src="../images/wel_jwxt.png" /></td>
		<td width="100%" height="90" background="../images/bg_wel_jwxt.png"></td>
	</tr>
</table>
</div>

</body>
</html>