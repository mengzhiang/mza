//列表显示数据
function UserList(){
	
	this.list = function(){
		var data ={
			sync:false,
			url :"user_listpage",
			page:{
				start:0,
				limit:10
			}
		}
		var object = MZA.ajax(data);
		var usersObj = object.users;
		var colModel = [
						{header:"序号",dataIndex:"id"},
						{header:"姓名",dataIndex:"name"},
						{header:"密码",dataIndex:"pwd"},
						{header:"修改",dataIndex:"id",format:userList.formatEdit},
						{header:"删除",dataIndex:"id",format:userList.formatDel}];
		MZA.showGrid(usersObj,colModel);
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
	//新增
	this.add = function(){
		MZA.openDialog({
			title:"新增",
			width:300,
			height:200,
			url:"add.jsp"
		});
	}
	//删除信息
	this.del = function(id){
		if(confirm("确定要删除该条数据吗？")){
			var data ={
				sync:false,
				url:"user_del?sid="+id
			}
			var object = MZA.ajax(data);
			if(object.sid!=null){
				alert("删除成功！");
				//重新刷新页面
				MZA.refreshPage();
			}else{
				alert("删除失败！");
			}
		}
	}

	this.init = function(){
		document.getElementById("add").setAttribute("onClick","userList.add()");
		MZA.setPageMethod(userList.queryData);
	}
	//修改
	this.formatEdit = function(colId){
		return "<a href='#' onclick='userList.edit("+colId+")'>修改</a>"
	}
	//删除
	this.formatDel = function(colId){
		return "<a  href='#' onclick='userList.del("+colId+")'>删除</a>"
	}
	/**
	 * 翻页方法
	 * @param {} start
	 * @param {} limit
	 */
	this.queryData = function(start,limit){
		var data ={
			sync:false,
			url :"user_listpage",
			page:{
				start:start,
				limit:limit
			}
		}
		var object = MZA.ajax(data);
		var usersObj = object.users;
		var colModel = [
						{header:"序号",dataIndex:"id"},
						{header:"姓名",dataIndex:"name"},
						{header:"密码",dataIndex:"pwd"},
						{header:"修改",dataIndex:"id",format:userList.formatEdit},
						{header:"删除",dataIndex:"id",format:userList.formatDel}];
		MZA.showGrid(usersObj,colModel);
	}
	
}

var userList = new UserList();
MZA.addOnLoad(userList.list);
MZA.addOnLoad(userList.init);


