//// 工厂模式
//// 缺点，不知道对象类型。
//var createPerson = function(name, job, age) {
//	var o = new Object();
//	o.name = name;
//	o.job = job;
//	o.age = age;
//	o.sayName = function() {
//		alert(this.name);
//	}
//	return o;
//}
//
//// var person1 = createPerson("meng","coder",25);
//// person1.sayName();
//
//function Person(name, job, age) {
//	this.name = name;
//	this.age = age;
//	this.job = job;
//	this.sayName = function() {
//		alert(this.name);
//	};
//}
//
//// var person = new Person("meng","coder",25);
//// person.sayName();
//// alert(person.constructor == Person);
//
//function Dog() {
//	this.wow = function() {
//		alert('wow');
//	}
//	this.yelp = function() {
//		this.wow();
//	}
//}
//var dog1 = new Dog();
//// dog1.yelp();
//
//function CrazyDog() {
//	this.yelp = function() {
//		setInterval(this.wow, 500);
//	}
//}
//// 函数正常执行 ()函数就是普通函数， new执行说明这个函数是个构造函数。
//// console.log(Dog()); //什么都没返回 undefined
//// console.log(new Dog()); //返回一个Object，有两个方法。
//// Dog只是一个函数字面量。
//// 原型必须是一个对象，这个对象可以有一些属性。
//CrazyDog.prototype = new Dog();
//var cdog = new CrazyDog();
//// cdog.yelp();
//
//Array.prototype.distinct = function() {
//	var ret = [];
//	for (var i = 0; i < this.length; i++) {
//		for (var j = i + 1; j < this.length;) {
//			if (this[i] === this[j]) {
//				ret.push(this.splice(j, 1)[0]);// this.splice(j, 1)从j处删除后面1个元素
//			} else {
//				j++;
//			}
//		}
//	}
//	return ret;
//}
//// for test
//// alert(['a', 'b', 'c', 'd', 'b', 'a', 'e'].distinct());
//
//var a = 100;
//function testResult() {
//	// 当全局变量和局部变量名字一样时，全局变量不会作用域局部作用域。
//	var b = 2 * a;
//	var a = 200;
//	var c = a / 2;
//	alert(b);
//	alert(c);
//}
//// testResult();
//function foo() {
//	var b = parseInt("01");
//	alert("b=" + b);
//	var c = parseInt("09", 10);
//	alert("c=" + c);
//}
//foo();
//组合式继承。
function ClassA(sColor) {
	this.color = sColor; //属性	每个对象都有一份
}
ClassA.prototype.sayColor = function(){
	alert(this.color); //方法由于this的特殊可以共享一份
}

function ClassB(sAge,sColor){
	ClassA.call(this,sColor); //在B里可以通过call方法初始化父类的信息
	this.age = sAge; //B的变量
}
ClassB.prototype = new ClassA(); //继承自A的对象
ClassB.prototype.constructor = ClassB; //把constructor 属性置回ClassB防止原型链断裂
ClassB.prototype.sayAge = function(){
	alert(this.age);
}
//console.log(ClassB);
var b = new ClassB(123,"red");
//b.sayColor();
//b.sayAge();
//原型链继承的缺点 1：所有实例共享父类中的引用类型2：无法在不影响所有对象实例的情况下，给超类型传递参数。
//function SuperType(){
//	this.name ="Super";
//}
//SuperType.prototype.getName = function(){
//	return this.name;
//}
//function SubType(){
//	this.age = 22;
//}
//SubType.prototype = new SuperType();
//SubType.prototype.constructor = SubType;
//SubType.prototype.getAge = function(){
//	return this.age;
//}
//var instance = new SubType();
//alert(instance.getName());
//alert(instance.getAge());
//2：借用构造函数方法，在子类中执行父类的构造函数，
//function SuperType(scolors,sage){
//	this.colors = scolors;
//	this.age =sage;
//	this.sayColors = function(){
//		alert(this.colors);
//	}
//	this.sayAge = function(){
//		alert(this.age);
//	}
//}
//function SubType(scolors,sage){
////	this.newMethod = SuperType;
////	this.newMethod(scolors);
////	delete this.newMethod;
////	SuperType.call(this,scolors,sage);
////	SuperType.apply(this,new Array(scolors,sage));
//	SuperType.apply(this,arguments);
//}
//var instance = new SubType("red",22);
//console.log(instance);
////alert(instance.colors);
//instance.sayColors();
//instance.sayAge();

