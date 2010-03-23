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

function edit(){
	window.location = "user_edit";
}
function del(){
	window.location = "user_del";
}