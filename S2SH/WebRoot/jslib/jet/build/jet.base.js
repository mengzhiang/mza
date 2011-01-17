(function(){var j=this,e=j.Jet,m={},s={},l={NO_DEBUG:0,SHOW_ERROR:1,SHOW_WARNING:2,SHOW_INFO:3,SHOW_ALL:4},o={debug:l.SHOW_ALL},n=function(c,k){c=String(c);k=k||3;if(k<o.debug)if(this.console)this.console.out?this.console.out(c,k):alert(c+" - \u6d88\u606f\u7c7b\u578b["+k+"]");return c};try{if(typeof e==="undefined"||e.mark&&e.mark==="JetMark"){if(e){m=e.VERSIONS;s=e.PACKAGES}e=function(c,k){var g=this;if(k)this._init();else if(c){c=String(c);try{if(e.VERSIONS[c])g=e.VERSIONS[c];else{g=e.VERSIONS[e.DEFAULT_VERSION];
throw new Error("\u6ca1\u6709\u627e\u5230 JET version "+c+", \u6240\u4ee5\u8fd4\u56de\u9ed8\u8ba4\u7248\u672c JET version "+e.DEFAULT_VERSION+"!");}}catch(h){g.out("A.\u9519\u8bef\uff1a["+h.name+"] "+h.message+", "+h.fileName+", \u884c\u53f7:"+h.lineNumber+"; stack:"+typeof h.stack,2)}}else g=e.VERSIONS[e.DEFAULT_VERSION];return g};e.prototype={version:"1.0",DEBUG:l,option:o,_init:function(){this.constructor=e},$namespace:function(c){var k,g=c.split("."),h=j;for(c=0;c<g.length;c+=1){k=g[c];h[k]=h[k]||
{};h=h[g[c]]}return h},$package:function(){var c=arguments[0],k=arguments[arguments.length-1],g=j,h;if(typeof k==="function"){if(typeof c==="string"){g=this.$namespace(c);e.PACKAGES[c]||(e.PACKAGES[c]={isLoaded:true,returnValue:h})}g.packageName=c;k.call(g,this)}else throw new Error("Function required");},checkPackage:function(c){return e.PACKAGES[c]},out:n,startTime:+new Date,about:function(){return this.out("JET (Javascript Extend Tools)\nversion: "+this.version+"\n\nCopyright (c) 2009, KDV.cn, All rights reserved.",
3)},toString:function(){return"JET version "+this.version+" !"}};e.VERSIONS=m;e.PACKAGES=s;e.VERSIONS["1.0"]=new e("1.0",true);e.DEFAULT_VERSION="1.0";e.mark="JetMark";j.Jet=e}else throw new Error('"Jet" name is defined in other javascript code !!!');}catch(b){n("JET \u5fae\u5185\u6838\u521d\u59cb\u5316\u5931\u8d25! B.\u9519\u8bef\uff1a["+b.name+"] "+b.message+", "+b.fileName+", \u884c\u53f7:"+b.lineNumber+"; stack:"+typeof b.stack,1)}})();
Jet().$package(function(j){var e,m,s,l,o,n,b,c,k,g,h;e=function(d){return typeof d==="undefined"};m=function(d){return d===null};s=function(d){return(d===0||d)&&d.constructor===Number};o=function(d){return(d===false||d)&&d.constructor===Boolean};l=function(d){return(d===""||d)&&d.constructor===String};n=function(d){return d&&d.constructor===Object||String(d)==="[object Object]"};b=function(d){return d&&d.constructor===Array};c=function(d){return d&&d.callee&&s(d.length)?true:false};k=function(d){return d&&
d.constructor===Function};g=function(d){var i=arguments,q,r;if(i.length===1){d=this;i=0}else{d=i[0]||{};i=1}for(;i<arguments.length;i++){r=arguments[i];for(q in r){var u=r[q];if(d[q]!==u)if(u&&n(u)&&!u.nodeType&&!k(u)){d[q]={};g(d[q],u||(u.length!=null?[]:{}))}else if(u!==undefined)d[q]=u}}return d};j.isUndefined=e;j.isNull=m;j.isNumber=s;j.isString=l;j.isBoolean=o;j.isObject=n;j.isArray=b;j.isArguments=c;j.isFunction=k;j.$typeof=function(d){return e(d)?"undefined":m(d)?"null":s(d)?"number":o(d)?
"boolean":l(d)?"string":n(d)?"object":b(d)?"array":c(d)?"arguments":k(d)?"function":"other"};j.$return=function(d){return j.isFunction(d)?d:function(){return d}};j.$try=function(){var d,i=arguments.length,q;for(d=0;d<i;d++)try{q=arguments[d]();break}catch(r){j.out("C.\u9519\u8bef\uff1a["+r.name+"] "+r.message+", "+r.fileName+", \u884c\u53f7:"+r.lineNumber+"; stack:"+typeof r.stack,2)}return q};j.emptyFunc=function(){};j.clone=function(d){var i=function(){};i.prototype=d;return new i};j.getLength=
function(d){var i,q=0;for(i in d)d.hasOwnProperty(i)&&q++;return q};j.random=function(d,i){return Math.floor(Math.random()*(i-d+1)+d)};j.extend=g;j.now=function(){return+new Date};j.timedChunk=function(d,i,q,r,u){var v=d.concat();if(r)v=d;window.setTimeout(function(){var x=+new Date;do i.call(q,v.shift());while(v.length>0&&+new Date-x<50);if(v.length>0)window.setTimeout(arguments.callee,25);else u&&u(d)},25)};j.rebuild=function(d,i){i=i||{};d.$$rebuildedFunc=d.$$rebuildedFunc||function(){var q=this,
r;q=i.contextObj||q;r=Array.prototype.slice.call(arguments,0);if(r!==undefined)r=r.concat(i.arguments);if(i.event===false)r=r.slice(1);return d.apply(q,r)};return d.$$rebuildedFunc};j.pass=function(d){var i=Array.prototype.slice,q=i.call(arguments,1);return function(){return d.apply(this,q.concat(i.call(arguments)))}};j.bind=function(d,i){var q=Array.prototype.slice,r=q.call(arguments,2);return function(){return d.apply(i,r.concat(q.call(arguments)))}};j.bindNoEvent=h;j.Class=function(){var d=arguments.length,
i=arguments[d-1];i.init=i.init||function(){};if(d===2){d=arguments[0].extend;var q=function(){};q.prototype=d.prototype;var r=function(){this.init.apply(this,arguments)};r.superClass=d.prototype;r.prototype=new q;r.prototype.constructor=r;j.extend(r.prototype,i);r.prototype.init=function(){i.init.apply(this,arguments)};return r}else if(d===1){d=function(){this.init.apply(this,arguments)};d.prototype=i;return d}}});
Jet().$package(function(j){j.browserOptions={adjustBehaviors:true,htmlClass:true};j.host=window.location.host;var e=navigator.platform.toLowerCase(),m=navigator.userAgent.toLowerCase(),s=navigator.plugins,l,o,n,b,c;b=function(g,h){h=h||1;g=String(g).split(".");g=g[0]+"."+(g[1]||"0");return g=Number(g).toFixed(h)};l={getPlatform:function(){return e},name:window.orientation!=undefined?"ipod":(e.match(/mac|win|linux/i)||["unknown"])[0],version:0,ipod:0,win:0,linux:0,mac:0,set:function(g,h){this.name=
g;this.version=h;this[g]=h}};l[l.name]=true;(c=m.match(/windows ([\d.]+)/))?l.set("win",b(c[1])):(c=m.match(/windows nt ([\d.]+)/))?l.set("win",b(c[1])):(c=m.match(/mac ([\d.]+)/))?l.set("mac",b(c[1])):(c=m.match(/ipod ([\d.]+)/))?l.set("ipod",b(c[1])):(c=m.match(/linux ([\d.]+)/))&&l.set("linux",b(c[1]));o={features:{xpath:!!document.evaluate,air:!!window.runtime,query:!!document.querySelector},getPlugins:function(){return s},plugins:{flash:function(){var g="none";if(s&&s.length){if((flash=s["Shockwave Flash"])&&
flash.description)g=b(flash.description.match(/\b(\d+)\.\d+\b/)[1],1)||g}else for(var h=13;h--;)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+h);g=b(h);break}catch(d){}return g}()},getUserAgent:function(){return m},name:"unknown",version:0,ie:0,firefox:0,chrome:0,opera:0,safari:0,set:function(g,h){this.name=g;this.version=h;this[g]=h}};(c=m.match(/msie ([\d.]+)/))?o.set("ie",b(c[1])):(c=m.match(/firefox\/([\d.]+)/))?o.set("firefox",b(c[1])):(c=m.match(/chrome\/([\d.]+)/))?o.set("chrome",
b(c[1])):(c=m.match(/opera.([\d.]+)/))?o.set("opera",b(c[1])):(c=m.match(/version\/([\d.]+).*safari/))&&o.set("safari",b(c[1]));n={name:"unknown",version:0,trident:0,gecko:0,webkit:0,presto:0,set:function(g,h){this.name=g;this.version=h;this[g]=h}};(c=m.match(/trident\/([\d.]+)/))?n.set("trident",b(c[1])):(c=m.match(/gecko\/([\d.]+)/))?n.set("gecko",b(c[1])):(c=m.match(/applewebkit\/([\d.]+)/))?n.set("webkit",b(c[1])):(c=m.match(/presto\/([\d.]+)/))&&n.set("presto",b(c[1]));if(o.ie)if(o.ie==6)n.set("trident",
b("4"));else if(o.ie==7||o.ie==8)n.set("trident",b("5"));c=function(){if(o.ie&&o.ie<7)try{document.execCommand("BackgroundImageCache",false,true)}catch(g){}};j.browserOptions.adjustBehaviors&&c();var k=function(g){return String(g).replace(/\./gi,"_")};c=function(){var g=document.documentElement,h=[g.className];h.push("javascriptEnabled");h.push(l.name);h.push(l.name+k(l.version));h.push(o.name);h.push(o.name+k(o.version));h.push(n.name);h.push(n.name+k(n.version));if(o.plugins.flash){h.push("flash");
h.push("flash"+k(o.plugins.flash))}g.className=h.join(" ")};j.browserOptions.htmlClass&&c();j.platform=l;j.browser=o;j.browser.engine=n});
Jet().$package(function(j){var e,m,s,l,o,n,b,c,k,g,h,d,i,q,r,u;j.dom=j.dom||{};e=j.dom;m=e.win?e.win.contentWindow:e.win||window;e.win=m;e.doc=m.document;u=function(){return document.compatMode==="CSS1Compat"?document.documentElement:document.body};q=function(a){a=a||window.document;return a.nodeType===9?a:a.ownerDocument||e.doc};r=function(a){var f=q(a);return a.document?a:f.defaultView||f.parentWindow||e.win};m=function(a,f){f=f||q();return f.getElementsByTagName(a)};c=function(a){return(a?a.scrollLeft:
Math.max(document.documentElement.scrollLeft,document.body.scrollLeft))||0};k=function(a){return(a?a.scrollTop:Math.max(document.documentElement.scrollTop,document.body.scrollTop))||0};s=function(a,f){return(new RegExp("(^|\\s)"+f+"(\\s|$)")).test(a.className)};l=function(a,f){if(!s(a,f))a.className=a.className+" "+f};o=function(a,f){a.className=a.className.replace(new RegExp("(^|\\s)"+f+"(?:\\s|$)"),"$1")};n=function(a,f,p){if(a){var t=j.browser.name;if(f==="float"||f==="cssFloat")f=t==="ie"?"styleFloat":
"cssFloat";if(f==="opacity"&&t==="ie"){a.style.filter="alpha(opacity="+p*100+")";if(!a.style.zoom)a.style.zoom=1}else a.style[f]=p}};b=function(a,f){if(a){var p=r(a),t=j.browser.name;if(f==="float"||f==="cssFloat")f=t==="ie"?"styleFloat":"cssFloat";if(f==="opacity"&&t==="ie"){f=1;if((a=a.style.filter.match(/opacity=(\d+)/))&&a[1])f=a[1]/100;return f}if(a.style[f])return a.style[f];else if(a.currentStyle)return a.currentStyle[f];else if(p.getComputedStyle)return p.getComputedStyle(a,null)[f];else if(document.defaultView&&
document.defaultView.getComputedStyle){f=f.replace(/([/A-Z])/g,"-$1");f=f.toLowerCase();return(a=document.defaultView.getComputedStyle(a,""))&&a.getPropertyValue(f)}}};g=function(a){var f=0,p=0;if(a)if(document.documentElement.getBoundingClientRect&&a.getBoundingClientRect){p=a.getBoundingClientRect();a=a.ownerDocument;var t=j.browser.ie?2:0;f=p.top-t+k(a);p=p.left-t+c(a)}else for(;a.offsetParent;){f+=a.offsetTop;p+=a.offsetLeft;a=a.offsetParent}return[p,f]};h=function(a){a=g(a);a[0]+=c();a[1]+=k();
return a};d=function(a,f,p){var t=parseInt(b(a,"marginLeft"))||0,w=parseInt(b(a,"marginTop"))||0;n(a,"left",parseInt(f)-t+"px");n(a,"top",parseInt(p)-w+"px")};for(var v=m("script"),x=0;x<v.length;x++)if(v[x].getAttribute("hasJet")=="true")j.src=v[x].src;if(!j.src)j.src=v[v.length-1].src;j.filename=j.src.replace(/(.*\/){0,}([^\\]+).*/ig,"$2");j.path=j.src.split(j.filename)[0];e.getDoc=q;e.id=function(a,f){return q(f).getElementById(a)};e.name=function(a,f){return q(f).getElementsByName(a)};e.tagName=
m;e.getText=function(a){var f=a?a[TEXT_CONTENT]:"";if(f===UNDEFINED&&INNER_TEXT in a)f=a[INNER_TEXT];return f||""};e.getAttributeByParent=function(a,f,p){var t=false;f=f;var w;do{w=f.getAttribute(a);if(j.isUndefined(w)||j.isNull(w))if(f===p)t=true;else f=f.parentNode;else t=true}while(!t);return w};e.node=function(a,f,p){var t,w=(p||e.win).document.createElement(a);for(t in f){a={"class":function(){w.className=f[t]}};a[t]?a[t]():w.setAttribute(t,f[t])}return w};e.setClass=function(a,f){a.className=
f};e.getClass=function(a){return a.className};e.hasClass=s;e.addClass=l;e.removeClass=o;e.toggleClass=function(a,f){return s(a,f)?o(a,f):l(a,f)};e.replaceClass=function(a,f,p){o(a,f);l(a,p)};e.setStyle=n;e.getStyle=b;e.setCssText=function(a,f){a.style.cssText=f};e.getCssText=function(a){return a.style.cssText};e.addCssText=function(a,f){a.style.cssText+=";"+f};e.show=function(a,f){var p;p=(p=a.getAttribute("_oldDisplay"))?p:b(a,"display");if(f)n(a,"display",f);else p==="none"?n(a,"display","block"):
n(a,"display",p)};e.isShow=function(a){return b(a,"display")==="none"?false:true};e.recover=function(a){var f;f=(f=a.getAttribute("_oldDisplay"))?f:b(a,"display");f==="none"?n(a,"display",""):n(a,"display",f)};e.hide=function(a){var f=b(a,"display");a.getAttribute("_oldDisplay")||(f==="none"?a.setAttribute("_oldDisplay",""):a.setAttribute("_oldDisplay",f));n(a,"display","none")};e.getScrollLeft=c;e.getScrollTop=k;e.getScrollHeight=function(a){return(a?a.scrollHeight:Math.max(document.documentElement.scrollHeight,
document.body.scrollHeight))||0};e.getScrollWidth=function(a){return(a?a.scrollWidth:Math.max(document.documentElement.scrollWidth,document.body.scrollWidth))||0};e.getClientHeight=function(a){a=a||u();return a.clientHeight};e.getClientWidth=function(a){a=a||u();return a.clientWidth};e.getOffsetHeight=function(a){a=a||u();return a.offsetHeight};e.getOffsetWidth=function(a){a=a||u();return a.offsetWidth};e.getClientXY=g;e.setClientXY=function(a,f,p){f=parseInt(f)+c();p=parseInt(p)+k();d(a,f,p)};e.getXY=
h;e.setXY=d;e.getRelativeXY=function(a,f){a=h(a);f=h(f);var p=[];p[0]=a[0]-f[0];p[1]=a[1]-f[1];return p};e.getSelection=i;e.getSelectionText=function(a){a=a||window;var f=a.document;if(a.getSelection)return a.getSelection().toString();else if(f.getSelection)return f.getSelection();else if(f.selection)return f.selection.createRange().text};e.getTextFieldSelection=function(a){return a.selectionStart!=undefined&&a.selectionEnd!=undefined?a.value.substring(a.selectionStart,a.selectionEnd):""};e.getDocumentElement=
u});
Jet().$package(function(j){var e,m,s,l,o,n;j.event=j.event||{};e=j.event;if(document.addEventListener){m=function(b,c,k){var g=false;if(!b._eventTypes)b._eventTypes={};b._eventTypes[c]||(b._eventTypes[c]=[]);b.addEventListener(c,k,false);b=b._eventTypes[c];for(c=0;c<b.length;c++)if(b[c]==k)g=true;g||b.push(k)};s=function(b,c,k){if(c)if(k){b.removeEventListener(c,k,false);if(b._eventTypes&&b._eventTypes[c])for(var g=b._eventTypes[c],h=0;h<g.length;h++)g[h]===k&&g.splice(h,1)}else{if(b._eventTypes&&b._eventTypes[c]){g=
b._eventTypes[c];for(h=0;h<g.length;h++)b.removeEventListener(c,g[h],false);b._eventTypes[c]=[]}}else if(b._eventTypes){c=b._eventTypes;for(var d in c){g=b._eventTypes[d];for(h=0;h<g.length;h++)b.removeEventListener(d,g[h],false)}}}}else if(document.attachEvent){m=function(b,c,k){if(e._find(arguments)==-1){var g=function(i){if(!i)i=window.event;i={_event:i,type:i.type,target:i.srcElement,currentTarget:b,relatedTarget:i.fromElement?i.fromElement:i.toElement,eventPhase:i.srcElement==b?2:3,clientX:i.clientX,
clientY:i.clientY,screenX:i.screenX,screenY:i.screenY,layerX:i.offsetX,layerY:i.offsetY,pageX:i.clientX+document.body.scrollLeft,pageY:i.clientY+document.body.scrollTop,altKey:i.altKey,ctrlKey:i.ctrlKey,shiftKey:i.shiftKey,charCode:i.keyCode,keyCode:i.keyCode,stopPropagation:function(){this._event.cancelBubble=true},preventDefault:function(){this._event.returnValue=false}};if(Function.prototype.call)k.call(b,i);else{b._currentHandler=k;b._currentHandler(i);b._currentHandler=null}};b.attachEvent("on"+
c,g);g={element:b,eventType:c,handler:k,wrappedEvent:g};var h=(b.document||b).parentWindow,d=e._uid();if(!h._allHandlers)h._allHandlers={};h._allHandlers[d]=g;if(!b._handlers)b._handlers=[];b._handlers.push(d);if(!h._onunloadEventRegistered){h._onunloadEventRegistered=true;h.attachEvent("onunload",e._removeAllEvents)}}};s=function(b){var c=e._find(arguments);if(c!=-1)for(var k=(b.document||b).parentWindow,g=0;g<c.length;g++){var h=c[g],d=b._handlers[h],i=k._allHandlers[d];b.detachEvent("on"+i.eventType,
i.wrappedEvent);b._handlers.splice(h,1);delete k._allHandlers[d]}};e._find=function(b){var c=b[0],k=b[1],g=b[2],h=c._handlers;if(!h)return-1;c=(c.document||c).parentWindow;var d=[];if(b.length===3)for(b=h.length-1;b>=0;b--){var i=h[b];i=c._allHandlers[i];if(i.eventType==k&&i.handler==g){d.push(b);return d}}else if(b.length===2){for(b=h.length-1;b>=0;b--){i=h[b];i=c._allHandlers[i];i.eventType==k&&d.push(b)}if(d.length>0)return d}else if(b.length===1){for(b=h.length-1;b>=0;b--)d.push(b);if(d.length>
0)return d}return-1};e._removeAllEvents=function(){var b,c=this;for(b in c._allHandlers){var k=c._allHandlers[b];k.element.detachEvent("on"+k.eventType,k.wrappedEvent);delete c._allHandlers[b]}};e._counter=0;e._uid=function(){return"h"+e._counter++}}l=function(b){if(l.done)return b();if(l.timer)l.ready.push(b);else{l.ready=[b];e.on(window,"load",o);l.timer=window.setInterval(o,300)}};o=function(){if(l.done)return true;if(document&&document.getElementsByTagName&&document.getElementById&&document.body){l.done=
true;window.clearInterval(l.timer);l.timer=null;for(var b=0;b<l.ready.length;b++)l.ready[b]();l.ready=null;return true}};n=function(){this.subscribers=[]};n.prototype.subscribe=function(b){j.array.some(this.subscribers,function(c){return c===b})||this.subscribers.push(b);return b};n.prototype.deliver=function(b){j.array.forEach(this.subscribers,function(c){c(b)})};n.prototype.unsubscribe=function(b){this.subscribers=j.array.filter(this.subscribers,function(c){return c!==b});return b};e.addEventListener=
m;e.removeEventListener=s;e.on=e.addEventListener;e.off=e.removeEventListener;e.onDomReady=l;e.Publish=n;e.addObserver=function(b,c,k){var g,h;if(k){c="on"+c;if(!b._$events)b._$events={};b._$events[c]||(b._$events[c]=[]);b=b._$events[c];c=b.length;g=-1;for(h=0;h<c;h++)if(b[h]===k){g=h;break}g===-1&&b.push(k)}else j.out(">>> \u6dfb\u52a0\u7684\u89c2\u5bdf\u8005\u65b9\u6cd5\u4e0d\u5b58\u5728\uff1a"+b+c+k)};e.notifyObservers=function(b,c,k){var g;c="on"+c;if(b._$events&&b._$events[c]){c=b._$events[c];
if(c.length>0){for(g=0;g<c.length;g++)c[g].apply(b,[k]);return true}}else return false};e.removeObserver=function(b,c,k){var g,h,d=b._$events;if(k){if(d){c="on"+c;if(b=d[c]){h=b.length;for(g=0;g<h;g++)if(b[g]==k){b[g]=null;b.splice(g,1);break}}}}else if(c){if(d){c="on"+c;if(b=d[c]){h=b.length;for(g=0;g<h;g++)b[g]=null;delete d[c]}}}else if(b)if(d){for(g in d)delete d[g];delete b._$events}}});
Jet().$package(function(j){j.date=j.date||{};j.date.format=function(e,m){var s={"M+":e.getMonth()+1,"D+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};if(/(Y+)/.test(m))m=m.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length));for(var l in s)if((new RegExp("("+l+")")).test(m))m=m.replace(RegExp.$1,RegExp.$1.length==1?s[l]:("00"+s[l]).substr((""+s[l]).length));return m}});