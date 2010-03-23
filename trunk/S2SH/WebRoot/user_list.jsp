<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<html>
  <head>
  	<style>
  		table
  		{
			border:1px solid #429fff;	/* 表格边框 */
			border-collapse:collapse;	/* 边框重叠 */
		}
		td{
			border:1px solid #429fff;
		}
		th{
			border:1px solid #429fff;
			background-color:#d2e8ff;
		}
		.true{
			background-color:#d2e8ff;
		}
  	</style>
  	<script type="text/javascript" src="user_list.js"></script>
  </head>
  <body>
  userlist;
  <s:debug></s:debug>
  <table>
	  <tr>
	  	  <th><input type="checkbox" onclick="test();"/></th>
	  	  <th>index</th>
		  <th>id</th>
		  <th>name</th>
		  <th>pwd</th>
		  <th>编辑</th>
		  <th>删除</th>
	  </tr>
	<s:iterator value="users" status="s">
		<tr class="<s:property value="#s.even"/>">
			<th><input type="checkbox"/></th>
			<td><s:property value="#s.count"/></td>
			<td><s:property value="id"/></td>
			<td><s:property value="name"/></td>
			<td><s:property value="pwd"/></td>
			<td><img src="imgs/edit.png" style="cursor:pointer" onclick="edit()"/></td>
			<td><img src="imgs/del.png" style="cursor:pointer" onclick="del()"/></td>
    	</tr>
    </s:iterator>
     </table>
  </body>
</html>
