function UserAdd(){
	this.submit = function(){
		alert("submit");
		var name = document.getElementById("name").value;
		var pwd = document.getElementById("pwd").value;
		var paras = "user.id=''&user.name="+name+"&user.pwd="+pwd;
		var object = MZA.ajax({
			url:"user_save?"+paras,
			sync:false
		});
		if(object.user!=null){
			alert("保存成功！");
		}else{
			alert("保存失败！");
		}
	}
	this.init = function(){
		//document.getElementById("sub").onclick = 
		document.getElementById("back").onclick = function(){
			alert("back");
		}
	}
}
var userAdd = new UserAdd();
MZA.addOnLoad(userAdd.init);