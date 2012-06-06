<%@ page language="java" pageEncoding="UTF-8"%>

<html>
  <head>
    <link rel="stylesheet" type="text/css" href="default.css">
    <script type="text/javascript">
    	var id = <%=request.getParameter("id")%>;
    </script>
    <script type="text/javascript" src="common.js"></script>
  	<script type="text/javascript" src="edit.js"></script>
  	
  </head>
  <body>
  	<table>
  		<tr>
  			<td>id: </td>
  			<td><input type="text" id="id" disabled="disabled"></td>
  		</tr>
  		<tr>
  			<td>name: </td>
  			<td><input type="text" id="name"></td>
  		</tr>
  		<tr>
  			<td>pwd: </td>
  			<td><input type="text" id="pwd"></td>
  		</tr>
  		<tr>
  			<td><input type="button" id="bt1" value="提交"></td>
  			<td><input type="button" id="bt2" value="返回"></td>
  		</tr>
  		
  	</table>
  	  
  	  
  </body>
</html>
