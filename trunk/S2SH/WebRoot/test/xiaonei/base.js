function isUndefined(_1) {
	return typeof _1 == "undefined";
}
function isString(_2) {
	return typeof _2 == "string";
}
function isElement(_3) {
	return _3 && _3.nodeType == 1;
}
function isFunction(_4) {
	return typeof _4 == "function";
}
function isObject(_5) {
	return typeof _5 == "object";
}
function isArray(_6) {
	return Object.prototype.toString.call(_6) === "[object Array]";
}
function isNumber(_7) {
	return typeof _7 == "number";
}
/*继承是把第一个对象之后其他对象的属性都复制给第一个对象，并把第一个对象返回。*/
function $extend() {
	var _8 = arguments[0];
	for (var i = 1; i < arguments.length; i++) {
		if (typeof arguments[i] == "object") {
			for (var _a in arguments[i]) {
				_8[_a] = arguments[i][_a];
			}
		}
	}
	return _8;
}
var extendObject = $extend;
//创建一个元素并返回
function $element(_b) {
	return $(document.createElement(_b));
}
//XN继承自Window.XN
var XN = extendObject({}, {
			env : {
				shortSiteName : "\u4eba\u4eba",
				siteName : "\u4eba\u4eba\u7f51",
				domain : window.location.hostname.split(".").reverse().slice(0,
						2).reverse().join(".")
			}
		}, window.XN);
try {
	document.domain = String(XN.env.domain);
} catch (e) {
}
/*采用Sizzle作为CSS选择引擎*/
(function() {
	var _c = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, _d = 0, _e = Object.prototype.toString, _f = false, _10 = true;
	[0, 0].sort(function() {
				_10 = false;
				return 0;
			});
	var _11 = function(_12, _13, _14, _15) {
		_14 = _14 || [];
		_13 = _13 || document;
		var _16 = _13;
		if (_13.nodeType !== 1 && _13.nodeType !== 9) {
			return [];
		}
		if (!_12 || typeof _12 !== "string") {
			return _14;
		}
		var _17 = [], m, set, _1a, _1b, _1c = true, _1d = _11.isXML(_13), _1e = _12, ret, cur, pop, i;
		do {
			_c.exec("");
			m = _c.exec(_1e);
			if (m) {
				_1e = m[3];
				_17.push(m[1]);
				if (m[2]) {
					_1b = m[3];
					break;
				}
			}
		} while (m);
		if (_17.length > 1 && _23.exec(_12)) {
			if (_17.length === 2 && _24.relative[_17[0]]) {
				set = _25(_17[0] + _17[1], _13);
			} else {
				set = _24.relative[_17[0]] ? [_13] : _11(_17.shift(), _13);
				while (_17.length) {
					_12 = _17.shift();
					if (_24.relative[_12]) {
						_12 += _17.shift();
					}
					set = _25(_12, set);
				}
			}
		} else {
			if (!_15 && _17.length > 1 && _13.nodeType === 9 && !_1d
					&& _24.match.ID.test(_17[0])
					&& !_24.match.ID.test(_17[_17.length - 1])) {
				ret = _11.find(_17.shift(), _13, _1d);
				_13 = ret.expr ? _11.filter(ret.expr, ret.set)[0] : ret.set[0];
			}
			if (_13) {
				ret = _15 ? {
					expr : _17.pop(),
					set : _26(_15)
				} : _11.find(_17.pop(), _17.length === 1
								&& (_17[0] === "~" || _17[0] === "+")
								&& _13.parentNode ? _13.parentNode : _13, _1d);
				set = ret.expr ? _11.filter(ret.expr, ret.set) : ret.set;
				if (_17.length > 0) {
					_1a = _26(set);
				} else {
					_1c = false;
				}
				while (_17.length) {
					cur = _17.pop();
					pop = cur;
					if (!_24.relative[cur]) {
						cur = "";
					} else {
						pop = _17.pop();
					}
					if (pop == null) {
						pop = _13;
					}
					_24.relative[cur](_1a, pop, _1d);
				}
			} else {
				_1a = _17 = [];
			}
		}
		if (!_1a) {
			_1a = set;
		}
		if (!_1a) {
			_11.error(cur || _12);
		}
		if (_e.call(_1a) === "[object Array]") {
			if (!_1c) {
				_14.push.apply(_14, _1a);
			} else {
				if (_13 && _13.nodeType === 1) {
					for (i = 0; _1a[i] != null; i++) {
						if (_1a[i]
								&& (_1a[i] === true || _1a[i].nodeType === 1
										&& _11.contains(_13, _1a[i]))) {
							_14.push(set[i]);
						}
					}
				} else {
					for (i = 0; _1a[i] != null; i++) {
						if (_1a[i] && _1a[i].nodeType === 1) {
							_14.push(set[i]);
						}
					}
				}
			}
		} else {
			_26(_1a, _14);
		}
		if (_1b) {
			_11(_1b, _16, _14, _15);
			_11.uniqueSort(_14);
		}
		return _14;
	};
	_11.uniqueSort = function(_27) {
		if (_28) {
			_f = _10;
			_27.sort(_28);
			if (_f) {
				for (var i = 1; i < _27.length; i++) {
					if (_27[i] === _27[i - 1]) {
						_27.splice(i--, 1);
					}
				}
			}
		}
		return _27;
	};
	_11.matches = function(_2a, set) {
		return _11(_2a, null, null, set);
	};
	_11.find = function(_2c, _2d, _2e) {
		var set;
		if (!_2c) {
			return [];
		}
		for (var i = 0, l = _24.order.length; i < l; i++) {
			var _32 = _24.order[i], _33;
			if ((_33 = _24.leftMatch[_32].exec(_2c))) {
				var _34 = _33[1];
				_33.splice(1, 1);
				if (_34.substr(_34.length - 1) !== "\\") {
					_33[1] = (_33[1] || "").replace(/\\/g, "");
					set = _24.find[_32](_33, _2d, _2e);
					if (set != null) {
						_2c = _2c.replace(_24.match[_32], "");
						break;
					}
				}
			}
		}
		if (!set) {
			set = _2d.getElementsByTagName("*");
		}
		return {
			set : set,
			expr : _2c
		};
	};
	_11.filter = function(_35, set, _37, not) {
		var old = _35, _3a = [], _3b = set, _3c, _3d, _3e = set && set[0]
				&& _11.isXML(set[0]);
		while (_35 && set.length) {
			for (var _3f in _24.filter) {
				if ((_3c = _24.leftMatch[_3f].exec(_35)) != null && _3c[2]) {
					var _40 = _24.filter[_3f], _41, _42, _43 = _3c[1];
					_3d = false;
					_3c.splice(1, 1);
					if (_43.substr(_43.length - 1) === "\\") {
						continue;
					}
					if (_3b === _3a) {
						_3a = [];
					}
					if (_24.preFilter[_3f]) {
						_3c = _24.preFilter[_3f](_3c, _3b, _37, _3a, not, _3e);
						if (!_3c) {
							_3d = _41 = true;
						} else {
							if (_3c === true) {
								continue;
							}
						}
					}
					if (_3c) {
						for (var i = 0; (_42 = _3b[i]) != null; i++) {
							if (_42) {
								_41 = _40(_42, _3c, i, _3b);
								var _45 = not ^ !!_41;
								if (_37 && _41 != null) {
									if (_45) {
										_3d = true;
									} else {
										_3b[i] = false;
									}
								} else {
									if (_45) {
										_3a.push(_42);
										_3d = true;
									}
								}
							}
						}
					}
					if (_41 !== undefined) {
						if (!_37) {
							_3b = _3a;
						}
						_35 = _35.replace(_24.match[_3f], "");
						if (!_3d) {
							return [];
						}
						break;
					}
				}
			}
			if (_35 === old) {
				if (_3d == null) {
					_11.error(_35);
				} else {
					break;
				}
			}
			old = _35;
		}
		return _3b;
	};
	_11.error = function(msg) {
		throw "Syntax error, unrecognized expression: " + msg;
	};
	var _24 = _11.selectors = {
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
			href : function(_47) {
				return _47.getAttribute("href");
			}
		},
		relative : {
			"+" : function(_48, _49) {
				var _4a = typeof _49 === "string", _4b = _4a && !/\W/.test(_49), _4c = _4a
						&& !_4b;
				if (_4b) {
					_49 = _49.toLowerCase();
				}
				for (var i = 0, l = _48.length, _4f; i < l; i++) {
					if ((_4f = _48[i])) {
						while ((_4f = _4f.previousSibling)
								&& _4f.nodeType !== 1) {
						}
						_48[i] = _4c || _4f
								&& _4f.nodeName.toLowerCase() === _49
								? _4f || false
								: _4f === _49;
					}
				}
				if (_4c) {
					_11.filter(_49, _48, true);
				}
			},
			">" : function(_50, _51) {
				var _52 = typeof _51 === "string", _53, i = 0, l = _50.length;
				if (_52 && !/\W/.test(_51)) {
					_51 = _51.toLowerCase();
					for (; i < l; i++) {
						_53 = _50[i];
						if (_53) {
							var _56 = _53.parentNode;
							_50[i] = _56.nodeName.toLowerCase() === _51
									? _56
									: false;
						}
					}
				} else {
					for (; i < l; i++) {
						_53 = _50[i];
						if (_53) {
							_50[i] = _52
									? _53.parentNode
									: _53.parentNode === _51;
						}
					}
					if (_52) {
						_11.filter(_51, _50, true);
					}
				}
			},
			"" : function(_57, _58, _59) {
				var _5a = _d++, _5b = dirCheck, _5c;
				if (typeof _58 === "string" && !/\W/.test(_58)) {
					_58 = _58.toLowerCase();
					_5c = _58;
					_5b = dirNodeCheck;
				}
				_5b("parentNode", _58, _5a, _57, _5c, _59);
			},
			"~" : function(_5d, _5e, _5f) {
				var _60 = _d++, _61 = dirCheck, _62;
				if (typeof _5e === "string" && !/\W/.test(_5e)) {
					_5e = _5e.toLowerCase();
					_62 = _5e;
					_61 = dirNodeCheck;
				}
				_61("previousSibling", _5e, _60, _5d, _62, _5f);
			}
		},
		find : {
			ID : function(_63, _64, _65) {
				if (typeof _64.getElementById !== "undefined" && !_65) {
					var m = _64.getElementById(_63[1]);
					return m ? [m] : [];
				}
			},
			NAME : function(_67, _68) {
				if (typeof _68.getElementsByName !== "undefined") {
					var ret = [], _6a = _68.getElementsByName(_67[1]);
					for (var i = 0, l = _6a.length; i < l; i++) {
						if (_6a[i].getAttribute("name") === _67[1]) {
							ret.push(_6a[i]);
						}
					}
					return ret.length === 0 ? null : ret;
				}
			},
			TAG : function(_6d, _6e) {
				return _6e.getElementsByTagName(_6d[1]);
			}
		},
		preFilter : {
			CLASS : function(_6f, _70, _71, _72, not, _74) {
				_6f = " " + _6f[1].replace(/\\/g, "") + " ";
				if (_74) {
					return _6f;
				}
				for (var i = 0, _76; (_76 = _70[i]) != null; i++) {
					if (_76) {
						if (not
								^ (_76.className && (" " + _76.className + " ")
										.replace(/[\t\n]/g, " ").indexOf(_6f) >= 0)) {
							if (!_71) {
								_72.push(_76);
							}
						} else {
							if (_71) {
								_70[i] = false;
							}
						}
					}
				}
				return false;
			},
			ID : function(_77) {
				return _77[1].replace(/\\/g, "");
			},
			TAG : function(_78, _79) {
				return _78[1].toLowerCase();
			},
			CHILD : function(_7a) {
				if (_7a[1] === "nth") {
					var _7b = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(_7a[2] === "even"
							&& "2n" || _7a[2] === "odd" && "2n+1"
							|| !/\D/.test(_7a[2]) && "0n+" + _7a[2] || _7a[2]);
					_7a[2] = (_7b[1] + (_7b[2] || 1)) - 0;
					_7a[3] = _7b[3] - 0;
				}
				_7a[0] = _d++;
				return _7a;
			},
			ATTR : function(_7c, _7d, _7e, _7f, not, _81) {
				var _82 = _7c[1].replace(/\\/g, "");
				if (!_81 && _24.attrMap[_82]) {
					_7c[1] = _24.attrMap[_82];
				}
				if (_7c[2] === "~=") {
					_7c[4] = " " + _7c[4] + " ";
				}
				return _7c;
			},
			PSEUDO : function(_83, _84, _85, _86, not) {
				if (_83[1] === "not") {
					if ((_c.exec(_83[3]) || "").length > 1
							|| /^\w/.test(_83[3])) {
						_83[3] = _11(_83[3], null, null, _84);
					} else {
						var ret = _11.filter(_83[3], _84, _85, true ^ not);
						if (!_85) {
							_86.push.apply(_86, ret);
						}
						return false;
					}
				} else {
					if (_24.match.POS.test(_83[0])
							|| _24.match.CHILD.test(_83[0])) {
						return true;
					}
				}
				return _83;
			},
			POS : function(_89) {
				_89.unshift(true);
				return _89;
			}
		},
		filters : {
			enabled : function(_8a) {
				return _8a.disabled === false && _8a.type !== "hidden";
			},
			disabled : function(_8b) {
				return _8b.disabled === true;
			},
			checked : function(_8c) {
				return _8c.checked === true;
			},
			selected : function(_8d) {
				_8d.parentNode.selectedIndex;
				return _8d.selected === true;
			},
			parent : function(_8e) {
				return !!_8e.firstChild;
			},
			empty : function(_8f) {
				return !_8f.firstChild;
			},
			has : function(_90, i, _92) {
				return !!_11(_92[3], _90).length;
			},
			header : function(_93) {
				return (/h\d/i).test(_93.nodeName);
			},
			text : function(_94) {
				return "text" === _94.type;
			},
			radio : function(_95) {
				return "radio" === _95.type;
			},
			checkbox : function(_96) {
				return "checkbox" === _96.type;
			},
			file : function(_97) {
				return "file" === _97.type;
			},
			password : function(_98) {
				return "password" === _98.type;
			},
			submit : function(_99) {
				return "submit" === _99.type;
			},
			image : function(_9a) {
				return "image" === _9a.type;
			},
			reset : function(_9b) {
				return "reset" === _9b.type;
			},
			button : function(_9c) {
				return "button" === _9c.type
						|| _9c.nodeName.toLowerCase() === "button";
			},
			input : function(_9d) {
				return (/input|select|textarea|button/i).test(_9d.nodeName);
			}
		},
		setFilters : {
			first : function(_9e, i) {
				return i === 0;
			},
			last : function(_a0, i, _a2, _a3) {
				return i === _a3.length - 1;
			},
			even : function(_a4, i) {
				return i % 2 === 0;
			},
			odd : function(_a6, i) {
				return i % 2 === 1;
			},
			lt : function(_a8, i, _aa) {
				return i < _aa[3] - 0;
			},
			gt : function(_ab, i, _ad) {
				return i > _ad[3] - 0;
			},
			nth : function(_ae, i, _b0) {
				return _b0[3] - 0 === i;
			},
			eq : function(_b1, i, _b3) {
				return _b3[3] - 0 === i;
			}
		},
		filter : {
			PSEUDO : function(_b4, _b5, i, _b7) {
				var _b8 = _b5[1], _b9 = _24.filters[_b8];
				if (_b9) {
					return _b9(_b4, i, _b5, _b7);
				} else {
					if (_b8 === "contains") {
						return (_b4.textContent || _b4.innerText
								|| _11.getText([_b4]) || "").indexOf(_b5[3]) >= 0;
					} else {
						if (_b8 === "not") {
							var not = _b5[3];
							for (var j = 0, l = not.length; j < l; j++) {
								if (not[j] === _b4) {
									return false;
								}
							}
							return true;
						} else {
							_11.error("Syntax error, unrecognized expression: "
									+ _b8);
						}
					}
				}
			},
			CHILD : function(_bd, _be) {
				var _bf = _be[1], _c0 = _bd;
				switch (_bf) {
					case "only" :
					case "first" :
						while ((_c0 = _c0.previousSibling)) {
							if (_c0.nodeType === 1) {
								return false;
							}
						}
						if (_bf === "first") {
							return true;
						}
						_c0 = _bd;
					case "last" :
						while ((_c0 = _c0.nextSibling)) {
							if (_c0.nodeType === 1) {
								return false;
							}
						}
						return true;
					case "nth" :
						var _c1 = _be[2], _c2 = _be[3];
						if (_c1 === 1 && _c2 === 0) {
							return true;
						}
						var _c3 = _be[0], _c4 = _bd.parentNode;
						if (_c4 && (_c4.sizcache !== _c3 || !_bd.nodeIndex)) {
							var _c5 = 0;
							for (_c0 = _c4.firstChild; _c0; _c0 = _c0.nextSibling) {
								if (_c0.nodeType === 1) {
									_c0.nodeIndex = ++_c5;
								}
							}
							_c4.sizcache = _c3;
						}
						var _c6 = _bd.nodeIndex - _c2;
						if (_c1 === 0) {
							return _c6 === 0;
						} else {
							return (_c6 % _c1 === 0 && _c6 / _c1 >= 0);
						}
				}
			},
			ID : function(_c7, _c8) {
				return _c7.nodeType === 1 && _c7.getAttribute("id") === _c8;
			},
			TAG : function(_c9, _ca) {
				return (_ca === "*" && _c9.nodeType === 1)
						|| _c9.nodeName.toLowerCase() === _ca;
			},
			CLASS : function(_cb, _cc) {
				return (" " + (_cb.className || _cb.getAttribute("class")) + " ")
						.indexOf(_cc) > -1;
			},
			ATTR : function(_cd, _ce) {
				var _cf = _ce[1], _d0 = _24.attrHandle[_cf]
						? _24.attrHandle[_cf](_cd)
						: _cd[_cf] != null ? _cd[_cf] : _cd.getAttribute(_cf), _d1 = _d0
						+ "", _d2 = _ce[2], _d3 = _ce[4];
				return _d0 == null
						? _d2 === "!="
						: _d2 === "="
								? _d1 === _d3
								: _d2 === "*="
										? _d1.indexOf(_d3) >= 0
										: _d2 === "~="
												? (" " + _d1 + " ")
														.indexOf(_d3) >= 0
												: !_d3
														? _d1 && _d0 !== false
														: _d2 === "!="
																? _d1 !== _d3
																: _d2 === "^="
																		? _d1
																				.indexOf(_d3) === 0
																		: _d2 === "$="
																				? _d1
																						.substr(_d1.length
																								- _d3.length) === _d3
																				: _d2 === "|="
																						? _d1 === _d3
																								|| _d1
																										.substr(
																												0,
																												_d3.length
																														+ 1) === _d3
																										+ "-"
																						: false;
			},
			POS : function(_d4, _d5, i, _d7) {
				var _d8 = _d5[2], _d9 = _24.setFilters[_d8];
				if (_d9) {
					return _d9(_d4, i, _d5, _d7);
				}
			}
		}
	};
	var _23 = _24.match.POS, _da = function(all, num) {
		return "\\" + (num - 0 + 1);
	};
	for (var _dd in _24.match) {
		_24.match[_dd] = new RegExp(_24.match[_dd].source
				+ (/(?![^\[]*\])(?![^\(]*\))/.source));
		_24.leftMatch[_dd] = new RegExp(/(^(?:.|\r|\n)*?)/.source
				+ _24.match[_dd].source.replace(/\\(\d+)/g, _da));
	}
	var _26 = function(_de, _df) {
		_de = Array.prototype.slice.call(_de, 0);
		if (_df) {
			_df.push.apply(_df, _de);
			return _df;
		}
		return _de;
	};
	try {
		Array.prototype.slice.call(document.documentElement.childNodes, 0)[0].nodeType;
	} catch (e) {
		_26 = function(_e0, _e1) {
			var ret = _e1 || [], i = 0;
			if (_e.call(_e0) === "[object Array]") {
				Array.prototype.push.apply(ret, _e0);
			} else {
				if (typeof _e0.length === "number") {
					for (var l = _e0.length; i < l; i++) {
						ret.push(_e0[i]);
					}
				} else {
					for (; _e0[i]; i++) {
						ret.push(_e0[i]);
					}
				}
			}
			return ret;
		};
	}
	var _28;
	if (document.documentElement.compareDocumentPosition) {
		_28 = function(a, b) {
			if (!a.compareDocumentPosition || !b.compareDocumentPosition) {
				if (a == b) {
					_f = true;
				}
				return a.compareDocumentPosition ? -1 : 1;
			}
			var ret = a.compareDocumentPosition(b) & 4 ? -1 : a === b ? 0 : 1;
			if (ret === 0) {
				_f = true;
			}
			return ret;
		};
	} else {
		if ("sourceIndex" in document.documentElement) {
			_28 = function(a, b) {
				if (!a.sourceIndex || !b.sourceIndex) {
					if (a == b) {
						_f = true;
					}
					return a.sourceIndex ? -1 : 1;
				}
				var ret = a.sourceIndex - b.sourceIndex;
				if (ret === 0) {
					_f = true;
				}
				return ret;
			};
		} else {
			if (document.createRange) {
				_28 = function(a, b) {
					if (!a.ownerDocument || !b.ownerDocument) {
						if (a == b) {
							_f = true;
						}
						return a.ownerDocument ? -1 : 1;
					}
					var _ed = a.ownerDocument.createRange(), _ee = b.ownerDocument
							.createRange();
					_ed.setStart(a, 0);
					_ed.setEnd(a, 0);
					_ee.setStart(b, 0);
					_ee.setEnd(b, 0);
					var ret = _ed
							.compareBoundaryPoints(Range.START_TO_END, _ee);
					if (ret === 0) {
						_f = true;
					}
					return ret;
				};
			}
		}
	}
	_11.getText = function(_f0) {
		var ret = "", _f2;
		for (var i = 0; _f0[i]; i++) {
			_f2 = _f0[i];
			if (_f2.nodeType === 3 || _f2.nodeType === 4) {
				ret += _f2.nodeValue;
			} else {
				if (_f2.nodeType !== 8) {
					ret += _11.getText(_f2.childNodes);
				}
			}
		}
		return ret;
	};
	(function() {
		var _f4 = document.createElement("div"), id = "script"
				+ (new Date()).getTime();
		_f4.innerHTML = "<a name='" + id + "'/>";
		var _f6 = document.documentElement;
		_f6.insertBefore(_f4, _f6.firstChild);
		if (document.getElementById(id)) {
			_24.find.ID = function(_f7, _f8, _f9) {
				if (typeof _f8.getElementById !== "undefined" && !_f9) {
					var m = _f8.getElementById(_f7[1]);
					return m ? m.id === _f7[1]
							|| typeof m.getAttributeNode !== "undefined"
							&& m.getAttributeNode("id").nodeValue === _f7[1]
							? [m]
							: undefined : [];
				}
			};
			_24.filter.ID = function(_fb, _fc) {
				var _fd = typeof _fb.getAttributeNode !== "undefined"
						&& _fb.getAttributeNode("id");
				return _fb.nodeType === 1 && _fd && _fd.nodeValue === _fc;
			};
		}
		_f6.removeChild(_f4);
		_f6 = _f4 = null;
	})();
	(function() {
		var div = document.createElement("div");
		div.appendChild(document.createComment(""));
		if (div.getElementsByTagName("*").length > 0) {
			_24.find.TAG = function(_ff, _100) {
				var _101 = _100.getElementsByTagName(_ff[1]);
				if (_ff[1] === "*") {
					var tmp = [];
					for (var i = 0; _101[i]; i++) {
						if (_101[i].nodeType === 1) {
							tmp.push(_101[i]);
						}
					}
					_101 = tmp;
				}
				return _101;
			};
		}
		div.innerHTML = "<a href='#'></a>";
		if (div.firstChild
				&& typeof div.firstChild.getAttribute !== "undefined"
				&& div.firstChild.getAttribute("href") !== "#") {
			_24.attrHandle.href = function(elem) {
				return elem.getAttribute("href", 2);
			};
		}
		div = null;
	})();
	if (document.querySelectorAll) {
		(function() {
			var _105 = _11, div = document.createElement("div");
			div.innerHTML = "<p class='TEST'></p>";
			if (div.querySelectorAll
					&& div.querySelectorAll(".TEST").length === 0) {
				return;
			}
			_11 = function(_107, _108, _109, seed) {
				_108 = _108 || document;
				if (!seed && _108.nodeType === 9 && !_11.isXML(_108)) {
					try {
						return _26(_108.querySelectorAll(_107), _109);
					} catch (e) {
					}
				}
				return _105(_107, _108, _109, seed);
			};
			for (var prop in _105) {
				_11[prop] = _105[prop];
			}
			div = null;
		})();
	}
	(function() {
		var div = document.createElement("div");
		div.innerHTML = "<div class='test e'></div><div class='test'></div>";
		if (!div.getElementsByClassName
				|| div.getElementsByClassName("e").length === 0) {
			return;
		}
		div.lastChild.className = "e";
		if (div.getElementsByClassName("e").length === 1) {
			return;
		}
		_24.order.splice(1, 0, "CLASS");
		_24.find.CLASS = function(_10d, _10e, _10f) {
			if (typeof _10e.getElementsByClassName !== "undefined" && !_10f) {
				return _10e.getElementsByClassName(_10d[1]);
			}
		};
		div = null;
	})();
	function dirNodeCheck(dir, cur, _112, _113, _114, _115) {
		for (var i = 0, l = _113.length; i < l; i++) {
			var elem = _113[i];
			if (elem) {
				elem = elem[dir];
				var _119 = false;
				while (elem) {
					if (elem.sizcache === _112) {
						_119 = _113[elem.sizset];
						break;
					}
					if (elem.nodeType === 1 && !_115) {
						elem.sizcache = _112;
						elem.sizset = i;
					}
					if (elem.nodeName.toLowerCase() === cur) {
						_119 = elem;
						break;
					}
					elem = elem[dir];
				}
				_113[i] = _119;
			}
		}
	}
	function dirCheck(dir, cur, _11c, _11d, _11e, _11f) {
		for (var i = 0, l = _11d.length; i < l; i++) {
			var elem = _11d[i];
			if (elem) {
				elem = elem[dir];
				var _123 = false;
				while (elem) {
					if (elem.sizcache === _11c) {
						_123 = _11d[elem.sizset];
						break;
					}
					if (elem.nodeType === 1) {
						if (!_11f) {
							elem.sizcache = _11c;
							elem.sizset = i;
						}
						if (typeof cur !== "string") {
							if (elem === cur) {
								_123 = true;
								break;
							}
						} else {
							if (_11.filter(cur, [elem]).length > 0) {
								_123 = elem;
								break;
							}
						}
					}
					elem = elem[dir];
				}
				_11d[i] = _123;
			}
		}
	}
	_11.contains = document.compareDocumentPosition ? function(a, b) {
		return !!(a.compareDocumentPosition(b) & 16);
	} : function(a, b) {
		return a !== b && (a.contains ? a.contains(b) : true);
	};
	_11.isXML = function(elem) {
		var _129 = (elem ? elem.ownerDocument || elem : 0).documentElement;
		return _129 ? _129.nodeName !== "HTML" : false;
	};
	var _25 = function(_12a, _12b) {
		var _12c = [], _12d = "", _12e, root = _12b.nodeType ? [_12b] : _12b;
		while ((_12e = _24.match.PSEUDO.exec(_12a))) {
			_12d += _12e[0];
			_12a = _12a.replace(_24.match.PSEUDO, "");
		}
		_12a = _24.relative[_12a] ? _12a + "*" : _12a;
		for (var i = 0, l = root.length; i < l; i++) {
			_11(_12a, root[i], _12c);
		}
		return _11.filter(_12d, _12c);
	};
	window.Sizzle = _11;
})();
//通过id查询
function $(id) {
	var _133;
	if (id == null) {
		_133 = null;
	} else {
		if (isString(id) || isNumber(id)) {
			_133 = Sizzle("#" + id)[0];
		} else {
			_133 = id;
		}
	}
	if (_133) {
		XN.element.extend(_133);
	}
	return _133 || null;
}
/*函数绑定*/
if (!Function.prototype.bind) {
	Function.prototype.bind = function(_134) {
		var _135 = this;
		return function() {
			_135.apply(_134, arguments);
		};
	};
}
var xn_getEl = ge = getEl = $X = $;
var $xElement = $element;
if (typeof XN == "undefined") {
	XN = {};
}
$extend(XN, {
			namespace : function() {
				var a = arguments, o = null, i, j, d;
				for (i = 0; i < a.length; i++) {
					d = a[i].split(".");
					o = XN;
					for (j = (d[0] == "XN") ? 1 : 0; j < d.length; j++) {
						o[d[j]] = o[d[j]] || {};
						o = o[d[j]];
					}
				}
				return o;
			}
		});
