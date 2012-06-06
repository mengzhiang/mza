<%@ page language="java"  pageEncoding="utf-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%
String path = request.getContextPath();
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>电子销售门户</title>

	<script>
		function on_submit(){		
			alert();
			window.location="";
			/*
			var obj = document.getElementById('userID');
			obj.className = '';
			var obj2 = document.getElementById('username_msg');
			obj2.innerHTML = '';
			if(obj.value.length == 0){
				obj2.innerHTML = '用户名必须填写';
				return false;
			}
			return true;*/
			
		}
	</script>

</head>

<body>
	<form method="post" action="pages/index/index.jsp"
				name="login" id="login" onsubmit="return on_submit()">
	<table width="100%"  height="100%" border="0" cellspacing="0" cellpadding="0">
	  <tr>
	    <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
	      <tr>
	        <td height="561" style="background:url(<%=path%>/b2b/img/loginImg/lbg.gif)"><table width="940" border="0" align="center" cellpadding="0" cellspacing="0">
	          <tr>
	            <td height="238" style="background:url(<%=path%>/b2b/img/loginImg/login01.jpg)">&nbsp;</td>
	          </tr>
	          <tr>
	            <td height="190"><table width="100%" border="0" cellspacing="0" cellpadding="0">
	              <tr>
	                <td width="208" height="190" style="background:url(<%=path%>/b2b/img/loginImg/login02.jpg)">&nbsp;</td>
	                <td width="518" style="background:url(<%=path%>/b2b/img/loginImg/login03.jpg)"><table width="320" border="0" align="center" cellpadding="0" cellspacing="0">
	                  <tr>
	                    <td width="40" height="50"><img src="<%=path%>/b2b/img/loginImg/user.gif" width="30" height="30"></td>
	                    <td width="38" height="50">用户</td>
	                    <td width="252" height="50">
	                    	<input type="text" name="userID" id="userID" style="width:164px; height:32px; line-height:34px; background:url(<%=path%>/b2b/img/loginImg/inputbg.gif) repeat-x; border:solid 1px #d1d1d1; font-size:15pt; font-family:Verdana, Geneva, sans-serif;">
	                    	<!--<font color="red" size="2px;">(用户手机号码)</font>-->
							<span style="color:red; font-size:10px;" id="username_msg"> ${user_error}</span>
	                    </td>
	                 	
	                  </tr>
	                  <tr>
	                    <td height="50"><img src="<%=path%>/b2b/img/loginImg/password.gif" width="28" height="32"></td>
	                    <td height="50">密码</td>
	                    <td height="50">
	                    	<input type="password" name="password" id="password" style="width:164px; height:32px; line-height:34px; background:url(<%=path%>/b2b/img/loginImg/inputbg.gif) repeat-x; border:solid 1px #d1d1d1; font-size:15pt; ">
							<span style="color:red; font-size:10px;"> ${pwd_error}</span>
	                    </td>
	                 	
					  </tr>
	                  <tr>
	                    <td height="40">&nbsp;</td>
	                    <td height="40">&nbsp;</td>
	                    <td height="60">
				<input type="submit" width="97" height="35" name="login" value="" style="width:97px; height:35px; line-height:35px; background:url(<%=path%>/b2b/img/loginImg/login.gif) repeat-x; border:solid 1px #d1d1d1; font-size:9pt;" />
			    </td>
	                  </tr>
	                </table></td>
	                <td width="214" style="background:url(<%=path%>/b2b/img/loginImg/login04.jpg)" ></td>
	              </tr>
	            </table></td>
	          </tr>
	          <tr>
	            <td height="133" style="background:url(<%=path%>/b2b/img/loginImg/login05.jpg)">&nbsp;</td>
	          </tr>
	        </table></td>
	      </tr>
	    </table></td>
	  </tr>
	</table>
	</form>
</body>
</html>