//function SuperType(name){
//	this.name = name;
//	this.colors = ["red","blue"];//每个实例都有一份独自的属性
//}
//SuperType.prototype.sayName=function(){
//	alert(this.name);
//}
//function SubType(name,age){
//	SuperType.call(this,name);//第二次调用父类型
//	this.age =age;
//}
//SubType.prototype = new SuperType();//第一次调用父类型
//SubType.prototype.constructor = SubType; //把覆盖的constructor属性重新改回SubType
//SubType.prototype.sayAge = function(){
//	alert(this.age);
//}
//var instance = new SubType("test",222);
//instance.sayAge();
//instance.sayName();
//组合式继承，伯约叫类式继承，用的最多的继承方式
//优点：可以给父类的构造方法赋值。2：可以方位父类原型中的方法。
//缺点：两次调用父类型，子类的实例属性覆盖了他原型中的属性。

//另一种继承方式，传入一个对象，返回以这个对象为原型的新对象，然后可以对这个新对象进行更改，这样的继承方式叫原型式继承。
//有点，简单，当只是需要一个相似的对象时可以这么使用，不用管构造函数。
//function object(o){
//	function F(){};
//	F.prototype = o;
//	return new F();
//}
//var person = {
//	name:"mengzhiang",
//	friends :["cui","jin"]
//}
//var person_a = object(person);
//alert(person_a.name);
//alert(person_a.friends);
//person_a.name = "zhu";
//person_a.friends.push("wang");
//alert(person_a.name);
//alert(person_a.friends);
//var person_b = object(person);
//alert(person_b.friends);
//function SuperType(name){
//	this.name = name;
//}
//SuperType.prototype.sayName = function(){
//	alert(this.name);
//}
//SuperType.prototype.age = 99;
//
//function SubType(){
//	SuperType.call(this);//获得了SuperType的属性。
//}
//SubType.prototype = new SuperType(); //原型中又获得了相同的属性。没有必要，
//只是想获得SuperType的原型对象和原型方法。而不需要SuperType的属性。
//分两部分，第一次先取到的是父类的属性和方法。转递到自己的类里。
//          第二次取到的父类的父类的属性和方法。转移到自己的父类里
//问题：superType.prototype是什么？一个属性指向SuperType

function object(o){
	//传入一个对象，返回一个以这个对象为原型的对象。
	function F(){};
	F.prototype = o;
	return new F();
}
//console.log(SuperType.prototype);//SuperType.prototype是一个有三个属性的对象，前两个是自定义的，有一个是constructor指向SuperType。
//var test = object(SuperType.prototype);
//console.log(test);
//返回了一个以SuperType.prototype为原型的对象，他的父类指向了SuperType，所以还是隔了两层。
//SubType的prototype不是直接父类的原型，否则就重叠了，而是以父类原型为原型的对象，包含了父类原型中的方法，指向父类原型。
//子类型原型的原型等于父类型的原型。就是说子类型的原型等于父类型。
//组合继承和寄生继承一起叫组合式寄生继承。
function inheriteProperty(subType,superType){
	//目地：获得父类型原型中的方法和属性。
	//方法：1：copy一份父类型原型的方法和属性，
	var prototype = object(superType.prototype);
	//2：prototype的constructor指向的是SuperType需要指向SubType。
	prototype.constructor = subType;
	//3：付给自己的原型。
	subType.prototype = prototype;
}
//这样就把父类型原型中的属性和方法copy转移到了子类型的原型对象中了。
function SuperType(name){
	this.name = name;
}
SuperType.prototype.sayName = function(){
	alert(this.name);
}
SuperType.prototype.age = 99;

function SubType(sname,name){
	SuperType.call(this,name);//获得了SuperType的属性。
	this.sname = sname;
}
inheriteProperty(SubType,SuperType);
SubType.prototype.saySname = function(){
	alert(this.sname);
}
var instance = new SubType("子类","父类");
instance.sayName();
instance.saySname();


