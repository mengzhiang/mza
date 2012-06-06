<%@ page language="java" pageEncoding="UTF-8"%>
<%@taglib prefix="decorator" uri="http://www.opensymphony.com/sitemesh/decorator"%>
<%@taglib prefix="page" uri="http://www.opensymphony.com/sitemesh/page"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<link rel="stylesheet" type="text/css" href="/S2SH/decorators/layout.css">
		<title><decorator:title /></title>
		<decorator:head />
	</head>

	<body>
	<div id="container">
	  <div id="header">This is the Header</div>
	  <div id="menu">This is the Menu</div>
	  <div id="mainContent">
	    <div id="sidebar">This is the sidebar<br />
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
			This is the sidebar<br />
			<br />
	    </div>
	    <div id="content">
			<decorator:body />
	    </div>
	  </div>
	  <div id="footer">This is the footer</div>
	</div>
	</body>
</html>
