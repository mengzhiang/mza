
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
			title:"编辑23423423423",
			width:300,
			height:300,
			url:"edit.jsp?id="+id
		}
		MZA.openDialog(data);
	}
	this.add = function(){
		MZA.openDialog({
			title:"新增",
			width:300,
			height:200,
			url:"add.jsp"
		});
	}

	this.init = function(){
		document.getElementById("add").setAttribute("onClick","userList.add()");
	}
}

function formatEdit(colId){
	return "<a href='#' onclick='userList.edit("+colId+")'>修改</a>"
}

var userList = new UserList();
MZA.addOnLoad(userList.list);
MZA.addOnLoad(userList.init);