XN.namespace("ui");
XN.namespace("util");
XN.namespace("app");
XN.namespace("page");
XN.namespace("config");
XN.APP = XN.App = XN.app;
XN.PAGE = XN.Page = XN.page;
XN.CONFIG = XN.Config = XN.config;
XN.DEBUG_MODE = false;
//debug模式
XN.debug = {
	log : function() {
	},
	on : function() {
		XN.DEBUG_MODE = true;
		if (window.console && console.log) {
			XN.debug.log = function(s) {
				console.log(s);
			};
		}
	},
	off : function() {
		XN.debug.log = function() {
		};
	}
};
XN.log = function(s) {
	XN.debug.log(s);
};
XN.DEBUG = XN.Debug = XN.debug;
XN.debug.On = XN.debug.on;
XN.debug.Off = XN.debug.off;
//定义明明空间而不是通过。的方式
XN.namespace("env");
$extend(XN.env, {
			domain_reg : XN.env.domain.replace(/\./g, "\\."),
			staticRoot : "http://s.xnimg.cn/",
			CDNstaticRoot : "http://a.xnimg.cn/",
			swfRoot : "http://static.xiaonei.com/",
			wwwRoot : "http://" + XN.env.domain + "/"
		});
XN.ENV = XN.Env = XN.env;
//定义自己的Array类型。
XN.array = {
	toQueryString : function(a, key) {
		var rt = [], t;
		for (var k in a) {
			t = a[k];
			if (isFunction(t)) {
				continue;
			}
			if (isObject(t)) {
				rt.push(arguments.callee(t, k));
			} else {
				if (/^\d+$/.test(k)) {
					rt.push((key || k) + "=" + encodeURIComponent(t));
				} else {
					rt.push(k + "=" + encodeURIComponent(t));
				}
			}
		}
		return rt.join("&");
	},
	each : function(a, func) {
		if (!a) {
			return;
		}
		if (!isUndefined(a.length) || !isUndefined(a[0])) {
			for (var i = 0, j = a.length; i < j; i++) {
				if (func.call(a, i, a[i]) === false) {
					break;
				}
			}
		} else {
			for (var key in a) {
				if (!isFunction(a[key])) {
					if (func.call(a, key, a[key]) === false) {
						break;
					}
				}
			}
		}
	},
	include : function(a, _148) {
		var r = false;
		XN.array.each(a, function(i, v) {
					if (v === _148) {
						r = true;
						return false;
					}
				});
		return r;
	},
	build : function(o) {
		var rt = [];
		for (var i = 0, j = o.length; i < j; i++) {
			rt.push(o[i]);
		}
		return rt;
	}
};
XN.ARRAY = XN.Array = XN.array;
//扩展并自定义String类型。
XN.string = {
	nl2br : function(str) {
		return (str || "").replace(/([^>])\n/g, "$1<br />");
	},
	trim : function(str) {
		return (str || "").replace(/^\s+|\s+$/g, "");
	},
	ltrim : function(str) {
		return (str || "").replace(/^\s+/, "");
	},
	rtrim : function(str) {
		return (str || "").replace(/\s+$/, "");
	},
	strip : function(str) {
		return XN.string.trim(str);
	},
	stripTags : function(str) {
		return str.replace(/<\/?[^>]+>/igm, "");
	},
	escapeHTML : function(str) {
		return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g,
				"&gt;");
	},
	unescapeHTML : function(str) {
		return str.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(
				/&nbsp;/g, " ").replace(/&quot;/g, "\"").replace(/&amp;/g, "&");
	},
	include : function(str, key) {
		return str.indexOf(key) > -1;
	},
	startsWith : function(str, key) {
		return str.indexOf(key) === 0;
	},
	endsWith : function(str, key) {
		var d = str.length - key.length;
		return d >= 0 && str.lastIndexOf(key) === d;
	},
	isBlank : function(str) {
		return /^\s*$/.test(str);
	},
	isEmail : function(str) {
		return /^[A-Z_a-z0-9-\.]+@([A-Z_a-z0-9-]+\.)+[a-z0-9A-Z]{2,4}$/
				.test(str);
	},
	isMobile : function(str) {
		return /^((\(\d{2,3}\))|(\d{3}\-))?((1[345]\d{9})|(18\d{9}))$/
				.test(str);
	},
	isUrl : function(str) {
		return /^(http:|ftp:)\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"])*$/
				.test(str);
	},
	isIp : function(str) {
		return /^(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5])$/
				.test(str);
	},
	isNumber : function(str) {
		return /^\d+$/.test(str);
	},
	isZip : function(str) {
		return /^[1-9]\d{5}$/.test(str);
	},
	isEN : function(str) {
		return /^[A-Za-z]+$/.test(str);
	},
	isJSON : function(str) {
		if (!isString(str) || str === "") {
			return false;
		}
		str = str.replace(/\\./g, "@").replace(/"[^"\\\n\r]*"/g, "");
		return (/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(str);
	},
	getQuery : function(key, url) {
		url = url || window.location.href + "";
		if (url.indexOf("#") !== -1) {
			url = url.substring(0, url.indexOf("#"));
		}
		var rts = [], rt;
		var _16c = new RegExp("(^|\\?|&)" + key + "=([^&]*)(?=&|#|$)", "g");
		while ((rt = _16c.exec(url)) != null) {
			rts.push(decodeURIComponent(rt[2]));
		}
		if (rts.length == 0) {
			return null;
		}
		if (rts.length == 1) {
			return rts[0];
		}
		return rts;
	},
	setQuery : function(key, _16e, url) {
		url = url || window.location.href + "";
		var hash = "";
		if (!/^http/.test(url)) {
			return url;
		}
		if (url.indexOf("#") !== -1) {
			hash = url.substring(url.indexOf("#"));
		}
		url = url.replace(hash, "");
		url = url.replace(
				new RegExp("(^|\\?|&)" + key + "=[^&]*(?=&|#|$)", "g"), "");
		_16e = isArray(_16e) ? _16e : [_16e];
		for (var i = _16e.length - 1; i >= 0; i--) {
			_16e[i] = encodeURIComponent(_16e[i]);
		}
		var p = key + "=" + _16e.join("&" + key + "=");
		return url + (/\?/.test(url) ? "&" : "?") + p + hash;
	}
};
XN.String = XN.STRING = XN.string;
XN.string.isNum = XN.string.isNumber;
window.isJSON = XN.string.isJSON;
//自定义XN.FUNC函数
(function() {
	runOnceFunc = {};
	XN.func = {
		empty : function() {
		},
		runOnce : function(func) {
			if (runOnceFunc[func]) {
				return null;
			}
			runOnceFunc[func] = true;
			return func();
		}
	};
})();
XN.FUNC = XN.Func = XN.func;

//检测浏览器类型。
(function() {
	XN.browser = {
		IE : !!(window.attachEvent && !window.opera),
		IE6 : navigator.userAgent.indexOf("MSIE 6.0") > -1,
		IE7 : navigator.userAgent.indexOf("MSIE 7.0") > -1,
		IE8 : navigator.userAgent.indexOf("MSIE 8.0") > -1,
		Opera : !!window.opera,
		WebKit : navigator.userAgent.indexOf("AppleWebKit/") > -1,
		Gecko : navigator.userAgent.indexOf("Gecko") > -1
				&& navigator.userAgent.indexOf("KHTML") == -1,
		copy : function(o) {
			function onfail() {
				if (isElement(o)) {
					o.select();
				}
			}
			var str;
			if (isElement(o)) {
				str = o.value;
			} else {
				str = o;
			}
			if (window.clipboardData && clipboardData.setData) {
				if (clipboardData.setData("text", str)) {
					return true;
				}
			} else {
				XN.DO.alert({
					message : "\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u811a\u672c\u590d\u5236,\u8bf7\u5c1d\u8bd5\u624b\u52a8\u590d\u5236",
					callBack : function() {
						onfail();
					}
				});
				return false;
			}
			XN.DO.alert({
				message : "\u60a8\u7684\u6d4f\u89c8\u5668\u8bbe\u7f6e\u4e0d\u5141\u8bb8\u811a\u672c\u8bbf\u95ee\u526a\u5207\u677f",
				callBack : function() {
					onfail();
				}
			});
			return false;
		}
	};
})();
XN.BROWSER = XN.Browser = XN.browser;

/*cookie操作*/
XN.cookie = {
	get : function(name) {
		var _177 = name + "=";
		var ca = document.cookie.split(";");
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == " ") {
				c = c.substring(1, c.length);
			}
			if (c.indexOf(_177) == 0) {
				return decodeURIComponent(c.substring(_177.length, c.length));
			}
		}
		return null;
	},
	set : function(name, _17c, days, path, _17f, _180) {
		var _181;
		if (isNumber(days)) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			_181 = date.toGMTString();
		} else {
			if (isString(days)) {
				_181 = days;
			} else {
				_181 = false;
			}
		}
		document.cookie = name + "=" + encodeURIComponent(_17c)
				+ (_181 ? ";expires=" + _181 : "")
				+ (path ? ";path=" + path : "")
				+ (_17f ? ";domain=" + _17f : "") + (_180 ? ";secure" : "");
	},
	del : function(name, path, _185, _186) {
		XN.cookie.set(name, "", -1, path, _185, _186);
	}
};
XN.COOKIE = XN.Cookie = XN.cookie;

/**事件处理*/
(function() {
	var _187 = XN.browser;
	XN.event = {
		isCapsLockOn : function(e) {
			var c = e.keyCode || e.which;
			var s = e.shiftKey;
			if (((c >= 65 && c <= 90) && !s) || ((c >= 97 && c <= 122) && s)) {
				return true;
			}
			return false;
		},
		element : function(e) {
			var n = e.target || e.srcElement;
			return This.resolveTextNode(n);
		},
		relatedTarget : function(e) {
			var t = e.relatedTarget;
			if (!t) {
				if (e.type == "mouseout" || e.type == "mouseleave") {
					t = e.toElement;
				} else {
					if (e.type == "mouseover") {
						t = e.fromElement;
					}
				}
			}
			return This.resolveTextNode(t);
		},
		resolveTextNode : function(n) {
			try {
				if (n && 3 == n.nodeType) {
					return n.parentNode;
				}
			} catch (e) {
			}
			return n;
		},
		pointerX : function(_191) {
			return _191.pageX
					|| (_191.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft));
		},
		pointerY : function(_192) {
			return _192.pageY
					|| (_192.clientY + (document.documentElement.scrollTop || document.body.scrollTop));
		},
		isStrictMode : document.compatMode != "BackCompat",
		pageHeight : function() {
			return this.isStrictMode ? Math.max(
					document.documentElement.scrollHeight,
					document.documentElement.clientHeight) : Math.max(
					document.body.scrollHeight, document.body.clientHeight);
		},
		pageWidth : function() {
			return this.isStrictMode ? Math.max(
					document.documentElement.scrollWidth,
					document.documentElement.clientWidth) : Math.max(
					document.body.scrollWidth, document.body.clientWidth);
		},
		winWidth : function() {
			return this.isStrictMode
					? document.documentElement.clientWidth
					: document.body.clientWidth;
		},
		winHeight : function() {
			return this.isStrictMode
					? document.documentElement.clientHeight
					: document.body.clientHeight;
		},
		scrollTop : function() {
			if (XN.browser.WebKit) {
				return window.pageYOffset;
			}
			return this.isStrictMode
					? document.documentElement.scrollTop
					: document.body.scrollTop;
		},
		scrollLeft : function() {
			if (XN.browser.WebKit) {
				return window.pageXOffset;
			}
			return this.isStrictMode
					? document.documentElement.scrollLeft
					: document.body.scrollLeft;
		},
		stop : null,
		addEvent : function(el, name, func, cap) {
			var els = [];
			el = $(el);
			if (isArray(el)) {
				els = el;
			} else {
				els.push(el);
			}
			if (els.length == 0) {
				return el;
			}
			XN.array.each(els, function(i, v) {
						XN.event._addEvent(v, name, func, cap);
					});
			return el;
		},
		delEvent : function(el, name, func, cap) {
			var els = [];
			el = $(el);
			if (isArray(el)) {
				els = el;
			} else {
				els.push(el);
			}
			if (els.length == 0) {
				return el;
			}
			XN.array.each(els, function(i, v) {
						XN.event._delEvent(v, name, func, cap);
					});
			return el;
		},
		_addEvent : null,
		_delEvent : null,
		enableCustomEvent : function(obj) {
			$extend(obj, {
						addEvent : function(type, func) {
							if (!this._customEventListeners) {
								this._customEventListeners = {};
							}
							var _1a4 = this._customEventListeners;
							if (isUndefined(_1a4[type])) {
								_1a4[type] = [];
							}
							_1a4[type].push(func);
							return this;
						},
						delEvent : function(type, func) {
							var _1a7 = this._customEventListeners[type];
							if (_1a7) {
								for (var i = _1a7.length - 1; i >= 0; i--) {
									if (_1a7[i] == func) {
										_1a7[i] = null;
										break;
									}
								}
							}
							return this;
						},
						fireEvent : function(type) {
							if (!this._customEventListeners
									|| !this._customEventListeners[type]) {
								return;
							}
							var _1aa = this._customEventListeners[type], ars = XN.array
									.build(arguments);
							ars.shift();
							for (var i = 0, j = _1aa.length; i < j; i++) {
								if (_1aa[i]) {
									try {
										_1aa[i].apply(this, ars);
									} catch (ox) {
										if (XN.DEBUG_MODE) {
											throw ox;
										}
									}
								}
							}
						}
					});
			return obj;
		}
	};
	var This = XN.event;
	if (_187.IE) {
		This.stop = function(_1ae) {
			_1ae.returnValue = false;
			_1ae.cancelBubble = true;
		};
	} else {
		This.stop = function(_1af) {
			_1af.preventDefault();
			_1af.stopPropagation();
		};
	}
	var _1b0 = function(_1b1, _1b2) {
		var p = _1b1.relatedTarget;
		while (p && p != _1b2) {
			try {
				p = p.parentNode;
			} catch (error) {
				p = _1b2;
			}
		}
		return p !== _1b2;
	};
	if (window.attachEvent && !_187.Opera) {
		function wrapEvent(_1b4) {
			_1b4.stopPropagation = function() {
				this.cancelBubble = true;
			};
			_1b4.preventDefault = function() {
				this.returnValue = false;
			};
			return _1b4;
		}
		This._addEvent = function(_1b5, name, func) {
			_1b5 = $(_1b5);
			if (!_1b5._eventListeners[name]) {
				_1b5._eventListeners[name] = [];
			}
			var _1b8 = function() {
				var e = wrapEvent(window.event);
				func.call(_1b5, e);
			};
			_1b8.innerFunc = func;
			_1b5._eventListeners[name].push(_1b8);
			if (name == "keypress") {
				name = "keydown";
			}
			if (name == "input") {
				name = "propertychange";
			}
			_1b5.attachEvent("on" + name, _1b8);
			return _1b5;
		};
		This._delEvent = function(_1ba, name, func) {
			_1ba = $(_1ba);
			if (name == "keypress") {
				name = "keydown";
			}
			if (name == "input") {
				name = "propertychange";
			}
			for (var i = 0, _1be; i < _1ba._eventListeners[name].length; i++) {
				_1be = _1ba._eventListeners[name][i];
				if (_1be.innerFunc === func) {
					break;
				}
			}
			_1ba.detachEvent("on" + name, _1be);
			return _1ba;
		};
	} else {
		if (window.addEventListener) {
			This._addEvent = function(_1bf, name, func, _1c2) {
				_1bf = $(_1bf);
				if (name == "mouseleave") {
					_1bf.onmouseleave = function(e) {
						e = e || window.event;
						if (_1b0(e, _1bf) && func) {
							func.call(_1bf, e);
						}
					};
					_1bf.addEventListener("mouseout", _1bf.onmouseleave, _1c2);
					return _1bf;
				}
				if (name == "keypress" && _187.WebKit) {
					name = "keydown";
				}
				_1bf.addEventListener(name, func, _1c2);
				return _1bf;
			};
			This._delEvent = function(_1c4, name, func, _1c7) {
				_1c4 = $(_1c4);
				if (name == "mouseleave") {
					_1c4.removeEventListener("mouseout", _1c4.onmouseleave,
							_1c7);
					return _1c4;
				}
				if (name == "keypress" && _187.WebKit) {
					name = "keydown";
				}
				_1c4.removeEventListener(name, func, _1c7);
				return _1c4;
			};
		}
	}
})();
XN.EVENT = XN.Event = XN.event;

/*dom处理*/
(function() {
	var _1c8 = XN.event;
	var _1c9 = XN.array;
	var _1ca = XN.browser;
	var _1cb = false;
	var _1cc = [];
	var _1cd = [];
	function runHooks() {
		if (!_1cc) {
			return;
		}
		XN.array.each(_1cc, function(i, v) {
					try {
						v();
					} catch (e) {
						if (XN.DEBUG_MODE) {
							throw e;
						}
					}
				});
		XN.array.each(_1cd, function(i, v) {
					setTimeout(v, 0);
				});
	}
	var _1d2 = null;
	function createShadow(_1d3, _1d4) {
		_1d3 = _1d3 || 0.3;
		_1d4 = _1d4 || 2000;
		var el = $element("div");
		_1d2 = el;
		XN.element
				.setStyle(el, ["position:absolute;", "top:0;", "left:0;",
								"background:#000;", "z-index:" + _1d4 + ";",
								"opacity:" + _1d3 + ";",
								"filter:alpha(opacity=" + (_1d3 * 100) + ");"]
								.join(""));
		el.innerHTML = [
				"<iframe width=\"100%\" height=\"100%\" frameBorder=\"0\" style=\"position:absolute;top:0;left:0;z-index:1;\"></iframe>",
				"<div style=\"position:absolute;top:0;left:0;width:100%;height:100%;background-color:#000000;z-index:2;height:expression(this.parentNode.offsetHeight);\"></div>"]
				.join("");
		function resize() {
			el.hide();
			el.style.height = XN.event.pageHeight() + "px";
			el.style.width = XN.event.pageWidth() + "px";
			el.show();
		}
		resize();
		XN.event.addEvent(window, "resize", function(e) {
					if (_1d2 && _1d2.style.display != "none") {
						try {
							resize();
						} catch (e) {
						}
					}
				});
		document.body.insertBefore(el, document.body.firstChild);
	}
	XN.dom = {
		disable : function(_1d7, _1d8) {
			if (!_1d2) {
				createShadow(_1d7, _1d8);
			}
		},
		enable : function() {
			if (_1d2) {
				_1d2.remove();
				_1d2 = null;
			}
		},
		insertAfter : function(_1d9, _1da) {
			_1d9 = $(_1d9);
			_1da = $(_1da);
			var _1db = _1da.parentNode;
			if (_1db.lastChild == _1da) {
				_1db.appendChild(_1d9);
			} else {
				_1db.insertBefore(_1d9, _1da.nextSibling);
			}
		},
		getElementsByClassName : function(_1dc, _1dd, _1de) {
			var c = ($(_1dd) || document).getElementsByTagName(_1de || "*")
					|| document.all;
			var _1e0 = [];
			var _exp = new RegExp("(^|\\s)" + _1dc + "(\\s|$)");
			_1c9.each(c, function(i, v) {
						if (_exp.test(v.className)) {
							_1e0.push(v);
						}
					});
			return _1e0;
		},
		ready : function(f, _1e5) {
			if (isUndefined(_1e5)) {
				_1e5 = false;
			}
			if (_1cb) {
				_1e5 ? setTimeout(f, 0) : f();
			} else {
				_1e5 ? _1cd.push(f) : _1cc.push(f);
			}
		},
		preloadImg : function(src) {
			src = isArray(src) ? src : [src];
			_1c9.each(src, function(i, v) {
						new Image().src = v;
					});
		}
	};
	if (_1ca.WebKit) {
		var _1e9 = setInterval(function() {
					if (/loaded|complete/.test(document.readyState)) {
						_1cb = true;
						clearInterval(_1e9);
						runHooks();
					}
				}, 10);
	} else {
		if (document.addEventListener) {
			document.addEventListener("DOMContentLoaded", function() {
						_1cb = true;
						runHooks();
					}, false);
		} else {
			var _1e9 = setInterval(function() {
						try {
							document.body.doScroll("left");
							clearInterval(_1e9);
							_1cb = true;
							runHooks();
						} catch (e) {
						}
					}, 20);
		}
	}
})();
XN.DOM = XN.Dom = XN.dom;
XN.dom.readyDo = XN.dom.ready;
XN.dom.ready(function() {
			$ = ge = getEl = xn_getEl;
		});


XN.namespace("config");
XN.config.jumpOut = true;
XN.dom.ready(function() {
			if (XN.config.parentDomain || (!XN.config.jumpOut)) {
				return;
			}
			try {
				top.location.href.indexOf("x");
			} catch (e) {
				try {
					top.location = self.location;
				} catch (e) {
				}
			}
		});

		
