$.syse=function(json,flag){
	if(flag == undefined) flag = true;
	var content = "";
	if(json !=undefined){
		if(json.message!=undefined){
			content = content+json.message;
		}else{
			$.error("syse参数为空");
		}
		if(json.detail !=undefined){
			content = content+"<div class='syse_message'>"+json.detail+"</div>";
		}
	}else{
		$.error("syse参数为空");
	}
 	$("<div></div>").attr({
			class:'syse_dialog',
			title:"提示"
		}).html(content).dialog({
			closeOnEscape : true,
			autoOpen : true,
			width : 450,
			modal : true
		});
};

$(function() {
	document.onkeyup = function(e) {
		var theEvent = window.event || e;
		var code = theEvent.keyCode || theEvent.which;
		if (theEvent.altKey && code == 84) {
			if ($(".syse_message").is(":hidden")) {
				$(".syse_message").show();
			} else {
				$(".syse_message").hide();
			}
		}
	};
});
