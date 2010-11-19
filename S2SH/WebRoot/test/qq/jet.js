(function() {
	var h = "1.0", c = "JetMark", a = this, k = a.Jet, b = {}, i = {}, j = {
		NO_DEBUG : 0,
		SHOW_ERROR : 1,
		SHOW_WARNING : 2,
		SHOW_INFO : 3,
		SHOW_ALL : 4
	}, f = {
		debug : j.SHOW_ALL
	}, d = function(l, e) {
		l = String(l);
		e = e || 3;
		if (e < f.debug) {
			if (this.console) {
				if (this.console.out) {
					this.console.out(l, e);
				} else {
					alert(l + " - 消息类型[" + e + "]");
				}
			}
		}
		return l;
	};
	try {
		if (typeof k === "undefined" || (k.mark && k.mark === c)) {
			if (k) {
				b = k.VERSIONS;
				i = k.PACKAGES;
			}
			k = function(l, n) {
				var m = this;
				if (n) {
					this._init();
				} else {
					if (l) {
						l = String(l);
						try {
							if (k.VERSIONS[l]) {
								m = k.VERSIONS[l];
							} else {
								m = k.VERSIONS[k.DEFAULT_VERSION];
								throw new Error("没有找到 JET version " + l
										+ ", 所以返回默认版本 JET version "
										+ k.DEFAULT_VERSION + "!");
							}
						} catch (o) {
							m.out(	"A.错误：[" + o.name + "] " + o.message + ", "
											+ o.fileName + ", 行号:"
											+ o.lineNumber + "; stack:"
											+ typeof o.stack, 2);
						}
					} else {
						m = k.VERSIONS[k.DEFAULT_VERSION];
					}
				}
				return m;
			};
			k.prototype = {
				version : h,
				DEBUG : j,
				option : f,
				_init : function() {
					this.constructor = k;
				},
				$namespace : function(e) {
					var m, l, o = e.split("."), n = a;
					for (m = 0; m < o.length; m = m + 1) {
						l = o[m];
						n[l] = n[l] || {};
						n = n[o[m]];
					}
					return n;
				},
				$package : function() {
					var e = arguments[0], n = arguments[arguments.length - 1], m = a, l;
					if (typeof n === "function") {
						if (typeof e === "string") {
							m = this.$namespace(e);
							if (k.PACKAGES[e]) {
							} else {
								k.PACKAGES[e] = {
									isLoaded : true,
									returnValue : l
								};
							}
							m.packageName = e;
						} else {
							if (typeof e === "object") {
								m = e;
							}
						}
						l = n.call(m, this);
					} else {
						throw new Error("Function required");
					}
				},
				checkPackage : function(e) {
					return k.PACKAGES[e];
				},
				out : d,
				startTime : +new Date(),
				about : function() {
					return this
							.out(
									"JET (Javascript Extend Tools)\nversion: "
											+ this.version
											+ "\n\nCopyright (c) 2009, All rights reserved.",
									3);
				},
				toString : function() {
					return "JET version " + this.version + " !";
				}
			};
			k.VERSIONS = b;
			k.PACKAGES = i;
			k.VERSIONS[h] = new k(h, true);
			k.DEFAULT_VERSION = h;
			k.mark = c;
			a.Jet = k;
		} else {
			throw new Error('"Jet" name is defined in other javascript code !!!');
		}
	} catch (g) {
		d(		"JET 微内核初始化失败! B.错误：[" + g.name + "] " + g.message + ", "
						+ g.fileName + ", 行号:" + g.lineNumber + "; stack:"
						+ typeof g.stack, 1);
	}
})();
Jet().$package(function(l) {
	var g, r, q, p, m, n, o, k, c, i, z, s, h, a, v, w, f, j, e, d, b, A, u, t;
	g = function(B) {
		return typeof(B) === "undefined";
	};
	r = function(B) {
		return B === null;
	};
	q = function(B) {
		return (B === 0 || B) && B.constructor === Number;
	};
	m = function(B) {
		return (B === false || B) && (B.constructor === Boolean);
	};
	p = function(B) {
		return (B === "" || B) && (B.constructor === String);
	};
	n = function(B) {
		return (B && (B.constructor === Object))
				|| (String(B) === "[object Object]");
	};
	o = function(B) {
		return B && (B.constructor === Array);
	};
	k = function(B) {
		return B && B.callee && q(B.length) ? true : false;
	};
	c = function(B) {
		return B && (B.constructor === Function);
	};
	i = function(B) {
		if (g(B)) {
			return "undefined";
		} else {
			if (r(B)) {
				return "null";
			} else {
				if (q(B)) {
					return "number";
				} else {
					if (m(B)) {
						return "boolean";
					} else {
						if (p(B)) {
							return "string";
						} else {
							if (n(B)) {
								return "object";
							} else {
								if (o(B)) {
									return "array";
								} else {
									if (k(B)) {
										return "arguments";
									} else {
										if (c(B)) {
											return "function";
										} else {
											return "other";
										}
									}
								}
							}
						}
					}
				}
			}
		}
	};
	a = function(C, B) {
		return Math.floor(Math.random() * (B - C + 1) + C);
	};
	w = function(C) {
		var B = function() {
		};
		B.prototype = C;
		return (new B());
	};
	z = function(B) {
		return l.isFunction(B) ? B : function() {
			return B;
		};
	};
	s = function() {
		var D, C = arguments.length, B;
		for (D = 0; D < C; D++) {
			try {
				B = arguments[D]();
				break;
			} catch (E) {
				l.out(	"C.错误：[" + E.name + "] " + E.message + ", "
								+ E.fileName + ", 行号:" + E.lineNumber
								+ "; stack:" + typeof E.stack, 2);
			}
		}
		return B;
	};
	v = function(J, E, D) {
		var H = arguments, G, C, J, I;
		if (H.length === 1) {
			J = this;
			G = 0;
		} else {
			J = H[0] || {};
			G = 1;
		}
		for (; G < arguments.length; G++) {
			I = arguments[G];
			for (C in I) {
				var B = J[C], F = I[C];
				if (B === F) {
					continue;
				}
				if (F && n(F) && !F.nodeType && !c(F)) {
					B = J[C] = {};
					B = v(J[C], F || (F.length != null ? [] : {}));
				} else {
					if (F !== undefined) {
						J[C] = F;
					}
				}
			}
		}
		return J;
	};
	f = function() {
		return +new Date;
	};
	j = function(C, G, F, E, H) {
		var B = C.concat(), D = 25;
		if (E) {
			B = C;
		}
		window.setTimeout(function() {
					var I = +new Date();
					do {
						G.call(F, B.shift());
					} while (B.length > 0 && (+new Date() - I < 50));
					if (B.length > 0) {
						window.setTimeout(arguments.callee, D);
					} else {
						if (H) {
							H(C);
						}
					}
				}, D);
	};
	e = function(D) {
		var C, B = 0;
		for (C in D) {
			if (D.hasOwnProperty(C)) {
				B++;
			}
		}
		return B;
	};
	h = function() {
	};
	d = function(C, B) {
		B = B || {};
		C.$$rebuildedFunc = C.$$rebuildedFunc || function() {
			var G = this, E, D, F;
			E = B.contextObj || G;
			D = Array.prototype.slice.call(arguments, 0);
			if (D !== undefined) {
				D = D.concat(B.arguments);
			}
			if (B.event === false) {
				D = D.slice(1);
			}
			return C.apply(E, D);
		};
		return C.$$rebuildedFunc;
	};
	b = function(C, E) {
		var D = Array.prototype.slice;
		var B = D.call(arguments, 1);
		return function() {
			var F = this;
			return C.apply(F, B.concat(D.call(arguments)));
		};
	};
	A = function(D, C, F) {
		var E = Array.prototype.slice;
		var B = E.call(arguments, 2);
		return function() {
			return D.apply(C, B.concat(E.call(arguments)));
		};
	};
	t = function() {
		var E = arguments.length;
		var D = arguments[E - 1];
		D.init = D.init || function() {
		};
		if (E === 2) {
			var C = arguments[0].extend;
			var B = function() {
			};
			B.prototype = C.prototype;
			var F = function() {
				this.init.apply(this, arguments);
			};
			F.superClass = C.prototype;
			F.prototype = new B();
			F.prototype.constructor = F;
			l.extend(F.prototype, D);
			F.prototype.init = function() {
				D.init.apply(this, arguments);
			};
			return F;
		} else {
			if (E === 1) {
				var G = function() {
					this.init.apply(this, arguments);
				};
				G.prototype = D;
				return G;
			}
		}
	};
	l.isUndefined = g;
	l.isNull = r;
	l.isNumber = q;
	l.isString = p;
	l.isBoolean = m;
	l.isObject = n;
	l.isArray = o;
	l.isArguments = k;
	l.isFunction = c;
	l.$typeof = i;
	l.$return = z;
	l.$try = s;
	l.emptyFunc = h;
	l.clone = w;
	l.getLength = e;
	l.random = a;
	l.extend = v;
	l.now = f;
	l.timedChunk = j;
	l.rebuild = d;
	l.pass = b;
	l.bind = A;
	l.bindNoEvent = u;
	l.Class = t;
});
Jet().$package(function(k) {
	k.browserOptions = {
		adjustBehaviors : true,
		htmlClass : true
	};
	k.host = window.location.host;
	var h = navigator.platform.toLowerCase(), b = navigator.userAgent
			.toLowerCase(), c = navigator.plugins, d, g, i, f, l;
	f = function(m, n) {
		("" + m).replace(/_/g, ".");
		n = n || 1;
		m = String(m).split(".");
		m = m[0] + "." + (m[1] || "0");
		m = Number(m).toFixed(n);
		return m;
	};
	d = {
		getPlatform : function() {
			return h;
		},
		name : (window.orientation != undefined) ? "iPod" : (h
				.match(/mac|win|linux/i) || ["unknown"])[0],
		version : 0,
		iPod : 0,
		iPad : 0,
		iPhone : 0,
		android : 0,
		win : 0,
		linux : 0,
		mac : 0,
		set : function(n, m) {
			this.name = n;
			this.version = m;
			this[n] = m;
		}
	};
	d[d.name] = true;
	(l = b.match(/windows ([\d.]+)/)) ? d.set("win", f(l[1])) : (l = b
			.match(/windows nt ([\d.]+)/)) ? d.set("win", f(l[1])) : (l = b
			.match(/linux ([\d.]+)/)) ? d.set("linux", f(l[1])) : (l = b
			.match(/mac ([\d.]+)/)) ? d.set("mac", f(l[1])) : (l = b
			.match(/ipod ([\d.]+)/)) ? d.set("iPod", f(l[1])) : (l = b
			.match(/ipad[\D]*os ([\d_]+)/)) ? d.set("iPad", f(l[1])) : (l = b
			.match(/iphone ([\d.]+)/)) ? d.set("iPhone", f(l[1])) : (l = b
			.match(/android ([\d.]+)/)) ? d.set("android", f(l[1])) : 0;
	g = {
		features : {
			xpath : !!(document.evaluate),
			air : !!(window.runtime),
			query : !!(document.querySelector)
		},
		getPlugins : function() {
			return c;
		},
		plugins : {
			flash : (function() {
				var m = "none";
				if (c && c.length) {
					flash = c["Shockwave Flash"];
					if (flash && flash.description) {
						m = f(flash.description.match(/\b(\d+)\.\d+\b/)[1], 1)
								|| m;
					}
				} else {
					var n = 13;
					while (n--) {
						try {
							new ActiveXObject("ShockwaveFlash.ShockwaveFlash."
									+ n);
							m = f(n);
							break;
						} catch (o) {
						}
					}
				}
				return m;
			})()
		},
		getUserAgent : function() {
			return b;
		},
		name : "unknown",
		version : 0,
		ie : 0,
		firefox : 0,
		chrome : 0,
		opera : 0,
		safari : 0,
		set : function(n, m) {
			this.name = n;
			this.version = m;
			this[n] = m;
		}
	};
	(l = b.match(/msie ([\d.]+)/)) ? g.set("ie", f(l[1])) : (l = b
			.match(/firefox\/([\d.]+)/)) ? g.set("firefox", f(l[1])) : (l = b
			.match(/chrome\/([\d.]+)/)) ? g.set("chrome", f(l[1])) : (l = b
			.match(/opera.([\d.]+)/)) ? g.set("opera", f(l[1])) : (l = b
			.match(/version\/([\d.]+).*safari/)) ? g.set("safari", f(l[1])) : 0;
	i = {
		name : "unknown",
		version : 0,
		trident : 0,
		gecko : 0,
		webkit : 0,
		presto : 0,
		set : function(n, m) {
			this.name = n;
			this.version = m;
			this[n] = m;
		}
	};
	(l = b.match(/trident\/([\d.]+)/)) ? i.set("trident", f(l[1])) : (l = b
			.match(/gecko\/([\d.]+)/)) ? i.set("gecko", f(l[1])) : (l = b
			.match(/applewebkit\/([\d.]+)/))
			? i.set("webkit", f(l[1]))
			: (l = b.match(/presto\/([\d.]+)/)) ? i.set("presto", f(l[1])) : 0;
	if (g.ie) {
		if (g.ie == 6) {
			i.set("trident", f("4"));
		} else {
			if (g.ie == 7 || g.ie == 8) {
				i.set("trident", f("5"));
			}
		}
	}
	var e = function() {
		if (g.ie && g.ie < 7) {
			try {
				document.execCommand("BackgroundImageCache", false, true);
			} catch (m) {
			}
		}
	};
	if (k.browserOptions.adjustBehaviors) {
		e();
	}
	var a = function(m) {
		return String(m).replace(/\./gi, "_");
	};
	var j = function() {
		var m = document.documentElement;
		var n = [m.className];
		n.push("javascriptEnabled");
		n.push(d.name);
		n.push(d.name + a(d.version));
		n.push(g.name);
		n.push(g.name + a(g.version));
		n.push(i.name);
		n.push(i.name + a(i.version));
		if (g.plugins.flash) {
			n.push("flash");
			n.push("flash" + a(g.plugins.flash));
		}
		m.className = n.join(" ");
	};
	if (k.browserOptions.htmlClass) {
		j();
	}
	k.platform = d;
	k.browser = g;
	k.browser.engine = i;
});
Jet().$package(function(p) {
	var I, K, P, z, B, c, t, L, j, o, X, F, A, f, Y, R, W, D, ae, b, Q, v, e, Z, l, u, G, O, af, E, d, a, H, V, n, ac, s, k, h, ad, M, C, m, T, ag, q = null, N, U, ab, S;
	p.dom = p.dom || {};
	I = p.dom;
	K = p.browser;
	U = (I.win) ? (I.win.contentWindow) : I.win || window;
	I.win = U;
	I.doc = U.document;
	ab = function() {
		if (S) {
			return S;
		}
		if (document.compatMode === "CSS1Compat") {
			S = document.documentElement;
		} else {
			S = document.body;
		}
		return S;
	};
	ag = function(i) {
		if (i) {
			i = i || window.document;
			q = (i.nodeType === 9) ? i : i.ownerDocument || I.doc;
			return q;
		} else {
			if (q) {
				return q;
			} else {
				i = i || window.document;
				q = (i.nodeType === 9) ? i : i.ownerDocument || I.doc;
				return q;
			}
		}
	};
	N = function(i) {
		var w = ag(i);
		return (i.document) ? i : w.defaultView || w.parentWindow || I.win;
	};
	P = function(w, i) {
		return ag(i).getElementById(w);
	};
	z = function(i, J) {
		var w = J;
		return ag(J).getElementsByName(i);
	};
	B = function(i, w) {
		var w = w || ag();
		return w.getElementsByTagName(i);
	};
	c = function(i) {
		var w = i ? i[TEXT_CONTENT] : "";
		if (w === UNDEFINED && INNER_TEXT in i) {
			w = i[INNER_TEXT];
		}
		return w || "";
	};
	t = function(ai, J, w) {
		var aj = false;
		var ah = J;
		var i;
		do {
			i = ah.getAttribute(ai);
			if (p.isUndefined(i) || p.isNull(i)) {
				if (ah === w) {
					aj = true;
				} else {
					ah = ah.parentNode;
				}
			} else {
				aj = true;
			}
		} while (!aj);
		return i;
	};
	L = function(ai, ah, ak) {
		var aj, J = ak || I.win, al = J.document, am = al.createElement(ai);
		for (aj in ah) {
			var i = {
				"class" : function() {
					am.className = ah[aj];
				}
			};
			if (i[aj]) {
				i[aj]();
			} else {
				am.setAttribute(aj, ah[aj]);
			}
		}
		return am;
	};
	l = function(w) {
		var i;
		if (w) {
			i = w.scrollHeight;
		} else {
			i = Math.max(document.documentElement.scrollHeight,
					document.body.scrollHeight);
		}
		return i || 0;
	};
	u = function(w) {
		var i;
		if (w) {
			i = w.scrollWidth;
		} else {
			i = Math.max(document.documentElement.scrollWidth,
					document.body.scrollWidth);
		}
		return i || 0;
	};
	G = function(i) {
		i = i || ab();
		return i.clientHeight;
	};
	O = function(i) {
		i = i || ab();
		return i.clientWidth;
	};
	af = function(w) {
		var i = p.browser.engine.name;
		w = w || ab();
		return w.offsetHeight;
	};
	E = function(w) {
		var i = p.browser.engine.name;
		w = w || ab();
		return w.offsetWidth;
	};
	d = function(i) {
		var w;
		if (i) {
			w = i.scrollLeft;
		} else {
			w = Math.max(document.documentElement.scrollLeft,
					document.body.scrollLeft);
		}
		return w || 0;
	};
	a = function(i) {
		var w;
		if (i) {
			w = i.scrollTop;
		} else {
			w = Math.max(document.documentElement.scrollTop,
					document.body.scrollTop);
		}
		return w || 0;
	};
	j = function(w, i) {
		w.className = i;
	};
	o = function(i) {
		return i.className;
	};
	X = function(J, w) {
		var i = new RegExp("(^|\\s)" + w + "(\\s|$)");
		return i.test(J.className);
	};
	F = function(w, i) {
		if (!X(w, i)) {
			w.className = w.className + " " + i;
		}
	};
	A = function(w, i) {
		w.className = w.className.replace(new RegExp("(^|\\s)" + i
						+ "(?:\\s|$)"), "$1");
	};
	f = function(w, i) {
		return X(w, i) ? A(w, i) : F(w, i);
	};
	Y = function(J, w, i) {
		A(J, w);
		F(J, i);
	};
	R = function(J, w, ah) {
		if (!J) {
			return;
		}
		var i = p.browser.name;
		if (w === "float" || w === "cssFloat") {
			if (i === "ie") {
				w = "styleFloat";
			} else {
				w = "cssFloat";
			}
		}
		if (w === "opacity" && i === "ie") {
			J.style.filter = "alpha(opacity=" + (ah * 100) + ")";
			if (!J.style.zoom) {
				J.style.zoom = 1;
			}
			return;
		}
		J.style[w] = ah;
	};
	W = function(aj, ah) {
		if (!aj) {
			return;
		}
		var ak = N(aj);
		var J = p.browser.name;
		if (ah === "float" || ah === "cssFloat") {
			if (J === "ie") {
				ah = "styleFloat";
			} else {
				ah = "cssFloat";
			}
		}
		if (ah === "opacity" && J === "ie") {
			var w = 1, i = aj.style.filter.match(/opacity=(\d+)/);
			if (i && i[1]) {
				w = i[1] / 100;
			}
			return w;
		}
		if (aj.style[ah]) {
			return aj.style[ah];
		} else {
			if (aj.currentStyle) {
				return aj.currentStyle[ah];
			} else {
				if (ak.getComputedStyle) {
					return ak.getComputedStyle(aj, null)[ah];
				} else {
					if (document.defaultView
							&& document.defaultView.getComputedStyle) {
						ah = ah.replace(/([/A-Z])/g, "-$1");
						ah = ah.toLowerCase();
						var ai = document.defaultView.getComputedStyle(aj, "");
						return ai && ai.getPropertyValue(ah);
					}
				}
			}
		}
	};
	b = function(w, i) {
		w.style.cssText += ";" + i;
	};
	D = function(w, i) {
		w.style.cssText = i;
	};
	ae = function(i) {
		return i.style.cssText;
	};
	Q = function(J, i) {
		var ah;
		var w = J.getAttribute("_oldDisplay");
		if (w) {
			ah = w;
		} else {
			ah = W(J, "display");
		}
		if (i) {
			R(J, "display", i);
		} else {
			if (ah === "none") {
				R(J, "display", "block");
			} else {
				R(J, "display", ah);
			}
		}
	};
	v = function(i) {
		var w = W(i, "display");
		if (w === "none") {
			return false;
		} else {
			return true;
		}
	};
	e = function(w) {
		var J;
		var i = w.getAttribute("_oldDisplay");
		if (i) {
			J = i;
		} else {
			J = W(w, "display");
		}
		if (J === "none") {
			R(w, "display", "");
		} else {
			R(w, "display", J);
		}
	};
	Z = function(w) {
		var J = W(w, "display");
		var i = w.getAttribute("_oldDisplay");
		if (!i) {
			if (J === "none") {
				w.setAttribute("_oldDisplay", "");
			} else {
				w.setAttribute("_oldDisplay", J);
			}
		}
		R(w, "display", "none");
	};
	H = function(ai) {
		var ak = 0, ah = 0;
		if (ai) {
			if (document.documentElement.getBoundingClientRect
					&& ai.getBoundingClientRect) {
				var aj = {
					left : 0,
					top : 0,
					right : 0,
					bottom : 0
				};
				try {
					aj = ai.getBoundingClientRect();
				} catch (J) {
					return [0, 0];
				}
				var w = ai.ownerDocument;
				var i = p.browser.ie ? 2 : 0;
				ak = aj.top - i + a(w);
				ah = aj.left - i + d(w);
			} else {
				while (ai.offsetParent) {
					ak += ai.offsetTop;
					ah += ai.offsetLeft;
					ai = ai.offsetParent;
				}
			}
		}
		return [ah, ak];
	};
	V = function(w, i, J) {
		i = parseInt(i) + d();
		J = parseInt(J) + a();
		ac(w, i, J);
	};
	n = function(i) {
		var w = H(i);
		w[0] = w[0] + d();
		w[1] = w[1] + a();
		return w;
	};
	ac = function(J, i, ai) {
		var w = parseInt(W(J, "marginLeft")) || 0;
		var ah = parseInt(W(J, "marginTop")) || 0;
		R(J, "left", parseInt(i) - w + "px");
		R(J, "top", parseInt(ai) - ah + "px");
	};
	s = function(J, i) {
		var ai = n(J);
		var w = n(i);
		var ah = [];
		ah[0] = ai[0] - w[0];
		ah[1] = ai[1] - w[1];
		return ah;
	};
	var g = function(i) {
		if (!i || i == "auto") {
			return 0;
		} else {
			return parseInt(i.substr(0, i.length - 2));
		}
	};
	k = function(i) {
		return g(I.getStyle(i, "left"));
	};
	h = function(i) {
		return g(I.getStyle(i, "top"));
	};
	ad = function(i) {
		return g(I.getStyle(i, "width"));
	};
	M = function(i) {
		return g(I.getStyle(i, "height"));
	};
	m = function(w) {
		w = w || window;
		var i = w.document;
		if (w.getSelection) {
			return w.getSelection().toString();
		} else {
			if (i.getSelection) {
				return i.getSelection();
			} else {
				if (i.selection) {
					return i.selection.createRange().text;
				}
			}
		}
	};
	T = function(w) {
		if (w.selectionStart != undefined && w.selectionEnd != undefined) {
			var J = w.selectionStart;
			var i = w.selectionEnd;
			return w.value.substring(J, i);
		} else {
			return "";
		}
	};
	var r = B("script");
	for (var aa = 0; aa < r.length; aa++) {
		if (r[aa].getAttribute("hasJet") == "true") {
			p.src = r[aa].src;
		}
	}
	if (!p.src) {
		p.src = r[r.length - 1].src;
	}
	p.filename = p.src.replace(/(.*\/){0,}([^\\]+).*/ig, "$2");
	p.path = p.src.split(p.filename)[0];
	I.getDoc = ag;
	I.id = P;
	I.name = z;
	I.tagName = B;
	I.getText = c;
	I.getAttributeByParent = t;
	I.node = L;
	I.setClass = j;
	I.getClass = o;
	I.hasClass = X;
	I.addClass = F;
	I.removeClass = A;
	I.toggleClass = f;
	I.replaceClass = Y;
	I.setStyle = R;
	I.getStyle = W;
	I.setCssText = D;
	I.getCssText = ae;
	I.addCssText = b;
	I.show = Q;
	I.isShow = v;
	I.recover = e;
	I.hide = Z;
	I.getScrollLeft = d;
	I.getScrollTop = a;
	I.getScrollHeight = l;
	I.getScrollWidth = u;
	I.getClientHeight = G;
	I.getClientWidth = O;
	I.getOffsetHeight = af;
	I.getOffsetWidth = E;
	I.getClientXY = H;
	I.setClientXY = V;
	I.getXY = n;
	I.setXY = ac;
	I.getRelativeXY = s;
	I.getPosX = k;
	I.getPosY = h;
	I.getWidth = ad;
	I.getHeight = M;
	I.getSelection = C;
	I.getSelectionText = m;
	I.getTextFieldSelection = T;
	I.getDocumentElement = ab;
});
Jet().$package(function(k) {
	var i, f, d, j, h = [], a, n, m, c, b, e, l, g = this;
	k.event = k.event || {};
	i = k.event;
	if (document.addEventListener) {
		f = function(r, q, s) {
			if (j["on" + q]) {
				j["on" + q](r, q, s);
				return;
			}
			var t = false;
			if (!r) {
				k.out("targetModel undefined:" + q + s);
			}
			if (!r._eventTypes) {
				r._eventTypes = {};
			}
			if (!r._eventTypes[q]) {
				r._eventTypes[q] = [];
			}
			r.addEventListener(q, s, false);
			var o = r._eventTypes[q];
			for (var p = 0; p < o.length; p++) {
				if (o[p] == s) {
					t = true;
				}
			}
			if (!t) {
				o.push(s);
			}
		};
		d = function(s, r, t) {
			if (j["off" + r]) {
				j["off" + r](s, r, t);
				return;
			}
			if (r) {
				if (t) {
					s.removeEventListener(r, t, false);
					if (s._eventTypes && s._eventTypes[r]) {
						var o = s._eventTypes[r];
						for (var q = 0; q < o.length; q++) {
							if (o[q] === t) {
								o[q] = null;
								o.splice(q, 1);
								break;
							}
						}
					}
				} else {
					if (s._eventTypes && s._eventTypes[r]) {
						var o = s._eventTypes[r];
						for (var q = 0; q < o.length; q++) {
							s.removeEventListener(r, o[q], false);
						}
						s._eventTypes[r] = [];
					}
				}
			} else {
				if (s._eventTypes) {
					var u = s._eventTypes;
					for (var v in u) {
						var o = s._eventTypes[v];
						for (var q = 0; q < o.length; q++) {
							s.removeEventListener(v, o[q], false);
						}
					}
					u = {};
				}
			}
		};
	} else {
		if (document.attachEvent) {
			f = function(q, p, s) {
				if (j["on" + p]) {
					j["on" + p](q, p, s);
					return;
				}
				if (i._find(arguments) != -1) {
					return;
				}
				var t = function(z) {
					if (!z) {
						z = window.event;
					}
					var w = {
						_event : z,
						type : z.type,
						target : z.srcElement,
						currentTarget : q,
						relatedTarget : z.fromElement
								? z.fromElement
								: z.toElement,
						eventPhase : (z.srcElement == q) ? 2 : 3,
						clientX : z.clientX,
						clientY : z.clientY,
						screenX : z.screenX,
						screenY : z.screenY,
						layerX : z.offsetX,
						layerY : z.offsetY,
						pageX : z.clientX + document.body.scrollLeft,
						pageY : z.clientY + document.body.scrollTop,
						altKey : z.altKey,
						ctrlKey : z.ctrlKey,
						shiftKey : z.shiftKey,
						charCode : z.keyCode,
						keyCode : z.keyCode,
						stopPropagation : function() {
							this._event.cancelBubble = true;
						},
						preventDefault : function() {
							this._event.returnValue = false;
						}
					};
					if (Function.prototype.call) {
						s.call(q, w);
					} else {
						q._currentHandler = s;
						q._currentHandler(w);
						q._currentHandler = null;
					}
				};
				q.attachEvent("on" + p, t);
				var r = {
					element : q,
					eventType : p,
					handler : s,
					wrappedEvent : t
				};
				var u = q.document || q;
				var o = u.parentWindow;
				var v = i._uid();
				if (!o._allHandlers) {
					o._allHandlers = {};
				}
				o._allHandlers[v] = r;
				if (!q._handlers) {
					q._handlers = [];
				}
				q._handlers.push(v);
				if (!o._onunloadEventRegistered) {
					o._onunloadEventRegistered = true;
					o.attachEvent("onunload", i._removeAllEvents);
				}
			};
			d = function(s, o, A) {
				if (j["off" + o]) {
					j["off" + o](s, o, A);
					return;
				}
				var q = i._find(arguments);
				if (q == -1) {
					return;
				}
				var v = s.document || s;
				var z = v.parentWindow;
				for (var r = 0; r < q.length; r++) {
					var t = q[r];
					var p = s._handlers[t];
					var u = z._allHandlers[p];
					s.detachEvent("on" + u.eventType, u.wrappedEvent);
					s._handlers[t] = null;
					s._handlers.splice(t, 1);
					delete z._allHandlers[p];
				}
				if (s._handlers && s._handlers.length == 0) {
					s._handlers = null;
				}
			};
			i._find = function(z) {
				var t = z[0], o = z[1], B = z[2], p = t._handlers;
				if (!p) {
					return -1;
				}
				var v = t.document || t;
				var A = v.parentWindow;
				var r = [];
				if (z.length === 3) {
					for (var s = p.length - 1; s >= 0; s--) {
						var q = p[s];
						var u = A._allHandlers[q];
						if (u.eventType == o && u.handler == B) {
							r.push(s);
							return r;
						}
					}
				} else {
					if (z.length === 2) {
						for (var s = p.length - 1; s >= 0; s--) {
							var q = p[s];
							var u = A._allHandlers[q];
							if (u.eventType == o) {
								r.push(s);
							}
						}
						if (r.length > 0) {
							return r;
						}
					} else {
						if (z.length === 1) {
							for (var s = p.length - 1; s >= 0; s--) {
								r.push(s);
							}
							if (r.length > 0) {
								return r;
							}
						}
					}
				}
				return -1;
			};
			i._removeAllEvents = function() {
				var q, o = this;
				for (q in o._allHandlers) {
					var p = o._allHandlers[q];
					p.element.detachEvent("on" + p.eventType, p.wrappedEvent);
					p.element._handlers = null;
					delete o._allHandlers[q];
				}
			};
			i._counter = 0;
			i._uid = function() {
				return "h" + i._counter++;
			};
		}
	}
	j = {
		oncustomdrag : function(r, o, z) {
			var v, u, w = false, q;
			var p = function(A) {
				var B;
				q = A;
				if (k.platform.iPad) {
					A.stopPropagation();
					B = A.touches[0];
					v = B.pageX;
					u = B.pageY;
				} else {
					A.stopPropagation();
					A.preventDefault();
					v = A.clientX;
					u = A.clientY;
				}
				w = false;
				if (k.platform.iPad) {
					i.addEventListener(document, "touchmove", t);
					i.addEventListener(r, "touchend", s);
				} else {
					i.addEventListener(document, "mousemove", t);
				}
			};
			var t = function(B) {
				var A, D, C;
				B.stopPropagation();
				if (k.platform.iPad) {
					C = B.changedTouches[0];
					A = C.pageX;
					D = C.pageY;
				} else {
					A = B.clientX;
					D = B.clientY;
				}
				if (Math.abs(v - A) + Math.abs(u - D) > 2) {
					if (k.platform.iPad) {
						i.removeEventListener(document, "touchmove", t);
						i.removeEventListener(r, "touchend", s);
					} else {
						i.removeEventListener(document, "mousemove", t);
					}
					if (o == "customdrag" && !w) {
						z.call(r, q);
						w = true;
					}
				} else {
				}
			};
			var s = function(A) {
				if (k.platform.iPad) {
					i.removeEventListener(document, "touchmove", t);
					if (!w) {
					} else {
						A.stopPropagation();
						A.preventDefault();
					}
				} else {
					i.removeEventListener(document, "mousemove", t);
					if (!w) {
					}
				}
			};
			if (k.platform.iPad) {
				i.addEventListener(r, "touchstart", p);
			} else {
				i.addEventListener(r, "mousedown", p);
				i.addEventListener(r, "mouseup", s);
			}
			h.push({
						element : r,
						eventType : o,
						handler : z,
						actions : [p, s]
					});
		},
		offcustomdrag : function(q, p, r) {
			for (var o in h) {
				if (h[o].handler == r && h[o].element == q
						&& h[o].eventType == p) {
					if (k.platform.iPad) {
						i.removeEventListener(q, "touchstart", h[o].actions[0]);
						i.removeEventListener(q, "touchend", h[o].actions[1]);
					} else {
						i.removeEventListener(q, "mousedown", h[o].actions[0]);
						i.removeEventListener(q, "mouseup", h[o].actions[1]);
					}
				}
			}
		},
		oncustomclick : function(r, o, w) {
			var u, t, v = false, q;
			var p = function(z) {
				var A;
				if (k.platform.iPad) {
					A = z.changedTouches[0];
					u = A.pageX;
					t = A.pageY;
				} else {
					u = z.clientX;
					t = z.clientY;
				}
				z.preventDefault();
				z.stopPropagation();
				q = z;
			};
			var s = function(z) {
				var A;
				if (k.platform.iPad) {
					A = z.changedTouches[0];
					x = A.pageX;
					y = A.pageY;
				} else {
					x = z.clientX;
					y = z.clientY;
				}
				if (Math.abs(u - x) + Math.abs(t - y) < 10) {
					v = false;
					k.out("customclick");
					if (o == "customclick") {
						w.call(r, q);
					}
				} else {
				}
			};
			if (k.platform.iPad) {
				i.addEventListener(r, "touchstart", p);
				i.addEventListener(r, "touchend", s);
			} else {
				i.addEventListener(r, "mousedown", p);
				i.addEventListener(r, "mouseup", s);
			}
			h.push({
						element : r,
						eventType : o,
						handler : w,
						actions : [p, s]
					});
		},
		offcustomclick : function(q, p, r) {
			for (var o in h) {
				if (h[o].handler == r && h[o].element == q
						&& h[o].eventType == p) {
					if (k.platform.iPad) {
						i.removeEventListener(q, "touchstart", h[o].actions[0]);
						i.removeEventListener(q, "touchend", h[o].actions[1]);
					} else {
						i.removeEventListener(q, "mousedown", h[o].actions[0]);
						i.removeEventListener(q, "mouseup", h[o].actions[1]);
					}
				}
			}
		}
	};
	a = function(o) {
		if (a.done) {
			return o();
		}
		if (a.timer) {
			a.ready.push(o);
		} else {
			a.ready = [o];
			i.on(window, "load", n);
			a.timer = window.setInterval(n, 300);
		}
	};
	n = function() {
		if (a.done) {
			return true;
		}
		if (document && document.getElementsByTagName
				&& document.getElementById && document.body) {
			a.done = true;
			window.clearInterval(a.timer);
			a.timer = null;
			for (var o = 0; o < a.ready.length; o++) {
				a.ready[o]();
			}
			a.ready = null;
			return true;
		}
	};
	m = function() {
		this.subscribers = [];
	};
	m.prototype.subscribe = function(o) {
		var p = k.array.some(this.subscribers, function(q) {
					return q === o;
				});
		if (!p) {
			this.subscribers.push(o);
		}
		return o;
	};
	m.prototype.deliver = function(o) {
		k.array.forEach(this.subscribers, function(p) {
					p(o);
				});
	};
	m.prototype.unsubscribe = function(o) {
		this.subscribers = k.array.filter(this.subscribers, function(p) {
					return p !== o;
				});
		return o;
	};
	c = function(p, s, t) {
		var o, u, q, r;
		if (t) {
			s = "on" + s;
			if (!!!p._$events) {
				p._$events = {};
			}
			if (!p._$events[s]) {
				p._$events[s] = [];
			}
			o = p._$events[s];
			u = o.length;
			q = -1;
			for (r = 0; r < u; r++) {
				if (o[r] === t) {
					q = r;
					break;
				}
			}
			if (q === -1) {
				o.push(t);
			}
		} else {
			k.out(">>> 添加的观察者方法不存在：" + p + s + t);
		}
	};
	b = function(r) {
		var q = r.targetModel;
		var o = r.eventMapping;
		for (var p in o) {
			c(q, p, o[p]);
		}
	};
	e = function(q, s, t) {
		var p, r;
		s = "on" + s;
		var o = true;
		if (q._$events && q._$events[s]) {
			p = q._$events[s];
			if (p.length > 0) {
				for (r = 0; r < p.length; r++) {
					if (p[r].apply(q, [t])) {
					} else {
						o = false;
					}
				}
			}
		} else {
		}
		return o;
	};
	l = function(p, t, u) {
		var s, q, o, v, r = p._$events;
		if (u) {
			if (r) {
				t = "on" + t;
				o = r[t];
				if (o) {
					v = o.length;
					for (s = 0; s < v; s++) {
						if (o[s] == u) {
							o[s] = null;
							o.splice(s, 1);
							break;
						}
					}
				}
			}
		} else {
			if (t) {
				if (r) {
					t = "on" + t;
					o = r[t];
					if (o) {
						v = o.length;
						for (s = 0; s < v; s++) {
							o[s] = null;
						}
						delete r[t];
					}
				}
			} else {
				if (p) {
					if (r) {
						for (s in r) {
							delete r[s];
						}
						delete p._$events;
					}
				}
			}
		}
	};
	i.addEventListener = f;
	i.removeEventListener = d;
	i.on = i.addEventListener;
	i.off = i.removeEventListener;
	i.onDomReady = a;
	i.Publish = m;
	i.addObserver = c;
	i.addObservers = b;
	i.notifyObservers = e;
	i.removeObserver = l;
});
Jet().$package(function(a) {
	var b;
	a.date = a.date || {};
	b = function(e, c) {
		var f = {
			"M+" : e.getMonth() + 1,
			"D+" : e.getDate(),
			"h+" : e.getHours(),
			"m+" : e.getMinutes(),
			"s+" : e.getSeconds(),
			"q+" : Math.floor((e.getMonth() + 3) / 3),
			S : e.getMilliseconds()
		};
		if (/(Y+)/.test(c)) {
			c = c.replace(RegExp.$1, (e.getFullYear() + "").substr(4
							- RegExp.$1.length));
		}
		for (var d in f) {
			if (new RegExp("(" + d + ")").test(c)) {
				c = c.replace(RegExp.$1, RegExp.$1.length == 1
								? f[d]
								: ("00" + f[d]).substr(("" + f[d]).length));
			}
		}
		return c;
	};
	a.date.format = b;
});
Jet().$package(function(n) {
			n.array = n.array || {};
			var j = n.array, m, p, h, b, o, a, g, l, d, e, f, c, k, i;
			m = Array.prototype.indexOf ? function() {
				var q = Array.prototype.slice.call(arguments, 1);
				return Array.prototype.indexOf.apply(arguments[0], q);
			} : function(q, t, s) {
				if (s == null) {
					s = 0;
				} else {
					if (s < 0) {
						s = Math.max(0, q.length + s);
					}
				}
				for (var r = s; r < q.length; r++) {
					if (q[r] === t) {
						return r;
					}
				}
				return -1;
			};
			p = Array.prototype.lastIndexOf ? function() {
				var q = Array.prototype.slice.call(arguments, 1);
				return Array.prototype.lastIndexOf.apply(arguments[0], q);
			} : function(q, t, s) {
				if (s == null) {
					s = q.length - 1;
				} else {
					if (s < 0) {
						s = Math.max(0, q.length + s);
					}
				}
				for (var r = s; r >= 0; r--) {
					if (q[r] === t) {
						return r;
					}
				}
				return -1;
			};
			h = Array.prototype.forEach ? function() {
				var q = Array.prototype.slice.call(arguments, 1);
				return Array.prototype.forEach.apply(arguments[0], q);
			} : function(r, s) {
				var q = r.length;
				if (typeof s != "function") {
					throw new TypeError();
				}
				var u = arguments[2];
				for (var t = 0; t < q; t++) {
					if (t in r) {
						s.call(u, r[t], t, r);
					}
				}
			};
			b = Array.prototype.filter ? function() {
				var q = Array.prototype.slice.call(arguments, 1);
				return Array.prototype.filter.apply(arguments[0], q);
			} : function(r, s) {
				var q = r.length;
				if (typeof s != "function") {
					throw new TypeError();
				}
				var v = [];
				var u = arguments[2];
				for (var t = 0; t < q; t++) {
					if (t in r) {
						var w = r[t];
						if (s.call(u, w, t, r)) {
							v.push(w);
						}
					}
				}
				return v;
			};
			o = Array.prototype.some ? function() {
				var q = Array.prototype.slice.call(arguments, 1);
				return Array.prototype.some.apply(arguments[0], q);
			} : function(r, s) {
				var q = r.length;
				if (typeof s != "function") {
					throw new TypeError();
				}
				var u = arguments[2];
				for (var t = 0; t < q; t++) {
					if (t in r && s.call(u, r[t], t, r)) {
						return true;
					}
				}
				return false;
			};
			a = Array.prototype.map ? function() {
				var q = Array.prototype.slice.call(arguments, 1);
				return Array.prototype.map.apply(arguments[0], q);
			} : function(r, s) {
				var q = r.length;
				if (typeof s != "function") {
					throw new TypeError();
				}
				var v = new Array(q);
				var u = arguments[2];
				for (var t = 0; t < q; t++) {
					if (t in r) {
						v[t] = s.call(u, r[t], t, r);
					}
				}
				return v;
			};
			g = Array.prototype.every ? function() {
				var q = Array.prototype.slice.call(arguments, 1);
				return Array.prototype.every.apply(arguments[0], q);
			} : function(r, s) {
				var q = r.length;
				if (typeof s != "function") {
					throw new TypeError();
				}
				var u = arguments[2];
				for (var t = 0; t < q; t++) {
					if (t in r && !s.call(u, r[t], t, r)) {
						return false;
					}
				}
				return true;
			};
			l = Array.prototype.reduce ? function() {
				var q = Array.prototype.slice.call(arguments, 1);
				return Array.prototype.reduce.apply(arguments[0], q);
			} : function(r, s) {
				var q = r.length >>> 0;
				if (typeof s != "function") {
					throw new TypeError();
				}
				if (q == 0 && arguments.length == 2) {
					throw new TypeError();
				}
				var t = 0;
				if (arguments.length >= 3) {
					var u = arguments[2];
				} else {
					do {
						if (t in r) {
							u = r[t++];
							break;
						}
						if (++t >= q) {
							throw new TypeError();
						}
					} while (true);
				}
				for (; t < q; t++) {
					if (t in r) {
						u = s.call(null, u, r[t], t, r);
					}
				}
				return u;
			};
			d = Array.prototype.reduceRight ? function() {
				var q = Array.prototype.slice.call(arguments, 1);
				return Array.prototype.reduceRight.apply(arguments[0], q);
			} : function(r, s) {
				var q = r.length >>> 0;
				if (typeof s != "function") {
					throw new TypeError();
				}
				if (q == 0 && arguments.length == 2) {
					throw new TypeError();
				}
				var t = q - 1;
				if (arguments.length >= 3) {
					var u = arguments[2];
				} else {
					do {
						if (t in r) {
							u = r[t--];
							break;
						}
						if (--t < 0) {
							throw new TypeError();
						}
					} while (true);
				}
				for (; t >= 0; t--) {
					if (t in r) {
						u = s.call(null, u, r[t], t, r);
					}
				}
				return u;
			};
			e = function(r) {
				var q = n.$typeof(r);
				return (q)
						? ((q != "array" && q != "arguments") ? [r] : r)
						: [];
			};
			f = function(q, s) {
				var s = e(s), u, t, r = false;
				for (u = 0; u < s.length; u++) {
					for (t = 0; t < q.length; t++) {
						if (q[t] === s[u]) {
							q.splice(t, 1);
							r = true;
						}
					}
				}
				return r;
			};
			c = function(q, r, t) {
				var s;
				for (s = 0; s < q.length; ij++) {
					if (q[s] === r) {
						q[s] = t;
						return true;
					}
				}
				return false;
			};
			k = function(q, u) {
				u = u || function(A, z) {
					return A - z;
				};
				var w = q.length;
				var s;
				var r;
				for (var v = 0; v < w - 1; v++) {
					r = false;
					for (var t = w - 1; t > v; t--) {
						if (u(q[t], q[t - 1]) < 0) {
							r = true;
							s = q[t - 1];
							q[t - 1] = q[t];
							q[t] = s;
						}
					}
					if (!r) {
						break;
					}
				}
				return q;
			};
			i = function(q, s, t) {
				var v = 0;
				var r = q.length;
				var u = Math.floor(q.length / 2);
				while (r != u) {
					if (t(s, q[u]) > 0) {
						v = u + 1;
					} else {
						r = u;
					}
					u = Math.floor((v + r) / 2);
				}
				return u;
			};
			j.indexOf = m;
			j.lastIndexOf = p;
			j.forEach = h;
			j.filter = b;
			j.some = o;
			j.map = a;
			j.every = g;
			j.reduce = l;
			j.reduceRight = d;
			j.toArray = e;
			j.remove = f;
			j.replace = c;
			j.bubbleSort = k;
			j.binarySearch = i;
		});