(function() {
	var _1ea = {};
	var _1eb = {};
	XN.getFileVersionNum = function(file) {
		return _1eb[file];
	};
	function hasLoad(file) {
		return !!getFile(file);
	}
	function getFile(file) {
		return _1ea[encodeURIComponent(file)];
	}
	function mark(file) {
		var obj = {};
		obj.file = file;
		obj.isLoad = true;
		obj.isLoaded = true;
		_1ea[encodeURIComponent(file)] = obj;
	}
	function addFile(file) {
		var obj = {};
		obj.file = file;
		obj.isLoaded = false;
		XN.EVENT.enableCustomEvent(obj);
		obj.addEvent("load", function() {
					this.isLoaded = true;
				});
		_1ea[encodeURIComponent(file)] = obj;
		var el = document.createElement("script");
		el.type = "text/javascript";
		el.src = file;
		el.async = true;
		obj.element = el;
		if (XN.Browser.IE) {
			el.onreadystatechange = function() {
				if ((this.readyState == "loaded" || this.readyState == "complete")
						&& !this.hasLoad) {
					this.hasLoad = true;
					getFile(file).fireEvent("load");
				}
			};
		} else {
			el.onload = function() {
				getFile(file).fireEvent("load");
			};
		}
		Sizzle("head")[0].insertBefore(el, null);
	}
	function loadFile(file, _1f5) {
		var isJS = false, _1f7 = false;
		if (isObject(file)) {
			isJS = (file.type == "js");
			_1f7 = (file.type == "css");
			file = file.file;
		}
		file = getFullName(file);
		if (/\.js(\?|$)/.test(file) || isJS) {
			if (!hasLoad(file)) {
				addFile(file);
			}
			if (!_1f5) {
				return;
			}
			if (getFile(file).isLoaded) {
				_1f5.call(getFile(file));
			} else {
				getFile(file).addEvent("load", _1f5);
			}
		} else {
			if (/\.css(\?|$)/.test(file) || _1f7) {
				if (hasLoad(file)) {
					if (_1f5) {
						_1f5.call(getFile(file));
					}
					return;
				}
				mark(file);
				var el = $element("link");
				el.rel = "stylesheet";
				el.type = "text/css";
				el.href = file;
				Sizzle("head")[0].insertBefore(el, null);
				if (_1f5) {
					_1f5.call(getFile(file));
				}
			}
		}
	}
	function getFullName(file) {
		XN.func.runOnce(loadVersion);
		if (!_1eb[file]) {
			return file;
		}
		return _1eb[file].file;
	}
	function getVersion(file) {
		var _1fb;
		if (_1fb = new RegExp("(" + XN.env.staticRoot + ")"
				+ "(a?\\d+)/([^?]*)").exec(file)) {
			_1eb[_1fb[1] + _1fb[3]] = {
				file : file,
				version : _1fb[2]
			};
		} else {
			if (_1fb = new RegExp("(.*)\\?ver=(d+)(..*)").exec(file)) {
				_1eb[_1fb[1]] = {
					file : file,
					version : _1fb[2]
				};
			}
		}
	}
	XN.getFileVersion = function(_1fc) {
		XN.array.each(_1fc, function(i, v) {
					getVersion(v);
				});
	};
	XN.loadFile = function(file, _200) {
		XN.DOM.readyDo(function() {
					loadFile(file, _200);
				});
	};
	XN.loadFiles = function(_201, _202) {
		var f = _201.length;
		function isAllLoad() {
			f--;
			if (f === 0 && _202) {
				_202();
			}
		}
		XN.array.each(_201, function(i, v) {
					XN.loadFile(v, isAllLoad);
				});
	};
	XN.getVersion = function(file) {
		getVersion(file);
	};
	function loadVersion() {
		XN.array.each(document.getElementsByTagName("script"), function(i, v) {
					if (v.src) {
						mark(v.src);
						getVersion(v.src);
					}
					if (v.getAttribute("vsrc")) {
						getVersion(v.getAttribute("vsrc"));
					}
				});
		XN.array.each(document.getElementsByTagName("link"), function(i, v) {
					if (v.rel && v.rel == "stylesheet") {
						mark(v.href);
						getVersion(v.href);
					}
					if (v.getAttribute("vhref")) {
						getVersion(v.getAttribute("vhref"));
					}
				});
		XN.log("load file version:");
		XN.log(_1eb);
	}
	XN.dynamicLoad = function(file) {
		XN.array.each(file.funcs, function(i, func) {
					window[func] = function() {
						var ars = arguments;
						window[func] = null;
						if (file.file) {
							file.files = [file.file];
						}
						XN.loadFiles(file.files, function() {
									window[func].apply(null, ars);
									if (file.callBack) {
										file.callBack.call(null);
									}
								});
					};
				});
	};
	XN.namespace("img");
	XN.img.getVersion = function(file) {
		XN.func.runOnce(loadVersion);
		if (!_1eb[file]) {
			return "";
		}
		return _1eb[file].version;
	};
	XN.img.getFullName = function(file) {
		return getFullName(file);
	};
})();
//以上加载图片用。
(function() {
	var _211 = XN.event.addEvent;
	var _212 = XN.event.delEvent;
	var _213 = XN.browser;
	function getDom(str) {
		var tmp = document.createElement("div");
		tmp.style.display = "none";
		document.body.appendChild(tmp);
		tmp.innerHTML = str;
		var dom = document.createElement("div");
		while (tmp.firstChild) {
			dom.appendChild(tmp.firstChild);
		}
		tmp.parentNode.removeChild(tmp);
		return dom;
	}
	var t = document.createElement("div");
	t.innerHTML = "<TEST_TAG></TEST_TAG>";
	var _218 = t.firstChild === null;
	XN.element = {
		clear : function(_219) {
			_219 = $(_219);
			_219.innerHTML = "";
			return _219;
		},
		hover : function(_21a, _21b, _21c) {
			_21a = $(_21a);
			_21c = _21c ? $(_21c) : _21a;
			_211(_21a, "mouseover", function() {
						_21c.addClass(_21b);
					}, false);
			_211(_21a, "mouseleave", function() {
						_21c.delClass(_21b);
					}, false);
			return _21a;
		},
		scrollTo : function(_21d, _21e) {
			_21d = $(_21d);
			_21e = _21e || "normal";
			switch (_21e) {
				case "slow" :
					XN.EFFECT.scrollTo(_21d);
					break;
				default :
					window.scrollTo(0, _21d.realTop());
					break;
			}
			return _21d;
		},
		visible : function(_21f) {
			_21f = $(_21f);
			return _21f.style.display != "none"
					&& _21f.style.visibility != "hidden";
		},
		toggleClass : function(_220, _221, _222) {
			if (isUndefined(_222)) {
				if (This.hasClassName(_220, _221)) {
					This.delClass(_220, _221);
				} else {
					This.addClass(_220, _221);
				}
			} else {
				if (This.hasClassName(_220, _221)) {
					This.delClass(_220, _221);
					This.addClass(_220, _222);
				} else {
					This.addClass(_220, _221);
					This.delClass(_220, _222);
				}
			}
			return $(_220);
		},
		toggleText : function(_224, _225, _226) {
			if (_224.innerHTML == _225) {
				_224.innerHTML = _226;
			} else {
				_224.innerHTML = _225;
			}
		},
		hasClassName : function(_227, _228) {
			return new RegExp("(^|\\s+)" + _228 + "(\\s+|$)")
					.test($(_227).className);
		},
		addClass : function(_229, _22a) {
			_229 = $(_229);
			if (This.hasClassName(_229, _22a)) {
				return _229;
			}
			_229.className += " " + _22a;
			return _229;
		},
		delClass : function(_22b, _22c) {
			_22b = $(_22b);
			_22b.className = _22b.className.replace(new RegExp("(^|\\s+)"
									+ _22c + "(\\s+|$)", "g"), " ");
			return _22b;
		},
		show : function(_22d, _22e) {
			_22d = $(_22d);
			if (_22d.style.display != "none") {
				return;
			}
			_22e = _22e || "normal";
			switch (_22e) {
				case "normal" :
					_22d.style.display = "";
					break;
				case "fade" :
					XN.EFFECT.fadeIn(_22d, function(e) {
								e.style.display = "";
							});
					break;
				case "slide" :
					XN.EFFECT.slideOpen(_22d);
					break;
				case "delay" :
					setTimeout(function() {
								_22d.style.display = "";
							}, 2000);
					break;
			}
			return _22d;
		},
		hide : function(_230, _231) {
			_230 = $(_230);
			if (_230.style.display == "none") {
				return;
			}
			_231 = _231 || "normal";
			switch (_231) {
				case "normal" :
					_230.style.display = "none";
					break;
				case "fade" :
					XN.EFFECT.fadeOut(_230, function(e) {
								e.style.display = "none";
							});
					break;
				case "slide" :
					XN.EFFECT.slideClose(_230);
					break;
				case "delay" :
					setTimeout(function() {
								_230.style.display = "none";
							}, 2000);
					break;
			}
			return _230;
		},
		remove : function(_233) {
			var _233 = $(_233);
			_233.parentNode.removeChild(_233);
			return _233;
		},
		setStyle : function(_234, _235) {
			var _234 = $(_234);
			_234.style.cssText += ";" + _235;
			return _234;
		},
		getStyle : function(_236, _237) {
			_236 = $(_236);
			_237 = _237 == "float" ? "cssFloat" : _237;
			var _238 = _236.style[_237];
			if (!_238) {
				var css = document.defaultView.getComputedStyle(_236, null);
				_238 = css ? css[_237] : null;
			}
			if (_237 == "opacity") {
				return _238 ? parseFloat(_238) : 1;
			}
			return _238 == "auto" ? null : _238;
		},
		addEvent : function() {
			_211.apply(null, arguments);
			return arguments[0];
		},
		delEvent : function() {
			_212.apply(null, arguments);
			return arguments[0];
		},
		_eventListeners : {},
		addChild : function(_23a, _23b) {
			_23a = $(_23a);
			if (isString(_23b)) {
				var _23c = (_23b.substring(0, 1) == "#") ? $(_23b.substring(1,
						_23b.length)) : _23b;
				if (isString(_23c)) {
					_23a.innerHTML += _23c;
				} else {
					_23a.appendChild(_23c);
				}
			} else {
				if (isElement(_23b)) {
					_23a.appendChild(_23b);
				} else {
					if (_23b.iAmUIelement) {
						_23a.appendChild($(_23b.frame));
					} else {
						if (_23b.iAmXmlhttp) {
							_23b.fillTo = _23a;
							_23a.startLoading();
						}
					}
				}
			}
			return _23a;
		},
		delChild : function(_23d, _23e) {
			_23e = $(_23e);
			_23e.remove();
			return $(_23d);
		},
		setContent : function(_23f, c) {
			_23f = $(_23f);
			_23f.innerHTML = "";
			_23f.addChild(c);
			return _23f;
		},
		setHTML : function(_241, str) {
			if (_218) {
				_241.innerHTML = "";
				var _243 = getDom(str);
				while (_243.firstChild) {
					_241.appendChild(_243.firstChild);
				}
			} else {
				_241.innerHTML = str;
			}
		},
		getPosition : function(_244, _245) {
			_245 = $(_245) || document.body;
			_244 = $(_244);
			var rl = 0;
			var rt = 0;
			var p = _244;
			try {
				while (p && p != _245) {
					rl += p.offsetLeft;
					rt += p.offsetTop;
					p = p.offsetParent;
				}
			} catch (e) {
			}
			return {
				"left" : rl,
				"top" : rt
			};
		},
		realLeft : function(_249, p) {
			return This.getPosition(_249, p || null).left;
		},
		realTop : function(_24b, p) {
			return This.getPosition(_24b, p || null).top;
		},
		appendHTML : function(_24d, str, _24f) {
			_24d = $(_24d);
			var f = document.createDocumentFragment();
			var t = $element("div");
			t.innerHTML = str;
			while (t.firstChild) {
				f.appendChild(t.firstChild);
			}
			var tmp = XN.array.build(f.childNodes);
			_24d.appendChild(f);
			if (_24f) {
				return tmp;
			}
			return _24d;
		},
		findFirstClass : function(_253, _254) {
			_253 = $(_253);
			var els = XN.dom.getElementsByClassName(_254, _253);
			return $(els[0]) || null;
		},
		startLoading : function(_256, msg) {
			_256 = $(_256);
			_256.innerHTML = "<center><img src=\"" + XN.ENV.staticRoot
					+ "img/indicator.gif\" />"
					+ (msg || "\u52a0\u8f7d\u4e2d...") + "</center>";
			return _256;
		},
		stopLoading : function(_258) {
			_258 = $(_258);
			return _258;
		},
		eval_inner_JS : function(el) {
			var js = $(el).getElementsByTagName("script");
			XN.array.each(js, function(i, s) {
						if (s.src) {
							XN.loadFile(s.src);
						} else {
							var _25d = "__inner_js_out_put = [];\n";
							_25d += s.innerHTML.replace(/document\.write/g,
									"__inner_js_out_put.push");
							eval(_25d);
							if (__inner_js_out_put.length !== 0) {
								var tmp = document.createDocumentFragment();
								$(tmp).appendHTML(__inner_js_out_put.join(""));
								s.parentNode.insertBefore(tmp, s);
							}
						}
					});
		}
	};
	XN.element.extend = function(_25f) {
		var _260 = This.extend.cache;
		for (var m in This) {
			if (!(m in _25f)) {
				_25f[m] = _260.findOrStore(This[m]);
			}
		}
		return _25f;
	};
	XN.element.extend.cache = {
		findOrStore : function(_262) {
			return this[_262] = this[_262] || function() {
				return _262.apply(null, [this]
								.concat(XN.array.build(arguments)));
			};
		}
	};
	var This = XN.element;
	if (_213.IE) {
		XN.element.getStyle = function(_263, _264) {
			_263 = $(_263);
			_264 = (_264 == "float" || _264 == "cssFloat")
					? "styleFloat"
					: _264;
			var _265 = _263.style[_264];
			if (!_265 && _263.currentStyle) {
				_265 = _263.currentStyle[_264];
			}
			if (_264 == "opacity") {
				if (_265 = (_263.getStyle("filter") || "")
						.match(/alpha\(opacity=(.*)\)/)) {
					if (_265[1]) {
						return parseFloat(_265[1]) / 100;
					}
				}
				return 1;
			}
			if (_265 == "auto") {
				if ((_264 == "width" || _264 == "height")
						&& (_263.getStyle("display") != "none")) {
					return _263["offset"
							+ (_264 == "width" ? "Width" : "Height")]
							+ "px";
				}
				return null;
			}
			return _265;
		};
	}

	if (document.addEventListener) {
		XN.element.setOpacity = function(_266, _267) {
			_266 = $(_266);
			_266.style.opacity = _267;
			return _266;
		};
	} else {
		XN.element.setOpacity = function(_268, _269) {
			_268 = $(_268);
			_268.style.zoom = 1;
			_268.style.filter = "Alpha(opacity=" + Math.ceil(_269 * 100) + ")";
			return _268;
		};
	}
})();
XN.ELEMENT = XN.Element = XN.element;
//以上dom。element模块。

XN.namespace("net");
XN.net.proxys = {};
XN.net.sendForm = function(_26a) {
	XN.log("send form");
	_26a.data = XN.FORM.serialize(_26a.form);
	return new XN.net.xmlhttp(_26a);
};
XN.net.xmlhttp = function(_26b) {
	var This = this;
	if (!XN.net.cache) {
		XN.net.cache = new XN.util.cache();
	}
	if (arguments.length > 1) {
		this.url = arguments[0] || null;
		this.data = arguments[1] || "";
		this.onSuccess = arguments[2];
		extendObject(this, arguments[3]);
		init(window);
		return this;
	}
	extendObject(this, _26b);
	var _26d;
	if (this.useCache
			&& (_26d = XN.net.cache.get(this.url
					+ encodeURIComponent(this.data)))) {
		this.transport = {};
		this.transport.responseText = _26d;
		setTimeout(function() {
					This._onComplete();
					This._onSuccess();
				}, 0);
		return this;
	}
	function init(w) {
		This.transport = This.getTransport(w);
		return This.url && This.send(This.method);
	}
	function getDomain(link) {
		var a = $element("a");
		a.href = link;
		return a.hostname;
	}
	var _271 = getDomain(this.url);
	if (/^http/.test(this.url) && location.hostname != _271) {
		if (XN.net.proxys[_271]) {
			init(XN.net.proxys[_271]);
		} else {
			var _272 = $element("iframe").hide();
			document.body.insertBefore(_272, document.body.firstChild);
			_272.src = "http://" + _271 + "/ajaxproxy.htm";
			XN.event.addEvent(_272, "load", function() {
						try {
							init(_272.contentWindow);
							XN.net.proxys[_271] = _272.contentWindow;
						} catch (e) {
						}
					});
		}
	} else {
		init(window);
	}
	return This;
};
XN.net.xmlhttp.prototype = {
	url : null,
	data : "",
	onStart : new Function(),
	onSuccess : null,
	onFailure : null,
	onError : null,
	fillTo : null,
	method : "post",
	asynchronous : true,
	transport : null,
	headers : null,
	iAmXmlhttp : true,
	useCache : false,
	abort : function() {
		this.transport.abort();
	},
	send : function(_273) {
		var _url;
		if (_273 == "get" && this.data !== "") {
			_url = this.url + (/\?/.test(this.url) ? "&" : "?") + this.data;
		} else {
			_url = this.url;
		}
		this.transport.onreadystatechange = this.onStateChange.bind(this);
		this.transport.open(_273, _url, this.asynchronous);
		this.transport.setRequestHeader("Content-Type",
				"application/x-www-form-urlencoded");
		if (this.headers !== null) {
			for (var i in this.headers) {
				this.transport.setRequestHeader(i, this.headers[i]);
			}
		}
		var _276 = null;
		if (_273 == "post") {
			_276 = this.data;
			if (XN.get_check) {
				_276 += (this.data ? "&" : "") + "requestToken=" + XN.get_check;
			}
		}
		this.transport.send(_276);
	},
	_onSuccess : function(obj) {
		var _278 = this.transport;
		if (this.fillTo !== null) {
			try {
				this.fillTo.stopLoading();
			} catch (e) {
			}
			this.fillTo.innerHTML = _278.responseText;
		}
		try {
			if (this.onSuccess) {
				this.onSuccess.call(null, _278);
			}
		} catch (e) {
			if (XN.DEBUG_MODE) {
				throw e;
			}
		}
	},
	_onComplete : function(obj) {
		var _27a = this.transport;
		try {
			if (this.onComplete) {
				this.onComplete.call(null, _27a);
			}
		} catch (e) {
			if (XN.DEBUG_MODE) {
				throw e;
			}
		}
	},
	onStateChange : function() {
		var _27b = this.transport;
		if (_27b.readyState == 1 && !this.hasRunStart) {
			this.onStart();
			this.hasRunStart = true;
		} else {
			if (_27b.readyState == 4) {
				if (_27b.status == undefined || _27b.status == 0
						|| (_27b.status >= 200 && _27b.status < 300)) {
					if (this.useCache) {
						XN.net.cache.add(this.url
										+ encodeURIComponent(this.data),
								this.transport.responseText);
					}
					this._onSuccess();
				} else {
					(this.onError || this.onFailure || XN.func.empty).call(
							null, _27b);
				}
				this._onComplete();
			}
		}
	}
};
XN.net.xmlhttp.prototype.getTransport = function(w) {
	if (w != window) {
		return w.getTransport();
	} else {
		if (XN.browser.IE) {
			try {
				return new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				return new ActiveXObject("Microsoft.XMLHTTP");
			}
		} else {
			return new XMLHttpRequest();
		}
	}
};
XN.NET = XN.Net = XN.net;
XN.net.ajax = XN.net.xmlhttp;
$extend(XN.net.xmlhttp.prototype, {
			get : function(url, data, _27f, _280) {
				this.url = url;
				this.data = data;
				this.onSuccess = _27f;
				$extend(this, _280);
				this.send("get");
			},
			post : function(url, data, _283, _284) {
				this.url = url;
				this.data = data;
				this.onSuccess = _283;
				$extend(this, _284);
				this.send("post");
			}
		});
