MZA.ready(function(){
	var D = MZA.dom;
	var E = MZA.event;
	var form = D.find("#form");
	function submit(e){
		var event = E.getEvent(e);
		alert(123);
		E.preventDefault(event)
	}
	E.addHandler(form,"submit",submit);
	console.log(document.forms["form"]);
	form.elements[0].focus();
});