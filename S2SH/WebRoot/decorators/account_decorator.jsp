<%@ page language="java" pageEncoding="UTF-8"%>
<%@taglib prefix="decorator"
	uri="http://www.opensymphony.com/sitemesh/decorator"%>
<%@taglib prefix="page" uri="http://www.opensymphony.com/sitemesh/page"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css"
	href="/S2SH/decorators/layout.css">
<script type="text/javascript" src="/S2SH/decorators/js/jquery-1.4.2.js"></script>
<script type="text/javascript">

</script>
<title><decorator:title /></title>
<decorator:head />
</head>

<body id="notice">
<div id="topArea">
<div id="topAreaContent">
<div class="topAreaLeft"></div>
<div class="topAreaRight">欢迎您！<span class="topAreaLeftName">XXX</span>&nbsp;&nbsp;&nbsp;&nbsp;
<a href="../login.jsp">[安全退出]</a>&nbsp;&nbsp;<a href="../login.jsp">[重新登录]</a></div>
</div>
</div>
<div id="container">
<div id="header">
<div id="logoArea">
<div class="logo"></div>
<div class="logoname"></div>
<div class="companyinfo">公司订购热线：400-8888-8888</div>
</div>
</div>

<div id="menu">
<div id="menunav">
	<ul class="nav">
		<li><a href="../index/index.jsp" >首页</a></li>
		<li><a href="../order/order.jsp">订单中心</a></li>
		<li><a href="../asn/asn.jsp">物流中心</a></li>
		<li><a href="../notice/notice.jsp" >公告中心</a></li>
		<li><a href="../account/account.jsp" class="active">账户中心</a></li>
		<li><a href="../help/help.jsp">帮助中心</a></li>
		
	</ul>
</div>
</div>

<div id="mainContent">
<div id="main">
<div id="leftContent"><page:applyDecorator name="account_left"></page:applyDecorator>
</div>
<div id="rightContent"><decorator:body /></div>
</div>
</div>


<div id="footer">

<div class="links"><a href="#">关于我们</a>| <a href="#">联系我们</a>| <a href="#">友情链接</a>|
<a href="#">销售联盟</a>| <a href="#">人才招聘</a></div>
</div>
</div>
</body>
</html>
