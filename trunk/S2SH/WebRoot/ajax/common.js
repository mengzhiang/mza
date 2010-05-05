function MZA(){
	//发送ajax请求，返回json数据
	this.ajax = function(data){
		var request;
		var url ="";
		var type ="get";
		var sync =true;
		var paras = null;//默认send参数是空
		if(window.ActiveXObject)
		{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}else{
			request = new XMLHttpRequest();
		}
		if(data.url){
			url= data.url;
		}
		if(typeof(data.sync) != "undefined"){
			sync = data.sync;
		}
		if(data.type=="post"){
			type = data.type;
			paras = data.paras;
		}
		//ajax请求可以指定是否同步。档同步时firefox的onreadyState就不好用了。
		request.open(type,url,sync);
		if(sync)
		{
			request.onreadystatechange = function(){
					if(request.readyState == 4){
						var str = request.responseText;
						var object = eval('('+str+')');
						return object;
					}
				};
		}
		request.send(paras);
		if(!sync){
			var str = request.responseText;
			var object = eval('('+str+')');
			return object;
		}
	}
	
	//绑定初始化事件
	this.addOnLoad  = function(func){
		var oldonload = window.onload;
		if(typeof window.onload !="function"){
			window.onload = func;
		}else{
			window.onload = function(){
				oldonload();
				func();
			}
		}
	}
	//显示模态窗口
}

var MZA = new MZA();