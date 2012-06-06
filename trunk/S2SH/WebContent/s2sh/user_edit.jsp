<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<html>
  <head>
  </head>
  <body>
  user_edit;
  <s:debug></s:debug>
  		id :<s:text name="user.id"></s:text>
	<s:form action="user_save">
		<s:textfield name="user.id"></s:textfield>
		<s:textfield name="user.name"></s:textfield>
		<s:textfield name="user.pwd"></s:textfield>
		<s:submit></s:submit>
		<s:reset></s:reset>
     </s:form>
  </body>
</html>
