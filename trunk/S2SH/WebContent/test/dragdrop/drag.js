MZA.ready(function(){
	var D = MZA.dom;
	var E = MZA.event;
	var F = MZA.form;
	
	console.log(MZA.DragDrop);
	var DD = MZA.DragDrop;
	DD.enable();
	DD.addHandler("dragstart",function(){
		//console.log("dragstart");
	})
	DD.addHandler("drag",function(event){
		//console.log("drag");
		var div1 = D.find("#div1");
		var div2 = D.find("#div2");
		
		event = E.getEvent(event);
		var target = E.getTarget(event);
		var bong = Math.abs(div1.offsetTop-div2.offsetTop)<100&&Math.abs(div1.offsetLeft-div2.offsetLeft)<100;
		if(target===div1){
			if(div1.offsetTop-div2.offsetTop<0&&div1.offsetLeft-div2.offsetLeft<0&&bong){
				console.log("left-top");
				div2.style.left = parseInt(div2.style.left)+50+"px";
				div2.style.top = parseInt(div2.style.top)+50+"px";
			}else if(div1.offsetTop-div2.offsetTop>0&&div1.offsetLeft-div2.offsetLeft<0&&bong){
				console.log("left-buttom");
				div2.style.left = parseInt(div2.style.left)+50+"px";
				div2.style.top = parseInt(div2.style.top)-50+"px";
			}else if(div1.offsetTop-div2.offsetTop>0&&div1.offsetLeft-div2.offsetLeft>0&&bong){
				console.log("right-buttom");
				div2.style.left = parseInt(div2.style.left)-50+"px";
				div2.style.top = parseInt(div2.style.top)-50+"px";
			}else if(div1.offsetTop-div2.offsetTop<0&&div1.offsetLeft-div2.offsetLeft>0&&bong){
				console.log("right-top");	
				div2.style.left = parseInt(div2.style.left)-50+"px";
				div2.style.top = parseInt(div2.style.top)+50+"px";
			}; 
		};

	})
	DD.addHandler("dragend",function(){
		//console.log("dragend");

	})
});