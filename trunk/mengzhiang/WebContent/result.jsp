<%@taglib uri="http://java.sun.com/jsf/core" prefix="f" %>
<%@taglib uri="http://java.sun.com/jsf/html" prefix="h" %>
 <%@page contentType="text/html;charset=UTF-8"%>
 <html>
 <head>
 <title>第一个JSF程序</title>
 </head>
 <body>
<f:view>
   		<h:outputText value="#{user.username}" />您好
   	
   	</f:view>



 </body>
 </html>