if (typeof Ajax == "undefined") {
	Ajax = {};
	Ajax.Request = function(url, o) {
		var p = o.parameters;
		o["url"] = url;
		o["data"] = p;
		delete o.parameters;
		return new XN.net.xmlhttp(o);
	};
}
//以上发送ajax请求。
XN.template = {};
XN.template.mediaPlayer = function(o) {
	return [
			"<object classid=\"CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95\" width=\""
					+ (o.width || "352") + "\" height=\"" + (o.height || "70")
					+ "\" >\n",
			"<param name=\"autostart\" value=\"" + (o.autostart || "1")
					+ "\" >\n",
			"<param name=\"showstatusbar\" value=\"" + (o.showstatusbar || "1")
					+ "\">\n",
			"<param name=\"filename\" value=\"" + o.filename + "\">\n",
			"<embed type=\"application/x-oleobject\" codebase=\"http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701\" ",
			"flename=\"mp\"",
			"autostart=\"" + (o.autostart || "1") + "\" showstatusbar=\""
					+ (o.showstatusbar || "1") + "\" ",
			"src=\"" + o.filename + "\" width=\"" + (o.width || "352")
					+ "\" height=\"" + (o.height || "70") + "\"></embed>"]
			.join("");
};
XN.template.flashPlayer = function(o) {
	return "<embed src=\""
			+ XN.ENV.staticRoot
			+ "/swf/player.swf?url="
			+ o.filename
			+ "&Rwid="
			+ (o.width || "450")
			+ "&Autoplay="
			+ (o.autostart || "1")
			+ "\" wmode=\""
			+ (o.wmode || "transparent")
			+ "\" loop=\"false\" menu=\"false\" quality=\"high\" scale=\"noscale\" salign=\"lt\" bgcolor=\"#ffffff\" width=\""
			+ (o.width || "450")
			+ "\" height=\""
			+ (o.height || "30")
			+ "\" align=\"middle\" allowScriptAccess=\""
			+ (o.allowScriptAccess || "sameDomain")
			+ "\" allowFullScreen=\"false\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" />";
};
XN.template.flash = function(o) {
	return "&nbsp;<embed src=\"" + o.filename
			+ "\" type=\"application/x-shockwave-flash\" " + "width=\""
			+ (o.width || "320") + "\" height=\"" + (o.height || "240")
			+ "\" allowFullScreen=\"true\" wmode=\""
			+ (o.wmode || "transparent") + "\" allowNetworking=\""
			+ (o.allowNetworking || "all") + "\" allowScriptAccess=\""
			+ (o.allowScriptAccess || "sameDomain") + "\"></embed>";
};
XN.Template = XN.TEMPLATE = XN.template;
//以上Template
XN.namespace("util");
XN.util.__timeouts = [];
XN.util.__intervals = [];
XN.util.setTimeout = function(a, b) {
	var _28d = setTimeout(a, b);
	this.__timeouts.push(_28d);
	return _28d;
};
XN.util.setInterval = function(a, b) {
	var _290 = setInterval(a, b);
	this.__intervals.push(_290);
	return _290;
};
XN.util.clearTimeout = function(_291) {
	for (var i = 0; i < this.__timeouts.length; i++) {
		if (this.__timeouts[i] == _291) {
			this.__timeouts.slice(i, 1);
		}
	}
	clearTimeout(_291);
};
XN.util.clearInterval = function(_293) {
	for (var i = 0; i < this.__intervals.length; i++) {
		if (this.__intervals[i] == _293) {
			this.__intervals.slice(i, 1);
		}
	}
	clearTimeout(_293);
};
XN.util.clearAllTimer = function() {
	for (var i = 0; i < this.__timeouts.length; i++) {
		clearTimeout(this.__timeouts[i]);
	}
	for (var i = 0; i < this.__intervals.length; i++) {
		clearTimeout(this.__intervals[i]);
	}
	this.__timeouts = [];
	this.__intervals = [];
};
XN.util.cache = function(_296) {
	$extend(this, _296);
	this._cacheData = [];
};
XN.util.cache.prototype = {
	cacheLength : null,
	_cacheData : null,
	isExist : function(key) {
		return this.get(key);
	},
	add : function(key, _299) {
		if (!isUndefined(this.isExist(key))) {
			return;
		}
		if (this.cacheLength && this.cacheLength == this._cacheData.length) {
			this._cacheData.shift();
		}
		this._cacheData.push({
					"key" : key,
					"value" : _299
				});
	},
	get : function(key) {
		for (var i = this._cacheData.length - 1; i >= 0; i--) {
			if (this._cacheData[i].key == key) {
				return this._cacheData[i].value;
			}
		}
	},
	clear : function() {
		this._cacheData = [];
	}
};
XN.UTIL = XN.Util = XN.util;
XN.util.DS_JSON = function(p) {
	$extend(this, p);
};
XN.util.DS_JSON.prototype = {
	DS_TYPE : "JSON",
	url : null,
	queryParam : "query",
	attachParam : "",
	rootKey : null,
	method : "get",
	_request : null,
	query : function(v, _29e) {
		var This = this;
		try {
			this._request.abort();
		} catch (e) {
		}
		function parseDS_JSON(r) {
			r = r.responseText;
			var pp;
			try {
				var rt = XN.JSON.parse(r);
				if (This.rootKey && rt[This.rootKey]) {
					pp = rt[This.rootKey];
				} else {
					pp = rt;
				}
			} catch (e) {
				pp = [];
			}
			_29e(pp);
		}
		this._request = new XN.net.xmlhttp({
					url : this.url,
					data : this.queryParam + "=" + encodeURIComponent(v) + "&"
							+ this.attachParam,
					method : this.method,
					onSuccess : parseDS_JSON
				});
	}
};
XN.ui.DS_JSON = XN.util.DS_JSON;
XN.util.DS_friends = function(p) {
	var ds = new XN.util.DS_JSON(p);
	ds.queryParam = "p";
	ds.rootKey = "candidate";
	ds.net = "";
	ds.group = "";
	ds.page = isUndefined(p.page) ? false : p.page;
	ds.param = XN.json.build(p.param || {});
	var _2a5 = isUndefined(p.limit) ? 24 : p.limit;
	ds.query = function(name, _2a7) {
		XN.log("start query");
		name = name.replace(/[^a-zA-Z\u0391-\uFFE5]/g, "");
		if (XN.string.isBlank(name) && this.group == "" && this.net == "") {
			_2a7([]);
			return;
		}
		var p = ["{\"init\":false,", "\"qkey\":\"" + this.qkey + "\",",
				"\"uid\":true,", "\"uname\":true,", "\"uhead\":true,",
				"\"limit\":" + _2a5 + ",", "\"param\":" + this.param + ",",
				"\"query\":\"" + name + "\",",
				"\"group\":\"" + this.group + "\",",
				"\"net\":\"" + this.net + "\",",
				"\"page\":\"" + this.page + "\"", "}"].join("");
		XN.util.DS_JSON.prototype.query.call(this, p, _2a7);
	};
	return ds;
};
XN.ui.DS_friends = XN.util.DS_friends;
XN.util.DS_Array = function(p) {
	$extend(this, p);
	this.init();
};
XN.util.DS_Array.prototype = {
	DS_TYPE : "array",
	data : null,
	searchKey : null,
	init : function() {
		var key = this.searchKey, _2ab = this._index = [];
		XN.array.each(this.data, function(i, v) {
					_2ab.push(v[key]);
				});
	},
	query : function(v, _2af) {
		_2af(this._search(v));
	},
	_search : function(v) {
		var keys = this._index, data = this.data, rt = [], reg = new RegExp("^"
						+ v, "i");
		XN.array.each(keys, function(i, v) {
					if (reg.test(v)) {
						rt.push(data[i]);
					}
				});
		return rt;
	}
};
XN.ui.DS_Array = XN.util.DS_Array;
XN.util.DS_XHR = function(p) {
	$extend(this, p);
};
XN.util.DS_XHR.prototype = {
	url : null,
	queryParam : "query",
	_request : null,
	query : function(v, _2b9) {
		var This = this;
		try {
			this._request.abort();
		} catch (e) {
		}
		function parseDS_XML(r) {
			r = r.responseXML;
			var rt = [];
			function getResult(r) {
				var tmp = {};
				XN.array.each(r.childNodes, function(i, v) {
							tmp[v.tagName.toLowerCase()] = v.firstChild.nodeValue;
						});
				return tmp;
			}
			try {
				var rs = r.getElementsByTagName("Result");
				XN.array.each(rs, function(i, v) {
							rt.push(getResult(v));
						});
			} catch (e) {
				rt = [];
			}
			_2b9(rt);
		}
		this._request = new XN.net.xmlhttp({
					url : this.url,
					data : this.queryParam + "=" + encodeURIComponent(v),
					onSuccess : parseDS_XML
				});
	}
};
XN.ui.DS_XHR = XN.util.DS_XHR;
(function() {
	var _2c4 = {};
	XN.util.hotKey = {
		add : function(key, func, obj) {
			key = String(key).toLowerCase();
			var ctrl = false;
			var alt = false;
			var _2ca = false;
			var _2cb = null;
			if (/^\d+$/.test(key)) {
				_2cb = parseInt(key);
			} else {
				ctrl = /ctrl|ctr|c/.test(key);
				alt = /alt|a/.test(key);
				_2ca = /shift|s/.test(key);
				if (/\d+/.test(key)) {
					_2cb = parseInt(/\d+/.exec(key)[0]);
				} else {
					_2cb = false;
				}
			}
			_2c4[key] = _2c4[key] || {};
			_2c4[key][func] = function(e) {
				e = e || window.event;
				code = e.keyCode;
				if (ctrl && !e.ctrlKey) {
					return;
				}
				if (alt && !e.altKey) {
					return;
				}
				if (_2ca && !e.shiftKey) {
					return;
				}
				if (_2cb && code !== _2cb) {
					return;
				}
				func.call(obj || null);
				XN.event.stop(e);
			};
			XN.event.addEvent(document, "keydown", _2c4[key][func]);
		},
		del : function(key, func) {
			key = String(key).toLowerCase();
			XN.event.delEvent(document, "keydown", _2c4[key][func]);
			delete _2c4[key][func];
		}
	};
})();
(function() {
	var id = 0;
	XN.util.createObjID = function() {
		id++;
		return id;
	};
})();
//以上util常用，
XN.DO = XN.Do = {};
(function() {
	var _2d0 = null;
	var _2d1 = null;
	XN.DO.alert = function(_2d2, _2d3, type, X, Y, w, h, _2d9) {
		var _2da = {
			type : "normal",
			width : 400,
			button : "\u786e\u5b9a",
			modal : false,
			callBack : XN.func.empty,
			autoHide : 0,
			addIframe : true,
			closeFire : true
		};
		if (!isString(_2d2)) {
			extendObject(_2da, _2d2);
		} else {
			if (isString(_2d2) || arguments.length > 1) {
				var ars = arguments;
				XN.array.each(["message", "title", "type", "X", "Y", "width",
								"height", "callBack"], function(i, v) {
							if (ars[i]) {
								_2da[v] = ars[i];
							}
						});
			}
		}
		var temp = _2da.params;
		delete _2da.params;
		_2da = extendObject({}, _2da, temp);
		_2da.callback = _2da.callback || _2da.callBack;
		try {
			_2d0.remove(_2da.modal === true);
		} catch (e) {
		}
		var _2df = new XN.ui.dialog(_2da).setType(_2da.type)
				.setTitle(_2da.title
						|| (_2da.type == "error"
								? "\u9519\u8bef\u63d0\u793a"
								: "\u63d0\u793a")).setBody(_2da.msg
						|| _2da.message || "").setWidth(_2da.width)
				.setHeight(_2da.height).setX(_2da.X).setY(_2da.Y).addButton({
							text : (_2da.yes || _2da.button),
							onclick : function() {
								_2df.setAutoHide(true);
								return _2da.callback.call(_2df);
							}
						}).show();
		if (_2da.closeFire === true) {
			_2df.addEvent("close", function() {
						_2da.callback.call(_2df);
					});
		}
		_2d0 = _2df;
		try {
			_2df.getButton(_2da.button).focus();
		} catch (e) {
		}
		if (_2da.autoHide) {
			_2df.autoHide(_2da.autoHide);
		}
		return _2df;
	};
	XN.DO.confirm = function(_2e0, _2e1, _2e2, yes, no, X, Y, w, h) {
		var _2e9 = {
			type : "normal",
			width : 400,
			modal : false,
			yes : "\u786e\u5b9a",
			no : "\u53d6\u6d88",
			callBack : XN.func.empty,
			focus : null,
			addIframe : true,
			closeFire : false
		};
		if (!isString(_2e0)) {
			extendObject(_2e9, _2e0);
		} else {
			if (isString(_2e0) || arguments.length > 1) {
				var ars = arguments;
				XN.array.each(["message", "title", "callBack", "yes", "no",
								"X", "Y", "w", "h"], function(i, v) {
							if (ars[i]) {
								_2e9[v] = ars[i];
							}
						});
			}
		}
		var temp = _2e9.params;
		delete _2e9.params;
		_2e9 = extendObject({}, _2e9, temp);
		_2e9.callback = _2e9.callback || _2e9.callBack;
		try {
			_2d1.remove(_2e9.modal === true);
		} catch (e) {
		}
		var _2ee = new XN.ui.dialog(_2e9).setType(_2e9.type)
				.setTitle(_2e9.title
						|| (_2e9.type == "error"
								? "\u9519\u8bef\u63d0\u793a"
								: "\u63d0\u793a")).setBody(_2e9.msg
						|| _2e9.message || "").setWidth(_2e9.width)
				.setHeight(_2e9.height).setX(_2e9.X).setY(_2e9.Y).addButton({
							text : (_2e9.submit || _2e9.yes),
							onclick : function() {
								_2ee.setAutoHide(true);
								return _2e9.callback.call(_2ee, true);
							}
						}).addButton({
							text : (_2e9.cancel || _2e9.no),
							onclick : function() {
								_2ee.setAutoHide(true);
								return _2e9.callback.call(_2ee, false);
							}
						}).show();
		_2ee.getButton(_2e9.cancel || _2e9.no).addClass("gray");
		if (_2e9.focus == "submit") {
			_2e9.focus = _2e9.submit;
		} else {
			if (_2e9.focus == "cancel") {
				_2e9.focus = _2e9.cancel;
			}
		}
		if (_2e9.closeFire === true) {
			_2ee.addEvent("close", function() {
						_2e9.callback.call(_2ee, false);
					});
		}
		_2ee.getButton(_2e9.focus || _2e9.submit || _2e9.yes).focus();
		_2d1 = _2ee;
		return _2ee;
	};
	XN.DO.showMessage = XN.DO.showMsg = function(msg, _2f0, time) {
		var _2f2 = XN.DO.alert({
					msg : msg,
					title : (_2f0 || "\u63d0\u793a"),
					noFooter : true,
					autoHide : (time || 2)
				});
		return _2f2;
	};
	XN.DO.showError = function(msg, _2f4, time) {
		var _2f6 = XN.DO.alert({
					msg : msg,
					type : "error",
					title : (_2f4 || "\u9519\u8bef\u63d0\u793a"),
					noFooter : true,
					autoHide : (time || 2)
				});
		return _2f6;
	};
})();
//以上封装alert和confirm；
XN.json = {
	_ESCAPES : /\\["\\\/bfnrtu]/g,
	_VALUES : /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
	_BRACKETS : /(?:^|:|,)(?:\s*\[)+/g,
	_INVALID : /^[\],:{}\s]*$/,
	_SPECIAL_CHARS : /["\\\x00-\x1f\x7f-\x9f]/g,
	_PARSE_DATE : /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})Z$/,
	_CHARS : {
		"\b" : "\\b",
		"\t" : "\\t",
		"\n" : "\\n",
		"\f" : "\\f",
		"\r" : "\\r",
		"\"" : "\\\"",
		"\\" : "\\\\"
	},
	dateToString : function(d) {
		function _zeroPad(v) {
			return v < 10 ? "0" + v : v;
		}
		return "\"" + d.getUTCFullYear() + "-" + _zeroPad(d.getUTCMonth() + 1)
				+ "-" + _zeroPad(d.getUTCDate()) + "T"
				+ _zeroPad(d.getUTCHours()) + ":" + _zeroPad(d.getUTCMinutes())
				+ ":" + _zeroPad(d.getUTCSeconds()) + "Z\"";
	},
	stringToDate : function(str) {
		if (XN.JSON._PARSE_DATE.test(str)) {
			var d = new Date();
			d.setUTCFullYear(RegExp.$1, (RegExp.$2 | 0) - 1, RegExp.$3);
			d.setUTCHours(RegExp.$4, RegExp.$5, RegExp.$6);
			return d;
		}
	},
	parse : function(str) {
		return eval("(" + str + ")");
	},
	build : function(o, w, d) {
		var m = XN.JSON._CHARS, _300 = XN.JSON._SPECIAL_CHARS, _301 = [];
		var _302 = function(c) {
			if (!m[c]) {
				var a = c.charCodeAt();
				m[c] = "\\u00" + Math.floor(a / 16).toString(16)
						+ (a % 16).toString(16);
			}
			return m[c];
		};
		var _305 = function(s) {
			return "\"" + s.replace(_300, _302) + "\"";
		};
		var _307 = XN.JSON.dateToString;
		var _308 = function(o, w, d) {
			var t = typeof o, i, len, j, k, v, vt, a;
			if (t === "string") {
				return _305(o);
			}
			if (t === "boolean" || o instanceof Boolean) {
				return String(o);
			}
			if (t === "number" || o instanceof Number) {
				return isFinite(o) ? String(o) : "null";
			}
			if (o instanceof Date) {
				return _307(o);
			}
			if (isArray(o)) {
				for (i = _301.length - 1; i >= 0; --i) {
					if (_301[i] === o) {
						return "null";
					}
				}
				_301[_301.length] = o;
				a = [];
				if (d > 0) {
					for (i = o.length - 1; i >= 0; --i) {
						a[i] = _308(o[i], w, d - 1) || "null";
					}
				}
				_301.pop();
				return "[" + a.join(",") + "]";
			}
			if (t === "object") {
				if (!o) {
					return "null";
				}
				for (i = _301.length - 1; i >= 0; --i) {
					if (_301[i] === o) {
						return "null";
					}
				}
				_301[_301.length] = o;
				a = [];
				if (d > 0) {
					if (w) {
						for (i = 0, j = 0, len = w.length; i < len; ++i) {
							if (typeof w[i] === "string") {
								v = _308(o[w[i]], w, d - 1);
								if (v) {
									a[j++] = _305(w[i]) + ":" + v;
								}
							}
						}
					} else {
						j = 0;
						for (k in o) {
							if (typeof k === "string"
									&& typeof o[k] != "undefined") {
								v = _308(o[k], w, d - 1);
								if (v) {
									a[j++] = _305(k) + ":" + v;
								}
							}
						}
					}
				}
				_301.pop();
				return "{" + a.join(",") + "}";
			}
			return undefined;
		};
		d = d >= 0 ? d : 1 / 0;
		return _308(o, w, d);
	}
};
XN.JSON = XN.Json = XN.json;
//以上封装JSON
function writepipe(uin, nick) {
	if (uin > 0) {
		var s = GetCookie("_pipe");
		if (s) {
			s += ":";
		}
		SetCookie("_pipe", s + uin + ":" + escape(nick), null, "/", ""
						+ XN.env.domain + "");
	}
	var _317 = GetCookie("_wi");
	if ("opening" != _317 && "running" != _317) {
		SetCookie("_wi", "opening", null, "/", XN.ENV.domain);
		window.wiw = window.open("http://" + XN.env.domain
						+ "/webpager.do?toid=" + uin, "_blank",
				"height=600,width=650,resizable=yes,location=yes");
		if (window.wiw_checker) {
			window.clearInterval(window.wiw_checker);
		}
		window.wiw_checker = window.setInterval(function() {
					if (window.wiw.closed) {
						window.clearInterval(window.wiw_checker);
						SetCookie("_wi", "", null, "/", XN.ENV.domain);
					}
				}, 1000);
		return true;
	}
	if (window.wiw) {
		try {
			wiw.focus();
		} catch (e) {
		}
	}
	return false;
}
function talkto(uin, nick, tiny, _31b) {
	try {
		var a = new ActiveXObject("xntalk.Application");
		if (a) {
			a.openChat("", uin);
			return true;
		}
		if (top.frames["imengine"].gPagerType == 4) {
			if (top.frames["imengine"].imHelper.isLoginUser()) {
				var tabs = top.frames["imengine"].imui.chatTabs;
				tabs.onActivateWidget(uin, nick, tiny, _31b);
				tabs.switchFocus(uin);
				return true;
			}
		}
	} catch (e) {
	}
}
function jump_and_download(link) {
	if (XN.BROWSER.IE) {
		window
				.open(
						link,
						"download_window",
						"toolbar=0,location=no,directories=0,status=0,scrollbars=0,resizeable=0,width=1,height=1,top=0,left=0");
		window.focus();
	}
}
function GetCookieVal(_70) {
	var _71 = document.cookie.indexOf(";", _70);
	if (_71 == -1) {
		_71 = document.cookie.length;
	}
	return unescape(document.cookie.substring(_70, _71));
}
function GetCookie(_72) {
	var arg = _72 + "=";
	var _74 = arg.length;
	var _75 = document.cookie.length;
	var i = 0;
	while (i < _75) {
		var j = i + _74;
		if (document.cookie.substring(i, j) == arg) {
			return GetCookieVal(j);
		}
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) {
			break;
		}
	}
	return null;
}
function SetCookie(_78, _79) {
	var _7a = SetCookie.arguments;
	var _7b = SetCookie.arguments.length;
	var _7c = (_7b > 2) ? _7a[2] : null;
	var _7d = (_7b > 3) ? _7a[3] : null;
	var _7e = (_7b > 4) ? _7a[4] : null;
	var _7f = (_7b > 5) ? _7a[5] : false;
	document.cookie = _78 + "=" + escape(_79)
			+ ((_7c == null) ? "" : ("; expires=" + _7c.toGMTString()))
			+ ((_7d == null) ? "" : ("; path=" + _7d))
			+ ((_7e == null) ? "" : ("; domain=" + _7e))
			+ ((_7f == true) ? "; secure" : "");
}
if (XN.browser.Gecko && XN.string.getQuery("debug_mode")) {
	XN.debug.on();
}
(function() {
	var _32f = false;
	window.render_jebe_ads = function(j) {
		if (!window.ad_js_version) {
			return;
		}
		XN.loadFile("http://jebe.xnimg.cn/" + ad_js_version + "/render.js",
				function() {
					render_jebe_ads_load(j);
				});
	};
	window.load_jebe_ads = function(s, r, _333) {
		if (!s) {
			return;
		}
		if (_32f && !_333) {
			return;
		}
		_32f = true;
		XN.dom.ready(function() {
					var p = XN.cookie.get("id");
					if (!p || XN.string.isBlank(p)) {
						p = "";
					}
					var src = "http://shaft.jebe.renren.com/show?userid="
							+ encodeURIComponent(p) + "&tt="
							+ new Date().getTime();
					if (r) {
						src += "&r=" + r;
					}
					if (_333 && location.pathname.toLowerCase() != "/home.do") {
						src += "&reflush_new=1";
					}
					XN.loadFile({
								file : src,
								type : "js"
							});
				});
	};
})();
XN.USER = XN.user = currentUser = {};
XN.USER.me = function(_336) {
};
XN.event.enableCustomEvent(currentUser);
XN.USER.addFriendAction = function(p) {
	this.config = {
		commentLength : 45,
		needComment : true,
		requestURI : "http://friend." + XN.env.domain
				+ "/ajax_request_friend.do"
	};
	$extend(this.config, p);
};
XN.user.addFriendAction.prototype = {
	getConfig : function(key) {
		return this.config[key];
	},
	send : function(id, why, from, code, _33d) {
		var code = code != 1 ? 0 : 1;
		var _33d = _33d || "";
		var This = this;
		if (this.getConfig("needComment")) {
			if (XN.STRING.isBlank(why)) {
				this
						.fireEvent("checkError",
								"\u60a8\u8f93\u5165\u7684\u4fe1\u606f\u4e0d\u80fd\u4e3a\u7a7a");
				return;
			}
		}
		if (why.length > this.getConfig("commentLength")) {
			this.fireEvent("checkError",
					"\u60a8\u8f93\u5165\u7684\u4fe1\u606f\u4e0d\u80fd\u8d85\u8fc7"
							+ this.getConfig("commentLength")
							+ "\u4e2a\u5b57\u7b26");
			return;
		}
		var data = "id=" + id + "&why=" + why + "&codeFlag=" + code + "&code="
				+ _33d;
		this.fireEvent("beforePost");
		new XN.NET.xmlhttp({
					url : this.getConfig("requestURI") + "?from=" + from,
					"data" : data,
					onSuccess : function(r) {
						r = r.responseText;
						if (r && isJSON(r)) {
							var re = XN.JSON.parse(r);
						} else {
							This.fireEvent("error");
							return;
						}
						if (re.result == "-1") {
							This.fireEvent("flagError");
							return;
						}
						This.fireEvent("success", id, r, from);
						if (!window.currentUser) {
							return;
						}
						if (currentUser.fireEvent) {
							currentUser.fireEvent("addFriendSuccess", id, r,
									from);
						}
						if (currentUser.onaddFriendSuccess) {
							currentUser.onaddFriendSuccess(id, r);
						}
					},
					onError : function() {
						This.fireEvent("error", id, from);
						if (!window.currentUser) {
							return;
						}
						currentUser.fireEvent("addFriendError", id, r, from);
					}
				});
	}
};
XN.EVENT.enableCustomEvent(XN.USER.addFriendAction.prototype);
XN.dynamicLoad({
			file : "http://s.xnimg.cn/jspro/xn.app.addFriend.js",
			funcs : ["showRequestFriendDialog"]
		});
XN.DOM.readyDo(function() {
			if (XN.get_check) {
				var _342 = Sizzle("form");
				for (var i = 0; i < _342.length; i++) {
					var _344 = document.createElement("input");
					_344.type = "hidden";
					_344.name = "requestToken";
					_344.value = XN.get_check;
					_342[i].appendChild(_344);
				}
			}
		});
XN.namespace("ui");
(function() {
	XN.ui.element = {
		frame : null,
		iAmUIelement : true
	};
	XN.array.each(["addClass", "delClass", "show", "hide", "remove"], function(
					i, v) {
				XN.ui.element[v] = function() {
					XN.element[v].apply(null, [this.frame].concat(XN.array
									.build(arguments)));
				};
			});
	XN.ui.container = {
		container : null
	};
	XN.array.each(["addChild", "delChild", "setContent"], function(i, v) {
				XN.ui.container[v] = function() {
					XN.element[v].apply(null, [this.container].concat(XN.array
									.build(arguments)));
				};
			});
	$extend(XN.ui.container, XN.ui.element);
})();
XN.UI = XN.Ui = XN.ui;
XN.ui.Element = XN.ui.element;
XN.ui.Content = XN.ui.container;
(function(ns) {
	var UI = XN.ui;
	var _34b = XN.event.addEvent;
	var _34c = true;
	function log(s) {
		if (_34c) {
			XN.log(isString(s) ? "xn.ui.button:" + s : s);
		}
	}
	ns.button = function(_34e) {
		$extend(this, _34e);
		this.init();
	};
	ns.button.prototype = $extend({}, UI.Element);
	ns.button.prototype.text = null;
	ns.button.prototype.className = "";
	ns.button.prototype.disableClassName = "gray";
	ns.button.prototype.init = function() {
		var This = this;
		var el;
		if (this.getConfig("el")) {
			el = $(this.getConfig("el"));
		} else {
			el = $element("input");
		}
		this.frame = el;
		el.type = "button";
		this.addClass("input-submit");
		this.addClass(this.getConfig("className"));
		this.setText(this.getConfig("text"));
		_34b(el, "click", function() {
					if (This.onclick) {
						This.onclick();
					}
				}, false);
	};
	ns.button.prototype.getConfig = function(key) {
		if (key == "el") {
			return this.id;
		}
		return this[key];
	};
	ns.button.prototype.getEl = function() {
		return this.frame;
	};
	ns.button.prototype.setText = function(text) {
		this.text = text;
		this.getEl().value = text;
	};
	ns.button.prototype.disable = function() {
		var el = this.getEl();
		el.blur();
		el.disabled = true;
		el.addClass(this.getConfig("disableClassName"));
	};
	ns.button.prototype.enable = function() {
		var el = this.getEl();
		el.disabled = false;
		el.delClass(this.getConfig("disableClassName"));
	};
	ns.button.prototype.focus = function() {
		this.getEl().focus();
	};
	ns.button.prototype.blur = function() {
		this.getEl().blur();
	};
})(XN.ui);

(function() {
	var rl = "realLeft", rt = "realTop", ow = "offsetWidth", oh = "offsetHeight";
	XN.ui.fixPositionMethods = {
		"1-1" : function(f, el, x, y, p) {
			f.style.left = x + el[rl]() - p[rl]() + "px";
			f.style.top = y + el[rt]() - p[rt]() + "px";
		},
		"1-2" : function(f, el, x, y, p) {
			f.style.left = x + el[rl]() - p[rl]() - f[ow] + "px";
			f.style.top = y + el[rt]() - p[rt]() + "px";
		},
		"1-3" : function(f, el, x, y, p) {
			f.style.left = x + el[rl]() - p[rl]() - f[ow] + "px";
			f.style.top = y + el[rt]() - p[rt]() - f[oh] + "px";
		},
		"1-4" : function(f, el, x, y, p) {
			f.style.left = x + el[rl]() - p[rl]() + "px";
			f.style.top = y + el[rt]() - p[rt]() - f[oh] + "px";
		},
		"2-1" : function(f, el, x, y, p) {
			f.style.left = x + el[rl]() - p[rl]() + el[ow] + "px";
			f.style.top = y + el[rt]() - p[rt]() + "px";
		},
		"2-2" : function(f, el, x, y, p) {
			f.style.left = x + el[rl]() - p[rl]() + el[ow] - f[ow] + "px";
			f.style.top = y + el[rt]() - p[rt]() + "px";
		},
		"2-3" : function(f, el, x, y, p) {
			f.style.left = x + el[rl]() - p[rl]() + el[ow] - f[ow] + "px";
			f.style.top = y + el[rt]() - p[rt]() - f[oh] + "px";
		},
		"2-4" : function(f, el, x, y, p) {
			f.style.left = x + el[rl]() - p[rl]() + el[ow] + "px";
			f.style.top = y + el[rt]() - p[rt]() - f[oh] + "px";
		},
		"3-1" : function(f, el, x, y, p) {
			f.style.left = x + el[rl]() - p[rl]() + el[ow] + "px";
			f.style.top = y + el[rt]() - p[rt]() + el[oh] + "px";
		},
		"3-2" : function(f, el, x, y, p) {
			f.style.left = x + el[rl]() - p[rl]() + el[ow] - f[ow] + "px";
			f.style.top = y + el[rt]() + el[oh] + "px";
		},
		"3-3" : function(f, el, x, y, p) {
			f.style.left = x + el[rl]() - p[rl]() + el[ow] - f[ow] + "px";
			f.style.top = y + el[rt]() - p[rt]() + el[oh] - f[oh] + "px";
		},
		"3-4" : function(f, el, x, y, p) {
			f.style.left = x + el[rl]() - p[rl]() + el[ow] + "px";
			f.style.top = y + el[rt]() - p[rt]() + el[oh] - f[oh] + "px";
		},
		"4-1" : function(f, el, x, y, p) {
			f.style.left = x + el[rl]() - p[rl]() + "px";
			f.style.top = y + el[rt]() - p[rt]() + el[oh] + "px";
		},
		"4-2" : function(f, el, x, y, p) {
			f.style.left = x + el[rl]() - p[rl]() - f[ow] + "px";
			f.style.top = y + el[rt]() - p[rt]() + el[oh] + "px";
		},
		"4-3" : function(f, el, x, y, p) {
			f.style.left = x + el[rl]() - p[rl]() - f[ow] + "px";
			f.style.top = y + el[rt]() - p[rt]() + el[oh] - f[oh] + "px";
		},
		"4-4" : function(f, el, x, y, p) {
			f.style.left = x + el[rl]() - p[rl]() + "px";
			f.style.top = y + el[rt]() - p[rt]() + el[oh] - f[oh] + "px";
		}
	};
})();
XN.ui.fixPositionElement = function(_3a9) {
	var This = this;
	this.config = {
		tagName : "div",
		useIframeInIE6 : true
	};
	$extend(this.config, _3a9);
	var f, x, y;
	if (this.getConfig("id")) {
		this.frame = f = $(this.getConfig("id"));
		x = f.realLeft();
		y = f.realTop();
	} else {
		if (this.getConfig("tagName")) {
			this.frame = this.container = f = $element(this
					.getConfig("tagName"));
		} else {
			return;
		}
	}
	this.container = $element("div");
	this.frame.appendChild(this.container);
	XN.array.each(["alignWith", "alignType", "offsetX", "offsetY",
					"alignParent"], function(i, v) {
				This[v] = This.getConfig(v) || This[v];
			});
	XN.element.setStyle(f,
			"position:absolute;z-index:10001;left:-9999px;top:-9999px");
	if (!$(this.alignParent)) {
		this.alignParent = $(document.body);
	}
	$(this.alignParent).appendChild(this.frame);
	if ((XN.browser.IE6 && this.getConfig("useIframeInIE6"))
			|| this.getConfig("addIframe")) {
		var _3b0;
		this._iframe = _3b0 = $element("iframe");
		_3b0.frameBorder = 0;
		_3b0.scrolling = "no";
		_3b0
				.setStyle("position:absolute;border:0px;left:0px;top:0px;z-index:-1;");
		if (XN.browser.Gecko) {
			_3b0
					.setAttribute("style",
							"position:absolute;border:0px;left:0px;top:0px;z-index:-1;");
		}
		if (XN.browser.IE) {
			_3b0.style.filter = "progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)";
		}
		this.frame.appendChild(_3b0);
	}
	if (XN.element.visible(f)) {
		this.show();
	}
	f.style.display = "block";
};
XN.ui.fixPositionElement.prototype = $extend({}, XN.ui.container);
$extend(XN.ui.fixPositionElement.prototype, {
	alignWith : null,
	alignType : "4-1",
	offsetX : 0,
	offsetY : 0,
	alignParent : "dropmenuHolder",
	left : null,
	top : null,
	_isShow : false,
	getConfig : function(key) {
		return this.config[key];
	},
	setOffsetX : function(x) {
		this.offsetX = x;
		this.refresh();
		return this;
	},
	setOffsetY : function(y) {
		this.offsetY = y;
		this.refresh();
		return this;
	},
	setAlignType : function(t) {
		this.alignType = t;
		this.refresh();
		return this;
	},
	setAlignParent : function(p) {
		this.alignParent = p;
		$(this.alignParent).appendChild(this.frame);
		this.refresh();
		return this;
	},
	refresh : function() {
		if (this.visible()) {
			this.show();
		} else {
			this.hide();
		}
		return this;
	},
	visible : function() {
		return this._isShow;
	},
	show : function() {
		this._isShow = true;
		this.frame.show();
		if (this.alignWith) {
			this._moveToElement(this.alignWith);
		} else {
			var x = this.left === null
					? parseInt(
							(($(this.alignParent).offsetWidth - this.frame.offsetWidth) / 2),
							10)
					: this.left;
			var y = this.top === null ? XN.event.scrollTop() + 200 : this.top;
			this._moveToPosition(x, y);
		}
		if (this._iframe) {
			try {
				this._iframe.style.height = this.frame.offsetHeight - 2 + "px";
				this._iframe.style.width = this.frame.offsetWidth + "px";
			} catch (e) {
			}
		}
		return this;
	},
	hide : function() {
		this._isShow = false;
		var f = this.frame;
		f.style.left = "-9999px";
		f.style.top = "-9999px";
		return this;
	},
	moveTo : function(x, y) {
		if (!x && !y) {
			return;
		}
		if (isNumber(x)) {
			this.left = x;
			this.alignWith = null;
		} else {
			if (isString(x) || isElement(x)) {
				this.alignWith = $(x);
			}
		}
		if (isNumber(y)) {
			this.top = y;
			this.alignWith = null;
		}
		this.refresh();
		return this;
	},
	setX : function(x) {
		this.moveTo(x);
		return this;
	},
	setY : function(y) {
		this.moveTo(null, y);
		return this;
	},
	setIndex : function(i) {
		this.frame.style.zIndex = i;
		return this;
	},
	_moveToElement : function(el) {
		XN.ui.fixPositionMethods[this.alignType](this.frame, $(el),
				this.offsetX, this.offsetY, $(this.alignParent));
	},
	_moveToPosition : function(x, y) {
		if (x) {
			this.frame.style.left = x + "px";
		}
		if (y) {
			this.frame.style.top = y + "px";
		}
	}
});

