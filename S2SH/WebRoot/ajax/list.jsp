<%@ page language="java" pageEncoding="UTF-8"%>

<html>
  <head>
    <link rel="stylesheet" type="text/css" href="default.css">
    <script type="text/javascript" src="common.js"></script>
  	<script type="text/javascript" src="list.js"></script>
  	
  </head>
  <body>
  <input type="button" id="add" value="新增">
  <input type="text" id="aa">
    <div id="id1" style="display:none;position:absolute;background-color:red;z-index:3;opacity:0.5;filter:alpha(opacity=50)"></div>
    <div id="mytable" style="position:absolute;z-index:2;"></div>
    <div id="id2" style="margin-left:300px;margin-top:150px;display:none;position:absolute;background-color:yellow;z-index:4;">
    	<table border="0">
    		<tr class="modeltitle">
    			<td>标题</td>
    			<td><a href="#" onclick="closeDialog()">X</a></td>
    		</tr>
    		<tr class="modelcontent">
    			<td colspan="2">
    				<iframe id="dialog" src="" marginwidth="0" marginheight="0" width="100%" frameborder="0"></iframe>
    			</td>
    		</tr>
    	</table>
    </div>
  </body>
</html>
