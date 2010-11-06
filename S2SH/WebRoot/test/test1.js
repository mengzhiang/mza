function zoom(element,wpc,hpc){
	var elwidth = element.clientWidth;//element.height取不到，没有这个属性，只能用clientwidth取到元素的宽度
	var elheight = element.clientHeight;
	
	element.onmouseover = function(){
		element.style.width = elwidth*(1+wpc)+"px";
		element.style.height = elheight*(1+hpc)+"px";
		element.style.background = "red";
		element.style.zIndex = 9999;
	}
	element.onmouseout = function(){
		element.style.width = elwidth+"px";
		element.style.height = elheight+"px";
		element.style.background = "green";
		element.style.zIndex = 1;
	}
}
window.onload = function(){
	var firstel = document.getElementById("first");
	zoom(firstel,0.25,0.25);
	var sencondel = document.getElementById("second");
	zoom(sencondel,0.25,0.25);
};