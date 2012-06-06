Object.prototype.Clone = function() {
	var objClone = new this.constructor(); // 这里是创建一个与被Clone对象相同结构的对象
	for (var key in this) {
		if (objClone[key] != this[key]) {
			if (typeof(this[key]) == 'object') {
				objClone[key] = this[key].Clone();//如果是对象则递归调用。
			} else {
				objClone[key] = this[key];
			}
		}
	}
	if (!objClone || ('' + objClone) == '') {
		return (new String(this) + objClone) ? this : objClone;
	} else {
		objClone.toString = this.toString;
		return objClone;
	}
}