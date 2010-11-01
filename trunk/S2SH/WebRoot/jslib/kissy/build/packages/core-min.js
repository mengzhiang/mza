/*
Copyright 2010, KISSY UI Library v1.1.5
MIT Licensed
build time: Sep 19 17:41
*/
KISSY.add("ua",function(a){var o=navigator.userAgent,q="",k="",f,l={},g=function(c){var r=0;return parseFloat(c.replace(/\./g,function(){return r++===0?".":""}))};if((f=o.match(/AppleWebKit\/([\d.]*)/))&&f[1]){l[q="webkit"]=g(f[1]);if((f=o.match(/Chrome\/([\d.]*)/))&&f[1])l[k="chrome"]=g(f[1]);else if((f=o.match(/\/([\d.]*) Safari/))&&f[1])l[k="safari"]=g(f[1]);if(/ Mobile\//.test(o))l.mobile="apple";else if(f=o.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/))l.mobile=f[0].toLowerCase()}else if((f=
o.match(/Presto\/([\d.]*)/))&&f[1]){l[q="presto"]=g(f[1]);if((f=o.match(/Opera\/([\d.]*)/))&&f[1]){l[k="opera"]=g(f[1]);if((f=o.match(/Opera\/.* Version\/([\d.]*)/))&&f[1])l[k]=g(f[1]);if((f=o.match(/Opera Mini[^;]*/))&&f)l.mobile=f[0].toLowerCase();else if((f=o.match(/Opera Mobi[^;]*/))&&f)l.mobile=f[0]}}else if((f=o.match(/MSIE\s([^;]*)/))&&f[1]){l[q="trident"]=0.1;l[k="ie"]=g(f[1]);if((f=o.match(/Trident\/([\d.]*)/))&&f[1])l[q]=g(f[1])}else if(f=o.match(/Gecko/)){l[q="gecko"]=0.1;if((f=o.match(/rv:([\d.]*)/))&&
f[1])l[q]=g(f[1]);if((f=o.match(/Firefox\/([\d.]*)/))&&f[1])l[k="firefox"]=g(f[1])}l.core=q;l.shell=k;l._numberify=g;a.UA=l});
KISSY.add("ua-extra",function(a){var o=a.UA,q=navigator.userAgent,k,f,l={},g=o._numberify;if(q.match(/360SE/))l[f="se360"]=3;else if(q.match(/Maxthon/)&&(k=window.external)){f="maxthon";try{l[f]=g(k.max_version)}catch(c){l[f]=0.1}}else if(k=q.match(/TencentTraveler\s([\d.]*)/))l[f="tt"]=k[1]?g(k[1]):0.1;else if(q.match(/TheWorld/))l[f="theworld"]=3;else if(k=q.match(/SE\s([\d.]*)/))l[f="sougou"]=k[1]?g(k[1]):0.1;f&&(l.shell=f);a.mix(o,l)});
KISSY.add("dom",function(a,o){function q(k,f){return k&&k.nodeType===f}a.DOM={_isElementNode:function(k){return q(k,1)},_isKSNode:function(k){return a.Node&&q(k,a.Node.TYPE)},_getWin:function(k){return k&&"scrollTo"in k&&k.document?k:q(k,9)?k.defaultView||k.parentWindow:k===o?window:false},_nodeTypeIs:q}});
KISSY.add("selector",function(a,o){function q(b,d){var e,h,m=[],v;d=k(d);if(a.isString(b)){b=a.trim(b);if(i.test(b)){if(h=f(b.slice(1),d))m=[h]}else if(e=j.exec(b)){h=e[1];v=e[2];e=e[3];if(d=h?f(h,d):d)if(e)if(!h||b.indexOf(n)!==-1)m=g(e,v,d);else{if((h=f(h,d))&&w.hasClass(h,e))m=[h]}else if(v)m=l(v,d)}else if(a.ExternalSelector)return a.ExternalSelector(b,d);else c(b)}else if(b&&(b[t]||b[p]))m=b[t]?[b[t]()]:b[p]();else if(b&&(a.isArray(b)||b&&!b.nodeType&&b.item&&b!=window))m=b;else if(b)m=[b];if(m&&
!m.nodeType&&m.item&&m!=window)m=a.makeArray(m);m.each=function(z,s){return a.each(m,z,s)};return m}function k(b){if(b===o)b=r;else if(a.isString(b)&&i.test(b))b=f(b.slice(1),r);else if(b&&b.nodeType!==1&&b.nodeType!==9)b=null;return b}function f(b,d){if(d.nodeType!==9)d=d.ownerDocument;return d.getElementById(b)}function l(b,d){return d.getElementsByTagName(b)}function g(b,d,e){e=b=e.getElementsByClassName(b);var h=0,m=0,v=b.length,z;if(d&&d!==u){e=[];for(d=d.toUpperCase();h<v;++h){z=b[h];if(z.tagName===
d)e[m++]=z}}return e}function c(b){a.error("Unsupported selector: "+b)}var r=document,w=a.DOM,n=" ",u="*",t="getDOMNode",p=t+"s",i=/^#[\w-]+$/,j=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/;(function(){var b=r.createElement("div");b.appendChild(r.createComment(""));if(b.getElementsByTagName(u).length>0)l=function(d,e){var h=e.getElementsByTagName(d);if(d===u){for(var m=[],v=0,z=0,s;s=h[v++];)if(s.nodeType===1)m[z++]=s;h=m}return h}})();r.getElementsByClassName||(g=r.querySelectorAll?function(b,d,
e){return e.querySelectorAll((d?d:"")+"."+b)}:function(b,d,e){d=e.getElementsByTagName(d||u);e=[];var h=0,m=0,v=d.length,z,s;for(b=n+b+n;h<v;++h){z=d[h];if((s=z.className)&&(n+s+n).indexOf(b)>-1)e[m++]=z}return e});a.query=q;a.get=function(b,d){return q(b,d)[0]||null};a.mix(w,{query:q,get:a.get,filter:function(b,d){var e=q(b),h,m,v,z=[];if(a.isString(d)&&(h=j.exec(d))&&!h[1]){m=h[2];v=h[3];d=function(s){return!(m&&s.tagName!==m.toUpperCase()||v&&!w.hasClass(s,v))}}if(a.isFunction(d))z=a.filter(e,
d);else if(d&&a.ExternalSelector)z=a.ExternalSelector._filter(b,d);else c(d);return z},test:function(b,d){var e=q(b);return w.filter(e,d).length===e.length}})});
KISSY.add("dom-data",function(a,o){var q=window,k=a.DOM,f="_ks_data_"+a.now(),l={},g={},c={EMBED:1,OBJECT:1,APPLET:1};a.mix(k,{data:function(r,w,n){if(a.isPlainObject(w))for(var u in w)k.data(r,u,w[u]);else if(n===o){r=a.get(r);var t;if(!(!r||c[r.nodeName])){if(r==q)r=g;t=(u=r&&r.nodeType)?l:r;r=t[u?r[f]:f];if(a.isString(w)&&r)return r[w];return r}}else a.query(r).each(function(p){if(!(!p||c[p.nodeName])){if(p==q)p=g;var i=l,j;if(p&&p.nodeType){if(!(j=p[f]))j=p[f]=a.guid()}else{j=f;i=p}if(w&&n!==
o){i[j]||(i[j]={});i[j][w]=n}}})},removeData:function(r,w){a.query(r).each(function(n){if(n){if(n==q)n=g;var u,t=l,p,i=n&&n.nodeType;if(i)u=n[f];else{t=n;u=f}if(u){p=t[u];if(w){if(p){delete p[w];a.isEmptyObject(p)&&k.removeData(n)}}else{if(i)n.removeAttribute&&n.removeAttribute(f);else try{delete n[f]}catch(j){}i&&delete t[u]}}}})}})});
KISSY.add("dom-class",function(a,o){function q(g,c,r,w){if(!(c=a.trim(c)))return w?false:o;g=a.query(g);var n=0,u=g.length;c=c.split(f);for(var t;n<u;n++){t=g[n];if(k._isElementNode(t)){t=r(t,c,c.length);if(t!==o)return t}}if(w)return false}var k=a.DOM,f=/[\.\s]\s*\.?/,l=/[\n\t]/g;a.mix(k,{hasClass:function(g,c){return q(g,c,function(r,w,n){if(r=r.className){r=" "+r+" ";for(var u=0,t=true;u<n;u++)if(r.indexOf(" "+w[u]+" ")<0){t=false;break}if(t)return true}},true)},addClass:function(g,c){q(g,c,function(r,
w,n){var u=r.className;if(u){var t=" "+u+" ";u=u;for(var p=0;p<n;p++)if(t.indexOf(" "+w[p]+" ")<0)u+=" "+w[p];r.className=a.trim(u)}else r.className=c})},removeClass:function(g,c){q(g,c,function(r,w,n){var u=r.className;if(u)if(n){u=(" "+u+" ").replace(l," ");for(var t=0,p;t<n;t++)for(p=" "+w[t]+" ";u.indexOf(p)>=0;)u=u.replace(p," ");r.className=a.trim(u)}else r.className=""})},replaceClass:function(g,c,r){k.removeClass(g,c);k.addClass(g,r)},toggleClass:function(g,c,r){var w=a.isBoolean(r),n;q(g,
c,function(u,t,p){for(var i=0,j;i<p;i++){j=t[i];n=w?!r:k.hasClass(u,j);k[n?"removeClass":"addClass"](u,j)}})}})});
KISSY.add("dom-attr",function(a,o){var q=a.UA,k=q.ie,f=k&&k<8,l=document.documentElement.textContent!==o?"textContent":"innerText",g=a.DOM,c=g._isElementNode,r=/href|src|style/,w=/href|src|colspan|rowspan/,n=/\r/g,u=/radio|checkbox/,t={readonly:"readOnly"},p={val:1,css:1,html:1,text:1,data:1,width:1,height:1,offset:1};f&&a.mix(t,{"for":"htmlFor","class":"className"});a.mix(g,{attr:function(i,j,b,d){if(a.isPlainObject(j)){d=b;for(var e in j)g.attr(i,e,j[e],d)}else if(j=a.trim(j)){j=j.toLowerCase();
if(d&&p[j])return g[j](i,b);j=t[j]||j;if(b===o){i=a.get(i);if(!c(i))return o;var h;r.test(j)||(h=i[j]);if(h===o)h=i.getAttribute(j);if(f)if(w.test(j))h=i.getAttribute(j,2);else if(j==="style")h=i.style.cssText;return h===null?o:h}a.each(a.query(i),function(m){if(c(m))if(j==="style")m.style.cssText=b;else{if(j==="checked")m[j]=!!b;m.setAttribute(j,""+b)}})}},removeAttr:function(i,j){a.each(a.query(i),function(b){if(c(b)){g.attr(b,j,"");b.removeAttribute(j)}})},val:function(i,j){if(j===o){var b=a.get(i);
if(!c(b))return o;if(b&&b.nodeName.toUpperCase()==="option".toUpperCase())return(b.attributes.value||{}).specified?b.value:b.text;if(b&&b.nodeName.toUpperCase()==="select".toUpperCase()){var d=b.selectedIndex,e=b.options;if(d<0)return null;else if(b.type==="select-one")return g.val(e[d]);b=[];for(var h=0,m=e.length;h<m;++h)e[h].selected&&b.push(g.val(e[h]));return b}if(q.webkit&&u.test(b.type))return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(n,"")}a.each(a.query(i),function(v){if(v&&
v.nodeName.toUpperCase()==="select".toUpperCase()){if(a.isNumber(j))j+="";var z=a.makeArray(j),s=v.options,x;h=0;for(m=s.length;h<m;++h){x=s[h];x.selected=a.inArray(g.val(x),z)}if(!z.length)v.selectedIndex=-1}else if(c(v))v.value=j})},text:function(i,j){if(j===o){var b=a.get(i);if(c(b))return b[l]||"";else if(g._nodeTypeIs(b,3))return b.nodeValue}else a.each(a.query(i),function(d){if(c(d))d[l]=j;else if(g._nodeTypeIs(d,3))d.nodeValue=j})}})});
KISSY.add("dom-style",function(a,o){function q(b,d){var e=a.get(b),h=d===r?e.offsetWidth:e.offsetHeight;a.each(d===r?["Left","Right"]:["Top","Bottom"],function(m){h-=parseFloat(f._getComputedStyle(e,"padding"+m))||0;h-=parseFloat(f._getComputedStyle(e,"border"+m+"Width"))||0});return h}function k(b,d,e){var h=e;if(e===w&&u.test(d)){h=0;if(f.css(b,"position")==="absolute"){e=b[d==="left"?"offsetLeft":"offsetTop"];if(l.ie===8||l.opera)e-=n(f.css(b.offsetParent,"border-"+d+"-width"))||0;h=e-(n(f.css(b,
"margin-"+d))||0)}}return h}var f=a.DOM,l=a.UA,g=document,c=g.documentElement,r="width",w="auto",n=parseInt,u=/^left|top$/,t=/width|height|top|left|right|bottom|margin|padding/i,p=/-([a-z])/ig,i=function(b,d){return d.toUpperCase()},j={};a.mix(f,{_CUSTOM_STYLES:j,_getComputedStyle:function(b,d){var e="",h=b.ownerDocument;if(b.style)e=h.defaultView.getComputedStyle(b,null)[d];return e},css:function(b,d,e){if(a.isPlainObject(d))for(var h in d)f.css(b,h,d[h]);else{if(d.indexOf("-")>0)d=d.replace(p,i);
d=j[d]||d;if(e===o){b=a.get(b);h="";if(b&&b.style){h=d.get?d.get(b):b.style[d];if(h===""&&!d.get)h=k(b,d,f._getComputedStyle(b,d))}return h===o?"":h}else{if(e===null||e==="")e="";else if(!isNaN(new Number(e))&&t.test(d))e+="px";(d===r||d==="height")&&parseFloat(e)<0||a.each(a.query(b),function(m){if(m&&m.style){d.set?d.set(m,e):m.style[d]=e;if(e==="")m.style.cssText||m.removeAttribute("style")}})}}},width:function(b,d){if(d===o)return q(b,r);else f.css(b,r,d)},height:function(b,d){if(d===o)return q(b,
"height");else f.css(b,"height",d)},show:function(b){a.query(b).each(function(d){if(d)d.style.display=f.data(d,"display")||""})},hide:function(b){a.query(b).each(function(d){if(d){var e=d.style,h=e.display;if(h!=="none"){h&&f.data(d,"display",h);e.display="none"}}})},toggle:function(b){a.query(b).each(function(d){if(d)d.style.display==="none"?f.show(d):f.hide(d)})},addStyleSheet:function(b,d){var e;if(d)e=a.get("#"+d);if(!e){e=f.create("<style>",{id:d});a.get("head").appendChild(e);if(e.styleSheet)e.styleSheet.cssText=
b;else e.appendChild(g.createTextNode(b))}}});if(c.style.cssFloat!==o)j["float"]="cssFloat";else if(c.style.styleFloat!==o)j["float"]="styleFloat"});
KISSY.add("dom-style-ie",function(a,o){if(a.UA.ie){var q=a.DOM,k=document,f=k.documentElement,l=q._CUSTOM_STYLES,g=/^-?\d+(?:px)?$/i,c=/^-?\d/,r=/^width|height$/;try{if(f.style.opacity===o&&f.filters)l.opacity={get:function(n){var u=100;try{u=n.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(t){try{u=n.filters("alpha").opacity}catch(p){}}return u/100+""},set:function(n,u){var t=n.style,p=(n.currentStyle||0).filter||"";t.zoom=1;if(p)if(p=p.replace(/alpha\(opacity=.+\)/ig,""))p+=", ";t.filter=
p+"alpha(opacity="+u*100+")"}}}catch(w){}if(!(k.defaultView||{}).getComputedStyle&&f.currentStyle)q._getComputedStyle=function(n,u){var t=n.style,p=n.currentStyle[u];if(r.test(u))p=q[u](n)+"px";else if(!g.test(p)&&c.test(p)){var i=t.left,j=n.runtimeStyle.left;n.runtimeStyle.left=n.currentStyle.left;t.left=u==="fontSize"?"1em":p||0;p=t.pixelLeft+"px";t.left=i;n.runtimeStyle.left=j}return p}}});
KISSY.add("dom-offset",function(a,o){function q(h){var m=0,v=0,z=w(h[p]);if(h[e]){h=h[e]();m=h[i];v=h[j];if(f.mobile!=="apple"){m+=k[b](z);v+=k[d](z)}}return{left:m,top:v}}var k=a.DOM,f=a.UA,l=window,g=document,c=k._isElementNode,r=k._nodeTypeIs,w=k._getWin,n=g.compatMode==="CSS1Compat",u=Math.max,t=parseInt,p="ownerDocument",i="left",j="top",b="scrollLeft",d="scrollTop",e="getBoundingClientRect";a.mix(k,{offset:function(h,m){if(!(h=a.get(h))||!h[p])return null;if(m===o)return q(h);var v=h;if(k.css(v,
"position")==="static")v.style.position="relative";var z=q(v),s={},x,y;for(y in m){x=t(k.css(v,y),10)||0;s[y]=x+m[y]-z[y]}k.css(v,s)},scrollIntoView:function(h,m,v,z){if((h=a.get(h))&&h[p]){z=z===o?true:!!z;v=v===o?true:!!v;if(!m||m===l)return h.scrollIntoView(v);m=a.get(m);if(r(m,9))m=w(m);var s=m&&"scrollTo"in m&&m.document,x=k.offset(h),y=s?{left:k.scrollLeft(m),top:k.scrollTop(m)}:k.offset(m),A={left:x[i]-y[i],top:x[j]-y[j]};x=s?k.viewportHeight(m):m.clientHeight;y=s?k.viewportWidth(m):m.clientWidth;
var B=k[b](m),F=k[d](m),C=B+y,D=F+x,H=h.offsetHeight;h=h.offsetWidth;var G=A.left+B-(t(k.css(m,"borderLeftWidth"))||0);A=A.top+F-(t(k.css(m,"borderTopWidth"))||0);var I=G+h,K=A+H,E,J;if(H>x||A<F||v)E=A;else if(K>D)E=K-x;if(z)if(h>y||G<B||v)J=G;else if(I>C)J=I-y;if(s){if(E!==o||J!==o)m.scrollTo(J,E)}else{if(E!==o)m[d]=E;if(J!==o)m[b]=J}}}});a.each(["Left","Top"],function(h,m){var v="scroll"+h;k[v]=function(z){var s=0,x=w(z),y;if(x&&(y=x.document))s=x[m?"pageYOffset":"pageXOffset"]||y.documentElement[v]||
y.body[v];else if(c(z=a.get(z)))s=z[v];return s}});a.each(["Width","Height"],function(h){k["doc"+h]=function(m){m=m||g;return u(n?m.documentElement["scroll"+h]:m.body["scroll"+h],k["viewport"+h](m))};k["viewport"+h]=function(m){var v="inner"+h;m=w(m);var z=m.document;return v in m?m[v]:n?z.documentElement["client"+h]:z.body["client"+h]}})});
KISSY.add("dom-traversal",function(a,o){function q(g,c,r,w){if(!(g=a.get(g)))return null;if(c===o)c=1;var n=null,u,t;if(a.isNumber(c)&&c>=0){if(c===0)return g;u=0;t=c;c=function(){return++u===t}}for(;g=g[r];)if(l(g)&&(!c||f.test(g,c))&&(!w||w(g))){n=g;break}return n}function k(g,c,r){var w=[];var n=g=a.get(g);if(g&&r)n=g.parentNode;if(n){r=0;for(n=n.firstChild;n;n=n.nextSibling)if(l(n)&&n!==g&&(!c||f.test(n,c)))w[r++]=n}return w}var f=a.DOM,l=f._isElementNode;a.mix(f,{parent:function(g,c){return q(g,
c,"parentNode",function(r){return r.nodeType!=11})},next:function(g,c){return q(g,c,"nextSibling")},prev:function(g,c){return q(g,c,"previousSibling")},siblings:function(g,c){return k(g,c,true)},children:function(g,c){return k(g,c)},contains:function(g,c){var r=false;if((g=a.get(g))&&(c=a.get(c)))if(g.contains)return g.contains(c);else if(g.compareDocumentPosition)return!!(g.compareDocumentPosition(c)&16);else for(;!r&&(c=c.parentNode);)r=c==g;return r}})});
KISSY.add("dom-create",function(a,o){function q(s){var x=s.cloneNode(true);if(c.ie<8)x.innerHTML=s.innerHTML;return x}function k(s,x,y,A){if(y){var B=a.guid("ks-tmp-"),F=RegExp(i);x+='<span id="'+B+'"></span>';a.available(B,function(){var C=a.get("head"),D,H,G,I,K,E;for(F.lastIndex=0;D=F.exec(x);)if((G=(H=D[1])?H.match(b):false)&&G[2]){D=l.createElement("script");D.src=G[2];if((I=H.match(d))&&I[2])D.charset=I[2];D.async=true;C.appendChild(D)}else if((E=D[2])&&E.length>0)a.globalEval(E);(K=l.getElementById(B))&&
g.remove(K);a.isFunction(A)&&A()});f(s,x)}else{f(s,x);a.isFunction(A)&&A()}}function f(s,x){x=(x+"").replace(i,"");try{s.innerHTML=x}catch(y){for(;s.firstChild;)s.removeChild(s.firstChild);x&&s.appendChild(g.create(x))}}var l=document,g=a.DOM,c=a.UA,r=c.ie,w=g._nodeTypeIs,n=g._isElementNode,u=g._isKSNode,t=l.createElement("div"),p=/<(\w+)/,i=/<script([^>]*)>([\s\S]*?)<\/script>/ig,j=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,b=/\ssrc=(['"])(.*?)\1/i,d=/\scharset=(['"])(.*?)\1/i;a.mix(g,{create:function(s,x,y){if(w(s,
1)||w(s,3))return q(s);if(u(s))return q(s[0]);if(!(s=a.trim(s)))return null;var A=null;A=g._creators;var B,F="div",C;if(B=j.exec(s))A=(y||l).createElement(B[1]);else{if((B=p.exec(s))&&(C=B[1])&&a.isFunction(A[C=C.toLowerCase()]))F=C;s=A[F](s,y).childNodes;if(s.length===1)y=s[0].parentNode.removeChild(s[0]);else{s=s;C=y||l;y=null;if(s&&(s.push||s.item)&&s[0]){C=C||s[0].ownerDocument;y=C.createDocumentFragment();if(s.item)s=a.makeArray(s);C=0;for(A=s.length;C<A;C++)y.appendChild(s[C])}y=y}A=y}y=A;n(y)&&
a.isPlainObject(x)&&g.attr(y,x,true);return y},_creators:{div:function(s,x){var y=x?x.createElement("div"):t;y.innerHTML=s;return y}},html:function(s,x,y,A){if(x===o){s=a.get(s);if(n(s))return s.innerHTML}else a.each(a.query(s),function(B){n(B)&&k(B,x,y,A)})},remove:function(s){a.each(a.query(s),function(x){n(x)&&x.parentNode&&x.parentNode.removeChild(x)})}});if(c.gecko||r){var e=g._creators,h=g.create,m=/(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/,v={option:"select",td:"tr",tr:"tbody",
tbody:"table",col:"colgroup",legend:"fieldset"},z;for(z in v)(function(s){e[z]=function(x,y){return h("<"+s+">"+x+"</"+s+">",null,y)}})(v[z]);if(r){e.script=function(s,x){var y=x?x.createElement("div"):t;y.innerHTML="-"+s;y.removeChild(y.firstChild);return y};if(r<8)e.tbody=function(s,x){var y=h("<table>"+s+"</table>",null,x),A=y.children.tags("tbody")[0];y.children.length>1&&A&&!m.test(s)&&A.parentNode.removeChild(A);return y}}a.mix(e,{optgroup:e.option,th:e.td,thead:e.tbody,tfoot:e.tbody,caption:e.tbody,
colgroup:e.tbody})}});KISSY.add("dom-insertion",function(a){a.mix(a.DOM,{insertBefore:function(o,q){if((o=a.get(o))&&(q=a.get(q))&&q.parentNode)q.parentNode.insertBefore(o,q);return o},insertAfter:function(o,q){if((o=a.get(o))&&(q=a.get(q))&&q.parentNode)q.nextSibling?q.parentNode.insertBefore(o,q.nextSibling):q.parentNode.appendChild(o);return o}})});
KISSY.add("event",function(a,o){function q(i,j,b,d,e){if(a.isString(j))j=a.query(j);if(a.isArray(j)){a.each(j,function(h){p[i](h,b,d,e)});return true}if((b=a.trim(b))&&b.indexOf(n)>0){a.each(b.split(n),function(h){p[i](j,h,d,e)});return true}}function k(i,j){f(i)&&g.data(i,w,j)}function f(i){return i&&i.nodeType!==3&&i.nodeType!==8}var l=document,g=a.DOM,c=l.addEventListener?function(i,j,b,d){i.addEventListener&&i.addEventListener(j,b,!!d)}:function(i,j,b){i.attachEvent&&i.attachEvent("on"+j,b)},
r=l.removeEventListener?function(i,j,b,d){i.removeEventListener&&i.removeEventListener(j,b,!!d)}:function(i,j,b){i.detachEvent&&i.detachEvent("on"+j,b)},w="ksEventTargetId",n=" ",u=a.now(),t={},p={EVENT_GUID:w,special:{},add:function(i,j,b,d){if(!q("add",i,j,b,d)){var e=f(i)?g.data(i,w):-1,h,m,v,z,s;if(!(e===-1||!j||!a.isFunction(b))){if(!e){k(i,e=u++);t[e]={target:i,events:{}}}m=t[e].events;if(!m[j]){h=((e=!i.isCustomEventTarget)||i._supportSpecialEvent)&&p.special[j]||{};v=function(x,y){if(!x||
!x.fixed){x=new a.EventObject(i,x,j);a.isPlainObject(y)&&a.mix(x,y)}h.setup&&h.setup(x);return(h.handle||p._handle)(i,x,m[j].listeners)};m[j]={handle:v,listeners:[]};z=h.fix||j;s=h.capture;if(e)c(i,z,v,s);else i._addEvent&&i._addEvent(z,v,s)}m[j].listeners.push({fn:b,scope:d||i})}}},remove:function(i,j,b,d){if(!q("remove",i,j,b,d)){var e=f(i)?g.data(i,w):-1,h,m,v,z,s,x,y;if(e!==-1)if(e&&(h=t[e]))if(h.target===i){d=d||i;h=h.events||{};if(m=h[j]){v=m.listeners;x=v.length;if(a.isFunction(b)&&x){s=z=
0;for(y=[];z<x;++z)if(b!==v[z].fn||d!==v[z].scope)y[s++]=v[z];m.listeners=y;x=y.length}if(b===o||x===0){if(i.isCustomEventTarget)i._addEvent&&i._removeEvent(j,m.handle);else{b=p.special[j]||{};r(i,b.fix||j,m.handle)}delete h[j]}}if(j===o||a.isEmptyObject(h)){for(j in h)p.remove(i,j);delete t[e];g.removeData(i,w)}}}},_handle:function(i,j,b){b=b.slice(0);for(var d,e=0,h=b.length;e<h;++e){d=b[e];d=d.fn.call(d.scope||i,j);if(d===false&&i.isCustomEventTarget||j.isImmediatePropagationStopped)break}return d},
_getCache:function(i){return t[i]},_simpleAdd:c,_simpleRemove:r};p.on=p.add;a.Event=p});
KISSY.add("event-object",function(a,o){function q(l,g,c){this.currentTarget=l;this.originalEvent=g||{};if(g){this.type=g.type;this._fix()}else{this.type=c;this.target=l}this.currentTarget=l;this.fixed=true}var k=document,f="altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" ");a.augment(q,
{_fix:function(){var l=this.originalEvent,g=f.length,c,r=this.currentTarget;for(r=r.nodeType===9?r:r.ownerDocument||k;g;){c=f[--g];this[c]=l[c]}if(!this.target)this.target=this.srcElement||k;if(this.target.nodeType===3)this.target=this.target.parentNode;if(!this.relatedTarget&&this.fromElement)this.relatedTarget=this.fromElement===this.target?this.toElement:this.fromElement;if(this.pageX===o&&this.clientX!==o){l=r.documentElement;g=r.body;this.pageX=this.clientX+(l&&l.scrollLeft||g&&g.scrollLeft||
0)-(l&&l.clientLeft||g&&g.clientLeft||0);this.pageY=this.clientY+(l&&l.scrollTop||g&&g.scrollTop||0)-(l&&l.clientTop||g&&g.clientTop||0)}if(this.which===o)this.which=this.charCode!==o?this.charCode:this.keyCode;if(this.metaKey===o)this.metaKey=this.ctrlKey;if(!this.which&&this.button!==o)this.which=this.button&1?1:this.button&2?3:this.button&4?2:0},preventDefault:function(){var l=this.originalEvent;if(l.preventDefault)l.preventDefault();else l.returnValue=false;this.isDefaultPrevented=true},stopPropagation:function(){var l=
this.originalEvent;if(l.stopPropagation)l.stopPropagation();else l.cancelBubble=true;this.isPropagationStopped=true},stopImmediatePropagation:function(){var l=this.originalEvent;l.stopImmediatePropagation?l.stopImmediatePropagation():this.stopPropagation();this.isImmediatePropagationStopped=true},halt:function(l){l?this.stopImmediatePropagation():this.stopPropagation();this.preventDefault()}});a.EventObject=q});
KISSY.add("event-target",function(a,o){var q=a.Event;a.EventTarget={isCustomEventTarget:true,fire:function(k,f){var l=a.DOM.data(this,q.EVENT_GUID)||-1;if((l=((q._getCache(l)||{}).events||{})[k])&&a.isFunction(l.handle))return l.handle(o,f);return this},on:function(k,f,l){q.add(this,k,f,l);return this},detach:function(k,f,l){q.remove(this,k,f,l);return this}}});
KISSY.add("event-mouseenter",function(a){var o=a.Event;a.UA.ie||a.each([{name:"mouseenter",fix:"mouseover"},{name:"mouseleave",fix:"mouseout"}],function(q){o.special[q.name]={fix:q.fix,setup:function(k){k.type=q.name},handle:function(k,f,l){if(a.DOM._isKSNode(k))k=k[0];var g=f.relatedTarget;try{for(;g&&g!==k;)g=g.parentNode;g!==k&&o._handle(k,f,l)}catch(c){}}}})});
KISSY.add("event-focusin",function(a){var o=a.Event;document.addEventListener&&a.each([{name:"focusin",fix:"focus"},{name:"focusout",fix:"blur"}],function(q){o.special[q.name]={fix:q.fix,capture:true,setup:function(k){k.type=q.name}}})});
KISSY.add("node",function(a){function o(f,l,g){var c;if(!(this instanceof o))return new o(f,l,g);if(f){if(a.isString(f))c=q.create(f,l,g);else if(k(f,1)||k(f,3))c=f;else if(f instanceof o)return f;this[0]=c}else this.length=0}var q=a.DOM,k=q._nodeTypeIs;o.TYPE="-ks-Node";a.augment(o,{length:1,getDOMNode:function(){return this[0]},nodeType:o.TYPE});a.one=function(f,l){var g=a.get(f,l);return g?new o(g):null};a.Node=o});
KISSY.add("nodelist",function(a){function o(f){if(!(this instanceof o))return new o(f);k.push.apply(this,f||[])}var q=a.DOM,k=Array.prototype;a.mix(o.prototype,{length:0,item:function(f){var l=null;if(q._isElementNode(this[f]))l=new a.Node(this[f]);return l},getDOMNodes:function(){return k.slice.call(this)},each:function(f,l){var g=this.length,c=0,r;for(r=new a.Node(this[0]);c<g&&f.call(l||r,r,c,this)!==false;r=new a.Node(this[++c]));return this}});a.all=function(f,l){return new o(a.query(f,l,true))};
a.NodeList=o});
KISSY.add("node-attach",function(a,o){function q(j,b,d,e){j=[this[j?u:n]()].concat(a.makeArray(b));if(b[d]===o)return e.apply(f,j);else{e.apply(f,j);return this}}function k(j,b){a.each(j,function(d){a.each([r,w],function(e,h){e[d]=function(m){switch(b){case t:return function(){return q.call(this,h,arguments,1,m)};case p:return function(){return q.call(this,h,arguments,0,m)};case i:return function(){var v=this[h?u:n]();return(v=m.apply(f,[v].concat(a.makeArray(arguments))))?new (a[a.isArray(v)?"NodeList":
"Node"])(v):null};default:return function(){var v=this[h?u:n]();v=m.apply(f,[v].concat(a.makeArray(arguments)));return v===o?this:v}}}(f[d])})})}var f=a.DOM,l=a.Event,g=f._nodeTypeIs,c=f._isKSNode,r=a.Node.prototype,w=a.NodeList.prototype,n="getDOMNode",u=n+"s",t=1,p=2,i=4;a.mix(r,{one:function(j){return a.one(j,this[0])},all:function(j){return a.all(j,this[0])}});k(["data","removeData"],t);k(["hasClass","addClass","removeClass","replaceClass","toggleClass"]);k(["attr","removeAttr"],t);k(["val","text"],
p);k(["css"],t);k(["width","height"],p);k(["offset"],p);k(["scrollIntoView"]);k(["parent","next","prev","siblings","children"],i);k(["contains"]);k(["html"],p);k(["remove"]);a.each(["insertBefore","insertAfter"],function(j){r[j]=function(b){f[j].call(f,this[0],b);return this}});a.each([r,w],function(j,b){a.mix(j,{append:function(d){d&&a.each(this,function(e){var h;if(b||a.isString(d))h=f.create(d);else{if(g(d,1)||g(d,3))h=d;if(c(d))h=d[0]}e.appendChild(h)});return this},appendTo:function(d){if((d=
a.get(d))&&d.appendChild)a.each(this,function(e){d.appendChild(e)});return this}})});a.each([r,w],function(j){a.mix(j,a.EventTarget);j._supportSpecialEvent=true;j._addEvent=function(b,d,e){for(var h=0,m=this.length;h<m;h++)l._simpleAdd(this[h],b,d,e)};j._removeEvent=function(b,d,e){for(var h=0,m=this.length;h<m;h++)l._simpleRemove(this[h],b,d,e)};delete j.fire})});
KISSY.add("cookie",function(a){var o=document,q=encodeURIComponent,k=decodeURIComponent;a.Cookie={get:function(f){var l;if(a.isString(f)&&f!=="")if(f=o.cookie.match("(?:^| )"+f+"(?:(?:=([^;]*))|;|$)"))l=f[1]?k(f[1]):"";return l},set:function(f,l,g,c,r,w){l=q(l);var n=g;if(typeof n==="number"){n=new Date;n.setTime(n.getTime()+g*864E5)}if(n instanceof Date)l+="; expires="+n.toUTCString();if(a.isString(c)&&c!=="")l+="; domain="+c;if(a.isString(r)&&r!=="")l+="; path="+r;if(w)l+="; secure";o.cookie=f+
"="+l},remove:function(f,l,g,c){this.set(f,"",0,l,g,c)}}});
KISSY.add("json",function(a){function o(n){return n<10?"0"+n:n}function q(n){l.lastIndex=0;return l.test(n)?'"'+n.replace(l,function(u){var t=r[u];return typeof t==="string"?t:"\\u"+("0000"+u.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+n+'"'}function k(n,u){var t,p,i,j,b=g,d,e=u[n];if(e&&typeof e==="object"&&typeof e.toJSON==="function")e=e.toJSON(n);if(typeof w==="function")e=w.call(u,n,e);switch(typeof e){case "string":return q(e);case "number":return isFinite(e)?String(e):"null";case "boolean":case "null":return String(e);
case "object":if(!e)return"null";g+=c;d=[];if(Object.prototype.toString.apply(e)==="[object Array]"){j=e.length;for(t=0;t<j;t+=1)d[t]=k(t,e)||"null";i=d.length===0?"[]":g?"[\n"+g+d.join(",\n"+g)+"\n"+b+"]":"["+d.join(",")+"]";g=b;return i}if(w&&typeof w==="object"){j=w.length;for(t=0;t<j;t+=1){p=w[t];if(typeof p==="string")if(i=k(p,e))d.push(q(p)+(g?": ":":")+i)}}else for(p in e)if(Object.hasOwnProperty.call(e,p))if(i=k(p,e))d.push(q(p)+(g?": ":":")+i);i=d.length===0?"{}":g?"{\n"+g+d.join(",\n"+g)+
"\n"+b+"}":"{"+d.join(",")+"}";g=b;return i}}a=a.JSON=window.JSON||{};if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+o(this.getUTCMonth()+1)+"-"+o(this.getUTCDate())+"T"+o(this.getUTCHours())+":"+o(this.getUTCMinutes())+":"+o(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var f=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
l=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,g,c,r={"":"\\b","\t":"\\t","\n":"\\n","":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},w;if(typeof a.stringify!=="function")a.stringify=function(n,u,t){var p;c=g="";if(typeof t==="number")for(p=0;p<t;p+=1)c+=" ";else if(typeof t==="string")c=t;if((w=u)&&typeof u!=="function"&&(typeof u!=="object"||typeof u.length!=="number"))throw Error("JSON.stringify");return k("",{"":n})};if(typeof a.parse!==
"function")a.parse=function(n,u){function t(i,j){var b,d,e=i[j];if(e&&typeof e==="object")for(b in e)if(Object.hasOwnProperty.call(e,b)){d=t(e,b);if(d!==undefined)e[b]=d;else delete e[b]}return u.call(i,j,e)}var p;n=String(n);f.lastIndex=0;if(f.test(n))n=n.replace(f,function(i){return"\\u"+("0000"+i.charCodeAt(0).toString(16)).slice(-4)});if(/^[\],:{}\s]*$/.test(n.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,
""))){p=eval("("+n+")");return typeof u==="function"?t({"":p},""):p}throw new SyntaxError("JSON.parse");}});
KISSY.add("anim-easing",function(a){var o=Math,q=o.PI,k=o.pow,f=o.sin,l=1.70158,g={easeNone:function(c){return c},easeIn:function(c){return c*c},easeOut:function(c){return(2-c)*c},easeBoth:function(c){return(c*=2)<1?0.5*c*c:0.5*(1- --c*(c-2))},easeInStrong:function(c){return c*c*c*c},easeOutStrong:function(c){return 1- --c*c*c*c},easeBothStrong:function(c){return(c*=2)<1?0.5*c*c*c*c:0.5*(2-(c-=2)*c*c*c)},elasticIn:function(c){if(c===0||c===1)return c;return-(k(2,10*(c-=1))*f((c-0.075)*2*q/0.3))},
elasticOut:function(c){if(c===0||c===1)return c;return k(2,-10*c)*f((c-0.075)*2*q/0.3)+1},elasticBoth:function(c){if(c===0||(c*=2)===2)return c;if(c<1)return-0.5*k(2,10*(c-=1))*f((c-0.1125)*2*q/0.45);return k(2,-10*(c-=1))*f((c-0.1125)*2*q/0.45)*0.5+1},backIn:function(c){if(c===1)c-=0.0010;return c*c*((l+1)*c-l)},backOut:function(c){return(c-=1)*c*((l+1)*c+l)+1},backBoth:function(c){if((c*=2)<1)return 0.5*c*c*(((l*=1.525)+1)*c-l);return 0.5*((c-=2)*c*(((l*=1.525)+1)*c+l)+2)},bounceIn:function(c){return 1-
g.bounceOut(1-c)},bounceOut:function(c){return c<1/2.75?7.5625*c*c:c<2/2.75?7.5625*(c-=1.5/2.75)*c+0.75:c<2.5/2.75?7.5625*(c-=2.25/2.75)*c+0.9375:7.5625*(c-=2.625/2.75)*c+0.984375},bounceBoth:function(c){if(c<0.5)return g.bounceIn(c*2)*0.5;return g.bounceOut(c*2-1)*0.5+0.5}};a.Easing=g});
KISSY.add("anim",function(a,o){function q(p,i,j,b,d){if(p=a.get(p)){if(!(this instanceof q))return new q(p,i,j,b,d);var e=a.isPlainObject(j);i=i;this.domEl=p;if(a.isPlainObject(i))i=a.param(i,";").replace(/=/g,":");var h={},m=n.length,v;w.innerHTML='<div style="'+i+'"></div>';for(p=w.firstChild.style;m--;)if(v=p[n[m]])h[n[m]]=k(v);this.props=h;this.targetStyle=i;if(e)e=a.merge(t,j);else{e=a.clone(t);j&&(e.duration=r(j,10)||1);a.isString(b)&&(b=c[b]);a.isFunction(b)&&(e.easing=b);a.isFunction(d)&&
(e.complete=d)}this.config=e;a.isFunction(d)&&this.on(u,d)}}function k(p){var i=r(p);p=(p+"").replace(/^[-\d\.]+/,"");return isNaN(i)?{v:p,u:"",f:l}:{v:i,u:p,f:f}}function f(p,i,j){return(p+(i-p)*j).toFixed(3)}function l(p,i,j){for(var b=2,d,e,h=[],m=[];d=3,e=arguments[b-1],b--;)if(e.substr(0,4)==="rgb(")for(e=e.match(/\d+/g);d--;)h.push(~~e[d]);else if(e.substr(0,1)==="#"){if(e.length===4)e="#"+e.substr(1,1)+e.substr(1,1)+e.substr(2,1)+e.substr(2,1)+e.substr(3,1)+e.substr(3,1);for(;d--;)h.push(parseInt(e.substr(1+
d*2,2),16))}else return i;for(;d--;){b=~~(h[d+3]+(h[d]-h[d+3])*j);m.push(b<0?0:b>255?255:b)}return"rgb("+m.join(",")+")"}var g=a.DOM,c=a.Easing,r=parseFloat,w=g.create("<div>"),n="backgroundColor borderBottomColor borderBottomWidth borderBottomStyle borderLeftColor borderLeftWidth borderLeftStyle borderRightColor borderRightWidth borderRightStyle borderSpacing borderTopColor borderTopWidth borderTopStyle bottom color font fontFamily fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" "),
u="complete",t={duration:1,easing:c.easeNone};a.augment(q,a.EventTarget,{run:function(){var p=this,i=p.config,j=p.domEl,b=i.duration*1E3,d=i.easing,e=a.now(),h=e+b,m=p.props,v={},z;for(z in m)v[z]=k(g.css(j,z));if(p.fire("start")!==false){p.stop();p.timer=a.later(i=function(){var s=a.now(),x=s>h?1:(s-e)/b,y,A,B;for(z in m){y=v[z];A=m[z];if(A.v==0)A.u=y.u;if(y.u!==A.u)y.v=0;g.css(j,z,A.f(y.v,A.v,d(x))+A.u)}if(p.fire("step")===false||(B=s>h)){p.stop();B&&p.fire(u)}},13,true);i();return p}},stop:function(p){var i=
this.domEl,j=this.targetStyle;if(this.timer){this.timer.cancel();this.timer=o}if(p){a.UA.ie&&j.indexOf("opacity")>-1&&g.css(i,"opacity",this.props.opacity.v);i.style.cssText+=";"+j;this.fire(u)}return this}});a.Anim=q});
KISSY.add("anim-node-plugin",function(a,o){function q(i,j,b,d,e){if(j==="toggle")j=(e=k.css(i,l)===g?1:0)?"show":"hide";if(e)k.css(i,l,k.data(i,l)||"");var h={};a.each(p[j],function(m){if(m===c)k.css(i,c,r);else if(m===w){h.opacity=e?1:0;e&&k.css(i,w,0)}else if(m===n){h.height=e?k.css(i,n)||i.naturalHeight:0;e&&k.css(i,n,0)}else if(m===u){h.width=e?k.css(i,u)||i.naturalWidth:0;e&&k.css(i,u,0)}});(new a.Anim(i,h,b,"easeOut",function(){if(!e){var m=i.style,v=m[l];if(v!==g){v&&k.data(i,l,v);m[l]=g}k.css(i,
{height:t,width:t,overflow:t,opacity:1})}d&&a.isFunction(d)&&d()})).run()}var k=a.DOM,f=a.Anim,l="display",g="none",c="overflow",r="hidden",w="opacity",n="height",u="width",t="auto",p={show:[c,w,n,u],fade:[w],slide:[c,n]};a.each([a.Node.prototype,a.NodeList.prototype],function(i){i.animate=function(){var j=a.makeArray(arguments);a.each(this,function(b){f.apply(o,[b].concat(j)).run()});return this};a.each({show:["show",1],hide:["hide",0],toggle:["toggle"],fadeIn:["fade",1],fadeOut:["fade",0],slideDown:["slide",
1],slideUp:["slide",0]},function(j,b){i[b]=function(d,e){k[b]&&arguments.length===0?k[b](this):a.each(this,function(h){q(h,j[0],d,e,j[1])});return this}})})});KISSY.add("core");
