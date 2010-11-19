function Login() {
	var E = MZA.event;
	var D = MZA.dom;
	var A = MZA.ajax;
	this.yzmcode = "";
	this.submit = function() {
		
		//验证表单。
		//表单序列化
		if ((!this.checkInput()) || (!this.checkYzm())) {
			return;
		};
		var paras = D.formSerialize($(".login_form")[0]);
		var data = {
			sync : false,
			url : "login_login?" + paras
		}
		var object = A.ajax(data);
		if (object.flag == "success") {
			window.location = "extjs/list.jsp";
		} else if (object.flag == "该用户不存在") {
			if (!$("#nouser")) {
				var node = D.create("span");
				node.attr("id", "nouser");
				node.addClass("errormsg");
				node.innerHTML = "该用户不存在";
				node.appendTo($("#username"));
			}
		} else if (object.flag == "密码错误") {
			if (!document.getElementById("passerror")) {
				var node = D.create("span");
				node.attr("id", "passerror");
				node.addClass("errormsg");
				node.innerHTML = "密码错误";
				node.appendTo($("#password"));
			}
		} else {

		}
	}
	// 校验
	this.checkInput = function() {
	
		var msgnode = $("input ~ span");
		if (msgnode.length > 0) {
			D.remove(msgnode);
		}
		var flag = true;
		var arr = $("input");
		var len = arr.length;
		for (var i = len - 1; i >= 0; i--) {
			if (!arr[i].value) {
				var node = D.create("span");
				node.addClass("errormsg");
				node.innerHTML ="不能为空";
				node.appendTo(arr[i]);
				flag = false;
			}
		}
		return flag;
	}
	// 判断验证码输入
	this.checkYzm = function() {
		var yzmvalue = $("#yzm").value;
		if (this.yzmcode == yzmvalue) {
			return true;
		} else {
			var node = D.create("span");
			node.addClass("errormsg");
			node.innerHTML ="验证码错误";
			node.appendTo($("#yzmpic"));
			return false;
		}
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
	// 去除提示信息
	this.onyzmfocus = function() {
		if (document.getElementById("yzmerror")) {
			MZA.removeElement(document.getElementById("yzmerror"));
		}
	}
	// 按Enter键登陆
	this.enterToSubmit = function(event) {
		event = E.getEvent(event);
		if (event.keyCode == 13) {
			login.submit();
		}
	}
	// 初始化验证码
	this.inityzm = function() {
		var test = Math.random(0, 1);
		var data = {
			sync : false,// 同步非异步
			url : "login_geneImg?test=" + test
		}
		var object = MZA.ajax.ajax(data);
		this.yzmcode = object.yzm;
		document.getElementById('yzmpic').setAttribute('src',
				'/S2SH/temp/yzm/' + object.yzmjpgName + '.jpg');
	}
	// 初始化方法
	this.init = function() {
		login.inityzm();
		var btn_submit = $("#button");
		var input_username = $("#username");
		var input_password = $("#password");
		var input_yzm = $("#yzm");
		var img_yzm = $("#yzmpic");
		E.addHandler(btn_submit, "mouseover", login.swapImage.bind(login,
						"images/images/button_onmouse.gif"));
		E.addHandler(btn_submit, "mouseout", login.swapImage.bind(login,
						"images/images/button.gif"));
		E.addHandler(btn_submit, "click", login.submit.bind(login));
		E.addHandler(input_username, "focus", login.onnamefocus);
		E.addHandler(input_password, "focus", login.onpassfocus);
		E.addHandler(input_yzm, "focus", login.onyzmfocus);
		E.addHandler(input_yzm, "keydown", login.enterToSubmit.bind);
		E.addHandler(img_yzm, "click", login.inityzm);
	}

}
var login = new Login();
MZA.ready(login.init);