<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<html>
  <head>
  </head>
  <body>
  <s:debug></s:debug>
	<form action="user_save">
		<input type="hidden" name="user.id"/>
  		用户名：<input type="text" name="user.name"/>
  		密码：<input type="password" name="user.pwd"/>
  		<input type="submit" value="提交"/>
     </form>
  </body>
</html>
