(function(M) {
	// console.log(M.dom.checkSupport("MZA"));
	alert(M.dom.checkSupport("MZA").supportsDOM2CSS);

	function load(){
		MZA.load.loadScript("doctest.js");
		MZA.load.loadStyles("doctest.css");
		var style = document.getElementById("test").style;
		//一次性应用多个样式。
		style.cssText = "width:300px;font-size:22px;background-color:blue";
//		for(var i=0;i<style.length;i++){
//			alert(style.item(i)+" "+style.getPropertyValue(style.item(i)));
//		}
		//alert(document.getElementById("test").currentStyle.width);IE特有
		
		//style.removeProperty("background-color");
//		style.width = "400px";
//		style.fontSize = "22px";
//		style.backgroundColor = "blue";//如果CSS中有中划线则用驼峰方式js表示。
//		style.border = "2px solid red";
		var testel = document.getElementById("test");
		var clickhandler = function(e){
			var event = MZA.event.getEvent(e);
			var target = MZA.event.getTarget(e);
			switch(event.type){
				case "click":
					alert("click");
					break;
				case "mouseover":
					target.style.backgroundColor="red";
					break;
				case "mouseout":
					target.style.backgroundColor = "blue";
					break;
			}
		}
		MZA.event.addHandler(testel,"click",clickhandler);
		MZA.event.addHandler(testel,"mouseover",clickhandler);
		MZA.event.addHandler(testel,"mouseout",clickhandler);
		
		var E = MZA.event;
		var D = MZA.dom;
		var atest = D.find("#atest");
		var adiv = D.find("#adiv");
		var ahandler = function(e){
			alert("aclick");
			var event = E.getEvent(e);
			E.preventDefault(event);
			E.stopPropagation(event);
		}
		var dhandler = function(e){
			alert("divclick");
		}
		E.addHandler(atest,"click",ahandler);
		E.addHandler(adiv,"click",dhandler);
		//MZA.event.removeHandler(testel,"click",clickhandler);
	}
	
	MZA.addOnLoad(load);
})(MZA);

// MZA.ready(function(){
//	
//	
//	
// })

