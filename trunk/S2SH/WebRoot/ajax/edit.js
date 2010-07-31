function getById(){
	var data ={
		url:"user_load?sid="+id,
		sync:false//同步加载
	}
	var jsonObj = MZA.ajax(data);
	var user = jsonObj.user;
	document.getElementById("id").disabled="disabled";
	document.getElementById("id").value=user.id;
	document.getElementById("name").value=user.name;
	document.getElementById("pwd").value=user.pwd;
	
	document.getElementById("bt1").onclick = save;
	document.getElementById("bt2").onclick = closeDialog;//调用父窗口中的方法。
}

function save(){
	var id = document.getElementById("id").value;
	var name = document.getElementById("name").value;
	var pwd = document.getElementById("pwd").value;
	var paras = "user.id="+id+"&user.name="+name+"&user.pwd="+pwd;
	var data ={
		sync:false,
		url:"user_save?"+paras
	}
	var object = MZA.ajax(data);
	if(object.user!=null){
		alert("修改成功！");
		closeDialog();
	}else{
		alert("修改失败！");
	}
}
function closeDialog(){
	parent.MZA.refreshPage();
	parent.MZA.closeDialog();
}
MZA.addOnLoad(getById);