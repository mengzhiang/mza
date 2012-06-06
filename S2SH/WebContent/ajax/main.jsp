<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<link rel="stylesheet" type="text/css" href="layout.css">
		<script type="text/javascript" src="main.js"></script>
		<title></title>
		
	</head>

	<body>
	<div id="container">
	  <div id="header">This is the Header</div>
	  <div id="menu">This is the Menu</div>
	  <div id="mainContent">
	    <div id="sidebar">This is the sidebar<br />
		     <br />
		     <a href="#" onclick="showlist();">显示list</a><br></br>
		    This is the sidebar<br />
		      <br />
		    This is the sidebar<br />
		      <br />
			This is the sidebar<br />
			<br />
			This is the sidebar<br />
			<br />
			This is the sidebar<br />
			<br />
			This is the sidebar<br />
			<br />
	    </div>
	    <div id="content">
	    	<iframe id='list' frameborder='0' width="100%" scrolling="no" onload='SetCwinHeight()' src='list.jsp'></iframe>
	    </div>
	  </div>
	  <div id="footer">This is the footer</div>
	</div>
	</body>
</html>
