/*
Copyright 2010, KISSY UI Library v1.1.5
MIT Licensed
build time: Sep 19 17:41
*/
KISSY.add("flash",function(e){e.Flash={swfs:{},length:0}},{requires:["core"]});
KISSY.add("flash-ua",function(e){function l(g){var h=e.isString(g)?g.match(/(\d)+/g):g;g=g;if(e.isArray(h))g=parseFloat(h[0]+"."+j(h[1],3)+j(h[2],5));return g||0}function j(g,h){for(var a=(g+"").length;a++<h;)g="0"+g;return g}var k=e.UA,f,n,m=true;k.fpv=function(g){if(g||m){m=false;var h;if(navigator.plugins&&navigator.mimeTypes.length)h=(navigator.plugins["Shockwave Flash"]||0).description;else if(window.ActiveXObject)try{h=(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")}catch(a){}f=
h?h.match(/(\d)+/g):void 0;n=l(f)}return f};k.fpvGEQ=function(g,h){m&&k.fpv(h);return!!n&&n>=l(g)}},{host:"flash"});
KISSY.add("flash-embed",function(e){function l(a,b,c){var d=k.create("<param>");k.attr(d,{name:b,value:c});a.appendChild(d)}var j=e.UA,k=e.DOM,f=e.Flash,n=/object|embed/i,m=encodeURIComponent,g={wmode:"",allowscriptaccess:"",allownetworking:"",allowfullscreen:"",play:"false",loop:"",menu:"",quality:"",scale:"",salign:"",bgcolor:"",devicefont:"",base:"",swliveconnect:"",seamlesstabbing:""},h={params:{},attrs:{width:215,height:138},version:9};e.mix(f,{fpv:j.fpv,fpvGEQ:j.fpvGEQ,add:function(a,b,c){var d,
i;b=f._normalize(b);b=e.merge(h,b);b.attrs=e.merge(h.attrs,b.attrs);if(a=e.get(a)){if(!a.id)a.id=e.guid("ks-flash-");i=b.attrs.id=a.id;if(j.fpv()){if(!j.fpvGEQ(b.version)){this._callback(c,0,i,a);if(!((d=b.xi)&&e.isString(d)))return;b.src=d}if(n.test(a.nodeName))this._register(a,b,c);else b.src?this._embed(a,b,c):this._callback(c,-3,i,a)}else this._callback(c,-1,i,a)}else this._callback(c,-2)},get:function(a){return f.swfs[a]},remove:function(a){if(a=f.get("#"+a)){k.remove(a);delete f.swfs[a.id];
f.length-=1}},contains:function(a){var b=f.swfs,c,d=false;if(e.isString(a))d=a in b;else for(c in b)if(b[c]===a){d=true;break}return d},_register:function(a,b,c){b=b.attrs.id;if(j.gecko||j.opera)a=e.query("object",a)[0]||a;f._addSWF(b,a);f._callback(c,1,b,a)},_embed:function(a,b,c){var d=f._createSWF(b.src,b.attrs,b.params);if(j.ie)a.outerHTML=d.outerHTML;else a.parentNode.replaceChild(d,a);a=e.get("#"+a.id);f._register(a,b,c)},_callback:function(a,b,c,d){b&&e.isFunction(a)&&a({status:b,id:c,swf:d})},
_addSWF:function(a,b){if(a&&b){f.swfs[a]=b;f.length+=1}},_createSWF:function(a,b,c){var d=k.create("<object>"),i;k.attr(d,b);if(j.ie){k.attr(d,"classid","clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");l(d,"movie",a)}else k.attr(d,{type:"application/x-shockwave-flash",data:a,name:b.id});for(i in c)i in g&&l(d,i,c[i]);c.flashvars&&l(d,"flashvars",f.toFlashVars(c.flashvars));return d},_normalize:function(a){var b,c,d,i=a;if(e.isPlainObject(a)){i={};for(d in a){b=d.toLowerCase();c=a[d];if(b!=="flashvars")c=
f._normalize(c);i[b]=c}}return i},toFlashVars:function(a){if(!e.isPlainObject(a))return"";var b,c,d=[];for(b in a){c=a[b];if(e.isString(c))c=m(c);else{c=e.JSON.stringify(c);if(!c)continue;c=c.replace(/:"([^"]+)/g,function(i,o){return':"'+m(o)})}d.push(b+"="+c)}return d.join("&").replace(/\"/g,"'")}})},{host:"flash"});