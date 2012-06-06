//KISSY.ready(function(S){
//	
//	var DOM = S.DOM; //DOM操作 
//	var Event = S.Event;  //事件处理
//	
//	var test = DOM.get("#test1"); //返回的是基本的DOM对象
//	var test1 = S.one("#test1"); //返回的是kissy封装好的Object对象，可以链式操作。S.all
//	var test2 = S.get("#test1"); //返回基本的DOM对象 S.query
//	
//	var test4 = new S.Node(test);
//	
//	console.log(test);
//	console.log(test1);
//	console.log(test2);
//	console.log(test4);
//	var btn = DOM.get("#btn");
//	//console.log(btn);
//	DOM.attr(btn,'disabled',true);
//	
//	
////	S.Anim(test,'left: 400px',2,'easeOut',function(){
////		alert(123);
////	}).run();
//	
//})
(function(S){
	console.log(S.DOM.html);
	S.use('core',function(){
		S.DOM.html('body',"hello");
	});
})(KISSY);
