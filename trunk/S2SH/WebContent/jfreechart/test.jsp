<%@ page language="java" contentType="text/html; charset=GB18030"
    pageEncoding="GB18030"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=GB18030">
<title>Insert title here</title>
</head>
<body>
 设置他在HTML中的value，必须用fieldValue，不是
                                         value，这是struts2标签库的特性<hr></hr>
       	<form action="/S2SH/jfc/select">
			<s:checkbox name="interest" label="足球"
	             fieldValue="football" labelposition="left">
	         </s:checkbox>
	         <s:checkbox name="interest" label="篮球"
	             fieldValue="basketball" labelposition="left">
	         </s:checkbox>
	         <s:checkbox name="interest" label="排球"
	             fieldValue="volleyball" labelposition="left">
	         </s:checkbox>
  		<input type="submit" value="提交"/>
     </form>      
	<img alt="" src=""/>
        
</body>
</html>