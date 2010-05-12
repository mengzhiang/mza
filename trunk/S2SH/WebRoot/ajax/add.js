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
			alert("修改成功！");
			closeDialog();
		}else{
			alert("修改失败！");
		}
		
	}
	this.init = function(){
		document.getElementById("bt1").setAttribute("onclick","userAdd.submit()");
		document.getElementById("bt2").setAttribute("onclick","closeDialog()");
	}

}
function closeDialog(){
	parent.MZA.closeDialog();
	parent.MZA.refreshPage();
}
var userAdd = new UserAdd();
MZA.addOnLoad(userAdd.init);