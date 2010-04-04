function test(){
	var inputs = document.getElementsByTagName("input");
	for(var i=0;i<inputs.length;i++){
		if(inputs[i].type="checkbox"){
			if(inputs[0].checked==false){
				inputs[i].checked=false;
			}else{
				inputs[i].checked=true;
			}
			
		}
		
	}
}

function edit(id){
	window.location = "user_edit?sid="+id;
}
function del(id){
	window.location = "user_del?sid="+id;
}
function add(){
	window.location = "user_add";
}