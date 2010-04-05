function getlist(){
	var request;
	if(window.ActiveXObject)
	{
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}else{
		request = new XMLHttpRequest();
	}
	request.open("get","user_list",true);
	request.onreadystatechange = function(){
			if(request.readyState == 4){
				var str = request.responseText;
				var object = eval('('+str+')');
				var usersObj = object.users;
				var colModel = [
				{header:"序号",dataIndex:"id"},
				{header:"姓名",dataIndex:"name"},
				{header:"密码",dataIndex:"pwd"}
				];
				genT(usersObj,colModel);
			}
		};
	request.send(null);
	
}
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
	var tbody = document.createElement("tbody");
	//生成表头
	var modellength = colModel.length;
	var tr = document.createElement("tr");
	for(var i=0;i<modellength;i++){
		var td = document.createElement("th");
		td.innerHTML =colModel[i].header;
		tr.appendChild(td);
	}
	tbody.appendChild(tr);
	//生成表里的数据
	var storelength = store.length;
	for(var i=0;i<storelength;i++){
		var tr = document.createElement("tr");
		for(var j=0;j<modellength;j++){
			var td = document.createElement("td");
			var data = store[i];
			td.innerHTML =data[colModel[j].dataIndex];
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
	table.appendChild(tbody);
	tablediv.appendChild(table);
	addBlur();
}
function addBlur(){
	var rows = document.getElementsByTagName('tr');
	for (var i=0;i<rows.length;i++){
		rows[i].onmouseover = function(){		//鼠标在行上面的时候
			this.className = 'altrow';
		}
		rows[i].onmouseout = function(){		//鼠标离开时
			this.className = this.className.replace('altrow','');
		}
	}
}
window.onload = getlist;

