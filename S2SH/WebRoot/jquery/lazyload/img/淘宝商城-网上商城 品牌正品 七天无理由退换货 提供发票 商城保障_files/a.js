/*publish time:2011-08-03 14:34:42*/
var Mall=MFP=KISSY.app("MFP");/*publish time:2011-08-03 14:34:42*/
document.domain=(function(B){var A=location.hostname.split(".");return A.splice((A.length-B)>0?A.length-B:0,B).join(".")})(2);/*publish time:2011-10-12 10:43:28*/
MFP.add("cat-direct-promo",function(E){var A=KISSY,C=A.DOM,D=A.UA.ie==6?+new Date:"20110923";function B(){C.html(".j_ChaoShiTrigger",'<a class="j_CateNavLink" href="http://chaoshi.tmall.com/" hidefocus="true">\u7f51\u7edc\u8d85\u5e02<s class="chaoshi"></s></a>');C.show(".j_ChaoShiTrigger");A.IO.get("http://www.tmall.com/go/rgn/mfp2011q3/chaoshi-cat.php?t="+D,function(F){C.html("#J_ChaoShiCon",F);setTimeout(function(){new MFP.Category("#J_CsCategory",{viewId:"J_CsPopSubCat",viewCl:"pop-subcategory",subViews:"div.J_SubViewItem",triggers:"li.J_MenuItem",view:"#J_CsPopSubCat",dataUrl:"http://www.tmall.com/go/rgn/mfp2011q3/chaoshi-cat-asyn.php"})},100)})}E.CatDirectPromo=B});/*pub-2|2011-10-31 10:23:54*/MFP.add("direct-promo",function(a){function n(a,c){var d=a.length,e;while(d--)e=a[d],b.inArray(e,c)||c.push(e);return c}var b=KISSY,c="http://delta.taobao.com/home/delivery/AllContentByPage.do?resourceIds=",d="J_DirectPromo",e="J_DirectPromo_",f="J_DirectPromoFloatBox",g="__content_results",h=/^https?:\/\/\S+$/i,i=/^https?:\/\/\S+(png|jpg|gif)$/i,j=window,k=!1,l={},m=[];a.DirectPromo={init:function(a){var c=b.query("."+d),e=[],f;if(!c||c.length===0)return;b.each(c,function(a){f=a.getAttribute("data-resid"),f&&(e.push(f),l[f]=a)}),a&&(e=n(a,e)),this.request(e)},request:function(a,d,e){var f=this,h=c+a.join(",")+"&t="+ +(new Date);b.getScript(h,function(){var a=j[g],b,c=0;if(!a||a.length===0)return;if(d&&d>0)for(;c<d;c++)b=a[c].content,b&&i.test(b)&&((new Image).src=b);m=m.concat(a),f.render(e)})},render:function(a){var c=m.length,d,g,h;while(c--){d=m[c],h=d.id;if(!l[h]){g=b.get("#"+(h===a?f:e+h));if(g)l[h]=g;else continue}m.splice(c,1),this._fill(d)}},detect:function(a){var c=100,d=50,g=0,h=this;if(k)return;k=!0,function(){var i,j;b.each(m,function(c,d){i=c.id,l[i]||(j=b.get("#"+(i===a?f:e+i)),j&&(l[i]=j));if(l[i])return h._fill(m.splice(d,1)[0]),!1}),m.length>0&&++g<d?setTimeout(arguments.callee,c):k=!1}()},_fill:function(a){var b=l[a.id],c=a.content,d=a.link,e;if(!b||!c)return;if(i.test(c))e='<img src="'+c+'" />';else{if(c=="http://tms.tms.tms")return;if(h.test(c))e='<iframe src="'+c+'" scrolling="no" frameborder="0" width="330" height="200"></iframe>',d="";else{if(a.id==303&&c=="shanghai"){try{new MFP.CatDirectPromo}catch(f){}return}e=c}}b.innerHTML=d?'<a target="_blank" href="'+d+'">'+e+"</a>":e}}});/*publish time:2011-08-03 14:34:42*/
MFP.add("ecpm",function(M){var S=KISSY,win=window,doc=document;M.ECPM={getClientInfo:function(maxLen){var ci=[],cr="",ml=maxLen||800;try{ci=ci.concat(getDynamic(),getStatic());cr=ci.join("&").substr(0,ml)}catch(err){}return cr},getRequest:function(pids,callback){return"http://t.alimama.com/alimama.php?callback="+callback+"&i="+pids+"&t=k&"+this.getClientInfo()},requestAd:function(pids,callback){var os=doc.createElement("script");os.id="ecpm_ad-"+pids;os.async=true;os.src=this.getRequest(pids,callback);doc.getElementsByTagName("HEAD")[0].appendChild(os)},getHTML:function(o,width,height){if(o.html){return o.html}if(o.adboardtype=="txtlink"){o.html='<a href="'+o.clickurl+'" target="_blank">'+o.title+"</a>";return o.html}var r=o.imgsrc.split("?")[0];if(typeof height==="undefined"){height="auto"}if(typeof width==="undefined"){width="auto"}if(r.lastIndexOf(".swf")==r.length-4){var flashvars="swfsrc="+encodeURIComponent(o.imgsrc)+"&clickTAG="+encodeURIComponent(o.clickurl);o.html='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="'+width+'" height="'+height+'" align="middle"><param name="allowScriptAccess" value="never" /><param name="FlashVars" value="'+flashvars+'" /><param name="movie" value="http://a.alimama.cn/js/wrapper.swf" /><param name="wmode" value="transparent" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" /><embed src="http://a.alimama.cn/js/wrapper.swf" quality="high" bgcolor="#ffffff" width="'+width+'" height="'+height+'" FlashVars="'+flashvars+'" align="middle" allowScriptAccess="never" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>'}else{o.html='<a href="'+o.clickurl+'" target="_blank"><img src="'+o.imgsrc+'" width="'+width+'" height="'+height+'" border="0"/></a>'}return o.html},init:function(hookCls,callbackName){hookCls=hookCls||"J_ECPM";callbackName=callbackName||"g_ecpm_callback";var hooks=S.query("."+hookCls),data={},i,len=hooks.length,pid,pids=[],param,self=this;for(i=0;i<len;i++){param=S.unparam(hooks[i].getAttribute("data"));pid=param.pid;hooks[i].id=pid;data[pid]=param;pids.push(pid)}self.requestAd(pids.join(","),callbackName);win[callbackName]=function(o){try{var item,i,len=o.length,hook,pid;for(i=0;i<len;i++){item=o[i];pid=item.pid;hook=S.get("#"+pid);if(hook){hook.innerHTML=self.getHTML(item.ads[0],data[pid].width,data[pid].height)}}}catch(ex){}}}};function getDynamic(){var cid=[],bd=doc.body,cpr=4973,i;var cg="",cna="",cks=doc.cookie.split(";"),cre=/(^\s*)|(\s*$)/g,cgn,cgm;for(i=0;i<cks.length;i++){cks[i]=cks[i].replace(cre,"");if(cks[i].indexOf("cna=")===0){cna=cks[i].substr(4,24);break}}for(i=1;i<=32;i++){cgn=Math.floor(Math.random()*16);if(cna&&i<=cna.length){cgm=cna.charCodeAt(i-1);cgn=(cgn+cgm)%16}cg+=cgn.toString(16)}cid.push("cg="+cg);cid.push("ac="+Math.floor(Math.random()*10000));var ct=0,cn=16,cs=0,cx,cy,ck,cv;for(i=1;i<=cn;i++){cx=Math.random();cy=Math.random();if((Math.pow(cx,2)+Math.pow(cy,2))<=1){ct++}if(i<=12){cs+=cx}}ck="pr"+String.fromCharCode(97+ct);cv=(Math.round(cs*cpr)|((bd?bd.clientWidth:0)<<16));cid.push(ck+"="+cv);cid.push("cas="+ck);cid.push("cbh="+(bd?bd.clientHeight:-1));cid.push("cbw="+(bd?bd.clientWidth:-1));cid.push("sx=0");cid.push("sy=0");return cid}function getStatic(){var cis=[],nav=navigator;var cs=win.screen,cx=0,cy=0,cah=0,caw=0,ccd=0;try{cx=cs.width;cy=cs.height;cah=cs.availHeight;caw=cs.availWidth;ccd=cs.colorDepth}catch(err){}cis.push("re="+cx+"x"+cy);cis.push("cah="+cah);cis.push("caw="+caw);cis.push("ccd="+ccd);cis.push("ctz="+(-((new Date()).getTimezoneOffset()/60)));cis.push("chl="+history.length);cis.push("cja="+(nav.javaEnabled()?"1":"0"));cis.push("cpl="+(nav.plugins?nav.plugins.length:0));cis.push("cmm="+(nav.mimeTypes?nav.mimeTypes.length:0));var cv="-1";if(nav.plugins&&nav.plugins.length){for(var i=0;i<nav.plugins.length;i++){if(nav.plugins[i].name.indexOf("Shockwave Flash")!=-1){cv=nav.plugins[i].description.split("Shockwave Flash ")[1];break}}}else{if(win.ActiveXObject){for(var j=10;j>=2;j--){try{var cf=eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+i+"');");if(cf){cv=i+".0";break}}catch(err){}}}}if(cv!="-1"){cv=cv.substring(0,cv.indexOf(".")+2)}cis.push("cf="+cv);var cu="";if((self.location!=top.location)&&doc.referrer){cu=doc.referrer}else{cu=doc.location.href}var cr=doc.referrer||"";cis.push("u="+encodeURIComponent(cu));cis.push("r="+encodeURIComponent(cr));getStatic=function(){return cis};return cis}});/*publish time:2011-08-03 14:34:42*/
MFP.add("category",function(A){A.THeader=function(){var G=KISSY,U=G.DOM,W=G.Event,X=document,V="active",J=G.UA.ie,M=navigator.appVersion.indexOf("Mac")>-1,L,K,F,I,D,H,B=['\u6309<span class="'+(M?"cmd":"ctrl")+' key">Ctrl</span>+<span class="enter key">Enter</span>\u53ef\u76f4\u63a5\u641c\u7d22\u6dd8\u5b9d\u5546\u57ce\u5e97\u94fa','\u6309 <span class="tab key">tab</span> \u5207\u6362\u641c\u7d22\u8303\u56f4'],Q=B[Math.floor(Math.random()*B.length)];function P(S){if("A"==S.tagName){F.setAttribute("value",S.getAttribute("data-type"));D.setAttribute("action",S.href||"http://list.tmall.com/search_dispatcher.htm");G.each(L.getElementsByTagName("A"),function(Y){U.removeClass(Y,V)});U.addClass(S,V);I.innerHTML=S.getAttribute("data-label");E();K.focus();if(J){K.value=K.value}}}function E(){}function T(){var Y,a=Q,c,S=/(\?|\&)area=b2c(\&|$)/;function Z(){return false}function d(){H.query="";H._dataCache={};H.detach("beforeStart",Z)}function b(){var e=document.createElement("div");e.className="mall-search-tip";e.innerHTML=a;return e}if(G.Suggest&&G.Suggest.version>=1.1){H=new G.Suggest(K,"http://suggest.taobao.com/sug?area=b2c&code=utf-8",{containerCls:"mall-suggest-container",resultFormat:"",offset:0});Y=H.container;E=function(){var e=F.value;if("p"==e||""==e){d();a=Q;if(H.dataSource.search(S)<0){H.dataSource=H.dataSource.replace(/\?([^&]*)(&|$)/,"?area=b2c&$1$2")}}else{if("taobao"==e){d();a=B[1];var f=H.dataSource.replace(S,"$1");H.dataSource=f}else{H.stop();H.hide();H.on("beforeStart",Z)}}};H.on("updateFooter",function(e){if(U.text(H.content)){H.footer.appendChild(b())}})}}function R(Z,a){function S(b,c){var d=document.createElement("input");d.setAttribute("type","hidden");d.setAttribute("name",b);d.setAttribute("value",c);return d}for(var Y in a){if(!Z[Y]){Z.appendChild(S(Y,a[Y]))}else{Z[Y].value=a[Y]}}}function O(c,b){var Z,S,a,Y=U.children(b);for(Z=0,S=Y.length;Z<S;){a=Y[Z++];if(a.getAttribute("data-type")==c){return a.href}}}function C(){setTimeout(function(){F.value=G.get("."+V,L).getAttribute("data-type");if(K.value==""){I.style.visibility="visible"}},100)}function N(c){function S(e){return e.offsetHeight>0&&c.offsetWidth>0}function Y(g){var f={A:1,AREA:1,BUTTON:1,INPUT:1,OBJECT:1,SELECT:1,TEXTAREA:1},e;return S(g)&&(f[g.nodeName]||((e=g.getAttributeNode("tabIndex"))&&e.specified&&e.nodeValue>-1))}var a,Z,b,d=c.parentNode;while(c=U.prev(c)){a=c.getElementsByTagName("*");Z=a.length;while(Z>0){if((b=a[--Z])&&Y(b)){return b}}if(Y(c)){return c}}return d&&N(d)}return{init:function(a){var Y="",c,S=false,Z=false,b;L=G.get("#J_SelectTypes");K=G.get("#mq");F=G.get("#J_Type");I=U.prev(K);D=K.form;b=O("s",L);C();if(J&&J<8){c=U.children(L,function(d){d.hideFocus=true;return true})}else{c=U.children(L)}W.on(K,"focus",function(){I.style.color="#ccc"});W.on(K,"blur",function(d){if(this.value==""&&!S){I.style.visibility="visible";I.style.color="#666"}S=false});W.on(L,"mousedown",function(){S=true});W.on(L,"click",function(d){P(d.target);d.halt()});W.on(c,"focus",function(d){K.focus();d.halt()});W.on(K,"keydown",function(g){var f=g.keyCode,d;Y=K.value;if(f==9){Z=true;d=G.get("."+V,L);if(g.shiftKey){if(el=U.prev(d)){P(el)}else{el=N(D.parentNode);el&&el.focus()}}else{if(el=U.next(d)){P(el)}else{U.next(K).focus()}}g.halt()}else{if((g.ctrlKey||g.metaKey)&&f==13){F.setAttribute("value","s");D.setAttribute("action",b);D.submit();g.halt()}else{if(f==8||f==46){I.style.visibility="hidden"}else{if(f<13||(f>41&&f<112)||f>123){I.style.visibility="hidden"}}}}});if(G.UA.opera){W.on(K,"keypress",function(d){if(Z){Z=false;d.halt()}})}W.on(K,"keyup",function(f){var d=f.keyCode;if(this.value==""){if(Y!=""||!(d==8||d==46)){I.style.visibility="visible"}}});W.on(K,"mouseover",function(d){if(this.value!=""){I.style.visibility="hidden"}});T();E();a&&K.focus()}}}()});/*publish time:2011-09-06 14:47:57*/
MFP.add("slide",function(E){var D=KISSY,I=D.DOM,H=D.Event,F=document,J="J_TsSlide",C="maskLayer",G="J_slideBanner",B="tsSlide-trigger";maskItems=D.all("."+G),defaultConfig={contentCls:"tsSlide-list",navCls:"tsSlide-trigger",activeTriggerCls:"selected",effect:"scrollx",easing:"easeOutStrong",lazyDataType:"img-src",autoplay:true};function A(){var K=this;if(!(this instanceof A)){return new A()}K._init()}D.augment(A,{_init:function(){var L=this,K=new D.Slide("#"+J,defaultConfig);L.initMaskEvent();L.setRoundrect()},createMask:function(P){var L=I.children(P,"a")[0],Q=I.children(L,"."+C)[0];if(!Q){var M=I.children(L,"img")[0],O=I.height(M),K=I.width(M),N={css:{top:"0",left:"0",width:K+"px",height:O+"px",position:"absolute",background:"#000",opacity:"0",cursor:"pointer",filter:"alpha(opacity=0)"},"class":"maskLayer"},Q=I.create("<div>",N);I.append(Q,L)}return Q},initMaskEvent:function(){var K=this;D.each(maskItems,function(M){var L={fadeIn:[],fadeOut:[]};H.on(M,"mouseenter",function(){var Q=I.parent(M),O=I.children(Q,"."+G);if(O.length<=1){return }D.each(O,function(S){var T=K.createMask(S);I.removeClass(S,"hover");I.css(T,"opacity",0)});I.addClass(M,"hover");for(var N=0;N<O.length;N++){var P=O[N],R=K.createMask(P);if(!I.hasClass(P,"hover")){I.css(R,"opacity",0.3)}}});H.on(M,"mouseleave",function(){var O=I.parent(M),N=I.children(O,"."+G);if(N.length<=1){return }D.each(N,function(P){var Q=K.createMask(P);I.css(Q,"opacity",0)})})})},setRoundrect:function(){var M=F.documentMode||D.UA.ie;if(M<9){if(!F.namespaces.v){F.namespaces.add("v","urn:schemas-microsoft-com:vml")}var L=F.createStyleSheet();L.addRule("v\\:roundrect","behavior: url(#default#VML);display:inline-block;");var K=D.one("."+B).all("li");D.each(K,function(P){var N=I.create("<s>"),O=F.createElement("v:roundrect");D.mix(O,{arcsize:30,strokecolor:"#000",strokeweight:"1px",stroked:false,fillcolor:"#000"});I.css(P,{background:"none"});I.css(N,{position:"absolute",top:"-2px",left:"0",zIndex:"-1"});I.css(O,{width:"30px",height:"30px",antialias:true,zIndex:"-1"});I.append(O,N);I.append(N,P)})}}});E.Slide=A});/*publish time:2011-09-06 14:47:57*/
MFP.add("category",function(I){var D=KISSY,E=D.DOM,O=D.Event,N=document,F="selected",A="hidden",J="DIV",P="mouseenter",B="mouseleave",H="click",C={hideDelay:0.2,view:null,viewCl:"",subViews:null,triggers:null,dataUrl:null};function G(M,R){var Q=this;if(!(Q instanceof G)){return new G(M,R)}Q.container=D.get(M);Q.config=D.merge(C,R||{});Q.config.viewer=document.getElementById(R.viewId);Q.triggers=E.query(R.triggers,Q.container);Q._init()}function K(M,R){for(var Q=0;Q<M.length;Q=Q+1){if(M[Q]===R){return Q}}return -1}var L={_msxmls:["Microsoft.XMLHTTP","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP"],init:function(M,Q){this.timer_timeout=null;this.timer_state_watch=null;this.url=M;this.obj={};this.createXhrObject();this.send();this.timeout=100;this.success=Q;this.fail=function(){};this.abort=function(){}},createXhrObject:function(){var R,M;try{this.obj=new XMLHttpRequest()}catch(Q){for(M=0;M<this._msxmls.length;++M){try{this.obj=new ActiveXObject(this._msxmls[M]);break}catch(S){}}}finally{return R}},send:function(){this.obj.open("GET",this.url,true);this.beginStateWatch();this.obj.send(null)},beginStateWatch:function(){var Q=this.obj;var M=this;if(this.timeout){this.timer_timeout=setTimeout(function(){Q.abort();clearTimeout(M.timer_timeout);M.timer_timeout=null;M.onAbort()},this.timeout*1000)}this.timer_state_watch=setInterval((function(R){return function(){R.handleReadyState()}})(this),10)},handleReadyState:function(){var M=this.obj;if(M.readyState===4&&M.status==200){if(this.timer_timeout){clearTimeout(this.timer_timeout);this.timer_timeout=null}clearInterval(this.timer_state_watch);this.timer_state_watch=null;this.onSuccess()}else{if(M.readyState===4){this.onFail()}}},onSuccess:function(){this.success(this.obj)},onAbort:function(){this.abort(this.obj)},onFail:function(){this.fail(this.obj)}};D.mix(G.prototype,{switchTo:function(M){var R=this,S=R.triggers,Q=R.subViews;D.each(S,function(T){E.removeClass(T,F)});E.addClass(R.triggers[M],F);D.each(Q,function(T){E.addClass(T,A)});E.removeClass(Q[M],A)},show:function(){var M=this;M.container.style.zIndex=20;E.removeClass(M.viewer,A);M.resetPostion()},resetPostion:function(){var S=this.triggers[this.config.idx],c=E.offset(S),V=E.offset(this.container),Y=E.height(S),T=E.height(this.viewer),a=E.width(S),W=E.viewportHeight(),Q=E.scrollTop(),R=W-T-(c.top-Q),X=Math.abs(c.top-Q-V.top),b=W-(c.top-Q),M=c.top-V.top;if(R<=0){R=Math.abs(R);var Z=20;if(b>Y){var U=b-Y;if(U>Z){M=M-R-Z+7}else{M=M-R}}else{M=M-R+Z+b+20}}if(M<30){M=30}this.viewer.style.top=M+"px"},hide:function(){var M=this,Q=M.triggers;M.container.style.zIndex=15;D.each(Q,function(R){E.removeClass(R,F)});E.addClass(M.viewer,A)},getViewerData:function(Q){var M=this;if(M.viewer=D.get("#"+M.config.viewId)){M._initSubView();if("hidden"==M.status){return }M.switchTo(M.config.idx);M.show();M.config.getting=true}if(M.config.getting){return }L.init(Q,function(R){M.config.viewer=R.responseText;M._initView();if("hidden"==M.status){return }I.DirectPromo.render();M.switchTo(M.config.idx);M.show()});M.config.getting=true},_init:function(){var Q=this,M=Q.config;D.each(Q.triggers,function(R){O.on(R,P,function(T){T.halt();var S=K(Q.triggers,R);Q.config.idx=S;Q.status="visible";if(!Q.viewer){if(!Q.config.viewer){Q.getViewerData(Q.config.dataUrl);return }Q._initView()}if(Q.showTimer){clearTimeout(Q.showTimer)}Q.showTimer=setTimeout(function(){if(!Q.hideTimer){Q.switchTo(S);Q.show()}},Q.config.hideDelay*1000);Q.hideTimer=clearTimeout(Q.hideTimer)});O.on(R,B,function(S){Q.status="hidden";if(Q.showTimer){clearTimeout(Q.showTimer)}if(Q.hideTimer){return }Q.hideTimer=setTimeout(function(){Q.hide();Q.hideTimer=clearTimeout(Q.hideTimer)},Q.config.hideDelay*1000)})})},_initView:function(){var Q=this,M=Q.config,R=D.DOM;if(!Q.viewer){if(!(Q.viewer=D.get("#"+Q.config.viewId))){Q.viewer=N.createElement(J);R.attr(Q.viewer,"id",M.viewId);R.addClass(Q.viewer,"hidden "+M.viewCl);Q.viewer.innerHTML=M.viewer;Q.container.appendChild(Q.viewer)}Q._initSubView()}},_initSubView:function(){var M=this,Q=0;M.subViews=E.query(M.config.subViews,M.container);D.each(M.subViews,function(U){var T=E.query("dl.J_HotMenuItem",U),R=E.query("div.J_HotView",U),S;O.on(U,P,function(){M.hideTimer=clearTimeout(M.hideTimer);M.selectedSubView=this});O.on(U,B,function(){M.hideTimer=setTimeout(function(){M.hide();M.hideTimer=clearTimeout(M.hideTimer)},M.config.hideDelay*1000)})})}});I.Category=G});/*publish time:2011-09-06 15:39:22*/
var S=KISSY,DOM=S.DOM,Event=S.Event,doc=document;function TmallMask(A){this.config={content:A.contentID,itemsCls:A.itemsCls||"j_MaskItem",maskCls:A.maskCls||"maskLayer",maskColor:A.maskColor||"#000",activeOpacity:A.activeOpacity||0.3,defaultOpacity:A.normalOpacity||0,speed:A.speed||0.2};this._init()}TmallMask.prototype={_init:function(){var A=this,B=S.all("#"+A.config.content+" ."+A.config.itemsCls);S.each(B,function(D){var C={};Event.on(D,"mouseenter",function(){var H=DOM.parent(D),F=DOM.children(H,"."+A.config.itemsCls);if(F.length<=1){return }S.each(F,function(J){var K=A.createMask(J);DOM.removeClass(J,"hover");DOM.css(K,"opacity",0)});DOM.addClass(D,"hover");for(var E=0;E<F.length;E++){var G=F[E],I=A.createMask(G);if(!DOM.hasClass(G,"hover")){DOM.css(I,"opacity",0.3)}}});Event.on(D,"mouseleave",function(){var F=DOM.parent(D),E=DOM.children(F,"."+A.config.itemsCls);if(E.length<=1){return }S.each(E,function(G){var H=A.createMask(G);DOM.css(H,"opacity",0)})})})},createMask:function(F){var C=this;var G=DOM.children(F,"."+this.config.maskCls)[0];if(!G){var B=DOM.children(F,"img")[0],E=DOM.height(B),A=DOM.width(B),D={css:{top:"0",left:"0",width:A+"px",height:E+"px",position:"absolute",background:C.config.maskColor,opacity:C.config.defaultOpacity,cursor:"pointer",filter:"alpha(opacity="+C.config.defaultOpacity+")"},"class":"maskLayer"},G=DOM.create("<div>",D);DOM.append(G,F)}return G}};/*publish time:2011-08-30 14:04:07*/
(function(){var C=KISSY,K=C.DOM,J=C.Event,G=MFP,I=document,E="selected",H="click",B="scrolly",D,F,A=[function(){G.THeader.init(1)},function(){G.DirectPromo.init(["239","240"])},function(){G.ECPM.init()},function(){new C.DataLazyload({mod:"manual",diff:100})},function(){new G.Category("#J_AllCategory",{viewId:"J_AllPopSubCat",viewCl:"pop-subcategory",subViews:"div.J_SubViewItem",triggers:"li.J_MenuItem",dataUrl:"http://www.tmall.com/go/rgn/mfp2011q3/all-cat-asyn.php"});new G.Category("#J_3cCategory",{viewId:"J_3cPopSubCat",viewCl:"pop-subcategory",subViews:"div.J_SubViewItem",triggers:"li.J_MenuItem",dataUrl:"http://www.tmall.com/go/rgn/mfp2011q3/3c-cat-asyn.php"});new G.Category("#J_BeautyCategory",{viewId:"J_BeautyPopSubCat",viewCl:"pop-subcategory",subViews:"div.J_SubViewItem",triggers:"li.J_MenuItem",dataUrl:"http://www.tmall.com/go/rgn/mfp2011q3/beauty-cat-asyn.php"});new G.Category("#J_JiaCategory",{viewId:"J_JiaPopSubCat",viewCl:"pop-subcategory",subViews:"div.J_SubViewItem",triggers:"li.J_MenuItem",dataUrl:"http://www.tmall.com/go/rgn/mfp2011q3/jia-cat-asyn.php"})},function(){C.all(".j_CateNavLink").on("mouseover",function(O){K.addClass(".pop-subcategory","hidden")});var M=new C.Tabs("#J_CategoryTab",{contentCls:"tsCategory-con",navCls:"tsCategory-nav",lazyDataType:"img-src",activeTriggerCls:E});if(!!C.get("#J_SaleProSlide")){var N=new C.Carousel("#J_SaleProSlide",{contentCls:"salePro-slideCon",effect:"scrollx",prevBtnCls:"sp-prevPage",nextBtnCls:"sp-nextPage",duration:0.3,lazyDataType:"img-src",interval:10,hasTriggers:false,circular:true,autoplay:true,easing:"easyOutStrong"})}var L=new C.Tabs("#J_MallNotice",{contentCls:"mallNotice-con",navCls:"mallNotice-hd",activeTriggerCls:E})},function(){new G.Slide()}];for(D=0,F=A.length;D<F;++D){A[D]()}})();