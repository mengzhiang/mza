function Interface(_1, _2) {
	if (arguments.length != 2) {
		throw new Error("Interface constructror called with "
				+ arguments.length + " arguments, but expected exactly 2.");
	}
	this.name = _1;
	this.methods = [];
	for (var i = 0; i < _2.length; i++) {
		if (typeof _2[i] != "string") {
			throw new Error("Interface constructor expects method names to be passed in as a string.");
		}
		this.methods.push(_2[i]);
	}
}
function $make(_4) {
	var t = document.createElement("div");
	t.innerHTML = _4;
	return (t.firstChild.nodeType == 1)
			? t.firstChild
			: t.firstChild.nextSibling;
}
Interface.ensureImplements = function(_6) {
	if (arguments.length < 2) {
		throw new Error("function Interface.ensureImplements called with "
				+ arguments.length + " arguments, but expected at least 2.");
	}
	for (var i = 1; i < arguments.length; i++) {
		var _8 = arguments[i];
		if (_8.constructor != Interface) {
			throw new Error("Function Interface.ensureImplements expects arguments two and above to be instance of Interface");
		}
		for (var j = 0; j < _8.methods.length; j++) {
			var _a = _8.methods[j];
			if (!_6[_a] || typeof _6[_a] !== "function") {
				throw new Error("Function Interface.ensrueImplements: object does not implement the "
						+ _8.name
						+ " interface. Method: "
						+ _a
						+ " was not found.");
			}
		}
	}
};
function extendClass(_b, _c) {
	var F = new Function();
	F.prototype = _c.prototype;
	_b.prototype = new F();
	_b.prototype.constructor = _b;
	_b.superClass = _c.prototype;
	_b.prototype.superClass = _c;
	_b.prototype.superPro = _c.prototype;
	_c.prototype.constructor = _c;
}
XN.webpager = {};
XN.webpager.debug = false;
if (window.location.toString().indexOf("webpager_debug") != -1) {
	XN.webpager.debug = true;
}
window.logger = {};
if (XN.browser.IE || !(window.console) || !(window.console.log)) {
	logger.log = function(_e) {
		if (XN.webpager && XN.webpager.debug && window.jash) {
			jash.print(_e);
		}
	};
} else {
	if (window.console && window.console.log) {
		logger.log = function(o) {
			if (XN.webpager && XN.webpager.debug) {
				console.log(o);
			}
		};
	}
}
$extend(XN.webpager, {
	showWinsNum : 0,
	showWins : [],
	curLayout : 0,
	winMap : {},
	$id : 0,
	groups : [],
	showWinNum : 0,
	chatWordNum : 140,
	url : {
		NOTIFY : "http://notify." + XN.env.domain
				+ "/get.notify?view=1&nid=0&limit=10&rand=" + Math.random(),
		DEL_NOTIFY : "http://notify." + XN.env.domain + "/remove.notify",
		OFFLINE_IMG : "http://head.xiaonei.com/photos/0/0/men_tiny.gif",
		WEB_ONLINE : "http://s.xnimg.cn/imgpro/icons/web_online_std.png",
		WEB_ONLINE_IE6 : "http://s.xnimg.cn/imgpro/icons/web_online_ie6.gif",
		RR_ONLINE : "http://s.xnimg.cn/imgpro/icons/rr_online_std.png",
		RR_ONLINE_IE6 : "http://s.xnimg.cn/imgpro/icons/rr_online_ie6.gif",
		WPI_CLOSE : "http://s.xnimg.cn/imgpro/icons/wpi_close_std.png",
		WPI_CLOSE_IE6 : "http://s.xnimg.cn/imgpro/icons/wpi_close_ie6.gif",
		WPI_STATUS_COMMON : "http://s.xnimg.cn/imgpro/icons/wpi_status_common.png",
		WPI_STATUS_HLIGHT : "http://s.xnimg.cn/imgpro/icons/wpi_status_hlight.png"
	},
	btnWidth : 130,
	arrowWidth : 46,
	layerIndex : 1000,
	msg : {
		INPUT_DEFAULT : "\u8bf7\u8f93\u5165\u804a\u5929\u5185\u5bb9",
		TOO_LONG : "\u60a8\u53d1\u9001\u7684\u5185\u5bb9\u8d85\u8fc72000\u5b57, \u53d1\u9001\u5931\u8d25",
		NOTICE : "\u4e3a\u4fdd\u62a4\u4f60\u7684\u9690\u79c1\uff0c\u5c06\u9ed8\u8ba4\u6b64\u5bf9\u8bdd\u4e3a\u6084\u6084\u8bdd\uff01",
		SPAM : {
			"-1" : "\u60a8\u76ee\u524d\u4e0d\u5728\u767b\u5f55\u72b6\u6001\uff0c\u8bf7\u5c1d\u8bd5\u91cd\u65b0\u767b\u5f55\u540e\u518d\u8bd5\u3002\u5982\u679c\u60a8\u4e00\u76f4\u6536\u5230\u8fd9\u4e2a\u4fe1\u606f\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458",
			2 : "\u8be5\u72b6\u6001\u4e0d\u5b58\u5728",
			4 : "\u8bf7\u4e0d\u8981\u53d1\u5e03\u653f\u6cbb\u654f\u611f\u5185\u5bb9\u3001\u8272\u60c5\u5185\u5bb9\u3001\u5546\u4e1a\u5e7f\u544a\u6216\u5176\u4ed6\u4e0d\u6070\u5f53\u5185\u5bb9",
			5 : "\u4f60\u77ed\u65f6\u95f4\u5185\u53d1\u8868\u4e86\u592a\u591a\u76f8\u540c\u7684\u5185\u5bb9"
		}
	},
	isHost : function(id) {
		return this.User.id == id;
	},
	getCurWidth : function() {
		return parseInt(this.webpagerDiv.getStyle("width"));
	},
	getRestWidth : function() {
		var _w = this.leftBundle.offsetWidth || 215;
		var _12 = _w + this.settingDiv.offsetWidth
				+ this.friendsDiv.offsetWidth
				+ this.notificationDiv.offsetWidth + this.backDiv.offsetWidth
				+ this.arrowWidth;
		return this.getCurWidth() - _12;
	},
	getGroupsWidth : function() {
		return XN.element.getStyle(this.taskPanel, "width");
	},
	setAvailableWidth : function() {
		var t = this.getRestWidth();
		this.taskPanel.style.width = (t - 100) + "px";
	},
	hideAllWin : function() {
		XN.array.each(this.groups, function(i, _15) {
					_15.hide();
				});
	},
	getWinNum : function() {
		if (this.tasks) {
			this.tasks.items.length;
		}
		return 0;
	},
	collapseWinTagBy : function(tag) {
		XN.array.each(this.groups, function(i, _18) {
					_18.collapseWinTagBy(tag);
				});
	},
	log : function(msg) {
		if (!XN.DEBUG_MODE) {
			return;
		}
		if (!this.console) {
			this.console = $element("div");
			var tcs = this.console.style;
			tcs.position = "absolute";
			tcs.left = "0";
			tcs.top = "0";
			tcs.width = "300px";
			tcs.color = "white";
			tcs.background = "black";
			tcs.height = "400px";
			tcs.overflow = "scroll";
			try {
				var _1b = document.body || document.documentElement;
			} catch (e) {
			}
			_1b.appendChild(this.console);
		}
		this.console.innerHTML += (msg + "<br/>");
		this.console.scrollTop = this.console.scrollHeight;
	},
	parseStatus : function(_1c) {
		var _1d = "\u7528\u6237\u79bb\u7ebf";
		var _1e = parseInt(_1c);
		var wpu = XN.webpager.url;
		var _20 = XN.browser.IE6 ? "_IE6" : "";
		var _21 = "WEB_";
		var _22 = "http://a.xnimg.cn/n/core/res/webpager/im_idle_dot.gif";
		if ((_1e & 8) == 8) {
			_1d = "\u624b\u673a\u5728\u7ebf";
			_21 = "RR_";
			_22 = wpu[_21 + "ONLINE"];
		} else {
			if ((_1e & 4) == 4) {
				_1d = "\u4eba\u4eba\u684c\u9762\u5728\u7ebf";
				_21 = "RR_";
				_22 = wpu[_21 + "ONLINE"];
			} else {
				if ((_1e & 2) == 2) {
					_1d = "\u7f51\u9875\u5728\u7ebf";
					_22 = wpu[_21 + "ONLINE"];
				}
			}
		}
		return {
			online : _1d,
			online_type : _21,
			icon : _22,
			icon_toread_ie6 : wpu[_21 + "ONLINE" + _20],
			code : parseInt(_1c)
		};
	},
	backLayout : function(_23) {
		_23 = _23 || XN.webpager.persistMgr.saveObj.l;
		if (_23 === undefined) {
			return;
		}
		var _24 = _23.toString(2);
		if (!_23) {
			_24 = "000";
		}
		var len = _24.length;
		for (var i = len; i > 0; i--) {
(function	(_27) {
				if (_24.charAt(_27 - 1) == "1") {
					window.ww = XN.webpager.winMap[len - _27];
					setTimeout(function() {
								XN.webpager.winMap[len - _27].show(undefined,
										false);
							}, 0);
				} else {
					XN.webpager.winMap[len - _27].hide();
				}
			})(i);
		}
	},
	showPager : function(yes) {
		try {
			if (yes) {
				XN.webpager.webpagerDiv.style.left = "";
			} else {
				XN.webpager.webpagerDiv.style.left = "-9999px";
			}
		} catch (e) {
		}
	}
});
XN.webpager.windowInterface = new Interface("XN.webpager.windowInterface", [
				"show", "hide", "remove"]);
