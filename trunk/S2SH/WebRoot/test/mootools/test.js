Function.prototype.extend = function(x) {
	for (var i in x) {
		this[i] = x[i];
	}
	return this;
}

var w = function(self, key, method) {

	var fn = function() {
		// 记录谁调用了 w 这个方法
		var caller = this.caller;
		// 给这个函数添加一个属性。保存函数本身
		var current = this._current;

		this.caller = current;

		this._current = arguments.callee;// 函数本身

		var result = method.apply(this, arguments);

		this._current = current;

		this.caller = caller;

		return result;
	};

	fn.extend({
				_owner : self,
				_origin : method,
				_name : key
			});
	return fn;
}

var Class = function(params) {
	// 创建一个函数
	var b = function() {
	};
	
	for (var p in params) {
		//如果有父类
		if (p == 'Extends') {
			// 如果有继承属性
			var parent = params[p];
			// 给函数增加parent属性，并把继承的类付给他
			b.parent = parent;
			// 修改b的原型为父类的对象
			b.prototype = new parent;
			// 给b的原型增加parent属性
			b.prototype.parent = w(b, 'parent', function() {
				var name = this.caller._name;
				var previous = this.caller._owner.parent.prototype[name];
				if (!previous) {
					throw new Error('The method "' + name + '" has no parent.');
				};
				return previous.apply(this, arguments);
			});
			continue;
		}
		//
		b.prototype[p] = w(b, p, params[p]);
	}
	return b;
}

var a = new Class({
			a : function() {
				alert("aaaa")
			},
			b : function() {
				alert(("bbbb"))
			},
			c : function(x) {
				alert(x)
			}
		})
var b = new Class({
			Extends : a,// Extends要写在第一个
			b : function() {
				alert("b22222")
			},
			c : function() {
				this.parent(33)
			}
		})
var bb = new b;
bb.a()// aaaa
bb.b()// b22222
bb.c()// 33


(function(){

var Class = this.Class = new Type('Class', function(params){
	if (instanceOf(params, Function)) params = {initialize: params};

	var newClass = function(){
		reset(this);
		if (newClass.$prototyping) return this;
		this.$caller = null;
		var value = (this.initialize) ? this.initialize.apply(this, arguments) : this;
		this.$caller = this.caller = null;
		return value;
	}.extend(this).implement(params);

	newClass.$constructor = Class;
	newClass.prototype.$constructor = newClass;
	newClass.prototype.parent = parent;

	return newClass;
});

var parent = function(){
	if (!this.$caller) throw new Error('The method "parent" cannot be called.');
	var name = this.$caller.$name,
		parent = this.$caller.$owner.parent,
		previous = (parent) ? parent.prototype[name] : null;
	if (!previous) throw new Error('The method "' + name + '" has no parent.');
	return previous.apply(this, arguments);
};

var reset = function(object){
	for (var key in object){
		var value = object[key];
		switch (typeOf(value)){
			case 'object':
				var F = function(){};
				F.prototype = value;
				object[key] = reset(new F);
			break;
			case 'array': object[key] = value.clone(); break;
		}
	}
	return object;
};

var wrap = function(self, key, method){
	if (method.$origin) method = method.$origin;
	var wrapper = function(){
		if (method.$protected && this.$caller == null) throw new Error('The method "' + key + '" cannot be called.');
		var caller = this.caller, current = this.$caller;
		this.caller = current; this.$caller = wrapper;
		var result = method.apply(this, arguments);
		this.$caller = current; this.caller = caller;
		return result;
	}.extend({$owner: self, $origin: method, $name: key});
	return wrapper;
};

var implement = function(key, value, retain){
	if (Class.Mutators.hasOwnProperty(key)){
		value = Class.Mutators[key].call(this, value);
		if (value == null) return this;
	}

	if (typeOf(value) == 'function'){
		if (value.$hidden) return this;
		this.prototype[key] = (retain) ? value : wrap(this, key, value);
	} else {
		Object.merge(this.prototype, key, value);
	}

	return this;
};

var getInstance = function(klass){
	klass.$prototyping = true;
	var proto = new klass;
	delete klass.$prototyping;
	return proto;
};

Class.implement('implement', implement.overloadSetter());

Class.Mutators = {

	Extends: function(parent){
		this.parent = parent;
		this.prototype = getInstance(parent);
	},

	Implements: function(items){
		Array.from(items).each(function(item){
			var instance = new item;
			for (var key in instance) implement.call(this, key, instance[key], true);
		}, this);
	}
};

})();
