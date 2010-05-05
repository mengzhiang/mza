//function getJson(data){
//	var request;
//	var url ="";
//	var type ="get";
//	var sync =true;
//	var paras = null;//默认send参数是空
//	if(window.ActiveXObject)
//	{
//		request = new ActiveXObject("Microsoft.XMLHTTP");
//	}else{
//		request = new XMLHttpRequest();
//	}
//	if(data.url){
//		url= data.url;
//	}
//	if(typeof(data.sync) != "undefined"){
//		sync = data.sync;
//	}
//	if(data.type=="post"){
//		type = data.type;
//		paras = data.paras;
//	}
//	//ajax请求可以指定是否同步。档同步时firefox的onreadyState就不好用了。
//	request.open(type,url,sync);
//	if(sync)
//	{
//		request.onreadystatechange = function(){
//				if(request.readyState == 4){
//					var str = request.responseText;
//					var object = eval('('+str+')');
//					return object;
//				}
//			};
//	}
//	request.send(paras);
//	if(!sync){
//		var str = request.responseText;
//		var object = eval('('+str+')');
//		return object;
//	}
//	
//}
/**
 *1:前台MVC分离，
 *Model是指json串即数据
 *view是指HTML和css分离显示
 *Control是指javascript 控制动作 
 *动态生成的table样式是不能通过外部引用来改变的
 * @type 
 */
function genT(store,colModel){
	var tablediv = document.getElementById("mytable");
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
	addBlur();
}
//增加鼠标悬停变色
function addBlur(){
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
//列表显示数据
function UserList(){
	this.list = function(){
		var data ={
			sync:false,
			url :"user_list"
		}
		var object = MZA.ajax(data);
		var usersObj = object.users;
		var colModel = [
						{header:"序号",dataIndex:"id"},
						{header:"姓名",dataIndex:"name"},
						{header:"密码",dataIndex:"pwd"},
						{header:"修改",dataIndex:"id",format:formatEdit}
						];
		genT(usersObj,colModel);
	}
	//设置自定义列

	//弹出编辑页面
	this.edit = function(id){
		var data ={
			width:"300px",
			height:"200px",
			url:"edit.jsp?id="+id
		}
		showDialog(data);
	}
	this.add = function(){
		showDialog({
			width:"300px",
			height:"200px",
			url:"add.jsp",
			onclosed:list
		});
	}
	//
	this.init = function(){
		//document.getElementById("add").onclick = add;
	}
}
//打开模态窗口
function showDialog(data){
	//1:设置一个div宽度，高度和窗口一样
	//2：点击时显示出来，但是要在原来的窗口上面，不能挤下去，所以要设置position:absoulte
	//3: 但是要显示那一层在上面所以要设置z-index越大越在上
	//4:但是还要看到下面一层的东西所以要设置半透明
	var bodyBack = document.createElement("div");
	bodyBack.setAttribute("id","bodybg");
	bodyBack.style.position = "absolute";
	alert(window.innerWidth);
	bodyBack.style.width = window.innerWidth;
	bodyBack.style.height = window.innerHeight;
	bodyBack.style.top = 0;
	bodyBack.style.left = 0;
	bodyBack.style.zIndex = 98;
	bodyBack.style.filter = "alpha(opacity=50)";//IE的透明
	bodyBack.style.opacity = 0.5;//css标准透明
	bodyBack.style.background = "#ddf";
	var bodyNode = document.getElementsByTagName("body");
	bodyNode[0].appendChild(bodyBack);
	
	//document.write("<div id='id1 style='display:'';position:absolute;background-color:red;z-index:3;opacity:0.5;filter:alpha(opacity=50)'></div>");
//	var div1 = document.getElementById("id1");
//	div1c
//	div1.style.height=window.screen.height+"px";
//	div1.style.display="";
//	var div2 = document.getElementById("id2");
//	var url =data.url;
//	var width ="300px";
//	var height ="200px";
//	width= data.width;
//	height =data.height;
//	document.getElementById("dialog").setAttribute("src",url);
//	div2.style.width=width;
//	div2.style.height=height;
//	div2.style.display="";
}
//关闭模态窗口
function closeDialog(){
	document.getElementById("id1").style.display="none";
	document.getElementById("id2").style.display="none";
}

function formatEdit(colId){
	return "<a href='#' onclick='userList.edit("+colId+")'>修改</a>"
}

var userList = new UserList();
MZA.addOnLoad(userList.list);
MZA.addOnLoad(userList.init);