XN.webpager.windowGroup = function(_29) {
	this.items = [];
	this.$id = 0;
	this.active = null;
	this.container = $(_29);
	XN.webpager.groups.push(this);
	if (this.bindEvent) {
		this.bindEvent();
	}
};
XN.webpager.windowGroup.prototype = {
	curWinsWidth : 0,
	add : function(obj) {
		this.wrap(obj);
		this.items.push(obj);
		obj.myGroup = this;
		obj.id = XN.webpager.$id++;
		XN.webpager.winMap[obj.id] = obj;
		this.container.insertBefore(obj.element, this.container.firstChild);
		obj.fireEvent("view_window_added");
		return this;
	},
	show : function(obj) {
		XN.array.each(XN.webpager.groups, function(i, _2d) {
					for (index in _2d.items) {
						if (_2d.items[index] && _2d.items[index] != obj
								&& _2d.items[index].tag == obj.tag) {
							try {
								_2d.items[index].hide(false);
							} catch (e) {
								XN.log(e);
							}
						}
					}
				});
		return this;
	},
	showThis : function(obj, _2f) {
		var xws = XN.webpager.winSlider;
		var _31 = xws.isInStack(obj);
		if (_31) {
			if (_31.type == "left") {
				xws.slideUntilShow(obj, "slideRight");
			} else {
				xws.slideUntilShow(obj, "slideLeft");
			}
		} else {
		}
		obj.fireEvent("view_before_show");
		$(obj.element).addClass("actived");
		if (XN.browser.IE6) {
			var _32 = obj.element.getElementsByTagName("article")[0];
			var _33 = obj.element.getElementsByTagName("article")[0].style.width;
			for (var i = 0; i < _32.children.length; i++) {
				_32.children[i].style.width = _33;
			}
			_32.style.visibility = "visible";
			_32.style.zoom = "1";
		}
		obj.fireEvent("view_after_show");
	},
	remove : function(obj) {
		for (var i = 0; i < this.items.length; i++) {
			if (this.items[i] == obj) {
				this.items.splice(i, 1);
				break;
			}
		}
		if (!this.items.length) {
			this.fireEvent("view_no_windows");
		}
		return this;
	},
	hide : function() {
		for (var i = 0; i < this.items.length; i++) {
			if (this.items[i].active || this.items[i].model
					&& this.items[i].model.started) {
				this.items[i].hide();
			} else {
				this.items[i].hide(false);
			}
			this.items[i].active = false;
		}
		var _38 = "000";
		XN.webpager.curLayout = parseInt(_38, 2);
		XN.webpager.persistMgr.saveLayout("l", XN.webpager.curLayout);
	},
	clear : function() {
		for (var i = 0; i < this.items.length; i++) {
			obj.remove();
		}
		this.items = [];
		return this;
	},
	collapseWinTagBy : function(tag) {
		for (var i = 0; i < this.items.length; i++) {
			if (this.items[i].tag == tag) {
				this.items[i].hide();
			}
		}
	},
	wrap : function(obj) {
		var _3d = this;
		var _3e = obj.remove;
		obj.remove = function() {
			_3e.call(obj);
			_3d.remove(obj);
			_3d.location();
		};
		var _3f = obj.show;
		obj.show = function() {
			_3f.apply(obj, arguments);
			_3d.show(obj);
			_3d.location();
		};
	},
	getGroupWidth : function() {
		return XN.element.getStyle(this.container, "width");
	},
	location : function() {
		if (this.container.id == "tasks-panel" && this.active
				&& this.active.element
				&& XN.element.hasClassName(this.active.element, "actived")) {
			var _40 = $("webpager");
			var _41 = XN.element.getPosition(this.active.element.firstChild,
					_40);
			var _42 = _40.offsetWidth - _41.left
					- this.active.element.firstChild.offsetWidth;
			this.active.element.lastChild.style.right = (_42 - 2) + "px";
		} else {
			delete this.active;
		}
	},
	reset : function() {
		this.container.innerHTML = "";
	},
	getLayout : function() {
	},
	saveLayout : function() {
	}
};
XN.event.enableCustomEvent(XN.webpager.windowGroup.prototype);
XN.webpager.WidgetGroup = function(_43) {
	this.items = [];
	this.container = $(_43);
	if (this.bindEvent) {
		this.bindEvent();
	}
};
XN.webpager.WidgetGroup.prototype = {
	add : function(obj) {
		this.items.push(obj);
		obj.myGroup = this;
		this.container.insertBefore(obj.element, this.container.firstChild);
		obj.fireEvent("view_widget_added");
	},
	hide : function() {
		this.container.hide();
	}
};
(function(ns) {
	ns.ConvGroup = function(_46) {
		ns.windowGroup.call(this, _46);
	};
	extendClass(ns.ConvGroup, ns.windowGroup);
	$extend(ns.ConvGroup.prototype, {
				bindEvent : function() {
				},
				add : function(obj) {
					Interface
							.ensureImplements(obj, XN.webpager.windowInterface);
					var _48 = this;
					this.wrap(obj);
					obj.myGroup = this;
					if (this.items.length) {
						this.container.insertBefore(obj.element, this
										.getInsertPoint(obj.beforeThis));
					} else {
						this.container.insertBefore(obj.element,
								this.container.firstChild);
					}
					this.pushItem(obj);
					this.checkOverflow(obj);
					obj.addEvent("view_window_destroy", function() {
								XN.webpager.winSlider.getOneToClose(obj);
								XN.webpager.winSlider.resetPanelWidth();
								XN.webpager.winSlider.checkBtn();
							});
					obj.fireEvent("view_window_added");
					this.fireEvent("view_a_window_added");
					return this;
				},
				pushItem : function(obj) {
					this.items.push(obj);
					XN.webpager.winSlider.pushQueue(obj);
				},
				getInsertPoint : function(_4a) {
					if (_4a) {
						return this.getInsertSibEle(_4a);
					}
					for (var i = this.items.length - 1; i >= 0; i--) {
						if (this.items[i].element.style.display != "none") {
							return this.items[i].element;
						}
					}
				},
				getInsertSib : function(id) {
					var _4d = XN.webpager.persistMgr.saveObj.conv.models;
					var _4e;
					var xw = XN.webpager;
					if (_4d) {
						_4e = _4d.split(",");
						var len = _4e.length;
						for (var i = 0; i < len; i++) {
							if (_4e[i].indexOf(id) != -1) {
								if (i) {
									return _4e[i - 1];
								} else {
									return null;
								}
							}
						}
					}
				},
				getInsertSibEle : function(id) {
					id = this.getInsertSib(id);
					if (!id) {
						return null;
					}
					var xw = XN.webpager;
					var _54 = xw.tasks.items;
					var len = _54.length;
					for (var i = 0; i < len; i++) {
						if (id.indexOf(_54[i].model && _54[i].model.f_id) != -1) {
							return _54[i].element;
						}
					}
					return null;
				},
				checkOverflow : function(obj) {
					var xw = XN.webpager;
					if (this.isOverflow()) {
						XN.webpager.fireEvent("view_too_more_windows", obj);
					} else {
						XN.webpager.fireEvent("view_window_fix");
					}
				},
				isOverflow : function() {
					var xw = XN.webpager;
					var _5a = xw.winSlider;
					var cur = xw.btnWidth * (_5a.showQueue.length);
					window.free = xw.getRestWidth() - cur;
					return cur + 30 > xw.getRestWidth();
				}
			});
	ns.winSlider = {
		init : function() {
			this.getUIRef();
			this.bindEvent();
			this.showQueue = [];
			this.leftHideStack = [];
			this.rightHideStack = [];
		},
		pushQueue : function(obj) {
			if (!obj) {
				return;
			}
			this.showQueue.push(obj);
			XN.webpager.showWinNum = this.showQueue.length;
			return obj;
		},
		unshiftQueue : function(obj) {
			if (!obj) {
				return;
			}
			this.showQueue.unshift(obj);
			XN.webpager.showWinNum = this.showQueue.length;
			return obj;
		},
		pushRight : function(obj) {
			if (!obj) {
				return;
			}
			this.rightHideStack.push(obj);
			return obj;
		},
		pushLeft : function(obj) {
			if (!obj) {
				return;
			}
			this.leftHideStack.push(obj);
			return obj;
		},
		bindEvent : function() {
			var _60 = this;
			XN.webpager.addEvent("view_too_more_windows", function() {
						XN.webpager.showWinNum = Math.floor(XN.webpager
								.getRestWidth()
								/ XN.webpager.btnWidth);
						_60.resetPanelWidth();
						_60.queueToRight();
						_60.show();
						_60.updateNum();
					});
			XN.webpager.addEvent("view_window_fix", function() {
						_60.hide();
						_60.resetPanelWidth();
					});
			XN.webpager.addEvent("view_resize_free_space", function(_61, _62) {
				var _63 = _61 - _62;
				for (var i = 0; i < _63; i++) {
			(function(_65) {
						setTimeout(function() {
							_60.leftToQueue();
							if (i == _63) {
								var _66 = XN.webpager.winSlider.showQueue.length;
								if (_61 != _66) {
									for (i = _66; i < _61; i++) {
										setTimeout(function() {
													_60.rightToQueue();
												}, 10);
									}
								}
							}
						}, 0);
					})(i);
				}
			});
			XN.webpager.addEvent("view_resize_lack_space", function(_67, _68) {
						for (var i = 0; i < _68 - _67; i++) {
							setTimeout(function() {
										_60.queueToLeft();
									}, 0);
						}
						_60.show();
					});
			this.addEvent("slider_queue_added", function(ele) {
						ele && ele.element.show();
						_60.updateNum();
						_60.resetPanelWidth();
					});
			this.addEvent("slider_queue_decrease", function(ele) {
						ele.element.hide();
						_60.updateNum();
						_60.resetPanelWidth();
					});
			if (!XN.browser.IE) {
				XN.event.addEvent(window, "resize", function() {
							_60.resizeCheck();
						});
			}
			this.leftBtn.addEvent("click", function() {
						_60.leftBtn.getElementsByTagName("button")[0].blur();
						_60.slideRight();
					});
			this.rightBtn.addEvent("click", function() {
						_60.rightBtn.blur();
						_60.slideLeft();
						if (XN.browser.IE6) {
							_60.rightBtn.parentNode.parentNode.style.zoom = "1.1";
							_60.rightBtn.parentNode.parentNode.style.zoom = "1";
						}
					});
		},
		getOneToClose : function(obj) {
			var _6d = [];
			XN.array.each(this.showQueue, function(i, win) {
						if (win != obj) {
							_6d.push(win);
						}
					});
			this.showQueue = _6d;
			var _70 = this.rightToQueue();
			if (_70) {
				return;
			}
			this.leftToQueue();
		},
		getUIRef : function() {
			this.leftBtn = $("webpager_slider_left");
			this.rightBtn = $("webpager_slider_right");
		},
		slideLeft : function() {
			if (!this.rightHideStack.length) {
				return;
			}
			if (!this.showQueue.length) {
				return;
			}
			var _71 = this.queueToLeft();
			var _72 = this.rightToQueue();
			return {
				show : _72,
				hide : _71
			};
		},
		slideRight : function() {
			if (!this.leftHideStack.length) {
				return;
			}
			if (!this.showQueue.length) {
				return;
			}
			var _73 = this.queueToRight();
			var _74 = this.leftToQueue();
			return {
				show : _74,
				hide : _73
			};
		},
		queueToRight : function() {
			var _75 = this.pushRight(this.showQueue.shift());
			this.fireEvent("slider_queue_decrease", _75);
			return _75;
		},
		rightToQueue : function() {
			var _76 = this.unshiftQueue(this.rightHideStack.pop());
			this.fireEvent("slider_queue_added", _76);
			return _76;
		},
		queueToLeft : function() {
			var _77 = this.pushLeft(this.showQueue.pop());
			this.fireEvent("slider_queue_decrease", _77);
			return _77;
		},
		leftToQueue : function(_78) {
			if (_78) {
				var _79 = [];
				for (var i = 0; i < this.leftHideStack.length; i++) {
					if (this.leftHideStack[i] != _78) {
						_79.push(this.leftHideStack[i]);
					}
				}
				this.leftHideStack = _79;
			} else {
				_78 = this.leftHideStack.pop();
			}
			var _7b = this.pushQueue(_78);
			this.fireEvent("slider_queue_added", _7b);
			return _7b;
		},
		checkBtn : function() {
			if (!this.leftHideStack.length) {
				this.leftBtn.addClass("disable");
			} else {
				this.leftBtn.delClass("disable");
			}
			if (!this.rightHideStack.length) {
				this.rightBtn.addClass("disable");
			} else {
				this.rightBtn.delClass("disable");
			}
			if (!(this.leftHideStack.length + this.rightHideStack.length)) {
				this.hide();
			}
			this.updateNum();
		},
		resizeCheck : function() {
			var xw = XN.webpager;
			var _7d = xw.winSlider.showQueue.length;
			var _7e = Math.floor((xw.getRestWidth()) / xw.btnWidth);
			if (_7d == _7e) {
				return;
			} else {
				if (_7e > _7d) {
					xw.fireEvent("view_resize_free_space", _7e, _7d);
				} else {
					xw.fireEvent("view_resize_lack_space", _7e, _7d);
				}
			}
		},
		updateNum : function() {
			if (this.leftHideStack.length !== undefined) {
				this.leftBtn.getElementsByTagName("button")[0].innerHTML = this.leftHideStack.length;
				this.leftBtn.title = "\u5de6\u4fa7\u8fd8\u6709"
						+ this.leftHideStack.length + "\u4e2a\u7a97\u53e3";
			} else {
			}
			if (this.leftHideStack.length == 0
					&& this.rightHideStack.length == 0) {
				this.hide();
			}
			if (this.rightHideStack.length !== undefined) {
				this.rightBtn.getElementsByTagName("button")[0].innerHTML = this.rightHideStack.length;
				this.rightBtn.title = "\u53f3\u4fa7\u8fd8\u6709"
						+ this.rightHideStack.length + "\u4e2a\u7a97\u53e3";
			} else {
				this.rightBtn.hide();
			}
		},
		resetPanelWidth : function() {
			var xw = XN.webpager;
			var _80 = xw.winSlider.showQueue.length;
			var _81 = Math.floor((xw.getRestWidth()) / xw.btnWidth);
			var _82 = Math.min(Math.floor((xw.getRestWidth()) / xw.btnWidth),
					this.showQueue.length);
			this.setPanelWidth(_82 * xw.btnWidth);
		},
		setPanelWidth : function(_83) {
			XN.webpager.taskPanel.style.width = _83 + "px";
		},
		isWindowOverflow : function() {
			return XN.webpager.taskPanel.offsetHeight > 26;
		},
		isInStack : function(obj) {
			if (!obj && !XN.DEBUG_MODE) {
				throw "[XN.webpager.winSlider.isInstack] not an object passed in!";
			}
			var ret = false;
			var xw = XN.webpager;
			for (var i = 0; i < this.leftHideStack.length; i++) {
				if (this.leftHideStack[i] == obj) {
					return {
						type : "left"
					};
				}
			}
			for (var i = 0; i < this.rightHideStack.length; i++) {
				if (this.rightHideStack[i] == obj) {
					return {
						type : "right"
					};
				}
			}
			return false;
		},
		slideUntilShow : function(_88, _89) {
			var fn = this[_89];
			var ret = fn.call(this);
			while (ret.show) {
				if (ret.show == _88) {
					return;
				}
				ret = fn.call(this);
			}
		},
		show : function() {
			this.leftBtn.show();
			this.rightBtn.show();
		},
		hide : function() {
			this.leftBtn.hide();
			this.rightBtn.hide();
		}
	};
	XN.event.enableCustomEvent(ns.winSlider);
})(XN.webpager);
XN.webpager.abstractWindow = function(_8c) {
	this.init(_8c);
};
XN.webpager.abstractWindow.prototype = {
	active : false,
	_modelFns : {},
	init : function(_8d) {
		var _8e = this;
		this.element = $element("div");
		this.element.className = "popupwindow";
		this.options = $extend(this.getDefaultOptions(), _8d);
		this.renderWin();
		this.addEvent("view_window_added", function() {
					_8e.getUIRef();
					_8e._addEvent();
					if (_8e.xinit) {
						_8e.xinit();
					}
				});
	},
	getDefaultOptions : function() {
		return {
			canClose : true,
			canMax : false,
			canMin : true
		};
	},
	show : function(_8f, _90) {
		this.myGroup.showThis(this, _90);
		if (_8f === false) {
			return;
		}
		this.fireEvent("view_window_active", "", _90);
	},
	hide : function(_91) {
		$(this.element).delClass("actived");
		this.active = false;
		if (XN.browser.IE6) {
			this.element.getElementsByTagName("article")[0].style.visibility = "hidden";
		}
		if (false === _91) {
			return;
		}
		this.fireEvent("view_window_disactive");
	},
	saveLayout : function(ret, _93) {
		var wp = XN.webpager;
		var _95 = this.setLayout(wp.curLayout, this.id, ret);
		wp.curLayout = _95;
		if (_93 === false) {
			return;
		}
		wp.persistMgr.saveLayout("l", wp.curLayout);
	},
	setLayout : function(_96, _97, ret) {
		if (ret) {
			return (1 << _97 | _96);
		} else {
			_96 = _96.toString(2);
			var len = _96.length;
			_97 = len - _97 - 1;
			var a = _96.substring(0, _97) + "0" + _96.substring(_97 + 1);
			return parseInt(a, 2);
		}
	},
	remove : function() {
		if (!$(this.element)) {
			return;
		}
		$(this.element).remove();
		this.element = null;
		this.fireEvent("view_window_destroy");
	},
	renderWin : function() {
		var _9b = [
				"<div class=\"panelbarbutton\">",
				this.getButton(),
				this.options.canClose
						? "<menu><command class=\"close\" title=\"\u5173\u95ed\">\u5173\u95ed</command></menu>"
						: "",
				"</div>",
				"<article class=\"window\">",
				"<header>",
				this.getHeader(),
				"<menu>",
				this.options.canMin
						? "<command class=\"minimize\" label=\"\u6700\u5c0f\u5316\" title=\"\u6700\u5c0f\u5316\"></command>"
						: "",
				this.options.canMax
						? "<command class=\"outlink\" label=\"\u6700\u5927\u5316\" title=\""
								+ (this.canMaxTitle || "\u6d4f\u89c8\u66f4\u591a")
								+ "\"></command>"
						: "",
				this.options.canClose
						? "<command class=\"close\" label=\"\u5173\u95ed\" title=\"\u5173\u95ed\"></command>"
						: "", "</menu>", "</header>", "<section>",
				this.getContent(), "</section>", "</article>"];
		if (XN.browser.IE) {
			try {
				var _9c = _9b.join("");
				this.element.appendChild(XN.webpager.tools.getDom(_9c));
			} catch (e) {
				if (XN.DEBUG_MODE) {
					alert(_9c + "\n\n" + e.description);
				}
			}
		} else {
			this.element.innerHTML = _9b.join("");
		}
	},
	getButton : function() {
		throw new Error("This class: XN.webpager.abstractWindow is abstract and can not be initial");
	},
	getHeader : function() {
		throw new Error("This class: XN.webpager.abstractWindow is abstract and can not be initial");
	},
	getContent : function() {
		throw new Error("This class: XN.webpager.abstractWindow is abstract and can not be initial");
	},
	getMessage : function() {
		var _9d = [];
		var _9e = this.options.replies;
		for (var i = 0; i < _9e.length; i++) {
			_9d.push(this.makeSection(_9e[i]));
		}
		return _9d.join("");
	},
	getUIRef : function() {
		throw new Error("This class:XN.webpager.abstractWindow is abstract and can not be initial");
	},
	makeSection : function(obj) {
		var _a1 = [];
		_a1.push("<section>", "<header>", "<span class=\"user\">",
				"<a href=\"\">", obj.name, "</a>", "</span>",
				"<span class=\"time\">", obj.time, "</span>", "</header>",
				"<section>", "<p>", obj.content, "</p>", "</section>",
				"<footer>", "<a href=\"#\">\u56de\u590d</a>", "</footer>",
				"</section>");
		return _a1.join("");
	},
	_addEvent : function() {
		var _a2 = this;
		var _a3 = this.element.getElementsByTagName("command");
		XN.array.each(_a3, function(i, v) {
					if (XN.element.hasClassName(v, "close")) {
						$(v).addEvent("click", function() {
									_a2.remove();
									_a2.fireEvent("view_window_close");
									XN.event.stop(arguments[0]);
								});
					} else {
						if (XN.element.hasClassName(v, "outlink")) {
							$(v).addEvent("click", function() {
										_a2.show();
										_a2.fireEvent("view_window_maximize");
									});
						} else {
							if (XN.element.hasClassName(v, "minimize")) {
								$(v).addEvent("click", function() {
											_a2.hide();
										});
							}
						}
					}
				});
		this.button = $(this.element.firstChild);
		$(this.button).addEvent("click", function() {
			if (_a2.activeUnable) {
				return;
			}
			if (XN.element.hasClassName(_a2.element, "actived")) {
				_a2.myGroup.hasActive = false;
				_a2.active = false;
				_a2.hide();
				_a2.fireEvent("ua_collapse_window");
			} else {
				_a2.active = true;
				_a2.myGroup.hasActive = true;
				var _t = _a2.element.getStyle("zIndex");
				if (!_t || _t && (_t < XN.webpager.layerIndex)) {
					_a2.element.style.zIndex = XN.webpager.layerIndex++;
				}
				if (XN.browser.IE6) {
					var _a7 = _a2.element.getElementsByTagName("article")[0];
					var _a8 = _a2.element.getElementsByTagName("article")[0].style.width;
					for (var i = 0; i < _a7.children.length; i++) {
						_a7.children[i].style.width = _a8;
					}
					_a7.style.zoom = "1";
				}
				_a2.show();
				_a2.fireEvent("ua_open_window");
				_a2.myGroup.fireEvent("view_group_has_active");
			}
		});
		var _aa = this.element.getElementsByTagName("form")[0];
		try {
			if (_aa && _aa && /\beditor\b/.test(_aa.className)) {
				var _ab = XN.DOM.getElementsByClassName("button", _aa)[0];
				var _ac = XN.DOM.getElementsByClassName("emotion", _aa)[0];
				$(_ab) && $(_ab).addEvent("click", function(e) {
							_ac.style.display = "block";
							XN.event.stop(e);
						});
				$(_ac) && $(_ac).addEvent("mouseover", function() {
							_ac.active = true;
						}).addEvent("mouseout", function() {
							_ac.active = false;
						});
				var _ae = _aa.getElementsByTagName("textarea")[0];
				this.textarea = $(_ae);
			}
		} catch (e) {
			if (XN.webpager.debug) {
				alert(e);
			}
		}
		if (this.xAddEvent) {
			this.xAddEvent();
		}
	},
	addModelEvent : function(_af, fn, _b1) {
		if (!this._modelFns[_af]) {
			this._modelFns[_af] = [];
		}
		this._modelFns[_af].push(fn);
		if (_b1) {
			_b1.addEvent(_af, fn);
		} else {
			this.model.addEvent(_af, fn);
		}
	},
	destroy : function() {
		var m = this.model;
		XN.array.each(this._modelFns, function(_b3, ary) {
					var len = ary.length;
					for (var i = 0; i < len; i++) {
						m.delEvent(_b3, ary[i]);
					}
				});
		this.remove();
	},
	update : function(obj) {
	},
	$make : function(str) {
		var t = document.createElementByTagName("div");
		t.innerHTML = str;
		return (t.firstChild.nodeType == 3)
				? t.firstChild
				: t.firstChild.nextSibling;
	},
	showTip : function() {
	},
	hideTip : function() {
	}
};
XN.event.enableCustomEvent(XN.webpager.abstractWindow.prototype);
XN.webpager.shareWindow = function(_ba) {
	this.init(_ba);
};
extendClass(XN.webpager.shareWindow, XN.webpager.abstractWindow);
$extend(XN.webpager.shareWindow.prototype, {
	show : function() {
		XN.webpager.shareWindow.superClass.show.apply(this, arguments);
		this.element.getElementsByTagName("textarea")[0].focus();
	},
	getButton : function() {
		return [
				"<img class=\"icon\" height=\"16\" width=\"16\" src=\"http://a.xnimg.cn/n/core/res/webpager/chat-icon.gif\" />",
				" <strong class=\"title\">\u53ef\u7231\u7684\u5e03\u5a03\u5a03</strong>"]
				.join("");
	},
	getHeader : function() {
		return [
				"<figure>",
				"<img height=\"50\" width=\"50\" src=\"" + this.options.head
						+ "\"/>",
				"</figure>",
				"<h4>",
				this.options.name + this.options.type + "\u7684"
						+ this.options.subType,
				"</h4>",
				"<h5 class=\"subheading\"><em class=\"title\">\u8bc4\u4ef7:</em> ",
				this.options.description, "</h5>"].join("");
	},
	getContent : function() {
		var _bb = ["<div class=\"topic hbox\">", "<article class=\"topic\">",
				"<section class=\"topic\">", "</section>",
				"<section class=\"info\">",
				"\u6765\u81ea\uff1a" + this.options.content, "</section>",
				"</article>", "</div>"].join("");
		var _bc = ["<div class=\"dialog hbox\">",
				"<div class=\"dialogs hbox\">", "<article class=\"dialogs\">",
				this.getMessage(), "</article>", "</div>",
				"<div class=\"editor hbox\">",
				"<form class=\"editor\" action=\"\" method=\"post\">",
				"<div class=\"toolbar\">", "</div>", "<textarea></textarea>",
				"</form>", "</div>", "</div>"].join("");
		return _bb + _bc;
	},
	getUIRef : function() {
		this.gspList = this.element.getElementsByTagName("article")[2];
	},
	updateGspList : function() {
		if (XN.browser.IE) {
			var gsp = XN.webpager.tools.getDom(this.getMessage());
			this.gspList.innerHTML = "";
		} else {
			this.gspList.innerHTML = this.getMessage();
		}
	},
	update : function() {
		this.updateGspList();
	}
});
XN.webpager.convWindow = function(_be) {
	this.model = _be.model;
	_be.tag = "conv";
	$extend(this, _be);
	this.init(_be);
	window.test = this;
};
extendClass(XN.webpager.convWindow, XN.webpager.abstractWindow);
$extend(XN.webpager.convWindow.prototype, {
	_modelFns : {},
	getWidth : function() {
		return this.element.offsetWidth;
	},
	show : function(_bf) {
		XN.webpager.convWindow.superClass.show.apply(this, arguments);
		this.active = true;
		if (_bf !== false) {
			this.element.getElementsByTagName("textarea")[0].focus();
		}
		this.myGroup.fireEvent("view_a_window_actived");
	},
	getDefaultOptions : function() {
		this.canMaxTitle = "\u67e5\u770b\u7559\u8a00\u8bb0\u5f55";
		var _c0 = XN.webpager.friendsWindow.superClass.getDefaultOptions
				.call(this);
		return $extend(_c0, {
					canClose : true,
					canMax : true
				});
	},
	getButton : function() {
		var _c1 = XN.webpager.parseStatus(this.options.status);
		return [
				"<img class=\"icon\" height=\"16\" width=\"16\" src=\"http://a.xnimg.cn/n/core/res/webpager/chat-icon.gif\" />",
				" <strong class=\"title\">"
						+ XN.webpager.tools.noMoreThan(this.options.name, 5)
						+ "</strong>",
				"<img ie6src=\"" + _c1.icon_toread_ie6 + "\" title=\"",
				_c1.online, "\" src=\"", _c1.icon, "\"/>",].join("");
	},
	getHeader : function() {
		if (!(this.options.head)) {
			var m = this.options.model;
			XN.webpager.friendbook.getUserInfo(m.f_id, function(o) {
						m.updateProfile({
									id : m.f_id,
									tiny : o[m.f_id].head,
									name : o[m.f_id].name
								});
					});
		}
		return [
				"<figure>",
				"<a href=\"http://www."
						+ XN.env.domain
						+ "/profile.do?id="
						+ this.options.model.f_id
						+ "\" target=\"_blank\"><img height=\"50\" width=\"50\" src=\""
						+ (this.options.head || XN.webpager.url.OFFLINE_IMG)
						+ "\"/></a>",
				"</figure>",
				"<h4>",
				XN.webpager.showNotice ? "\u4f60\u548c" + this.options.name
						+ "\u7684\u7559\u8a00\u677f" : this.options.name,
				"</h4>", "<h5 class=\"subheading\"> ", "</h5>"].join("");
	},
	getContent : function() {
		var _c4 = [
				"<div class=\"dialog hbox\">",
				"<div class=\"dialogs hbox\">",
				"<article class=\"system-notification\"><img class=\"icon\" src=\"http://a.xnimg.cn/imgpro/icons/report.png\" alt=\"\u901a\u77e5\" />"
						+ XN.webpager.msg.NOTICE
						+ "<a href=\"#\" class=\"x-closelink\">\u5173\u95ed</a></article>",
				"<article class=\"dialogs gspList\">",
				this.getMessage(),
				"</article>",
				"</div>",
				"<div class=\"editor hbox\">",
				"<form class=\"editor\" action=\"\" method=\"post\">",
				"<div class=\"toolbar\" style=\"display:none;\">",
				"<ul class=\"main\">",
				"<li><a class=\"button\" title=\"\u8868\u60c5\" href=\"#nogo\"><img src=\"http://a.xnimg.cn/imgpro/icons/statusface/1.gif?ver=1\" /></a></li>",
				"</ul>",
				"<ul class=\"emotion\">",
				"<li><a href=\"#nogo\"><img src=\"http://a.xnimg.cn/imgpro/icons/statusface/16.gif?ver=1\" title=\"\u5927\u7b11\" alt=\"\u5927\u7b11\" emotion=\"(\u5927\u7b11)\"/></a></li><li><a href=\"#nogo\"><img emotion=\"(\u5fae\u7b11)\" alt=\"\u5fae\u7b11\" title=\"\u5fae\u7b11\" src=\"http://a.xnimg.cn/imgpro/icons/statusface/1.gif?ver=1\" /></a></li>",
				"</ul>",
				"<ul class=\"alt\">",
				"<li>",
				"<label><input type=\"checkbox\" /> \u6084\u6084\u8bdd</label>",
				"</li>",
				"</ul>",
				"</div>",
				"<textarea></textarea>",
				"<input type=\"image\" src=\"http://a.xnimg.cn/n/core/res/webpager/send-button.png\" />",
				"</form>", "</div>", "</div>"].join("");
		return _c4;
	},
	makeSection : function(obj) {
		var _c6 = [];
		if (obj.fromuin == XN.webpager.User.id) {
			srcHead = XN.webpager.User.head;
		} else {
			try {
				srcHead = XN.webpager.friendbook.getTiny(obj.fromuin);
			} catch (e) {
			}
		}
		_c6.push("<section>", "<figure class=\"avatar\">", obj.type != "system"
						? "<img width=\"35\" height=\"35\" src=\"" + srcHead
								+ "\" />"
						: "", "</figure>", "<header>", "<span class=\"user\">",
				"<a target=\"_blank\" href=\"http://www." + XN.env.domain
						+ "/profile.do?id=" + obj.fromuin + "\">",
				obj.fromname, "</a>", "</span>", "<span class=\"time\">",
				obj.time, "</span>", "</header>", "<section>", "<p>",
				obj.type == "system" ? obj.msg_content : XN.webpager.tools
						.htmlFilter(obj.msg_content), "</p>", "</section>",
				"<footer>", "</footer>", "</section>");
		return _c6.join("");
	},
	xAddEvent : function() {
		XN.log("[convWindow.prototype.xAddEvent] binding event");
		var _c7 = this;
		function sendAction() {
			if (XN.string.trim(_c7.inputHelper.getRealValue())) {
				var p = {
					name : XN.webpager.User.name,
					head : XN.webpager.User.head,
					msg_content : _c7.inputHelper.getRealValue(),
					time : XN.webpager.tools.getTime()
				};
				var ret = _c7.options.model.checkContent(p.msg_content);
				if (!ret.isOK) {
					_c7.options.model.showSystemMsg(ret.msg);
					return;
				}
				_c7.options.model.sendConv(p);
				_c7.input.value = "";
			}
			_c7.input.blur();
			setTimeout(function() {
						_c7.input.focus();
					}, 10);
		}
		function fuckIE6(evt) {
			var s = XN.webpager.parseStatus(_c7.options.status);
			var o = _c7.button.getElementsByTagName("img")[1];
			if (evt == "view_window_active") {
				o.src = s.icon;
			} else {
				if (evt == "conv_replies_unshift") {
					if (XN.browser.IE6) {
						o && (o.src = s.icon_toread_ie6);
					}
				}
			}
		}
		this.input.addEvent("keydown", function(e) {
					e = e || window.event;
					if (e.keyCode == 13) {
						sendAction();
					}
					if (e.ctrlKey && e.keyCode == 88) {
						if (_c7.model.isActive()) {
							_c7.model.destroy();
						}
					}
				});
		this.sendBtn.addEvent("click", function(e) {
					sendAction();
					XN.event.stop(e);
				});
		this.addEvent("ua_open_window", function() {
					_c7.model.startConv();
					_c7.element.delClass("toread");
				});
		this.addEvent("view_window_active", function() {
					_c7.active = true;
					XN.webpager.BlingMgr.titleBling.stop();
					fuckIE6("view_window_active");
				});
		this.addEvent("view_window_disactive", function() {
					_c7.active = false;
					_c7.model.disactive();
				});
		this.addEvent("view_window_added", function() {
				});
		this.addEvent("view_window_destroy", function() {
					XN.webpager.BlingMgr.titleBling.stop();
					try {
						_c7.model.destroy();
					} catch (e) {
						logger.log(e);
					}
				});
		this.addEvent("view_before_show", function() {
				});
		this.addEvent("view_after_show", function() {
					_c7.gspListScrollBtm();
				});
		this.addEvent("view_window_maximize", function() {
					window.open("http://gossip." + XN.env.domain
									+ "/getgossiplist.do?id="
									+ XN.webpager.User.id + "&f="
									+ _c7.model.f_id, "_blank");
				});
		this.noticeClose.onclick = function() {
			_c7.hideNotice();
			XN.webpager.persistMgr.setWpiCookie("nr", 1, 360);
		};
		this.addModelEvent("conv_replies_unshift", function(_cf) {
					try {
						if (_cf.fromuin != XN.webpager.User.id) {
							if (!_c7.model.isActive() || !_c7.active) {
								if (webpager.isLocalConnect()) {
									XN.webpager.BlingMgr.titleBling.start();
								}
								_c7.hlight();
							}
						}
						_c7.addAConv(_cf);
						if (_cf.fromuin != XN.webpager.User.id) {
							if (!XN.webpager.persistMgr.getWpiCookieBy("rtg")) {
								XN.webpager.persistMgr.setWpiCookie("rtg", "1",
										360);
							}
						}
					} catch (e) {
						logger.log(e);
					}
				});
		this.addModelEvent("conv_replies_replace", function(_d0) {
					_c7.updateGspList();
				});
		this.addModelEvent("conv_destroy", function(msg) {
					_c7.destroy();
				});
		this.addModelEvent("conv_conv_started", function(_d2) {
					XN.webpager.BlingMgr.titleBling.stop();
					_c7.element.delClass("toread");
					if (!_c7.active) {
						_c7.show(_d2);
					}
					_c7.showNotice();
				});
		this.addModelEvent("conv_status_disactive", function() {
					_c7.hide(false);
				});
		this.addModelEvent("conv_profile_updated", function(_d3) {
					_c7.updateHead(_d3.tiny);
				});
		var _d4 = false;
		this.addModelEvent("conv_conv_offline", function() {
			if (!_d4) {
				_d4 = true;
				_c7.addAConv({
					time : XN.webpager.tools.getTime(),
					fromname : "",
					type : "system",
					msg_content : "<p style=\"color:#666;\">\u8be5\u7528\u6237\u76ee\u524d\u4e0d\u5728\u7ebf\uff0c\u53ef\u80fd\u65e0\u6cd5\u9a6c\u4e0a\u56de\u590d\u4f60</p>"
				});
			}
		});
	},
	hlight : function() {
		this.element.addClass("toread");
		if (XN.browser.IE6) {
			var s = this.statusIcon.src;
			this.statusIcon.src = s.substring(0, s.lastIndexOf("_") + 1)
					+ "ie6.gif";
		}
	},
	disHlight : function() {
		this.element.delClass("toread");
		if (XN.browser.IE6) {
			var s = this.statusIcon.src;
			this.statusIcon.src = s.substring(0, s.lastIndexOf("_") + 1)
					+ "std.png";
		}
	},
	xinit : function() {
		this.inputHelper = new XN.form.inputHelper(this.input);
	},
	getMessage : function() {
		var _d7 = [];
		var _d8 = this.model.replies;
		for (var i = 0; i < _d8.length; i++) {
			_d7.unshift(this.makeSection(_d8[i]));
		}
		return _d7.join("");
	},
	showNotice : function() {
		var nr = XN.webpager.persistMgr.getWpiCookieBy("nr");
		if (nr || !XN.webpager.showNotice) {
			this.notice.hide();
		} else {
			this.notice.show();
		}
	},
	hideNotice : function() {
		this.notice.hide();
		XN.webpager.showNotice = false;
	},
	getUIRef : function() {
		this.input = this.element.getElementsByTagName("textarea")[0];
		this.section = this.element.getElementsByTagName("section")[0];
		this.article = this.element.getElementsByTagName("article")[0];
		this.form = this.element.getElementsByTagName("form")[0];
		var _db = this.form.getElementsByTagName("input");
		this.sendBtn = $(_db[_db.length - 1]);
		this.figure = this.element.getElementsByTagName("figure")[0];
		this.headImg = this.figure.getElementsByTagName("img")[0];
		this.btn = this.element.getElementsByTagName("div")[0];
		this.statusIcon = this.btn.getElementsByTagName("img")[1];
		this.gspList = $(Sizzle("article.gspList", this.element)[0]);
		this.notice = $(Sizzle("article.system-notification", this.element)[0]);
		this.noticeClose = $(Sizzle("a.x-closelink", this.notice)[0]);
		var cs = this.section.childNodes;
		var _dd = 312;
		window.gspList = this.gspList;
	},
	updateGspList : function() {
		this.gspList.innerHTML += this.getMessage();
		this.gspListScrollBtm();
	},
	updateHead : function(_de) {
		this.headImg.src = _de;
	},
	updateStatus : function(obj) {
		var sta = XN.webpager.parseStatus(obj.status);
		this.statusIcon.src = sta.icon;
	},
	gspListScrollBtm : function() {
		this.gspList.scrollTop = this.gspList.scrollHeight;
	},
	update : function() {
		this.updateGspList();
	},
	addAConv : function(_e1) {
		if (XN.browser.IE) {
			try {
				this.gspList.appendChild(XN.webpager.tools.getDom(this
						.makeSection(_e1)));
			} catch (e) {
				logger
						.log("addAConv\u7684\u65f6\u5019\u53d1\u751f\u5f02\u5e38!");
				logger.log(e);
			}
		} else {
			this.gspList.appendChild($make(this.makeSection(_e1)));
		}
		this.gspListScrollBtm();
	},
	showConv : function(_e2) {
	},
	isInStack : function() {
		return XN.webpager.winSlider.isInStack(this);
	},
	addModelEvent : function(_e3, fn) {
		if (!this._modelFns[_e3]) {
			this._modelFns[_e3] = [];
		}
		this._modelFns[_e3].push(fn);
		this.model.addEvent(_e3, fn);
	},
	destroy : function() {
		var m = this.model;
		XN.array.each(this._modelFns, function(_e6, ary) {
					var len = ary.length;
					for (var i = 0; i < len; i++) {
						m.delEvent(_e6, ary[i]);
					}
				});
		this.remove();
	}
});
XN.webpager.friendsWindow = function(_ea) {
	this.type = "friendsWindow";
	_ea.tag = "system";
	this.model = _ea && _ea.model;
	$extend(this, _ea);
	this.init(_ea);
	this.model.init();
	$(this.element).addClass("friends-panel");
};
extendClass(XN.webpager.friendsWindow, XN.webpager.abstractWindow);
$extend(XN.webpager.friendsWindow.prototype, {
	curLiIndex : -1,
	xinit : function() {
		var _eb = this;
		_eb.curValue = "";
		_eb._searchHelper = XN.form.help(this.friendSearch)
				.setDefaultValue("\u641c\u7d22\u597d\u53cb");
		setInterval(function() {
					if (_eb._searchHelper.getRealValue() != _eb.curValue) {
						_eb.curValue = _eb._searchHelper.getRealValue();
						_eb.fireEvent("view_search_value_change", _eb.curValue);
					}
				}, 800);
	},
	xAddEvent : function() {
		XN.log("[friendWindow.prototype.xaddEvent] binding event");
		var _ec = this;
		this.addEvent("ua_open_window", function(_ed) {
					var _ee = "100";
					XN.webpager.curLayout = parseInt(_ee, 2);
					XN.webpager.persistMgr.saveLayout("l",
							XN.webpager.curLayout);
				});
		this.addEvent("ua_collapse_window", function(_ef) {
					var _f0 = "000";
					XN.webpager.curLayout = parseInt(_f0, 2);
					XN.webpager.persistMgr.saveLayout("l",
							XN.webpager.curLayout);
				});
		this.addEvent("view_window_active", function(_f1, _f2) {
					_ec.friendSearch.value = "";
					_ec.model.fetOnlineFriend();
					if (_f2 !== false) {
						_ec._searchHelper.focus();
					}
				});
		this.addEvent("view_window_disactive", function(_f3) {
					_ec.friendList.innerHTML = "";
				});
		this.friendList.addEvent("click", function(e) {
					e = e || window.event;
					var ta = e.srcElement || e.target;
					if (ta.getAttribute("userId")) {
						_ec.fireEvent("selectAFriend", _ec.model.map[ta
										.getAttribute("userId")]);
						XN.webpager.Conv.findConv(_ec.model.map[ta
								.getAttribute("userId")]);
					}
				});
		this.searchReset.addEvent("click", function() {
					_ec.friendSearch.value = "";
					_ec.friendSearch.focus();
				});
		this.addEvent("view_search_value_change", function(_f6) {
					if (_f6) {
						_ec.searchReset.show();
					} else {
						_ec.searchReset.hide();
					}
					var _f7 = XN.webpager.friendbook.search(_f6);
					_ec.updateFriends(_f7);
					_ec._searchReset();
				});
		this.addEvent("view_window_disactive", function() {
					_ec._searchReset();
				});
		XN.event.addEvent(this.friendSearch, "keydown", function(e) {
					if (!_ec.active) {
						return;
					}
					e = e || window.event;
					if (e.keyCode == 38) {
						_ec.selectedFriend = _ec.searchMove("up");
					} else {
						if (e.keyCode == 40) {
							_ec.selectedFriend = _ec.searchMove("down");
						} else {
							if (e.keyCode == 13) {
								var ta = _ec.selectedFriend;
								if (ta && ta.getAttribute("userId")) {
									_ec.fireEvent("selectAFriend",
											_ec.model.map[ta
													.getAttribute("userId")]);
									XN.webpager.Conv.findConv(_ec.model.map[ta
											.getAttribute("userId")]);
								}
								XN.event.stop(e);
							}
						}
					}
				});
		this.model.addEvent("friendbook_count_got", function(_fa) {
					setTimeout(function() {
								_ec.updateCount(_fa);
							}, 0);
				});
		this.model.addEvent("friendbook_friends_got", function(obj) {
					_ec.updateFriends(obj.friends);
				});
		this.model.addEvent("friendbook_before_friends_got", function(obj) {
					_ec.friendList.innerHTML = "<li>\u6b63\u5728\u52a0\u8f7d...</li>";
				});
	},
	searchMove : function(_fd) {
		var _fe = this.curLiIndex;
		var _ff = this.friendList.childNodes;
		var _100 = _ff.length;
		if (_fe >= 0) {
			$(_ff[_fe]).delClass("current");
		}
		if (_fd == "up") {
			--_fe;
		} else {
			++_fe;
			_fe = _fe > _100 - 1 ? _100 - 1 : _fe;
		}
		_fe = _fe < 0 ? 0 : _fe;
		this.curLiIndex = _fe;
		$(_ff[_fe]).toggleClass("current");
		return _ff[_fe];
	},
	_searchReset : function() {
		this.curLiIndex = -1;
		this.selectedFriend && this.selectedFriend.delClass("current");
	},
	toggleSelect : function(li) {
		$(li).toggleClass("current");
	},
	getDefaultOptions : function() {
		var _102 = XN.webpager.friendsWindow.superClass.getDefaultOptions
				.call(this);
		return $extend(_102, {
					canClose : false,
					canMax : false
				});
	},
	show : function() {
		XN.webpager.friendsWindow.superClass.show.apply(this, arguments);
	},
	getButton : function() {
		return "<img class=\"icon\" width=\"16\" height=\"16\" alt=\"\u804a\u5929\" src=\"http://a.xnimg.cn/n/core/res/webpager/onlinegroup_mini.gif\" /> \u5728\u7ebf\u597d\u53cb(<span id=\"webpager_online_friend_count\">0</span>)";
	},
	getHeader : function() {
		return ["<h4>\u5728\u7ebf\u597d\u53cb</h4>"].join("");
	},
	getContent : function() {
		return [
				"<article class=\"online-users\">",
				"<header>",
				"<div class=\"searchbar box\">",
				"<form class=\"searchbar\" action=\"#\" method=\"post\">",
				"<input id=\"webpager_friend_search\" type=\"text\" onsubmit=\"return false;\" autocomplete=\"off\" />",
				"<span id=\"webpager_friend_search_reset\" class=\"clear\"><a href=\"#\"><img src=\"http://a.xnimg.cn/n/core/res/webpager/clear.png\" alt=\"\u6e05\u9664\" /></a></span>",
				"</form>", "</div>", "</header>", "<section>",
				"<ul class=\"user\">", "</ul>", "</section>", "</article>"]
				.join("");
	},
	getUIRef : function() {
		var This = this;
		setTimeout(function() {
					This.count = $("webpager_online_friend_count");
				}, 0);
		this.friendList = $(this.element.getElementsByTagName("ul")[0]);
		This.friendSearch = $("webpager_friend_search");
		this.searchReset = $("webpager_friend_search_reset");
		this.searchReset.hide();
	},
	makePerson : function(obj) {
		var o = XN.webpager.parseStatus(obj.status);
		var icon = o.icon;
		var _107 = o.online;
		return ["<li userId=\"", obj.id, "\">",
				"<span class=\"avatar\" userId=\"", obj.id,
				"\"><a href=\"#\"><img userId=\"", obj.id, "\" src=\"",
				obj.tiny, "\"/></a></span>", "<span class=\"name\" userId=\"",
				obj.id, "\"><a userId =\"", obj.id,
				"\" href=\"\" onclick=\"return false;\">", obj.name,
				"</a></span>",
				"<span class=\"online-status\"><a href=\"#\"><img title=\"",
				_107, "\" src=\"", icon, "\"/></a></span>", "</li>"].join("");
	},
	makePeople : function(objs) {
		var This = this;
		var _10a = [];
		XN.array.each(objs, function(i, obj) {
					_10a.push(This.makePerson(obj));
				});
		return _10a.join("");
	},
	updateCount : function(_10d) {
		this.count.innerHTML = _10d;
	},
	updateFriends : function(_10e) {
		this.friendList.innerHTML = this.makePeople(_10e);
	}
});
XN.event.enableCustomEvent(XN.webpager.friendsWindow.prototype);
XN.webpager.notifyWindow = function(_10f) {
	this.model = _10f.model;
	_10f.tag = "system";
	$extend(this, _10f);
	this.init(_10f);
	$(this.element).addClass("popupwindow");
	$(this.element).addClass("notify-panel");
};
extendClass(XN.webpager.notifyWindow, XN.webpager.abstractWindow);
$extend(XN.webpager.notifyWindow.prototype, {
	toread : 0,
	active : false,
	xAddEvent : function() {
		var This = this;
		var xw = XN.webpager;
		this.notifyList.addEvent("click", function(e) {
					e = e || window.event;
					var obj = e.srcElement || e.target;
					if (obj.getAttribute("source")) {
						if (obj.getAttribute("callback")) {
							This.model.delANotify(obj.getAttribute("nid"), obj
											.getAttribute("callback"));
						} else {
							var _114 = XN.webpager.url.DEL_NOTIFY + "?uid="
									+ XN.webpager.User.id + "&source="
									+ obj.getAttribute("source");
							This.model.delNotify(obj.getAttribute("source"),
									_114);
						}
					}
				});
		this.addEvent("ua_open_window", function(_115) {
					var _116 = "010";
					XN.webpager.curLayout = parseInt(_116, 2);
					XN.webpager.persistMgr.saveLayout("l",
							XN.webpager.curLayout);
				});
		this.addEvent("ua_collapse_window", function(_117) {
					var _118 = "000";
					XN.webpager.curLayout = parseInt(_118, 2);
					XN.webpager.persistMgr.saveLayout("l",
							XN.webpager.curLayout);
				});
		this.addEvent("view_window_active", function() {
					This.active = true;
					This.model.loadNotifies();
					xw.BlingMgr.titleBling.stop();
					This.tipBling.stop();
					This.hideTip();
				});
		this.addEvent("view_window_disactive", function() {
					This.active = false;
				});
		this.model.addEvent("notifyBox_notify_updated", function(n) {
					if (!This.active) {
						This.toread++;
						This.toreadNum.innerHTML = This.toread;
						if (webpager.isLocalConnect()) {
							xw.BlingMgr.titleBling.start();
						}
						This.tipBling.start();
						This.showTip();
					}
					This.showNotifies();
				});
		this.model.addEvent("notifyBox_notify_none", function(n) {
					This.showNotifies();
				});
		this.model.addEvent("notifyBox_notify_replace", function(n) {
					This.showNotifies();
				});
		this.model.addEvent("notifyBox_toread_none", function(n) {
				});
		this.model.addEvent("notifyBox_toread_updated", function(num) {
				});
	},
	getDefaultOptions : function() {
		var _11e = XN.webpager.friendsWindow.superClass.getDefaultOptions
				.call(this);
		return $extend(_11e, {
					canClose : false,
					canMax : false
				});
	},
	getButton : function() {
		return "<img class=\"icon\" width=\"16\" height=\"16\" title=\"\u63d0\u9192\" alt=\"\u63d0\u9192\" src=\"http://a.xnimg.cn/n/core/res/webpager/notifications.gif\" /><div id=\"wpi_toread_tip\" tooltip\" class=\"buttontooltip\" style=\"display:none;\"><strong id=\"wpi_toread_num\">3</strong></div>";
	},
	getHeader : function() {
		return ["<h4>\u63d0\u9192</h4>"].join("");
	},
	getContent : function() {
		if (!this.model.notifies.length) {
			return "<p style=\"padding:5px\">\u6ca1\u6709\u63d0\u9192</p>";
		}
		var This = this;
		var html = "<div class=\"notification\">";
		for (var p = 0; p < this.model.notifies.length; p++) {
			html += this.makeANotify(this.model.notifies[p]);
		}
		html += "</div>";
		return html;
	},
	makeANotify : function(n) {
		var _123 = n.callback + "&nid=" + n.nid;
		return [
				"<article class=\"iconpanel\">",
				"\t<header>",
				"\t\t<img class=\"icon\" width=\"16\" height=\"16\" src=\""
						+ n.icon + "\"/>",
				"\t\t<menu>",
				"\t\t\t<command title=\"\u5220\u9664\" class=\"delete\" source=\"",
				n.source,
				"\" nid=\"" + n.nid + "\" callback=\"" + _123
						+ "\" closeBtn=\"true\" />", "\t\t</menu>",
				"\t</header>", "\t<section>", "\t\t<p>" + n.content + "</p>",
				"\t</section>", "</article>"].join("");
	},
	getUIRef : function() {
		var This = this;
		this.notifyList = $(this.element.getElementsByTagName("section")[0]);
		this.btnTip = $("wpi_toread_tip");
		this.toreadNum = $("wpi_toread_num");
		this.tipBling = new XN.webpager.Bling({
					fn1 : function() {
						This.btnTip.show();
					},
					fn0 : function() {
						This.btnTip.hide();
					}
				});
	},
	showNotifies : function(n) {
		this.notifyList.innerHTML = this.getContent();
	},
	showTip : function() {
		if (!this.toread) {
			return;
		}
		this.btnTip.show();
	},
	hideTip : function() {
		this.toread = 0;
		this.btnTip.hide();
		XN.log("hide Tip : " + this.toread);
	}
});
XN.webpager.settingsWindow = function(_126) {
	_126 = _126 || {};
	_126.tag = "system";
	$extend(this, _126);
	this.init(_126);
	$(this.element).addClass("popupwindow");
	$(this.element).addClass("settings-panel");
};
$extend(XN.webpager.setingsWindow, {});
extendClass(XN.webpager.settingsWindow, XN.webpager.abstractWindow);
$extend(XN.webpager.settingsWindow.prototype, {
	onlineSrc : "http://s.xnimg.cn/n/core/res/webpager/im_online.gif",
	offlineSrc : "http://s.xnimg.cn/n/core/res/webpager/im_offline.gif",
	getDefaultOptions : function() {
		var _127 = XN.webpager.friendsWindow.superClass.getDefaultOptions
				.call(this);
		return $extend(_127, {
					canClose : false,
					canMax : false
				});
	},
	getButton : function() {
		return "<img id=\"wpi_online_img\" title=\"\u8bbe\u7f6e\" class=\"icon\" width=\"16\" height=\"16\" alt=\"\u5728\u7ebf\" src=\"http://a.xnimg.cn/n/core/res/webpager/im_online.gif\" />";
	},
	getHeader : function() {
		return ["<h4>\u804a\u5929\u548c\u63d0\u9192\u8bbe\u7f6e</h4>"].join("");
	},
	getContent : function() {
		return [
				"<div class=\"webpager-setting box\">",
				"<article class=\"webpager-setting\">",
				"<section>",
				"<p><label><input name=\"music\" id=\"wpi_music\" type=\"checkbox\" checked=\"true\" /> \u6536\u5230\u65b0\u6d88\u606f\u64ad\u653e\u63d0\u793a\u97f3</label></p>",
				"</section>",
				"<footer>",
				"<p><img id=\"wpi_login_img\" class=\"icon\" src=\"http://s.xnimg.cn/n/core/res/webpager/im_offline.gif\"/> <span id=\"wpi_login_tip\">\u5df2\u542f\u7528\u804a\u5929\u548c\u63d0\u9192\u529f\u80fd</span> <a id=\"wpi_login_btn\" href=\"#\">\u5173\u95ed</a></p>",
				"</footer>", "</article>", "</div>"].join("");
	},
	getUIRef : function() {
		this.onlineImg = $("wpi_online_img");
		this.loginBtn = $("wpi_login_btn");
		this.loginTip = $("wpi_login_tip");
		this.loginLogo = $("wpi_login_img");
		this.musicCheck = $("wpi_music");
	},
	xAddEvent : function() {
		var This = this;
		var xw = XN.webpager;
		this.loginBtn.addEvent("click", function(e) {
					if (This.loginBtn.innerHTML == "\u5173\u95ed") {
						xw.mgr.disConnect();
					} else {
						xw.mgr.connect();
					}
					XN.event.stop(e || window.event);
				});
		this.addEvent("ua_open_window", function(_12b) {
					var _12c = "001";
					XN.webpager.curLayout = parseInt(_12c, 2);
					XN.webpager.persistMgr.saveLayout("l",
							XN.webpager.curLayout);
				});
		this.addEvent("ua_collapse_window", function(_12d) {
					var _12e = "000";
					XN.webpager.curLayout = parseInt(_12e, 2);
					XN.webpager.persistMgr.saveLayout("l",
							XN.webpager.curLayout);
				});
		this.musicCheck.addEvent("change", function() {
					This.musicOn(This.musicCheck.checked);
				});
		xw.mgr.addEvent("mgr_disConnected", function() {
					This.showOffline();
				});
		xw.mgr.addEvent("mgr_connected", function() {
					This.showOnline();
				});
		xw.mgr.addEvent("mgr_connectFaild", function() {
					This.showConnFaild();
				});
		xw.mgr.addEvent("mgr_connecting", function() {
					This.showConning();
				});
		xw.persistMgr.addEvent("persist_setting_dif", function(isOn) {
					This.musicOn(isOn);
				});
	},
	musicOn : function(isOn, _131) {
		isOn = isOn === undefined ? true : isOn;
		webpager.setPlaySound(isOn);
		this.musicCheck.checked = isOn;
		if (_131 === false) {
			return;
		}
		XN.webpager.persistMgr.saveLayout("m", isOn ? 1 : 0);
	},
	showOnline : function() {
		var xw = XN.webpager;
		this.loginBtn.innerHTML = "\u5173\u95ed";
		this.loginTip.innerHTML = "\u5df2\u542f\u7528\u804a\u5929\u548c\u63d0\u9192\u529f\u80fd";
		this.onlineImg.src = this.onlineSrc;
		this.loginLogo.src = this.onlineSrc;
		xw.taskPanel.show();
		xw.friendsDiv.show();
		xw.notificationDiv.show();
	},
	showOffline : function() {
		var xw = XN.webpager;
		this.loginBtn.innerHTML = "\u6253\u5f00";
		this.loginTip.innerHTML = "\u5df2\u5173\u95ed\u804a\u5929\u548c\u63d0\u9192\u529f\u80fd";
		this.loginLogo.src = this.offlineSrc;
		this.onlineImg.src = this.offlineSrc;
		xw.friendsDiv.hide();
		xw.notificationDiv.hide();
	},
	showConnFaild : function() {
		var xw = XN.webpager;
		this.loginBtn.innerHTML = "\u91cd\u8bd5";
		this.loginTip.innerHTML = "\u4e0e\u670d\u52a1\u5668\u8fde\u63a5\u5931\u8d25";
		this.loginLogo.src = this.offlineSrc;
		this.onlineImg.src = this.offlineSrc;
		xw.taskPanel.hide();
		xw.friendsDiv.hide();
		xw.notificationDiv.hide();
	},
	showConning : function() {
		this.loginBtn.innerHTML = "";
		this.loginTip.innerHTML = "\u6b63\u5728\u4e0e\u670d\u52a1\u5668\u8fde\u63a5...";
		this.loginLogo.src = this.offlineSrc;
		this.onlineImg.src = this.offlineSrc;
	}
});
XN.webpager.EmptyWindow = function(_135) {
	$extend(this, _135);
	this.init(_135);
	$(this.element).addClass("popupwindow");
};
extendClass(XN.webpager.EmptyWindow, XN.webpager.abstractWindow);
$extend(XN.webpager.EmptyWindow.prototype, {
			xinit : function() {
				if (this.width) {
					this.button.style.width = parseInt(this.width) + "px";
				}
			},
			show : function() {
				if (this.activeUnable) {
					return;
				}
				this.superPro.show.apply(this, arguments);
			},
			getDefaultOptions : function() {
				var _136 = XN.webpager.friendsWindow.superClass.getDefaultOptions
						.call(this);
				return $extend(_136, {
							canClose : false,
							canMax : false
						});
			},
			getButton : function() {
				var _137 = this.strButton || "";
				return _137;
			},
			getHeader : function() {
				return ["<h4>", this.strTitle || "\u6211\u7684\u5e94\u7528",
						"</h4>"].join("");
			},
			getContent : function() {
				this.strContent = this.strContent || "";
				return this.strContent;
			},
			getUIRef : function() {
			},
			showElement : function() {
				$(this.element).show();
			},
			hideElement : function() {
				$(this.element).hide();
			}
		});