Jet().$package(function(p) {
	p.string = p.string || {};
	var A = p.string, j, k, d, v, n, E, b, H, u, i, D, l, r, c, W, P, S, B, L, I, K, R, T, t, g, C, h, U, M, f, G, O, w, Q, q, V, F, a, e, z, m, o;
	j = function(J) {
		return (J + "");
	};
	var s = {};
	k = function(Y, X) {
		var J = !/\W/.test(Y) ? s[Y] = s[Y]
				|| k(document.getElementById(Y).innerHTML) : new Function(
				"obj",
				"var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"
						+ Y.replace(/[\r\t\n]/g, " ").split("<%").join("\t")
								.replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(
										/\t=(.*?)%>/g, "',$1,'").split("\t")
								.join("');").split("%>").join("p.push('")
								.split("\r").join("\\'")
						+ "');}return p.join('');");
		return X ? J(X) : J;
	};
	d = function(J) {
		return d.RE.test(J);
	};
	d.RE = /^(?:ht|f)tp(?:s)?\:\/\/(?:[\w\-\.]+)\.\w+/i;
	v = function(aa) {
		var Y, X, ab, aa = aa || window.location.href, J = aa.indexOf("?"), Z = aa
				.substring(J + 1).split("&"), ad = {};
		for (Y = 0; Y < Z.length; Y++) {
			try {
				J = Z[Y].indexOf("=");
				X = Z[Y].substring(0, J);
				ab = Z[Y].substring(J + 1);
				if (!(ad[X] = unescape(ab))) {
					throw new Error("uri has wrong query string.");
				}
			} catch (ac) {
			}
		}
		return ad;
	};
	n = function(J, X, Y) {
		return ((typeof X == "string") ? new RegExp(X, Y) : X).test(J);
	};
	E = function(J, Y, X) {
		return (X) ? (X + J + X).indexOf(X + Y + X) > -1 : J.indexOf(Y) > -1;
	};
	b = function(J) {
		return String(J).replace(/^\s+|\s+$/g, "");
	};
	H = function(J) {
		return b(J.replace(/\s+/g, " "));
	};
	u = function(J) {
		return J.replace(/-\D/g, function(X) {
					return X.charAt(1).toUpperCase();
				});
	};
	i = function(J) {
		return J.replace(/[A-Z]/g, function(X) {
					return ("-" + X.charAt(0).toLowerCase());
				});
	};
	D = function(J) {
		return J.replace(/\b[a-z]/g, function(X) {
					return X.toUpperCase();
				});
	};
	l = function(J) {
		return J.replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1");
	};
	r = function(J, X) {
		return parseInt(J, X || 10);
	};
	c = function(J) {
		return parseFloat(J);
	};
	W = function(J) {
		return String(J).replace(/\r/gi, "").replace(/\n/gi, "");
	};
	P = function(J) {
		return String(J).replace(/&/gi, "&amp;").replace(/\\/gi, "&#92;")
				.replace(/\'/gi, "&#39;").replace(/\"/gi, "&quot;").replace(
						/</gi, "&lt;").replace(/>/gi, "&gt;").replace(/ /gi,
						"&nbsp;").replace(/\r\n/g, "<br />").replace(/\n\r/g,
						"<br />").replace(/\n/g, "<br />").replace(/\r/g,
						"<br />");
	};
	S = function(J) {
		return String(J).replace(/\\/gi, "\\").replace(/\'/gi, "'").replace(
				/\"/gi, "'");
	};
	I = function(J, Y) {
		var X = J.match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);
		return (X) ? X.slice(1).hexToRgb(Y) : null;
	};
	K = function(X, Y) {
		var J = X.match(/\d{1,3}/g);
		return (J) ? J.rgbToHex(Y) : null;
	};
	R = function(X, Y) {
		var J = "";
		var Z = X.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, function() {
					J += arguments[1] + "\n";
					return "";
				});
		if (Y === true) {
			$exec(J);
		} else {
			if ($type(Y) == "function") {
				Y(J, Z);
			}
		}
		return Z;
	};
	B = function(J, X) {
		return encodeURIComponent(String(J)) + "="
				+ encodeURIComponent(String(X));
	};
	L = function(Y) {
		var J = [];
		for (var X in Y) {
			J.push(B(X, Y[X]));
		}
		return J.join("&");
	};
	T = function(X, J, Y) {
		return X.replace(Y || (/\\?\{([^{}]+)\}/g), function(aa, Z) {
					if (aa.charAt(0) == "\\") {
						return aa.slice(1);
					}
					return (J[Z] != undefined) ? J[Z] : "";
				});
	};
	t = function(Z, J, Y, X) {
		if (!RegExp.prototype.isPrototypeOf(J)) {
			return Z.replace(new RegExp(J, (X ? "gi" : "g")), Y);
		} else {
			return Z.replace(J, Y);
		}
	};
	g = function(J) {
		return J.replace(/[^\x00-\xff]/g, "aa").length;
	};
	C = function(J, X) {
		return J.substring(0, (J.length - X));
	};
	h = function(J, Y) {
		var X = J;
		while (g(X) > Y) {
			X = C(X, 1);
		}
		return X;
	};
	U = function(J) {
		if (J.search(/^\d+$/) !== -1) {
			return true;
		} else {
			return false;
		}
	};
	M = function(J) {
		if (J
				.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) !== -1) {
			return true;
		} else {
			return false;
		}
	};
	var f = function(J) {
		J = J.replace(/&/g, "&amp;");
		J = J.replace(/>/g, "&gt;");
		J = J.replace(/</g, "&lt;");
		J = J.replace(/"/g, "&quot;");
		J = J.replace(/'/g, "&#39;");
		return J;
	};
	var G = function(J) {
		J = J.replace(/&amp;/g, "&");
		J = J.replace(/&gt;/g, ">");
		J = J.replace(/&lt;/g, "<");
		J = J.replace(/&quot;/g, '"');
		J = J.replace(/&#39;/g, "'");
		return J;
	};
	var O = function(J) {
		J = J.replace(/&amp;/g, "&");
		J = J.replace(/&gt;/g, ">");
		J = J.replace(/&lt;/g, "<");
		J = J.replace(/\\\\"/g, '"');
		J = J.replace(/\\\\'/g, "'");
		return J;
	};
	var w = function(J) {
		J = J.replace(/&/g, "&amp;");
		J = J.replace(/>/g, "&gt;");
		J = J.replace(/</g, "&lt;");
		J = J.replace(/"/g, "&quot;");
		J = J.replace(/'/g, "&#39;");
		J = J.replace(/=/g, "&#61;");
		J = J.replace(/`/g, "&#96;");
		return J;
	};
	var q = function(J) {
		return J.replace(/[&'"<>\/\\\-\x00-\x09\x0b-\x0c\x1f\x80-\xff]/g,
				function(X) {
					return "&#" + X.charCodeAt(0) + ";";
				}).replace(/ /g, "&nbsp;").replace(/\r\n/g, "<br />").replace(
				/\n/g, "<br />").replace(/\r/g, "<br />");
	};
	var Q = function(J) {
		return J.replace(/[&'"<>\/\\\-\x00-\x1f\x80-\xff]/g, function(X) {
					return "&#" + X.charCodeAt(0) + ";";
				});
	};
	var V = function(J) {
		J += "";
		return J.replace(/[\\"']/g, function(X) {
					return "\\" + X;
				}).replace(/%/g, "\\x25").replace(/\n/g, "\\n").replace(/\r/g,
				"\\r").replace(/\x01/g, "\\x01");
	};
	var F = function(J) {
		return q(e(escScript(J)));
	};
	var a = function(J) {
		return J.replace(/[\\\^\$\*\+\?\{\}\.\(\)\[\]]/g, function(Y, X) {
					return "\\" + Y;
				});
	};
	var e = function(J) {
		return escape(J).replace(/\+/g, "%2B");
	};
	var z = function(J) {
		J = encodeURIComponent(J);
		J = J.replace(/~/g, "%7E");
		J = J.replace(/!/g, "%21");
		J = J.replace(/\*/g, "%2A");
		J = J.replace(/\(/g, "%28");
		J = J.replace(/\)/g, "%29");
		J = J.replace(/'/g, "%27");
		J = J.replace(/\?/g, "%3F");
		J = J.replace(/;/g, "%3B");
		return J;
	};
	var m = function(J) {
		return (/^(https?:\/\/)?[\w\-.]+\.(qq|paipai|soso|taotao)\.com($|\/|\\)/i)
				.test(J)
				|| (/^[\w][\w\/\.\-_%]+$/i).test(J)
				|| (/^[\/\\][^\/\\]/i).test(J) ? true : false;
	};
	var o = function(Y, Z) {
		var X = document.createElement("div");
		X.style.visibility = "hidden";
		X.style.width = "auto";
		if (Z) {
			X.style.fontSize = Z + "px";
		}
		X.style.position = "absolute";
		X.innerHTML = p.string.encodeHtmlSimple(Y);
		document.body.appendChild(X);
		var J = X.offsetWidth;
		document.body.removeChild(X);
		return J;
	};
	var N = function(Y, Z, X) {
		for (var J = Y.length; J >= 0; --J) {
			Y = Y.substring(0, J);
			if (o(Y, Z) < X) {
				return Y;
			}
		}
		return "";
	};
	A.cutByWidth = N;
	A.toString = j;
	A.template = k;
	A.isURL = d;
	A.mapQuery = v;
	A.test = n;
	A.contains = E;
	A.trim = b;
	A.clean = H;
	A.camelCase = u;
	A.hyphenate = i;
	A.capitalize = D;
	A.escapeRegExp = l;
	A.toInt = r;
	A.toFloat = c;
	A.toSingleLine = W;
	A.toHtml = P;
	A.toTitle = S;
	A.toQueryPair = B;
	A.toQueryString = L;
	A.hexToRgb = I;
	A.rgbToHex = K;
	A.stripScripts = R;
	A.substitute = T;
	A.replaceAll = t;
	A.byteLength = g;
	A.cutRight = C;
	A.isNumber = U;
	A.isEmail = M;
	A.cutByBytes = h;
	A.encodeHtmlSimple = f;
	A.decodeHtmlSimple = G;
	A.decodeHtmlSimple2 = O;
	A.encodeHtmlAttributeSimple = w;
	A.encodeHtmlAttribute = Q;
	A.encodeHtml = q;
	A.encodeScript = V;
	A.encodeHrefScript = F;
	A.encodeRegExp = a;
	A.encodeUrl = e;
	A.encodeUriComponent = z;
	A.vaildTencentUrl = m;
	A.getCharWidth = o;
});
Jet().$package(function(J) {
	var $ = J.dom.id, $D = J.dom, $E = J.event, ajax, comet, load, loadCss, loadScript;
	if (typeof window.XMLHttpRequest === "undefined") {
		window.XMLHttpRequest = function() {
			return new window.ActiveXObject(navigator.userAgent
					.indexOf("MSIE 5") >= 0
					? "Microsoft.XMLHTTP"
					: "Msxml2.XMLHTTP");
		};
	}
	J.http = J.http || {};
	ajax = function(uri, options) {
		var httpRequest, httpSuccess, timeout, isTimeout = false, isComplete = false;
		options = {
			method : options.method || "GET",
			data : options.data || null,
			arguments : options.arguments || null,
			onSuccess : options.onSuccess || function() {
			},
			onError : options.onError || function() {
			},
			onComplete : options.onComplete || function() {
			},
			onTimeout : options.onTimeout || function() {
			},
			isAsync : options.isAsync || true,
			timeout : options.timeout ? options.timeout : 10000,
			contentType : options.contentType ? options.contentType : "utf-8",
			type : options.type || "xml"
		};
		uri = uri || "";
		timeout = options.timeout;
		httpRequest = new window.XMLHttpRequest();
		httpRequest.open(options.method, uri, options.isAsync);
		httpRequest.setRequestHeader("Content-Type", options.contentType);
		httpSuccess = function(r) {
			try {
				return (!r.status && location.protocol == "file:")
						|| (r.status >= 200 && r.status < 300)
						|| (r.status == 304)
						|| (navigator.userAgent.indexOf("Safari") > -1 && typeof r.status == "undefined");
			} catch (e) {
			}
			return false;
		};
		httpRequest.onreadystatechange = function() {
			if (httpRequest.readyState == 4) {
				if (!isTimeout) {
					var o = {};
					o.responseText = httpRequest.responseText;
					o.responseXML = httpRequest.responseXML;
					o.data = options.data;
					o.status = httpRequest.status;
					o.uri = uri;
					o.arguments = options.arguments;
					if (httpSuccess(httpRequest)) {
						if (options.type === "script") {
							eval.call(window, data);
						}
						options.onSuccess(o);
					} else {
						options.onError(o);
					}
					options.onComplete(o);
				}
				isComplete = true;
				httpRequest = null;
			}
		};
		httpRequest.send(options.data);
		window.setTimeout(function() {
					var o;
					if (!isComplete) {
						isTimeout = true;
						o = {};
						o.uri = uri;
						o.arguments = options.arguments;
						options.onTimeout(o);
						options.onComplete(o);
					}
				}, timeout);
		return httpRequest;
	};
	comet = function(uri, options) {
		uri = uri || "";
		options = {
			method : options.method || "GET",
			data : options.data || null,
			arguments : options.arguments || null,
			callback : options.callback || function() {
			},
			onLoad : options.onLoad || function() {
			},
			contentType : options.contentType ? options.contentType : "utf-8"
		};
		var connection;
		if (J.browser.ie) {
			var htmlfile = new ActiveXObject("htmlfile");
			htmlfile.open();
			htmlfile.close();
			var iframediv = htmlfile.createElement("div");
			htmlfile.appendChild(iframediv);
			htmlfile.parentWindow._parent = self;
			iframediv.innerHTML = '<iframe id="_cometIframe" src="' + uri
					+ "?callback=window.parent._parent." + options.callback
					+ '"></iframe>';
			connection = htmlfile.getElementById("_cometIframe");
		} else {
			connection = $D.node("iframe");
			connection.setAttribute("id", "_cometIframe");
			connection.setAttribute("src", uri
							+ "?callback=window.parent._parent."
							+ options.callback);
			connection.style.position = "absolute";
			connection.style.visibility = "hidden";
			connection.style.left = connection.style.top = "-999px";
			connection.style.width = connection.style.height = "1px";
			document.body.appendChild(connection);
			self._parent = self;
		}
		$E.on(connection, "load", options.onLoad);
		return connection;
	};
	load = function(type, uri, options) {
		var node, linkNode, scriptNode, id, head = document
				.getElementsByTagName("head") ? document
				.getElementsByTagName("head")[0] : document.documentElement, timer, isTimeout = false, isComplete = false, options = options
				|| {}, isDefer = options.isDefer || false, query = options.query
				|| null, arguments = options.arguments || null, onSuccess = options.onSuccess
				|| function() {
				}, onError = options.onError || function() {
		}, onComplete = options.onComplete || function() {
		}, purge, onTimeout = options.onTimeout || function() {
		}, timeout = options.timeout ? options.timeout : 10000, charset = options.charset
				? options.charset
				: "utf-8", win = options.win || window, o, getId;
		uri = uri || "";
		if (query !== null) {
			uri = uri + "?" + query;
		}
		getId = function() {
			return load.Id++;
		};
		id = getId();
		purge = function(id) {
			head.removeChild($("jet_load_" + id));
		};
		linkNode = function(uri, win, charset) {
			var c = charset || "utf-8";
			return $D.node("link", {
						id : "jet_load_" + id,
						type : "text/css",
						charset : c,
						rel : "stylesheet",
						href : uri
					}, win);
		};
		scriptNode = function(uri, win, charset, isDefer) {
			var c = charset || "utf-8";
			var node = $D.node("script", {
						id : "jet_load_" + id,
						type : "text/javascript",
						charset : c,
						src : uri
					}, win);
			if (isDefer) {
				node.setAttribute("defer", "defer");
			}
			return node;
		};
		if (type === "script") {
			node = options.node || scriptNode(uri, win, charset, isDefer);
		} else {
			if (type === "css") {
				node = options.node || linkNode(uri, win, charset);
			}
		}
		if (J.browser.engine.trident) {
			node.onreadystatechange = function() {
				var rs = this.readyState;
				if (rs === "loaded" || rs === "complete") {
					node.onreadystatechange = null;
					if (!isTimeout) {
						isComplete = true;
						window.clearTimeout(timer);
						timer = null;
						o = {};
						o.id = id;
						o.uri = uri;
						o.arguments = arguments;
						onSuccess(o);
						onComplete(o);
						if (type === "script") {
						}
					}
				}
			};
		} else {
			if (J.browser.engine.webkit) {
				$E.on(node, "load", function() {
							var o;
							if (!isTimeout) {
								isComplete = true;
								window.clearTimeout(timer);
								timer = null;
								o = {};
								o.id = id;
								o.uri = uri;
								o.arguments = arguments;
								onSuccess(o);
								onComplete(o);
								if (type === "script") {
									purge(id);
								}
							}
						});
			} else {
				node.onload = function() {
					var o;
					if (!isTimeout) {
						isComplete = true;
						window.clearTimeout(timer);
						timer = null;
						o = {};
						o.id = id;
						o.uri = uri;
						o.arguments = options.arguments;
						onSuccess(o);
						onComplete(o);
						if (type === "script") {
							purge(id);
						}
					}
				};
				node.onerror = function(e) {
					var o;
					if (!isTimeout) {
						isComplete = true;
						window.clearTimeout(timer);
						timer = null;
						o = {};
						o.id = id;
						o.uri = uri;
						o.arguments = arguments;
						o.error = e;
						onError(o);
						onComplete(o);
						purge(id);
					}
				};
			}
		}
		if (options.node) {
			if (type === "script") {
				node.src = uri;
			} else {
				if (type === "css") {
					node.href = uri;
				}
			}
		} else {
			head.appendChild(node);
		}
		if (type === "script") {
			timer = window.setTimeout(function() {
						var o;
						if (!isComplete) {
							isTimeout = true;
							o = {};
							o.uri = uri;
							o.arguments = arguments;
							onTimeout(o);
							onComplete(o);
							purge(id);
						}
					}, timeout);
		}
		var func = function(node) {
			this._node = node;
			this._head = head;
		};
		func.prototype = {
			abort : function() {
				this._node.src = "";
				this._head.removeChild(this._node);
				delete this._node;
			}
		};
		return new func(node);
	};
	load.Id = 0;
	loadCss = function(uri, options) {
		return load("css", uri, options);
	};
	loadScript = function(uri, options) {
		return load("script", uri, options);
	};
	J.http.ajax = ajax;
	J.http.comet = comet;
	J.http.load = load;
	J.http.loadCss = loadCss;
	J.http.loadScript = loadScript;
});
Jet().$package(function(a) {
	var b = window.location.host;
	a.cookie = {
		set : function(f, h, g, i, c) {
			if (c) {
				var e = new Date();
				var d = new Date();
				d.setTime(e.getTime() + 3600000 * c);
			}
			window.document.cookie = f + "=" + h + "; "
					+ (c ? ("expires=" + d.toGMTString() + "; ") : "")
					+ (i ? ("path=" + i + "; ") : "path=/; ")
					+ (g ? ("domain=" + g + ";") : ("domain=" + b + ";"));
			return true;
		},
		get : function(d) {
			var e = new RegExp("(?:^|;+|\\s+)" + d + "=([^;]*)");
			var c = window.document.cookie.match(e);
			return (!c ? "" : c[1]);
		},
		remove : function(c, d, e) {
			window.document.cookie = c
					+ "=; expires=Mon, 26 Jul 1997 05:00:00 GMT; "
					+ (e ? ("path=" + e + "; ") : "path=/; ")
					+ (d ? ("domain=" + d + ";") : ("domain=" + b + ";"));
		}
	};
});
Jet().$package(function(a) {
	var b = (function() {
		var d = /(?:[\w\-\\.#]+)+(?:\[\w+?=([\'"])?(?:\\\1|.)+?\1\])?|\*|>/ig, i = /^(?:[\w\-_]+)?\.([\w\-_]+)/, h = /^(?:[\w\-_]+)?#([\w\-_]+)/, l = /^([\w\*\-_]+)/, j = [
				null, null];
		function f(q, o) {
			o = o || document;
			var m = /^[\w\-_#]+$/.test(q);
			if (!m && o.querySelectorAll) {
				return e(o.querySelectorAll(q));
			}
			if (q.indexOf(",") > -1) {
				var z = q.split(/,/g), v = [], u = 0, t = z.length;
				for (; u < t; ++u) {
					v = v.concat(f(z[u], o));
				}
				return g(v);
			}
			var r = q.match(d), p = r.pop(), n = (p.match(h) || j)[1], w = !n
					&& (p.match(i) || j)[1], A = !n && (p.match(l) || j)[1], s;
			if (w && !A && o.getElementsByClassName) {
				s = e(o.getElementsByClassName(w));
			} else {
				s = !n && e(o.getElementsByTagName(A || "*"));
				if (w) {
					s = k(s, "className", RegExp("(^|\\s)" + w + "(\\s|$)"));
				}
				if (n) {
					var B = o.getElementById(n);
					return B ? [B] : [];
				}
			}
			return r[0] && s[0] ? c(r, s) : s;
		}
		function e(q) {
			try {
				return Array.prototype.slice.call(q);
			} catch (p) {
				var n = [], o = 0, m = q.length;
				for (; o < m; ++o) {
					n[o] = q[o];
				}
				return n;
			}
		}
		function c(A, s, p) {
			var t = A.pop();
			if (t === ">") {
				return c(A, s, true);
			}
			var u = [], m = -1, n = (t.match(h) || j)[1], v = !n
					&& (t.match(i) || j)[1], z = !n && (t.match(l) || j)[1], w = -1, o, B, q;
			z = z && z.toLowerCase();
			while ((o = s[++w])) {
				B = o.parentNode;
				do {
					q = !z || z === "*" || z === B.nodeName.toLowerCase();
					q = q && (!n || B.id === n);
					q = q
							&& (!v || RegExp("(^|\\s)" + v + "(\\s|$)")
									.test(B.className));
					if (p || q) {
						break;
					}
				} while ((B = B.parentNode));
				if (q) {
					u[++m] = o;
				}
			}
			return A[0] && u[0] ? c(A, u) : u;
		}
		var g = (function() {
			var m = +new Date();
			var n = (function() {
				var o = 1;
				return function(r) {
					var q = r[m], p = o++;
					if (!q) {
						r[m] = p;
						return true;
					}
					return false;
				};
			})();
			return function(o) {
				var u = o.length, p = [], t = -1, q = 0, s;
				for (; q < u; ++q) {
					s = o[q];
					if (n(s)) {
						p[++t] = s;
					}
				}
				m += 1;
				return p;
			};
		})();
		function k(t, m, s) {
			var o = -1, q, p = -1, n = [];
			while ((q = t[++o])) {
				if (s.test(q[m])) {
					n[++p] = q;
				}
			}
			return n;
		}
		return f;
	})();
	a.dom.mini = b;
});
Jet().$package(function(J) {
	var JSON = {};
	"use strict";
	(function() {
		function f(n) {
			return n < 10 ? "0" + n : n;
		}
		if (typeof Date.prototype.toJSON !== "function" && false) {
			Date.prototype.toJSON = function(key) {
				return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-"
						+ f(this.getUTCMonth() + 1) + "-"
						+ f(this.getUTCDate()) + "T" + f(this.getUTCHours())
						+ ":" + f(this.getUTCMinutes()) + ":"
						+ f(this.getUTCSeconds()) + "Z" : null;
			};
			String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(
					key) {
				return this.valueOf();
			};
		}
		var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
			"\b" : "\\b",
			"\t" : "\\t",
			"\n" : "\\n",
			"\f" : "\\f",
			"\r" : "\\r",
			'"' : '\\"',
			"\\" : "\\\\"
		}, rep;
		function quote(string) {
			escapable.lastIndex = 0;
			return escapable.test(string) ? '"'
					+ string.replace(escapable, function(a) {
								var c = meta[a];
								return typeof c === "string" ? c : "\\u"
										+ ("0000" + a.charCodeAt(0)
												.toString(16)).slice(-4);
							}) + '"' : '"' + string + '"';
		}
		function str(key, holder) {
			var i, k, v, length, mind = gap, partial, value = holder[key];
			if (value && typeof value === "object"
					&& typeof value.toJSON === "function") {
				value = value.toJSON(key);
			}
			if (typeof rep === "function") {
				value = rep.call(holder, key, value);
			}
			switch (typeof value) {
				case "string" :
					return quote(value);
				case "number" :
					return isFinite(value) ? String(value) : "null";
				case "boolean" :
				case "null" :
					return String(value);
				case "object" :
					if (!value) {
						return "null";
					}
					gap += indent;
					partial = [];
					if (Object.prototype.toString.apply(value) === "[object Array]") {
						length = value.length;
						for (i = 0; i < length; i += 1) {
							partial[i] = str(i, value) || "null";
						}
						v = partial.length === 0 ? "[]" : gap
								? "[\n" + gap + partial.join(",\n" + gap)
										+ "\n" + mind + "]"
								: "[" + partial.join(",") + "]";
						gap = mind;
						return v;
					}
					if (rep && typeof rep === "object") {
						length = rep.length;
						for (i = 0; i < length; i += 1) {
							k = rep[i];
							if (typeof k === "string") {
								v = str(k, value);
								if (v) {
									partial.push(quote(k) + (gap ? ": " : ":")
											+ v);
								}
							}
						}
					} else {
						for (k in value) {
							if (Object.hasOwnProperty.call(value, k)) {
								v = str(k, value);
								if (v) {
									partial.push(quote(k) + (gap ? ": " : ":")
											+ v);
								}
							}
						}
					}
					v = partial.length === 0 ? "{}" : gap
							? "{\n" + gap + partial.join(",\n" + gap) + "\n"
									+ mind + "}"
							: "{" + partial.join(",") + "}";
					gap = mind;
					return v;
			}
		}
		if (typeof JSON.stringify !== "function") {
			JSON.stringify = function(value, replacer, space) {
				var i;
				gap = "";
				indent = "";
				if (typeof space === "number") {
					for (i = 0; i < space; i += 1) {
						indent += " ";
					}
				} else {
					if (typeof space === "string") {
						indent = space;
					}
				}
				rep = replacer;
				if (replacer
						&& typeof replacer !== "function"
						&& (typeof replacer !== "object" || typeof replacer.length !== "number")) {
					throw new Error("JSON.stringify");
				}
				return str("", {
							"" : value
						});
			};
		}
		if (typeof JSON.parse !== "function") {
			JSON.parse = function(text, reviver) {
				var j;
				function walk(holder, key) {
					var k, v, value = holder[key];
					if (value && typeof value === "object") {
						for (k in value) {
							if (Object.hasOwnProperty.call(value, k)) {
								v = walk(value, k);
								if (v !== undefined) {
									value[k] = v;
								} else {
									delete value[k];
								}
							}
						}
					}
					return reviver.call(holder, key, value);
				}
				cx.lastIndex = 0;
				if (cx.test(text)) {
					text = text.replace(cx, function(a) {
								return "\\u"
										+ ("0000" + a.charCodeAt(0)
												.toString(16)).slice(-4);
							});
				}
				if (/^[\],:{}\s]*$/
						.test(text
								.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
										"@")
								.replace(
										/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
										"]")
								.replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
					j = eval("(" + text + ")");
					return typeof reviver === "function" ? walk({
								"" : j
							}, "") : j;
				}
				throw new SyntaxError("JSON.parse");
			};
		}
	}());
	J.json = JSON;
});
Jet().$package(function(a) {
			a.fx = a.fx || {};
		});
Jet().$package(function(b) {
	var c = b.dom, a = b.event, f = b.fx.tween;
	var d = {
		linear : function(h, g, j, i) {
			return j * h / i + g;
		},
		quadratic : {
			easeIn : function(h, g, j, i) {
				return j * (h /= i) * h + g;
			},
			easeOut : function(h, g, j, i) {
				return -j * (h /= i) * (h - 2) + g;
			},
			easeInOut : function(h, g, j, i) {
				if ((h /= i / 2) < 1) {
					return j / 2 * h * h + g;
				}
				return -j / 2 * ((--h) * (h - 2) - 1) + g;
			}
		},
		cubic : {
			easeIn : function(h, g, j, i) {
				return j * (h /= i) * h * h + g;
			},
			easeOut : function(h, g, j, i) {
				return j * ((h = h / i - 1) * h * h + 1) + g;
			},
			easeInOut : function(h, g, j, i) {
				if ((h /= i / 2) < 1) {
					return j / 2 * h * h * h + g;
				}
				return j / 2 * ((h -= 2) * h * h + 2) + g;
			}
		},
		quartic : {
			easeIn : function(h, g, j, i) {
				return j * (h /= i) * h * h * h + g;
			},
			easeOut : function(h, g, j, i) {
				return -j * ((h = h / i - 1) * h * h * h - 1) + g;
			},
			easeInOut : function(h, g, j, i) {
				if ((h /= i / 2) < 1) {
					return j / 2 * h * h * h * h + g;
				}
				return -j / 2 * ((h -= 2) * h * h * h - 2) + g;
			}
		},
		quintic : {
			easeIn : function(h, g, j, i) {
				return j * (h /= i) * h * h * h * h + g;
			},
			easeOut : function(h, g, j, i) {
				return j * ((h = h / i - 1) * h * h * h * h + 1) + g;
			},
			easeInOut : function(h, g, j, i) {
				if ((h /= i / 2) < 1) {
					return j / 2 * h * h * h * h * h + g;
				}
				return j / 2 * ((h -= 2) * h * h * h * h + 2) + g;
			}
		},
		sinusoidal : {
			easeIn : function(h, g, j, i) {
				return -j * Math.cos(h / i * (Math.PI / 2)) + j + g;
			},
			easeOut : function(h, g, j, i) {
				return j * Math.sin(h / i * (Math.PI / 2)) + g;
			},
			easeInOut : function(h, g, j, i) {
				return -j / 2 * (Math.cos(Math.PI * h / i) - 1) + g;
			}
		},
		exponential : {
			easeIn : function(h, g, j, i) {
				return (h == 0) ? g : j * Math.pow(2, 10 * (h / i - 1)) + g;
			},
			easeOut : function(h, g, j, i) {
				return (h == i) ? g + j : j * (-Math.pow(2, -10 * h / i) + 1)
						+ g;
			},
			easeInOut : function(h, g, j, i) {
				if (h == 0) {
					return g;
				}
				if (h == i) {
					return g + j;
				}
				if ((h /= i / 2) < 1) {
					return j / 2 * Math.pow(2, 10 * (h - 1)) + g;
				}
				return j / 2 * (-Math.pow(2, -10 * --h) + 2) + g;
			}
		},
		circular : {
			easeIn : function(h, g, j, i) {
				return -j * (Math.sqrt(1 - (h /= i) * h) - 1) + g;
			},
			easeOut : function(h, g, j, i) {
				return j * Math.sqrt(1 - (h = h / i - 1) * h) + g;
			},
			easeInOut : function(h, g, j, i) {
				if ((h /= i / 2) < 1) {
					return -j / 2 * (Math.sqrt(1 - h * h) - 1) + g;
				}
				return j / 2 * (Math.sqrt(1 - (h -= 2) * h) + 1) + g;
			}
		},
		elastic : {
			easeIn : function(i, g, m, l, h, k) {
				if (i == 0) {
					return g;
				}
				if ((i /= l) == 1) {
					return g + m;
				}
				if (!k) {
					k = l * 0.3;
				}
				if (!h || h < Math.abs(m)) {
					h = m;
					var j = k / 4;
				} else {
					var j = k / (2 * Math.PI) * Math.asin(m / h);
				}
				return -(h * Math.pow(2, 10 * (i -= 1)) * Math.sin((i * l - j)
						* (2 * Math.PI) / k))
						+ g;
			},
			easeOut : function(i, g, m, l, h, k) {
				if (i == 0) {
					return g;
				}
				if ((i /= l) == 1) {
					return g + m;
				}
				if (!k) {
					k = l * 0.3;
				}
				if (!h || h < Math.abs(m)) {
					h = m;
					var j = k / 4;
				} else {
					var j = k / (2 * Math.PI) * Math.asin(m / h);
				}
				return (h * Math.pow(2, -10 * i)
						* Math.sin((i * l - j) * (2 * Math.PI) / k) + m + g);
			},
			easeInOut : function(i, g, m, l, h, k) {
				if (i == 0) {
					return g;
				}
				if ((i /= l / 2) == 2) {
					return g + m;
				}
				if (!k) {
					k = l * (0.3 * 1.5);
				}
				if (!h || h < Math.abs(m)) {
					h = m;
					var j = k / 4;
				} else {
					var j = k / (2 * Math.PI) * Math.asin(m / h);
				}
				if (i < 1) {
					return -0.5
							* (h * Math.pow(2, 10 * (i -= 1)) * Math
									.sin((i * l - j) * (2 * Math.PI) / k)) + g;
				}
				return h * Math.pow(2, -10 * (i -= 1))
						* Math.sin((i * l - j) * (2 * Math.PI) / k) * 0.5 + m
						+ g;
			}
		},
		back : {
			easeIn : function(h, g, k, j, i) {
				if (i == undefined) {
					i = 1.70158;
				}
				return k * (h /= j) * h * ((i + 1) * h - i) + g;
			},
			easeOut : function(h, g, k, j, i) {
				if (i == undefined) {
					i = 1.70158;
				}
				return k * ((h = h / j - 1) * h * ((i + 1) * h + i) + 1) + g;
			},
			easeInOut : function(h, g, k, j, i) {
				if (i == undefined) {
					i = 1.70158;
				}
				if ((h /= j / 2) < 1) {
					return k / 2 * (h * h * (((i *= (1.525)) + 1) * h - i)) + g;
				}
				return k / 2
						* ((h -= 2) * h * (((i *= (1.525)) + 1) * h + i) + 2)
						+ g;
			}
		},
		bounce : {
			easeIn : function(h, g, j, i) {
				return j - d.bounce.easeOut(i - h, 0, j, i) + g;
			},
			easeOut : function(h, g, j, i) {
				if ((h /= i) < (1 / 2.75)) {
					return j * (7.5625 * h * h) + g;
				} else {
					if (h < (2 / 2.75)) {
						return j * (7.5625 * (h -= (1.5 / 2.75)) * h + 0.75)
								+ g;
					} else {
						if (h < (2.5 / 2.75)) {
							return j
									* (7.5625 * (h -= (2.25 / 2.75)) * h + 0.9375)
									+ g;
						} else {
							return j
									* (7.5625 * (h -= (2.625 / 2.75)) * h + 0.984375)
									+ g;
						}
					}
				}
			},
			easeInOut : function(h, g, j, i) {
				if (h < i / 2) {
					return d.bounce.easeIn(h * 2, 0, j, i) * 0.5 + g;
				} else {
					return d.bounce.easeOut(h * 2 - i, 0, j, i) * 0.5 + j * 0.5
							+ g;
				}
			}
		}
	};
	var e = new b.Class({
				init : function(i, g, j, l, k, n) {
					var k = k, n = n || 20, h = this, o;
					this._begin = j;
					this._end = l;
					var m = this._run = function() {
						if (h.current < n) {
							h.current++;
							if (h._begin > h._end) {
								o = h._begin
										- Math.ceil(k(h.current, 0,
												(h._begin - h._end), n));
							} else {
								o = h._begin
										+ Math.ceil(k(h.current, 0,
												(h._end - h._begin), n));
							}
							c.setStyle(i, g, o + "px");
							h._timer = setTimeout(m, 30);
						} else {
							a.notifyObservers(h, "finish");
						}
					};
				},
				setBegin : function(g) {
					this._begin = g;
				},
				setEnd : function(g) {
					this._end = g;
				},
				start : function() {
					clearTimeout(this._timer);
					this.current = 0;
					this._run();
				}
			});
	b.fx.Animation = e;
	b.fx.tween = d;
});
Jet().$package(function(a) {
			a.ui = a.ui || {};
		});
Jet().$package(function(l) {
	var j = l.dom, i = l.event;
	var a = function(o) {
		o.preventDefault();
	};
	var n = false, k = false, g = false, h = false, e, m, d, c;
	var f, b;
	l.ui.Drag = new l.Class({
		init : function(v, q, r) {
			var p = this;
			var o, w, t, s;
			this.apperceiveEl = v;
			r = r || {};
			this.isLimited = r.isLimited || false;
			var u = false;
			if (this.isLimited) {
				this._leftMargin = r.leftMargin || 0;
				this._topMargin = r.topMargin || 0;
				this._rightMargin = r.rightMargin || 0;
				this._bottomMargin = r.bottomMargin || 0;
			}
			if (r.xOnly) {
				this._xOnly = r.xOnly || false;
			}
			if (r.yOnly) {
				this._yOnly = r.yOnly || false;
			}
			if (q === false) {
				this.effectEl = false;
			} else {
				this.effectEl = q || v;
			}
			this.dragStart = function(A) {
				if (A.changedTouches) {
					if (A.changedTouches.length > 1) {
						return;
					}
					A = A.changedTouches[0];
					document.body.style.WebkitTouchCallout = "none";
				} else {
					A.preventDefault();
					A.stopPropagation();
				}
				i.notifyObservers(p, "beforeStart");
				n = r.clientEl ? j.getClientWidth(r.clientEl) : qqweb.layout
						.getClientWidth();
				k = r.clientEl ? j.getClientHeight(r.clientEl) : qqweb.layout
						.getClientHeight();
				g = parseInt(j.getClientWidth(q)) || 0;
				h = parseInt(j.getClientHeight(q)) || 0;
				if (p.isLimited) {
					e = n - g - p._rightMargin;
					m = p._leftMargin;
					d = k - h - p._bottomMargin;
					c = p._topMargin;
				}
				p._oldX = o = parseInt(j.getStyle(p.effectEl, "left")) || 0;
				p._oldY = w = parseInt(j.getStyle(p.effectEl, "top")) || 0;
				t = A.pageX;
				s = A.pageY;
				if (l.platform.iPad) {
					i.on(document, "touchmove", p.dragMove);
					i.on(document, "touchend", p.dragStop);
					var z = new WebKitCSSMatrix(window
							.getComputedStyle(p.apperceiveEl).webkitTransform);
					f = A.pageX - z.m41;
					b = A.pageY - z.m42;
				} else {
					i.on(document, "mousemove", p.dragMove);
					i.on(document, "mouseup", p.dragStop);
				}
				if (l.browser.ie) {
					i.on(document.body, "selectstart", a);
				}
				if (l.platform.iPad) {
					i.notifyObservers(p, "start", {
								x : A.pageX,
								y : A.pageY
							});
				} else {
					i.notifyObservers(p, "start", {
								x : o,
								y : w
							});
				}
			};
			this.dragMove = function(C) {
				if (C.browserEvent) {
					C.browserEvent.preventDefault();
					C.browserEvent.stopPropagation();
				} else {
					C.preventDefault();
					C.stopPropagation();
				}
				if (C.changedTouches) {
					C = C.changedTouches[0];
				}
				var z, D;
				if (!l.platform.iPad) {
					z = o + (C.pageX - t);
					D = w + (C.pageY - s);
				}
				if (p.isLimited) {
					if (z > e && !r.isOverRight) {
						z = e;
					}
					if (z < m && !r.isOverLeft) {
						z = m;
					}
				}
				if (p._oldX !== z && !p._yOnly) {
					p._oldX = z;
					if (p.effectEl && !l.platform.iPad) {
						p.effectEl.style.left = z + "px";
					}
					u = true;
				}
				if (p.isLimited) {
					if (D > d && !r.isOverBottom) {
						D = d;
					}
					if (D < c && !r.isOverTop) {
						D = c;
					}
				}
				if (p._oldY !== D && !p._xOnly) {
					p._oldY = D;
					if (p.effectEl && !l.platform.iPad) {
						p.effectEl.style.top = D + "px";
					}
					u = true;
				}
				var B = z, A = D;
				if (p.effectEl && l.platform.iPad) {
					p._oldX = o + (C.pageX - t);
					p._oldY = w + (C.pageY - s);
					if (!p._yOnly) {
						z = C.pageX - f;
					} else {
						z = o;
					}
					if (!p._xOnly) {
						D = C.pageY - b;
					} else {
						D = w;
					}
					p.effectEl.style.webkitTransform = "translate3d(" + z
							+ "px, " + D + "px, 0px)";
					B = C.pageX;
					A = C.pageY;
				}
				if (u) {
					i.notifyObservers(p, "move", {
								x : B,
								y : A
							});
				}
			};
			this.dragStop = function(D) {
				document.body.style.WebkitTouchCallout = "auto";
				if (u || l.platform.iPad) {
					var z = p._oldX;
					var F = p._oldY;
					if (p.isLimited) {
						if (z > e) {
							z = e;
						}
						if (z < m) {
							z = m;
						}
					}
					if (p.isLimited) {
						if (F > d) {
							F = d;
						}
						if (F < c) {
							F = c;
						}
					}
					i.notifyObservers(p, "end", {
								x : z,
								y : F
							});
				} else {
					i.notifyObservers(p, "end", null);
				}
				if (p.isLimited
						&& (p.isOverRight || p.isOverLeft || p.isOverTop || p.isOverBottom)) {
					var z = o + (D.pageX - t);
					var F = w + (D.pageY - s);
					var E = n - g - p._rightMargin;
					var B = p._leftMargin;
					var A = k - p._bottomMargin;
					var C = p._topMargin;
					if (z > E || z < B || F > A || F < C) {
						i.notifyObservers(p, "overFlowBorder", {
									x : z,
									y : F
								});
						l.out("overFlow");
					}
				}
				n = false;
				k = false;
				g = false;
				h = false;
				if (l.platform.iPad) {
					i.off(document, "touchmove", p.dragMove);
					i.off(document, "touchend", p.dragStop);
				} else {
					i.off(document, "mousemove", p.dragMove);
					i.off(document, "mouseup", p.dragStop);
				}
				if (l.browser.ie) {
					i.off(document.body, "selectstart", a);
				}
				u = false;
				l.out("end");
			};
			i.on(this.apperceiveEl, "customdrag", this.dragStart);
		},
		lock : function() {
			i.off(this.apperceiveEl, "customdrag", this.dragStart);
		},
		unlock : function() {
			i.on(this.apperceiveEl, "customdrag", this.dragStart);
		},
		show : function() {
			j.show(this.apperceiveEl);
		},
		hide : function() {
			j.hide(this.apperceiveEl);
		},
		setLimite : function(o) {
			o = o || {};
			this.isLimited = o.isLimited || false;
			if (this.isLimited) {
				this._leftMargin = o.leftMargin || 0;
				this._topMargin = o.topMargin || 0;
				this._rightMargin = o.rightMargin || 0;
				this._bottomMargin = o.bottomMargin || 0;
			}
		}
	});
});
Jet().$package(function(b) {
	b.ui = b.ui || {};
	var c = b.dom, a = b.event;
	var e = 0;
	var d = {
		t : "t",
		r : "r",
		b : "b",
		l : "l",
		rt : "rt",
		rb : "rb",
		lb : "lb",
		lt : "lt"
	};
	b.ui.Resize = new b.Class({
		init : function(k, f, h) {
			var g = this;
			h = h || {};
			this.apperceiveEl = k;
			if (f === false) {
				this.effectEl = false;
			} else {
				this.effectEl = f || k;
			}
			this.size = h.size || 5;
			this.minWidth = h.minWidth || 0;
			this.minHeight = h.minHeight || 0;
			this._dragProxy = h.dragProxy;
			this._left = this.getLeft();
			this._top = this.getTop();
			this._width = this.getWidth();
			this._height = this.getHeight();
			this.id = this.getId();
			var i = {
				t : "cursor:n-resize; z-index:1; left:0; top:-5px; width:100%; height:5px;",
				r : "cursor:e-resize; z-index:1; right:-5px; top:0; width:5px; height:100%;",
				b : "cursor:s-resize; z-index:1; left:0; bottom:-5px; width:100%; height:5px;",
				l : "cursor:w-resize; z-index:1; left:-5px; top:0; width:5px; height:100%;",
				rt : "cursor:ne-resize; z-index:2; right:-5px; top:-5px; width:5px; height:5px;",
				rb : "cursor:se-resize; z-index:2; right:-5px; bottom:-5px; width:5px; height:5px;",
				lt : "cursor:nw-resize; z-index:2; left:-5px; top:-5px; width:5px; height:5px;",
				lb : "cursor:sw-resize; z-index:2; left:-5px; bottom:-5px; width:5px; height:5px;"
			};
			this._onMousedown = function() {
				a.notifyObservers(g, "mousedown", {
							width : g._width,
							height : g._height
						});
			};
			this._onDragEnd = function() {
				a.notifyObservers(g, "end", {
							x : g.getLeft(),
							y : g.getTop(),
							width : g.getWidth(),
							height : g.getHeight()
						});
			};
			for (var j in d) {
				var l = c.node("div", {
							id : "window_" + this.id + "_resize_" + d[j]
						});
				this.apperceiveEl.appendChild(l);
				c.setCssText(l,
						"position:absolute; overflow:hidden; background:url("
								+ b.path + "assets/images/transparent.gif);"
								+ i[j]);
				if (this._dragProxy) {
				} else {
				}
				this["_dragController_" + d[j]] = new b.ui.Drag(l, false);
			}
			this._onDragLeftStart = function(m) {
				a.notifyObservers(g, "mousedown", {
							width : g._width,
							height : g._height
						});
				g._startLeft = g._left = g.getLeft();
				g._startWidth = g._width = g.getWidth();
			};
			this._onDragLeft = function(o) {
				var n = g._startWidth - o.x;
				var m = g._startLeft + o.x;
				if (n < g.minWidth) {
					n = g.minWidth;
					m = g._startLeft + (g._startWidth - n);
				}
				g.setLeft(m);
				g.setWidth(n);
				a.notifyObservers(g, "resize", {
							width : g._width,
							height : g._height
						});
			};
			this._onDragTopStart = function(m) {
				a.notifyObservers(g, "mousedown", {
							width : g._width,
							height : g._height
						});
				g._startTop = g._top = g.getTop();
				g._startHeight = g._height = g.getHeight();
			};
			this._onDragTop = function(n) {
				var m = g._startHeight - n.y;
				var o = g._startTop + n.y;
				if (m < g.minHeight) {
					m = g.minHeight;
					o = g._startTop + (g._startHeight - m);
				}
				g.setTop(o);
				g.setHeight(m);
				a.notifyObservers(g, "resize", {
							width : g._width,
							height : g._height
						});
			};
			this._onDragRightStart = function(m) {
				a.notifyObservers(g, "mousedown", {
							width : g._width,
							height : g._height
						});
				g._startWidth = g._width = g.getWidth();
			};
			this._onDragRight = function(n) {
				var m = g._startWidth + n.x;
				if (m < g.minWidth) {
					m = g.minWidth;
				}
				g.setWidth(m);
				a.notifyObservers(g, "resize", {
							width : g._width,
							height : g._height
						});
			};
			this._onDragBottomStart = function(m) {
				a.notifyObservers(g, "mousedown", {
							width : g._width,
							height : g._height
						});
				g._startHeight = g._height = g.getHeight();
			};
			this._onDragBottom = function(n) {
				var m = g._startHeight + n.y;
				if (m < g.minHeight) {
					m = g.minHeight;
				}
				g.setHeight(m);
				a.notifyObservers(g, "resize", {
							width : g._width,
							height : g._height
						});
			};
			this._onDragLeftTopStart = function(m) {
				g._onDragLeftStart(m);
				g._onDragTopStart(m);
			};
			this._onDragLeftTop = function(m) {
				g._onDragLeft(m);
				g._onDragTop(m);
			};
			this._onDragLeftBottomStart = function(m) {
				g._onDragLeftStart(m);
				g._onDragBottomStart(m);
			};
			this._onDragLeftBottom = function(m) {
				g._onDragLeft(m);
				g._onDragBottom(m);
			};
			this._onDragRightBottomStart = function(m) {
				g._onDragRightStart(m);
				g._onDragBottomStart(m);
			};
			this._onDragRightBottom = function(m) {
				g._onDragRight(m);
				g._onDragBottom(m);
			};
			this._onDragRightTopStart = function(m) {
				g._onDragRightStart(m);
				g._onDragTopStart(m);
			};
			this._onDragRightTop = function(m) {
				g._onDragRight(m);
				g._onDragTop(m);
			};
			a.addObserver(this["_dragController_" + d.t], "start",
					this._onDragTopStart);
			a.addObserver(this["_dragController_" + d.t], "move",
					this._onDragTop);
			a.addObserver(this["_dragController_" + d.t], "end",
					this._onDragEnd);
			a.addObserver(this["_dragController_" + d.r], "start",
					this._onDragRightStart);
			a.addObserver(this["_dragController_" + d.r], "move",
					this._onDragRight);
			a.addObserver(this["_dragController_" + d.r], "end",
					this._onDragEnd);
			a.addObserver(this["_dragController_" + d.b], "start",
					this._onDragBottomStart);
			a.addObserver(this["_dragController_" + d.b], "move",
					this._onDragBottom);
			a.addObserver(this["_dragController_" + d.b], "end",
					this._onDragEnd);
			a.addObserver(this["_dragController_" + d.l], "start",
					this._onDragLeftStart);
			a.addObserver(this["_dragController_" + d.l], "move",
					this._onDragLeft);
			a.addObserver(this["_dragController_" + d.l], "end",
					this._onDragEnd);
			a.addObserver(this["_dragController_" + d.rb], "start",
					this._onDragRightBottomStart);
			a.addObserver(this["_dragController_" + d.rb], "move",
					this._onDragRightBottom);
			a.addObserver(this["_dragController_" + d.rb], "end",
					this._onDragEnd);
			a.addObserver(this["_dragController_" + d.rt], "start",
					this._onDragRightTopStart);
			a.addObserver(this["_dragController_" + d.rt], "move",
					this._onDragRightTop);
			a.addObserver(this["_dragController_" + d.rt], "end",
					this._onDragEnd);
			a.addObserver(this["_dragController_" + d.lt], "start",
					this._onDragLeftTopStart);
			a.addObserver(this["_dragController_" + d.lt], "move",
					this._onDragLeftTop);
			a.addObserver(this["_dragController_" + d.lt], "end",
					this._onDragEnd);
			a.addObserver(this["_dragController_" + d.lb], "start",
					this._onDragLeftBottomStart);
			a.addObserver(this["_dragController_" + d.lb], "move",
					this._onDragLeftBottom);
			a.addObserver(this["_dragController_" + d.lb], "end",
					this._onDragEnd);
		},
		setWidth : function(f) {
			c.setStyle(this.effectEl, "width", f + "px");
			this._width = f;
		},
		setHeight : function(f) {
			c.setStyle(this.effectEl, "height", f + "px");
			this._height = f;
		},
		setLeft : function(f) {
			c.setStyle(this.effectEl, "left", f + "px");
			this._left = f;
		},
		setTop : function(f) {
			c.setStyle(this.effectEl, "top", f + "px");
			this._top = f;
		},
		getWidth : function() {
			return parseInt(c.getStyle(this.effectEl, "width"));
		},
		getHeight : function() {
			return parseInt(c.getStyle(this.effectEl, "height"));
		},
		getLeft : function() {
			return parseInt(c.getStyle(this.effectEl, "left"));
		},
		getTop : function() {
			return parseInt(c.getStyle(this.effectEl, "top"));
		},
		getId : function() {
			return e++;
		},
		lock : function() {
			for (var f in d) {
				this["_dragController_" + d[f]].lock();
			}
		},
		unlock : function() {
			for (var f in d) {
				this["_dragController_" + d[f]].unlock();
			}
		},
		show : function() {
			for (var f in d) {
				this["_dragController_" + d[f]].show();
			}
		},
		hide : function() {
			for (var f in d) {
				this["_dragController_" + d[f]].hide();
			}
		}
	});
});
Jet().$package(function(b) {
	var d = b.dom.id, c = b.dom, a = b.event;
	b.ui.Tab = function(f, g, e) {
		this.tabs = [];
		this.currentTab = null;
		this.config = {
			defaultIndex : 0,
			triggerEvent : "click",
			slideEnabled : false,
			slideInterval : 5 * 1000,
			slideDelay : 300,
			autoInit : true,
			onShow : function() {
			}
		};
		this.setConfig(e);
		if (f && g) {
			this.addRange(f, g);
			if (this.config.autoInit) {
				this.init();
			}
		}
	};
	b.ui.Tab.prototype = {
		setConfig : function(e) {
			if (!e) {
				return;
			}
			for (var f in e) {
				this.config[f] = e[f];
			}
		},
		add : function(e) {
			if (!e) {
				return;
			}
			if (e.trigger) {
				this.tabs.push(e);
				e.trigger.style.display = "block";
			}
		},
		addRange : function(g, h) {
			if (!g || !h) {
				return;
			}
			if (g.length && h.length && g.length == h.length) {
				for (var f = 0, e = g.length; f < e; f++) {
					this.add({
								trigger : g[f],
								sheet : h[f]
							});
				}
			}
		},
		select : function(e) {
			if (!e
					|| (!!this.currentTab && e.trigger == this.currentTab.trigger)) {
				return;
			}
			if (this.currentTab) {
				c.removeClass(this.currentTab.trigger, "current");
				if (this.currentTab.sheet) {
					this.currentTab.sheet.style.display = "none";
				}
			}
			this.currentTab = e;
			this.show();
		},
		remove : function(f) {
			if (!f) {
				return;
			}
			if (f.trigger) {
				c.removeClass(f.trigger, "current");
				f.trigger.style.display = "none";
			}
			if (f.sheet) {
				f.sheet.style.display = "none";
			}
			var e = this.indexOf(f);
			this.tabs.splice(e, e);
			if (f.trigger == this.currentTab.trigger) {
				if (e == 0) {
					this.select(this.tabs[(e + 1)]);
				} else {
					this.select(this.tabs[(e - 1)]);
				}
			}
		},
		show : function() {
			if (this.currentTab.trigger) {
				this.currentTab.trigger.style.display = "block";
			}
			c.addClass(this.currentTab.trigger, "current");
			if (this.currentTab.sheet) {
				this.currentTab.sheet.style.display = "block";
			}
			this.config.onShow.call(this);
			a.notifyObservers(this, "show", this.currentTab);
		},
		slide : function() {
			var h = this.config, k = this, i, f;
			b.array.forEach(this.tabs, function(n, l, m) {
						a.on(n.trigger, "mouseover", e);
						a.on(n.sheet, "mouseover", e);
						a.on(n.trigger, "mouseout", g);
						a.on(n.sheet, "mouseout", g);
					});
			j();
			function j() {
				var l = k.indexOf(k.currentTab);
				if (l == -1) {
					return;
				}
				i = window.setInterval(function() {
							var m = k.tabs[++l % k.tabs.length];
							if (m) {
								k.select(m);
							}
						}, h.slideInterval);
			}
			function e() {
				window.clearTimeout(f);
				window.clearInterval(i);
			}
			function g() {
				f = window.setTimeout(j, h.slideDelay);
			}
		},
		indexOf : function(g) {
			for (var f = 0, e = this.tabs.length; f < e; f++) {
				if (g.trigger == this.tabs[f].trigger) {
					return f;
				}
			}
			return -1;
		},
		init : function() {
			var e = this.config, f = this;
			b.array.forEach(this.tabs, function(i, g, h) {
						a.on(i.trigger, e.triggerEvent, function() {
									f.select.call(f, i);
								});
						if (i.sheet) {
							i.sheet.style.display = "none";
						}
					});
			this.select(this.tabs[e.defaultIndex]);
			if (e.slideEnabled) {
				this.slide();
			}
		}
	};
});
Jet().$package(function(b) {
	var d = b.dom.id, c = b.dom, a = b.event;
	b.ui.MaskLayer = new b.Class({
		init : function(g) {
			var f = this;
			g.zIndex = !b.isUndefined(g.zIndex) ? g.zIndex : 9000000;
			g.appendTo = g.appendTo || c.getDocument();
			this.container = c.node("div", {
						"class" : "maskLayer"
					});
			this.container.innerHTML = '					<div class="maskBackground"></div>					<div id="maskLayerBody"></div>				';
			this.setZIndex(g.zIndex);
			g.appendTo.appendChild(this.container);
			var e = {
				onMaskLayerClick : function() {
					a.notifyObservers(f, "click", f);
				}
			};
			a.on(this.container, "click", e.onMaskLayerClick);
			this.body = c.id("maskLayerBody");
		},
		append : function(e) {
			this.body.appendChild(e);
		},
		show : function() {
			c.show(this.container);
			a.notifyObservers(this, "show");
			this._isShow = true;
		},
		hide : function() {
			c.hide(this.container);
			a.notifyObservers(this, "hide");
			this._isShow = false;
		},
		isShow : function() {
			return this._isShow;
		},
		toggleShow : function() {
			if (this.isShow()) {
				this.hide();
			} else {
				this.show();
			}
		},
		getZIndex : function() {
			return this._zIndex;
		},
		setZIndex : function(e) {
			c.setStyle(this.container, "zIndex", e);
			this._zIndex = e;
		},
		setTopZIndex : function() {
			this.setZIndex(qqweb.layout.getTopZIndex());
		},
		fadeIn : function() {
			this.show();
		},
		fadeOut : function() {
			this.hide();
		},
		about : function() {
		}
	});
});
Jet().$package(function(b) {
	var c = b.dom, a = b.event;
	var d = function(f) {
		this.container = f.parentNode;
		this.iframe = f;
		this.holding = false;
		this.posx = 0;
		this.posy = 0;
		this.offsetX = 0;
		this.offsetY = 0;
		var e = this;
		this.observers = {
			onTouchStart : function(g) {
				var h = g.changedTouches[0];
				e.posx = h.pageX;
				e.posy = h.pageY;
				e.minX = c.getWidth(e.container) - c.getWidth(e.iframe);
				e.minY = c.getHeight(e.container) - c.getHeight(e.iframe);
				a.on(e.iframe, "touchmove", e.observers.onTouchMove);
				a.on(e.iframe, "touchend", e.observers.onTouchEnd);
			},
			onTouchMove : function(l) {
				if (l.changedTouches.length > 1) {
					return;
				}
				l.preventDefault();
				l.stopPropagation();
				var n = l.changedTouches[0];
				var g = n.pageX;
				var m = n.pageY;
				var i = e.posx - g;
				var h = e.posy - m;
				var k = e.offsetX - i;
				var j = e.offsetY - h;
				if (k > 0) {
					k = 0;
				} else {
					if (k < e.minX) {
						k = e.minX;
					}
				}
				if (j > 0) {
					j = 0;
				} else {
					if (j < e.minY) {
						j = e.minY;
					}
				}
				f.style.left = k + "px";
				f.style.top = j + "px";
				e.offsetX = k;
				e.offsetY = j;
				e.posx = g;
				e.posy = m;
			},
			onTouchEnd : function() {
				a.off(e.iframe, "touchmove", e.observers.onTouchMove);
				a.off(e.iframe, "touchend", e.observers.onTouchEnd);
			}
		};
		this.destroy = function() {
			a.off(this.iframe, "touchstart", this.observers.onTouchStart);
			a.off(this.iframe, "touchmove", this.observers.onTouchMove);
			a.off(this.iframe, "touchend", this.observers.onTouchEnd);
			this.iframe = null;
			this.container = null;
		};
		a.on(this.iframe, "touchstart", this.observers.onTouchStart);
	};
	b.ui.IframeScroller = d;
	b.ui.TouchScroller = new b.Class({
		container : null,
		_dx : 0,
		_dy : 0,
		_posy : 0,
		_posx : 0,
		_maxOffsetX : 0,
		_maxOffsetY : 0,
		init : function(h, g, f) {
			this.container = b.isString(h) ? c.id(h) : h;
			this.touchContainer = g || this.container;
			var e = this;
			this.observer = {
				onTouchStart : function(i) {
					if (i.changedTouches.length > 1) {
						return;
					}
					var j = i.changedTouches[0];
					e._dx = e.container.scrollLeft;
					e._dy = e.container.scrollTop;
					e._posx = j.pageX;
					e._posy = j.pageY;
					e.maxOffsetX = e.container.scrollWidth
							- e.container.clientWidth;
					e.maxOffsetY = e.container.scrollHeight
							- e.container.clientHeight;
					a.on(e.touchContainer, "touchmove", e.observer.onTouchMove);
					a.on(e.touchContainer, "touchend", e.observer.onTouchEnd);
				},
				onTouchMove : function(l) {
					l.stopPropagation();
					l.preventDefault();
					var m = l.changedTouches[0];
					var j = m.pageX;
					var i = m.pageY;
					var k = false;
					e._dx += e._posx - j;
					e._dy += e._posy - i;
					e._posx = j;
					e._posy = i;
					if (e._dx < 0) {
						e._dx = 0;
					}
					if (e._dy < 0) {
						e._dy = 0;
					}
					if (e._dx > e.maxOffsetX) {
						e._dx = e.maxOffsetX;
					}
					if (e._dy > e.maxOffsetY) {
						e._dy = e.maxOffsetY;
					}
					e.container.scrollLeft = e._dx;
					e.container.scrollTop = e._dy;
				},
				onTouchEnd : function(i) {
					a
							.off(e.touchContainer, "touchmove",
									e.observer.onTouchMove);
					a.off(e.touchContainer, "touchend", e.observer.onTouchEnd);
				}
			};
			a.on(this.touchContainer, "touchstart", this.observer.onTouchStart);
		},
		destroy : function() {
			a
					.off(this.touchContainer, "touchstart",
							this.observer.onTouchStart);
			this.container = null;
		}
	});
});
Jet().$package(function(b) {
	var c = b.dom, a = b.event;
	b.ui.Notifier = new b.Class({
		hasSupport : function() {
			if (window.webkitNotifications) {
				return true;
			} else {
				return false;
			}
		},
		requestPermission : function(d) {
			window.webkitNotifications.requestPermission(function() {
						if (d) {
							d(window.webkitNotifications.checkPermission() == 0);
						}
					});
		},
		notify : function(f, g, d) {
			if (window.webkitNotifications.checkPermission() == 0) {
				var e = window.webkitNotifications.createNotification(f, g, d);
				e.show();
				return e;
			}
			return false;
		}
	});
});
Jet().$package(function(b) {
	var c = b.dom, a = b.event;
	b.ui.Marquee = new b.Class({
				init : function(d) {
					var e = this;
					this.speed = d.speed || 40;
					this.stopTime = d.stopTime || 3000;
					this.lineHeight = d.lineHeight || 20;
					this.target = d.target;
					this.timer = null;
					this.lineTimer = null;
					this.intervaler = null;
					this.scrollHeight = this.lineHeight;
					this.isStop = false;
					this._onTimeRun = function() {
						e.scrollOneLine();
					};
				},
				scrollOneLine : function() {
					if (this.scrollHeight > 0) {
						this.scrollHeight--;
						var d = this.target.style.top.match(/-?\d+/);
						d = (!d) ? 0 : parseInt(d[0]);
						this.target.style.top = (--d) + "px";
						this.lineTimer = setTimeout(this._onTimeRun, this.speed);
					} else {
						if (!this.isStop) {
							this.update();
						}
					}
				},
				stop : function() {
					if (this.timer) {
						clearTimeout(this.timer);
					}
				},
				stopAll : function() {
					this.stop();
					if (this.lineTimer) {
						clearTimeout(this.lineTimer);
					}
				},
				reset : function() {
					this.target.style.top = "0px";
				},
				update : function() {
					if (this.isStop) {
						return;
					}
					if (this.timer) {
						clearTimeout(this.timer);
					}
					this.scrollHeight = this.lineHeight;
					var e = this.target.style.top.match(/\d+/);
					var d = c.getScrollHeight(this.target);
					if (!!e && !!d) {
						e = parseInt(e[0]);
						if (e >= d) {
							this.target.style.top = this.lineHeight + "px";
							this.scrollOneLine();
							return;
						}
					}
					this.timer = setTimeout(this._onTimeRun, this.stopTime);
				},
				walkOnLastLine : function() {
					this._onTimeRun();
				}
			});
});
Jet().$package(function(i) {
	var f = i.dom, d = i.event;
	var k = false, h = false, b = false, c = false;
	var a, j, g, e;
	i.ui.Sortables = new i.Class({
		init : function(n, m, l) {
			this.dropTargets = n || [];
			this.sortStr = m;
			this.option = l || {};
			this.limiteOption = this.option.limiteOption || {};
			this.dragController = {};
		},
		addDropTarget : function(l) {
			this.dropTargets.push(l);
		},
		addEffect : function(l) {
			this.effectEl = l;
		},
		removeDropTarget : function(l) {
			i.array.remove(this.dropTargets, l);
		},
		addDragClass : function(o) {
			var s = o.parentNode, G = o, u = this.effectEl || this.clone(G), r = this, F = f
					.getXY(s), D = f.getXY(G), C = o.getAttribute(this.sortStr)
					|| "", B = this.dropTargets, E = [], m, l;
			var t = f.getClientWidth(G);
			var H = f.getClientHeight(G);
			var z = {};
			z.top = parseInt(f.getStyle(G, "marginTop") || 0);
			z.buttom = parseInt(f.getStyle(G, "marginbottom") || 0);
			z.left = parseInt(f.getStyle(G, "marginLeft") || 0);
			z.right = parseInt(f.getStyle(G, "marginRight") || 0);
			t += (z.left + z.right);
			H += (z.top + z.buttom);
			var q = function() {
				B = this.dropTargets;
				w();
				I();
				s = G.parentNode;
				m = G.nextSibling;
				document.body.appendChild(u);
				d.notifyObservers(r, "beforeStart");
			};
			var v = function(J) {
				if (r.option.isDash) {
					G = r.cloneDashedEl(G);
				} else {
					if (!i.browser.ie) {
						f.setStyle(G, "opacity", 0.5);
					}
				}
				i.out("drag开始");
				d.notifyObservers(r, "start");
			};
			var A = function(L) {
				if (Math.abs(L.x - l[0]) + Math.abs(L.y - l[1]) < 1) {
					return;
				} else {
					if (L.x - l[0] > 0) {
						var O = "right";
					} else {
						var O = "left";
					}
					l = [L.x, L.y];
				}
				for (var K in E) {
					if ((L.x > E[K].x) && (L.x < E[K].x + E[K].w)
							&& (L.y > E[K].y) && (L.y < E[K].y + E[K].h)) {
						var J = B[K];
						var T = f.getClientWidth(J);
						var R = Math.floor(T / t);
						var Q = f.getXY(J);
						var P = L.x - Q[0];
						var N = L.y - Q[1];
						var S = Math.floor(N / H);
						if (O == "right") {
							var U = Math.ceil(P / t);
						} else {
							if (O == "left") {
								var U = Math.floor(P / t);
							}
						}
						var M = U + S * R;
						if (J.childNodes[M]) {
							J.insertBefore(G, J.childNodes[M]);
						} else {
							J.appendChild(G);
						}
						break;
					}
				}
				d.notifyObservers(r, "move", L);
			};
			var n = function(J) {
				J.el = u;
				d.notifyObservers(r, "overFlowBorder", J);
			};
			var p = function(M) {
				document.body.removeChild(u);
				if (r.option.isDash) {
					r.removeDashedEl();
					G = r.tempEl;
				} else {
					if (!i.browser.ie) {
						f.setStyle(G, "opacity", 1);
					}
				}
				var J = [];
				for (var L in B) {
					J[L] = [];
					var P = B[L].childNodes;
					for (var K = 0; K < P.length; K++) {
						var N = P[K].getAttribute(r.sortStr);
						if (N) {
							J[L].push(N);
						}
					}
				}
				i.out("drag结束");
				try {
					d.notifyObservers(r, "end", {
								queue : J,
								pos : M,
								apperceiveEl : G,
								nextEl : m,
								parentEl : s
							});
				} catch (O) {
					i.out("drop error");
				}
			};
			var w = function() {
				D = f.getXY(G);
				var J = D[0];
				var K = D[1];
				l = [J, K];
				f.setStyle(u, "left", J + "px");
				f.setStyle(u, "top", K + "px");
			};
			var I = function() {
				var O, M, N, L, J;
				E = [];
				for (var K in B) {
					O = B[K];
					M = {};
					N = f.getXY(B[K]);
					L = f.getClientWidth(B[K]);
					J = f.getClientHeight(B[K]);
					M.x = N[0];
					M.y = N[1];
					M.w = L;
					M.h = J;
					E[K] = M;
				}
			};
			this.dragController[C] = new i.ui.Drag(o, u, this.limiteOption);
			d.addObserver(this.dragController[C], "beforeStart", i
							.bind(q, this));
			d.addObserver(this.dragController[C], "start", i.bind(v, this));
			d.addObserver(this.dragController[C], "move", i.bind(A, this));
			d.addObserver(this.dragController[C], "overFlowBorder", i.bind(n,
							this));
			d.addObserver(this.dragController[C], "end", i.bind(p, this));
		},
		setLimite : function(m) {
			for (var l in this.dragController) {
				this.dragController[l].setLimite(m);
			}
		},
		cloneDashedEl : function(o) {
			var p = f.node("div");
			var n = this.option.className;
			if (n) {
				f.setClass(p, n);
			} else {
				f.setStyle(p, "border", "dashed 2px #fff");
				f.setClass(p, o.className);
				f.setStyle(p, "position", "relative");
				f.setStyle(p, "float", "left");
				var m = o.offsetWidth - 10 * parseInt(p.style.borderWidth)
						+ "px";
				var l = o.offsetHeight - 10 * parseInt(p.style.borderWidth)
						+ "px";
				f.setStyle(p, "width", m);
				f.setStyle(p, "height", l);
			}
			this.dashedEl = p;
			if (o.nextSibling) {
				o.parentNode.insertBefore(p, o.nextSibling);
			} else {
				o.parentNode.appendChild(p);
			}
			this.tempEl = o;
			o.parentNode.removeChild(o);
			return p;
		},
		removeDashedEl : function() {
			if (this.dashedEl.nextSibling) {
				this.dashedEl.parentNode.insertBefore(this.tempEl,
						this.dashedEl.nextSibling);
			} else {
				this.dashedEl.parentNode.appendChild(this.tempEl);
			}
			this.dashedEl.parentNode.removeChild(this.dashedEl);
		},
		clone : function(n) {
			var l;
			var o = false;
			var m = n.cloneNode(true);
			m.setAttribute("id", "");
			f.setStyle(m, "position", "absolute");
			f.setStyle(m, "zIndex", "9999999");
			f.setStyle(m, "background", "none");
			return m;
		},
		forEachNode : function(m, n) {
			var l = m.length;
			if (typeof n != "function") {
				throw new TypeError();
			}
			var p = arguments[2];
			for (var o = 0; o < l; o++) {
				if (o in m) {
					n.call(p, m[o], o, m);
				}
			}
		}
	});
});
Jet().$package(function(b) {
	var c = b.dom, a = b.event;
	b.ui.ScrollBar = new b.Class({
		init : function(f) {
			var e = this;
			this.obj = f;
			this.content = this.obj.getElementsByTagName("div")[0];
			this.bar = c.node("div", {
						"class" : "scrollBar"
					});
			if (b.browser.ie) {
				this.bar.innerHTML = '<div class="scrollBar_bg scrollBar_bg_t"></div><div class="scrollBar_bg scrollBar_bg_b"></div>';
			}
			c.setStyle(this.bar, "marginTop", 0);
			this.obj.appendChild(this.bar);
			this.setBarHeight();
			this.bar.y;
			this.srcElement;
			this.marginTop;
			this.D;
			this.wheelThread = 20;
			var d = {
				onMouseDown : function(g) {
					e.bar.y = g.clientY;
					e.bar.t = parseInt(e.bar.style.marginTop);
					a.on(document, "mousemove", d.onMouseMove);
					a.on(document, "mouseup", d.onMouseUp);
					g.preventDefault();
					g.stopPropagation();
				},
				onMouseMove : function(g) {
					e.scroll(g.clientY - e.bar.y);
					g.preventDefault();
					g.stopPropagation();
				},
				onMouseUp : function(g) {
					a.off(document, "mousemove", d.onMouseMove);
					a.off(document, "mouseup", d.onMouseUp);
				},
				onMouseWheel : function(h) {
					if (!c.isShow(e.bar)) {
						return;
					}
					e.D = event.wheelDelta;
					event.returnValue = false;
					var g = (e.D < 0) ? e.wheelThread : (0 - e.wheelThread);
					e.bar.y = h.clientY;
					e.bar.t = parseInt(e.bar.style.marginTop);
					e.scroll(g);
				},
				onDomMouseScroll : function(h) {
					if (!c.isShow(e.bar)) {
						return;
					}
					e.D = (h.detail > 0) ? -1 : 1;
					h.stopPropagation();
					h.preventDefault();
					e.bar.y = h.clientY;
					e.bar.t = parseInt(e.bar.style.marginTop);
					var g = (e.D < 0) ? e.wheelThread : (0 - e.wheelThread);
					e.scroll(g);
				}
			};
			a.on(this.bar, "mousedown", d.onMouseDown);
			if (b.browser.ie || b.browser.engine.webkit || b.browser.opera) {
				a.on(this.content, "mousewheel", d.onMouseWheel);
				a.on(this.bar, "mousewheel", d.onMouseWheel);
			} else {
				a.on(this.content, "DOMMouseScroll", d.onDomMouseScroll);
				a.on(this.bar, "DOMMouseScroll", d.onDomMouseScroll);
			}
		},
		setBarHeight : function() {
			var d = this;
			if ((d.obj.offsetHeight - d.content.scrollHeight) >= 0) {
				c.hide(d.bar);
				d.bar.t = 0;
			} else {
				d.bar.style.height = parseInt(d.obj.offsetHeight
						/ d.content.scrollHeight * d.obj.offsetHeight)
						+ "px";
				c.show(d.bar);
				d.bar.t = parseInt(d.bar.style.marginTop);
			}
			d.scroll(0);
		},
		scroll : function(e) {
			var d = this;
			d.marginTop = (d.bar.t || 0) + e;
			if (d.marginTop < 0) {
				d.marginTop = 0;
			}
			if (d.marginTop > d.obj.clientHeight - d.bar.offsetHeight) {
				d.marginTop = d.obj.clientHeight - d.bar.offsetHeight;
			}
			d.bar.style.marginTop = d.marginTop + "px";
			d.content.scrollTop = (d.content.scrollHeight - d.obj.offsetHeight)
					* parseInt(d.marginTop)
					/ (d.obj.clientHeight - d.bar.clientHeight);
		}
	});
});
Jet().$package(function(J) {
	var $ = J.dom.id, $D = J.dom, $E = J.event, $H = J.http;
	var _open = window.open;
	var open = function(sURL, sName, sFeatures, bReplace) {
		if (sName == undefined) {
			sName = "_blank";
		}
		if (sFeatures == undefined) {
			sFeatures = "";
		}
		if (bReplace == undefined) {
			bReplace = false;
		}
		var win = _open(sURL, sName, sFeatures, bReplace);
		if (!win) {
			J.out("你的机器上有软件拦截了弹出窗口");
			return false;
		}
		return true;
	};
	window.open = open;
	J.config = {
		debugLevel : 1
	};
	J.console = {
		print : function(msg, type) {
			if (J.console.log) {
				J.console.log((type === 4 ? (new Date() + ":") : "") + msg);
			}
		}
	};
	J.Report = {
		receive : J.emptyFunc,
		addRule : J.emptyFunc
	};
	J.extend(J.console, {
		_isCreated : false,
		_html : '<div id="ConsoleBoxHead" class="consoleBoxHead">						<button id="ConsoleCloseButton" class="consoleCloseButton">x</button>						<button id="ConsoleClearButton" class="consoleCloseButton">cls</button>						<h5 class="title">Console</h5>					</div>					<ul id="ConsoleOutput" class="consoleOutput"></ul>					<div class="consoleInputBox">						&gt;<input id="ConsoleInput" class="consoleInput" />					</div>',
		_opened : false,
		_log_record : [],
		_cmd_history : [],
		_cmd_last_index : 0,
		TYPE : {
			DEBUG : 0,
			ERROR : 1,
			WARNING : 2,
			INFO : 3,
			PROFILE : 4
		},
		_typeInfo : [["log_debug_type", "√"], ["log_error_type", "x"],
				["log_warning_type", "!"], ["log_info_type", "i"],
				["log_profile_type", "└"]],
		show : function() {
			if (!this._isCreated) {
				this._create();
			}
			this._opened = true;
			this._main.style.display = "block";
			window.setTimeout(J.bind(this.focusCommandLine, this), 0);
		},
		hide : function() {
			J.console._main.style.display = "none";
			J.console._opened = false;
		},
		enable : function() {
			J.option.console = true;
			this.show();
		},
		disable : function() {
			J.option.console = false;
			this.hide();
		},
		_init : function() {
			this.print = this.out;
			$E
					.on(document, "keydown", J.bind(this.handleDocumentKeydown,
									this));
			if (J.option.console) {
				this.show();
			}
		},
		_create : function() {
			$H.loadCss(J.path + "assets/jet.css");
			this._main = document.createElement("div");
			this._main.id = "JetConsole";
			this._main.style.display = "none";
			this._main.className = "consoleBox";
			this._main.innerHTML = this._html;
			window.document.body.appendChild(this._main);
			this._headEl = $("ConsoleBoxHead");
			this._inputEl = $("ConsoleInput");
			this._closeButtonEl = $("ConsoleCloseButton");
			this._clsButtonEl = $("ConsoleClearButton");
			this._outputEl = $("ConsoleOutput");
			if (J.ui.Drag) {
			}
			$E.on(this._inputEl, "keyup", J.bind(this._execScript, this));
			$E.on(this._clsButtonEl, "click", this.clear);
			$E.on(this._closeButtonEl, "click", this.hide);
			if (J.option.debug > J.DEBUG.NO_DEBUG) {
				this.setToDebug();
			} else {
				this.setToNoDebug();
			}
			this._isCreated = true;
			this.out("Welcome to JET(Javascript Extension Tools)...",
					this.TYPE.INFO);
		},
		handleDocumentKeydown : function(e) {
			switch (e.keyCode) {
				case 192 :
					if (e.ctrlKey) {
						this.toggleShow();
						e.preventDefault();
					}
					break;
				default :
					break;
			}
		},
		focusCommandLine : function() {
			this._inputEl.focus();
		},
		toggleShow : function() {
			if (this._opened) {
				this.hide();
			} else {
				this.show();
			}
		},
		outConsoleShow : function(msg, type) {
			this.outConsole(msg, type);
			if ((!this._opened) && J.option.console) {
				this.show();
			}
		},
		outConsole : function(msg, type) {
			type = type || 3;
			this.log(msg, type);
			if (type < J.option.debug) {
				var _item = document.createElement("li");
				this._outputEl.appendChild(_item);
				var _ti = J.console._typeInfo[type] || J.console._typeInfo[0];
				_item.className = _ti[0];
				_item.innerHTML = '<span class="log_icon">' + _ti[1]
						+ "</span>" + msg;
				this._outputEl.scrollTop = this._outputEl.scrollHeight;
			}
		},
		out : function() {
		},
		setToDebug : function() {
			this.out = this.outConsoleShow;
		},
		setToNoDebug : function() {
			this.out = this.outConsole;
		},
		log : function(msg, type) {
			this._log_record.push([msg, type]);
		},
		clear : function() {
			J.console._outputEl.innerHTML = "";
		},
		_execScript : function(e) {
			switch (e.keyCode) {
				case 13 :
					this._cmd_history.push(J.console._inputEl.value);
					this._cmd_last_index = this._cmd_history.length;
					break;
				case 38 :
					if (this._cmd_history.length == 0) {
						return;
					}
					var s = "";
					if (this._cmd_last_index > 0) {
						this._cmd_last_index--;
						s = this._cmd_history[this._cmd_last_index];
					} else {
						this._cmd_last_index = -1;
					}
					J.console._inputEl.value = s;
					return;
				case 40 :
					if (this._cmd_history.length == 0) {
						return;
					}
					var s = "";
					if (this._cmd_last_index < this._cmd_history.length - 1) {
						this._cmd_last_index++;
						s = this._cmd_history[this._cmd_last_index];
					} else {
						this._cmd_last_index = this._cmd_history.length;
					}
					J.console._inputEl.value = s;
					return;
				default :
					return;
			}
			switch (J.console._inputEl.value) {
				case "help" :
					var _rv = "&lt;&lt; Console Help &gt;&gt;<br/>								help  : 控制台帮助<br/>								clear : 清空控制台输出<br/>								hide  : 隐藏控制台，或者使用 Ctrl + `(~) 快捷键";
					J.console.out(_rv, 3);
					break;
				case "clear" :
					J.console.clear();
					break;
				case "hide" :
					J.console.hide();
					break;
				default :
					var _rv = '<span style="color:#ccff00">'
							+ J.console._inputEl.value + "</span><br/>";
					try {
						_rv += (eval(J.console._inputEl.value) || "")
								.toString().replace(/</g, "&lt;").replace(/>/g,
										"&gt;");
						J.console.out(_rv, 0);
					} catch (e) {
						_rv += e.description;
						J.console.out(_rv, 1);
					}
			}
			J.console._inputEl.value = "";
		}
	});
	var topNamespace = this, query = J.string.mapQuery(window.location.search);
	if (query.console) {
		if (query.console == "firebug") {
			if (topNamespace.console) {
				topNamespace.console.out = function(msg) {
					topNamespace.console.log(msg);
				};
				J.console = topNamespace.console;
			} else {
				$H.loadScript(J.path + "firebug/firebug-lite.js", {
					onSuccess : function() {
						firebug.env.height = 220;
						firebug.env.css = "../../source/firebug/firebug-lite.css";
						topNamespace.console.out = function(msg) {
							topNamespace.console.log(msg);
						};
						J.console = topNamespace.console;
						J.out("...控制台开启");
						J.out("...测试成功");
					}
				});
			}
		} else {
			if (query.console == "true") {
				$E.onDomReady(function() {
							J.console._init();
							J.console.show();
						});
				J.console = J.extend(J.console, {
							log : J.emptyFunc,
							info : J.emptyFunc,
							warn : J.emptyFunc,
							dir : J.emptyFunc
						});
			}
		}
	} else {
		J.console = {
			log : J.emptyFunc,
			info : J.emptyFunc,
			warn : J.emptyFunc,
			dir : J.emptyFunc,
			out : J.emptyFunc
		};
	}
	J.runtime = (function() {
		function isDebugMode() {
			return (J.config.debugLevel > 0);
		}
		function log(msg, type) {
			var info;
			if (isDebugMode()) {
				info = msg + "\n=STACK=\n" + stack();
			} else {
				if (type == "error") {
					info = msg;
				} else {
					if (type == "warn") {
					}
				}
			}
			J.Debug.errorLogs.push(info);
		}
		function warn(sf, args) {
			log(write.apply(null, arguments), "warn");
		}
		function error(sf, args) {
			log(write.apply(null, arguments), "error");
		}
		function stack(e, a) {
			function genTrace(ee, aa) {
				if (ee.stack) {
					return ee.stack;
				} else {
					if (ee.message.indexOf("\nBacktrace:\n") >= 0) {
						var cnt = 0;
						return ee.message.split("\nBacktrace:\n")[1].replace(
								/\s*\n\s*/g, function() {
									cnt++;
									return (cnt % 2 == 0) ? "\n" : " @ ";
								});
					} else {
						var entry = (aa.callee == stack)
								? aa.callee.caller
								: aa.callee;
						var eas = entry.arguments;
						var r = [];
						for (var i = 0, len = eas.length; i < len; i++) {
							r.push((typeof eas[i] == "undefined")
									? ("<u>")
									: ((eas[i] === null) ? ("<n>") : (eas[i])));
						}
						var fnp = /function\s+([^\s\(]+)\(/;
						var fname = fnp.test(entry.toString()) ? (fnp
								.exec(entry.toString())[1]) : ("<ANON>");
						return (fname + "(" + r.join() + ");").replace(/\n/g,
								"");
					}
				}
			}
			var res;
			if ((e instanceof Error) && (typeof arguments == "object")
					&& (!!arguments.callee)) {
				res = genTrace(e, a);
			} else {
				try {
					({}).sds();
				} catch (err) {
					res = genTrace(err, arguments);
				}
			}
			return res.replace(/\n/g, " <= ");
		}
		return {
			stack : stack,
			warn : warn,
			error : error,
			isDebugMode : isDebugMode
		};
	})();
});
Jet().$package(function(a) {
	var b = function() {
		var H = "undefined", t = "object", W = "Shockwave Flash", aa = "ShockwaveFlash.ShockwaveFlash", s = "application/x-shockwave-flash", V = "SWFObjectExprInst", B = "onreadystatechange", S = window, l = document, v = navigator, X = false, Y = [j], q = [], R = [], M = [], n, U, I, F, N = false, c = false, p, K, o = true, Q = function() {
			var ae = typeof l.getElementById != H
					&& typeof l.getElementsByTagName != H
					&& typeof l.createElement != H, al = v.userAgent
					.toLowerCase(), ac = v.platform.toLowerCase(), ai = ac
					? /win/.test(ac)
					: /win/.test(al), ag = ac ? /mac/.test(ac) : /mac/.test(al), aj = /webkit/
					.test(al) ? parseFloat(al.replace(
					/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, ab = !+"\v1", ak = [
					0, 0, 0], af = null;
			if (typeof v.plugins != H && typeof v.plugins[W] == t) {
				af = v.plugins[W].description;
				if (af
						&& !(typeof v.mimeTypes != H && v.mimeTypes[s] && !v.mimeTypes[s].enabledPlugin)) {
					X = true;
					ab = false;
					af = af.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
					ak[0] = parseInt(af.replace(/^(.*)\..*$/, "$1"), 10);
					ak[1] = parseInt(af.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
					ak[2] = /[a-zA-Z]/.test(af) ? parseInt(af.replace(
									/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0;
				}
			} else {
				if (typeof S.ActiveXObject != H) {
					try {
						var ah = new ActiveXObject(aa);
						if (ah) {
							af = ah.GetVariable("$version");
							if (af) {
								ab = true;
								af = af.split(" ")[1].split(",");
								ak = [parseInt(af[0], 10), parseInt(af[1], 10),
										parseInt(af[2], 10)];
							}
						}
					} catch (ad) {
					}
				}
			}
			return {
				w3 : ae,
				pv : ak,
				wk : aj,
				ie : ab,
				win : ai,
				mac : ag
			};
		}(), m = function() {
			if (!Q.w3) {
				return;
			}
			if ((typeof l.readyState != H && l.readyState == "complete")
					|| (typeof l.readyState == H && (l
							.getElementsByTagName("body")[0] || l.body))) {
				h();
			}
			if (!N) {
				if (typeof l.addEventListener != H) {
					l.addEventListener("DOMContentLoaded", h, false);
				}
				if (Q.ie && Q.win) {
					l.attachEvent(B, function() {
								if (l.readyState == "complete") {
									l.detachEvent(B, arguments.callee);
									h();
								}
							});
					if (S == top) {
						(function() {
							if (N) {
								return;
							}
							try {
								l.documentElement.doScroll("left");
							} catch (ab) {
								setTimeout(arguments.callee, 0);
								return;
							}
							h();
						})();
					}
				}
				if (Q.wk) {
					(function() {
						if (N) {
							return;
						}
						if (!/loaded|complete/.test(l.readyState)) {
							setTimeout(arguments.callee, 0);
							return;
						}
						h();
					})();
				}
				u(h);
			}
		}();
		function h() {
			if (N) {
				return;
			}
			try {
				var ad = l.getElementsByTagName("body")[0]
						.appendChild(G("span"));
				ad.parentNode.removeChild(ad);
			} catch (ae) {
				return;
			}
			N = true;
			var ab = Y.length;
			for (var ac = 0; ac < ab; ac++) {
				Y[ac]();
			}
		}
		function O(ab) {
			if (N) {
				ab();
			} else {
				Y[Y.length] = ab;
			}
		}
		function u(ac) {
			if (typeof S.addEventListener != H) {
				S.addEventListener("load", ac, false);
			} else {
				if (typeof l.addEventListener != H) {
					l.addEventListener("load", ac, false);
				} else {
					if (typeof S.attachEvent != H) {
						k(S, "onload", ac);
					} else {
						if (typeof S.onload == "function") {
							var ab = S.onload;
							S.onload = function() {
								ab();
								ac();
							};
						} else {
							S.onload = ac;
						}
					}
				}
			}
		}
		function j() {
			if (X) {
				Z();
			} else {
				L();
			}
		}
		function Z() {
			var ab = l.getElementsByTagName("body")[0];
			var ae = G(t);
			ae.setAttribute("type", s);
			var ad = ab.appendChild(ae);
			if (ad) {
				var ac = 0;
				(function() {
					if (typeof ad.GetVariable != H) {
						var af = ad.GetVariable("$version");
						if (af) {
							af = af.split(" ")[1].split(",");
							Q.pv = [parseInt(af[0], 10), parseInt(af[1], 10),
									parseInt(af[2], 10)];
						}
					} else {
						if (ac < 10) {
							ac++;
							setTimeout(arguments.callee, 10);
							return;
						}
					}
					ab.removeChild(ae);
					ad = null;
					L();
				})();
			} else {
				L();
			}
		}
		function L() {
			var ak = q.length;
			if (ak > 0) {
				for (var aj = 0; aj < ak; aj++) {
					var ac = q[aj].id;
					var af = q[aj].callbackFn;
					var ae = {
						success : false,
						id : ac
					};
					if (Q.pv[0] > 0) {
						var ai = e(ac);
						if (ai) {
							if (J(q[aj].swfVersion) && !(Q.wk && Q.wk < 312)) {
								A(ac, true);
								if (af) {
									ae.success = true;
									ae.ref = D(ac);
									af(ae);
								}
							} else {
								if (q[aj].expressInstall && E()) {
									var am = {};
									am.data = q[aj].expressInstall;
									am.width = ai.getAttribute("width") || "0";
									am.height = ai.getAttribute("height")
											|| "0";
									if (ai.getAttribute("class")) {
										am.styleclass = ai
												.getAttribute("class");
									}
									if (ai.getAttribute("align")) {
										am.align = ai.getAttribute("align");
									}
									var al = {};
									var ab = ai.getElementsByTagName("param");
									var ag = ab.length;
									for (var ah = 0; ah < ag; ah++) {
										if (ab[ah].getAttribute("name")
												.toLowerCase() != "movie") {
											al[ab[ah].getAttribute("name")] = ab[ah]
													.getAttribute("value");
										}
									}
									T(am, al, ac, af);
								} else {
									r(ai);
									if (af) {
										af(ae);
									}
								}
							}
						}
					} else {
						A(ac, true);
						if (af) {
							var ad = D(ac);
							if (ad && typeof ad.SetVariable != H) {
								ae.success = true;
								ae.ref = ad;
							}
							af(ae);
						}
					}
				}
			}
		}
		function D(ae) {
			var ab = null;
			var ac = e(ae);
			if (ac && ac.nodeName == "OBJECT") {
				if (typeof ac.SetVariable != H) {
					ab = ac;
				} else {
					var ad = ac.getElementsByTagName(t)[0];
					if (ad) {
						ab = ad;
					}
				}
			}
			return ab;
		}
		function E() {
			return !c && J("6.0.65") && (Q.win || Q.mac)
					&& !(Q.wk && Q.wk < 312);
		}
		function T(ae, af, ab, ad) {
			c = true;
			I = ad || null;
			F = {
				success : false,
				id : ab
			};
			var ai = e(ab);
			if (ai) {
				if (ai.nodeName == "OBJECT") {
					n = i(ai);
					U = null;
				} else {
					n = ai;
					U = ab;
				}
				ae.id = V;
				if (typeof ae.width == H
						|| (!/%$/.test(ae.width) && parseInt(ae.width, 10) < 310)) {
					ae.width = "310";
				}
				if (typeof ae.height == H
						|| (!/%$/.test(ae.height) && parseInt(ae.height, 10) < 137)) {
					ae.height = "137";
				}
				l.title = l.title.slice(0, 47) + " - Flash Player Installation";
				var ah = Q.ie && Q.win ? "ActiveX" : "PlugIn", ag = "MMredirectURL="
						+ S.location.toString().replace(/&/g, "%26")
						+ "&MMplayerType=" + ah + "&MMdoctitle=" + l.title;
				if (typeof af.flashvars != H) {
					af.flashvars += "&" + ag;
				} else {
					af.flashvars = ag;
				}
				if (Q.ie && Q.win && ai.readyState != 4) {
					var ac = G("div");
					ab += "SWFObjectNew";
					ac.setAttribute("id", ab);
					ai.parentNode.insertBefore(ac, ai);
					ai.style.display = "none";
					(function() {
						if (ai.readyState == 4) {
							ai.parentNode.removeChild(ai);
						} else {
							setTimeout(arguments.callee, 10);
						}
					})();
				}
				w(ae, af, ab);
			}
		}
		function r(ac) {
			if (Q.ie && Q.win && ac.readyState != 4) {
				var ab = G("div");
				ac.parentNode.insertBefore(ab, ac);
				ab.parentNode.replaceChild(i(ac), ab);
				ac.style.display = "none";
				(function() {
					if (ac.readyState == 4) {
						ac.parentNode.removeChild(ac);
					} else {
						setTimeout(arguments.callee, 10);
					}
				})();
			} else {
				ac.parentNode.replaceChild(i(ac), ac);
			}
		}
		function i(ag) {
			var af = G("div");
			if (Q.win && Q.ie) {
				af.innerHTML = ag.innerHTML;
			} else {
				var ad = ag.getElementsByTagName(t)[0];
				if (ad) {
					var ah = ad.childNodes;
					if (ah) {
						var ab = ah.length;
						for (var ae = 0; ae < ab; ae++) {
							if (!(ah[ae].nodeType == 1 && ah[ae].nodeName == "PARAM")
									&& !(ah[ae].nodeType == 8)) {
								af.appendChild(ah[ae].cloneNode(true));
							}
						}
					}
				}
			}
			return af;
		}
		function w(am, ak, ac) {
			var ab, ae = e(ac);
			if (Q.wk && Q.wk < 312) {
				return ab;
			}
			if (ae) {
				if (typeof am.id == H) {
					am.id = ac;
				}
				if (Q.ie && Q.win) {
					var al = "";
					for (var ai in am) {
						if (am[ai] != Object.prototype[ai]) {
							if (ai.toLowerCase() == "data") {
								ak.movie = am[ai];
							} else {
								if (ai.toLowerCase() == "styleclass") {
									al += ' class="' + am[ai] + '"';
								} else {
									if (ai.toLowerCase() != "classid") {
										al += " " + ai + '="' + am[ai] + '"';
									}
								}
							}
						}
					}
					var aj = "";
					for (var ah in ak) {
						if (ak[ah] != Object.prototype[ah]) {
							aj += '<param name="' + ah + '" value="' + ak[ah]
									+ '" />';
						}
					}
					ae.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'
							+ al + ">" + aj + "</object>";
					R[R.length] = am.id;
					ab = e(am.id);
				} else {
					var ad = G(t);
					ad.setAttribute("type", s);
					for (var ag in am) {
						if (am[ag] != Object.prototype[ag]) {
							if (ag.toLowerCase() == "styleclass") {
								ad.setAttribute("class", am[ag]);
							} else {
								if (ag.toLowerCase() != "classid") {
									ad.setAttribute(ag, am[ag]);
								}
							}
						}
					}
					for (var af in ak) {
						if (ak[af] != Object.prototype[af]
								&& af.toLowerCase() != "movie") {
							g(ad, af, ak[af]);
						}
					}
					ae.parentNode.replaceChild(ad, ae);
					ab = ad;
				}
			}
			return ab;
		}
		function g(ad, ab, ac) {
			var ae = G("param");
			ae.setAttribute("name", ab);
			ae.setAttribute("value", ac);
			ad.appendChild(ae);
		}
		function C(ac) {
			var ab = e(ac);
			if (ab && ab.nodeName == "OBJECT") {
				if (Q.ie && Q.win) {
					ab.style.display = "none";
					(function() {
						if (ab.readyState == 4) {
							d(ac);
						} else {
							setTimeout(arguments.callee, 10);
						}
					})();
				} else {
					ab.parentNode.removeChild(ab);
				}
			}
		}
		function d(ad) {
			var ac = e(ad);
			if (ac) {
				for (var ab in ac) {
					if (typeof ac[ab] == "function") {
						ac[ab] = null;
					}
				}
				ac.parentNode.removeChild(ac);
			}
		}
		function e(ad) {
			var ab = null;
			try {
				ab = l.getElementById(ad);
			} catch (ac) {
			}
			return ab;
		}
		function G(ab) {
			return l.createElement(ab);
		}
		function k(ad, ab, ac) {
			ad.attachEvent(ab, ac);
			M[M.length] = [ad, ab, ac];
		}
		function J(ad) {
			var ac = Q.pv, ab = ad.split(".");
			ab[0] = parseInt(ab[0], 10);
			ab[1] = parseInt(ab[1], 10) || 0;
			ab[2] = parseInt(ab[2], 10) || 0;
			return (ac[0] > ab[0] || (ac[0] == ab[0] && ac[1] > ab[1]) || (ac[0] == ab[0]
					&& ac[1] == ab[1] && ac[2] >= ab[2])) ? true : false;
		}
		function z(ag, ac, ah, af) {
			if (Q.ie && Q.mac) {
				return;
			}
			var ae = l.getElementsByTagName("head")[0];
			if (!ae) {
				return;
			}
			var ab = (ah && typeof ah == "string") ? ah : "screen";
			if (af) {
				p = null;
				K = null;
			}
			if (!p || K != ab) {
				var ad = G("style");
				ad.setAttribute("type", "text/css");
				ad.setAttribute("media", ab);
				p = ae.appendChild(ad);
				if (Q.ie && Q.win && typeof l.styleSheets != H
						&& l.styleSheets.length > 0) {
					p = l.styleSheets[l.styleSheets.length - 1];
				}
				K = ab;
			}
			if (Q.ie && Q.win) {
				if (p && typeof p.addRule == t) {
					p.addRule(ag, ac);
				}
			} else {
				if (p && typeof l.createTextNode != H) {
					p.appendChild(l.createTextNode(ag + " {" + ac + "}"));
				}
			}
		}
		function A(ad, ab) {
			if (!o) {
				return;
			}
			var ac = ab ? "visible" : "hidden";
			if (N && e(ad)) {
				e(ad).style.visibility = ac;
			} else {
				z("#" + ad, "visibility:" + ac);
			}
		}
		function P(ac) {
			var ad = /[\\\"<>\.;]/;
			var ab = ad.exec(ac) != null;
			return ab && typeof encodeURIComponent != H
					? encodeURIComponent(ac)
					: ac;
		}
		var f = function() {
			if (Q.ie && Q.win) {
				window.attachEvent("onunload", function() {
							var ag = M.length;
							for (var af = 0; af < ag; af++) {
								M[af][0].detachEvent(M[af][1], M[af][2]);
							}
							var ad = R.length;
							for (var ae = 0; ae < ad; ae++) {
								C(R[ae]);
							}
							for (var ac in Q) {
								Q[ac] = null;
							}
							Q = null;
							for (var ab in b) {
								b[ab] = null;
							}
							b = null;
						});
			}
		}();
		return {
			registerObject : function(af, ab, ae, ad) {
				if (Q.w3 && af && ab) {
					var ac = {};
					ac.id = af;
					ac.swfVersion = ab;
					ac.expressInstall = ae;
					ac.callbackFn = ad;
					q[q.length] = ac;
					A(af, false);
				} else {
					if (ad) {
						ad({
									success : false,
									id : af
								});
					}
				}
			},
			getObjectById : function(ab) {
				if (Q.w3) {
					return D(ab);
				}
			},
			embedSWF : function(af, al, ai, ak, ac, ae, ad, ah, aj, ag) {
				var ab = {
					success : false,
					id : al
				};
				if (Q.w3 && !(Q.wk && Q.wk < 312) && af && al && ai && ak && ac) {
					A(al, false);
					O(function() {
								ai += "";
								ak += "";
								var an = {};
								if (aj && typeof aj === t) {
									for (var ap in aj) {
										an[ap] = aj[ap];
									}
								}
								an.data = af;
								an.width = ai;
								an.height = ak;
								var aq = {};
								if (ah && typeof ah === t) {
									for (var ao in ah) {
										aq[ao] = ah[ao];
									}
								}
								if (ad && typeof ad === t) {
									for (var am in ad) {
										if (typeof aq.flashvars != H) {
											aq.flashvars += "&" + am + "="
													+ ad[am];
										} else {
											aq.flashvars = am + "=" + ad[am];
										}
									}
								}
								if (J(ac)) {
									var ar = w(an, aq, al);
									if (an.id == al) {
										A(al, true);
									}
									ab.success = true;
									ab.ref = ar;
								} else {
									if (ae && E()) {
										an.data = ae;
										T(an, aq, al, ag);
										return;
									} else {
										A(al, true);
									}
								}
								if (ag) {
									ag(ab);
								}
							});
				} else {
					if (ag) {
						ag(ab);
					}
				}
			},
			switchOffAutoHideShow : function() {
				o = false;
			},
			ua : Q,
			getFlashPlayerVersion : function() {
				return {
					major : Q.pv[0],
					minor : Q.pv[1],
					release : Q.pv[2]
				};
			},
			hasFlashPlayerVersion : J,
			createSWF : function(ad, ac, ab) {
				if (Q.w3) {
					return w(ad, ac, ab);
				} else {
					return undefined;
				}
			},
			showExpressInstall : function(ad, ae, ab, ac) {
				if (Q.w3 && E()) {
					T(ad, ae, ab, ac);
				}
			},
			removeSWF : function(ab) {
				if (Q.w3) {
					C(ab);
				}
			},
			createCSS : function(ae, ad, ac, ab) {
				if (Q.w3) {
					z(ae, ad, ac, ab);
				}
			},
			addDomLoadEvent : O,
			addLoadEvent : u,
			getQueryParamValue : function(ae) {
				var ad = l.location.search || l.location.hash;
				if (ad) {
					if (/\?/.test(ad)) {
						ad = ad.split("?")[1];
					}
					if (ae == null) {
						return P(ad);
					}
					var ac = ad.split("&");
					for (var ab = 0; ab < ac.length; ab++) {
						if (ac[ab].substring(0, ac[ab].indexOf("=")) == ae) {
							return P(ac[ab]
									.substring((ac[ab].indexOf("=") + 1)));
						}
					}
				}
				return "";
			},
			expressInstallCallback : function() {
				if (c) {
					var ab = e(V);
					if (ab && n) {
						ab.parentNode.replaceChild(n, ab);
						if (U) {
							A(U, true);
							if (Q.ie && Q.win) {
								n.style.display = "block";
							}
						}
						if (I) {
							I(F);
						}
					}
					c = false;
				}
			}
		};
	}();
	a.swfobject = b;
(function() {
		var i = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
		var j = (navigator.appVersion.toLowerCase().indexOf("win") != -1)
				? true
				: false;
		var g = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;
		function h() {
			var m;
			var n;
			var o;
			try {
				n = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
				m = n.GetVariable("$version");
			} catch (o) {
			}
			if (!m) {
				try {
					n = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
					m = "WIN 6,0,21,0";
					n.AllowScriptAccess = "always";
					m = n.GetVariable("$version");
				} catch (o) {
				}
			}
			if (!m) {
				try {
					n = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
					m = n.GetVariable("$version");
				} catch (o) {
				}
			}
			if (!m) {
				try {
					n = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
					m = "WIN 3,0,18,0";
				} catch (o) {
				}
			}
			if (!m) {
				try {
					n = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
					m = "WIN 2,0,0,11";
				} catch (o) {
					m = -1;
				}
			}
			return m;
		}
		function l() {
			var s = -1;
			if (navigator.plugins != null && navigator.plugins.length > 0) {
				if (navigator.plugins["Shockwave Flash 2.0"]
						|| navigator.plugins["Shockwave Flash"]) {
					var r = navigator.plugins["Shockwave Flash 2.0"]
							? " 2.0"
							: "";
					var m = navigator.plugins["Shockwave Flash" + r].description;
					var q = m.split(" ");
					var o = q[2].split(".");
					var t = o[0];
					var n = o[1];
					var p = q[3];
					if (p == "") {
						p = q[4];
					}
					if (p[0] == "d") {
						p = p.substring(1);
					} else {
						if (p[0] == "r") {
							p = p.substring(1);
							if (p.indexOf("d") > 0) {
								p = p.substring(0, p.indexOf("d"));
							}
						}
					}
					var s = t + "." + n + "." + p;
				}
			} else {
				if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) {
					s = 4;
				} else {
					if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) {
						s = 3;
					} else {
						if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) {
							s = 2;
						} else {
							if (i && j && !g) {
								s = h();
							}
						}
					}
				}
			}
			return s;
		}
		function d(r, p, o) {
			versionStr = l();
			if (versionStr == -1) {
				return false;
			} else {
				if (versionStr != 0) {
					if (i && j && !g) {
						tempArray = versionStr.split(" ");
						tempString = tempArray[1];
						versionArray = tempString.split(",");
					} else {
						versionArray = versionStr.split(".");
					}
					var q = versionArray[0];
					var m = versionArray[1];
					var n = versionArray[2];
					if (q > parseFloat(r)) {
						return true;
					} else {
						if (q == parseFloat(r)) {
							if (m > parseFloat(p)) {
								return true;
							} else {
								if (m == parseFloat(p)) {
									if (n >= parseFloat(o)) {
										return true;
									}
								}
							}
						}
					}
					return false;
				}
			}
		}
		function e(n, m) {
			if (n.indexOf("?") != -1) {
				return n.replace(/\?/, m + "?");
			} else {
				return n + m;
			}
		}
		function k(q, p, m) {
			var o = "";
			if (i && j && !g) {
				o += "<object ";
				for (var n in q) {
					o += n + '="' + q[n] + '" ';
				}
				for (var n in p) {
					o += '><param name="' + n + '" value="' + p[n] + '" /> ';
				}
				o += "></object>";
			} else {
				o += "<embed ";
				for (var n in m) {
					o += n + '="' + m[n] + '" ';
				}
				o += "> </embed>";
			}
			document.write(o);
		}
		function f() {
			var m = c(arguments, ".swf", "movie",
					"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",
					"application/x-shockwave-flash");
			k(m.objAttrs, m.params, m.embedAttrs);
		}
		function c(n, q, s, p, t) {
			var m = new Object();
			m.embedAttrs = new Object();
			m.params = new Object();
			m.objAttrs = new Object();
			for (var o = 0; o < n.length; o = o + 2) {
				var r = n[o].toLowerCase();
				switch (r) {
					case "classid" :
						break;
					case "pluginspage" :
						m.embedAttrs[n[o]] = n[o + 1];
						break;
					case "src" :
					case "movie" :
						n[o + 1] = e(n[o + 1], q);
						m.embedAttrs.src = n[o + 1];
						m.params[s] = n[o + 1];
						break;
					case "onafterupdate" :
					case "onbeforeupdate" :
					case "onblur" :
					case "oncellchange" :
					case "onclick" :
					case "ondblClick" :
					case "ondrag" :
					case "ondragend" :
					case "ondragenter" :
					case "ondragleave" :
					case "ondragover" :
					case "ondrop" :
					case "onfinish" :
					case "onfocus" :
					case "onhelp" :
					case "onmousedown" :
					case "onmouseup" :
					case "onmouseover" :
					case "onmousemove" :
					case "onmouseout" :
					case "onkeypress" :
					case "onkeydown" :
					case "onkeyup" :
					case "onload" :
					case "onlosecapture" :
					case "onpropertychange" :
					case "onreadystatechange" :
					case "onrowsdelete" :
					case "onrowenter" :
					case "onrowexit" :
					case "onrowsinserted" :
					case "onstart" :
					case "onscroll" :
					case "onbeforeeditfocus" :
					case "onactivate" :
					case "onbeforedeactivate" :
					case "ondeactivate" :
					case "type" :
					case "codebase" :
						m.objAttrs[n[o]] = n[o + 1];
						break;
					case "id" :
					case "width" :
					case "height" :
					case "align" :
					case "vspace" :
					case "hspace" :
					case "class" :
					case "title" :
					case "accesskey" :
					case "name" :
					case "tabindex" :
						m.embedAttrs[n[o]] = m.objAttrs[n[o]] = n[o + 1];
						break;
					default :
						m.embedAttrs[n[o]] = m.params[n[o]] = n[o + 1];
				}
			}
			m.objAttrs.classid = p;
			if (t) {
				m.embedAttrs.type = t;
			}
			return m;
		}
		a.GetSwfVer = l;
	})();
});
var swfsound;
Jet().$package(function(b) {
	var c = b.dom, a = b.event;
	swfsound = function() {
		return {
			pauseStatus : [],
			embedSWF : function(p) {
				if (p == undefined) {
					p = "./swf/swfsound.swf";
				}
				var h = false;
				var k = {
					id : "swfSound_Flash"
				};
				var j = {
					menu : "false",
					wmode : "transparent",
					swLiveConnect : "true",
					allowScriptAccess : "always"
				};
				var m = document, f;
				f = m.createElement("div");
				f.id = "swfSound_Flash_div";
				f.style.position = "absolute";
				f.style.left = 0;
				f.style.top = 0;
				m.getElementsByTagName("body")[0].appendChild(f);
				var g = "#swfSound_Flash { left:0; position:absolute; top: 0; }";
				var o = document.createElement("style");
				o.setAttribute("type", "text/css");
				if (o.styleSheet) {
					o.styleSheet.cssText = g;
				} else {
					var n = document.createTextNode(g);
					o.appendChild(n);
				}
				var i = document.getElementsByTagName("head")[0];
				i.appendChild(o);
				try {
					b.swfobject.embedSWF(p, "swfSound_Flash_div", "1", "1",
							"8.0.0", "./expressInstall.swf", h, j, k);
				} catch (l) {
				}
			},
			loadSound : function(e, h, g, d) {
				if (h == undefined) {
					h = false;
				}
				if (g == undefined) {
					g = null;
				}
				if (d == undefined) {
					d = null;
				}
				var f = document.getElementById("swfSound_Flash");
				return f.loadSound(e, h, g, d);
			},
			startSound : function(g, f, e, d) {
				if (f == undefined) {
					f = 0;
				}
				if (d == undefined) {
					d = null;
				}
				if (e == undefined) {
					e = 1;
				}
				var h = document.getElementById("swfSound_Flash");
				h.startSound(g, f, e, d);
				return true;
			},
			stopSound : function(d) {
				var e = document.getElementById("swfSound_Flash");
				e.stopSound(d);
				return true;
			},
			pauseSound : function(d) {
				var e = document.getElementById("swfSound_Flash");
				var f = swfsound.pauseStatus[d];
				if (f == true) {
					swfsound.startSound(d, swfsound.getPosition(d) / 1000);
					swfsound.pauseStatus[d] = false;
				} else {
					swfsound.stopSound(d);
					swfsound.pauseStatus[d] = true;
				}
				return swfsound.pauseStatus[d];
			},
			setVolume : function(d, e) {
				var f = document.getElementById("swfSound_Flash");
				f.setVolume(d, e);
				return true;
			},
			getVolume : function(d) {
				var e = document.getElementById("swfSound_Flash");
				return e.getVolume(d);
			},
			getDuration : function(d) {
				var e = document.getElementById("swfSound_Flash");
				return e.getDuration(d);
			},
			getPosition : function(d) {
				var e = document.getElementById("swfSound_Flash");
				return e.getPosition(d);
			},
			getID3 : function(d) {
				var e = document.getElementById("swfSound_Flash");
				return e.getID3(d);
			},
			setPan : function(e, d) {
				var f = document.getElementById("swfSound_Flash");
				f.setPan(e, d);
				return true;
			},
			getPan : function(d) {
				var e = document.getElementById("swfSound_Flash");
				return e.getPan(d);
			},
			getBytesLoaded : function(d) {
				var e = document.getElementById("swfSound_Flash");
				return e.getBytesLoaded(d);
			},
			getBytesTotal : function(d) {
				var e = document.getElementById("swfSound_Flash");
				return e.getBytesTotal(d);
			}
		};
	}();
	b.sound = swfsound;
});