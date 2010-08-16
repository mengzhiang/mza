function Login() {
	this.submit = function() {
		if (!this.checkInput()) {
			return;
		};
		var name = document.getElementById("username").value;
		var pwd = document.getElementById("password").value;
		var paras = "permUser.username=" + name + "&permUser.password=" + pwd;
		var data = {
			sync : false,
			url : "login_login?" + paras
		}
		var object = MZA.ajax(data);
		if (object.flag == "success") {
			window.location = "extjs/list.jsp";
		} else if (object.flag == "该用户不存在") {
			if (!document.getElementById("nouser")) {
				var node = document.createElement("span");
				node.setAttribute("id", "nouser");
				node.setAttribute("class", "errormsg");
				node.innerHTML = "该用户不存在";
				document.getElementById("username").parentNode
						.appendChild(node);
			}
		} else if (object.flag == "密码错误") {
			if (!document.getElementById("passerror")) {
				var node = document.createElement("span");
				node.setAttribute("id", "passerror");
				node.setAttribute("class", "errormsg");
				node.innerHTML = "密码错误";
				document.getElementById("password").parentNode
						.appendChild(node);
			}
		} else {

		}
	}
	// 校验
	this.checkInput = function() {
		var erronodes = document.getElementsByName("blankerror");
		if(erronodes.length>0){
			MZA.removeAllElement(erronodes);
		}
		var flag = true;
		var arr = document.getElementsByTagName("input");
		var len = arr.length;
		for (var i = len - 1; i >= 0; i--) {
			if (!arr[i].value) {
				var node = document.createElement("span");
				node.setAttribute("name", "blankerror");
				node.setAttribute("class", "errormsg");
				node.innerHTML = "不能为空";
				arr[i].parentNode.appendChild(node);
				flag = false;
			}
		}
		return flag;
	}
	// 更换背景图片
	this.swapImage = function(url) {
		document.getElementById("button").setAttribute("src", url);
	}
	// 去除提示信息
	this.onnamefocus = function() {
		if (document.getElementById("nouser")) {
			MZA.removeElement(document.getElementById("nouser"));
		}
	}
	// 去除提示信息
	this.onpassfocus = function() {
		if (document.getElementById("passerror")) {
			MZA.removeElement(document.getElementById("passerror"));
		}
	}
	this.enterToSubmit = function(event) {
		var e = event?event:window.event 
		if (event.keyCode == 13) {
			this.submit();
		}
	}
	this.inityzm = function(){
		var test = Math.random(0,1);
		var data ={
			sync:false,//同步非异步
			url :"login_geneImg?test="+test
		}
		var object = MZA.ajax(data);
		console.log(object.yzm);
		console.log(object.yzmjpgName);
		setTimeout("document.getElementById('yzmpic').setAttribute('src','/S2SH/temp/"+object.yzmjpgName+".jpg');",0);   
	}
	// 初始化方法
	this.init = function() {
		login.inityzm();
		MZA.connect("button", "onmouseover",
				"login.swapImage('images/images/button_onmouse.gif')");
		MZA.connect("button", "onmouseout",
				"login.swapImage('images/images/button.gif')");
		MZA.connect("button", "onclick", "login.submit()");
		MZA.connect("username", "onfocus", "login.onnamefocus()");
		MZA.connect("password", "onfocus", "login.onpassfocus()");
		MZA.connect("password", "onkeydown", "login.enterToSubmit(event)");
	}
}
var login = new Login();
MZA.addOnLoad(login.init);