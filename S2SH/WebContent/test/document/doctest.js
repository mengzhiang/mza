






//window.onload = function(){
////	console.log(document);
////	console.log(document.body.nodeType);
////	console.log(document.title);
////	console.log(document.childNodes.length);
////	console.log(document.childNodes.item("html"));
////	document.writeln("testetstest");
////	var test = document.getElementById("test");
////	console.log(test.tagName);
////	console.log(test.nodeName);
////	console.log(test.className);
////	test.className ="class2";
////	console.log(test.className);
//	//alert(outputAttributes(test));
////	var list = document.getElementById("ullist");
////	console.log(list.getElementsByTagName("li"));
////	alert(list.childNodes.length);
////判断浏览器处于什么模式
////	if(document.compatMode =="CSS1Compat"){
////		alert("Standards mode");//标准模式
////	}else{
////		alert("Quirks mode");//混杂模式
////	};
////判断浏览器是IE8浏览器在哪个模式？
//	//alert(document.documentMode);
//	//滚动浏览器窗口以便可以看到这个元素。
//	//document.getElementById("divtest").scrollIntoView();
//	//console.log(MZA);
//	
//}
//循环遍历出所有属性。
function outputAttributes(element){
	var arr = new Array();
	var length = element.attributes.length;
	for(var i=0;i<length;i++){
		var attrName = element.attributes[i].nodeName;
		var attrValue = element.attributes[i].nodeValue;
		//修正IE7及之前返回没有设置过的属性问题，如果没有设置过则element.attributes[i].specified是false
		if(element.attributes[i].specified){
			arr.push(attrName + "=\""+attrValue+"\"");
		}
	}
	return arr.join(" ");
}