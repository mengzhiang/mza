
     <%@ page language="java" pageEncoding="GBK"%>
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
    <html:html lang="true">
      <head>
        <html:base />
        <title>login</title>
        <meta http-equiv="pragma" content="no-cache">
        <meta http-equiv="cache-control" content="no-cache">
        <meta http-equiv="expires" content="0">
        <meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
        <meta http-equiv="description" content="This is my page">
        <!--
        <link rel="stylesheet" type="text/css" href="styles.css">
        -->
    <script type="text/javascript" src="js/RSA.js"></script>
    <script type="text/javascript" src="js/BigInt.js"></script>
    <script type="text/javascript" src="js/Barrett.js"></script>
    <script type="text/javascript">
    function rsalogin()
    {
       bodyRSA();
       var result = encryptedString(key, document.getElementById("pwd").value);
       //alert(result);
       loginForm.action="login.do?result="+result;
       loginForm.submit();
    }
    var key ;
    function bodyRSA()
    {
        setMaxDigits(130);
        key = new RSAKeyPair("10001","","a6b9766b4b61b8be7b2f1a413f4072b227ef9f26394bc99dffad5079a84aba950a3592ec446c63be93b212bfa86315c95a8ab433e9ff5c94e1c69c71bdfbd79e38bc9f781b5112ca52408d5fb03039a1f4bef8ce0fa0b718fce72787c02021a9f2cc8e66c9acaddb721b143fa64307e73e9b53dbbd16bf32716f4bd005d0fe03");
    }
    </script>
      </head>
      <body >
        <form action="login" method="post" focus="username">
          <table border="0">
            <tr>
              <td>Login:</td>
              <td><input  property="username" /></td>
            </tr>
            <tr>
              <td>Password:</td>
              <td><password property="password" styleId="pwd"/></td>
            </tr>
            <tr>
              <td colspan="2" align="center"><input type="button" value="SUBMIT" onclick="rsalogin();"/></td>
            </tr>
          </table>
        </form>
      </body>
    </html:html>