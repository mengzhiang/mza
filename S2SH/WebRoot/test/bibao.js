

// 1：递归函数。算阶乘。4*3*2*1; 这种定义函数的方式叫做声明式， var 的方式定义的函数是函数表达式式。
// arguments.callee 是一个指向正在执行的函数的指针
function digui(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * arguments.callee(num - 1);
	}
}
var adigui = digui;
digui = null;
// alert(adigui(4));
// 2：比较器，根据提出的属性创建不同属性的比较器。
function createComparisonFunction(propertyName) {
	return function(object1, object2) {
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];

		if (value1 < value2) {
			return -1;
		} else if (value1 > value2) {
			return 1;
		} else {
			return 0;
		}
	};
}

var compareID = createComparisonFunction("id");
var object1 = {
	id : 2
}
var object2 = {
	id : 1
}

// alert(compareID(object1,object2));
//这个实验因为返回的所有i引用的都是同一个作用域里的，所以都是10
//但是经过更改把i作为参数给复制了一份给num这样就能保存每次的副本。
function createFunctions() {
	var result = new Array();
	for (var i = 0; i < 10; i++) {
		result[i] = function(num) {
			//i访问的同一个引用所以一样，做成这样，当成参数传进来每次都复制到内存中的另一个引用。
			//js是传值的不是传引用的。所以这个值每次是不一样的。
			return function() {
				return num;
			};
		}(i);
	}
	return result;
}
var test = createFunctions();
//console.log(test);
for (var i = 0; i < test.length; i++) {
	//alert(test[i]());
}
//实验this关键字，
var name = "1";//这个name是变量
//这个是对象 name是属性名字不是变量，不要理解错了。
//函数被调用时回去找自己所在的活动对象，这个就是this，一旦找到自己的活动对象就结束了，
//当里面的函数执行时 他所在环境去找this，没有找到name
var object ={
	name : "My Object",
	getNameFunction : function(){
		var that = this;
		return function(){
			//这里的this是这个函数执行时的环境window。
			//如果这个函数引用了包含他的函数，则包含他的环境否则不包含
			return that.name;
		};
	}
}
var objectf =function(){
	this.name = "My Object";
	this.getNameFunction = function(){
		var that = this;
		return function(){
			console.log(that);
			return that.name;
		}
	}
}
console.log(new objectf().getNameFunction()());
//alert();

//内存泄漏问题
function assignHandler(){
	var element = document.getElementById("test");
	var id = element.id;
	element.onclick = function(){
		alert(id);
	}
	element = null;
}

//js 没有块级作用域，所以只能用闭包来模拟块级作用域。
//块级作用域是指变量只有在作用域内部存在，在作用域结束时就销毁了。
//js闭包匿名函数立即执行，声明在函数内部的变量当函数执行完成就结束了
//没有内存占用问题，因为没有任何指向匿名函数的引用。
(function(){
	
})();

//私有变量
//1:相当于类，有私有方法和属性。
function Person(name,id){
	this.getName = function(){
		return name;
	}
	this.setName = function(value){
		name = value;
	}
	this.getId = function(){
		return id;
	}
	this.setId = function(idvalue){
		id = idvalue;
	}
}
//var meng = new Person("meng",2);
//alert(meng.getName());
//alert(meng.getId());

function MyObject(){
	//私有变量和方法
	var privateVariable = 10;
	var privateFunction = function (){
		return false;
	}
	//公有方法
	this.publicMethod = function(){
		privateVariable++;
		return privateFunction();
	}
}
var test = new MyObject();
//alert(test.privateVariable);
//alert(test.publicMethod());

//2：静态私有变量 就是所有的对象共享一些属性，
//闭包实现私有变量，对象在闭包内部创建但是挂在外面，给对象添加
(function(){
	var name ="";
	//person没用var 注册在最外层。
	Person = function(value){
		name = value;
	}
	//给person的原型添加方法。
	Person.prototype.getName = function(){
		return name;
	}
	Person.prototype.setName = function(value){
		name = value;
	}
})();

//var meng = new Person("meng");
//alert(meng.getName());
//var heng = new Person("heng");
//alert(heng.getName());
//alert(meng.getName());

//单例对象，所有属性是对外的，没有私有的。
//var singleton ={
//	name :value,
//	method : function(){
//	}
//}
//另一种单例，通过匿名函数执行返回一个单例对象，但是这个单例对象引用匿名函数内部的属性和方法。
var singleton2 =function(){
	var privateVariable =10;
	var privateFunction = function(){
		return false;
	}
	
	return {
		publicProperty :privateVariable,
		publicMethod :function(){
			privateVariable++;
			privateFunction();
		}
	}
}();
//alert(singleton2.publicProperty);

function BaseComponent(){};
//初始化单例，例如application全局对象，初始化一些组件进去。注册组件。
var application = function(){
	//组件数组
	var components = new Array();
	//初始化添加一个组件
	components.push(new BaseComponent());
	
	//公共属性和方法
	return {
		getComponentCount : function(){
			return components.length;
		},
		
		registerComponent : function(component){
			if(typeof component == "object"){
				components.push(component);
			}
		}
	}
}();

//alert(application.getComponentCount());
//application.registerComponent(new BaseComponent());
//alert(application.getComponentCount());

//如果组件必须是基本组件类型的
var application2 = function(){
	//组件数组
	var components = new Array();
	//初始化添加一个组件
	components.push(new BaseComponent());
	
	var app = new BaseComponent();
	
	app.getComponentCount = function(){
			return components.length;
		};
	app.registerComponent = function(component){
		if(typeof component == "object"){
				components.push(component);
			}
	}
	return app;
}();
//alert(application2.getComponentCount());
//application2.registerComponent(new BaseComponent());
//alert(application2.getComponentCount());

//function test(){
//	this.name = 'taobao';
//	var waitMes = function (){
//		//每隔5秒钟执行this.name
//		setTimeout(function (){alert(self.name)},5000);
//	}
//	return waitMes;
//}
//var _test = test();
//_test();