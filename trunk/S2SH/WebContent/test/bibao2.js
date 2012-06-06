//function A(){
//
//	function callback(){
//		alert("callback");
//	}
//	
//	this.getU = function(){
//		return {
//			f1:function(){
//				callback();
//			}
//		}
//	}
//}
//
//var a = new A();
//a.getU().f1();

//function A(){
//
//	function callback(){
//		alert("callback");
//	}
//	
//	this.getU = function(){
//		return function(){
//			callback();
//		}
//	}
//}
//
//var a = new A();
//a.getU()();

function Dialog(o){
	this.closeWin =function(){
		//关闭窗口，并调用父窗口回调
		o.callback();
	}
}
var parameter ={
	url :"http:\\",
	callback :function(){
		//刷新父窗口
		alert("callback刷新父窗口");
	}
}
var di = new Dialog(parameter);
di.closeWin();
