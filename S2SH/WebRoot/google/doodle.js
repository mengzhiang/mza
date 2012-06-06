(function() {
	var c = !0, d = !1;
	try {
		window.google || (window.google = {});
		google.doodle || (google.doodle = {});
		var f = google.doodle, h, j, k, l, m, n, o = 0, p = 23, q, r, s, u, v, w, x, y = 142, z = 356, A = 311, B = 0, C = 0, D = 30, E = 15, F = d, G, H = d, I = d, J = {
			//定义几个图片位置
			back : {
				src : "/logos/2012/sundback12-hp-s.png",
				height : 31,
				width : 24,
				x : 0,
				y : 0
			},
			s : {
				src : "/logos/2012/sundback12-hp-l.jpg",
				height : 120,
				width : 186,
				x : 0,
				y : 0
			},
			F : {
				src : "/logos/2012/sundback12-hp-l.jpg",
				height : 120,
				width : 186,
				x : 186,
				y : 0
			},
			i : {
				src : "/logos/2012/sundback12-hp-s.png",
				height : 60,
				width : 28,
				x : 24,
				y : 0
			},
			top : {
				src : "/logos/2012/sundback12-hp-s.png",
				height : 23,
				width : 8,
				x : 52,
				y : 0
			},
			G : {
				src : "/logos/2012/sundback12-hp-s.png",
				height : 7,
				width : 15,
				x : 60,
				y : 0
			},
			B : {
				src : "/logos/2012/sundback12-hp-s.png",
				height : 7,
				width : 15,
				x : 75,
				y : 0
			}
			//调转
		}, K = function() {
			google.psy && google.nav && google.nav.go
					? google.nav
							.go("/search?q=%E5%90%89%E5%BE%B7%E6%98%82%C2%B7%E9%80%8A%E5%BE%B7%E5%B7%B4%E5%85%8B&ct=sundback12-hp&oi=ddle&hl=zh-CN")
					: window.location.href = "/search?q=%E5%90%89%E5%BE%B7%E6%98%82%C2%B7%E9%80%8A%E5%BE%B7%E5%B7%B4%E5%85%8B&ct=sundback12-hp&oi=ddle&hl=zh-CN"
		}, L = function(a, b, g, i, e) {
			a.beginPath();
			a.moveTo(b, g);
			a.lineTo(i, e);
			a.stroke()
		}, M = function(a, b, g) {
			var i = document.createElement("canvas"), e = i.getContext("2d"), t = j
					.createLinearGradient(0, 0, 0, g);
			t.addColorStop(0, "#f5f5f5");
			t.addColorStop(1, "#f1f1f1");
			e.fillStyle = t;
			e.fillRect(1, 1, b - 2, g - 2);
			e.lineWidth = 1;
			e.strokeStyle = "#d0d0d0";
			L(e, 1, 0, b - 1, 0);
			L(e, b, 1, b, g - 1);
			L(e, b - 1, g, 1, g);
			L(e, 0, g - 1, 0, 1);
			e.fillStyle = "#444";
			e.textAlign = "center";
			e.font = "bold 11px Arial,sans-serif";
			e.fillText(a, b / 2, g * 2 / 3);
			return i
		}, N = function(a, b) {
			//填充
			var g = document.createElement("canvas"), i = g.getContext("2d");
			i.fillStyle = "#fff";
			i.fillRect(0, 0, b, 29);
			i.lineWidth = 1;
			i.strokeStyle = "#c0c0c0";
			L(i, 0, 0, b, 0);
			i.strokeStyle = "#d9d9d9";
			L(i, 0, 29, b, 29);
			var e = a ? 0 : b;
			L(i, e, 0, e, 29);
			return g
		}, O = "move,-ie-grabbing,-moz-grabbing,-o-grabbing,-webkit-grabbing,grabbing"
				.split(","), aa = "move,-ie-grab,-moz-grab,-o-grab,-webkit-grab,grab"
				.split(","), P = function(a, b) {
			if (a)
				for (var g in b)
					a.style.cursor = b[g]
		}, ba = function(a) {
			if (!H && !Q()) {
				F = H = c;
				google.listen(window, "mouseup", R);
				google.listen(window, "mousemove", S);
				h.style.zIndex = "2000";
				P(h, O);
				k && P(k, O);
				l.q.blur();
				google.psy && K();
				T();
				S(a)
			}
		}, R = function() {
			if (!I && H) {
				I = c;
				F = d;
				h.style.cursor = "auto";
				if (k)
					k.style.cursor = "auto";
				ca()
			}
		}, S = function(a) {
			if (F) {
				a
						? a.stopPropagation && a.stopPropagation()
						: window.event.cancelBubble = c;
				a.preventDefault ? a.preventDefault() : a.returnValue = d;
				a = a || window.event;
				G = !a
						? [0, 0]
						: [
								(a.clientX || a.targetTouches
										&& a.targetTouches[0]
										&& a.targetTouches[0].clientX || 0)
										+ (document.body.scrollLeft
												|| document.documentElement.scrollLeft || 0),
								(a.clientY || a.targetTouches
										&& a.targetTouches[0]
										&& a.targetTouches[0].clientY || 0)
										+ (document.body.scrollTop
												|| document.documentElement.scrollTop || 0)];
				a = B;
				B = Math.max(0, G[1] - o - 30 - J.i.height);
				if (f.z > 0) {
					f.z--;
					var b = B - a;
					Math.abs(b) > 50 && (B = a + b * 0.25)
				}
				U()
			}
		}, T = function() {
			var a = document.getElementById("mgmhppd");
			o = a ? a.offsetHeight : 0;
			a = o + 30;
			h.style.top = a + "px";
			var b = document.getElementById("ftby");
			if (b && b.parentNode)
				p = b.parentNode.offsetHeight;
			h.height = x = document.body.clientHeight - (o + (H ? 0 : 30 + p));
			var b = 833, g = document.getElementById("gbqf");
			g && (b = Math.max(b, g.offsetWidth));
			h.width = v = Math.max(b, document.body.clientWidth);
			w = v / 2;
			G || (G = [0, 0]);
			G[0] = w;
			if (k) {
				b = k.style;
				b.top = h.style.top;
				b.left = w - 236 + "px";
				if (l)
					b.height = google.style.getPageOffsetTop(l) - a + "px"
			}
			da();
			U()
		}, V = function(a) {
			a.addColorStop(0, "rgba(255,255,255,0)");
			a.addColorStop(0.01, "#eee");
			a.addColorStop(0.55, "#fff");
			a.addColorStop(0.58, "#b1b1b1");
			a.addColorStop(0.68, "#dedede");
			a.addColorStop(0.98, "#dedede");
			a.addColorStop(0.99, "rgba(255,255,255,0)")
		}, da = function() {
			q = w - C + 1;
			r = w + C;
			s = q - 42;
			u = r + 42
		}, U = function() {
			if (j) {
				j.clearRect(0, 0, v, x);
				var a = s - B, b = u + B;
				j.fillStyle = "#fff";
				f.g || j.fillRect(0, 0, v, x);
				j.beginPath();
				j.moveTo(0, 0);
				j.lineTo(a, 0);
				j.arc(a, B, B + 21, -Math.PI / 2, 0, d);
				j.lineTo(s, x);
				j.lineTo(0, x);
				j.lineTo(0, 0);
				j.fill();
				j.beginPath();
				j.moveTo(v, 0);
				j.lineTo(b, 0);
				j.arc(b, B, B + 21, -Math.PI / 2, Math.PI, c);
				j.lineTo(u, x);
				j.lineTo(v, x);
				j.lineTo(v, 0);
				j.fill();
				W(J.s, -42, y, c);
				W(J.F, -42, y, d);
				if (H) {
					W(J.v, 0, A, c);
					W(J.w, 0, A, d)
				}
				if (H) {
					var g = !l || l.q.dir != "rtl";
					W(J.search, -57, z, g);
					W(J.C, -57, z, !g)
				}
				g = j.createRadialGradient(a, B, B, a, B, B + 42);
				V(g);
				j.fillStyle = g;
				j.fillRect(a, 0, B + 42, B);
				a = j.createRadialGradient(b, B, B, b, B, B + 42);
				V(a);
				j.fillStyle = a;
				j.fillRect(r, 0, B + 42, B);
				a = j.createLinearGradient(s, 0, q, 0);
				V(a);
				j.fillStyle = a;
				j.fillRect(s, B, 42, x - B);
				a = j.createLinearGradient(u, 0, r, 0);
				V(a);
				j.fillStyle = a;
				j.fillRect(r, B, 42, x - B);
				a = J.B.height + 5;
				for (b = 0; b < x; b = b + a) {
					W(J.G, 3, b + a / 2, c);
					W(J.B, 3, b, d)
				}
				a = A - 50;
				a = Math.min(1, (a - (B - 50)) / a);
				if (H && a > 0) {
					j.save();
					j.globalAlpha = a;
					W(J.v, 0, A, c);
					W(J.w, 0, A, d);
					j.restore()
				}
				X(J.back, r - J.back.width / 2, B);
				j.save();
				a = 0;
				G && (a = Math.atan((w - G[0]) / J.i.height));
				j.translate(r + a * 6, B + 12 + Math.abs(a) * 6);
				j.rotate(a);
				X(J.i, 0 - J.i.width / 2, 0);
				j.restore();
				X(J.top, r - J.top.width / 2, B + 5)
			}
		}, X = function(a, b, g) {
			b > h.width
					|| g > h.height
					|| j.drawImage(a.a, a.x, a.y, a.width, a.height, b, g,
							a.width, a.height)
		}, W = function(a, b, g, i) {
			var e = i ? q : r;
			if (g > B) {
				e = i ? e + b - a.width : e - b;
				X(a, e, g)
			} else {
				var t = 0;
				B != 0 && (t = (B - g) / B);
				b = B + 42 + b;
				if (i) {
					b = b - a.width;
					e = e - 42 - B + Math.cos(t) * b
				} else
					e = e + 42 + B - Math.cos(t) * b;
				j.save();
				j.translate(e, B - Math.sin(t) * b);
				j.rotate(Math.PI * 2 + (i ? -t : t));
				X(a, 0, 0);
				j.restore()
			}
		}, ea = function() {
			google.psy || Y()
		}, Z = function(a) {
			var b = document.getElementById("hplogo-i");
			if (b)
				b.style.display = a ? "" : "none"
		}, Y = function(a) {
			window.clearTimeout(f.A);
			if (n && m)
				n.style.position = m.style.position = "";
			if (h && (!a || !google.psy && google.browser.product.FIREFOX))
				h.style.display = "none";
			if (k)
				k.style.display = "none";
			Z(c);
			google.unlisten(window, "resize", T);
			google.unlisten(window, "mouseup", R);
			google.unlisten(window, "mousemove", S)
		}, fa = function() {
			if (google.msg) {
				f.o && google.msg.unlisten(40, f.o);
				f.o = function() {
					H || Y();
					f.g = c;
					google.msg.unlisten(40, f.o);
					f.p ? Y() : U();
					return c
				};
				google.msg.listen(40, f.o);
				f.k && google.msg.unlisten(64, f.k);
				f.k = function() {
					T();
					google.msg.unlisten(64, f.k);
					return c
				};
				google.msg.listen(64, f.k);
				f.n && google.msg.unlisten(67, f.n);
				f.n = function() {
					H || Y();
					google.msg.unlisten(67, f.n);
					return c
				};
				google.msg.listen(67, f.n)
			}
		}, Q = function() {
			var a = window.location.href;
			return a.indexOf("#") > -1 && /[^a-z]q=/.test(a) ? c : d
		}, $ = function() {
			if (!f.D && google.dstr && google.rein) {
				f.D = c;
				google.dstr.push(ea);
				google.rein.push($)
			}
			f.cpDestroy = Y;
			f.cpInit = $;
			a : {
				for (var a = document.forms, b = ["f", "gs", "tsf", "gbqf"], g = 0, i; i = b[g++];)
					if (i = a[i]) {
						l = i;
						break a
					}
				l = null
			}
			m = l.btnK;
			n = l.btnI;
			if (!(a = !l))
				if (!(a = !l.q))
					if (!(a = l.q.value.length > 0))
						if (!(a = Q())) {
							h = document.getElementById("hplogo-z");
							if (!h) {
								h = document.createElement("canvas");
								document.body.appendChild(h)
							}
							if (h.getContext) {
								j = h.getContext("2d");
								Z(d);
								h.id = "hplogo-z";
								a = h.style;
								a.left = "0";
								a.position = "absolute";
								a.display = "";
								a.visibility = "";
								a.zIndex = "-1";
								if (k = document.getElementById("hplogo-c")) {
									k.onmouseover = U;
									k.onmousedown = ba;
									k.ontouchstart = ba;
									k.style.display = "";
									P(k, aa)
								}
								a = c
							} else
								a = d;
							a = !a
						}
			if (a)
				Z(c);
			else {
				window.clearTimeout(f.A);
				C = B = 0;
				E = 15;
				D = 30;
				I = H = d;
				f.g = d;
				f.p = d;
				f.z = 5;
				f.g = d;
				fa();
				for (var e in J) {
					a = J[e];
					if (a.src) {
						a.a = new Image;
						a.a.onload = U;
						a.a.src = a.src
					}
				}
				if (l && n && m) {
					J.search = {
						a : M(m.innerText || m.textContent || m.value,
								m.offsetWidth, m.offsetHeight),
						height : m.offsetHeight,
						width : m.offsetWidth,
						x : 0,
						y : 0
					};
					J.C = {
						a : M(n.innerText || n.textContent || n.value,
								n.offsetWidth, n.offsetHeight),
						height : n.offsetHeight,
						width : n.offsetWidth,
						x : 0,
						y : 0
					};
					e = Math.floor(google.style.getWidth(l.q) / 2);
					J.v = {
						a : N(c, e),
						height : 29,
						width : e,
						x : 0,
						y : 0
					};
					J.w = {
						a : N(d, e),
						height : 29,
						width : e,
						x : 0,
						y : 0
					}
				}
				google.listen(window, "resize", T);
				T();
				y = Math.max(0, google.style.getPageOffsetTop(l) - o - 15
								- J.s.height - 30);
				z = google.style.getPageOffsetTop(m) - o - 30;
				A = google.style.getPageOffsetTop(l) - o - 30;
				if (l && n && m) {
					b = google.style.getWidth(n) - google.style.getWidth(m);
					a = e = 42;
					b > 0 ? e = e + b : a = a - b;
					b = l.q.dir != "rtl";
					n.style.position = m.style.position = "relative";
					n.style[b ? "left" : "right"] = e + "px";
					m.style[b ? "right" : "left"] = a + "px"
				}
				U()
			}
		}, ca = function() {
			B = B + D;
			D = D + 2;
			G[0] = G[0] + (w - G[0]) * 0.3;
			if (B > x) {
				C = C + E;
				E = E + 5;
				da()
			}
			U();
			if (C < w)
				f.A = window.setTimeout(ca, 30);
			else {
				G[0] = w;
				f.p = c;
				if (google.psy && f.g)
					Y();
				else {
					Y(c);
					K()
				}
			}
		};
		google.x ? google.x({
					id : "DOODLE"
				}, $) : $()
	} catch (ga) {
		google.ml(ga, d, {
					cause : "DOODLE"
				})
	};
})();