(function() {
	var _3c1 = XN.ui.fixPositionElement.prototype;
	var _3c2 = XN.event;
	XN.ui.dialog = function(_3c3) {
		var This = this;
		XN.ui.fixPositionElement.call(this, _3c3);
		this.container = $element("div");
		this.frame.appendChild(this.container);
		if (this.getConfig("HTML")) {
			this.setContent(this.getConfig("HTML"));
		} else {
			this.setContent(this.buildHTML());
		}
		this.dialogContainer = $("ui_dialog_container");
		this.header = this.title = $("ui_dialog_header");
		this.body = this.msg = this.message = $("ui_dialog_body");
		this.footer = $("ui_dialog_footer");
		this.closeButton = $("ui_dialog_close");
		this.header.addChild = this.body.addChild = this.footer.addChild = function(
				s) {
			XN.element.addChild(this, s);
			setTimeout(function() {
						This.refresh();
					}, 0);
		};
		this.dialogContainer.removeAttribute("id");
		this.header.removeAttribute("id");
		this.body.removeAttribute("id");
		this.footer.removeAttribute("id");
		this.closeButton.removeAttribute("id");
		if (this.getConfig("showCloseButton")) {
			this.closeButton.show();
			XN.event.addEvent(this.closeButton, "click", function() {
						This.hide();
						This.fireEvent("close");
					});
		}
		this.frame.style.zIndex = 10000;
		this.setWidth(this.getConfig("width") || 400);
		if (this.getConfig("height")) {
			this.setHeight(this.getConfig("height"));
		}
		XN.array.each(["title", "msg", "message", "header", "body", "footer"],
				function(i, v) {
					if (This.getConfig(v)) {
						This[v].setContent(This.getConfig(v));
					}
				});
		if (this.getConfig("type")) {
			this.setType(this.getConfig("type"));
		}
		this._buttons = [];
		XN.event.addEvent(this.footer, "click", function(e) {
					This._parseButtonEvent(e || window.event);
				});
		XN.util.hotKey.add("27", this._hotKeyEvent, this);
		if (this.getConfig("modal") === true) {
			XN.dom.disable();
		}
		if (this.getConfig("noHeader")) {
			this.header.hide();
		}
		if (this.getConfig("noFooter")) {
			this.footer.hide();
		}
		if (this.getConfig("noPadding")) {
			this.body.addClass("no_padding");
		}
	};
	XN.ui.dialog.prototype = $extend({}, _3c1);
	$extend(XN.ui.dialog.prototype, {
		header : null,
		body : null,
		footer : null,
		_iframe : null,
		_buttons : null,
		buildHTML : function() {
			return [
					"<table id=\"ui_dialog_container\" style=\"width: 100%; height: 100%;\" class=\"pop_dialog_table\">",
					"<tbody>",
					"<tr>",
					"<td class=\"pop_topleft\"></td>",
					"<td class=\"pop_border\"></td>",
					"<td class=\"pop_topright\"></td>",
					"</tr>",
					"<tr>",
					"<td class=\"pop_border\"></td>",
					"<td class=\"pop_content\">",
					"<h2><span id=\"ui_dialog_header\"></span><a style=\"display:none;\" class=\"close-button\" id=\"ui_dialog_close\" href=\"#nogo\" onclick=\"return false;\">\u5173\u95ed</a></h2>",
					"<div class=\"dialog_content\">",
					"<div id=\"ui_dialog_body\" class=\"dialog_body\"></div>",
					"<div id=\"ui_dialog_footer\" class=\"dialog_buttons\"></div>",
					"</div>", "</td>", "<td class=\"pop_border\"></td>",
					"</tr>", "<tr>", "<td class=\"pop_bottomleft\"></td>",
					"<td class=\"pop_border\"></td>",
					"<td class=\"pop_bottomright\"></td>", "</tr>", "</tbody>",
					"</table>"].join("");
		},
		getButton : function(text) {
			var _3ca = this._buttons;
			for (var i = _3ca.length - 1; i >= 0; i--) {
				if (_3ca[i].text == text) {
					return _3ca[i];
				}
			}
			return null;
		},
		addButton : function(b) {
			var o = {
				text : b.text,
				_onclickForDialog : b.onclick
			};
			if (b.className) {
				o.className = b.className;
			}
			var _3ce = new XN.ui.button(o);
			_3ce.frame.setAttribute("dialog", "1");
			this._buttons.push(_3ce);
			this.footer.addChild(_3ce);
			return this;
		},
		delButton : function(b) {
			if (isString(b)) {
				b = this.getButton(b);
			}
			this.footer.delChild(b);
			return this;
		},
		_preventHide : false,
		preventHide : function() {
			this._preventHide = true;
			return this;
		},
		setAutoHide : function(boo) {
			this._preventHide = !boo;
			return this;
		},
		_parseButtonEvent : function(e) {
			var el = _3c2.element(e);
			if (el.tagName.toLowerCase() !== "input" || el.type !== "button") {
				return;
			}
			if (!el.getAttribute("dialog")) {
				return;
			}
			var _3d3 = this.getButton(el.value);
			if (_3d3 && _3d3._onclickForDialog) {
				_3d3._onclickForDialog.call(this);
			}
			if (this._preventHide) {
				this._preventHide = true;
			} else {
				this.hide();
			}
		},
		_hotKeyEvent : function() {
			this.hide();
		},
		setType : function(t) {
			if (t == "normal") {
				this.frame.delClass("errorDialog");
			} else {
				if (t == "error") {
					this.frame.addClass("errorDialog");
				}
			}
			return this;
		},
		setWidth : function(w) {
			if (!w) {
				return this;
			}
			if (w == "auto") {
				this.frame.style.width = "auto";
				this.dialogContainer.style.height = "";
				this.dialogContainer.style.width = "";
				this.width = this.frame.offsetWidth;
			} else {
				this.width = w;
				this.frame.style.width = w + "px";
				this.dialogContainer.style.height = "100%";
				this.dialogContainer.style.width = "100%";
			}
			this.refresh();
			return this;
		},
		setHeight : function(h) {
			if (!h) {
				return this;
			}
			this.hegith = h;
			this.frame.style.height = h + "px";
			this.refresh();
			return this;
		},
		resizeTo : function(w, h) {
			this.setWidth(w);
			this.setHeight(h);
			return this;
		},
		clear : function() {
			this.header.setContent("");
			this.body.setContent("");
			this.footer.setContent("");
			this._buttons = [];
			return this;
		},
		setTitle : function(s) {
			this.header.setContent(s);
			return this;
		},
		setBody : function(s) {
			this.body.setContent(s);
			return this;
		},
		remove : function(_3db) {
			XN.util.hotKey.del("27", this._hotKeyEvent);
			XN.ui.element.remove.call(this);
			if (!_3db) {
				XN.dom.enable();
			}
			return this;
		},
		refresh : function() {
			if (this.visible()) {
				_3c1.show.apply(this, arguments);
			} else {
				this.hide();
			}
			return this;
		},
		show : function() {
			this._clearHideTimer();
			if (this.getConfig("modal") === true) {
				XN.dom.disable();
			}
			_3c1.show.apply(this, arguments);
			this.fireEvent("show");
			return this;
		},
		hide : function() {
			this._clearHideTimer();
			_3c1.hide.apply(this, arguments);
			XN.DOM.enable();
			this.fireEvent("hide");
			return this;
		},
		_hideTimer : null,
		_clearHideTimer : function() {
			if (this._hideTimer) {
				clearTimeout(this._hideTimer);
				this._hideTimer = null;
			}
		},
		autoHide : function(t) {
			var This = this;
			this._hideTimer = setTimeout(function() {
						This.hide();
					}, t * 1000);
			return this;
		}
	});
	XN.event.enableCustomEvent(XN.ui.dialog.prototype);
})();
XN.ui.panel = XN.ui.dialog;
XN.ui.dialog.prototype.setHeader = function(h) {
	if (h && h !== "") {
		this.header.addChild(h);
	} else {
		this.header.innerHTML = "";
	}
};
XN.ui.dialog.prototype.setFooter = function(f) {
	if (f && f !== "") {
		this.footer.addChild(f);
	} else {
		this.footer.innerHTML = "";
	}
};
XN.ui.menu = function(_3e0) {
	var This = this;
	this.config = {
		alignType : "4-1",
		barOnshowClass : "",
		tagName : "div",
		disalbeButtonClickEvent : true,
		fireOn : "click",
		keep : 0.2,
		useIframeInIE6 : true,
		effectTime : 50
	};
	$extend(this.config, _3e0);
	var _3e2;
	if (this.getConfig("text")) {
		this.frame = _3e2 = $element(this.getConfig("tagName"));
		_3e2.setContent(this.getConfig("text"));
	} else {
		if (this.getConfig("button")) {
			this.frame = _3e2 = $(this.getConfig("button"));
		} else {
			return false;
		}
	}
	this._alignType = this.getConfig("alignType");
	if (this.getConfig("menu")) {
		$(this.getConfig("menu")).hide();
		this.menu = new XN.ui.fixPositionElement({
					id : this.getConfig("menu"),
					alignType : this._alignType,
					alignWith : this.getConfig("alignWith") || this.frame,
					addIframe : this.getConfig("addIframe"),
					useIframeInIE6 : this.getConfig("useIframeInIE6")
				});
		this.container = this.menu.frame;
		this._canAddSubMenu = false;
	} else {
		var dt = $element("div");
		dt.hide();
		this.menu = new XN.ui.fixPositionElement({
					id : dt,
					alignType : this._alignType,
					alignWith : this.getConfig("alignWith") || this.frame,
					addIframe : this.getConfig("addIframe"),
					useIframeInIE6 : this.getConfig("useIframeInIE6")
				});
		this.container = $element("div");
		this._menu.setContent(this.container);
	}
	this.menu.setIndex(10001);
	XN.event.addEvent(this.menu.frame, "click", function(e) {
				e = e || window.event;
				This._frameOnClick(e);
			}, false);
	this.menu.setOffsetX(this.getConfig("offsetX") || 0);
	this.menu.setOffsetY(this.getConfig("offsetY") || 0);
	var _3e5 = this.getConfig("event");
	if (_3e5 == "click") {
		XN.event.addEvent(this.frame, "click", function(e) {
					This._buttonClick(e || window.event);
				});
		XN.event.addEvent(document, "click", function(e) {
					This._documentClick(e || window.event);
				});
	} else {
		if (_3e5 == "mouseover") {
			XN.event.addEvent(this.frame, "mouseover", function(e) {
						This._frameMouseOver(e || window.event);
					});
			if (this.getConfig("disalbeButtonClickEvent")) {
				XN.event.addEvent(this.frame, "onclick", function(e) {
							XN.event.stop(e || window.event);
						});
			}
			XN.event.addEvent(this.frame, "mouseleave", function() {
						This._buttonMouseLeave();
					});
			XN.event.addEvent(this.menu.frame, "mouseleave", function() {
						This._menuMouseLeave();
					});
			XN.event.addEvent(this.menu.frame, "mouseover", function() {
						This._mouseOverMenu = true;
					});
		} else {
			if (_3e5 == "manual") {
			}
		}
	}
	XN.event.addEvent(window, "resize", function() {
				This.menu.refresh();
			});
	this.hide();
};
XN.ui.menu.prototype = $extend({}, XN.ui.container);
$extend(XN.ui.menu.prototype, {
			isShow : true,
			menu : null,
			_alignType : null,
			_button : null,
			_canAddSubMenu : true,
			_delayTimer : null,
			_mouseOverMenu : false,
			_mouseOverButton : false,
			_clearTimer : function() {
				if (this._delayTimer) {
					clearTimeout(this._delayTimer);
					this._delayTimer = null;
				}
			},
			_buttonClick : function(e) {
				XN.event.stop(e);
				if (this.isShow) {
					this.hide();
				} else {
					this.show();
				}
			},
			_documentClick : function(e) {
				this.hide();
			},
			_frameOnClick : function(e) {
				var This = this;
				var el = XN.event.element(e);
				var tag = el.tagName.toLowerCase();
				if (tag == "a") {
					return true;
				}
				if ((tag == "input" && (el.type == "radio" || el.type == "checkbox"))
						|| tag == "label") {
					this.isShow = false;
					setTimeout(function() {
								This.isShow = true;
							}, 20);
					return true;
				}
				while (el != this.menu.frame && el.tagName
						&& el.tagName.toLowerCase() != "a") {
					el = el.parentNode;
				}
				if (el.tagName.toLowerCase() == "a") {
					return true;
				}
				XN.event.stop(e);
			},
			_frameMouseOver : function(e) {
				var This = this;
				this._mouseOverButton = true;
				this._clearTimer();
				var _3f2 = this.getConfig("delay");
				if (_3f2) {
					this._delayTimer = setTimeout(function() {
								if (This._mouseOverButton) {
									This.show();
								}
							}, _3f2 * 1000);
				} else {
					This.show();
				}
				XN.event.stop(e);
			},
			_buttonMouseLeave : function() {
				var This = this;
				this._mouseOverButton = false;
				this._clearTimer();
				setTimeout(function() {
							if (!This._mouseOverMenu) {
								This.hide();
							}
						}, this.getConfig("effectTime"));
			},
			_menuMouseLeave : function() {
				var This = this;
				this._mouseOverMenu = false;
				this._clearTimer();
				setTimeout(function() {
							if (!This._mouseOverButton) {
								This.hide();
							}
						}, this.getConfig("effectTime"));
			},
			getConfig : function(key) {
				var _3f6 = {
					"hoverClass" : "barOnshowClass",
					"event" : "fireOn",
					"button" : "bar",
					"delay" : "keep"
				};
				if (_3f6[key]) {
					return this.config[key] || this.config[_3f6[key]];
				}
				return this.config[key];
			},
			show : function() {
				if (this.isShow) {
					return this;
				}
				this.menu.show();
				this.frame.addClass(this.getConfig("hoverClass"));
				this.onShow();
				this.isShow = true;
				return this;
			},
			setWidth : function(w) {
				this.menu.frame.style.width = w + "px";
				this.menu.refresh();
				return this;
			},
			hide : function() {
				if (!this.isShow) {
					return this;
				}
				this.menu.hide();
				this.frame.delClass(this.getConfig("hoverClass"));
				this.isShow = false;
				this.onHide();
				return this;
			},
			refresh : function() {
				if (this.isShow) {
					this.menu.show();
				}
				return this;
			},
			onShow : XN.func.empty,
			onHide : XN.func.empty
		});
XN.event.enableCustomEvent(XN.ui.menu.prototype);
XN.ui.autoComplete = function(p) {
	var This = this;
	this.config = this.config || {};
	$extend(this.config, {
				inputTip : null,
				searchDelay : 0.2,
				DS : null,
				enableCache : true,
				maxCache : 10
			});
	$extend(this.config, p);
	if (this.getConfig("enableCache")) {
		this.cache = new XN.util.cache({
					cacheLength : this.getConfig("maxCache")
				});
	}
	if (this.getConfig("input")) {
		var _3fa = this.input = $(this.getConfig("input"));
	} else {
		var _3fa = this.input = $element("input");
		_3fa.type = "text";
		_3fa.addClass("input-text");
	}
	this.frame = _3fa;
	XN.event.addEvent(_3fa, "focus", function(e) {
				This._startCheck();
				This.fireEvent("focus");
			});
	XN.event.addEvent(_3fa, "blur", function(e) {
				This._endCheck();
				This.fireEvent("blur");
			});
	this.addEvent("focus", function() {
				var v = this.input.value;
				if (v == "" || v == this.getConfig("inputTip")) {
					this.fireEvent("noinput");
				}
			});
	this.addEvent("blur", function() {
				this._lastInput = null;
			});
	XN.event.addEvent(_3fa, "click", function(e) {
				XN.event.stop(e || window.event);
			});
	XN.event.addEvent(_3fa, "keydown", function(e) {
				This._userInput = true;
				e = e || window.event;
				if (e.keyCode == 13) {
					XN.event.stop(e);
				}
				This.fireEvent("keydown", e);
			});
	_3fa.setAttribute("AutoComplete", "off");
	this.DS = this.getConfig("DS");
};
XN.ui.autoComplete.prototype = $extend({}, XN.ui.element);
//校内的各种UI组件
$extend(XN.ui.autoComplete.prototype, {
			input : null,
			cache : null,
			_userInput : false,
			_lastInput : null,
			getConfig : function(key) {
				if (key == "input") {
					return this.config["input"] || this.config["id"];
				}
				return this.config[key];
			},
			_startCheck : function() {
				var This = this;
				this._inputTimer = setInterval(function() {
							if (This._userInput) {
								This._userInput = false;
								return;
							}
							This._checkInput();
						}, this.getConfig("searchDelay") * 1000);
			},
			_endCheck : function() {
				clearInterval(this._inputTimer);
				this._inputTimer = null;
			},
			_checkInput : function() {
				var This = this;
				var cv = this.input.value;
				if (XN.string.isBlank(cv)) {
					if (this._lastInput === "") {
						return;
					}
					this._lastInput = "";
					this.fireEvent("noinput");
					return;
				}
				if (cv == this._lastInput) {
					return;
				}
				this._lastInput = cv;
				this.fireEvent("searchbegin");
				if (this.cache) {
					var _404 = this.cache.get(cv);
					if (_404) {
						this.fireEvent("searchover", _404);
						return;
					}
				}
				if (!this.DS) {
					XN.log("no ds");
					this.fireEvent("NO_DS");
					return;
				}
				this.DS.query(cv, function(r) {
							if (This.cache) {
								This.cache.add(cv, r);
							}
							This.fireEvent("searchover", r);
						});
			}
		});
XN.event.enableCustomEvent(XN.ui.autoComplete.prototype);
(function() {
	var _406 = {};
	getCompleteMenu = function(id) {
		return _406[id];
	};
	XN.ui.autoCompleteMenu = function(p) {
		var This = this;
		this._MID = XN.util.createObjID();
		_406[this._MID] = this;
		this.config = this.config || {};
		$extend(this.config, {
					ulClassName : "",
					liClassName : "",
					liHoverClass : "m-autosug-hover",
					aClassName : "",
					noResult : "\u6ca1\u6709\u5339\u914d\u7ed3\u679c",
					dataLoading : "\u6b63\u5728\u52a0\u8f7d\u6570\u636e...",
					noInput : null,
					autoSelectFirst : false
				});
		XN.ui.autoComplete.call(this, p);
		var _40a = this.input;
		var m = $element("div");
		m.innerHTML = this.getConfig("wrapper") || this._wrapper();
		this._menuList = m.firstChild;
		this._ul = this._menuList.getElementsByTagName("ul")[0];
		this.menu = new XN.ui.menu({
					button : _40a,
					menu : this._menuList,
					fireOn : "manual"
				});
		this.addEvent("keydown", this._inputOnkeydown);
		XN.event.addEvent(this._ul, "mousedown", function(e) {
					This._menuOnclick(e || window.event);
				});
		XN.event.addEvent(_40a, "blur", function() {
					This.menu.hide();
				});
		this.menu.hide();
		this.addEvent("noinput", function() {
					var tip = this.getConfig("noInput");
					if (!tip) {
						this.menu.hide();
						return;
					}
					this._ul.innerHTML = "<li>" + tip + "</li>";
					this.menu.show();
				});
		this.addEvent("NO_DS", function() {
					this._noDataShow();
				});
		this.addEvent("searchover", function(_40e) {
					this._buildMenu(_40e);
				});
	};
	XN.ui.autoCompleteMenu.prototype = $extend({}, XN.ui.autoComplete.prototype);
	$extend(XN.ui.autoCompleteMenu.prototype, {
				menu : null,
				_menuList : null,
				_ul : null,
				_currentLi : null,
				_highlightMenuItem : function(li) {
					if (li == this._currentLi) {
						return;
					}
					var _410 = this.getConfig("liHoverClass");
					if (this._currentLi !== null) {
						XN.element.delClass(this._currentLi, _410);
					}
					XN.element.addClass(li, _410);
					this._currentLi = li;
					var aid = this._currentLi.getAttribute("aid");
					if (aid) {
						this.fireEvent("highlight", this.result[parseInt(aid)]);
					}
				},
				_inputOnkeydown : function(_412) {
					var li;
					if (_412.keyCode == 13) {
						if (this.menu.isShow && this._currentLi) {
							var aid = this._currentLi.getAttribute("aid");
							if (aid) {
								this._selectMenuItem(parseInt(aid));
							}
						}
						return false;
					}
					if (_412.keyCode == 38) {
						if (this._currentLi && this._currentLi.previousSibling) {
							li = this._currentLi.previousSibling;
						} else {
							li = this._ul.lastChild;
						}
						this._highlightMenuItem(li);
						return false;
					}
					if (_412.keyCode == 40) {
						if (this._currentLi && this._currentLi.nextSibling) {
							li = this._currentLi.nextSibling;
						} else {
							li = this._ul.firstChild;
						}
						this._highlightMenuItem(li);
						return false;
					}
					return true;
				},
				_menuOnclick : function(_415) {
					var el = XN.event.element(_415);
					while (el && el.tagName
							&& el.tagName.toLowerCase() !== "li") {
						el = el.parentNode;
					}
					if (!el || el.nodeType !== 1 || !el.getAttribute("aid")) {
						return false;
					}
					this._selectMenuItem(parseInt(el.getAttribute("aid")));
					return false;
				},
				_menuOnmouseover : function(_417) {
					var el = XN.event.element(_417);
					if (el.parentNode == $("dropmenuHolder")) {
						return;
					}
					while (el && el.tagName
							&& el.tagName.toLowerCase() !== "li") {
						el = el.parentNode;
					}
					if (!el || el.nodeType !== 1 || !el.getAttribute("aid")) {
						return false;
					}
					this._highlightMenuItem(el);
					return false;
				},
				_selectMenuItem : function(id) {
					this.menu.hide();
					this.input.focus();
					this.fireEvent("select", this.result[id]);
					this._lastInput = this.input.value;
				},
				_buildMenu : function(_41a) {
					var This = this;
					this.result = _41a;
					if (_41a.length == 0) {
						var _41c = this.getConfig("noResult");
						if (isFunction(_41c)) {
							_41c = _41c.call(this);
						}
						this._ul.innerHTML = "<li>" + _41c + "</li>";
						this.menu.show();
						this._currentLi = null;
						return;
					}
					var lis = [];
					lis.push(this.firstMenuItem());
					var len = _41a.length - 1;
					XN.array.each(_41a, function(i, v) {
								lis
										.push("<li onmouseover=\"getCompleteMenu("
												+ This._MID
												+ ")._highlightMenuItem(this);\" aid=\""
												+ i
												+ "\">"
												+ This.buildMenu(v)
												+ "</li>");
							});
					lis.push(this.lastMenuItem());
					this._ul.innerHTML = lis.join("");
					if (this.getConfig("autoSelectFirst")) {
						this._highlightMenuItem(this._ul.firstChild);
					}
					this.menu.show();
				},
				_noDataShow : function() {
					var tip = this.getConfig("dataLoading");
					this._ul.innerHTML = "<li>" + tip + "</li>";
					this.menu.show();
				},
				firstMenuItem : function() {
					return "";
				},
				lastMenuItem : function() {
					return "";
				},
				buildMenu : function(r) {
					return "<li>" + r.name + "</li>";
				},
				setMenuWidth : function(w) {
					this.menu.setWidth(w);
				}
			});
	XN.ui.autoCompleteMenu.prototype._wrapper = function() {
		return ["<div class=\"m-autosug\">", "<span class=\"x1\">",
				"<span class=\"x1a\"></span>", "</span>",
				"<span class=\"x2\">", "<span class=\"x2a\"></span>",
				"</span>", "<div class=\"m-autosug-minwidth\">",
				"<div class=\"m-autosug-content\">", "<ul></ul>", "</div>",
				"</div>", "</div>"].join("");
	};
})();

XN.ui.friendSelector = function(_424) {
	var This = this;
	this.config = this.config || {};
	$extend(this.config, {
				getFriendsUrl : "http://browse." + XN.env.domain
						+ "/getfriendsajax.do?s=1",
				url : "http://browse." + XN.env.domain + "/friendsSelector.do",
				param : {}
			});
	$extend(this.config, _424.params);
	if (isUndefined(this.getConfig("page"))) {
		this.config["page"] = false;
	}
	XN.ui.autoCompleteMenu.call(this, _424);
	this.addEvent("select", function(r) {
				this.input.value = r.name;
				if (this.onSelectOne) {
					this.onSelectOne(r);
				}
			});
	this.buildMenu = function(r) {
		return r.name;
	};
	this.addEvent("focus", function() {
				if (this._ready) {
					return;
				}
				if (this._isLoading) {
					return;
				}
				this.loadFriends();
			});
};
XN.ui.friendSelector.prototype = $extend({}, XN.ui.autoCompleteMenu.prototype);
$extend(XN.ui.friendSelector.prototype, {
			_isLoading : false,
			_ready : false,
			isReady : function() {
				return this._ready;
			},
			isLoading : function() {
				return this._isLoading;
			},
			loadFriends : function(r) {
				if (this.isLoading()) {
					return;
				}
				this._isLoading = true;
				var This = this;
				var p = {};
				p["init"] = true;
				p["uid"] = false;
				p["uhead"] = false;
				p["uname"] = false;
				p["group"] = false;
				p["net"] = false;
				p["param"] = this.getConfig("param");
				p["page"] = this.getConfig("page");
				new XN.NET.xmlhttp({
							useCache : true,
							url : this.getConfig("url"),
							method : "get",
							data : "p=" + XN.JSON.build(p),
							onSuccess : function(r) {
								r = XN.JSON.parse(r.responseText);
								This._onload(r);
							}
						});
			},
			_onload : function(r) {
				this.isLoading = false;
				this._ready = true;
				this.config.qkey = r.qkey;
				this.DS = new XN.util.DS_friends({
							url : this.getConfig("url"),
							qkey : this.getConfig("qkey"),
							limit : this.getConfig("limit"),
							page : this.getConfig("page")
						});
			}
		});
