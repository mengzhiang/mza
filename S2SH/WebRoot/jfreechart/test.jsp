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
 ��������HTML�е�value��������fieldValue������
                                         value������struts2��ǩ�������<hr></hr>
       	<form action="/S2SH/jfc/select">
			<s:checkbox name="interest" label="����"
	             fieldValue="football" labelposition="left">
	         </s:checkbox>
	         <s:checkbox name="interest" label="����"
	             fieldValue="basketball" labelposition="left">
	         </s:checkbox>
	         <s:checkbox name="interest" label="����"
	             fieldValue="volleyball" labelposition="left">
	         </s:checkbox>
  		<input type="submit" value="�ύ"/>
     </form>      
	<img alt="" src=""/>
        
</body>
</html>