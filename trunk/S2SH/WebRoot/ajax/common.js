/**
 * @method isUndefined
 * @param {Any}
 *            object
 * @return {Boolean}
 */

function isUndefined(object) {
	return typeof object == 'undefined';
}

/**
 * @method isString
 * @param {Any}
 *            object
 * @return {Boolean}
 */

function isString(object) {
	return typeof object == 'string';
}

/**
 * @method isElement
 * @param {Any}
 *            object
 * @return {Boolean}
 */

function isElement(object) {
	return object && object.nodeType == 1;
}

/**
 * @method isFunction
 * @param {Any}
 *            object
 * @return {Boolean}
 */

function isFunction(object) {
	return typeof object == 'function';
}

/**
 * @method isObject
 * @param {Any}
 *            object
 * @return {Boolean}
 */

function isObject(object) {
	return typeof object == 'object';
}

/**
 * @method isArray
 * @param {Any}
 *            object
 * @return {Boolean}
 */

function isArray(object) {
	return Object.prototype.toString.call(object) === '[object Array]';
}

/**
 * @method isNumber
 * @param {Any}
 *            object
 * @return {Boolean}
 */

function isNumber(object) {
	return typeof object == 'number';
}

(function(window) {
	Function.prototype.bind = function() {
		var args = [];
		for (i = 1; i < arguments.length; i++) {
			args.push(arguments[i]);
		}
		var method = this;
		var thisObj = arguments[0];
		return function() {
			return method.apply(thisObj, args);
		}
	};

	String.prototype.trim = function() {
		return this.replace(/(^\s*)|(\s*$)/g, "");
	}

	String.prototype.isNaN = function() {
		return isNaN(Number(this));
	}

	String.prototype.toNum = function() {
		return Number(this);
	}

	String.prototype.startWith = function(oString) {
		return this.indexOf(oString) == 0;
	}
	/**
	 * function本身也是对象，他是function构造函数的一个对象。所以他也有属性和方法。
	 */
	var MZA = function(){};
	MZA.fn = MZA.prototype;
	window.MZA = MZA;
	MZA.ajax = {};
	// 发送ajax请求，返回json数据
	MZA.ajax.ajax = function(data) {
		var request;
		var url = "";
		var type = "get";
		var sync = true;
		var paras = null;// 默认send参数是空
		if (window.ActiveXObject) {
			request = new ActiveXObject("Microsoft.XMLHTTP");
		} else {
			request = new XMLHttpRequest();
		}
		if (data.url) {
			url = data.url;
		}
		if (data.page) {
			url += "?start=" + data.page.start + "&limit=" + data.page.limit;
		}

		if (typeof(data.sync) != "undefined") {
			sync = data.sync;
		}
		if (data.type == "post") {
			type = data.type;
			paras = data.paras;
		}
		// ajax请求可以指定是否同步。当同步时firefox的onreadyState就不好用了。
		request.open(type, url, sync);
		if (sync) {
			request.onreadystatechange = function() {
				if (request.readyState == 4) {
					var str = request.responseText;
					try {
						var object = eval('(' + str + ')');
					} catch (e) {
					}

					// 设置分页。
					if (data.page) {
						MZA.TOTAL = object.totalcount;
						MZA.PAGECOUNT = Math.ceil(object.totalcount
								/ data.page.limit);
					}
					return object;
				}
			};
		}
		request.send(paras);
		if (!sync) {
			var str = request.responseText;
			try {
				var object = eval('(' + str + ')');
			} catch (e) {
			}
			// 设置分页
			if (data.page) {
				MZA.TOTAL = object.totalcount;
				MZA.PAGECOUNT = Math.ceil(object.totalcount / data.page.limit);
			}
			return object;
		}
	}

	MZA.AJAX = MZA.Ajax = MZA.ajax;
	// 绑定初始化事件
	MZA.addOnload = function(func) {
		var oldonload = window.onload;
		if (typeof window.onload != "function") {
			window.onload = func;
		} else {
			window.onload = function() {
				oldonload();
				func();
			}
		}
	}
	MZA.ready = function(func) {
		window.onload = func;
	}
	MZA.bom = {};
	// 获取窗口可视区域大小和页面大小
	// 窗口大小可变，但是页面大小是不变的。
	MZA.bom.getWindowSize = function() {
		var winWidth = 0;
		var winHeight = 0;
		// window.innerWidth在FF下好使
		if (window.innerWidth) {
			winWidth = document.body.clientWidth;// ff下测试不对，所以改成document.body.clientWidth；
			winHeight = window.innerHeight;// 这个正确
		} else if (document.documentElement
				&& document.documentElement.clientHeight) {
			// 其他浏览器。
			winWidth = document.documentElement.clientWidth;
			winHeight = document.documentElement.clientHeight;
		} else if (document.body) {
			// IE下
			winWidth = document.body.clientWidth;
			winHeight = document.body.clientHeight;
		}
		// 如果有滚动条，则去得滚动后的大小
		var xScroll, yScroll;
		// 如果是火狐
		if (window.innerHeight && window.scrollMaxY) {
			xScroll = document.body.scrollWidth;
			yScroll = window.innerHeight + window.scrollMaxY;
		} else if (document.body.scrollHeight > document.body.offsetHeight) {
			// 如果IE
			xScroll = document.body.scrollWidth;
			yScroll = document.body.scrollHeight;
		} else {
			// 其他正常情况下
			xScroll = document.body.offsetWidth;
			yScroll = document.body.offsetHeight;
		}
		// 如果有滚动条，则页面大小以滚动后为准，全部覆盖。
		var pageHeight, pageWidth;
		if (yScroll < winHeight) {
			pageHeight = winHeight;
		} else {
			pageHeight = yScroll;
		}
		if (xScroll < winWidth) {
			pageWidth = winWidth;
		} else {
			pageWidth = xScroll;
		}

		var arrayPageSize = new Array(pageWidth, pageHeight, winWidth,
				winHeight);
		return arrayPageSize;
	}
	// 获得内容层内容原始大小
	MZA.bom.getConSize = function(conId, w, h) {
		var conObj = document.getElementById(conId)
		conObj.style.position = "absolute";
		conObj.style.left = -1000 + "px";
		conObj.style.display = "";
		conObj.style.width = w + "px";
		conObj.style.height = h + "px";
		var arrayConSize = [0, 0];
		arrayConSize[0] = conObj.offsetWidth;
		arrayConSize[1] = conObj.offsetHeight;
		conObj.style.display = "none";
		return arrayConSize;
	}
	// 获取滚动条的离浏览器左端的距离和离浏览器顶端的距离
	MZA.bom.getPageSroll = function() {
		// 获取滚动条的高度
		var xScroll, yScroll;
		// self对象是指当前窗口，用于由iframe和frameset的情况下。
		if (self.pageYOffset) {
			// FF下
			xScroll = self.pageXOffset
			yScroll = self.pageYOffset;
		} else if (document.documentElement
				&& document.documentElement.scrollTop
				&& documentElement.scrollLeft) {
			// w3c标准
			xScroll = document.documentElement.scrollLeft;
			yScroll = document.documentElement.scrollTop;
		} else if (document.body) {
			// IE下
			xScroll = document.body.scrollLeft;
			yScroll = document.body.scrollTop;
		}
		arrayPageScroll = new Array(xScroll, yScroll)
		return arrayPageScroll;
	}

	MZA.DOM = MZA.Dom = MZA.dom = {};

	/**
	 * 刷新页面
	 */
	MZA.dom.refreshPage = function() {
		window.location.reload();
	}
	/**
	 * 删除某个节点
	 * 
	 * @param {}
	 *            _element
	 */
	MZA.dom.remove = function(_element) {
		if (isArray(_element)) {
			var len = _element.length;
			for (var i = len - 1; i >= 0; i--) {
				var _parentElement = _element[i].parentNode;
				if (_parentElement) {
					_parentElement.removeChild(_element[i]);
				}
			}

		} else {
			var _parentElement = _element.parentNode;
			if (_parentElement) {
				_parentElement.removeChild(_element);
			}
		}
	}
	/**
	 * 创建一个包装元素
	 */
	MZA.dom.create = function(_element) {
		var node = document.createElement(_element);
		return MZA.extend(node, MZA.element);
	}
	/**
	 * 创建一个DOM元素
	 */
	MZA.dom.createDOM = function(_element) {
		var node = document.createElement(_element);
		return node;
	}
	MZA.dom.formSerialize = function(form) {
		var parts = [];
		var field = null;
		for (var i = 0, len = form.elements.length; i < len; i++) {
			field = form.elements[i];
			if (field.name == "") {
				break;
			};
			switch (field.type) {
				case "select-one" :
				case "select-multiple" :
					for (var j = 0, optLen = field.options.length; j < optLen; j++) {
						var option = field.options[j];
						if (option.selected) {
							var optValue = "";
							if (option.hasAttribute) {
								optValue = (option.hasAttribute("value")
										? option.value
										: option.text);
							} else {
								optValue = (option.attributes["value"].specified
										? option.value
										: option.text);
							}
							parts.push(encodeURIComponent(field.name) + "="
									+ encodeURIComponent(optValue));
						}
					}
					break;
				case undefined :
				case "file" :
				case "submit" :
				case "result" :
				case "button" :
					break;
				case "radio" :
				case "checkbox" :
					if (!field.checked) {
						break;
					}
				default :
					parts.push(encodeURIComponent(field.name) + "="
							+ encodeURIComponent(field.value));
			}
		}
		return parts.join("&");
	}
	var isIE = document.all ? true : false;// 如果是IE是true否则是false

	MZA.form = {};
	MZA.form.getSelectedOptions = function(selectbox) {
		var result = new Array();
		var option = null;
		for (var i = 0, len = selectbox.options.length; i < len; i++) {
			option = selectbox.options[i];
			if (option.selected) {
				result.push(option);
			}
		}
		return result;
	}
	MZA.EVENT = MZA.Event = MZA.event = {};
	// 添加事件
	MZA.event.addHandler = function(element, type, handler) {
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent) {
			element.attachEvent("on" + type, handler);
		} else {
			element["on" + type] = handler;
		}
	}
	// 删除事件
	MZA.event.removeHandler = function(element, type, handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if (element.detachEvent) {
			element.detachEvent("on" + type, handler);
		} else {
			element["on" + type] = handler;
		}
	}
	// 得到当前事件
	MZA.event.getEvent = function(event) {
		return event ? event : window.event;
	}
	// 得到事件目标
	MZA.event.getTarget = function(event) {
		return event.target || event.srcElement;
	}
	// 阻止默认行为
	MZA.event.preventDefault = function(event) {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	}
	// 阻止继续冒泡
	MZA.event.stopPropagation = function(event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBuddle = true;
		}
	}
	// 自定义事件类
	MZA.event.EventTarget = function() {
		this.handlers = {};
	}
	MZA.event.EventTarget.prototype = {
		constructor : MZA.event.EventTarget,
		addHandler : function(type, handler) {
			// 同一个类型的事件有多个，不同的类型的时间是属性。
			if (typeof this.handlers[type] == "undefined") {
				this.handlers[type] = [];
			}
			this.handlers[type].push(handler);
		},
		fire : function(event) {
			if (!event.target) {
				event.target = this;
			}
			if (this.handlers[event.type] instanceof Array) {
				var handlers = this.handlers[event.type];
				for (var i = 0; i < handlers.length; i++) {
					handlers[i](event);
				}
			}
		},
		removeHandler : function(type, handler) {
			if (this.handlers[type] instanceof Array) {
				var handlers = this.handlers[type];
				for (var i = 0; i < handlers.length; i++) {
					if (handlers[i] === handler) {
						break;
					}
				}
				handlers.splice(i, 1);
			}
		}
	}
	MZA.load = {};
	// 动态加载js文件。
	MZA.load.loadScript = function(url) {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = url;
		document.body.appendChild(script);
	}
	// 动态加载css文件
	MZA.load.loadStyles = function(url) {
		var link = document.createElement("link");
		link.rel = "stylesheet";
		link.type = "text/css";
		link.href = url;
		var head = document.getElementsByTagName("head")[0];
		head.appendChild(link);
	}
	// 检测浏览器对DOM2和DOM3的支持情况
	MZA.dom.checkSupport = function() {
		var implementation = document.implementation;
		var supportsDOM2CORE = implementation.hasFeature("CORE", "2.0");
		var supportsDOM3CORE = implementation.hasFeature("CORE", "3.0");
		var supportsDOM2HTML = implementation.hasFeature("HTML", "2.0");
		var supportsDOM2View = implementation.hasFeature("Views", "2.0");
		var supportsDOM2XML = implementation.hasFeature("XML", "2.0");
		var supportsDOM2CSS = implementation.hasFeature("CSS", "2.0");
		var supportsDOM2CSS2 = implementation.hasFeature("CSS2", "2.0");

		return {
			"supportsDOM2CORE" : supportsDOM2CORE,
			"supportsDOM3CORE" : supportsDOM3CORE,
			"supportsDOM2HTML" : supportsDOM2HTML,
			"supportsDOM2View" : supportsDOM2View,
			"supportsDOM2XML" : supportsDOM2XML,
			"supportsDOM2CSS" : supportsDOM2CSS,
			"supportsDOM2CSS2" : supportsDOM2CSS2
		}
	}

	MZA.DragDrop = function() {
		var dragdrop = new MZA.event.EventTarget();
		var dragging = null;
		var diffX = 0;
		var diffY = 0;
		function handleEvent(e) {
			var event = MZA.event.getEvent(e);
			var target = MZA.event.getTarget(event);
			switch (event.type) {

				case "mousedown" :
					if (target.className.indexOf("draggable") > -1) {
						dragging = target;
						// 记录下鼠标位置和div的left和top的差值
						diffX = event.clientX - target.offsetLeft;
						diffY = event.clientY - target.offsetTop;
						dragdrop.fire({
									type : "dragstart",
									target : dragging,
									x : event.clientX,
									y : event.clientY
								});
					}
					// 自定义事件
					break;

				case "mousemove" :
					if (dragging !== null) {
						// 解决FF下拖动bug，清空选中。
						window.getSelection ? window.getSelection()
								.removeAllRanges() : document.selection.empty();
						event = MZA.event.getEvent(e);
						// 最后的位置是计算差值后的位置。
						dragging.style.left = (event.clientX - diffX) + "px";
						dragging.style.top = (event.clientY - diffY) + "px";
						dragdrop.fire({
									type : "drag",
									target : dragging,
									x : event.clientX,
									y : event.clientY
								});
					}
					break;

				case "mouseup" :
					if (dragging !== null) {
						dragdrop.fire({
									type : "dragend",
									target : dragging,
									x : event.clientX,
									y : event.clientY
								});
						dragging = null;
					}
					break;
			}
		};

		dragdrop.enable = function() {
			MZA.event.addHandler(document, "mousedown", handleEvent);
			MZA.event.addHandler(document, "mousemove", handleEvent);
			MZA.event.addHandler(document, "mouseup", handleEvent);
		}
		dragdrop.disable = function() {
			MZA.event.removeHandler(document, "mousedown", handleEvent);
			MZA.event.removeHandler(document, "mousemove", handleEvent);
			MZA.event.removeHandler(document, "mouseup", handleEvent);
		}
		return dragdrop;
	}();
	MZA.anim = function() {

	}

	MZA.core = {};

	/*
	 * ! Sizzle CSS Selector Engine - v1.0 Copyright 2009, The Dojo Foundation
	 * Released under the MIT, BSD, and GPL Licenses. More information:
	 * http://sizzlejs.com/
	 */
	(function() {

		var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, done = 0, toString = Object.prototype.toString, hasDuplicate = false, baseHasDuplicate = true;

		// Here we check if the JavaScript engine is using some sort of
		// optimization where it does not always call our comparision
		// function. If that is the case, discard the hasDuplicate value.
		// Thus far that includes Google Chrome.
		[0, 0].sort(function() {
					baseHasDuplicate = false;
					return 0;
				});

		var Sizzle = function(selector, context, results, seed) {
			results = results || [];
			context = context || document;

			var origContext = context;

			if (context.nodeType !== 1 && context.nodeType !== 9) {
				return [];
			}

			if (!selector || typeof selector !== "string") {
				return results;
			}

			var m, set, checkSet, extra, ret, cur, pop, i, prune = true, contextXML = Sizzle
					.isXML(context), parts = [], soFar = selector;

			// Reset the position of the chunker regexp (start from head)
			do {
				chunker.exec("");
				m = chunker.exec(soFar);

				if (m) {
					soFar = m[3];

					parts.push(m[1]);

					if (m[2]) {
						extra = m[3];
						break;
					}
				}
			} while (m);

			if (parts.length > 1 && origPOS.exec(selector)) {

				if (parts.length === 2 && Expr.relative[parts[0]]) {
					set = posProcess(parts[0] + parts[1], context);

				} else {
					set = Expr.relative[parts[0]] ? [context] : Sizzle(parts
									.shift(), context);

					while (parts.length) {
						selector = parts.shift();

						if (Expr.relative[selector]) {
							selector += parts.shift();
						}

						set = posProcess(selector, set);
					}
				}

			} else {
				// Take a shortcut and set the context if the root selector is
				// an ID
				// (but not if it'll be faster if the inner selector is an ID)
				if (!seed && parts.length > 1 && context.nodeType === 9
						&& !contextXML && Expr.match.ID.test(parts[0])
						&& !Expr.match.ID.test(parts[parts.length - 1])) {

					ret = Sizzle.find(parts.shift(), context, contextXML);
					context = ret.expr
							? Sizzle.filter(ret.expr, ret.set)[0]
							: ret.set[0];
				}

				if (context) {
					ret = seed ? {
						expr : parts.pop(),
						set : makeArray(seed)
					} : Sizzle.find(parts.pop(), parts.length === 1
									&& (parts[0] === "~" || parts[0] === "+")
									&& context.parentNode
									? context.parentNode
									: context, contextXML);

					set = ret.expr ? Sizzle.filter(ret.expr, ret.set) : ret.set;

					if (parts.length > 0) {
						checkSet = makeArray(set);

					} else {
						prune = false;
					}

					while (parts.length) {
						cur = parts.pop();
						pop = cur;

						if (!Expr.relative[cur]) {
							cur = "";
						} else {
							pop = parts.pop();
						}

						if (pop == null) {
							pop = context;
						}

						Expr.relative[cur](checkSet, pop, contextXML);
					}

				} else {
					checkSet = parts = [];
				}
			}

			if (!checkSet) {
				checkSet = set;
			}

			if (!checkSet) {
				Sizzle.error(cur || selector);
			}

			if (toString.call(checkSet) === "[object Array]") {
				if (!prune) {
					results.push.apply(results, checkSet);

				} else if (context && context.nodeType === 1) {
					for (i = 0; checkSet[i] != null; i++) {
						if (checkSet[i]
								&& (checkSet[i] === true || checkSet[i].nodeType === 1
										&& Sizzle
												.contains(context, checkSet[i]))) {
							results.push(set[i]);
						}
					}

				} else {
					for (i = 0; checkSet[i] != null; i++) {
						if (checkSet[i] && checkSet[i].nodeType === 1) {
							results.push(set[i]);
						}
					}
				}

			} else {
				makeArray(checkSet, results);
			}

			if (extra) {
				Sizzle(extra, origContext, results, seed);
				Sizzle.uniqueSort(results);
			}

			return results;
		};

		Sizzle.uniqueSort = function(results) {
			if (sortOrder) {
				hasDuplicate = baseHasDuplicate;
				results.sort(sortOrder);

				if (hasDuplicate) {
					for (var i = 1; i < results.length; i++) {
						if (results[i] === results[i - 1]) {
							results.splice(i--, 1);
						}
					}
				}
			}

			return results;
		};

		Sizzle.matches = function(expr, set) {
			return Sizzle(expr, null, null, set);
		};

		Sizzle.matchesSelector = function(node, expr) {
			return Sizzle(expr, null, null, [node]).length > 0;
		};

		Sizzle.find = function(expr, context, isXML) {
			var set;

			if (!expr) {
				return [];
			}

			for (var i = 0, l = Expr.order.length; i < l; i++) {
				var match, type = Expr.order[i];

				if ((match = Expr.leftMatch[type].exec(expr))) {
					var left = match[1];
					match.splice(1, 1);

					if (left.substr(left.length - 1) !== "\\") {
						match[1] = (match[1] || "").replace(/\\/g, "");
						set = Expr.find[type](match, context, isXML);

						if (set != null) {
							expr = expr.replace(Expr.match[type], "");
							break;
						}
					}
				}
			}

			if (!set) {
				set = context.getElementsByTagName("*");
			}

			return {
				set : set,
				expr : expr
			};
		};

		Sizzle.filter = function(expr, set, inplace, not) {
			var match, anyFound, old = expr, result = [], curLoop = set, isXMLFilter = set
					&& set[0] && Sizzle.isXML(set[0]);

			while (expr && set.length) {
				for (var type in Expr.filter) {
					if ((match = Expr.leftMatch[type].exec(expr)) != null
							&& match[2]) {
						var found, item, filter = Expr.filter[type], left = match[1];

						anyFound = false;

						match.splice(1, 1);

						if (left.substr(left.length - 1) === "\\") {
							continue;
						}

						if (curLoop === result) {
							result = [];
						}

						if (Expr.preFilter[type]) {
							match = Expr.preFilter[type](match, curLoop,
									inplace, result, not, isXMLFilter);

							if (!match) {
								anyFound = found = true;

							} else if (match === true) {
								continue;
							}
						}

						if (match) {
							for (var i = 0; (item = curLoop[i]) != null; i++) {
								if (item) {
									found = filter(item, match, i, curLoop);
									var pass = not ^ !!found;

									if (inplace && found != null) {
										if (pass) {
											anyFound = true;

										} else {
											curLoop[i] = false;
										}

									} else if (pass) {
										result.push(item);
										anyFound = true;
									}
								}
							}
						}

						if (found !== undefined) {
							if (!inplace) {
								curLoop = result;
							}

							expr = expr.replace(Expr.match[type], "");

							if (!anyFound) {
								return [];
							}

							break;
						}
					}
				}

				// Improper expression
				if (expr === old) {
					if (anyFound == null) {
						Sizzle.error(expr);

					} else {
						break;
					}
				}

				old = expr;
			}

			return curLoop;
		};

		Sizzle.error = function(msg) {
			throw "Syntax error, unrecognized expression: " + msg;
		};

		var Expr = Sizzle.selectors = {
			order : ["ID", "NAME", "TAG"],

			match : {
				ID : /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
				CLASS : /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
				NAME : /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
				ATTR : /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
				TAG : /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
				CHILD : /:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
				POS : /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
				PSEUDO : /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
			},

			leftMatch : {},

			attrMap : {
				"class" : "className",
				"for" : "htmlFor"
			},

			attrHandle : {
				href : function(elem) {
					return elem.getAttribute("href");
				}
			},

			relative : {
				"+" : function(checkSet, part) {
					var isPartStr = typeof part === "string", isTag = isPartStr
							&& !/\W/.test(part), isPartStrNotTag = isPartStr
							&& !isTag;

					if (isTag) {
						part = part.toLowerCase();
					}

					for (var i = 0, l = checkSet.length, elem; i < l; i++) {
						if ((elem = checkSet[i])) {
							while ((elem = elem.previousSibling)
									&& elem.nodeType !== 1) {
							}

							checkSet[i] = isPartStrNotTag || elem
									&& elem.nodeName.toLowerCase() === part
									? elem || false
									: elem === part;
						}
					}

					if (isPartStrNotTag) {
						Sizzle.filter(part, checkSet, true);
					}
				},

				">" : function(checkSet, part) {
					var elem, isPartStr = typeof part === "string", i = 0, l = checkSet.length;

					if (isPartStr && !/\W/.test(part)) {
						part = part.toLowerCase();

						for (; i < l; i++) {
							elem = checkSet[i];

							if (elem) {
								var parent = elem.parentNode;
								checkSet[i] = parent.nodeName.toLowerCase() === part
										? parent
										: false;
							}
						}

					} else {
						for (; i < l; i++) {
							elem = checkSet[i];

							if (elem) {
								checkSet[i] = isPartStr
										? elem.parentNode
										: elem.parentNode === part;
							}
						}

						if (isPartStr) {
							Sizzle.filter(part, checkSet, true);
						}
					}
				},

				"" : function(checkSet, part, isXML) {
					var nodeCheck, doneName = done++, checkFn = dirCheck;

					if (typeof part === "string" && !/\W/.test(part)) {
						part = part.toLowerCase();
						nodeCheck = part;
						checkFn = dirNodeCheck;
					}

					checkFn("parentNode", part, doneName, checkSet, nodeCheck,
							isXML);
				},

				"~" : function(checkSet, part, isXML) {
					var nodeCheck, doneName = done++, checkFn = dirCheck;

					if (typeof part === "string" && !/\W/.test(part)) {
						part = part.toLowerCase();
						nodeCheck = part;
						checkFn = dirNodeCheck;
					}

					checkFn("previousSibling", part, doneName, checkSet,
							nodeCheck, isXML);
				}
			},

			find : {
				ID : function(match, context, isXML) {
					if (typeof context.getElementById !== "undefined" && !isXML) {
						var m = context.getElementById(match[1]);
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						return m && m.parentNode ? [m] : [];
					}
				},

				NAME : function(match, context) {
					if (typeof context.getElementsByName !== "undefined") {
						var ret = [], results = context
								.getElementsByName(match[1]);

						for (var i = 0, l = results.length; i < l; i++) {
							if (results[i].getAttribute("name") === match[1]) {
								ret.push(results[i]);
							}
						}

						return ret.length === 0 ? null : ret;
					}
				},

				TAG : function(match, context) {
					return context.getElementsByTagName(match[1]);
				}
			},
			preFilter : {
				CLASS : function(match, curLoop, inplace, result, not, isXML) {
					match = " " + match[1].replace(/\\/g, "") + " ";

					if (isXML) {
						return match;
					}

					for (var i = 0, elem; (elem = curLoop[i]) != null; i++) {
						if (elem) {
							if (not
									^ (elem.className && (" " + elem.className + " ")
											.replace(/[\t\n]/g, " ")
											.indexOf(match) >= 0)) {
								if (!inplace) {
									result.push(elem);
								}

							} else if (inplace) {
								curLoop[i] = false;
							}
						}
					}

					return false;
				},

				ID : function(match) {
					return match[1].replace(/\\/g, "");
				},

				TAG : function(match, curLoop) {
					return match[1].toLowerCase();
				},

				CHILD : function(match) {
					if (match[1] === "nth") {
						// parse equations like 'even', 'odd', '5', '2n',
						// '3n+2', '4n-1', '-n+6'
						var test = /(-?)(\d*)n((?:\+|-)?\d*)/
								.exec(match[2] === "even" && "2n"
										|| match[2] === "odd" && "2n+1"
										|| !/\D/.test(match[2]) && "0n+"
										+ match[2] || match[2]);

						// calculate the numbers (first)n+(last) including if
						// they are negative
						match[2] = (test[1] + (test[2] || 1)) - 0;
						match[3] = test[3] - 0;
					}

					match[0] = done++;

					return match;
				},

				ATTR : function(match, curLoop, inplace, result, not, isXML) {
					var name = match[1].replace(/\\/g, "");

					if (!isXML && Expr.attrMap[name]) {
						match[1] = Expr.attrMap[name];
					}

					if (match[2] === "~=") {
						match[4] = " " + match[4] + " ";
					}

					return match;
				},

				PSEUDO : function(match, curLoop, inplace, result, not) {
					if (match[1] === "not") {
						// If we're dealing with a complex expression, or a
						// simple one
						if ((chunker.exec(match[3]) || "").length > 1
								|| /^\w/.test(match[3])) {
							match[3] = Sizzle(match[3], null, null, curLoop);

						} else {
							var ret = Sizzle.filter(match[3], curLoop, inplace,
									true ^ not);

							if (!inplace) {
								result.push.apply(result, ret);
							}

							return false;
						}

					} else if (Expr.match.POS.test(match[0])
							|| Expr.match.CHILD.test(match[0])) {
						return true;
					}

					return match;
				},

				POS : function(match) {
					match.unshift(true);

					return match;
				}
			},

			filters : {
				enabled : function(elem) {
					return elem.disabled === false && elem.type !== "hidden";
				},

				disabled : function(elem) {
					return elem.disabled === true;
				},

				checked : function(elem) {
					return elem.checked === true;
				},

				selected : function(elem) {
					// Accessing this property makes selected-by-default
					// options in Safari work properly
					elem.parentNode.selectedIndex;

					return elem.selected === true;
				},

				parent : function(elem) {
					return !!elem.firstChild;
				},

				empty : function(elem) {
					return !elem.firstChild;
				},

				has : function(elem, i, match) {
					return !!Sizzle(match[3], elem).length;
				},

				header : function(elem) {
					return (/h\d/i).test(elem.nodeName);
				},

				text : function(elem) {
					return "text" === elem.type;
				},
				radio : function(elem) {
					return "radio" === elem.type;
				},

				checkbox : function(elem) {
					return "checkbox" === elem.type;
				},

				file : function(elem) {
					return "file" === elem.type;
				},
				password : function(elem) {
					return "password" === elem.type;
				},

				submit : function(elem) {
					return "submit" === elem.type;
				},

				image : function(elem) {
					return "image" === elem.type;
				},

				reset : function(elem) {
					return "reset" === elem.type;
				},

				button : function(elem) {
					return "button" === elem.type
							|| elem.nodeName.toLowerCase() === "button";
				},

				input : function(elem) {
					return (/input|select|textarea|button/i)
							.test(elem.nodeName);
				}
			},
			setFilters : {
				first : function(elem, i) {
					return i === 0;
				},

				last : function(elem, i, match, array) {
					return i === array.length - 1;
				},

				even : function(elem, i) {
					return i % 2 === 0;
				},

				odd : function(elem, i) {
					return i % 2 === 1;
				},

				lt : function(elem, i, match) {
					return i < match[3] - 0;
				},

				gt : function(elem, i, match) {
					return i > match[3] - 0;
				},

				nth : function(elem, i, match) {
					return match[3] - 0 === i;
				},

				eq : function(elem, i, match) {
					return match[3] - 0 === i;
				}
			},
			filter : {
				PSEUDO : function(elem, match, i, array) {
					var name = match[1], filter = Expr.filters[name];

					if (filter) {
						return filter(elem, i, match, array);

					} else if (name === "contains") {
						return (elem.textContent || elem.innerText
								|| Sizzle.getText([elem]) || "")
								.indexOf(match[3]) >= 0;

					} else if (name === "not") {
						var not = match[3];

						for (var j = 0, l = not.length; j < l; j++) {
							if (not[j] === elem) {
								return false;
							}
						}

						return true;

					} else {
						Sizzle.error("Syntax error, unrecognized expression: "
								+ name);
					}
				},

				CHILD : function(elem, match) {
					var type = match[1], node = elem;

					switch (type) {
						case "only" :
						case "first" :
							while ((node = node.previousSibling)) {
								if (node.nodeType === 1) {
									return false;
								}
							}

							if (type === "first") {
								return true;
							}

							node = elem;

						case "last" :
							while ((node = node.nextSibling)) {
								if (node.nodeType === 1) {
									return false;
								}
							}

							return true;

						case "nth" :
							var first = match[2], last = match[3];

							if (first === 1 && last === 0) {
								return true;
							}

							var doneName = match[0], parent = elem.parentNode;

							if (parent
									&& (parent.sizcache !== doneName || !elem.nodeIndex)) {
								var count = 0;

								for (node = parent.firstChild; node; node = node.nextSibling) {
									if (node.nodeType === 1) {
										node.nodeIndex = ++count;
									}
								}

								parent.sizcache = doneName;
							}

							var diff = elem.nodeIndex - last;

							if (first === 0) {
								return diff === 0;

							} else {
								return (diff % first === 0 && diff / first >= 0);
							}
					}
				},

				ID : function(elem, match) {
					return elem.nodeType === 1
							&& elem.getAttribute("id") === match;
				},

				TAG : function(elem, match) {
					return (match === "*" && elem.nodeType === 1)
							|| elem.nodeName.toLowerCase() === match;
				},

				CLASS : function(elem, match) {
					return (" "
							+ (elem.className || elem.getAttribute("class")) + " ")
							.indexOf(match) > -1;
				},

				ATTR : function(elem, match) {
					var name = match[1], result = Expr.attrHandle[name]
							? Expr.attrHandle[name](elem)
							: elem[name] != null ? elem[name] : elem
									.getAttribute(name), value = result + "", type = match[2], check = match[4];

					return result == null
							? type === "!="
							: type === "="
									? value === check
									: type === "*="
											? value.indexOf(check) >= 0
											: type === "~="
													? (" " + value + " ")
															.indexOf(check) >= 0
													: !check
															? value
																	&& result !== false
															: type === "!="
																	? value !== check
																	: type === "^="
																			? value
																					.indexOf(check) === 0
																			: type === "$="
																					? value
																							.substr(value.length
																									- check.length) === check
																					: type === "|="
																							? value === check
																									|| value
																											.substr(
																													0,
																													check.length
																															+ 1) === check
																											+ "-"
																							: false;
				},

				POS : function(elem, match, i, array) {
					var name = match[2], filter = Expr.setFilters[name];

					if (filter) {
						return filter(elem, i, match, array);
					}
				}
			}
		};

		var origPOS = Expr.match.POS, fescape = function(all, num) {
			return "\\" + (num - 0 + 1);
		};

		for (var type in Expr.match) {
			Expr.match[type] = new RegExp(Expr.match[type].source
					+ (/(?![^\[]*\])(?![^\(]*\))/.source));
			Expr.leftMatch[type] = new RegExp(/(^(?:.|\r|\n)*?)/.source
					+ Expr.match[type].source.replace(/\\(\d+)/g, fescape));
		}

		var makeArray = function(array, results) {
			array = Array.prototype.slice.call(array, 0);

			if (results) {
				results.push.apply(results, array);
				return results;
			}

			return array;
		};

		// Perform a simple check to determine if the browser is capable of
		// converting a NodeList to an array using builtin methods.
		// Also verifies that the returned array holds DOM nodes
		// (which is not the case in the Blackberry browser)
		try {
			Array.prototype.slice.call(document.documentElement.childNodes, 0)[0].nodeType;

			// Provide a fallback method if it does not work
		} catch (e) {
			makeArray = function(array, results) {
				var i = 0, ret = results || [];

				if (toString.call(array) === "[object Array]") {
					Array.prototype.push.apply(ret, array);

				} else {
					if (typeof array.length === "number") {
						for (var l = array.length; i < l; i++) {
							ret.push(array[i]);
						}

					} else {
						for (; array[i]; i++) {
							ret.push(array[i]);
						}
					}
				}

				return ret;
			};
		}

		var sortOrder, siblingCheck;

		if (document.documentElement.compareDocumentPosition) {
			sortOrder = function(a, b) {
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}

				if (!a.compareDocumentPosition || !b.compareDocumentPosition) {
					return a.compareDocumentPosition ? -1 : 1;
				}

				return a.compareDocumentPosition(b) & 4 ? -1 : 1;
			};

		} else {
			sortOrder = function(a, b) {
				var al, bl, ap = [], bp = [], aup = a.parentNode, bup = b.parentNode, cur = aup;

				// The nodes are identical, we can exit early
				if (a === b) {
					hasDuplicate = true;
					return 0;

					// If the nodes are siblings (or identical) we can do a
					// quick check
				} else if (aup === bup) {
					return siblingCheck(a, b);

					// If no parents were found then the nodes are disconnected
				} else if (!aup) {
					return -1;

				} else if (!bup) {
					return 1;
				}

				// Otherwise they're somewhere else in the tree so we need
				// to build up a full list of the parentNodes for comparison
				while (cur) {
					ap.unshift(cur);
					cur = cur.parentNode;
				}

				cur = bup;

				while (cur) {
					bp.unshift(cur);
					cur = cur.parentNode;
				}

				al = ap.length;
				bl = bp.length;

				// Start walking down the tree looking for a discrepancy
				for (var i = 0; i < al && i < bl; i++) {
					if (ap[i] !== bp[i]) {
						return siblingCheck(ap[i], bp[i]);
					}
				}

				// We ended someplace up the tree so do a sibling check
				return i === al ? siblingCheck(a, bp[i], -1) : siblingCheck(
						ap[i], b, 1);
			};

			siblingCheck = function(a, b, ret) {
				if (a === b) {
					return ret;
				}

				var cur = a.nextSibling;

				while (cur) {
					if (cur === b) {
						return -1;
					}

					cur = cur.nextSibling;
				}

				return 1;
			};
		}

		// Utility function for retreiving the text value of an array of DOM
		// nodes
		Sizzle.getText = function(elems) {
			var ret = "", elem;

			for (var i = 0; elems[i]; i++) {
				elem = elems[i];

				// Get the text from text nodes and CDATA nodes
				if (elem.nodeType === 3 || elem.nodeType === 4) {
					ret += elem.nodeValue;

					// Traverse everything else, except comment nodes
				} else if (elem.nodeType !== 8) {
					ret += Sizzle.getText(elem.childNodes);
				}
			}

			return ret;
		};

		// Check to see if the browser returns elements by name when
		// querying by getElementById (and provide a workaround)
		(function() {
			// We're going to inject a fake input element with a specified name
			var form = document.createElement("div"), id = "script"
					+ (new Date()).getTime(), root = document.documentElement;

			form.innerHTML = "<a name='" + id + "'/>";

			// Inject it into the root element, check its status, and remove it
			// quickly
			root.insertBefore(form, root.firstChild);

			// The workaround has to do additional checks after a getElementById
			// Which slows things down for other browsers (hence the branching)
			if (document.getElementById(id)) {
				Expr.find.ID = function(match, context, isXML) {
					if (typeof context.getElementById !== "undefined" && !isXML) {
						var m = context.getElementById(match[1]);

						return m
								? m.id === match[1]
										|| typeof m.getAttributeNode !== "undefined"
										&& m.getAttributeNode("id").nodeValue === match[1]
										? [m]
										: undefined
								: [];
					}
				};

				Expr.filter.ID = function(elem, match) {
					var node = typeof elem.getAttributeNode !== "undefined"
							&& elem.getAttributeNode("id");

					return elem.nodeType === 1 && node
							&& node.nodeValue === match;
				};
			}

			root.removeChild(form);

			// release memory in IE
			root = form = null;
		})();

		(function() {
			// Check to see if the browser returns only elements
			// when doing getElementsByTagName("*")

			// Create a fake element
			var div = document.createElement("div");
			div.appendChild(document.createComment(""));

			// Make sure no comments are found
			if (div.getElementsByTagName("*").length > 0) {
				Expr.find.TAG = function(match, context) {
					var results = context.getElementsByTagName(match[1]);

					// Filter out possible comments
					if (match[1] === "*") {
						var tmp = [];

						for (var i = 0; results[i]; i++) {
							if (results[i].nodeType === 1) {
								tmp.push(results[i]);
							}
						}

						results = tmp;
					}

					return results;
				};
			}

			// Check to see if an attribute returns normalized href attributes
			div.innerHTML = "<a href='#'></a>";

			if (div.firstChild
					&& typeof div.firstChild.getAttribute !== "undefined"
					&& div.firstChild.getAttribute("href") !== "#") {

				Expr.attrHandle.href = function(elem) {
					return elem.getAttribute("href", 2);
				};
			}

			// release memory in IE
			div = null;
		})();

		if (document.querySelectorAll) {
			(function() {
				var oldSizzle = Sizzle, div = document.createElement("div"), id = "__sizzle__";

				div.innerHTML = "<p class='TEST'></p>";

				// Safari can't handle uppercase or unicode characters when
				// in quirks mode.
				if (div.querySelectorAll
						&& div.querySelectorAll(".TEST").length === 0) {
					return;
				}

				Sizzle = function(query, context, extra, seed) {
					context = context || document;

					// Make sure that attribute selectors are quoted
					query = query.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");

					// Only use querySelectorAll on non-XML documents
					// (ID selectors don't work in non-HTML documents)
					if (!seed && !Sizzle.isXML(context)) {
						if (context.nodeType === 9) {
							try {
								return makeArray(context
												.querySelectorAll(query), extra);
							} catch (qsaError) {
							}

							// qSA works strangely on Element-rooted queries
							// We can work around this by specifying an extra ID
							// on the root
							// and working up from there (Thanks to Andrew
							// Dupont for the technique)
							// IE 8 doesn't work on object elements
						} else if (context.nodeType === 1
								&& context.nodeName.toLowerCase() !== "object") {
							var old = context.getAttribute("id"), nid = old
									|| id;

							if (!old) {
								context.setAttribute("id", nid);
							}

							try {
								return makeArray(context.querySelectorAll("#"
												+ nid + " " + query), extra);

							} catch (pseudoError) {
							} finally {
								if (!old) {
									context.removeAttribute("id");
								}
							}
						}
					}

					return oldSizzle(query, context, extra, seed);
				};

				for (var prop in oldSizzle) {
					Sizzle[prop] = oldSizzle[prop];
				}

				// release memory in IE
				div = null;
			})();
		}

		(function() {
			var html = document.documentElement, matches = html.matchesSelector
					|| html.mozMatchesSelector || html.webkitMatchesSelector
					|| html.msMatchesSelector, pseudoWorks = false;

			try {
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call(document.documentElement, "[test!='']:sizzle");

			} catch (pseudoError) {
				pseudoWorks = true;
			}

			if (matches) {
				Sizzle.matchesSelector = function(node, expr) {
					// Make sure that attribute selectors are quoted
					expr = expr.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");

					if (!Sizzle.isXML(node)) {
						try {
							if (pseudoWorks || !Expr.match.PSEUDO.test(expr)
									&& !/!=/.test(expr)) {
								return matches.call(node, expr);
							}
						} catch (e) {
						}
					}

					return Sizzle(expr, null, null, [node]).length > 0;
				};
			}
		})();

		(function() {
			var div = document.createElement("div");

			div.innerHTML = "<div class='test e'></div><div class='test'></div>";

			// Opera can't find a second classname (in 9.6)
			// Also, make sure that getElementsByClassName actually exists
			if (!div.getElementsByClassName
					|| div.getElementsByClassName("e").length === 0) {
				return;
			}

			// Safari caches class attributes, doesn't catch changes (in 3.2)
			div.lastChild.className = "e";

			if (div.getElementsByClassName("e").length === 1) {
				return;
			}

			Expr.order.splice(1, 0, "CLASS");
			Expr.find.CLASS = function(match, context, isXML) {
				if (typeof context.getElementsByClassName !== "undefined"
						&& !isXML) {
					return context.getElementsByClassName(match[1]);
				}
			};

			// release memory in IE
			div = null;
		})();

		function dirNodeCheck(dir, cur, doneName, checkSet, nodeCheck, isXML) {
			for (var i = 0, l = checkSet.length; i < l; i++) {
				var elem = checkSet[i];

				if (elem) {
					var match = false;

					elem = elem[dir];

					while (elem) {
						if (elem.sizcache === doneName) {
							match = checkSet[elem.sizset];
							break;
						}

						if (elem.nodeType === 1 && !isXML) {
							elem.sizcache = doneName;
							elem.sizset = i;
						}

						if (elem.nodeName.toLowerCase() === cur) {
							match = elem;
							break;
						}

						elem = elem[dir];
					}

					checkSet[i] = match;
				}
			}
		}

		function dirCheck(dir, cur, doneName, checkSet, nodeCheck, isXML) {
			for (var i = 0, l = checkSet.length; i < l; i++) {
				var elem = checkSet[i];

				if (elem) {
					var match = false;

					elem = elem[dir];

					while (elem) {
						if (elem.sizcache === doneName) {
							match = checkSet[elem.sizset];
							break;
						}

						if (elem.nodeType === 1) {
							if (!isXML) {
								elem.sizcache = doneName;
								elem.sizset = i;
							}

							if (typeof cur !== "string") {
								if (elem === cur) {
									match = true;
									break;
								}

							} else if (Sizzle.filter(cur, [elem]).length > 0) {
								match = elem;
								break;
							}
						}

						elem = elem[dir];
					}

					checkSet[i] = match;
				}
			}
		}

		if (document.documentElement.contains) {
			Sizzle.contains = function(a, b) {
				return a !== b && (a.contains ? a.contains(b) : true);
			};

		} else if (document.documentElement.compareDocumentPosition) {
			Sizzle.contains = function(a, b) {
				return !!(a.compareDocumentPosition(b) & 16);
			};

		} else {
			Sizzle.contains = function() {
				return false;
			};
		}

		Sizzle.isXML = function(elem) {
			// documentElement is verified for cases where it doesn't yet exist
			// (such as loading iframes in IE - #4833)
			var documentElement = (elem ? elem.ownerDocument || elem : 0).documentElement;

			return documentElement
					? documentElement.nodeName !== "HTML"
					: false;
		};

		var posProcess = function(selector, context) {
			var match, tmpSet = [], later = "", root = context.nodeType
					? [context]
					: context;

			// Position selectors must be done after the filter
			// And so must :not(positional) so we move all PSEUDOs to the end
			while ((match = Expr.match.PSEUDO.exec(selector))) {
				later += match[0];
				selector = selector.replace(Expr.match.PSEUDO, "");
			}

			selector = Expr.relative[selector] ? selector + "*" : selector;

			for (var i = 0, l = root.length; i < l; i++) {
				Sizzle(selector, root[i], tmpSet);
			}

			return Sizzle.filter(later, tmpSet);
		};

		// EXPOSE
		window.Sizzle = window.$ = Sizzle;

	})();

	/* 继承实现只是拷贝属性 */
	/* 如果target是function则继承的属性只能通过函数访问而不能通过函数的对象访问。
	 * 
	 * */
	MZA.fn.extend = MZA.extend = function() {
		var target = arguments[0];
		if (target) {
			for (var i = 1; i < arguments.length; i++) {
				if (typeof arguments[i] == "object") {
					for (var pop in arguments[i]) {
						target[pop] = arguments[i][pop];
					}
				}
			}
		}
		return target;
	}
	/**
	 * 由于Sizzle通过id查询返回的也是数组， 所以经过这次修正如果是通过id查询则只返回数组第一个元素。
	 */

	MZA.element = {
		test : function() {
			alert("hello");
			return this;
		},
		/**
		 * 是否存在某样式表
		 */
		hasClassName : function(className) {
			return new RegExp('(^|\\s+)' + className + '(\\s+|$)')
					.test($(this).className);
		},
		/**
		 * 添加样式
		 */
		addClass : function(className) {
			if (this.hasClassName(className))
				return this;
			this.className += ' ' + className;
			return this;
		},
		/**
		 * 删除样式
		 */
		delClass : function(className) {
			if (isUndefined(className)) {
				this.className = "";
			} else if (isString(className)) {
				if (this.hasClassName(className)) {
					this.className = this.className.replace(className, "");
				}
			}
			return this;
		},
		/**
		 * 来回开关一个元素的某个样式
		 */
		toggleClass : function(className, className2) {
			if (isUndefined(className2)) {
				if (this.hasClassName(className)) {
					this.delClass(className);
				} else {
					this.addClass(className);
				}
			} else {
				if (this.hasClassName(className)) {
					this.delClass(className);
					this.addClass(className2);
				} else {
					this.addClass(className);
					this.delClass(className2);
				}
			}
			return this;
		},
		/**
		 * 给当前元素添加兄弟元素
		 */
		append : function(node) {
			this.parentNode.appendChild(node);
			return this;
		},
		/**
		 * 元素作为目标元素的兄弟元素
		 */
		appendTo : function(node) {
			node.parentNode.appendChild(this);
			return this;
		},
		/**
		 * 清空该元素。
		 */
		clear : function() {
			this.innerHTML = "";
			return this;
		},
		/**
		 * 删除该元素
		 */
		remove : function() {
			this.parentNode.removeChild(this);
			return this;
		},
		/**
		 * 添加属性或查看属性
		 */
		attr : function() {
			if (arguments.length > 1) {
				var key = arguments[0];
				var value = arguments[1];
				// 最后一个0表示区分大小写
				this.setAttribute(key, value, 0);
			} else {
				var key = arguments[0];
				this.getAttribute(key);
			}
			return this;
		},
		/**
		 * 添加事件
		 */
		bind : function(type, handler) {
			if (this.addEventListener) {
				this.addEventListener(type, handler, false);
			} else if (this.attachEvent) {
				this.attachEvent("on" + type, handler);
			} else {
				this["on" + type] = handler;
			}
		},
		/**
		 * 去除事件
		 */
		unbind : function(type, handler) {
			if (element.removeEventListener) {
				element.removeEventListener(type, handler, false);
			} else if (element.detachEvent) {
				element.detachEvent("on" + type, handler);
			} else {
				element["on" + type] = handler;
			}
		},
		/**
		 * 隐藏
		 */
		hide : function() {
			this.style.display = "none";
		},
		/**
		 * 显示元素
		 */
		show : function() {
			this.style.display = "block";
		}
	};
	MZA.ELEMENT = MZA.Element = This = MZA.element;

	/**
	 * 返回dom元素前包装
	 */
	$ = function(value) {
		var element;
		if (value == null) {
			element = null;
		} else if ((isString(value) || isNumber(value)) && value.startWith("#")) {
			element = MZA.extend(Sizzle(value)[0], MZA.element);
		} else if (isString(value)) {
			var arr = [];
			var sarr = Sizzle(value);
			for (var i = 0, len = sarr.length; i < len; i++) {
				var el = MZA.extend(sarr[i], MZA.element);
				arr.push(el);
			}
			element = arr;
			if(arr.length==1){
				element= arr[0];
			}
		} else {
			element = MZA.extend(value, MZA.element);
		}
		return element;
	}

	MZA.grid = function(object) {
		// columnModel
		var cm = null;
		// 数据
		var store = null;
		// 添加到那个元素中
		var renderTo = null;
		// 初始化。
		cm = object.cm;
		store = object.store;
		renderTo = object.renderTo;
		var target = $("#" + renderTo);
		(function() {
			var D = MZA.dom;
			var grid = D.create("div");
			grid.attr("class", "mzaGrid");
			var table = D.create("table");
			var thead = D.create("thead");
			// 生成表头
			var clen = cm.length;
			var thtr = D.create("tr");
			for (var i = 0; i < clen; i++) {
				var th = document.createElement("th");
				th.innerHTML = cm[i].header;
				thtr.appendChild(th);
			}
			table.appendChild(thtr);
			var tbody = D.create("tbody");
			var slen = store.length;
			for (var i = 0; i < slen; i++) {
				var tr = D.create("tr");
				for (var j = 0; j < clen; j++) {
					var td = D.create("td");
					var data = store[i];
					var colId = cm[j].dataIndex;
					var colformat = cm[j].format;
					if (typeof(colformat) == "function") {
						td.innerHTML = colformat(data[colId]);
					} else if (colId != null) {
						td.innerHTML = data[colId];
					}
					tr.appendChild(td);
				}
				tbody.appendChild(tr);
			}
			table.appendChild(tbody);
			grid.appendChild(table);
			target.appendChild(grid);
		})();

		return {
			show : function() {

			},
			hide : function() {
				target.hide();
			}
		}
	}

	// MZA.grid = {};
	// /**
	// * 定义分页常量
	// */
	// MZA.grid.START = 0;
	// MZA.grid.LIMIT = 10;
	// MZA.grid.LIMIT = 10;
	// MZA.grid.PAGECOUNT = 0;
	// MZA.grid.PAGENO = 1;
	// MZA.grid.setStart = function(start) {
	// MZA.START = start;
	// }
	// MZA.grid.setLimit = function(limit) {
	// MZA.LIMIT = limit;
	// }
	// MZA.grid.setTotal = function(total) {
	// MZA.TOTAL = total;
	// }
	// /**
	// * 1:前台MVC分离， Model是指json串即数据 view是指HTML和css分离显示 Control是指javascript 控制动作
	// * 动态生成的table样式是不能通过外部引用来改变的
	// *
	// * @type
	// */
	// MZA.grid.showGrid = function(store, colModel) {
	// var tablediv = document.createElement("div");
	// tablediv.setAttribute("id", "tablediv");
	// var table = document.createElement("table");
	// table.setAttribute("class", "table");
	// var tbody = document.createElement("tbody");
	// // 生成表头
	// var modellength = colModel.length;
	// var tr = document.createElement("tr");
	// tr.setAttribute("class", "tr");
	// for (var i = 0; i < modellength; i++) {
	// var td = document.createElement("th");
	// td.setAttribute("class", "th");
	// td.innerHTML = colModel[i].header;
	// tr.appendChild(td);
	// }
	// tbody.appendChild(tr);
	// // 生成表里的数据
	// var storelength = store.length;
	// for (var i = 0; i < storelength; i++) {
	// var tr = document.createElement("tr");
	// tr.setAttribute("class", "tr");
	// for (var j = 0; j < modellength; j++) {
	// var td = document.createElement("td");
	// td.setAttribute("class", "td");
	// var data = store[i];
	// var colId = colModel[j].dataIndex;
	// var colformat = colModel[j].format;
	// if (typeof(colformat) == "function") {
	// td.innerHTML = colformat(data[colId]);
	// } else if (colId != null) {
	// td.innerHTML = data[colId];
	// }
	// tr.appendChild(td);
	// }
	// tbody.appendChild(tr);
	// }
	// table.appendChild(tbody);
	// tablediv.appendChild(table);
	//
	// var pagediv = document.createElement("div");
	// pagediv.setAttribute("id", "pagebar");
	// pagediv.setAttribute("class", "pagebar");
	// // var pagestr =
	// // "<div>"+
	// // "<span>第<span id='curPageIndex'>"+MZA.PAGENO+"</span>页</span>&nbsp;"+
	// // "<span>共<span id='rowCount'>"+MZA.TOTAL+"</span>条</span>&nbsp;"+
	// // "<span>共<span id='pageCount'>"+MZA.PAGECOUNT+"</span>页</span>&nbsp;"+
	// // "<a href='#' id='first' onClick='MZA.first();'>首页</a>&nbsp;"+
	// // "<a href='#' id='pre' onClick='MZA.pre();'>上一页</a>&nbsp;"+
	// // "<a href='#' id='next' onClick='MZA.next();'>下一页</a>&nbsp;"+
	// // "<a href='#' id='last' onClick='MZA.last();'>尾页</a>&nbsp;"+
	// // "</div>";
	// var pagestr = "<div id='pages'>"
	// + "<a href='#' id='pre' onClick='MZA.pre();'
	// class='page'>&lt;</a>&nbsp;";
	//
	// for (var i = 1; i <= MZA.PAGECOUNT; i++) {
	// pagestr += "<a href='#' id='page" + i + "' onClick='MZA.goPage("
	// + (i) + ")'>" + i + "</a>&nbsp;"
	// }
	// pagestr += "<a href='#' id='next'
	// onClick='MZA.next();'>&gt;</a>&nbsp;</div>";
	// pagediv.innerHTML = pagestr;
	// tablediv.appendChild(pagediv);
	// document.getElementById("grid").appendChild(tablediv);
	// this.addBlur();
	// this.checkPage();
	// }
	// // 增加鼠标悬停变色
	// MZA.grid.addBlur = function() {
	// var rows = document.getElementsByTagName('tr');
	// for (var i = 0; i < rows.length; i++) {
	// if (rows[i].className == "tr") {
	// rows[i].onmouseover = function() { // 鼠标在行上面的时候
	// this.className = 'altrow';
	// }
	// rows[i].onmouseout = function() { // 鼠标离开时
	// this.className = this.className.replace('altrow', '');
	// }
	// }
	// }
	// }
	// /**
	// * 设置分页方法
	// */
	// MZA.grid.queryData = function() {
	// };
	// MZA.grid.setPageMethod = function(method) {
	// MZA.grid.queryData = method;
	// }
	// /**
	// * 下一页
	// */
	// MZA.grid.next = function() {
	// MZA.removeElement(document.getElementById("tablediv"));
	// MZA.PAGENO += 1;
	// this.queryData((MZA.PAGENO - 1) * MZA.LIMIT, MZA.LIMIT);
	// }
	// /**
	// * 上一页
	// */
	// MZA.grid.pre = function() {
	// MZA.removeElement(document.getElementById("tablediv"));
	// MZA.PAGENO -= 1;
	// this.queryData((MZA.PAGENO - 1) * MZA.LIMIT, MZA.LIMIT);
	// }
	// /**
	// * 首页
	// */
	// MZA.grid.first = function() {
	// MZA.removeElement(document.getElementById("tablediv"));
	// this.queryData(0, MZA.LIMIT);
	// MZA.PAGENO = 1;
	// document.getElementById("curPageIndex").innerHTML = MZA.PAGENO;
	// }
	// /**
	// * 尾页
	// */
	// MZA.grid.last = function() {
	// MZA.removeElement(document.getElementById("tablediv"));
	// this.queryData((MZA.PAGECOUNT - 1) * MZA.LIMIT, MZA.LIMIT);
	// MZA.PAGENO = MZA.PAGECOUNT;
	// document.getElementById("curPageIndex").innerHTML = MZA.PAGENO;
	// }
	// /**
	// * 更改页码样式
	// */
	// MZA.grid.checkPage = function() {
	// for (var j = 1; j <= MZA.PAGENO; j++) {
	// if (MZA.PAGENO == j) {
	// var sp = document.createElement("span");
	// sp.setAttribute("id", "page" + j);
	// sp.innerHTML = j;
	// var oldnode = document.getElementById("page" + j);
	// oldnode.parentNode.replaceChild(sp, oldnode);
	// }
	// if (MZA.PAGENO == 1) {
	// var sp = document.createElement("span");
	// sp.setAttribute("id", "pre");
	// sp.innerHTML = "&lt;";
	// var oldnode = document.getElementById("pre");
	// oldnode.parentNode.replaceChild(sp, oldnode);
	// }
	// if (MZA.PAGENO == MZA.PAGECOUNT) {
	// var sp = document.createElement("span");
	// sp.setAttribute("id", "next");
	// sp.innerHTML = "&gt;";
	// var oldnode = document.getElementById("next");
	// oldnode.parentNode.replaceChild(sp, oldnode);
	// }
	// }
	// }
	// /**
	// * 定位到那一页
	// */
	// MZA.grid.goPage = function(pageindex) {
	// MZA.removeElement(document.getElementById("tablediv"));
	// MZA.PAGENO = pageindex;
	// this.queryData((pageindex - 1) * MZA.LIMIT, MZA.LIMIT);
	// this.checkPage();
	// }
	MZA.GRID = MZA.Grid = MZA.grid;

	MZA.window = function(data) {
		var D = MZA.DOM;
		// 初始化
		var popwidth = 300;
		var popheight = 200;
		var title = "弹出页面";
		if (data.title) {
			title = data.title;
		}
		var url = "";
		if (data.url) {
			url = data.url;
		}
		var arrWinSize = MZA.bom.getWindowSize();
		var pageWidth = arrWinSize[0];
		var pageHeight = arrWinSize[1];
		var winWidth = arrWinSize[2];
		var winHeight = arrWinSize[3];
		var mzawin = D.create("div");
		mzawin.addClass("mzaWindow");
		mzawin.hide();
		(function() {
			// 创建背景模态层
			var bodyBack = D.create("div");
			bodyBack.addClass("bodyBack");
			bodyBack.style.width = pageWidth;
			bodyBack.style.height = pageHeight;

			// 创建弹出层
			var popObj = D.create("div");
			popObj.addClass("bodypop");
			popwidth = data.width;
			popheight = data.height;
			popObj.style.width = popwidth + "px";
			popObj.style.height = popheight + "px";
			var top = "0px";
			if (winHeight - popheight > 0) {
				top = (winHeight - popheight) / 2 + "px";
			} else {
				top = (popheight - winHeight) / 2 + "px";
			}
			var left = "0px";
			if (winWidth - popwidth > 0) {
				left = (winWidth - popwidth) / 2 + "px";
			} else {
				left = (popwidth - winWidth) / 2 + "px";
			}
			popObj.style.top = top;
			popObj.style.left = left;
			// 创建弹出内容页面
			var contentNode = D.create("div");
			contentNode.addClass("contain");
			contentNode.style.width = popwidth + "px";

			var titleNode = D.create("div");
			titleNode.addClass("dlgtitle");
			titleNode.style.width = popwidth + "px";
			// titleNode.setAttribute("onMousedown",
			// "MZA.startDrag(event,this)");
			// titleNode.setAttribute("onMouseup", "MZA.stopDrag(this)");
			// titleNode.setAttribute("onMousemove", "MZA.Drag(event,this)");

			var tlNode = D.create("div");
			tlNode.addClass("dlgtl");
			var trNode = D.create("div");
			trNode.addClass("dlgtr");
			var tnameNode = D.create("div");
			tnameNode.addClass("dlgtname");
			tnameNode.style.width = popwidth - 10 + "px";
			var tnameSpanNode = D.create("span");
			tnameSpanNode.addClass("tnamespan")
			tnameSpanNode.innerHTML = title;
			tnameNode.appendChild(tnameSpanNode);
			var tbutNode = D.create("div");
			tbutNode.addClass("dlgtbut");
			tbutNode.bind("click", hideWindow);
			titleNode.appendChild(tlNode);
			titleNode.appendChild(tnameNode);
			titleNode.appendChild(trNode);
			titleNode.appendChild(tbutNode);
			var innerNode = D.create("div");
			innerNode.addClass("dlginner");
			var iframeNode = D.create("iframe");
			iframeNode.attr("src", url);
			iframeNode.attr("frameborder", "no");
			iframeNode.attr("border", 19);
			iframeNode.attr("marginwidth", 0);
			iframeNode.attr("marginheight", 0);
			iframeNode.attr("scrolling", "no");
			iframeNode.attr("allowtransparency", "yes");

			innerNode.appendChild(iframeNode);
			innerNode.style.height = popheight - 31 + "px";
			contentNode.appendChild(titleNode);
			contentNode.appendChild(innerNode);
			popObj.appendChild(contentNode);

			mzawin.appendChild(bodyBack);
			mzawin.appendChild(popObj);
			var bodyNode = document.getElementsByTagName("body");
			bodyNode[0].appendChild(mzawin);

		})();

		function showWindow() {
			mzawin.show();
		}
		function hideWindow() {
			mzawin.hide();
		}
		return {
			show : showWindow,
			hide : hideWindow
		}
	};
	MZA.dialog = {};
	// 显示模态窗口
	MZA.dialog.openDialog = function(data) {
		// 1:设置一个div宽度，高度和窗口一样
		// 2：点击时显示出来，但是要在原来的窗口上面，不能挤下去，所以要设置position:absoulte
		// 3: 但是要显示那一层在上面所以要设置z-index越大越在上
		// 4:但是还要看到下面一层的东西所以要设置半透明
		var popwidth = 300;
		var popheight = 200;
		var title = "弹出页面";
		if (data.title) {
			title = data.title;
		}
		var url = "";
		if (data.url) {
			url = data.url;
		}

		var bodyBack = document.createElement("div");
		bodyBack.setAttribute("id", "bodybg");
		bodyBack.style.position = "absolute";
		bodyBack.style.width = pageWidth;
		bodyBack.style.height = pageHeight;
		bodyBack.style.top = 0;
		bodyBack.style.left = 0;
		bodyBack.style.zIndex = 98;// 不用写成z-index
		bodyBack.style.filter = "alpha(opacity=50)";// IE的透明
		bodyBack.style.opacity = 0.5;// css标准透明
		bodyBack.style.background = "#ddf";// 颜色不错,也不用写成background-color
		var bodyNode = document.getElementsByTagName("body");
		bodyNode[0].appendChild(bodyBack);
		var popObj = document.createElement("div");
		popObj.setAttribute("id", "bodypop");
		popObj.style.position = "absolute";
		popObj.style.zIndex = 99;
		popwidth = data.width;
		popheight = data.height;
		popObj.style.width = popwidth + "px";
		popObj.style.height = popheight + "px";
		var top = "0px";
		if (winHeight - popheight > 0) {
			top = (winHeight - popheight) / 2 + "px";
		} else {
			top = (popheight - winHeight) / 2 + "px";
		}
		var left = "0px";
		if (winWidth - popwidth > 0) {
			left = (winWidth - popwidth) / 2 + "px";
		} else {
			left = (popwidth - winWidth) / 2 + "px";
		}
		popObj.style.top = top;
		popObj.style.left = left;
		// 创建弹出页面
		var contentNode = document.createElement("div");
		contentNode.setAttribute("id", "contain");
		contentNode.style.width = popwidth + "px";
		contentNode.setAttribute("class", "contain");
		var titleNode = document.createElement("div");
		titleNode.setAttribute("class", "dlgtitle");
		titleNode.setAttribute("id", "dlgtitle");
		titleNode.setAttribute("onMousedown", "MZA.startDrag(event,this)");
		titleNode.setAttribute("onMouseup", "MZA.stopDrag(this)");
		titleNode.setAttribute("onMousemove", "MZA.Drag(event,this)");
		titleNode.style.width = popwidth + "px";
		var tlNode = document.createElement("div");
		tlNode.setAttribute("id", "dlgtl");
		var trNode = document.createElement("div");
		trNode.setAttribute("id", "dlgtr");
		var tnameNode = document.createElement("div");
		tnameNode.setAttribute("id", "dlgtname");
		tnameNode.style.width = popwidth - 10 + "px";
		var tnameSpanNode = document.createElement("span");
		tnameSpanNode.setAttribute("id", "tnamespan")
		tnameSpanNode.innerHTML = title;
		tnameNode.appendChild(tnameSpanNode);
		var tbutNode = document.createElement("div");
		tbutNode.setAttribute("id", "dlgtbut");
		tbutNode.setAttribute("onMouseover",
				"this.style.backgroundPosition = '0 -19px';");
		tbutNode.setAttribute("onMouseout",
				"this.style.backgroundPosition = '0 0px';");
		tbutNode.setAttribute("onClick", "MZA.closeDialog();");
		titleNode.appendChild(tlNode);
		titleNode.appendChild(tnameNode);
		titleNode.appendChild(trNode);
		titleNode.appendChild(tbutNode);
		var innerNode = document.createElement("div");
		innerNode.setAttribute("class", "dlginner");
		innerNode.setAttribute("id", "dlginner");
		var iframeNode = document.createElement("iframe");
		iframeNode.setAttribute("src", url);
		iframeNode.setAttribute("frameborder", "0");
		innerNode.appendChild(iframeNode);
		innerNode.style.height = popheight - 31 + "px";
		contentNode.appendChild(titleNode);
		contentNode.appendChild(innerNode);
		popObj.appendChild(contentNode);
		bodyNode[0].appendChild(popObj);
	}
	/**
	 * 关闭模态窗口
	 */
	MZA.dialog.closeDialog = function() {
		this.removeElement(document.getElementById("bodypop"));
		this.removeElement(document.getElementById("bodybg"));
	}
})(window);