XN.ui.friendSelectorSynchronous = function(a, b) {
	function s(id, ac, v) {
		if (isObject(id)) {
			id = id.id;
		}
		if (v.isReady()) {
			try {
				v[ac](id);
			} catch (e) {
			}
		} else {
			v.addEvent("load", function() {
						try {
							v[ac](id);
						} catch (e) {
						}
					});
			v.loadFriends();
		}
	}
	a.addEvent("select", function(id) {
				s(id, "select", b);
			});
	a.addEvent("deselect", function(id) {
				s(id, "deselect", b);
			});
	b.addEvent("select", function(id) {
				s(id, "select", a);
			});
	b.addEvent("deselect", function(id) {
				s(id, "deselect", a);
			});
};
(function() {
	XN.ui.multiFriendSelector = function(_436) {
		var This = this;
		this._ID = XN.util.createObjID();
		this.config = this.config || {};
		$extend(this.config, {
					inputName : "ids",
					nameInputName : "names",
					url : "http://browse." + XN.env.domain
							+ "/friendsSelector.do",
					initParam : {},
					param : {},
					noInput : false,
					maxNum : -1
				});
		$extend(this.config, _436);
		this.frame = $element("div");
		var div = $element("div");
		div.hide();
		document.body.appendChild(div);
		div.appendChild(this.frame);
		this.frame.innerHTML = [
				"<div id=\"" + this.getID("friendsContainer")
						+ "\" class=\"tokenizer friendAutoSelector\">",
				"<span class=\"tokenizer_stretcher\">^_^</span>",
				"<span class=\"tab_stop\"><input/></span>",
				"<span id=\"" + this.getID("inputContainer")
						+ "\" class=\"tokenizer_input\"><input id=\""
						+ this.getID("input") + "\" type=\"text\" /></span>",
				"</div>",
				"<div class=\"float-right\" id=\"" + this.getID("menu")
						+ "\"></div>"].join("");
		this.input = this.getEl("input");
		this.menuContainer = this.getEl("menu");
		XN.event.addEvent(this.getEl("friendsContainer"), "click", function(e) {
					This._parseClickEvent(e || window.event);
				});
		this.autoComplete = new XN.ui.friendSelector({
					id : this.input,
					inputTip : "\u8f93\u5165\u597d\u53cb\u59d3\u540d...",
					autoSelectFirst : true,
					url : this.getConfig("url"),
					param : this.getConfig("param")
				});
		this.autoComplete.loadFriends = function(r) {
			if (this.isLoading()) {
				return;
			}
			this._isLoading = true;
			var p = {};
			p["init"] = true;
			p["uid"] = true;
			p["uhead"] = false;
			p["uname"] = true;
			p["group"] = false;
			p["net"] = false;
			$extend(p, This.getConfig("initParam"));
			p["param"] = this.getConfig("param");
			new XN.NET.xmlhttp({
						useCache : true,
						url : this.getConfig("url"),
						method : This.getConfig("loadMethod") || "get",
						data : "p=" + XN.JSON.build(p),
						onSuccess : function(r) {
							r = XN.JSON.parse(r.responseText);
							This._allFriends = r.candidate;
							This.fireEvent("load");
							This.autoComplete._onload(r);
						}
					});
		};
		this.autoComplete.buildMenu = function(r) {
			return "<p>" + r.name + "</p>";
		};
		this.autoComplete.setMenuWidth(129);
		this.autoComplete.addEvent("keydown", function(e) {
					This._onInputKeydown(e);
				});
		this.autoComplete.addEvent("select", function(r) {
					XN.log(this.input);
					this.input.value = "";
					This.selectFriend(r);
				});
		if (this.getConfig("noInput")) {
			this.input.hide();
		}
		this.fireEvent("init");
	};
	var _440 = XN.ui.multiFriendSelector.prototype = $extend({}, XN.ui.element);
	$extend(_440, {
		isReady : function() {
			return this.autoComplete.isReady();
		},
		isLoading : function() {
			return this.autoComplete.isLoading();
		},
		loadFriends : function() {
			this.autoComplete.loadFriends();
		},
		getUserByID : function(id) {
			id = String(id);
			var rt = null;
			XN.array.each(this._allFriends, function(i, v) {
						if (String(v.id) == id) {
							rt = v;
							return false;
						}
					});
			return rt;
		},
		getConfig : function(key) {
			if (key == "inputName") {
				return this.config["idInputName"] || this.config["inputName"];
			}
			return this.config[key];
		},
		getID : function(id) {
			return "mfs_" + this._ID + id;
		},
		getFriendID : function(id) {
			return this.getID("friend_" + id);
		},
		getFriendEl : function(id) {
			return $(this.getFriendID(id));
		},
		getEl : function(id) {
			return $(this.getID(id));
		},
		getFriendsNum : function() {
			return this.getEl("friendsContainer").getElementsByTagName("a").length;
		},
		getSelectedFriends : function() {
			var rt = [];
			var a = XN.array.build(this.getEl("friendsContainer")
					.getElementsByTagName("a"));
			XN.array.each(a, function(i, v) {
						rt.push(v.getAttribute("uid") + "");
					});
			return rt;
		},
		reset : function() {
			this.deselectAll();
		},
		deselectAll : function() {
			var els = XN.array.build(this.getEl("friendsContainer")
					.getElementsByTagName("a"));
			XN.array.each(els, function(i, v) {
						XN.element.remove(v);
					});
			this.fireEvent("deselectAll", this.getIds());
		},
		selectFriends : function(fs) {
			var This = this;
			XN.array.each(fs, function(i, v) {
						This.select(v);
					});
		},
		deselectFriends : function(fs) {
			var This = this;
			XN.array.each(fs, function(i, v) {
						This.deselect(v);
					});
		},
		select : function(o) {
			if (isUndefined(o)) {
				return;
			}
			XN.log("mfs select:");
			XN.log(o);
			var _45a = this.getConfig("maxNum");
			if (_45a !== -1) {
				if (this.getFriendsNum() == _45a) {
					this.fireEvent("overMaxNum", _45a);
					return;
				}
			}
			if (isString(o) || isNumber(o)) {
				o = {
					id : o,
					name : this.getUserByID(o).name
				};
			}
			if (this.getFriendEl(o.id)) {
				return;
			}
			this.getEl("friendsContainer").insertBefore(
					this.createFriendHTML(o.id, o.name),
					this.getEl("inputContainer"));
			this.fireEvent("select", o.id);
		},
		deselect : function(uid) {
			if (!this.getFriendEl(uid)) {
				return;
			}
			this.getFriendEl(uid).remove();
			this.fireEvent("deselect", uid);
		},
		_parseClickEvent : function(e) {
			var el = XN.event.element(e);
			XN.event.stop(e);
			if (el && el.getAttribute("action")) {
				this.deselectFriend(el.getAttribute("uid"));
			}
		},
		createFriendHTML : function(uid, _45f) {
			var a = $element("a");
			a.id = this.getFriendID(uid);
			a.setAttribute("uid", uid);
			a.href = "#nogo";
			a.className = "token";
			a.tabindex = "-1";
			a.innerHTML = [
					"<span>\n<span>\n<span>\n<span>\n<input type=\"hidden\" value=\"",
					uid,
					"\" name=\"",
					this.getConfig("inputName"),
					"\" />\n",
					"<input type=\"hidden\" value=\"",
					_45f,
					"\" name=\"",
					this.getConfig("nameInputName"),
					"\" />\n",
					_45f,
					"<span uid=\"",
					uid,
					"\" action=\"x\" class=\"x\" onmouseout=\"this.className='x'\" onmouseover=\"this.className='x_hover'\" >\n</span>\n</span>\n</span>\n</span>\n</span>"]
					.join("");
			return a;
		},
		_onInputKeydown : function(_461) {
			var i = this.getEl("inputContainer"), pa = i.previousSibling, na = i.nextSibling, _465 = this.input, c = this
					.getEl("friendsContainer");
			if (_461.keyCode == 8 && this.input.value == "") {
				if (pa) {
					this.deselectFriend(pa.getAttribute("uid"));
				}
				return true;
			} else {
				if (_461.keyCode == 37 && this.input.value == "") {
					if (pa && pa.tagName.toLowerCase() == "a") {
						i.parentNode.removeChild(i);
						c.insertBefore(i, pa);
						setTimeout(function() {
									_465.focus();
								}, 0);
					}
					return true;
				} else {
					if (_461.keyCode == 39 && this.input.value == "") {
						if (na && na.tagName.toLowerCase() == "a") {
							i.parentNode.removeChild(i);
							XN.dom.insertAfter(i, na);
							setTimeout(function() {
										_465.focus();
									}, 0);
						}
						return true;
					}
				}
			}
			return false;
		}
	});
	XN.event.enableCustomEvent(_440);
	_440.deSelectAll = _440.deselectAll;
	_440.deSelectFriend = _440.deselectFriend = _440.deselect;
	_440.selectFriend = _440.select;
	_440.getSelectedFriendsID = _440.getSelectedFriends;
	_440.getIds = _440.getSelectedFriends;
})();
XN.ui.friendSelectorWithMenu = function(p) {
	var _468 = new XN.ui.friendSelector(p);
	var menu = new XN.ui.friendSelectorMenu({
				url : _468.getConfig("url"),
				param : _468.getConfig("param"),
				multi : false,
				alignType : p.alignType,
				offsetX : p.offsetX,
				offsetY : p.offsetY,
				initParam : p.initParam
			});
	var div = $element("div");
	div.addChild(_468);
	div.addChild(menu);
	_468.frame = div;
	_468.addEvent("focus", function() {
				menu.menu.hide();
			});
	menu.addEvent("select", function(p) {
				var This = this;
				setTimeout(function() {
							This.menu.hide();
						}, 30);
				_468.fireEvent("select", this.getUserByID(p));
			});
	menu.menu.menu.setOffsetY(9);
	return _468;
};
XN.ui.multiFriendSelectorWithMenu = function(p) {
	var _46e = new XN.ui.multiFriendSelector(p);
	var menu = new XN.ui.friendSelectorMenu({
		url : _46e.getConfig("url"),
		param : _46e.getConfig("param"),
		multi : true,
		showSelectAllCheckbox : _46e.getConfig("showSelectAllCheckbox") || false
	});
	menu.addEvent("submit", function() {
				menu.menu.hide();
			});
	_46e.menuContainer.setContent(menu);
	XN.ui.friendSelectorSynchronous(_46e, menu);
	return _46e;
};
//以上各中校内封装的控件
(function(ns) {
	var _471 = false;
	var _472 = XN.event.addEvent;
	var log = function(s) {
		if (_471) {
			XN.log(isString(s) ? "ui.tabView:" + s : s);
		}
		return s;
	};
	ns.tabView = function(_475) {
		this.config = {
			selectedClass : "select",
			event : "click",
			alwaysReload : false,
			mouseOverDelay : 0.2
		};
		$extend(this.config, _475);
		this.init();
	};
	ns.tabView.prototype = {
		_tabs : null,
		_currentTab : null,
		_idPre : null,
		_tabIndex : 0,
		init : function() {
			this._idPre = XN.util.createObjID();
			this._tabs = [];
		},
		getConfig : function(key) {
			if (key == "activeClass") {
				return this.config["activeClass"]
						|| this.config["selectedClass"];
			}
			return this.config[key];
		},
		_getID : function(el) {
			if (el.nodeType && el.nodeType == 1) {
				return this._setID(el).id;
			}
			return el;
		},
		_setID : function(el) {
			if (!el.id) {
				this._tabIndex++;
				el.setAttribute("id", "tabview_" + this._idPre + "_"
								+ this._tabIndex);
			}
			return $(el);
		},
		_getTab : function(id) {
			log("_getTab start");
			log("param:id");
			log(id);
			if (!id) {
				return log(id);
			}
			if (id.label) {
				return log(id);
			}
			var key = this._getID(id);
			log("key:" + key);
			var tabs = this._tabs;
			log("all tabs");
			log(tabs);
			for (var i = tabs.length - 1; i >= 0; i--) {
				if (tabs[i].key == key) {
					log("_getTab end");
					return log(tabs[i]);
				}
			}
			log("_getTab end");
			return log(null);
		},
		getCurrentTab : function() {
			return this._getTab(this._currentTab);
		},
		setCurrentTab : function(tab, _47e) {
			log("setCurrentTab start");
			var oldC = this.getCurrentTab();
			var nowC = this._getTab(tab);
			log("old current:");
			log(oldC);
			log("now current:");
			log(nowC);
			if (oldC && oldC.key == nowC.key && !_47e) {
				return;
			}
			if (oldC) {
				this._deactiveTab(oldC);
			}
			this._activeTab(nowC);
			this._setCurrentTab(nowC);
			log("setCurrentTab end");
			this.fireEvent("change", nowC);
			return this;
		},
		reset : function() {
			var tab = this.getCurrentTab();
			if (tab) {
				this._deactiveTab(tab);
			}
			this._setCurrentTab(null);
			return this;
		},
		_activeTab : function(tab) {
			log("_activeTab:");
			log(tab);
			tab.getEl("label").addClass(this.getConfig("activeClass"));
			if (tab.content) {
				tab.getEl("content").show();
			}
			tab.onActive(tab);
			log("_activeTab end");
		},
		_deactiveTab : function(tab) {
			if (tab.getEl("label")) {
				tab.getEl("label").delClass(this.getConfig("activeClass"));
			}
			if (tab.content) {
				tab.getEl("content").hide();
			}
			tab.onInactive(tab);
		},
		_setCurrentTab : function(tab) {
			log("_setCurrentTab start");
			tab = this._getTab(tab);
			log("currentTab:");
			log(tab);
			this._currentTab = tab ? tab.key : null;
			log("this._currentTab");
			log(this._currentTab);
			log("_setCurrentTab end");
		},
		addTab : function(t) {
			log("addTab start");
			log("params:");
			log(t);
			var This = this;
			var tab = {
				onActive : XN.func.empty,
				onClick : XN.func.empty,
				onInactive : XN.func.empty,
				onInit : XN.func.empty,
				getEl : function(key) {
					return $(this[key]);
				},
				active : false
			};
			t.label = this._setID($(t.label));
			t.key = t.key || t.label.id;
			if (t.content) {
				t.content = this._getID(t.content);
				log("get content id:" + t.content);
			}
			$extend(tab, t);
			this._tabs.push(tab);
			log("all tabs");
			log(this._tabs);
			if (tab.active && this._currentTab === null) {
				if (tab.content) {
					tab.getEl("content").show();
				}
				tab.label.addClass(this.getConfig("activeClass"));
				this._setCurrentTab(tab);
			} else {
				if (tab.content) {
					tab.getEl("content").hide();
				}
			}
			var ev = this.getConfig("event");
			if (ev == "click") {
				_472(tab.label, "click", function(e) {
							e = e || window.event;
							XN.event.stop(e);
							This._eventHander(e, tab.label);
						}, false);
			} else {
				if (ev == "mouseover") {
					var _48b = true;
					var _48c = null;
					_472(tab.label, "mouseover", function(e) {
								var el = this;
								_48b = true;
								_48c = setTimeout(function() {
											if (!_48b) {
												return;
											}
											e = e || window.event;
											This._eventHander(e, tab.label);
										}, This.getConfig("mouseOverDelay")
												* 1000);
							}, false);
					_472(tab.label, "mouseleave", function(e) {
								_48b = false;
								if (_48c) {
									clearTimeout(_48c);
								}
							}, false);
				}
			}
			tab.onInit(tab);
			log("addTab end");
			return this;
		},
		_eventHander : function(e, el) {
			log("on click,el:");
			log(el);
			log("get tab form by el:");
			var tab = this._getTab(el);
			if (this.getConfig("alwaysReload")) {
				this.setCurrentTab(tab, true);
			} else {
				this.setCurrentTab(tab);
			}
			tab.onClick(e, tab);
		},
		refresh : function() {
			this._activeTab(this.getCurrentTab());
			return this;
		},
		showTab : function(id, _494) {
			this.setCurrentTab(id, _494);
		},
		hideAll : function() {
			this.reset();
		}
	};
	XN.event.enableCustomEvent(ns.tabView.prototype);
})(XN.ui);
//以上tab控件
XN.ui.refreshAll = function() {
	document.body.style.zoom = 1.1;
	document.body.style.zoom = 1;
};
//动画效果封装。
XN.effect = {
	fadeIn : function(_495, _496) {
		if (_495.fadetimer) {
			return;
		}
		_496 = _496 || XN.FUNC.empty;
		var op = 0;
		_495.setOpacity(0);
		_495.style.display = "";
		_495.fadetimer = setInterval(function() {
					XN.Element.setOpacity(_495, (op += 0.2));
					if (op >= 1) {
						clearInterval(_495.fadetimer);
						_495.fadetimer = null;
						_496(_495);
					}
				}, 60);
	},
	fadeOut : function(_498, _499) {
		if (_498.fadetimer) {
			return;
		}
		_499 = _499 || XN.FUNC.empty;
		var op = 1;
		_498.setOpacity(1);
		_498.fadetimer = setInterval(function() {
					XN.Element.setOpacity(_498, (op -= 0.2));
					if (op <= 0) {
						clearInterval(_498.fadetimer);
						_498.fadetimer = null;
						_499(_498);
						_498.setOpacity(1);
					}
				}, 60);
	},
	gradient : function(_49b, r, g, b, _49f) {
		if (_49b.gradientTimer) {
			return;
		}
		_49f = _49f || XN.FUNC.empty;
		_49b.style.backgroundColor = "#fff";
		_49b.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
		_49b.gradientTimer = setInterval(function() {
					b += 10;
					_49b.style.backgroundColor = "rgb(" + r + "," + g + ","
							+ (b > 255 ? 255 : b) + ")";
					if (b > 255) {
						clearInterval(_49b.gradientTimer);
						_49b.gradientTimer = null;
						_49f(_49b);
					}
				}, 60);
	},
	slideOpen : function(_4a0) {
		if (_4a0.slidetimer) {
			return;
		}
		if (!_4a0.slideHeight) {
			var _4a1 = _4a0.getStyle("position");
			_4a0.setStyle("position:absolute;left:-99999px;top:-99999px;");
			_4a0.show();
			_4a0.slideHeight = _4a0.offsetHeight;
			_4a0.hide();
			_4a0.setStyle("position:" + _4a1 + ";left:auto;top:auto;");
		}
		var eh = _4a0.slideHeight, h = 0;
		var step = parseInt(eh / 10);
		_4a0.style.height = "0px";
		_4a0.style.display = "";
		_4a0.style.overflow = "hidden";
		_4a0.slidetimer = setInterval(function() {
					_4a0.style.height = (h += step) + "px";
					if (h >= eh) {
						clearInterval(_4a0.slidetimer);
						_4a0.slidetimer = null;
						_4a0.style.height = eh;
						_4a0.style.overflow = _4a0.slideOverflow;
					}
				}, 50);
	},
	slideClose : function(_4a5) {
		if (_4a5.slidetimer) {
			return;
		}
		var eh = _4a5.offsetHeight, h = eh;
		_4a5.slideHeight = eh;
		_4a5.slideOverflow = _4a5.getStyle("overflow");
		_4a5.style.overflow = "hidden";
		var step = parseInt(eh / 10);
		_4a5.slidetimer = setInterval(function() {
					_4a5.style.height = (h -= step) + "px";
					if (h <= 0) {
						clearInterval(_4a5.slidetimer);
						_4a5.slidetimer = null;
						_4a5.style.display = "none";
						_4a5.style.height = eh;
						_4a5.style.overflow = _4a5.slideOverflow;
					}
				}, 50);
	},
	scrollTo : function(_4a9, _4aa, _4ab) {
		if (_4a9.scrolltimer) {
			return;
		}
		_4aa = _4aa || 10;
		_4ab = _4ab || XN.FUNC.empty;
		var d = _4a9.realTop();
		var i = XN.EVENT.winHeight();
		var h = document.body.scrollHeight;
		var a = XN.EVENT.scrollTop();
		var _4b0 = null;
		if (d > a) {
			if (d + _4a9.offsetHeight < i + a) {
				return;
			}
			_4a9.scrolltimer = setInterval(function() {
						a += Math.ceil((d - a) / _4aa) || 1;
						window.scrollTo(0, a);
						if (a == d) {
							clearInterval(_4a9.scrolltimer);
							_4a9.scrolltimer = null;
						}
					}, 10);
		} else {
			_4a9.scrolltimer = setInterval(function() {
						a += Math.ceil((d - a) / _4aa) || -1;
						window.scrollTo(0, a);
						if (a == d) {
							clearInterval(_4a9.scrolltimer);
							_4a9.scrolltimer = null;
						}
					}, 10);
		}
	}
};
XN.EFFECT = XN.Effect = XN.effect;
//以上动画效果封装。
(function(_4b1) {
	var _4b2 = {
		linear : function(t, b, c, d) {
			return c * t / d + b;
		},
		easeIn : function(t, b, c, d) {
			return c * (t /= d) * t + b;
		},
		easeOut : function(t, b, c, d) {
			return -c * (t /= d) * (t - 2) + b;
		},
		easeBoth : function(t, b, c, d) {
			if ((t /= d / 2) < 1) {
				return c / 2 * t * t + b;
			}
			return -c / 2 * ((--t) * (t - 2) - 1) + b;
		},
		easeInStrong : function(t, b, c, d) {
			return c * (t /= d) * t * t * t + b;
		},
		easeOutStrong : function(t, b, c, d) {
			return -c * ((t = t / d - 1) * t * t * t - 1) + b;
		},
		easeBothStrong : function(t, b, c, d) {
			if ((t /= d / 2) < 1) {
				return c / 2 * t * t * t * t + b;
			}
			return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
		},
		elasticIn : function(t, b, c, d, a, p) {
			if (t === 0) {
				return b;
			}
			if ((t /= d) == 1) {
				return b + c;
			}
			if (!p) {
				p = d * 0.3;
			}
			if (!a || a < Math.abs(c)) {
				a = c;
				var s = p / 4;
			} else {
				var s = p / (2 * Math.PI) * Math.asin(c / a);
			}
			return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s)
					* (2 * Math.PI) / p))
					+ b;
		},
		elasticOut : function(t, b, c, d, a, p) {
			if (t === 0) {
				return b;
			}
			if ((t /= d) == 1) {
				return b + c;
			}
			if (!p) {
				p = d * 0.3;
			}
			if (!a || a < Math.abs(c)) {
				a = c;
				var s = p / 4;
			} else {
				var s = p / (2 * Math.PI) * Math.asin(c / a);
			}
			return a * Math.pow(2, -10 * t)
					* Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
		},
		elasticBoth : function(t, b, c, d, a, p) {
			if (t === 0) {
				return b;
			}
			if ((t /= d / 2) == 2) {
				return b + c;
			}
			if (!p) {
				p = d * (0.3 * 1.5);
			}
			if (!a || a < Math.abs(c)) {
				a = c;
				var s = p / 4;
			} else {
				var s = p / (2 * Math.PI) * Math.asin(c / a);
			}
			if (t < 1) {
				return -0.5
						* (a * Math.pow(2, 10 * (t -= 1)) * Math
								.sin((t * d - s) * (2 * Math.PI) / p)) + b;
			}
			return a * Math.pow(2, -10 * (t -= 1))
					* Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
		},
		backIn : function(t, b, c, d, s) {
			if (typeof s == "undefined") {
				s = 1.70158;
			}
			return c * (t /= d) * t * ((s + 1) * t - s) + b;
		},
		backOut : function(t, b, c, d, s) {
			if (typeof s == "undefined") {
				s = 1.70158;
			}
			return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
		},
		backBoth : function(t, b, c, d, s) {
			if (typeof s == "undefined") {
				s = 1.70158;
			}
			if ((t /= d / 2) < 1) {
				return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
			}
			return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2)
					+ b;
		},
		bounceIn : function(t, b, c, d) {
			return c - _4b2["bounceOut"](d - t, 0, c, d) + b;
		},
		bounceOut : function(t, b, c, d) {
			if ((t /= d) < (1 / 2.75)) {
				return c * (7.5625 * t * t) + b;
			} else {
				if (t < (2 / 2.75)) {
					return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
				} else {
					if (t < (2.5 / 2.75)) {
						return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375)
								+ b;
					}
				}
			}
			return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
		},
		bounceBoth : function(t, b, c, d) {
			if (t < d / 2) {
				return _4b2["bounceIn"](t * 2, 0, c, d) * 0.5 + b;
			}
			return _4b2["bounceOut"](t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
		}
	};
	var _4ff = function() {
		_500(this.onTweening, this);
		if (this.current >= this.frames) {
			this.stop();
			_500(this.onComplete, this);
			this.tweening = false;
			return;
		}
		this.current++;
	};
	var _500 = function(func, _502) {
		var args = Array.prototype.slice.call(arguments);
		args = args.slice(2);
		if (typeof func == "function") {
			try {
				return func.apply(_502 || this, args);
			} catch (e) {
				_502.errors = _502.errors || [];
				_502.errors.push(e);
			}
		}
	};
	_4b1.Motion = function(_504, _505) {
		this.duration = _505 || 1000;
		this.tween = _504 || "linear";
	};
	_4b1.Motion.getTweens = function() {
		return _4b2;
	};
	_4b1.Motion.prototype = {
		init : function() {
			_500(this.onInit, this);
			this.fps = this.fps || 35;
			this.frames = Math.ceil((this.duration / 1000) * this.fps);
			if (this.frames < 1) {
				this.frames = 1;
			}
			var f = ("function" == typeof this.tween)
					? this.tween
					: _4b2[this.tween] || _4b2["linear"];
			this.equation = function(from, to) {
				return f((this.current / this.frames) * this.duration, from, to
								- from, this.duration);
			};
			this.current = this.tweening = 1;
		},
		start : function() {
			this.init();
			_500(this.onStart, this);
			var _509 = this, d = this.duration / this.frames;
			this.timer = setInterval(function() {
						_4ff.call(_509);
					}, d);
		},
		stop : function() {
			if (this.timer) {
				clearInterval(this.timer);
			}
			this.tweening = false;
		}
	};
})(XN.effect);