XN.event.enableCustomEvent(XN.webpager.EmptyWindow.prototype);
XN.webpager.UgcWindow = function(_138) {
	$extend(this, _138);
	this.init(_138);
	this.tag = "conv";
	$(this.element).addClass("popupwindow");
};
extendClass(XN.webpager.UgcWindow, XN.webpager.abstractWindow);
$extend(XN.webpager.UgcWindow.prototype, {
	xinit : function() {
		if (this.width) {
			this.button.style.width = parseInt(this.width) + "px";
		}
		this.inputHelper = XN.form.help(this.input);
		window.st = this;
	},
	xAddEvent : function() {
		var This = this;
		var wp = XN.webpager;
		function broadcast() {
			var _13b = This.input.value;
			var _13c = This.input;
			if (XN.string.trim(_13b) != "") {
				This.model.broadcast(_13b);
			}
			setTimeout(function() {
						_13c.value = "";
						_13c.focus();
					}, 0);
		}
		this.btn.addEvent("click", function(e) {
					e = e || window.event;
					XN.event.stop(e);
					broadcast();
				});
		this.input.addEvent("keydown", function(e) {
					e = e || window.event;
					if (e.keyCode == 13) {
						broadcast();
					}
				});
		this.input.addEvent("focus", function(e) {
					XN.webpager.lookAtThisWin = true;
				});
		this.input.addEvent("blur", function(e) {
					XN.webpager.lookAtThisWin = false;
				});
		this.element.addEvent("click", function(e) {
					e = e || window.event;
					var obj = e.srcElement || e.target;
					if (obj && obj.getAttribute && obj.getAttribute("wtype")) {
						var name = obj.getAttribute("wname");
						var id = obj.getAttribute("wid");
						This.model.replyName = name;
						This.model.replyTo = id;
						This.input.value = "\u56de\u590d" + name + "\uff1a";
						This.inputHelper.focus();
					}
				});
		this.addEvent("view_window_active", function() {
					XN.webpager.notifyBox.delAll(This.model.source);
					This.delHlight();
					This.gspListScrollBtm();
					This.model.startConv(true, false);
				});
		this.addEvent("view_window_disactive", function() {
					This.delHlight();
					This.model.disactive();
				});
		this.addEvent("view_window_destroy", function() {
					This.model.leave();
					This.model.destroy();
					setTimeout(function() {
								XN.webpager.BlingMgr.titleBling.stop();
							}, 0);
				});
		this.addEvent("view_window_maximize", function() {
					var ugc = This.model.ugc;
					window.open("http://status." + XN.env.domain
									+ "/getdoing.do?id=" + ugc.feed_actor
									+ "&doingId=" + ugc.feed_source
									+ "&ref=newsfeed&sfet=502&fin=0", "_blank");
				});
		this.addModelEvent("room_gossip_push", function(gsp) {
			logger.log("\u5f53\u524d\u7684active\u72b6\u6001\u662f:"
					+ This.active + "  isHost:" + gsp.isHost);
			if (!This.active && !gsp.isHost) {
				logger
						.log("\u5662\uff5e\u5f53\u524d\u7684active\u72b6\u6001\u662f:"
								+ This.active + "  isHost:" + gsp.isHost);
				This.showHlight();
			} else {
				XN.webpager.notifyBox.delAll(This.model.source);
			}
			This.addAGsp(gsp);
		});
		this.addModelEvent("room_gsp_replace", function(gsps) {
					This.updateGsps(gsps);
				});
		this.addModelEvent("room_chat_started", function(_148) {
			logger.log("[view]UgcWindow\u8981\u663e\u793a\u51fa\u6765");
			This.delHlight();
			if (!This.active) {
				logger
						.log("\u8fd9\u4e2a\u7a97\u53e3\u5f53\u524d\u5904\u4e8e\u975e\u6fc0\u6d3b\u72b6\u6001, \u73b0\u5728\u628a\u5b83\u6fc0\u6d3b");
				This.show(_148);
			} else {
				logger
						.log("\u8fd9\u4e2a\u7a97\u53e3\u5f53\u524d\u5904\u4e8e\u6fc0\u6d3b\u72b6\u6001, \u4ec0\u4e48\u4e5f\u4e0d\u7528\u505a");
			}
			This.gspListScrollBtm();
		});
		this.addModelEvent("room_chat_disactive", function(_149) {
					This.hide(false);
				});
		this.addModelEvent("room_destroy", function(msg) {
					This.destroy();
					setTimeout(function() {
								XN.webpager.BlingMgr.titleBling.stop();
							}, 0);
				});
		this.addModelEvent("room_broadcast_error", function(code, _14c, ret) {
					var gsp = {
						from_id : wp.User.id,
						from_name : "",
						from_pic : "",
						mtime : "\u7cfb\u7edf\u6d88\u606f:"
								+ wp.tools.getTime(),
						ugc_content : wp.msg.SPAM[code] + ". \u6d88\u606f\""
								+ _14c + "\"\u53d1\u9001\u5931\u8d25"
					};
					This.model.pushGsp(gsp);
				});
	},
	pushMsg : function(obj) {
	},
	show : function(_150) {
		logger.log("show\u51fd\u6570: focus\u4e3a" + _150);
		this.superPro.show.apply(this, arguments);
		this.active = true;
		logger.log("show, focus is " + _150);
		if (_150 !== false) {
			logger.log("\u8981focus");
			this.element.getElementsByTagName("textarea")[0].focus();
		} else {
			this.element.getElementsByTagName("textarea")[0].blur();
		}
		this.myGroup.fireEvent("view_a_window_actived");
	},
	showHlight : function() {
		this.element.addClass("toread");
		if (XN.browser.IE6) {
			(this.element.getElementsByTagName("img")[0]).src = XN.webpager.url.WPI_STATUS_HLIGHT;
		}
		if (webpager.isLocalConnect()) {
			XN.webpager.BlingMgr.titleBling.start();
		}
	},
	delHlight : function() {
		try {
			this.element.delClass("toread");
			if (XN.browser.IE6) {
				(this.element.getElementsByTagName("img")[0]).src = XN.webpager.url.WPI_STATUS_COMMON;
			}
			setTimeout(function() {
						XN.webpager.BlingMgr.titleBling.stop();
					}, 0);
		} catch (e) {
		}
	},
	getDefaultOptions : function() {
		var _151 = XN.webpager.friendsWindow.superClass.getDefaultOptions
				.call(this);
		return $extend(_151, {
					canClose : true,
					canMax : true
				});
	},
	getButton : function() {
		var _152 = this.strButton || "";
		return _152;
	},
	getContent : function() {
		this.strContent = this.strContent ? this.strContent
				+ this.makeGspList() : "" + this.makeGspList();
		return this.strContent;
	},
	buildGsps : function(list) {
		var l = list || this.model.gsps;
		var This = this;
		var gsps = [];
		XN.array.each(l, function(i, gsp) {
					gsps.push(This.makeAGsp(gsp));
				});
		return gsps.join("");
	},
	upUgc : function(ugc, _15a) {
		logger.log("################################### upUgc");
		try {
			logger
					.log("[view]\u6b63\u5728\u66f4\u65b0\u7fa4\u804a\u7a97\u53e3\u7684\u4e3b\u9898\u548cbtn...");
			var e = ugc.entity;
			if (e.host_pic.indexOf("http:") != 0) {
				e.host_pic = "http://hdn.xnimg.cn/photos/" + e.host_pic;
			}
			var type = Math.floor(ugc.type / 10);
			type = parseInt((ugc.type + "").charAt(0));
			e.title = XN.webpager.tools.noMoreThan(e.host_name, 3) + "\u7684"
					+ XN.webpager.ChatRoom.ugcMap[type].str;
			var u = XN.webpager.ChatRoom.ugcMap[type];
			var _15e = document.createElement("div");
			_15e.innerHTML = "<img class=\"icon\" src=\"" + u.icon + "\" /> "
					+ e.title;
			var _15f = XN.webpager.tools;
			if (XN.browser.IE) {
				this.header.appendChild(_15f.getDom(this.getHeader(e)));
			} else {
				this.header.appendHTML(this.getHeader(e));
			}
			this.subHead = this.element.getElementsByTagName("h5")[0];
			this.subHead.innerHTML = "";
			if (XN.browser.IE) {
				this.subHead.innerHTML = XN.webpager.tools
						.unescapeHTML(e.content);
			} else {
				this.subHead.innerHTML = XN.webpager.tools
						.unescapeHTML(e.content);
			}
			this.winBtn.appendChild(_15e);
			if (_15a !== false) {
				this.showHlight();
			}
		} catch (e) {
		}
	},
	getHeader : function(en) {
		var t = en || this.topic;
		if (!t) {
			return;
		}
		return [
				"<figure>",
				"<a href=\"http://www."
						+ XN.env.domain
						+ "/profile.do?id="
						+ t.host_id
						+ "\" target=\"_blank\"><img height=\"50\" width=\"50\" src=\""
						+ (t.host_pic || XN.webpager.url.OFFLINE_IMG)
						+ "\"/></a>", "</figure>", "<h4>", t.title, "</h4>",
				"<h5 class=\"subheading\"> ", t.content, "</h5>"].join("");
	},
	makeGspList : function() {
		return [
				"<div class=\"hbox dialog\">",
				"<div class=\"dialogs hbox\">",
				"<article class=\"dialogs\">",
				"</article>",
				"</div>",
				"<div class=\"editor hbox\">",
				"<form class=\"editor\" action=\"/n/core/src/layouts/../modules/webpager/\"method=\"post\">",
				"<div class=\"toolbar\">",
				"<ul class=\"main\">",
				"</ul>",
				"</div>",
				"<textarea></textarea>",
				"<input type=\"image\" src=\"http://s.xnimg.cn/n/core/res/webpager/send-button.png\"/>",
				"</form>", "</div>", "</div>"].join("");
	},
	makeAGsp : function(c) {
		var _163 = "";
		if (c.from_pic) {
			_163 = "<img width=\"30\" height=\"30\" onload=\"clipImage(this)\" src=\""
					+ c.from_pic + "\"/>";
		}
		try {
			var a = [
					"<section>",
					"<figure class=\"avatar\">" + _163 + "</figure>",
					"<header>",
					"<span class=\"user\"><a href=\"http://www.",
					XN.env.domain,
					"/profile.do?id=",
					c.from_id,
					"\">",
					c.from_name,
					"</a></span>",
					"<span class=\"time\">",
					c.mtime
							|| XN.webpager.tools
									.getTime(new Date(parseInt(c.timestamp))),
					"</span>",
					"</header>",
					"<section>",
					"<p>",
					c.ugc_content,
					"</p>",
					"</section>",
					"<footer>",
					XN.webpager.User.id != c.from_id
							? "<a wtype=\"reply\" wname=\""
									+ c.from_name
									+ "\" wid=\""
									+ c.from_id
									+ "\" wid=\"\" onclick=\"return false;\" href=\"javascript:void(0)\">\u56de\u590d</a>"
							: "", "</footer>", "</section>"].join("");
			return a;
		} catch (e) {
			if (XN.webpager.debug) {
				logger.log(e);
			}
		}
	},
	_unescape : function(html) {
		return html.replace(/'/g, "\"");
	},
	addAGsp : function(gsp) {
		logger.log("[addAGsp]");
		var _167 = XN.webpager.tools;
		if (XN.browser.IE) {
			try {
				var t = this.makeAGsp(gsp);
				this.gspList.appendChild(_167.getDom(t));
			} catch (e) {
				if (XN.webpager.debug) {
					alert(e);
				}
			}
		} else {
			this.gspList.appendChild($make(this.makeAGsp(gsp)));
		}
		this.gspListScrollBtm(100);
	},
	hasThisGsp : function(gsp) {
		var gsps = this.model.gsps;
		var len = gsps.length;
		if (!len) {
			return false;
		}
		for (var i = 0; i < len; i++) {
			if (gsps[i].ugc_content == gsp.ugc_content) {
				return true;
			}
		}
		return false;
	},
	updateGsps : function(list) {
		var This = this;
		if (XN.browser.IE) {
			var t = this.buildGsps(list);
			this.gspList.innerHTML = "";
			this.gspList.appendChild(XN.webpager.tools.getDom(t));
		} else {
			setTimeout(function() {
						This.gspList.innerHTML = This.buildGsps(list);
					}, 100);
		}
		this.gspListScrollBtm();
	},
	gspListScrollBtm : function(t) {
		var This = this;
		setTimeout(function() {
					This.gspList.scrollTop = This.gspList.scrollHeight;
				}, t || 500);
	},
	getUIRef : function() {
		this.gspList = this.element.getElementsByTagName("article")[1];
		this.btn = $(this.element.getElementsByTagName("input")[0]);
		this.input = $(this.element.getElementsByTagName("textarea")[0]);
		this.header = $(this.element.getElementsByTagName("header")[0]);
		this.winBtn = $(this.element.getElementsByTagName("div")[0]);
		this.icon = $(this.winBtn.getElementsByTagName("img")[0]);
	},
	showElement : function() {
		$(this.element).show();
	},
	hideElement : function() {
		$(this.element).hide();
	}
});
XN.event.enableCustomEvent(XN.webpager.UgcWindow.prototype);
XN.webpager.Widget = function(conf) {
	$extend(this, conf);
	this.init();
};
XN.webpager.Widget.prototype = {
	init : function() {
		this.element = $element("div");
		this.element.innerHTML = this.strContent;
	}
};
XN.event.enableCustomEvent(XN.webpager.Widget.prototype);
(function(xw) {
	xw.Bling = function(conf) {
		$extend(this, conf);
	};
	xw.Bling.prototype = {
		fn0 : function() {
		},
		fn1 : function() {
		},
		start : function() {
			var This = this;
			var i = 0;
			if (this.inter) {
				clearInterval(this.inter);
			}
			if (this.onStart) {
				this.onStart();
			}
			this.inter = setInterval(function() {
						if (i++ % 2) {
							This.fn1();
						} else {
							This.fn0();
						}
					}, this.timeInterv || 1000);
		},
		stop : function() {
			clearInterval(this.inter);
			this.fireEvent("view_bling_stoped");
		}
	};
	XN.event.enableCustomEvent(xw.Bling.prototype);
	xw.BlingMgr = {
		init : function() {
			var This = this;
			var _178 = function() {
				var _179 = document.title;
				var _17a = _179.indexOf("\u3011");
				if (_17a != -1) {
					return _179.substring(_17a + 3);
				}
				return _179;
			};
			this.titleBling = new xw.Bling({
						onStart : function() {
							if (document.title.indexOf("\u3010") != -1) {
								return;
							}
							this.oldtitle = document.title;
						},
						fn1 : function() {
							document.title = "\u3010\u65b0\u6d88\u606f\u3011- "
									+ _178();
						},
						fn0 : function() {
							document.title = "\u3010\u3000\u3000\u3000\u3011- "
									+ _178();
						}
					});
			this.titleBling.addEvent("view_bling_stoped", function() {
						document.title = _178();
					});
		}
	};
})(XN.webpager);
XN.namespace("webpager");
XN.webpager.tools = {
	getTime : function(d) {
		var d = d || new Date();
		return this.two((d.getMonth() + 1)) + "-" + this.two(d.getDate()) + " "
				+ this.two(d.getHours()) + ":" + this.two(d.getMinutes());
	},
	two : function(s) {
		if (parseInt(s) > 9) {
			return s;
		}
		return "0" + s;
	},
	getFirst : function(el) {
		return el.firstChild.nodeType == 1
				? el.firstChild
				: el.firstChild.nextSibling;
	},
	getPageScroll : function() {
		try {
			var x, y;
			if (window.pageYOffset) {
				y = window.pageYOffset;
				x = window.pageXOffset;
			} else {
				if (document.documentElement
						&& document.documentElement.scrollTop) {
					y = document.documentElement.scrollTop;
					x = document.documentElement.scrollLeft;
				} else {
					if (document.body) {
						y = document.body.scrollTop;
						x = document.body.scrollLeft;
					}
				}
			}
		} catch (e) {
		}
		return {
			x : x,
			y : y
		};
	},
	getWholeHeight : function() {
		try {
			if (document.documentElement) {
				return document.documentElement.scrollHeight;
			} else {
				if (document.body) {
					return document.body.scrollHeight;
				}
			}
		} catch (e) {
		}
	},
	getClientHeight : function() {
		if (document.documentElement) {
			return document.documentElement.clientHeight;
		}
	},
	noMoreThan : function(str, len) {
		if (str && str.length <= len) {
			return str;
		}
		return str.substring(0, len) + "...";
	},
	unescapeHTML : function(html) {
		var n = document.createElement("div");
		n.innerHTML = html;
		if (XN.browser.IE) {
			return n.innerText;
		} else {
			return n.textContent;
		}
	},
	htmlFilter : function(str) {
		str = str.replace(/&/g, "&amp;");
		str = str.replace(/</g, "&lt;");
		str = str.replace(/>/g, "&gt;");
		return str;
	},
	getDom : function(str) {
		var _186;
		var _187 = /(<(\/?)(\S+?)(?:\s(?:\S+?=\".*?\")\s*)*(?:\s*(\/))?>|(?:[^<]*))/ig;
		var _188 = [];
		var dom = document.createDocumentFragment();
		while ((_186 = _187.exec(str)) != null) {
			if (!_186[3]) {
				var div = document.createElement("div");
				if (_186[1].replace(/^\s*(.*?)\s*$/g, "$1") == "") {
					div.appendChild(document.createTextNode(" "));
				} else {
					div.innerHTML = _186[1];
				}
				if (div.firstChild && _188[_188.length - 1]) {
					_188[_188.length - 1].appendChild(div.firstChild);
				}
			} else {
				if (_186[2]) {
					var node = _188.pop();
					if (_188.length == 0) {
						dom.appendChild(node);
					}
				} else {
					if (_186[3]) {
						var node = document.createElement(_186[1]);
						if (_188[_188.length - 1]) {
							_188[_188.length - 1].appendChild(node);
						}
						if (!_186[4]) {
							_188.push(node);
						}
					}
				}
			}
		}
		return dom;
	}
};
XN.webpager.pagerTimer = {
	init : function() {
		var This = this;
		var _18d = function() {
			This.fireEvent("webpager_tools_timer");
			This.sysTimer = setTimeout(function() {
						clearTimeout(This.sysTimer);
						_18d();
					}, 1500);
		};
		_18d();
	}
};
XN.event.enableCustomEvent(XN.webpager.pagerTimer);
XN.webpager.tryer = function() {
};
XN.webpager.tryer.prototype = {
	tryAWhile : function(_18e, _18f, fn) {
		this.clear();
		var This = this;
		this._inter = setInterval(function() {
					if (fn() === true) {
						This.clear();
						This.fireEvent("tryer_sus");
					}
				}, _18e);
		this._timeout = setTimeout(function() {
					This.clear();
					This.fireEvent("tryer_timeout");
				}, _18f);
	},
	clear : function() {
		clearInterval(this._inter);
		clearTimeout(this._timeout);
	}
};
XN.event.enableCustomEvent(XN.webpager.tryer.prototype);
XN.webpager.MessagerProxy = {
	send : function(g) {
		$wp_messager.send(g);
		this.fireEvent("afterPost");
	},
	getMessageHistory : function(f_id) {
		var rs = $wp_messager.getMessageHistory(f_id);
		var _195 = [];
		XN.array.each(rs, function(i, v) {
					_195.push({
								msg_content : v.msg_content,
								time : XN.webpager.tools
										.getTime(new Date(parseInt(v.timestamp))),
								fromname : v.fromname,
								fromuin : v.fromuin
							});
				});
		return _195;
	},
	getNotifyHistory : function() {
		return $wp_messager.getNotifyHistory();
	},
	showChatMessage : function(e) {
		this.fireEvent("proxy_send_back", e);
	},
	receive : function(_199) {
		this.fireEvent("proxy_gossip_got", _199);
	},
	onSpeNotifyArrived : function(e) {
		XN.webpager.fireEvent("webpager_special_arrived", e);
	},
	onRecvNotify : function(n) {
		logger.log("********");
		logger.log(n);
		var t = XN.json.parse(n.content);
		if (document.domain == "kaixin.com" && t && t.time < 0) {
			return;
		}
		var xw = XN.webpager;
		if (t && t.ugc_content && document.domain != "kaixin.com") {
			this.fireEvent("proxy_gossip_got", n, t);
		} else {
			XN.webpager.mgr.playSound();
			this.fireEvent("proxy_notify_got", n);
		}
	},
	onRecvMessage : function(m) {
		if (m.r_id) {
			this.fireEvent("proxy_gossip_got", m);
		} else {
			var xw = XN.webpager;
			if (!xw.isHost(m.from_id)) {
				logger
						.log("\u8fd9\u4e0d\u662f\u81ea\u5df1\u7684\u5bf9\u8bdd\u6d88\u606f,\u64ad\u653e\u58f0\u97f3");
				XN.webpager.mgr.playSound();
			}
			this.fireEvent("proxy_conv_got", m);
		}
	},
	showPager : function(yes) {
		XN.webpager.showPager(yes);
	},
	onConnected : function() {
		XN.webpager.mgr.fireEvent("mgr_connected");
	},
	onDisconnected : function() {
		XN.webpager.mgr.fireEvent("mgr_disConnected");
	}
};
$msg_proxy = XN.webpager.MessagerProxy;
XN.event.enableCustomEvent($msg_proxy);
XN.webpager.persistMgr = {
	saveObj : {
		l : 0
	},
	sectionMap : {
		conv : "",
		chat : "ChatRoom.chats"
	},
	init : function() {
		this.load();
		this.bindEvent();
	},
	bindEvent : function() {
		var This = this;
		XN.webpager.pagerTimer.addEvent("webpager_tools_timer", function() {
					This.load();
				});
	},
	get : function(key) {
		return this.saveObj[key];
	},
	savethis : function(key, val) {
		this.saveObj[key] = val;
		this.persist();
	},
	save : function(_1a5, obj) {
		var ids = "";
		var _1a8 = "";
		var _1a9 = {};
		$extend(_1a9, obj);
		if (_1a5 == "conv") {
			for (var id in obj.models) {
				if (obj.models[id].f_name) {
					ids += id + "_" + obj.models[id].f_name + ",";
				} else {
					ids += id + ",";
				}
			}
			ids = ids.substring(0, ids.length - 1);
			_1a9.models = ids;
		}
		this.saveObj[_1a5] = _1a9;
		this.persist();
	},
	saveLayout : function(_1ab, obj) {
		this.saveObj[_1ab] = obj;
		this.persist();
	},
	getSaveObj : function() {
		var obj = XN.json.parse(XN.cookie.get(XN.webpager.User.id + "wp_save"));
	},
	destroyIt : function(id, _1af) {
		if (_1af) {
			_1af[id] = null;
			if (this.saveObj[_1af._$$label][id]) {
				delete this.saveObj[_1af._$$label][id];
				this.persist();
			}
		}
	},
	getWpiCookie : function(key) {
		try {
			var obj = XN.json.parse(window.imengine.imHelper
					.getCookie("wp_save"));
		} catch (e) {
			return null;
		}
		if (obj) {
			return obj[key];
		}
		return null;
	},
	getWpiCookieBy : function(key) {
		return window.imengine.imHelper.getCookie(key);
	},
	setWpiCookie : function(key, _1b4, _1b5) {
		window.imengine.imHelper.setCookie(key, _1b4, _1b5);
	},
	persist : function() {
		this.saveObj.id = XN.webpager.User.id;
		logger.log("ready to save: " + XN.json.build(this.saveObj));
		this.setWpiCookie("wp_save", XN.json.build(this.saveObj), 365);
	},
	load : function() {
		var _1b6 = window.imengine.imHelper.getCookie("wp_save");
		if (_1b6) {
			var _1b7 = XN.json.parse(_1b6);
			if (_1b7) {
				if (_1b7.id != XN.webpager.User.id) {
					return;
				}
				XN.webpager.initModelStatus = _1b7;
				XN.webpager.persistMgr.saveObj = _1b7;
				if (_1b7.conv && _1b7.conv.models
						&& this.preModelStatus != _1b6) {
					this.fireEvent("persist_modelStatus_dif");
				}
				if (_1b7.conv && _1b7.conv.models == "") {
					this.fireEvent("persist_no_models");
				}
				if (XN.webpager.curLayout != _1b7.l) {
					this.fireEvent("persist_layout_dif", _1b7.l);
				}
				if (XN.webpager.mgr.connConf != _1b7.c) {
					this.fireEvent("persist_conn_dif", _1b7.c);
				}
				if (XN.webpager.curMusic != _1b7.m) {
					this.fireEvent("persist_setting_dif", _1b7.m);
				}
				this.preModelStatus = _1b6;
				XN.webpager.curLayout = _1b7.l;
				XN.webpager.curMusic = _1b7.m;
			}
		}
	},
	testLocalStorage : function() {
		return window.imengine.persistMap.test();
	}
};
XN.event.enableCustomEvent(XN.webpager.persistMgr);
$extend(XN.webpager, {
			Gossip : function(_1b8) {
				$extend(this, _1b8);
			},
			UGC : function(_1b9) {
				$extend(this, _1b9);
			},
			User : {
				id : XN.cookie.get("id"),
				name : "\u6211",
				head : XN.webpager.url.OFFLINE_IMG
			}
		});
XN.webpager.ChatRoom = function(_1ba, ugc) {
	$extend(this, _1ba);
	this.ugc = ugc;
	this.bindEvent();
	this.fireEvent("e_room_build");
};
$extend(XN.webpager.ChatRoom, {
	$r_id : 0,
	room : {},
	ugcMap : {
		5 : {
			str : "\u72b6\u6001",
			icon : XN.webpager.url.WPI_STATUS_COMMON
		}
	},
	getId : function() {
		return this.$r_id++;
	},
	getRoom : function(obj, ugc, _1be, save) {
		var rm;
		rm = this.room[obj.r_id];
		if (!rm) {
			rm = new XN.webpager.ChatRoom(obj, ugc);
			this.room[obj.r_id] = rm;
		}
		if (!rm.skin || !rm.skin.element) {
			this.getUgcEntity(ugc, function(_1c1) {
						ugc.entity = _1c1;
						ugc.type = ugc.type || obj.type;
						rm.skin = this.makeSkin(rm, ugc, _1be, save);
						rm.loadHistory(ugc);
					});
		}
		logger
				.log("ChatRoom\u6a21\u578b\u6784\u5efa\u6210\u529f, \u8fd4\u56de. room skin \u73b0\u5728\u662f:");
		logger.log(rm.skin);
		return rm;
	},
	addRoom : function(obj, ugc, _1c4, save) {
		try {
			var rm;
			var This = this;
			rm = this.room[obj.r_id];
			if (!rm) {
				rm = new XN.webpager.ChatRoom(obj, ugc);
				this.room[obj.r_id] = rm;
			}
			if (!rm.skin || !rm.skin.element) {
				logger.log("room\u6ca1\u6709skin, \u5148\u751f\u6210skin");
				rm.skin = this.makeSkin2(rm, ugc, _1c4, save);
				This.getUgcEntity(ugc, function(_1c8) {
					if (!_1c8) {
						rm.destroy();
						return;
					}
					rm.skin.beforeThis = rm.f_id;
					XN.webpager.tasks.add(rm.skin);
					logger
							.log("\u53d1\u9001\u8bf7\u6c42\u83b7\u53d6ugc\u672c\u4f53...");
					logger.log("ugc\u672c\u4f53\u83b7\u53d6\u6210\u529f");
					ugc.entity = _1c8;
					ugc.type = ugc.type || obj.type;
					rm.ugc = ugc;
					rm.skin.upUgc(ugc, _1c4);
					rm.skin.element.style.visibility = "visible";
					rm.loadHistory(ugc);
				});
			}
			logger
					.log("ChatRoom\u6a21\u578b\u6784\u5efa\u6210\u529f, \u8fd4\u56de. room skin \u73b0\u5728\u662f:");
			logger.log(rm.skin);
			return rm;
		} catch (e) {
			if (XN.webpager.debug) {
				alert(e);
			}
		}
	},
	getUgcEntity : function(ugc, fn) {
		var This = this;
		logger
				.log("################################### \u51c6\u5907\u53d1\u9001\u8bf7\u6c42\u83b7\u53d6ugc\u5b9e\u4f53");
		new XN.net.xmlhttp({
			url : "http://notify.renren.com/get2.feed?actor=" + ugc.feed_actor
					+ "&source=" + ugc.feed_source + "&stype=" + ugc.feed_stype,
			useCache : true,
			onSuccess : function(r) {
				logger
						.log("################################### \u62ff\u5230ugc\u5b9e\u4f53");
				var obj = XN.json.parse(r.responseText);
				logger
						.log("\u670d\u52a1\u5668\u8fd4\u56de\u7684\u6587\u672c\u662f:"
								+ r.responseText);
				logger.log(obj);
				if (!r.responseText) {
					obj = null;
				} else {
					if (XN.json.build(obj) == "{}") {
						obj = null;
					}
				}
				if (fn) {
					fn.call(This, obj);
				}
			},
			onError : function() {
				if (fn) {
					fn.call(This, null);
				}
			}
		});
	},
	makeSkin2 : function(room, ugc, _1d0, save, fn) {
		var skin = new XN.webpager.UgcWindow({
					strButton : "",
					strTitle : "",
					model : room
				});
		skin.element.style.visibility = "hidden";
		if (save !== false) {
			this.addToConvs(room, ugc);
		}
		if (_1d0 !== false) {
		}
		var This = this;
		if (fn) {
			fn.call(This);
		}
		logger.log("################################### makeSkin \u5b8c\u6210");
		return skin;
	},
	makeSkin : function(room, ugc, _1d7, save) {
		var e = ugc.entity;
		e.host_pic = "http://hdn.xnimg.cn/photos/" + e.host_pic;
		var type = Math.floor(ugc.type / 10);
		var type = parseInt((ugc.type + "").charAt(0));
		e.title = e.host_name + "\u7684" + this.ugcMap[type].str;
		var u = this.ugcMap[type];
		var skin = new XN.webpager.UgcWindow({
					strButton : "<img class=\"icon\" src=\"" + u.icon
							+ "\" /> " + e.host_name + "\u7684" + u.str,
					strTitle : e.host_name + "\u7684" + u.str,
					model : room,
					topic : e
				});
		XN.webpager.tasks.add(skin);
		if (save !== false) {
			this.addToConvs(room, ugc);
		}
		if (_1d7 !== false) {
			skin.element.addClass("toread");
		}
		return skin;
	},
	addToConvs : function(room, ugc) {
		room.id = ugc.feed_actor + "_" + ugc.feed_source + "_" + ugc.feed_stype;
		XN.webpager.Conv.convs[room.id] = room;
		XN.webpager.Conv.saveConvs();
	}
});
XN.webpager.ChatRoom.prototype = {
	gsps : [],
	bindEvent : function() {
	},
	broadcast : function(_1df) {
		var wp = XN.webpager;
		this.fireEvent("before_broadcast", _1df);
		if (_1df && _1df.length > wp.chatWordNum) {
			_1df = XN.string.trim(_1df);
			_1df = _1df.substring(0, 137) + "...";
			_1df = wp.tools.htmlFilter(_1df);
		}
		var gsp = {
			from_id : wp.User.id,
			from_name : wp.User.name,
			from_pic : wp.User.head,
			mtime : wp.tools.getTime(),
			ugc_content : _1df,
			pass : true
		};
		this.pushGsp(gsp);
		this.broadcastGsp(gsp);
	},
	replaceGsp : function(_1e2) {
		this.gsps = _1e2;
		this.fireEvent("room_gsp_replace", this.gsps);
	},
	pushGsp : function(gsp) {
		logger.log("[pushGsp]");
		logger.log(gsp);
		logger.log((!gsp.pass) + "  " + XN.webpager.lookAtThisWin + "   "
				+ XN.webpager.isHost(gsp.from_id));
		if (!gsp.pass && XN.webpager.lookAtThisWin
				&& XN.webpager.isHost(gsp.from_id)) {
			logger
					.log("\u5f53\u524d\u7684\u7a97\u53e3\u5904\u4e8efocus\u72b6\u6001, \u62d2\u7edd\u63a5\u53d7\u6765\u81ea\u81ea\u5df1\u7684\u6d88\u606f");
			return;
		}
		this.gsps.push(gsp);
		logger.log("\u5df2\u7ecf\u653e\u5165\u961f\u5217");
		this.fireEvent("room_gossip_push", gsp);
	},
	ihaveThisGsp : function(gsp) {
		logger.log("[ihaveThisGsp]");
		var gsps = this.gsps;
		var len = gsps.length;
		if (!len) {
			return false;
		}
		logger.log("\u6b63\u5728\u6bd4\u5bf9");
		for (var i = len - 1; i >= 0; i--) {
			logger.log(gsps[i].ugc_content + "  " + gsp.ugc_content);
			if (gsps[i].from_id == XN.webpager.User.id
					&& gsps[i].ugc_content == gsp.ugc_content) {
				var cha = (gsp.tstamp - gsps[i].tstamp);
				logger.log(gsps[i].tstamp + "  " + gsp.tstamp
						+ " \u76f8\u5dee " + cha);
				if (cha < 2000) {
					logger.log("ihaveThisGsp!");
					return true;
				}
				break;
			}
		}
		return false;
	},
	broadcastGsp : function(_1e9, type) {
		logger.log("########## sending to server... ");
		var gsp = _1e9.ugc_content;
		var This = this;
		var p = {
			c : gsp,
			t : 3,
			source : this.ugc.feed_source,
			owner : this.ugc.feed_actor,
			replyName : this.replyName ? this.replyName : "",
			replyTo : this.replyTo ? this.replyTo : "",
			secondaryReplyId : this.ugc.feed_actor
		};
		new XN.net.xmlhttp({
					url : "http://status." + XN.env.domain
							+ "/feedcommentreply.do?from=wp&fromu="
							+ XN.webpager.User.id + "&tou=" + p.replyTo
							+ "&source=" + p.source + "&fowner=" + p.owner,
					data : XN.array.toQueryString(p),
					onSuccess : function(r) {
						This.replyName = "";
						This.replyTo = "";
						var ret = XN.json.parse(r.responseText);
						if (ret) {
							if (ret.code) {
								This.fireEvent("room_broadcast_error",
										ret.code, gsp, ret);
							}
						}
					}
				});
	},
	startChat : function() {
	},
	startConv : function(_1f0, _1f1) {
		logger
				.log(this.id
						+ "active\u4e86,\u7a97\u53e3\u8981\u663e\u793a\u51fa\u6765\u4e86, \u5982\u679c\u6ca1\u6709\u663e\u793a\u51fa\u6765, \u5c31\u662f\u6709\u95ee\u9898\u7684");
		this.f_id = this.id;
		this.started = true;
		logger.log("\u8c03\u7528Conv.setActive, willSave==" + _1f0);
		XN.webpager.Conv.setActive(this, _1f0);
		this.fireEvent("room_chat_started", _1f1);
	},
	disactive : function(save) {
		this.started = false;
		XN.webpager.Conv.cancelActive(this, save);
		this.fireEvent("room_chat_disactive");
	},
	endChat : function() {
	},
	destroy : function() {
		if (XN.webpager.Conv.convs[this.f_id]) {
			if (XN.webpager.Conv.activeConv
					&& this.f_id == XN.webpager.Conv.activeConv.f_id) {
				XN.webpager.Conv.activeConv = null;
			}
			this.fireEvent("room_destroy");
			XN.webpager.Conv.delConvs[this.f_id] = XN.webpager.Conv.convs[this.f_id];
			delete XN.webpager.Conv.convs[this.f_id];
			XN.webpager.Conv.saveConvs();
		}
	},
	leave : function() {
		this.x = true;
	},
	loadHistory : function(ugc, f_id) {
		var This = this;
		p = {
			doingId : ugc.feed_source,
			owner : ugc.feed_actor,
			source : ugc.feed_source,
			t : 3
		};
		new XN.net.xmlhttp({
					url : "http://status." + XN.env.domain
							+ "/feedcommentretrieve.do",
					data : XN.array.toQueryString(p),
					onSuccess : function(r) {
						var list = XN.json.parse(r.responseText);
						list = list.replyList;
						var ret = [];
						if (list) {
							var len = list.length;
							var r;
							for (var i = len - 1; i >= 0; i--) {
								r = list[i];
								ret.unshift({
											from_name : r.ubname,
											from_pic : r.replyer_tinyurl,
											from_id : r.ubid,
											mtime : r.replyTime.substring(5),
											ugc_content : r.replyContent
										});
								if (len - i == 10) {
									break;
								}
							}
						}
						This.replaceGsp(ret);
					}
				});
		this.fireEvent("room_gsp_loaded", this.gsps);
	}
};
XN.event.enableCustomEvent(XN.webpager.ChatRoom.prototype);
XN.webpager.Conv = function(opts) {
	$extend(this, opts);
	XN.webpager.Conv.convs[this.f_id] = this;
	this.init();
};
XN.webpager.Conv.prototype = {
	init : function() {
	},
	htmlFilter : function(str) {
		str = str.replace(/</g, "&lt;");
		str = str.replace(/>/g, "&gt;");
		return str;
	},
	updateProfile : function(obj) {
		var o = XN.webpager.friendbook.map[this.f_id] || {};
		$extend(o, obj);
		XN.webpager.friendbook.map[obj.id] = o;
		this.fireEvent("conv_profile_updated", o);
	},
	showSystemMsg : function(msg) {
		var p = {
			fromname : "",
			head : XN.webpager.User.head,
			msg_content : msg,
			time : XN.webpager.tools.getTime(),
			type : "system"
		};
		this.unshiftReply(p);
	},
	checkContent : function(str) {
		if (str.length > 2000) {
			return {
				isOK : false,
				msg : XN.webpager.msg.TOO_LONG
			};
		}
		return {
			isOK : true,
			msg : "sus"
		};
	},
	sendConv : function(conv) {
		this.fireEvent("conv_before_send", conv);
		conv.msg_content = XN.webpager.tools.htmlFilter(conv.msg_content);
		conv.fromuin = XN.webpager.User.id;
		conv.fromname = XN.webpager.User.name;
		conv.touin = this.f_id;
		conv.msg_content = XN.webpager.tools.unescapeHTML(conv.msg_content);
		$msg_proxy.send(conv);
		if (!XN.webpager.Conv.isConvAva(this.f_id)) {
			this.fireEvent("conv_conv_offline");
		}
	},
	doConv : function(_203) {
	},
	destroy : function() {
		if (XN.webpager.Conv.convs[this.f_id]) {
			if (XN.webpager.Conv.activeConv
					&& this.f_id == XN.webpager.Conv.activeConv.f_id) {
				XN.webpager.Conv.activeConv = null;
			}
			this.fireEvent("conv_destroy");
			XN.webpager.Conv.delConvs[this.f_id] = XN.webpager.Conv.convs[this.f_id];
			delete XN.webpager.Conv.convs[this.f_id];
			XN.webpager.Conv.saveConvs();
		}
	},
	unshiftReply : function(conv) {
		this.replies.unshift(conv);
		this.fireEvent("conv_replies_unshift", conv);
	},
	replaceReplies : function(rs) {
		this.replies = rs;
		this.fireEvent("conv_replies_replace", rs);
	},
	isActive : function() {
		return XN.webpager.Conv.activeConv == this;
	},
	startConv : function(_206, _207) {
		this.started = true;
		XN.webpager.Conv.setActive(this, _206);
		if (!this.replies || !(this.replies.length)) {
			this.replaceReplies(this.getMessageHistory(this.f_id));
		}
		this.fireEvent("conv_conv_started", _207);
	},
	disactive : function(save) {
		this.started = false;
		XN.webpager.Conv.cancelActive(this, save);
		this.fireEvent("conv_status_disactive");
	},
	getMessageHistory : function(f_id) {
		var ret = XN.webpager.MessagerProxy.getMessageHistory(f_id);
		return ret;
	},
	getMyInfo : function() {
		var This = this;
		XN.webpager.getUserInfo(this.f_id, function(info, r) {
					This.fireEvent("conv_my_info_got", info);
				});
	}
};
$extend(XN.webpager.Conv, {
	convs : {},
	delConvs : {},
	getConv : function(_20e) {
		return this.convs[_20e];
	},
	updateProfile : function() {
		for (conv in this.convs) {
			this.convs[conv] && this.convs[conv].updateProfile();
		}
	},
	addConv : function(_20f, save) {
		if (!_20f) {
			return;
		}
		var conv = this.convs[_20f.id];
		var _212 = this.delConvs[_20f.id];
		if (conv) {
			if (this.activeConv && this.activeConv.f_id == conv.f_id) {
			}
			logger
					.log("\u67e5\u627e\u7684\u5bf9\u8c61\u6ca1\u6709\u88ab\u5173\u95ed,\u76f4\u63a5\u5c06\u5b83\u8fd4\u56de");
			return this.convs[_20f.id];
		}
		logger
				.log("\u6240\u67e5\u627e\u7684\u5bf9\u8c61\u66fe\u7ecf\u88ab\u5173\u95ed");
		var _213;
		if (_212) {
			logger
					.log("\u6240\u67e5\u627e\u7684\u5bf9\u8c61\u5e76\u6ca1\u6709\u88ab\u9500\u6bc1");
			_213 = _212;
			this.convs[_20f.id] = _213;
			var c = new XN.webpager.convWindow({
						name : _20f.name,
						head : _20f.tiny,
						status : _20f.status,
						renc_status : _20f.doing,
						replies : [],
						model : _213
					});
			XN.webpager.tasks.add(c);
		} else {
			var _215 = this.parseType(_20f.label);
			if (_215 == "Conv") {
				_213 = new XN.webpager.Conv({
							f_id : _20f.id,
							f_name : _20f.name,
							replies : []
						});
				this.convs[_20f.id] = _213;
				var c = new XN.webpager.convWindow({
							name : _20f.name,
							head : _20f.tiny,
							status : _20f.status,
							type : "\u5206\u4eab",
							subType : "\u94fe\u63a5",
							renc_status : _20f.doing,
							replies : [],
							model : _213
						});
				XN.webpager.tasks.add(c);
			} else {
				if (_215 == "ChatRoom") {
					var _ids = _20f.label.split("_");
					logger.log("\u7528" + _20f.label + " \u6784\u5efaChatRoom");
					_213 = XN.webpager.ChatRoom.addRoom({
								id : _20f.label,
								f_id : _20f.label,
								r_id : _20f.label,
								source : _ids[1],
								type : _ids[2]
							}, {
								feed_actor : _ids[0],
								feed_source : _ids[1],
								feed_stype : _ids[2],
								type : _ids[2]
							}, false, false);
					this.convs[_213.id] = _213;
				}
			}
		}
		if (save) {
			this.saveConvs();
		}
		return _213;
	},
	saveConvs : function() {
		XN.webpager.persistMgr.save("conv", {
					activeModelId : this.activeConv
							? this.activeConv.f_id
							: null,
					models : this.convs
				});
	},
	setActive : function(_217, _218) {
		this.activeConv = _217;
		if (_218 === false) {
			return;
		}
		this.saveConvs();
	},
	cancelActive : function(conv, save) {
		this.activeConv = null;
		if (save === false) {
			return;
		}
		this.saveConvs();
	},
	findConv : function(_21b) {
		logger.log("\u67e5\u627e\u7684userObj\u662f:");
		logger.log(_21b);
		if (!_21b) {
			return;
		}
		var conv = this.convs[_21b.id];
		if (!conv) {
			logger
					.log("\u8981\u67e5\u627e\u7684conv\u6ca1\u6709\u6253\u5f00, \u65b0\u5efa\u4e00\u4e2a!");
			conv = this.addConv(_21b);
			logger
					.log("\u7ecf\u8fc7\u65b0\u5efa, \u5f97\u5230\u7684conv\u662f:");
			logger.log(conv);
		}
		conv.startConv();
	},
	isConvAva : function(f_id) {
		return !!XN.webpager.friendbook.map[f_id];
	},
	isInAry : function(ele, ary) {
		var ret = false;
		for (index in ary) {
			if (ary[index] == ele) {
				return true;
			}
		}
		return ret;
	},
	destroyConvs : function() {
		var sta = XN.webpager.initModelStatus;
		XN.array.each(this.convs, function(i, conv) {
					conv.destroy(false);
				});
	},
	parseType : function(_224) {
		if (!_224) {
			return "Conv";
		}
		var info = _224.split("_");
		var type = "";
		var last = info[info.length - 1];
		if (isNaN(parseInt(last))) {
			type = "Conv";
		} else {
			type = "ChatRoom";
		}
		return type;
	},
	buildConvs : function(_228) {
		logger.log("buildConvs: get from cookie:"
				+ window.imengine.imHelper.getCookie("wp_save"));
		var This = this;
		var _map = XN.webpager.friendbook.map;
		var sta = XN.webpager.initModelStatus;
		var _22c = XN.json.parse(XN.webpager.persistMgr.preModelStatus);
		if (sta && sta.conv && sta.conv.models === "") {
			this.destroyConvs();
			return;
		}
		if (sta.conv && sta.conv.models !== undefined && sta.conv.models !== "") {
			var _22d = _22c.conv ? _22c.conv.activeModelId : null;
			var _22e = sta.conv.activeModelId;
			var ids = sta.conv.models.split(",");
			var _230;
			if (_22c.conv) {
				_230 = _22c.conv.models.split(",");
			} else {
				_230 = [];
			}
			var _231;
			var _232;
			var _233 = {};
			if (_230.length > ids.length) {
				_231 = _230;
				_232 = ids;
			} else {
				_231 = ids;
				_232 = _230;
			}
			XN.array.each(_231, function(i, id) {
						_233[_231[i]] = true;
						if (_232[i]) {
							_233[_232[i]] = true;
						}
					});
			XN.array.each(_233, function(i, _237) {
				if (_237 !== true) {
					return;
				}
				logger.log("\u6b63\u5728\u5904\u7406: " + i);
				var m_id = i.substring(0, i.lastIndexOf("_"));
				var temp = XN.webpager.friendbook.map[m_id];
				var _23a = i.split("_");
				if (!temp) {
					logger
							.log(m_id
									+ " \u7528\u8fd9\u4e2aid\u53d6\u4e0d\u5230\u597d\u53cb");
					temp = {
						id : m_id,
						label : i,
						name : _23a[1]
					};
				}
				if (This.isInAry(i, ids)) {
					temp = This.addConv(temp);
					if (temp.f_id && sta.conv.activeModelId == temp.f_id) {
						logger.log("active id \u5c31\u662f" + temp.f_id
								+ ", \u8c03\u7528startConv\u65b9\u6cd5");
						setTimeout(function() {
									temp.startConv(false, _228 === true
													? undefined
													: false);
								}, 0);
					} else {
						logger
								.log(temp.f_id
										+ "\u4e0d\u662f\u5f53\u524d\u7684activeId\u54e6\uff5eactive Id\u662f\uff1a"
										+ sta.conv.activeModelId);
					}
				} else {
					logger.log("\u8c03\u7528model\u7684destroy\u65b9\u6cd5");
					if (This.parseType(i) == "ChatRoom") {
						XN.webpager.Conv.convs[i].destroy();
					} else {
						if (XN.webpager.Conv.convs
								&& XN.webpager.Conv.convs[m_id]) {
							XN.webpager.Conv.convs[m_id].destroy();
						}
					}
				}
			});
			var _23b = this.convs[_22d];
			logger.log("preActive id: " + _22d);
			logger.log(_23b);
			if (_22d != _22e && _23b) {
				logger.log("disactive");
				_23b && _23b.disactive(false);
			}
		}
	}
});
XN.event.enableCustomEvent(XN.webpager.Conv.prototype);
XN.event.enableCustomEvent(XN.webpager.Conv);
XN.webpager.friendbook = {
	map : {},
	userInfo : {},
	init : function() {
		this.bindEvent();
		if (XN.webpager.initModelStatus) {
			this.fetOnlineFriend(true);
		} else {
			this.getOnlineCount();
		}
	},
	updateFriends : function(ret) {
		var This = this;
		XN.array.each(ret.friends, function(i, _23f) {
					This.map[_23f.id] = _23f;
				});
	},
	bindEvent : function() {
		var This = this;
		this.addEvent("friendbook_count_got", function(_241, ret) {
					var User = XN.webpager.User;
					XN.webpager.User.name = ret.hostname;
					XN.webpager.User.id = ret.hostid;
					XN.webpager.User.head = ret.tinyurl || User.head;
				});
		this.addEvent("friendbook_friends_got", function(ret, _245) {
					var User = XN.webpager.User;
					XN.webpager.User.name = ret.hostname;
					XN.webpager.User.id = ret.hostid;
					if (_245) {
						return;
					}
					XN.array.each(ret.friends, function(i, _248) {
								This.map[_248.id] = _248;
							});
				});
		this.addEvent("friendbook_initFriends_got", function(ret) {
					var User = XN.webpager.User;
					XN.webpager.User.name = ret.hostname;
					XN.webpager.User.id = ret.hostid;
				});
	},
	getFriendCache : function() {
		var wpu = XN.webpager.User;
		this.fireEvent("friendbook_friends_got", {
					friends : this.map,
					hostname : wpu.name,
					hostid : wpu.id
				}, true);
	},
	fetOnlineFriend : function(_24c, fn) {
		var This = this;
		if (this.pause) {
			this.getFriendCache();
			if (fn) {
				fn();
			}
		} else {
			this.getOnlineFriend(_24c, fn);
			this.pause = true;
			this.pauseTimer = setTimeout(function() {
						This.pause = false;
						clearTimeout(This.pauseTimer);
					}, 60000);
		}
	},
	getOnlineFriend : function(_24f, fn) {
		var This = this;
		this.fireEvent("friendbook_before_friends_got");
		new XN.net.xmlhttp({
					url : "http://wpi." + XN.env.domain
							+ "/getonlinefriends.do?ran=" + Math.random(),
					onSuccess : function(r) {
						var ret = XN.json.parse(r.responseText);
						if (ret) {
							This.updateFriends(ret);
							if (!_24f) {
								This.fireEvent("friendbook_friends_got", ret);
							} else {
								This.fireEvent("friendbook_initFriends_got",
										ret);
							}
							This.fireEvent("friendbook_count_got",
									ret.onlineFriendsCount, ret);
						} else {
						}
						if (fn) {
							fn();
						}
					}
				});
	},
	getOnlineCount : function() {
		var This = this;
		new XN.net.xmlhttp({
					url : "http://wpi." + XN.env.domain
							+ "/getonlinecount.do?ran=" + Math.random(),
					onSuccess : function(r) {
						var ret = XN.json.parse(r.responseText);
						if (ret) {
							try {
								This.fireEvent("friendbook_count_got",
										ret.onlineFriendsCount, ret);
							} catch (e) {
								if (XN.DEBUG_MODE) {
									alert(e);
								}
							}
						} else {
							if (XN.DEBUG_MODE) {
								alert("friends load failed");
							}
						}
					}
				});
	},
	getUserInfo : function(_257, fn) {
		var This = this;
		new XN.net.xmlhttp({
					url : "http://friend.renren.com/ajaxGetTinyUrl",
					data : "param=" + _257,
					onSuccess : function(r) {
						var obj = XN.json.parse(r.responseText);
						if (fn) {
							fn(obj, r);
						}
					}
				});
	},
	getTiny : function(id) {
		return XN.webpager.friendbook.map[id]
				&& XN.webpager.friendbook.map[id].tiny || this.userInfo[id]
				&& this.userInfo[id].head;
	},
	search : function(key) {
		if (!key) {
			return this.map;
		}
		var _25e = {};
		var name;
		XN.array.each(this.map, function(i, _261) {
					name = _261.name;
					if (name.indexOf(key) != -1) {
						_25e[_261.id] = _261;
					}
				});
		return _25e;
	}
};
XN.event.enableCustomEvent(XN.webpager.friendbook);
XN.webpager.mgr = {
	isOnline : false,
	connConf : 1,
	init : function() {
		this.connTry = new XN.webpager.tryer();
		this.disconnTry = new XN.webpager.tryer();
		if (XN.webpager.persistMgr.getWpiCookie("c") === 0) {
			this.disConnect();
		} else {
			this.connect();
		}
		this.bindEvent();
	},
	bindEvent : function() {
		var This = this;
		var xw = XN.webpager;
		xw.persistMgr.addEvent("persist_conn_dif", function(c) {
					if (c) {
						This.fireEvent("mgr_connected");
					} else {
						This.fireEvent("mgr_disConnected");
					}
				});
		this.connTry.addEvent("tryer_timeout", function() {
					This.connectFaild();
				});
		this.connTry.addEvent("tryer_sus", function() {
					This.fireEvent("mgr_connected");
				});
		this.disconnTry.addEvent("tryer_sus", function() {
					This.fireEvent("mgr_disConnected");
				});
	},
	connect : function() {
		var This = this;
		this.isOnline = true;
		this.fireEvent("mgr_connecting");
		webpager.enableConn(true);
		this.connTry.tryAWhile(1000, 20000, function() {
					logger.log("\u8fde\u63a5\u72b6\u6001: "
							+ webpager.getConnState());
					if (webpager.getConnState()) {
						This.saveConn(true);
						return true;
					}
				});
	},
	disConnect : function() {
		var This = this;
		this.isOnline = false;
		webpager.enableConn(false);
		this.disconnTry.tryAWhile(1000, 20000, function() {
					logger.log("\u8fde\u63a5\u72b6\u6001: "
							+ webpager.getConnState());
					if (!webpager.getConnState()) {
						This.saveConn(false);
						return true;
					}
				});
	},
	saveConn : function(c) {
		this.connConf = c;
		XN.webpager.persistMgr.savethis("c", c ? 1 : 0);
	},
	getConnState : function() {
		return webpager.getConnState();
	},
	connectFaild : function() {
		this.isOnline = false;
		this.fireEvent("mgr_connectFaild");
	},
	playSound : function(type) {
		logger.log("playSound: \u54d7\u5566\u5566~");
		if (webpager.isLocalConnect()) {
			window.imengine.imHelper.playSound();
		}
	}
};
XN.event.enableCustomEvent(XN.webpager.mgr);
XN.webpager.notifyBox = {
	notifies : [],
	delQ : [],
	init : function() {
		this.bindEvent();
	},
	bindEvent : function() {
		var This = this;
		XN.webpager.MessagerProxy.addEvent("proxy_notify_got", function(n) {
					var json = XN.json.parse(n.content);
					This.notifies.unshift(json);
					This.fireEvent("notifyBox_notify_updated", json);
				});
	},
	makeNotifyUrl : function(_26c, nid) {
		var _26e = XN.webpager.url.DEL_NOTIFY + "?uid=" + XN.webpager.User.id
				+ "&source=" + _26c;
		return _26e;
	},
	delAll : function(_26f) {
		logger
				.log("\u5220\u9664\u6240\u6709notify...\u5f53\u524d\u5f85\u5220notify\u6570\u91cf\u4e3a:("
						+ this.delQ.length);
		var n = this.delQ.pop();
		while (n) {
			if (n) {
				n.call(this);
			}
			n = this.delQ.pop();
		}
		logger.log("\u6240\u6709notify\u5220\u9664\u540e\u5269\u4e0b\uff1a("
				+ this.delQ.length);
		if (window.delBySource) {
			logger.log("\u8c03\u7528\u9996\u9875\u7684\u65b9\u6cd5delBySource");
			delBySource("16-" + _26f);
		}
	},
	delANotify : function(nid, _272) {
		var This = this;
		for (var i = 0; i < this.notifies.length; i++) {
			if (this.notifies[i].nid == nid) {
				this.notifies.splice(i, 1);
				break;
			}
		}
		new XN.net.xmlhttp({
					url : _272,
					onSuccess : function() {
						This.replaceNotify(This.notifies);
					}
				});
	},
	delNotify : function(_275, _276, nid) {
		var This = this;
		var ret = [];
		logger
				.log("\u904d\u5386notify\u6570\u7ec4,\u51c6\u5907\u5220\u9664(by source "
						+ _275 + ")");
		for (var i = 0; i < this.notifies.length; i++) {
			logger.log(i + ": " + this.notifies[i].source);
			if (this.notifies[i].source != _275) {
				ret.push(this.notifies[i]);
			} else {
				logger
						.log("\u627e\u5230\u4e00\u4e2asource\u4e00\u6837\u7684notify, del \u4e4b!");
			}
		}
		logger
				.log("\u7ecf\u8fc7\u5220\u9664\u7684\u6570\u7ec4(\u8fd8\u6ca1\u66f4\u65b0\u6a21\u578b,\u53ea\u662f\u4e34\u65f6\u7684\u53d8\u91cf):");
		logger.log(ret);
		if (this.notifies.length == ret.length) {
			return;
		}
		new XN.net.xmlhttp({
					url : _276,
					onSuccess : function() {
						This.replaceNotify(ret);
					}
				});
		if (!this.notifies.length) {
			this.fireEvent("notifyBox_notify_none", seq);
		}
	},
	getLen : function(o) {
		var len = 0;
		for (p in o) {
			len++;
		}
		return len;
	},
	replaceNotify : function(nAry) {
		this.notifies = nAry;
		this.fireEvent("notifyBox_notify_replace");
	},
	mergeNotify : function(a1, a2) {
		if (!a2.length) {
			return a1;
		}
		var ret = {};
		var _281 = [];
		var len1 = a1.length;
		var len2 = a2.length;
		a1 = a1.concat(a2);
		for (var i = 0; i < a1.length; i++) {
			ret[a1[i].nid] = a1[i];
		}
		for (n in ret) {
			_281.push(ret[n]);
		}
		_281.sort(function(a, b) {
					return a.nid < b.nid;
				});
		return _281;
	},
	loadNotifies : function() {
		var This = this;
		var p = {
			view : 1,
			nid : 0,
			limit : 10,
			rand : Math.random()
		};
		new XN.net.xmlhttp({
					url : XN.webpager.url.NOTIFY,
					data : XN.array.toQueryString(p),
					onSuccess : function(r) {
						var ary = XN.json.parse(r.responseText);
						if (ary) {
							This.replaceNotify(ary);
						}
					}
				});
	}
};
XN.event.enableCustomEvent(XN.webpager.notifyBox);
XN.webpager;
$extend(XN.webpager.ChatRoom, {
	bindDataModelEvent : function() {
		var This = this;
		$msg_proxy.addEvent("proxy_gossip_got", function(n, ugc) {
		(function	() {
						var xwnb = XN.webpager.notifyBox;
						xwnb.delQ.push(function() {
									xwnb.delANotify(ugc.nid, xwnb
													.makeNotifyUrl(ugc.source,
															ugc.nid));
								});
					})();
				});
		$msg_proxy.addEvent("proxy_gossip_got", function(_28f, ugc) {
			try {
				logger.log("\u6536\u5230\u6d88\u606f");
				logger
						.log("\u6d88\u606f\u5185\u5bb9\u662f: "
								+ ugc.ugc_content);
				_28f.id = ugc.feed_actor + "_" + ugc.feed_source + "_"
						+ ugc.feed_stype;
				_28f.source = ugc.feed_source;
				_28f.f_id = _28f.id;
				_28f.r_id = _28f.id;
				_28f.icon = ugc.icon;
				var xw = XN.webpager;
				var xwc = xw.ChatRoom;
				var rm = xwc.room[_28f.r_id];
				if (XN.webpager.isHost(ugc.from_id)) {
					logger
							.log("\u8fd9\u662f\u4e00\u6761\u6765\u81ea\u672c\u4eba\u7684\u6d88\u606f");
					if (rm && rm.x) {
						rm.x = false;
						XN.log("gossip to rejoin group, throw it!");
						return;
					}
				}
				if (rm && rm.x && ugc.time < 0) {
					logger.log("time\u5c0f\u4e8e0\u4e86 "
							+ "gossip not for me(time<0&&x==true), throw it!");
					XN.log("gossip not for me(time<0&&x==true), throw it!");
					return;
				}
				if (!xw.isHost(ugc.from_id)) {
					logger
							.log("\u8fd9\u4e0d\u662f\u81ea\u5df1\u7684\u6d88\u606f,\u64ad\u653e\u58f0\u97f3");
					XN.webpager.mgr.playSound();
					logger
							.log("\u975e\u81ea\u5df1\u7684\u6d88\u606f\u521b\u5efa\u7fa4");
					var rm = xwc.addRoom(_28f, ugc);
					XN.webpager.Conv.convs[_28f.id] = rm;
				}
				var gsp = XN.json.parse(_28f.content);
				if (gsp) {
					gsp.isHost = xw.isHost(ugc.from_id);
					gsp.timestamp = _28f.timestamp || new Date().getTime();
					logger
							.log("\u5c06\u8fd9\u6761\u6d88\u606f\u653e\u8fdb\u961f\u5217, \u8c03\u7528pushGsp");
					rm && rm.pushGsp(gsp);
				}
			} catch (e) {
				if (XN.webpager.debug) {
					alert(e);
				}
			}
		});
	}
});
XN.webpager.ChatRoom.bindDataModelEvent();
$extend(XN.webpager.Conv, {
	bindEvent : function() {
		var This = this;
		var xw = XN.webpager;
		$msg_proxy.addEvent("proxy_conv_got", function(_297) {
					logger.log("^^^^^^^\u6536\u5230\u5355\u804a\u6d88\u606f");
					logger.log(_297);
					var p = {
						id : _297.fromuin,
						name : _297.fromname,
						content : _297.msg_content
					};
					var fri = XN.webpager.friendbook.map[_297.fromuin];
					var conv = xw.Conv.convs[_297.fromuin];
					if (!conv) {
						p.status = This.getStatus(_297.fromuin);
						if (fri) {
							p.tiny = fri.tiny;
						}
						conv = This.addConv(p, true);
					}
					_297.time = XN.webpager.tools.getTime();
					try {
						if (!fri) {
							XN.webpager.friendbook.getUserInfo(_297.fromuin,
									function(obj) {
										conv.updateProfile({
													id : _297.fromuin,
													tiny : obj[_297.fromuin].head,
													name : obj[_297.fromuin].name,
													status : 2
												});
										conv.unshiftReply(_297);
									});
						} else {
							conv.unshiftReply(_297);
						}
					} catch (e) {
					}
				});
		XN.webpager.friendbook.addEvent("friendbook_initFriends_got", function(
						ret) {
					This.buildConvs();
				});
		XN.webpager.persistMgr.addEvent("persist_modelStatus_dif", function() {
					var _map = XN.webpager.friendbook.map;
					if (XN.json.build(_map) == "{}") {
						XN.webpager.friendbook.getOnlineFriend(false,
								function() {
									This.buildConvs(true);
								});
						return;
					}
					This.buildConvs();
				});
		XN.webpager.persistMgr.addEvent("persist_layout_dif", function() {
					xw.backLayout();
				});
		XN.webpager.persistMgr.addEvent("persist_no_models", function() {
					This.destroyConvs();
				});
		XN.webpager.MessagerProxy.addEvent("proxy_send_back", function(n) {
					n.time = XN.webpager.tools.getTime();
					var conv = XN.webpager.Conv.convs[n.touin];
					conv.unshiftReply(n);
				});
	},
	getStatus : function(id) {
		var m = XN.webpager.friendbook.map[id];
		return m ? m.status : 2;
	}
});
XN.webpager.Conv.bindEvent();
XN.webpager.ChatRoomKeeper = function(_2a2) {
	$extend(this, _2a2);
	this.init();
};
XN.webpager.ChatRoomKeeper.prototype = {
	winMap : {
		share : "shareWindow"
	},
	init : function() {
		this.room = new XN.webpager.ChatRoom({
					topic : this.ugc,
					guest : this.guest,
					gossips : []
				});
		var _2a3 = this.room.topic;
		this.roomSkin = new XN.webpager[this.winMap[this.UGCType]]({
					name : XN.webpager.User.name,
					head : XN.webpager.User.head,
					type : _2a3.type,
					subType : _2a3.subType,
					description : _2a3.description,
					content : _2a3.content,
					replies : this.gossips || []
				});
		XN.webpager.tasks.add(this.roomSkin);
		this.bindEvent();
		this.fireEvent("room_build");
	},
	bindEvent : function() {
		var This = this;
		this.addEvent("room_build", function() {
					This.roomSkin.show();
				});
		this.addEvent("check_error", function() {
				});
		this.addEvent("check_error_blank", function() {
				});
		this.roomSkin.textarea.addEvent("keydown", function(e) {
					e = e || window.event;
					if (e.keyCode == 13) {
						This.roomSkin.textarea.blur();
						if (!This.checkForm(This.roomSkin.textarea.value)) {
							return;
						}
						This.room.broadcast({
									content : This.roomSkin.textarea.value
								});
						var _2a6 = {
							name : XN.webpager.User.name,
							head : XN.webpager.User.head,
							content : This.roomSkin.textarea.value,
							time : "11-10 18:00"
						};
						This.roomSkin.options.replies.push(_2a6);
						This.roomSkin.update();
						This.roomSkin.textarea.value = "";
					}
				});
		this.room.addEvent("room_gossip_push", function(_2a7) {
				});
	},
	checkForm : function(msg) {
		if (!XN.string.trim(msg)) {
			this.fireEvent("check_error_blank");
		}
		return true;
	}
};
XN.event.enableCustomEvent(XN.webpager.ChatRoomKeeper.prototype);
XN.webpager.initBoot = function() {
	if (!arguments.callee.init) {
		var _2a9 = document.createElement("div");
		_2a9.id = "footerbar";
		_2a9.innerHTML = [
				"<div id=\"webpager\" class=\"webpager\" style=\"height:24px;\">",
				"<div id=\"wpi_left_bundle\" class=\"panelbarpanels\" style=\"float:left;border-right:1px solid #B5B5B5;\"></div>",
				"<div class=\"panelbarpanels\" style=\"float:right;height:24px;\">",
				"<div id=\"webpager-ad-panel\" class=\"ad-panel panel\"></div>",
				"<div id=\"tasks-panel\" class=\"panel\" style=\"min-width:0;\">",
				"<div id=\"webpager_slider_left\" style=\"display:none;\" class=\"more\"><button class=\"previous\">1</button></div>",
				"<div id=\"tasks-panel-inner\" class=\"windows\" ></div>",
				"<div id=\"webpager_slider_right\" style=\"display:none;\" class=\"more\"><button class=\"next\">2</button></div>",
				"<div id=\"chatroom-panel\"></div>",
				"<div id=\"conv-panel\"></div>", "</div>",
				"<div id=\"friends-panel\" class=\"panel\"></div>",
				"<div id=\"notification-panel\" class=\"panel\"></div>",
				"<div id=\"setting-panel\" class=\"panel\"></div>",
				"<div id=\"back-widget-group\" class=\"panel\"></div>",
				"</div>", "</div>"].join("");
		var _2aa = $("bottombar");
		if (XN.browser.IE) {
			bodyChildren = document.body.children;
			for (var i = 0; i < bodyChildren.length; i++) {
				if (_2aa == bodyChildren[i]) {
					break;
				}
				if (i == bodyChildren.length - 1) {
					document.body.appendChild(_2aa);
				}
			}
		}
		_2aa.appendChild(_2a9.getElementsByTagName("div")[0]);
		this.webpagerDiv = $("webpager");
		this.leftBundle = $("wpi_left_bundle");
		this.settingDiv = $("setting-panel");
		this.friendsDiv = $("friends-panel");
		this.notificationDiv = $("notification-panel");
		this.backDiv = $("back-widget-group");
		this.taskPanel = $("tasks-panel-inner");
		this.taskPanel._oldOffsetHeight = this.taskPanel.offsetHeight;
		this.left = $("webpager_slider_left");
		this.right = $("webpager_slider_right");
		arguments.callee.init = true;
	}
};
XN.webpager.init = function() {
	var xw = XN.webpager;
	if (xw.inited) {
		return;
	}
	logger.log("webpager \u5f00\u59cb\u521d\u59cb\u5316...");
	this.initBoot();
	logger
			.log("webpager \u6240\u9700\u8981\u7ed3\u6784\u6784\u9020\u5b8c\u6bd5");
	this.tasks = new XN.webpager.ConvGroup(this.taskPanel);
	window.tasks = this.tasks;
	this.friendsGroup = new XN.webpager.windowGroup($("friends-panel"));
	this.settingGroup = new XN.webpager.windowGroup($("setting-panel"));
	this.notifyGroup = new XN.webpager.windowGroup($("notification-panel"));
	window.tasks = XN.webpager.tasks;
	window.setting = XN.webpager.friendsGroup;
	var _2ad = new XN.webpager.Widget({
		strContent : "<div class=\"panelbarbutton\"><a id=\"wpi_back_to_top\" href=\"#\" onclick=\"return false;\" style=\"color:#333;vertical-align:middle;\"><img class=\"icon\"src=\"http://s.xnimg.cn/imgpro/icons/back_to_top.gif\" />\u56de\u9876\u90e8</a></div>"
	});
	_2ad.element.addEvent("click", function() {
				window.scrollTo(0, 0);
			});
	var _2ae = new XN.webpager.WidgetGroup($("back-widget-group"));
	_2ae.add(_2ad);
	XN.webpager.notifyBox.init();
	logger
			.log("webpager \u901a\u77e5\u7ba1\u7406\u5668(model)\u521d\u59cb\u5316\u5b8c\u6bd5");
	XN.webpager.settingGroup.add(new XN.webpager.settingsWindow());
	logger.log("webpager \u8bbe\u7f6e(setting)\u521d\u59cb\u5316\u5b8c\u6bd5");
	XN.webpager.notifyGroup.add(new XN.webpager.notifyWindow({
				model : XN.webpager.notifyBox
			}));
	logger
			.log("webpager \u901a\u77e5\u7ba1\u7406\u5668(view)\u521d\u59cb\u5316\u5b8c\u6bd5");
	var _2af = new XN.webpager.friendsWindow({
				model : XN.webpager.friendbook
			});
	XN.webpager._friendbook = _2af;
	XN.webpager.friendsGroup.add(_2af);
	logger
			.log("webpager \u597d\u53cb\u5217\u8868\u521d\u59cb\u5316\u5b8c\u6bd5");
	XN.webpager.winSlider.init();
	logger
			.log("webpager \u7a97\u53e3\u5e03\u5c40\u7ba1\u7406\u5668(winSlider)\u521d\u59cb\u5316\u5b8c\u6bd5");
	XN.webpager.pagerTimer.init();
	logger.log("webpager \u8ba1\u65f6\u5668\u521d\u59cb\u5316\u5b8c\u6bd5");
	XN.webpager.mgr.init();
	logger
			.log("webpager \u7cfb\u7edf\u7ba1\u7406\u5668(\u8fde\u63a5\u7ba1\u7406\u7b49)\u521d\u59cb\u5316\u5b8c\u6bd5");
	xw.BlingMgr.init();
	logger
			.log("webpager \u95ea\u70c1\u7ba1\u7406\u5668\u521d\u59cb\u5316\u5b8c\u6bd5");
	XN.webpager.persistMgr.init();
	logger
			.log("webpager \u6301\u4e45\u5316\u7ba1\u7406\u5668\u521d\u59cb\u5316\u5b8c\u6bd5");
	this.bindEvent();
	logger.log("webpager \u4e8b\u4ef6\u7ed1\u5b9a\u5b8c\u6bd5");
	$.wpi.initApp().showApp();
	var _2b0;
	var _2b1 = $element("div");
	function showBackTip() {
		_2b0 && clearTimeout(_2b0);
		_2b1.show();
		_2b0 = setTimeout(function() {
					hideBackTip();
				}, 4000);
	}
	function hideBackTip() {
		_2b1.hide();
		clearTimeout(_2b0);
	}
	_2b1.style.position = "absolute";
	_2b1.style.bottom = "35px";
	_2b1.style.right = "0px";
	_2b1
			.setContent("<div style=\"padding:5px;border:1px solid #d7b013;background:#fff9d7\"><img src=\"http://s.xnimg.cn/imgpro/icons/back_to_top.gif\"/>\u70b9\u51fb\u6b64\u6309\u94ae\u8fd4\u56de\u9875\u9762\u9876\u90e8<div id=\"wpi_back_to_top_arrow\" style=\"background:url(http://s.xnimg.cn/imgpro/arrow/tip-arrow-down.png?ver=2) no-repeat;height:6px;width:11px;position:absolute;bottom:-5px;right:25px;overflow:hidden;\"></div></div>");
	var _2b2 = $element("div");
	_2b1.hide();
	XN.webpager.webpagerDiv.appendChild(_2b1);
	XN.webpager.addEvent("view_webpager_scroll_bottom", function() {
				if (XN.webpager.settingGroup.hasActive) {
					return;
				}
				showBackTip();
			});
	XN.webpager.addEvent("view_webpager_scroll_common", function() {
				hideBackTip();
			});
	this.settingGroup.addEvent("view_group_has_active", function() {
				hideBackTip();
			});
	this.friendsGroup.addEvent("view_group_has_active", function() {
				hideBackTip();
			});
	var ua = navigator.userAgent;
	var _2b4 = ua.indexOf("Windows") != -1;
	var _2b5 = new XN.webpager.WidgetGroup($("webpager-ad-panel"));
	if (_2b4) {
		var _2b6 = "http://im.renren.com/desktop/ver8/rrsetup.exe?f=wpw8-2";
		var _2b7 = [
				[
						"\u4f60\u7684ta\u5728\u5fd9\u5565?\u4eba\u4eba\u684c\u9762,\u65f6\u523b\u638c\u63e1\uff01",
						_2b6],
				[
						"\u4eba\u4eba\u684c\u9762\u8bb0\u4e8b\u672c\uff0c\u5de5\u4f5c\u7410\u4e8b\u968f\u65f6\u8bb0\uff01",
						_2b6],
				[
						"\u4eba\u4eba\u684c\u9762\uff1a\u5c0f\u7a97\u770b\u89c6\u9891\uff0c\u4e0a\u73ed\u4e5f\u5a31\u4e50",
						_2b6],
				[
						"\u4eba\u4eba\u684c\u9762\u8d85\u795e\u901f\uff01\u79d2\u56deTa\u7684\u65b0\u72b6\u6001",
						_2b6],
				[
						"\u9ad8\u8003\u6cc4\u9898?\u96f6\u5206\u4f5c\u6587?\u4eba\u4eba\u684c\u9762\u5148\u77e5\u9053",
						_2b6]];
		if (window.imengine && window.imengine.ads) {
			_2b7 = window.imengine.ads;
			var hst = location.host;
			hst = hst.substring(0, hst.indexOf("."));
			if (hst && (hst == "app" || hst == "apps")) {
				_2b7 = window.imengine.game_ads;
			}
		}
		var _2b9 = _2b7[Math.floor(Math.random() * _2b7.length)];
		var _2ba = new XN.webpager.Widget({
			strContent : "<div class=\"ad-button\"><a id=\"wp_ad\" target=\"_blank\" style=\"background-image:url("
					+ _2b9[2]
					+ ");text-indent:7px;\" href=\""
					+ _2b9[1]
					+ "\">" + _2b9[0] + "</a></div>"
		});
		_2b5.add(_2ba);
		this.tasks.addEvent("view_a_window_added", function() {
					_2b5.hide();
				});
		this.tasks.addEvent("view_no_windows", function() {
					_2b5.container && _2b5.container.show();
				});
	} else {
		_2b5.container && _2b5.container.hide();
	}
	XN.webpager.fireEvent("webpager_loaded");
	XN.webpager.inited = true;
	logger.log(" -------------------------------------- ");
	logger
			.log("webpager \u521d\u59cb\u5316\u5b8c\u6bd5! \u5927\u529f\u544a\u6210!");
	logger.log(" -------------------------------------- ");
	if (window.webpager) {
		webpager.iamReady && webpager.iamReady(XN.webpager);
	}
};
XN.event.enableCustomEvent(XN.webpager);
XN.webpager.bindEvent = function() {
	var This = this;
	this.Conv.addEvent("conv_rebuild", function() {
				This.tasks.reset();
			});
	XN.event.addEvent(window, "scroll", function() {
				var _2bc = XN.webpager.tools;
				This.log((_2bc.getPageScroll().y + _2bc.getClientHeight())
						+ " " + _2bc.getWholeHeight());
				if ((_2bc.getPageScroll()).y + _2bc.getClientHeight() >= _2bc
						.getWholeHeight()) {
					This.fireEvent("view_webpager_scroll_bottom");
				} else {
					This.fireEvent("view_webpager_scroll_common");
				}
			});
	XN.event.addEvent(document, "click", function(e) {
				e = e || window.event;
				if (e.button != 0) {
					return;
				}
				This.hideAllWin();
			});
	this.webpagerDiv.addEvent("click", function(e) {
				e = e || window.event;
				var ele = e.srcElement || e.target;
				if (e.stopPropagation) {
					e.stopPropagation();
				} else {
					e.cancelBubble = true;
				}
			});
	this.addEvent("webpager_loaded", function() {
				XN.webpager.winSlider.resetPanelWidth();
			});
	if (XN.browser.IE6) {
		this.pagerTimer.addEvent("webpager_tools_timer", function() {
					This.winSlider.resizeCheck();
				});
	}
};
XN.dom.ready(function() {
	if (!XN.webpager) {
		return;
	}
	if (XN.disableWebpager) {
		return;
	}
	if (!window.$wp_messager) {
		$wp_messager = {
			send : function(msg) {
				window.imengine.wpcontroller.onInputMessage(msg);
			},
			getMessageHistory : function(u_id) {
				var ret = window.webpager.getMessageHistory(u_id);
				return ret;
			},
			getNotifyHistory : function() {
				return window.webpager.getNotifyHistory();
			}
		};
	}
	var i = 0;
	var _2c4 = new XN.webpager.tryer();
	_2c4.addEvent("tryer_timeout", function() {
			});
	_2c4.addEvent("tryer_sus", function() {
			});
	_2c4.tryAWhile(200, 20000, function() {
		logger.log("webpager \u5c1d\u8bd5\u521d\u59cb\u5316...");
		try {
			if (window.webpager && window.webpager.getMessageHistory) {
				logger
						.log("webpager\u521d\u59cb\u5316\u6761\u4ef6\u6ee1\u8db3");
				var wp = XN.webpager;
				logger
						.log("wp\u521d\u59cb\u5316\u7684\u65f6\u5019wimconn\u662f\uff1a"
								+ window.imengine.imHelper.getCookie("wimconn")
								+ " \u5982\u679c\u8fd9\u4e2a\u503c\u4e0d\u662f0\u6216\u80051, \u90a3\u4e48\u8fd9\u6709\u53ef\u80fd\u5bfc\u81f4\u957f\u8fde\u63a5\u521d\u59cb\u5316\u5931\u8d25,\u7136\u540e\u6240\u6709\u63a8\u9001\u7684\u6d88\u606f\u90fd\u6536\u4e0d\u5230");
				try {
					wp.init();
					if (webpager.getShowPager) {
						logger.log("pager-channel\u63a7\u5236UI\u663e\u793a: "
								+ webpager.getShowPager());
						XN.webpager.showPager(webpager.getShowPager());
					}
				} catch (e) {
					logger
							.log("!!!!\u521d\u59cb\u5316\u51fa\u73b0\u5f02\u5e38, \u7ec8\u6b62!!!!");
					logger.log(e);
					return true;
				}
				return true;
			}
			logger.log("\u6211\u64cd\uff5e\u6ca1\u6210\u529f...");
		} catch (e) {
			logger.log(e);
		}
	});
});
extendObject($, {
			clearRange : function() {
				try {
					document.selection
							? document.selection.empty()
							: getSelection().removeAllRanges();
				} catch (e) {
				}
			},
			text : function(node) {
				var _2c7 = node.childNodes;
				for (var i = 0, text = ""; i < _2c7.length; i++) {
					if (_2c7[i].nodeType == 3) {
						text += _2c7[i].nodeValue;
					}
				}
				return text;
			},
			css : function(ele, _2cb) {
				if (!ele) {
					return;
				}
				for (var i in _2cb) {
					ele.style[i] = _2cb[i];
				}
			},
			clear : function(node) {
				while (node && node.firstChild) {
					node.removeChild(node.firstChild);
				}
			},
			append : function(node, _2cf) {
				if (_2cf.tagName) {
					node.appendChild(_2cf);
				} else {
					var temp = document.createElement("div");
					temp.innerHTML = _2cf;
					while (temp.hasChildNodes()) {
						node.appendChild(temp.firstChild);
					}
				}
			},
			mouse : function(e) {
				e = e || event;
				var x = e.pageX || (e.clientX + XN.EVENT.scrollLeft());
				var y = e.pageY || (e.clientY + XN.EVENT.scrollTop());
				return {
					x : x,
					y : y
				};
			}
		});
$.wpi = $.wpi || {};
extendObject($.wpi, {
	parseMenuItem : function(_2d4) {
		var _2d5 = _2d4.getElementsByTagName("a")[0];
		return {
			id : _2d5.name,
			name : $.text(_2d5),
			href : _2d5.href,
			icon : _2d4.getElementsByTagName("img")[0].src,
			target : _2d5.target
		};
	},
	parseShortCut : function(_2d6) {
		return {
			id : _2d6.name,
			name : _2d6.title,
			href : _2d6.href,
			icon : _2d6.getElementsByTagName("img")[0].src,
			target : _2d6.target
		};
	},
	createShortCut : function(item) {
		var data = $.wpi.parseMenuItem(item);
		data.href = this.setUrlParam(data.href, "origin", (this.getBaseCode()
						* 100 + 93));
		return "<li><a href=\""
				+ data.href
				+ "\" title=\""
				+ data.name
				+ "\" name=\""
				+ data.id
				+ "\" target=\""
				+ data.target
				+ "\"><img src=\""
				+ data.icon
				+ "\" class=\"icon\" /><span class=\"tooltip\"><nobr>"
				+ data.name
				+ "</nobr><span class=\"tooltip-arrow\"></span></span></a></li>";
	},
	createMenuItem : function() {
		var _2d9 = document.createElement("dd");
		var data = arguments[0].nodeType
				? $.wpi.parseShortCut(arguments[0])
				: arguments[0];
		data.href = this.setUrlParam(data.href, "origin", (this.getBaseCode()
						* 100 + 92));
		_2d9.className = "move";
		_2d9.innerHTML = "<a href=\"" + data.href + "\" name=\"" + data.id
				+ "\" target=\"" + data.target + "\"><img src=\"" + data.icon
				+ "\" />" + data.name
				+ "<span class=\"del-handle\"></span></a>";
		return _2d9;
	},
	createHistroyItem : function(data) {
		data.href = this.setUrlParam(data.href, "origin", (this.getBaseCode()
						* 100 + 91));
		return "<dd><a href=\"" + data.href + "\" name=\"" + data.id
				+ "\" target=\"" + data.target + "\"><img src=\"" + data.icon
				+ "\" />" + data.name + "</a></dd>";
	},
	createStowItem : function(data) {
		return "<div class=\"panelbarbutton\"><a href=\""
				+ data.href
				+ "\" class=\"commend stow\" title=\""
				+ data.name
				+ "\" name=\""
				+ data.id
				+ "\" target=\""
				+ data.target
				+ "\"><img src=\""
				+ data.icon
				+ "\" class=\"icon\" /><img class=\"plus bauble plus-bullet\" src=\"http://a.xnimg.cn/imgpro/icons/green-plus-bullet.gif\" /> \u6536\u85cf"
				+ data.name + "</a></div>";
	},
	setUrlParam : function(url, _2de, _2df) {
		var reg = new RegExp("\\b" + _2de + "=.*?((?=[&])|$)");
		if (reg.test(url)) {
			return url.replace(reg, _2de + "=" + _2df);
		} else {
			var has = url.indexOf("?") != -1;
			return url + (has ? "&" : "?") + _2de + "=" + _2df;
		}
	},
	serial : [],
	ajaxAddApp : function(id) {
		if (this.serial.length < 6) {
			this.serial.push(id);
		} else {
			var temp = this.serial.slice(0, 5);
			temp.push(id);
			this.serial = temp.concat(this.serial.slice(5));
		}
		new XN.NET.xmlhttp({
					url : "http://apps." + XN.env.domain
							+ "/menu/addBookmark.do",
					method : "post",
					data : "app_id=" + id
				});
	},
	ajaxDelApp : function(id) {
		for (var i = 0; i < this.serial.length; i++) {
			if (this.serial[i] == id) {
				this.serial.splice(i, 1);
				break;
			}
		}
		new XN.NET.xmlhttp({
					url : "http://apps." + XN.env.domain
							+ "/menu/removeBookmark.do",
					method : "post",
					data : "app_id=" + id
				});
	},
	ajaxSerialApp : function(sn) {
		if (sn.join(",") != this.serial.join(",")) {
			this.serial = sn;
			new XN.NET.xmlhttp({
						url : "http://apps." + XN.env.domain
								+ "/menu/reorderBookmark.do",
						method : "post",
						data : "app_ids=" + XN.JSON.build(sn)
					});
		}
	},
	getBaseCode : function() {
		var list = {};
		list["home." + XN.env.domain] = 1;
		list["www." + XN.env.domain + "/profile.do"] = 2;
		list["msg." + XN.env.domain] = 3;
		list["apps." + XN.env.domain] = 5;
		list["game." + XN.env.domain] = 5;
		list["app." + XN.env.domain] = 7;
		list["app." + XN.env.domain + "/apps/editapps.do"] = 8;
		list["app." + XN.env.domain + "/apps/application.do"] = 9;
		list["app." + XN.env.domain + "/app/apps/list"] = 28;
		return list[location.hostname + location.pathname]
				|| list[location.hostname] || 0;
	}
});
(function() {
	$.effect = $.effect || {};
	var _2e8 = $.effect.MoveEffect = function(_2e9) {
		this.config = _2e9;
		this.element = $(_2e9.element);
		this.nodeStart = {
			x : 0,
			y : 0
		};
		this.mouseStart = {
			x : 0,
			y : 0
		};
		this.shadow = null;
		this.activeItem = null;
		if (XN.ELEMENT.getStyle(this.element, "position") == "static") {
			$.css(this.element, {
						"position" : "relative"
					});
		}
		this.init();
	};
	_2e8.prototype = {
		init : function() {
			var that = this;
			this.moveWrap = function(e) {
				var pos = $.mouse(e);
				if ((pos.x - that.mouseStart.x) == 0
						&& (pos.y - that.mouseStart.y) == 0) {
					return;
				}
				if (that.config.startMove) {
					that.config.startMove();
				}
				that.moveHandler(e);
			};
			this.repeaseWrap = function(e) {
				that.releaseHandler(e);
			};
			$(this.element).addEvent("mousedown", function(e) {
				e = e || window.event;
				that.activeItem = that.getActiveItem(e);
				if (that.activeItem == null) {
					return;
				}
				that.mouseStart = $.mouse(e);
				that.nodeStart = {
					x : that.activeItem.offsetLeft,
					y : that.activeItem.offsetTop
				};
				$(document).addEvent("mousemove", that.moveWrap).addEvent(
						"mouseup", that.repeaseWrap);
				XN.BROWSER.IE ? (e.returnValue = false) : e.preventDefault();
				return false;
			});
		},
		getActiveItem : function(e) {
			e = e || window.event;
			var obj = e.target || e.srcElement;
			while (obj.parentNode != this.element) {
				obj = obj.parentNode;
			}
			return obj.nodeType == 1 ? obj : null;
		},
		moveHandler : function(e) {
			e = e || window.event;
			this.createShadow();
			$.clearRange();
			var top = this.nodeStart.y + ($.mouse(e).y - this.mouseStart.y);
			var left = this.nodeStart.x + ($.mouse(e).x - this.mouseStart.x);
			if (!this.activeItem.parentNode
					|| this.config.outLimit(top, left,
							this.shadow.offsetHeight, this.shadow.offsetWidth)) {
				this.releaseHandler();
			} else {
				this.moveShadow(top, left);
				this.serialize(top, left);
			}
		},
		createShadow : function() {
			if (this.shadow == null) {
				this.shadow = this.activeItem.cloneNode(true);
				$(this.shadow).addClass("movemirror");
				$.css(this.shadow, {
							top : this.nodeStart.y + "px",
							left : this.nodeStart.x + "px",
							width : this.activeItem.offsetWidth + "px",
							height : this.activeItem.offsetHeight + "px"
						});
				$.append(this.element, this.shadow);
			}
		},
		releaseHandler : function(e) {
			$(document).delEvent("mousemove", this.moveWrap).delEvent(
					"mouseup", this.repeaseWrap);
			if (this.shadow) {
				$(this.shadow).remove();
				this.shadow = null;
				if (typeof this.config.release == "function") {
					this.config.release(this.activeItem);
				}
			}
		},
		moveShadow : function(top, left) {
			$.css(this.shadow, {
						top : top + "px",
						left : left + "px"
					});
		},
		serialize : function(top, left) {
			var _2f9 = this.config.getIndex(top, left,
					this.activeItem.offsetHeight, this.activeItem.offsetWidth);
			if (_2f9 >= 0) {
				var list = this.config.getChilds();
				if (list[_2f9]) {
					this.element.insertBefore(this.activeItem, list[_2f9]);
				} else {
					$.append(this.element, this.activeItem);
				}
			}
		}
	};
	var _2fb = null;
	var _2fc = null;
	var _2fd = null;
	var _2fe = null;
	var _2ff = null;
	var _300 = null;
	function sendNewSerial() {
		var _301 = _2fb.getElementsByTagName("dd");
		var sn = [];
		for (var i = 0; i < _301.length; i++) {
			sn.push(parseInt(_301[i].getElementsByTagName("a")[0].name));
		}
		$.wpi.ajaxSerialApp(sn);
	}
	function createAppMove() {
		_2ff = new _2e8({
			element : _2fb,
			getChilds : function() {
				return _2fb.getElementsByTagName("dd");
			},
			getIndex : function(top, left, offH, offW) {
				return Math.ceil(top / offH);
			},
			release : function() {
				$.clear(_2fe);
				var list = _2fb.getElementsByTagName("dd");
				for (var i = 0; i < list.length && i < 6; i++) {
					$.append(_2fe, $.wpi.createShortCut(list[i]));
				}
				var _30a = _2fb.getElementsByTagName("dt")[0];
				if (!_30a) {
					_30a = document.createElement("dt");
				}
				_2fb.insertBefore(_30a, list[6] || null);
				$.css(_30a, {
							display : (wpiMenuInfo.favoriteMenuCopy.length > 6
									? "block"
									: "none")
						});
				$.css($("wpi_collectionTitle"), {
							borderBottom : (list[0]
									? "1px solid #E3EEF9"
									: "none")
						});
				var _30b = _2fd.getElementsByTagName("img")[0];
				if (_30b) {
					for (var i = 0; i < list.length && i < 6; i++) {
						if (list[i].getElementsByTagName("img")[0].src == _30b.src) {
							_2fd.innerHTML = "";
							break;
						}
					}
				}
				sendNewSerial();
			},
			outLimit : function(top, left, offH, offW) {
				return (top < -offH || top > _2fb.offsetHeight);
			}
		});
	}
	function createCutMove() {
		_300 = new _2e8({
					element : _2fe,
					getChilds : function() {
						return _2fe.getElementsByTagName("li");
					},
					getIndex : function(top, left, offH, offW) {
						return Math.ceil(left / offW);
					},
					release : function() {
						var list = _2fe.getElementsByTagName("a");
						var _315 = _2fb.getElementsByTagName("dd");
						for (var i = 0; i < list.length; i++) {
							_2fb.replaceChild($.wpi.createMenuItem(list[i]),
									_315[i]);
						}
						sendNewSerial();
					},
					outLimit : function(top, left, offH, offW) {
						return (left < -offW || left > _2fe.offsetWidth);
					}
				});
	}
	function bindEvents() {
		_2fb = $("wpi_collectionApps");
		_2fd = $("wpi_addCollection");
		_2fe = $("wpi_shortCutsPanel");
		_2fc = $("wpi_hitoryPanel");
		createAppMove();
		createCutMove();
		_2fd.addEvent("click", function(e) {
					var app = _2fd.getElementsByTagName("a")[0];
					if (app) {
						$.wpi.addApp($.wpi.parseShortCut(app));
					}
					XN.EVENT.stop(e || event);
				});
		$.wpi.addApp = function(data) {
			var menu = null;
			var _31f = _2fb.getElementsByTagName("dd");
			for (var i = 0; i < _31f.length; i++) {
				if (_31f[i].getElementsByTagName("a")[0].getAttribute("name") == data.id) {
					menu = _31f[i];
					break;
				}
			}
			if (menu != null && i < 6) {
				return;
			}
			if (menu == null) {
				menu = $.wpi.createMenuItem(data);
				$.wpi.ajaxAddApp(wpiMenuInfo.currentAppCopy[0].id);
			}
			_2fb.insertBefore(menu, _31f[5] || null);
			_2ff.config.release();
			var _321 = XN.dom.getElementsByClassName("icon", _2fd)[0];
			if (_321 && _321.src == data.icon) {
				_2fd.innerHTML = "";
			}
		};
		_2fb.addEvent("click", function(e) {
			e = e || window.event;
			var obj = e.target || e.srcElement;
			if (obj.className == "del-handle") {
				while (obj.tagName != "DD") {
					obj = obj.parentNode;
				}
				var _324 = document.createElement("div");
				_324.innerHTML = "<tt class=\"del-tip\">\u5df2\u79fb\u51fa\u6536\u85cf</tt><tt class=\"del-reroll\">\u64a4\u9500</tt>";
				$.css(obj.getElementsByTagName("a")[0], {
							"display" : "none"
						});
				var _325 = setTimeout(function() {
					if (obj && obj.parentNode) {
						$.wpi.ajaxDelApp(obj.getElementsByTagName("a")[0].name);
						obj.parentNode.removeChild(obj);
						_2ff.config.release();
					}
				}, 4000);
				_324.timer = _325;
				$.append(obj, _324);
				XN.BROWSER.IE ? (e.returnValue = false) : e.preventDefault();
				return false;
			} else {
				if (obj.className == "del-reroll") {
					clearTimeout(obj.parentNode.timer);
					var app = obj.parentNode.parentNode;
					$.css(app.getElementsByTagName("a")[0], {
								"display" : "block"
							});
					$.css(obj.parentNode, {
								display : "none"
							});
					setTimeout(function() {
								app.removeChild(obj.parentNode);
							}, 0);
					XN.BROWSER.IE ? (e.returnValue = false) : e
							.preventDefault();
					return false;
				}
			}
		});
	}
	var root = null;
	function createStruts() {
		root = $("webpager").getElementsByTagName("div")[0];
		root.innerHTML = "";
		$
				.append(
						root,
						[
								"<div class=\"panel\" id=\"apps-panel\"></div>",
								"<div class=\"panel\"><div class=\"button-widget\"><ul id=\"wpi_shortCutsPanel\" class=\"icon\"></ul></div></div>",
								"<div class=\"panel\" id=\"wpi_addCollection\"></div>"]
								.join(""));
		var _328 = new XN.webpager.EmptyWindow({
			strContent : [
					"<article id=\"wpi_menuPanel\" class=\"app-list\">",
					"<section>",
					"<dl class=\"apps\">",
					"<dt>\u6700\u8fd1\u4f7f\u7528</dt>",
					"</dl>",
					"<dl class=\"apps\" id=\"wpi_hitoryPanel\"></dl>",
					"<dl class=\"apps\">",
					"<dt style=\"border-bottom: 1px solid #E3EEF9;\" id=\"wpi_collectionTitle\">\u6211\u7684\u6536\u85cf<a class=\"edit\" href=\"http://app."
							+ XN.env.domain
							+ "/apps/editapps.do?origin="
							+ ($.wpi.getBaseCode() * 100 + 90)
							+ "\">\u7f16\u8f91</a></dt>",
					"</dl>",
					"<dl class=\"apps\" style=\"position: relative;\" id=\"wpi_collectionApps\"></dl>",
					"</section>",
					"<footer><strong>\u62d6\u52a8\u8fdb\u884c\u6392\u5e8f</strong> <a class=\"more\" href=\"http://app."
							+ XN.env.domain
							+ "/app/apps/list?origin="
							+ ($.wpi.getBaseCode() * 100 + 90)
							+ "\">\u6d4f\u89c8\u66f4\u591a\u5e94\u7528</a></footer>",
					"</article>"].join(""),
			strButton : [
					"<img height=\"16\" width=\"16\" src=\"http://a.xnimg.cn/imgpro/chat/app_menu_logo.png\" class=\"icon\" />",
					" <strong id=\"wpi_togMenuPanel\" class=\"title\">\u6211\u7684\u5e94\u7528</strong>"]
					.join("")
		});
		var _329 = new XN.webpager.windowGroup("apps-panel");
		_329.add(_328);
	}
	function createRecentMenus() {
		$("wpi_togMenuPanel").addEvent("click", function() {
			if (!createRecentMenus.init) {
				for (var i = 0; i < wpiMenuInfo.recentMenuCopy.length && i < 9; i++) {
					$
							.append(
									_2fc,
									$.wpi
											.createHistroyItem(wpiMenuInfo.recentMenuCopy[i]));
				}
				createRecentMenus.init = true;
			}
		});
	}
	function createFavoriteMenus() {
		for (var i = 0; i < wpiMenuInfo.favoriteMenuCopy.length && i < 6; i++) {
			$.wpi.serial.push(wpiMenuInfo.favoriteMenuCopy[i].id);
			$.append(_2fb, $.wpi
							.createMenuItem(wpiMenuInfo.favoriteMenuCopy[i]));
		}
		$("wpi_togMenuPanel").addEvent("click", function() {
			if (!createFavoriteMenus.init) {
				for (var i = 6; i < wpiMenuInfo.favoriteMenuCopy.length; i++) {
					$.wpi.serial.push(wpiMenuInfo.favoriteMenuCopy[i].id);
					$
							.append(
									_2fb,
									$.wpi
											.createMenuItem(wpiMenuInfo.favoriteMenuCopy[i]));
				}
				createFavoriteMenus.init = true;
			}
		});
	}
	function createShortcuts() {
		_2ff.config.release();
	}
	function createStowShortcut() {
		for (var i = 0; i < wpiMenuInfo.currentAppCopy.length; i++) {
			$.append(_2fd, $.wpi.createStowItem(wpiMenuInfo.currentAppCopy[i]));
		}
	}
	function copyObject(obj) {
		var _32f = {};
		for (var i in obj) {
			if (typeof obj[i] == "object") {
				_32f[i] = copyObject(obj[i]);
			} else {
				_32f[i] = obj[i];
			}
		}
		return _32f;
	}
	function copyArray(_331) {
		var _332 = [];
		for (var i = 0; i < _331.length; i++) {
			var temp = _331[i];
			if (Object.prototype.toString.call(temp) == "[object Array]") {
				_332[i] = copyArray(temp);
			} else {
				_332[i] = copyObject(temp);
			}
		}
		return _332;
	}
	$.wpi.initApp = function() {
		if (!window.wpiMenuInfo) {
			return;
		}
		createStruts();
		bindEvents();
		wpiMenuInfo.recentMenuCopy = copyArray(wpiMenuInfo.recentMenu);
		wpiMenuInfo.favoriteMenuCopy = copyArray(wpiMenuInfo.favoriteMenu);
		wpiMenuInfo.currentAppCopy = copyArray(wpiMenuInfo.currentApp);
		wpiMenuInfo.recentMenuCopy = wpiMenuInfo.recentMenuCopy.slice(0, 9);
		for (var i = 0; i < wpiMenuInfo.favoriteMenuCopy.length; i++) {
			for (var j = 0; j < wpiMenuInfo.recentMenuCopy.length; j++) {
				if (wpiMenuInfo.favoriteMenuCopy[i].id == wpiMenuInfo.recentMenuCopy[j].id) {
					wpiMenuInfo.recentMenuCopy.splice(j, 1);
					break;
				}
			}
		}
		for (var i = 0; i < wpiMenuInfo.favoriteMenuCopy.length && i < 6; i++) {
			for (var j = 0; j < wpiMenuInfo.currentAppCopy.length; j++) {
				if (wpiMenuInfo.favoriteMenuCopy[i].id == wpiMenuInfo.currentAppCopy[j].id) {
					wpiMenuInfo.currentAppCopy.splice(j, 1);
					break;
				}
			}
		}
		createRecentMenus();
		createFavoriteMenus();
		createShortcuts();
		createStowShortcut();
		Sizzle("#wpi_menuPanel > section")[0].style.overflow = "hidden";
		return $.wpi;
	};
	$.wpi.showApp = function() {
		if (!window.wpiMenuInfo) {
			return;
		}
		$.css(root, {
					display : "block"
				});
		return $.wpi;
	};
	$.wpi.hideApp = function() {
		if (!window.wpiMenuInfo) {
			return;
		}
		$.css(root, {
					display : "none"
				});
		return $.wpi;
	};
})();
XN.dom.ready(function() {
	window.talkto = function(id, name) {
		setTimeout(function() {
			var wp = XN.webpager;
			var fri = wp.friendbook.map[id + ""];
			if (!fri) {
				wp.friendbook.fetOnlineFriend(false, function() {
					if (wp.friendbook.map[id + ""]) {
						wp.Conv.findConv(wp.friendbook.map[id + ""]);
					} else {
						XN.DO
								.showMessage("\u62b1\u6b49\uff0c\u8be5\u7528\u6237\u5f53\u524d\u4e0d\u5728\u7ebf\u6216\u4e0d\u662f\u4f60\u7684\u597d\u53cb");
					}
				});
				return;
			}
			wp.Conv.findConv(fri);
		}, 0);
	};
	var t = document.getElementsByTagName("title")[0];
	document.title.innerHTML = "fuck";
	window.showshow = function() {
		var p = XN.webpager.winSlider;
		logger.log(p.leftHideStack.length + " " + p.showQueue.length + " "
				+ p.rightHideStack.length);
	};
	window.showBling = function() {
		XN.webpager.MessagerProxy.onRecvNotify({
					icon : "ab",
					content : "wcdsdf"
				});
	};
});
