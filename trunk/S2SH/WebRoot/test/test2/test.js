
//公共作用域里只有一个slide对象，他的方法都封装在里面，防止误调用。
var slide = function(str) {
	//初始变量
	var arr = [];
	var index = 1;
	var imgs = [];
	//上一页
	function prev(event) {
		if(index<2){
			alert("first page");
			return;
		}else{
			index--;
		}
		imgs[0].src = arr[index*4 - 1];
		imgs[1].src = arr[index*4 - 2];
		imgs[2].src = arr[index*4 - 3];
		imgs[3].src = arr[index*4 - 4];
		MZA.event.getEvent(event);
		MZA.event.preventDefault(event);
	};
	//下一页
	function next(event) {
		if(index>3){
			//可以修改为循环翻页
			alert("last page");
			return;
		}else{
			index++;
		}
		imgs[0].src = arr[index*4 - 1];
		imgs[1].src = arr[index*4 - 2];
		imgs[2].src = arr[index*4 - 3];
		imgs[3].src = arr[index*4 - 4];
		MZA.event.getEvent(event);
		MZA.event.preventDefault(event);
	};
	//初始化方法
	function init(str) {
		arr = str.split(",");
		index = 1;
		imgs = $("div.slide ul li img");
		$("div.slide a.prev").bind("click", slide.prev);
		$("div.slide a.next").bind("click", slide.next);
	};
	//slide的公共方法接口
	return {
		init : init,
		prev : prev,
		next : next
	};
}();
MZA.ready(function() {
			// 只需要初始化图片路径
			slide.init("img1.jpg,img1.jpg,img1.jpg,img1.jpg,"
					+ "img2.jpg,img2.jpg,img2.jpg,img2.jpg,"
					+ "img3.jpg,img3.jpg,img3.jpg,img3.jpg,"
					+ "img4.jpg,img4.jpg,img4.jpg,img4.jpg");
		});




//var s ="aaabbbccc33333";
//var arr = s.split("");
//console.log(arr);
//var object ={};
//for(var i=0;i<arr.length;i++){
//	if(object[arr[i]]){
//		object[arr[i]] = object[arr[i]]+1;
//	}else{
//		object[arr[i]]=1;
//	}
//}
//console.log(object);


//设想js写一个map ，map功能 get(key) object功能都有了，用不着。





















