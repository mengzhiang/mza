function UserAdd(){
	this.submit = function(){
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
			alert("新增成功！");
			closeDialog();
		}else{
			alert("新增失败！");
		}
		
	}
	this.init = function(){
		document.getElementById("bt1").setAttribute("onclick","userAdd.submit()");
		document.getElementById("bt2").setAttribute("onclick","closeDialog()");
	}

}
function closeDialog(){
	parent.MZA.refreshPage();
	parent.MZA.closeDialog();
}
var userAdd = new UserAdd();
MZA.addOnLoad(userAdd.init);