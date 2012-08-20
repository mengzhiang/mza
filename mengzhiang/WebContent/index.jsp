<%@taglib uri="http://java.sun.com/jsf/core" prefix="f" %>
<%@taglib uri="http://java.sun.com/jsf/html" prefix="h" %>
 <%@page contentType="text/html;charset=UTF-8"%>
 <html>
 <head>
 <title>第一个JSF程序</title>
 </head>
 <body>
   <f:view>
 		<h:form>
 			<h3>请输入姓名:</h3>
 			名称:<h:inputText value="#{user.username}"></h:inputText>
  			<h:commandButton value="送出" action="login"></h:commandButton>
 		</h:form>
 	
 	</f:view>

 </body>
 </html>