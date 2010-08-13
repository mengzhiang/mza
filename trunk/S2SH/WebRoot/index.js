function Login(){
	this.submit = function(){
		var name = document.getElementById("username").value;
		var pwd = document.getElementById("password").value;
		var paras = "permUser.username="+name+"&permUser.password="+pwd;
		var data ={
			sync:false,
			url:"login_login?"+paras
		}
		var object = MZA.ajax(data);
		if(object.flag=="success"){
			window.location = "extjs/list.jsp";
		}else{
			alert("登陆失败！");
		}
		
	}
	//更换背景图片
	this.swapImage = function(url){
		document.getElementById("button").setAttribute("src",url);
	}
	//初始化方法
	this.init = function(){
		MZA.connect("button","onmouseover","login.swapImage('images/images/button_onmouse.gif')");
		MZA.connect("button","onmouseout","login.swapImage('images/images/button.gif')");
		MZA.connect("button","onclick","login.submit()");
	}

}
var login = new Login();
MZA.addOnLoad(login.init);