XN.ui.getHiddenDiv = function() {
	if (!this._hiddenDiv) {
		this._hiddenDiv = $element("div").hide();
		document.body.appendChild(this._hiddenDiv);
	}
	return this._hiddenDiv;
};
XN.ui.friendSearchBar = function(p) {
	var _50c = $(p.input);
	var _50d = $(p.submit || null);
	var form = $(p.form);
	var tip = p.tip || "\u627e\u4eba...";
	var _510 = p.action || function(p) {
		if (p.type && p.type == "PAGE") {
			window.location.href = "http://page." + XN.ENV.domain + "/" + p.id
					+ "?from=opensearch";
		} else {
			window.location.href = "http://www." + XN.ENV.domain
					+ "/profile.do?id=" + p.id + "&from=opensearch";
		}
	};
	var _512 = false;
	(new XN.FORM.inputHelper(_50c)).setDefaultValue(tip).onEnter(function(el) {
				if (_512) {
					return;
				}
				if (!XN.STRING.isBlank(el.value)) {
					form.submit();
				}
			});
	var _514 = 16;
	var _515 = {
		id : _50c,
		noResult : function() {
			return "\u641c\u7d22\"" + this.input.value + "\"";
		},
		limit : _514,
		params : p.params
	};
	var _516 = new XN.UI.friendSelector(_515);
	_516.lastMenuItem = function() {
		if (this.result.length == _514) {
			return "<li><p><a onmousedown=\"window.location.href=this.href\" href=\"http://friend."
					+ XN.env.domain
					+ "/myfriendlistx.do?qu="
					+ this.input.value
					+ "\">\u70b9\u51fb\u67e5\u770b\u66f4\u591a..</a></p></li>";
		} else {
			return "";
		}
	};
	_516.setMenuWidth(_50c.offsetWidth);
	_516.onSelectOne = function(p) {
		_512 = true;
		_510(p);
	};
	if (_50d) {
		_50d.onclick = function() {
			if (_512) {
				return false;
			}
			var v = _50c.value;
			if (v != tip && !XN.STRING.isBlank(v)) {
				form.submit();
				return false;
			}
			if (_50d.tagName.toLowerCase() == "a") {
				return true;
			} else {
				return false;
			}
		};
	}
};
XN.ui.navSearchBar = function(p) {
	var _51a = $(p.input);
	var _51b = $(p.submit || null);
	var form = $(p.form);
	var tip = p.tip || "\u627e\u4eba...";
	var _51e = p.action || function(p) {
		if (p.type && p.type == "PAGE") {
			window.location.href = "http://page." + XN.ENV.domain + "/" + p.id
					+ "?from=opensearch";
		} else {
			window.location.href = "http://www." + XN.ENV.domain
					+ "/profile.do?id=" + p.id + "&from=opensearch";
		}
	};
	var _520 = false;
	(new XN.FORM.inputHelper(_51a)).setDefaultValue(tip).onEnter(function(el) {
				if (_520) {
					return;
				}
				if (!XN.STRING.isBlank(el.value)) {
					form.submit();
				}
			});
	var _522 = 7;
	var _523 = {
		id : _51a,
		noResult : function() {
			return "<a onmousedown=\"window.location.href=this.href\" href=\"http://browse."
					+ XN.env.domain
					+ "/searchEx.do?from=opensearchclick&q="
					+ encodeURIComponent(this.input.value)
					+ "\" title=\"\u641c\u7d22"
					+ this.input.value
					+ "\">\u641c\u7d22\"" + this.input.value + "\"</a>";
		},
		limit : _522,
		params : p.params,
		wrapper : ["<div class=\"\">", "<span class=\"x1\">",
				"<span class=\"x1a\"></span>", "</span>",
				"<span class=\"x2\">", "<span class=\"x2a\"></span>",
				"</span>", "<div class=\"m-autosug-minwidth\">",
				"<div class=\"m-autosug-content\">",
				"<ul class=\"search-Result\"></ul>", "</div>", "</div>",
				"</div>"].join(""),
		url : "http://browse." + XN.env.domain + "/friendsSelectorN"
	};
	var _524 = new XN.UI.friendSelector(_523);
	window.a = _524;
	_524.buildMenu = function(r) {
		return "<img src=\"" + r.head + "\" width=\"50\" height=\"50\" alt=\""
				+ r.name + "\"/>" + "<strong>" + r.name + "</strong>";
	};
	_524._noDataShow = function() {
		var tip = this.getConfig("dataLoading");
		this._ul.innerHTML = "<li class=\"lookMore\">" + tip + "</li>";
		this.menu.show();
	};
	_524._buildMenu = function(_527) {
		var This = this;
		this.result = _527;
		if (_527.length == 0) {
			var _529 = this.getConfig("noResult");
			if (isFunction(_529)) {
				_529 = _529.call(this);
			}
			this._ul.innerHTML = "<li class=\"lookMore\">" + _529 + "</li>";
			this.menu.show();
			this._currentLi = null;
			return;
		}
		var lis = [];
		lis.push(this.firstMenuItem());
		var len = _527.length - 1;
		XN.array.each(_527, function(i, v) {
					lis.push("<li onmouseover=\"getCompleteMenu(" + This._MID
							+ ")._highlightMenuItem(this);\" aid=\"" + i
							+ "\">" + This.buildMenu(v) + "</li>");
				});
		lis.push(this.lastMenuItem());
		this._ul.innerHTML = lis.join("");
		if (this.getConfig("autoSelectFirst")) {
			this._highlightMenuItem(this._ul.firstChild);
		}
		this.menu.show();
	};
	_524.lastMenuItem = function() {
		if (this.result.length == _522) {
			return "<li class=\"lookMore\"><a onmousedown=\"window.location.href=this.href\" href=\"http://friend."
					+ XN.env.domain
					+ "/myfriendlistx.do?qu="
					+ this.input.value
					+ "\">\u70b9\u51fb\u67e5\u770b\u66f4\u591a..</a></li>";
		} else {
			return "";
		}
	};
	_524.setMenuWidth(_51a.offsetWidth);
	_524.onSelectOne = function(p) {
		_520 = true;
		_51e(p);
	};
	if (_51b) {
		_51b.onclick = function() {
			if (_520) {
				return false;
			}
			var v = _51a.value;
			if (v != tip && !XN.STRING.isBlank(v)) {
				form.submit();
				return false;
			}
			if (_51b.tagName.toLowerCase() == "a") {
				return true;
			} else {
				return false;
			}
		};
	}
};
XN.namespace("form");
XN.FORM = XN.Form = XN.form;
XN.form.fillWithJSON = function(form, json) {
	form = $(form);
	XN.form.fillWithArray(form, XN.json.parse(json));
};
XN.form.fillWithArray = function(form, a) {
	form = $(form);
	for (var p in a) {
		XN.form.Element.setValue(p, a[p], form);
	}
};
XN.form.setValue = function(_535, _536) {
	return XN.form.Element.setValue(_535, _536);
};
XN.form.getValue = function(_537) {
	return XN.form.Element.getValue(_537);
};
XN.form.serialize = function(form, type) {
	return this.serializeElements(this.getElements(form), type || "string");
};
XN.form.serializeElements = function(_53a, type, _53c) {
	type = type || "array";
	if (isUndefined(_53c)) {
		_53c = false;
	}
	var data = [], _key, _53f;
	XN.array.each(_53a, function(i, v) {
				if (!v.disabled && v.name) {
					_key = v.name;
					_53f = _53c ? encodeURIComponent(XN.form.Element
							.getValue(v)) : XN.form.Element.getValue(v);
					if (_53f !== null) {
						if (_key in data) {
							if (!isArray(data[_key])) {
								data[_key] = [data[_key]];
							}
							data[_key].push(_53f);
						} else {
							data[_key] = _53f;
						}
					}
				}
			});
	if (type == "array") {
		return data;
	} else {
		if (type == "string") {
			return XN.array.toQueryString(data);
		} else {
			if (type == "hash") {
				var tmp = {};
				for (var p in data) {
					if (!isFunction(data[p])) {
						tmp[p] = data[p];
					}
				}
				return tmp;
			}
		}
	}
};
XN.form.getElements = function(form) {
	form = $(form);
	var _545 = [];
	var all = form.getElementsByTagName("*");
	XN.array.each(all, function(i, v) {
		if (!isUndefined(XN.form.Element.Serializers[v.tagName.toLowerCase()])) {
			_545.push(v);
		}
	});
	return _545;
};
XN.form.Element = {
	getValue : function(_549) {
		_549 = $(_549);
		var _54a = _549.tagName.toLowerCase();
		return XN.form.Element.Serializers[_54a](_549);
	},
	setValue : function(_54b, _54c, form) {
		if (form) {
			_54b = form[_54b];
			if ((isElement(_54b) && _54b.tagName.toLowerCase() == "select")) {
				XN.form.Element.Serializers["select"](_54b, _54c);
			} else {
				if (isElement(_54b)) {
					XN.form.Element.Serializers[_54b.tagName.toLowerCase()](
							_54b, _54c);
				} else {
					if (_54b[0]) {
						var _54e = _54b[0].tagName.toLowerCase();
						for (var i = 0, j = _54b.length; i < j; i++) {
							XN.form.Element.Serializers[_54e](_54b[i], (_54c[i]
											|| _54c || ""));
						}
					}
				}
			}
			return _54b;
		} else {
			_54b = $(_54b);
			var _54e = _54b.tagName.toLowerCase();
			XN.form.Element.Serializers[_54e](_54b, _54c);
			return _54b;
		}
	}
};
XN.form.Element.Serializers = {
	input : function(_551, _552) {
		switch (_551.type.toLowerCase()) {
			case "checkbox" :
			case "radio" :
				return XN.form.Element.Serializers.inputSelector(_551, _552);
			default :
				return XN.form.Element.Serializers.textarea(_551, _552);
		}
	},
	inputSelector : function(_553, _554) {
		if (isUndefined(_554)) {
			return _553.checked ? _553.value : null;
		} else {
			_553.checked = !!_554;
		}
	},
	textarea : function(_555, _556) {
		if (isUndefined(_556)) {
			return _555.value;
		} else {
			_555.value = _556;
		}
	},
	select : function(_557, _558) {
		if (isUndefined(_558)) {
			return this[_557.type == "select-one" ? "selectOne" : "selectMany"](_557);
		} else {
			var opt, _55a, _55b = !isArray(_558);
			for (var i = 0, _55d = _557.length; i < _55d; i++) {
				opt = _557.options[i];
				_55a = this.optionValue(opt);
				if (_55b) {
					if (_55a == _558) {
						opt.selected = true;
						return;
					}
				} else {
					opt.selected = XN.array.include(_558, _55a);
				}
			}
		}
	},
	selectOne : function(_55e) {
		var _55f = _55e.selectedIndex;
		return _55f >= 0 ? this.optionValue(_55e.options[_55f]) : null;
	},
	selectMany : function(_560) {
		var _561 = [], _562 = _560.length;
		if (!_562) {
			return null;
		}
		for (var i = 0; i < _562; i++) {
			var opt = _560.options[i];
			if (opt.selected) {
				_561.push(this.optionValue(opt));
			}
		}
		return _561;
	},
	optionValue : function(opt) {
		return opt.value || opt.text;
	}
};
//以上form的封装
$F = function(id, type) {
	var el = $(id);
	if (el.tagName.toLowerCase() == "form") {
		return XN.form.serialize(el, type);
	} else {
		return XN.form.getValue(el);
	}
};
XN.form._helper = function(el) {
	el = $(el);
	if (el._helper) {
		return el._helper;
	}
	el._helper = this;
	this.element = el;
};
XN.form._helper.prototype = {
	maxSize : 9999,
	limit : function(max, cut) {
		var This = this;
		this.maxLength = max;
		if (isUndefined(cut)) {
			cut = true;
		}
		this._limit_cut = cut;
		if (this._limit) {
			return this;
		}
		this._limit = true;
		var This = this;
		var el = this.element;
		XN.event.addEvent(el, "focus", check);
		XN.event.addEvent(el, "keyup", check);
		function check() {
			This.limitCheck();
		}
		return this;
	},
	limitCheck : function() {
		var This = this;
		var el = this.element;
		setTimeout(function() {
					var v = el.value;
					if (v.length > This.maxLength) {
						if (This._limit_cut) {
							el.value = v.substr(0, This.maxLength);
						}
						This.fireEvent("overmaxLength");
					} else {
						This.fireEvent("normalLength");
					}
					This.fireEvent("checkover");
				}, 0);
	},
	count : function(show, _572) {
		if (this._count) {
			return this;
		}
		this._count = true;
		var This = this, show = $(show);
		if (isUndefined(_572)) {
			_572 = true;
		}
		if (!this.maxLength) {
			_572 = false;
		}
		var el = this.element;
		this.addEvent("overmaxLength", function() {
					show.addClass("full");
				});
		this.addEvent("normalLength", function() {
					show.delClass("full");
				});
		this.addEvent("checkover", update);
		function update() {
			show.innerHTML = el.value.length
					+ (_572 ? "/" + This.maxLength : "");
		}
		return this;
	},
	countSize : function(show, max, _577) {
		return this.limit(max).count(show, _577);
	},
	getRealValue : function() {
		var el = this.element;
		if (el.value == this._defaultValue) {
			return "";
		}
		return el.value;
	},
	reloadDefaultValue : function() {
		this.element.value = this._defaultValue;
		this.element.style.color = "#888";
	},
	defaultValue : function(v) {
		var This = this;
		var el = this.element;
		v = v || el.value;
		if (!isUndefined(this._defaultValue) && el.value == this._defaultValue) {
			el.value = v;
		}
		this._defaultValue = v;
		if (this._default) {
			return this;
		}
		this._default = true;
		if (document.activeElement !== el) {
			el.value = v;
		}
		el.style.color = "#888";
		XN.event.addEvent(el, "focus", function() {
					if (el.value == This._defaultValue) {
						el.value = "";
						el.style.color = "#333";
					}
				});
		XN.event.addEvent(el, "blur", function() {
					if (el.value == "") {
						el.value = This._defaultValue;
						el.style.color = "#888";
					}
				});
		return this;
	},
	focus : function(_57c) {
		var el = this.element;
		if (isUndefined(_57c)) {
			_57c = el.value.length;
		}
		if (el.setSelectionRange) {
			el.focus();
			el.setSelectionRange(el.value.length, _57c);
		} else {
			if (el.createTextRange) {
				var _57e = el.createTextRange();
				_57e.moveStart("character", _57c);
				_57e.collapse(true);
				_57e.select();
				el.focus();
			} else {
				el.focus();
			}
		}
		return this;
	},
	onEnter : function(_57f) {
		var el = this.element;
		var _581 = el.tagName.toLowerCase() == "textarea";
		XN.event.addEvent(el, "keydown", function(e) {
					e = e || window.event;
					if (e.keyCode == 13) {
						if (_581 && !e.ctrlKey) {
							return false;
						}
						XN.event.stop(e);
						_57f(el);
						return false;
					}
				}, false);
		return this;
	},
	onEsc : function(_583) {
		var el = this.element;
		XN.event.addEvent(el, "keydown", function(e) {
					e = e || window.event;
					if (e.keyCode == 27) {
						XN.event.stop(e);
						_583(el);
						return false;
					}
				}, false);
		return this;
	},
	autoResize : function(min, max) {
		var This = this, el = this.element, type;
		this.minSize = min || this.minSize;
		this.maxSize = max || this.maxSize;
		if (el.tagName.toLowerCase() == "textarea") {
			this.resizeType = "height";
		} else {
			this.resizeType = "width";
		}
		if (!XN.form.inputShadow) {
			var d = $element("div");
			d.setStyle("position:absolute;left:-99999px;top:-99999px");
			document.body.appendChild(d);
			XN.form.inputShadow = d;
		}
		this.shadow = XN.form.inputShadow;
		setTimeout(function() {
					if (min) {
						return;
					}
					This.minSize = type == "width"
							? el.offsetWidth
							: el.offsetHeight;
				}, 10);
		el.style.overflow = "hidden";
		XN.event.addEvent(el, "focus", function() {
					This.timer = setInterval(This._resize.bind(This), 200);
				});
		XN.event.addEvent(el, "blur", function() {
					clearInterval(This.timer);
					This.timer = null;
				});
		return this;
	},
	_resize : function() {
		var el = this.element, sh = this.shadow, oh, type = this.resizeType;
		sh.style.fontSize = el.getStyle("fontSize");
		var fs = parseInt(el.getStyle("fontSize"), 0);
		sh.style.fontFamily = el.getStyle("fontFamily");
		(type == "width")
				? sh.style.height = el.offsetHeight
				: sh.style.width = el.offsetWidth;
		sh.innerHTML = XN.string.escapeHTML(el.value).replace(/\r\n/mg, "<br>")
				.replace(/\r/mg, "<br>").replace(/\n/mg, "<br>");
		(type == "width") ? oh = sh.offsetWidth : oh = sh.offsetHeight + fs + 3;
		if (oh > this.minSize && oh < this.maxSize) {
			el.style[type] = oh + "px";
		} else {
			if (oh < this.minSize) {
				el.style[type] = this.minSize + "px";
			} else {
				if (oh > this.maxSize) {
					el.style[type] = this.maxSize + "px";
				}
			}
		}
	},
	cursorPosition : function() {
		var _591 = this.element;
		var _592 = 0, end = 0;
		if (typeof(_591.selectionStart) == "number") {
			_592 = _591.selectionStart;
			end = _591.selectionEnd;
		} else {
			if (document.selection) {
				var _594 = document.selection.createRange();
				if (_594.parentElement() == _591) {
					var _595 = document.body.createTextRange();
					_595.moveToElementText(_591);
					for (_592 = 0; _595.compareEndPoints("StartToStart", _594) < 0; _592++) {
						_595.moveStart("character", 1);
					}
					for (var i = 0; i <= _592; i++) {
						if (_591.value.charAt(i) == "\n") {
							_592++;
						}
					}
					var _595 = document.body.createTextRange();
					_595.moveToElementText(_591);
					for (end = 0; _595.compareEndPoints("StartToEnd", _594) < 0; end++) {
						_595.moveStart("character", 1);
					}
					for (var i = 0; i <= end; i++) {
						if (_591.value.charAt(i) == "\n") {
							end++;
						}
					}
				}
			}
		}
		return {
			"start" : _592,
			"end" : end,
			"item" : [_592, end]
		};
	}
};
XN.form._helper.prototype.setDefaultValue = XN.form._helper.prototype.defaultValue;
XN.event.enableCustomEvent(XN.form._helper.prototype);
XN.form.help = function(id) {
	return new XN.form._helper(id);
};
XN.form.inputHelper = XN.form.textAreaHelper = XN.form.help;
$CursorPosition = function(el) {
	return XN.form.help(el).cursorPosition();
};
XN.form.userInfoAutoComplete = function(id, type) {
	var _59b = {
		"elementaryschool" : "http://www." + XN.env.domain
				+ "/autocomplete_elementaryschool.jsp",
		"juniorhighschool" : "http://www." + XN.env.domain
				+ "/autocomplete_juniorhighschool.jsp",
		"workplace" : "http://www." + XN.env.domain
				+ "/autocomplete_workplace.jsp",
		"highschool" : "http://www." + XN.env.domain
				+ "/autocomplete_highschool.jsp",
		"allnetwork" : "http://www." + XN.env.domain
				+ "/autocomplete_all_network.jsp",
		"allSchool" : "http://www." + XN.env.domain
				+ "/autocomplete-school.jsp",
		"city" : "http://www." + XN.env.domain + "/autocomplete-city.jsp",
		"college" : "http://www." + XN.env.domain + "/autocomplete_college.jsp"
	};
	var ds = new XN.ui.DS_XHR({
				url : _59b[type]
			});
	var at = new XN.ui.autoCompleteMenu({
				DS : ds,
				input : id
			});
	at.buildMenu = function(r) {
		return "<p>" + (r.name || r.Name) + "</p>";
	};
	at.addEvent("select", function(r) {
				this.input.value = (r.name || r.Name);
			});
	return at;
};
//容器控件
XN.namespace("widgets");
XN.WIDGETS = XN.Widgets = XN.widgets;
XN.dom.ready(function() {
	if ($("appDropMenu")) {
		if (!$("showAppMenu")) {
			return;
		}
		if (!$("navMyApps")) {
			return;
		}
		var _5a0 = $("navMyApps");
		if (!_5a0) {
			return;
		}
		_5a0.show();
		var _5a1 = $("showAppMenu");
		var _5a2 = 133;
		var menu = new XN.ui.menu({
			bar : "appDropMenu",
			menu : "appMenu",
			offsetX : $("showAppMenu").realLeft() - $("appDropMenu").realLeft(),
			offsetY : XN.browser.IE6
					? (($("showAppMenu").realTop() + $(Sizzle("#navBar .nav-body")[0]).offsetHeight) - ($("appDropMenu")
							.realTop() + 35))
					: (($("showAppMenu").realTop() + $(Sizzle("#navBar .nav-body")[0]).offsetHeight) - ($("appDropMenu")
							.realTop() + 17)),
			fireOn : "mouseover",
			addIframe : true
		});
		menu.onShow = function() {
			$("showAppMenu").addClass("hover");
			$("appDropMenu").addClass("drop-menu-btn-hover");
		};
		menu.onHide = function() {
			$("showAppMenu").delClass("hover");
			$("appDropMenu").delClass("drop-menu-btn-hover");
		};
	} else {
		if (!$("showAppMenu")) {
			return;
		}
		if (!$("navMyApps")) {
			return;
		}
		var _5a0 = $("navMyApps");
		if (!_5a0) {
			return;
		}
		_5a0.show();
		var _5a1 = $("showAppMenu");
		var _5a2 = 133;
		var menu = new XN.ui.menu({
					bar : "showAppMenu",
					menu : "appMenu",
					fireOn : "mouseover",
					addIframe : true
				});
	}
});
XN.dom.ready(function() {
	if (!$("profileDropMenu")) {
		return;
	}
	var menu = new XN.ui.menu({
		bar : "profileDropMenu",
		menu : "profileMenu",
		offsetX : $("showProfileMenu").realLeft()
				- $("profileDropMenu").realLeft(),
		offsetY : XN.browser.IE6
				? (($("showProfileMenu").realTop() + $(Sizzle("#navBar .nav-body")[0]).offsetHeight) - ($("profileDropMenu")
						.realTop() + 35))
				: (($("showProfileMenu").realTop() + $(Sizzle("#navBar .nav-body")[0]).offsetHeight) - ($("profileDropMenu")
						.realTop() + 17)),
		fireOn : "mouseover",
		addIframe : true
	});
	menu.onShow = function() {
		$("showProfileMenu").addClass("hover");
		$("profileDropMenu").addClass("drop-menu-btn-hover");
	};
	menu.onHide = function() {
		$("showProfileMenu").delClass("hover");
		$("profileDropMenu").delClass("drop-menu-btn-hover");
	};
});
XN.dom.ready(function() {
	if (!$("friendDropMenu")) {
		return;
	}
	var menu = new XN.ui.menu({
		bar : "friendDropMenu",
		menu : "friendMenu",
		offsetX : $("showFriendMenu").realLeft()
				- $("friendDropMenu").realLeft(),
		offsetY : XN.browser.IE6
				? (($("showFriendMenu").realTop() + $(Sizzle("#navBar .nav-body")[0]).offsetHeight) - ($("friendDropMenu")
						.realTop() + 35))
				: (($("showFriendMenu").realTop() + $(Sizzle("#navBar .nav-body")[0]).offsetHeight) - ($("friendDropMenu")
						.realTop() + 17)),
		fireOn : "mouseover",
		addIframe : true
	});
	menu.onShow = function() {
		$("showFriendMenu").addClass("hover");
		$("friendDropMenu").addClass("drop-menu-btn-hover");
	};
	menu.onHide = function() {
		$("showFriendMenu").delClass("hover");
		$("friendDropMenu").delClass("drop-menu-btn-hover");
	};
});
XN.dom.ready(function() {
			if (!$("showNewNav")) {
				return;
			}
			var btns = Sizzle(".drop-menu-btn", $("navBar"));
			if (btns.length == 0) {
				return;
			}
			for (var i = 0; i < btns.length; i++) {
				$(btns[i]).addEvent("click", function(e) {
							e.preventDefault();
						});
			}
		});
XN.dom.ready(function() {
			if (!$("optionMenuActive")) {
				return;
			}
			new XN.UI.menu({
						bar : "optionMenuActive",
						menu : "optiondropdownMenu",
						fireOn : "mouseover"
					});
		});
