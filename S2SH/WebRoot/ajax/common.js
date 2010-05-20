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
	//获取窗口可视区域大小和页面大小
	//窗口大小可变，但是页面大小是不变的。
	this.getWindowSize = function(){
		var winWidth = 0;
		var winHeight = 0;
		//window.innerWidth在FF下好使
		if(window.innerWidth){
			winWidth = document.body.clientWidth;//ff下测试不对，所以改成document.body.clientWidth；
			winHeight = window.innerHeight;//这个正确
		}else if(document.body){
			//IE下
			winWidth = document.body.clientWidth;
			winHeight = document.body.clientHeight;
		}else if(document.documentElement && document.documentElement.clientHeight){
			//其他浏览器。
			winWidth = document.documentElement.clientWidth;
			winWidth = document.documentElement.clientHeight;
		}
		//如果有滚动条，则去得滚动后的大小
		var xScroll,yScroll;
		//如果是火狐
		if (window.innerHeight && window.scrollMaxY){
			xScroll = document.body.scrollWidth;
			yScroll = window.innerHeight + window.scrollMaxY;
		} else if (document.body.scrollHeight > document.body.offsetHeight){
			//如果IE
			xScroll = document.body.scrollWidth;
			yScroll = document.body.scrollHeight;
		} else {
			//其他正常情况下
			xScroll = document.body.offsetWidth;
			yScroll = document.body.offsetHeight;
		}
		//如果有滚动条，则页面大小以滚动后为准，全部覆盖。
		var pageHeight,pageWidth;
		if(yScroll < winHeight){
			pageHeight = winHeight;
		} else {
			pageHeight = yScroll;
		}
		if(xScroll < winWidth) {
			pageWidth = winWidth;
		} else {
			pageWidth = xScroll;
		}
		
		var arrayPageSize = new Array(pageWidth,pageHeight,winWidth,winHeight);
		return arrayPageSize;
	}
	//获得内容层内容原始大小
	this.getConSize = function(conId,w,h){
		var conObj=document.getElementById(conId)
		conObj.style.position = "absolute";
		conObj.style.left=-1000+"px";
		conObj.style.display="";
	    conObj.style.width= w + "px";
	    conObj.style.height= h + "px";
		var arrayConSize=[0,0];
		arrayConSize[0]=conObj.offsetWidth;
	    arrayConSize[1]=conObj.offsetHeight;
		conObj.style.display="none";
		return arrayConSize;
	}
	//获取滚动条的离浏览器左端的距离和离浏览器顶端的距离
	this.getPageSroll = function(){
		//获取滚动条的高度
		var xScroll,yScroll;
		//self对象是指当前窗口，用于由iframe和frameset的情况下。
		if (self.pageYOffset) {
			//FF下
			xScroll = self.pageXOffset
			yScroll = self.pageYOffset;
		} else if (document.documentElement && document.documentElement.scrollTop && documentElement.scrollLeft){
			//w3c标准
			xScroll = document.documentElement.scrollLeft;
			yScroll = document.documentElement.scrollTop;
		} else if (document.body) {
			//IE下
			xScroll = document.body.scrollLeft;
			yScroll = document.body.scrollTop;
		}
		arrayPageScroll = new Array(xScroll,yScroll)
		return arrayPageScroll;
	} 
	//显示模态窗口
	this.openDialog = function(data){
	//1:设置一个div宽度，高度和窗口一样
	//2：点击时显示出来，但是要在原来的窗口上面，不能挤下去，所以要设置position:absoulte
	//3: 但是要显示那一层在上面所以要设置z-index越大越在上
	//4:但是还要看到下面一层的东西所以要设置半透明
		var popwidth =300;
		var popheight =200;
		var title ="弹出页面";
		if(data.title){
			title = data.title;
		}
		var url="";
		if(data.url){
			url = data.url;
		}
		var arrWinSize = MZA.getWindowSize();
		var pageWidth = arrWinSize[0];
		var pageHeight = arrWinSize[1];
		var winWidth = arrWinSize[2];
		var winHeight = arrWinSize[3];
		var bodyBack = document.createElement("div");
		bodyBack.setAttribute("id","bodybg");
		bodyBack.style.position = "absolute";
		bodyBack.style.width = pageWidth;
		bodyBack.style.height = pageHeight;
		bodyBack.style.top = 0;
		bodyBack.style.left = 0;
		bodyBack.style.zIndex = 98;//不用写成z-index
		bodyBack.style.filter = "alpha(opacity=50)";//IE的透明
		bodyBack.style.opacity = 0.5;//css标准透明
		bodyBack.style.background = "#ddf";//颜色不错,也不用写成background-color
		var bodyNode = document.getElementsByTagName("body");
		bodyNode[0].appendChild(bodyBack);
		var popObj = document.createElement("div");
		popObj.setAttribute("id","bodypop");
		popObj.style.position = "absolute";
		popObj.style.zIndex = 99;
		popwidth= data.width;
		popheight =data.height;
		popObj.style.width = popwidth +"px";
		popObj.style.height = popheight +"px";
		var top = "0px";
		if(winHeight-popheight>0){
			top = (winHeight-popheight)/2+"px";
		}else{
			top = (popheight-winHeight)/2+"px";
		}
		var left = "0px";
		if(winWidth-popwidth>0){
			left =(winWidth-popwidth)/2+"px";
		}else{
			left =(popwidth-winWidth)/2+"px";
		}
		popObj.style.top =top;
		popObj.style.left = left;
		//创建弹出页面
		var contentNode = document.createElement("div");
		contentNode.setAttribute("id","contain");
		contentNode.style.width = popwidth +"px";
		contentNode.setAttribute("class","contain");
			var titleNode = document.createElement("div");
			titleNode.setAttribute("class","dlgtitle");
			titleNode.setAttribute("id","dlgtitle");
			titleNode.setAttribute("onMousedown","MZA.startDrag(event,this)");
			titleNode.setAttribute("onMouseup","MZA.stopDrag(this)");
			titleNode.setAttribute("onMousemove","MZA.Drag(event,this)");
			titleNode.style.width = popwidth +"px";
				var tlNode = document.createElement("div");
				tlNode.setAttribute("id","dlgtl");
				var trNode = document.createElement("div");
				trNode.setAttribute("id","dlgtr");
				var tnameNode = document.createElement("div");
				tnameNode.setAttribute("id","dlgtname");
				tnameNode.style.width=popwidth-10+"px";
				var tnameSpanNode = document.createElement("span");
				tnameSpanNode.setAttribute("id","tnamespan")
				tnameSpanNode.innerHTML = title;
				tnameNode.appendChild(tnameSpanNode);
				var tbutNode = document.createElement("div");
				tbutNode.setAttribute("id","dlgtbut");
				tbutNode.setAttribute("onMouseover","this.style.backgroundPosition = '0 -19px';");
				tbutNode.setAttribute("onMouseout","this.style.backgroundPosition = '0 0px';");
				tbutNode.setAttribute("onClick","MZA.closeDialog();");
			titleNode.appendChild(tlNode);
			titleNode.appendChild(tnameNode);
			titleNode.appendChild(trNode);
			titleNode.appendChild(tbutNode);
			var innerNode = document.createElement("div");
			innerNode.setAttribute("class","dlginner");
			innerNode.setAttribute("id","dlginner");
				var iframeNode = document.createElement("iframe");
				iframeNode.setAttribute("src",url);
				iframeNode.setAttribute("frameborder","0");
				innerNode.appendChild(iframeNode);
			innerNode.style.height = popheight-31 +"px";
			contentNode.appendChild(titleNode);
			contentNode.appendChild(innerNode);
		popObj.appendChild(contentNode);
		bodyNode[0].appendChild(popObj);
	}
	/**
	 * 关闭模态窗口
	 */
	this.closeDialog = function(){
		this.removeElement(document.getElementById("bodypop"));
		this.removeElement(document.getElementById("bodybg"));
	}
	/**
	 * 刷新页面
	 */
	this.refreshPage = function(){
		window.location.reload();
	}
	/**
	 * 删除某个节点
	 * @param {} _element
	 */
	this.removeElement = function(_element){
		 var _parentElement = _element.parentNode;
         if(_parentElement){
                _parentElement.removeChild(_element);  
         }
	}
	
	var isIE = document.all?true:false;//如果是IE是true否则是false
	var move = false;
	var oldcolor;
	var _X,_Y;
	/**
	 * 开始拖拽
	 */
	this.startDrag = function(e,obj){
		var e = e ? e : event;//如果是e则是e否则是event
		if(isIE){
			obj.setCapture();//鼠标跟踪当前对象
		}else{
			window.captureEvents(obj.MOUSEMOVE);
		}
		oldcolor=obj.style.backgroundColor;
		//获取拖拽的对象
		var dragObject = document.getElementById("contain");
		//记录拖动对象的开始位置
		_X = dragObject.offsetLeft - e.clientX;
		_Y = dragObject.offsetTop - e.clientY;
		move = true;
	}
	/**
	 * 结束拖拽
	 */
	this.Drag = function(e,obj){
		var e = e ? e : event;//如果是e则是e否则是event
		if(move){
			var dragObject = document.getElementById("contain");
			dragObject.style.left = e.clientX + _X +"px";
			dragObject.style.top = e.clientY + _Y +"px";
		}
	}
	/**
	 * 拖拽中
	 */
	this.stopDrag = function(obj){
		obj.style.background=oldcolor;
		if(isIE){
			obj.releaseCapture();//鼠标跟踪当前对象
		}else{
			window.releaseEvents(obj.MOUSEMOVE);
		}
		move = false;
	}
		/**
	 *1:前台MVC分离，
	 *Model是指json串即数据
	 *view是指HTML和css分离显示
	 *Control是指javascript 控制动作 
	 *动态生成的table样式是不能通过外部引用来改变的
	 * @type 
	 */
	this.showGrid =function(store,colModel){
		var tablediv = document.createElement("div");
		tablediv.setAttribute("id","tablediv");
		var table = document.createElement("table");
		table.setAttribute("class","table");
		var tbody = document.createElement("tbody");
		//生成表头
		var modellength = colModel.length;
		var tr = document.createElement("tr");
		tr.setAttribute("class","tr");
		for(var i=0;i<modellength;i++){
			var td = document.createElement("th");
			td.setAttribute("class","th");
			td.innerHTML =colModel[i].header;
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
		//生成表里的数据
		var storelength = store.length;
		for(var i=0;i<storelength;i++){
			var tr = document.createElement("tr");
			tr.setAttribute("class","tr");
			for(var j=0;j<modellength;j++){
				var td = document.createElement("td");
				td.setAttribute("class","td");
				var data = store[i];
				var colId = colModel[j].dataIndex;
				var colformat = colModel[j].format;
				if(typeof(colformat)=="function"){
					td.innerHTML = colformat(data[colId]);
				}else
				if(colId!=null){
					td.innerHTML =data[colId];
				}
				tr.appendChild(td);
			}
			tbody.appendChild(tr);
		}
		table.appendChild(tbody);
		tablediv.appendChild(table);
		
		var pagediv = document.createElement("div");
		var pagestr = 
				  "<div>"+
					  	"<span>第<span id='curPageIndex'>1</span>页</span>&nbsp;"+
					  	"<span>共<span id='pageCount'>5</span>页</span>&nbsp;"+
					  	"<span>共<span id='pageCount'>5</span>页</span>&nbsp;"+
					  	"<a href='#'>首页</a>&nbsp;"+
					  	"<a href='#'>上一页</a>&nbsp;"+
					  	"<a href='#'>下一页</a>&nbsp;"+
					  	"<a href='#'>尾页</a>&nbsp;"+
  					"</div>";
		pagediv.innerHTML = pagestr;
		tablediv.appendChild(pagediv);
		document.getElementsByTagName("body")[0].appendChild(tablediv);
		this.addBlur();
	}
	//增加鼠标悬停变色
	this.addBlur = function(){
		var rows = document.getElementsByTagName('tr');
		for (var i=0;i<rows.length;i++){
			if(rows[i].className=="tr"){
				rows[i].onmouseover = function(){		//鼠标在行上面的时候
					this.className = 'altrow';
				}
				rows[i].onmouseout = function(){		//鼠标离开时
					this.className = this.className.replace('altrow','');
				}
			}
		}
	}
}


var MZA = new MZA();