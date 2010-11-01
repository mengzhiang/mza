//工厂模式
//缺点，不知道对象类型。
var createPerson = function(name,job,age){
	var o = new Object();
	o.name =name;
	o.job = job;
	o.age = age;
	o.sayName = function(){
		alert(this.name);
	}
	return o;
}

//var person1 = createPerson("meng","coder",25);
//person1.sayName();

function Person(name,job,age){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function(){
		alert(this.name);
	};
}

var person = new Person("meng","coder",25);
person.sayName();
alert(person.constructor == Person); 