MZA.ready(function(){
	var D = MZA.dom;
	var E = MZA.event;
	var F = MZA.form;
	var form = D.find("#form");
	function submit(e){
		var event = E.getEvent(e);
		alert(123);
		E.preventDefault(event)
	}
	E.addHandler(form,"submit",submit);
	console.log(document.forms["form"]);
	form.elements[0].focus();
	
	frames["richedit"].document.designMode = "on";
	
	//可以自己实现一个富文本编辑器。
	var font = D.find("#font");
	function changeFont(e){
		var event = E.getEvent(e);
		var target = E.getTarget(e);
		var options = F.getSelectedOptions(target);
		var fontsize = options[0].value;
		frames["richedit"].document.execCommand("fontsize",false,fontsize);
		console.log(frames["richedit"].document.body.innerHTML);
	}
	E.addHandler(font,"change",changeFont);
	

});