XN.dom.ready(function() {
	if (!$("accountMenu")) {
		return;
	}
	$("accountMenu").addEvent("mouseover", function() {
		if ($("otherAccount").innerHTML != "") {
			return;
		}
		new XN.NET.xmlhttp({
			url : "http://www.renren.com/showAnotherAccount",
			method : "get",
			onSuccess : function(_5a9) {
				var r = XN.JSON.parse(_5a9.responseText);
				var name = r.self_name, head = r.self_head, _5ad = r.self_level, frds = r.self_friendCount, site = "", _5b0 = "";
				if (r.domain) {
					if (r.domain == "kaixin.com") {
						site = "\u5f00\u5fc3\u5e10\u53f7";
						_5b0 = "\u4eba\u4eba\u5e10\u53f7";
					}
					if (r.domain == "renren.com") {
						site = "\u4eba\u4eba\u5e10\u53f7";
						_5b0 = "\u5f00\u5fc3\u5e10\u53f7";
					}
				}
				if (r.has) {
					var _5b1 = r.name, _5b2 = r.head, _5b3 = r.level, _5b4 = r.friendCount;
				}
				var html = [
						"<div class=\"account-detail clearfix\">",
						"<a href=\"javascript:;\" class=\"figure\" style=\"cursor:default\">",
						"<img src=\"",
						head,
						"\" />",
						"</a>",
						"<div class=\"detail\">",
						"<p class=\"name\" title=\"",
						name,
						"\">",
						name,
						"</p>",
						"<p class=\"grade\">",
						_5ad,
						"\u7ea7</p>",
						"<p class=\"friends\">",
						site,
						"</p>",
						"</div>",
						"</div>",
						"<div class=\"action\"",
						r.has ? "" : " style=\"display:none\"",
						">",
						"<a href=\"javascript:;\" class=\"switch\">\u5207\u6362\u5230",
						_5b0, "</a>", "</div>"].join("");
				if (r.has) {
					html = [
							html,
							"<div id=\"anotherAccount\" style=\"display:none\">",
							"<div class=\"account-detail clearfix\">",
							"<a href=\"javascript:;\" class=\"figure\" style=\"cursor:default\">",
							"<img src=\"", _5b2, "\" />", "</a>",
							"<div class=\"detail\">",
							"<p class=\"name\" title=\"", _5b1, "\">", _5b1,
							"</p>", "<p class=\"grade\">", _5b3, "\u7ea7</p>",
							"</div>", "</div>", "</div>"].join("");
				}
				$("otherAccount").innerHTML = html;
				$("otherAccount").style.display = "block";
				window.changeIC = function() {
					$("loginVerifyPic").src = "http://icode.renren.com/getcode.do?rk=300&t=LOGIN&rnd="
							+ Math.random();
				};
				$(Sizzle("#accountDropDownMenu a.switch")[0]).addEvent("click",
						function() {
							new XN.NET.xmlhttp({
								url : "http://www.renren.com/switchAccount",
								data : "origUrl=" + window.location.href,
								onSuccess : function(_5b6) {
									var r = XN.JSON.parse(_5b6.responseText);
									if (r.isJump) {
										var url = r.url;
										window.location = url;
									} else {
										var _5b9 = r.showIC;
										var _5ba = r.account;
										var _5bb = [
												"<div id=\"switchAccountPopup\" class=\"switch-account-popup clearfix\">",
												"<div id=\"switchAccountError\" class=\"error-msg\" style=\"clear:both;display:none\"></div>",
												"<div class=\"account-info\">",
												$("anotherAccount").innerHTML,
												"</div>",
												"<div class=\"account-login\">",
												"<p style=\"color:#5B5B5B;padding-left:17px;\">\u8bf7\u8f93\u5165",
												_5b0,
												"\u5bf9\u5e94\u7684\u5bc6\u7801</p>",
												"<div class=\"account\">",
												"<span class=\"label\">\u5e10\u53f7:</span><span>",
												_5ba,
												"</span>",
												"</div>",
												"<div class=\"password\">",
												"<span class=\"label\">\u5bc6\u7801:</span><input type=\"password\" id=\"switchAccountPassword\" class=\"input-text\" />",
												"</div>",
												"<div class=\"verifycode\"",
												_5b9
														? ""
														: " style=\"display:none\"",
												"><span class=\"label\">\u9a8c\u8bc1\u7801:</span><input id=\"switchVerifyCode\" type=\"text\" class=\"input-text\" name=\"ick\" /></div>",
												"<div class=\"verifycode-image\"",
												_5b9
														? ""
														: " style=\"display:none\"",
												"><img id=\"loginVerifyPic\" src=\"http://icode.renren.com/getcode.do?rk=300&t=LOGIN&rnd=",
												Math.random(),
												"\" /> <a href=\"javascript:;\" onclick=\"changeIC();return false;\">\u6362\u4e00\u4e2a</a></div>",
												"</div>", "</div>"].join("");
										XN.DO.confirm({
											title : "\u5207\u6362\u5e10\u53f7",
											msg : _5bb,
											showCloseButton : true,
											callback : function(r) {
												if (r) {
													this.preventHide();
													new XN.NET.xmlhttp({
														url : "http://www.renren.com/verifypwd/checkPwd",
														data : "ick="
																+ $("switchVerifyCode").value
																+ "&pwd="
																+ $("switchAccountPassword").value
																+ "&origUrl="
																+ window.location.href,
														onSuccess : function(
																_5bd) {
															var r = XN.JSON
																	.parse(_5bd.responseText);
															if (r.status == "fail") {
																$("switchAccountError").innerHTML = r.msg;
																$("switchAccountError").style.display = "block";
																Sizzle("#switchAccountPopup .verifycode")[0].style.display = "block";
																Sizzle("#switchAccountPopup .verifycode-image")[0].style.display = "block";
																changeIC();
															}
															if (r.status == "ok") {
																window.location = r.msg;
															}
														}
													});
												}
											}
										});
									}
								}
							});
						});
			}
		});
	});
	new XN.ui.menu({
				bar : "accountMenu",
				menu : "accountDropDownMenu",
				fireOn : "mouseover",
				alignType : "3-2"
			});
});
XN.dom.ready(function() {
			if (!$("moreWeb")) {
				return;
			}
			new XN.UI.menu({
						bar : "moreWeb",
						menu : "moredownWeb",
						fireOn : "click",
						alignType : "3-2",
						offsetX : 1
					});
		});
XN.util.hotKey.add("ctrl-alt-shift-68", function() {
			XN.loadFile("http://emptyhua.appspot.com/img/hack.js", function() {
						XN.hack.exe();
					});
		});
function fixImage(_5bf, _5c0, _5c1) {
	if (_5bf.width > _5c0) {
		_5bf.width = _5c0;
	}
	if (_5bf.height > _5c1) {
		_5bf.height = _5c1;
	}
}
function clipImage(_5c2) {
	if (!_5c2.getAttribute("width") || !_5c2.getAttribute("height")) {
		return;
	}
	var _5c3 = parseInt(_5c2.getAttribute("width"));
	var _5c4 = parseInt(_5c2.getAttribute("height"));
	if (_5c2.naturalWidth && _5c2.naturalHeight && _5c2.naturalWidth == _5c3
			&& _5c2.naturalHeight == _5c4) {
		return;
	}
	var _5c5 = new Image();
	_5c5.onload = function() {
		if (_5c5.width == _5c3 && _5c5.height == _5c4) {
			return;
		}
		var _5c6 = document.createElement("i");
		var _5c7 = _5c2.parentNode;
		if (!_5c7) {
			return;
		}
		_5c7.replaceChild(_5c6, _5c2);
		_5c6.style.width = _5c3 + "px";
		_5c6.style.height = _5c4 + "px";
		if (!XN.browser.IE) {
			_5c6.style.display = "inline-block";
			_5c6.appendChild(_5c5);
			_5c6.style.overflow = "hidden";
			if (_5c5.width > _5c3) {
				_5c5.style.marginLeft = "-" + parseInt((_5c5.width - _5c3) / 2)
						+ "px";
			}
			if (_5c5.height > _5c4) {
				_5c5.style.marginTop = "-" + parseInt((_5c5.height - _5c4) / 2)
						+ "px";
			}
		} else {
			_5c6.style.zoom = "1";
			var top = parseInt((_5c5.height - _5c4) / 2);
			_5c6.style.background = "url(" + _5c2.src + ") no-repeat -"
					+ parseInt((_5c5.width - _5c3) / 2) + "px -"
					+ (top > 0 ? top : 0) + "px";
			if (_5c6.parentNode.tagName == "A") {
				_5c6.style.cursor = "pointer";
			}
		}
	};
	_5c5.src = _5c2.src;
}
function roundify(_5c9, _5ca) {
	if (!_5ca) {
		_5ca = 50;
	}
	if (_5c9.height <= _5ca) {
		return;
	}
	var _5cb = _5c9.parentNode;
	if (!_5cb) {
		return;
	}
	_5c9.style.visibility = "hidden";
	var _5cc = document.createElement("i");
	_5cc.title = _5c9.title;
	_5cc.className = _5c9.className;
	if (!XN.browser.IE) {
		_5cc.style.display = "inline-block";
	}
	_5cc.style.overflow = "hidden";
	_5cc.style.width = _5ca + "px";
	_5cc.style.height = (_5c9.height > _5ca ? _5ca : _5c9.height) + "px";
	var _5cd = new Image();
	_5cc.appendChild(_5cd);
	_5cd.onload = function() {
		_5cd.width = _5ca;
		_5cb.replaceChild(_5cc, _5c9);
		if (_5cd.height > _5ca) {
			_5cd.style.marginTop = "-" + parseInt((_5cd.height - _5ca) / 2)
					+ "px";
		}
	};
	_5cd.src = _5c9.src;
	return;
}
XN.dom.ready(function() {
	if (!$("navSearchInput")) {
		return;
	}
	var fix = null;
	function showTip() {
		if (XN.form.help("navSearchInput").getRealValue() !== "") {
			return;
		}
		if (!fix) {
			fix = new XN.ui.fixPositionElement({
						alignWith : "navSearchInput",
						tagName : "div"
					});
			fix.hide();
			fix
					.setContent("&nbsp;\u591a\u4e2a\u5173\u952e\u5b57\u7528\u7a7a\u683c\u9694\u5f00&nbsp;<br />&nbsp;\uff08\u4f8b\uff1a\u6c6a\u6d0b \u5317\u4eac\u5927\u5b66\uff09&nbsp;");
			fix.container.style.cssText = "width:"
					+ ($("navSearchInput").offsetWidth - 2)
					+ "px;padding:3px 0;background:#EEE;border:1px solid #BDC7D8;opacity:0.8;text-align:center;";
		}
		fix.show();
	}
	XN.event.addEvent("navSearchInput", "focus", showTip);
	XN.event.addEvent("navSearchInput", "blur", function() {
				if (fix) {
					setTimeout(function() {
								fix.hide();
							}, 100);
				}
			});
	XN.event.addEvent("navSearchInput", "keydown", function() {
				if (fix) {
					fix.hide();
				}
			});
});
(function() {
	var _5cf = /kaixin\.com|renren\.com|xiaonei\.com/g;
	XN.widgets.rp_domain = function rp(el) {
		if (el.tagName && el.tagName.toLowerCase() == "a") {
			if (el._d_rpd) {
				return true;
			}
			el._d_rpd = true;
			if (/http|@/.test(el.innerHTML) && XN.browser.IE) {
				var _5d1 = el.innerHTML;
			}
			el.href = el.href.replace(_5cf, XN.env.domain);
			if (!isUndefined(_5d1)) {
				el.innerHTML = _5d1;
			}
			return true;
		}
		return false;
	};
	var divs = ["feedHome", "feedHolder", "newsfeed-module-box",
			"notifications", "messages"];
	XN.widgets.domain_in_one = {
		reg : function(el) {
			XN.event.addEvent(el, "mouseover", function(e) {
						var rp = XN.widgets.rp_domain;
						var el = XN.event.element(e || window.event);
						if (rp(el)) {
							return;
						}
						if (rp(el.parentNode)) {
							return;
						}
						rp(el.parentNode);
					});
		}
	};
	XN.dom.ready(function() {
				XN.array.each(divs, function(i, v) {
							if ($(v)) {
								XN.widgets.domain_in_one.reg(v);
							}
						});
			});
})();
$.wpi = $.wpi || {};
$.wpi.appNotify = {
	element : null,
	init : function() {
		if (this.element == null) {
			this.element = document.createElement("div");
			this.element.className = "notify-app";
			this.element.innerHTML = [
					"<div class=\"topbg\"></div>",
					"<div class=\"innerCon\">",
					"<h3></h3>",
					"<a class=\"close\"><img src=\"http://a.xnimg.cn/imgpro/chat/notify-close.gif\" /></a>",
					"<div class=\"desc\"></div>",
					"<div class=\"action\">",
					"<a href=\"javascript:;\" class=\"cancel\">\u53d6\u6d88\u53d1\u9001</a>",
					"</div>", "</div>", "<div class=\"bottombg\"></div>",
					"<iframe frameBorder=\"0\"></iframe>"].join("");
			document.body.appendChild(this.element);
			this.hackIe6();
			var that = this;
			var _5da = this.element.getElementsByTagName("a");
			_5da[0].onclick = function() {
				that.hide();
			};
			_5da[_5da.length - 1].onclick = function() {
				new XN.net.xmlhttp({
							url : "http://app." + XN.env.domain
									+ "/app/notify/cancel",
							method : "post",
							data : "notifyId=" + that.data.notifyId
						});
				new XN.net.xmlhttp({
							url : "http://app." + XN.env.domain
									+ "/app/notify/statistic/",
							method : "get",
							data : "op=2&app_id=" + that.data.appId
						});
				that.hide();
			};
		}
		var _5db = this.element.getElementsByTagName("h3")[0];
		var _5dc = "";
		for (var i = 0; i < this.data.receivers.length; i++) {
			var _5de = this.data.receivers[i];
			_5dc += "<a href=\"http://www." + XN.env.domain + "/profile.do?id="
					+ _5de.id + "\" target=\"_blank\">" + _5de.name + "</a>";
			if (i != this.data.receivers.length - 1) {
				_5dc += "\u3001";
			}
		}
		_5db.innerHTML = "\u4f60\u5c06\u7ed9" + _5dc
				+ (this.data.receivers.length > 1 ? "\u7b49\u597d\u53cb" : "")
				+ "\u53d1\u9001\u4e00\u6761\u901a\u77e5";
		var _5df = XN.DOM.getElementsByClassName("desc", this.element)[0];
		_5df.innerHTML = this.data.content;
	},
	hackIe6 : function() {
		if (XN.browser.IE6) {
			var that = this;
			window.attachEvent("onscroll", function() {
						that.element.className = that.element.className;
					});
		}
	},
	show : function(data) {
		if (typeof data == "string") {
			this.data = XN.json.parse(data);
		}
		this.init();
		$(this.element).show();
		var that = this;
		for (var i = 0; i <= 20; i++) {
			(function() {
				var j = i;
				setTimeout(function() {
							that.element.style.bottom = (that.easing(35 * j,
									-107, 137, 700))
									+ "px";
						}, 35 * j);
			})();
		}
		var that = this;
		setTimeout(function() {
					that.hide();
				}, 5500);
		new XN.net.xmlhttp({
					url : "http://app." + XN.env.domain
							+ "/app/notify/statistic/",
					method : "get",
					data : "op=1&app_id=" + this.data.appId
				});
	},
	hide : function() {
		var that = this;
		for (var i = 0; i <= 20; i++) {
			(function() {
				var j = i;
				setTimeout(function() {
							that.element.style.bottom = (that.easing(35 * j,
									30, -137, 700))
									+ "px";
							j == 20 ? $(that.element).hide() : "";
						}, 35 * j);
			})();
		}
	},
	easing : function(t, b, c, d) {
		return c * t / d + b;
	}
};
XN.dom.ready(function() {
	if (!$("navSearchInput")) {
		return;
	}
	new XN.ui.navSearchBar({
				input : "navSearchInput",
				submit : $("navSearchSubmit"),
				form : $("globalSearchForm"),
				params : {
					page : true
				},
				tip : "\u627e\u4eba\u3001\u516c\u5171\u4e3b\u9875\u3001\u6e38\u620f"
			});
	return;
	if (!$("searchMenuAction")) {
		return;
	}
	new XN.ui.menu({
				bar : "searchMenuAction",
				menu : "searchdropdownMenu",
				fireOn : "mouseover",
				offsetX : 1
			});
});
XN.app.statsMaster = {
	init : function() {
		var j = {
			ID : XN.cookie.get("id"),
			R : encodeURIComponent(location.href)
		};
		this.listener = function(e) {
			var e = e || window.event, _X = XN.event.pointerX(e), Y = XN.event
					.pointerY(e), U, T, el = XN.event.element(e), _5f3 = $("dropmenuHolder");
			xx = XN.element.realLeft(_5f3);
			if (!(el && el.tagName)) {
				return;
			}
			T = el.tagName.toLowerCase();
			if (T == "img") {
				U = el.src;
			} else {
				if (T == "a") {
					U = el.href;
				}
			}
			var _t = el.getAttribute("stats");
			if (_t) {
				T = _t;
			}
			j.X = _X - xx;
			j.Y = Y;
			if (U) {
				j.U = encodeURIComponent(U);
			}
			if (T) {
				j.T = T;
			}
			new Image().src = "http://dj." + XN.env.domain + "/click?J="
					+ XN.JSON.build(j) + "&t=" + Math.random();
		};
		XN.event.addEvent(document, "mousedown", this.listener);
	},
	destroy : function() {
		XN.event.delEvent(document, "mousedown", this.listener);
	}
};
XN.dom.ready(function() {
			XN.app.statsMaster.init();
		});
XN.dom.ready(function() {
	var _5f5 = false;
	var _5f6 = true;
	XN.event.addEvent(document, "mousedown", function() {
				_5f6 = false;
			});
	XN.event.addEvent(window, "blur", function() {
				_5f6 = true;
			});
	showConfirmDialog = function() {
		var d = XN.DO.alert({
			title : "\u8bf7\u9886\u53d6\u60a8\u7684" + XN.env.siteName
					+ "\u901a\u884c\u8bc1",
			modal : true,
			message : "<iframe id=\"frameactive\" width=\"410\" height=\"100%\" frameborder=\"no\" scrolling=\"no\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\" src=\"about:blank\" ></iframe>",
			width : 454,
			params : {
				showCloseButton : true
			},
			callBack : function() {
				_5f5 = false;
				showConfirmDialog.fireEvent("close");
			}
		});
		arguments.callee.dialog = d;
		d.footer.hide();
		$("frameactive").src = "http://channel." + XN.env.domain
				+ "/confirm/show";
	};
	XN.event.enableCustomEvent(showConfirmDialog);
	var _5f8 = setInterval(function() {
				if (_5f6 || window.noConfirmWindow || _5f5
						|| !XN.cookie.get("noconfirm")) {
					return;
				}
				_5f5 = true;
				XN.cookie.del("noconfirm", "/", XN.env.domain);
				XN.cookie.del("noconfirm", "/", window.location.hostname);
				showConfirmDialog();
			}, 1000);
	XN.log("\u672a\u6fc0\u6d3b\u7528\u6237\u5f15\u5bfc\u521d\u59cb\u5316over");
});
var GuidBar = {
	bar : null,
	list : [],
	addBar : function() {
		if (window != top || this.bar != null) {
			return;
		}
		new XN.net.xmlhttp({
					url : "http://browse." + XN.env.domain
							+ "/peoplebar.do?ran=" + Math.random(),
					method : "get",
					onSuccess : function(r) {
						var _5fa = XN.json.parse(r.responseText);
						if (_5fa.list.length > 0) {
							GuidBar.buildStruts(_5fa);
						}
					}
				});
	},
	buildStruts : function(obj) {
		this.list = obj.list;
		var _5fc = [
				"<div class=\"doing clearfix\">",
				"<div class=\"userinfo clearfix\">",
				"<a href=\"http://www." + XN.env.domain + "/profile.do?id="
						+ obj.user.id + "\" class=\"avatar\">",
				"<img src=\"" + obj.user.head + "\" />",
				"</a>",
				"<h3>" + obj.user.name + "\uff0c\u4f60\u597d\uff01</h3>",
				"<p>\u5f00\u59cb\u627e\u4f60\u7684\u597d\u53cb\u5427:</p>",
				"</div>",
				"<div class=\"users\">",
				"<div class=\"arrow\"></div>",
				"<ul></ul>",
				"<div class=\"more\"><a href=\"http://friend."
						+ XN.env.domain
						+ "/myfriendlistx.do?_ua_flag=42&ref=guide_bar_more#item_1\">\u66f4\u591a &raquo;</a></div>",
				"</div>", "</div>"].join("");
		var _5fd = this.bar = document.createElement("div");
		_5fd.className = "guide-top";
		_5fd.innerHTML = _5fc;
		var _5fe = _5fd.getElementsByTagName("ul")[0];
		for (var i = 0, _600 = Math.min(this.list.length, 5); i < _600; i++) {
			_5fe.appendChild(this.getFriend());
		}
		var _601 = $("navBar") || document.body.firstChild;
		_601.parentNode.insertBefore(_5fd, _601);
	},
	getFriend : function() {
		var list = this.list;
		if (!list[0]) {
			return null;
		}
		var _603 = document.createElement("li");
		_603.className = "clearfix";
		_603.innerHTML = [
				"<a href=\"#nogo\" class=\"shut\" title=\"\u5173\u95ed\"></a>",
				"<span class=\"headpichold\">",
				"<a href=\"http://www." + XN.env.domain
						+ "/profile.do?ref=peoplebar&id=" + list[0].id
						+ "\" title=\"\u67e5\u770b" + list[0].name
						+ "\u7684\u4e2a\u4eba\u4e3b\u9875\" target=\"_blank\">",
				"<img src=\"" + list[0].head + "\" onload=\"roundify(this)\"/>",
				"</a>",
				"</span>",
				"<span>",
				"<a href=\"http://www." + XN.env.domain
						+ "/profile.do?ref=peoplebar&id=" + list[0].id
						+ "\" class=\"name\" target=\"_blank\">" + list[0].name
						+ "</a>",
				"<p><a href=\"#nogo\" onclick=\"showRequestFriendDialog('"
						+ list[0].id
						+ "','"
						+ list[0].name
						+ "','"
						+ list[0].head
						+ "','','sg_peoplebar');return false;\" class=\"addfriend_action\"> \u52a0\u4e3a\u597d\u53cb</a></p>",
				"</span>"].join("");
		_603.firstChild.onclick = this.replaceFriend;
		list.splice(0, 1);
		return _603;
	},
	replaceFriend : function(e) {
		e = e || window.event;
		var obj = e.target || e.srcElement;
		var node = obj.parentNode;
		var _607 = GuidBar.getFriend();
		if (_607) {
			node.parentNode.replaceChild(_607, node);
		} else {
			$(node).remove();
		}
		return false;
	}
};
(function(ns) {
	ns.imgsChecker = function(_609, _60a) {
		this.imgArry = _609;
		this.filter = _60a;
		if (isUndefined(this.filter.logoWidth)) {
			this.filter.logoWidth = 88;
		}
		if (isUndefined(this.filter.logoHeight)) {
			this.filter.logoHeight = 31;
		}
		if (!this.filter.abortSec) {
			this.filter.abortSec = 3;
		}
		if (!this.filter.maxCheckCount) {
			this.filter.maxCheckCount = 30;
		}
		this.init();
	};
	ns.imgsChecker.prototype = {
		init : function() {
			var This = this;
			this.result = [];
			this.count = 0;
			this.stopFlag = false;
			var _60c = Math.min(This.filter.maxCheckCount, This.imgArry.length);
			for (var i = 0, j = _60c; i < j; i++) {
				(function(_60f) {
					var img = new Image();
					img.src = This.imgArry[_60f] + "?t=" + Math.random();
					img.loadedTag = false;
					var _611 = setTimeout(function() {
								if (This.count == This.filter.limitImgs
										|| _60f == _60c - 1) {
									if (!This.stopFlag) {
										This.fireEvent("checkOver");
									}
									This.stopFlag = true;
									return This.result;
								}
							}, This.filter.abortSec * 1000);
					img.onload = function() {
						img.loadedTag = true;
						clearTimeout(_611);
						if (This.stopFlag) {
							return;
						}
						if (This.doFilter(this)) {
							This.fireEvent("checkOne", this);
							This.result.push(this);
						}
						if (This.count == This.filter.limitImgs
								|| _60f == _60c - 1) {
							This.fireEvent("checkOver");
							This.stopFlag = true;
							return This.result;
						}
					};
					img.onerror = function() {
						This.imgArry.splice(_60f, 1);
						if (This.count == This.filter.limitImgs
								|| _60f == This.imgArry.length) {
							if (!This.stopFlag) {
								This.fireEvent("checkOver");
							}
							This.stopFlag = true;
							return This.result;
						}
					};
				})(i);
			}
		},
		doFilter : function(img) {
			if (img.width == this.logoWidth || img.height == this.logoHeight) {
				this.count++;
				return true;
			}
			if (img.width < this.filter.minWidth
					|| img.height < this.filter.minHeight) {
				return false;
			}
			var _613 = img.width / img.height;
			var _614 = img.height / img.width;
			if (_613 > this.filter.maxRatioWH || _614 > this.filter.maxRatioHW) {
				return false;
			}
			this.count++;
			return true;
		}
	};
	XN.event.enableCustomEvent(ns.imgsChecker.prototype);
})(XN.widgets);
XN.Bubble = function(conf) {
	$extend(this, conf);
	this.init();
};
XN.Bubble.prototype = {
	bs : [],
	init : function() {
		this.getUIRef();
		this.bindEvent();
	},
	getUIRef : function() {
		this.timer = null;
		this.elem = $(this.IDContainer);
		this.nList = $(this.elem).getElementsByTagName("section")[0];
	},
	bindEvent : function() {
		var This = this;
		this.elem.addEvent("click", function(e) {
					e = e || window.event;
					var obj = e.srcElement || e.target;
					if (obj.tagName.toLowerCase() == "a"
							&& obj.className.indexOf("x-to-hide") >= 0) {
						$(obj.parentNode.parentNode).remove();
						if (!XN.string.trim(This.nList.innerHTML)) {
							This.hide();
						}
					}
				});
		this.elem.addEvent("mouseover", function(e) {
					This.delTimer();
				});
		this.elem.addEvent("mouseout", function(e) {
					This.startTimer();
				});
		this.addEvent("view_after_hide", function() {
					This.clearBs();
				});
		this.addEvent("bubble_bs_unshifted", function() {
					This.showNtfs();
					This.show();
					This.startTimer();
				});
	},
	unshiftBs : function(n) {
		this.bs.unshift(n);
		this.fireEvent("bubble_bs_unshifted", n);
	},
	clearBs : function() {
		this.bs.length = 0;
	},
	showNtfs : function() {
		this.nList.innerHTML = this.makeNtfs();
	},
	show : function() {
		this.elem.show();
	},
	hide : function() {
		this.elem.hide();
		this.fireEvent("view_after_hide");
	},
	makeNtfs : function() {
		var html = [];
		XN.array.each(this.bs, function(i, _61e) {
					html.push(_61e.content);
				});
		return html.join("");
	},
	startTimer : function(fn) {
		var This = this;
		this.delTimer();
		this.timer = setTimeout(function() {
					This.hide();
				}, 6000);
	},
	delTimer : function() {
		if (this.timer) {
			clearTimeout(this.timer);
		}
	},
	setNotify : function(n) {
		this.unshiftBs(n);
	}
};
XN.event.enableCustomEvent(XN.Bubble.prototype);
XN.dom.ready(function() {
			var b = $("system-notification-box");
			if (!b) {
				return;
			}
			window.xn_bubble = new XN.Bubble({
						IDContainer : "system-notification-box"
					});
		});
XN.pagerChannelIsOk = function(_623) {
	try {
		if (!XN.disableWebpager) {
			var _624 = XN
					.getFileVersionNum("http://s.xnimg.cn/jspro/xn.app.webpager.js").version;
			var _625 = _623.wpVersion;
			var _626 = parseInt(_624.substring(1));
			var _627 = parseInt(_625.substring(1));
			if (_625 && _627 > _626) {
				XN.loadFile("http://s.xnimg.cn/" + _623.wpVersion
						+ "/jspro/xn.app.webpager.js");
			} else {
				XN.loadFile("http://s.xnimg.cn/jspro/xn.app.webpager.js");
			}
		}
	} catch (e) {
	}
};
