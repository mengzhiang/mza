/*
Copyright 2010, KISSY UI Library v1.1.5
MIT Licensed
build time: Sep 19 17:41
*/
KISSY.add("anim-easing",function(d){var s=Math,n=s.PI,i=s.pow,q=s.sin,l=1.70158,m={easeNone:function(a){return a},easeIn:function(a){return a*a},easeOut:function(a){return(2-a)*a},easeBoth:function(a){return(a*=2)<1?0.5*a*a:0.5*(1- --a*(a-2))},easeInStrong:function(a){return a*a*a*a},easeOutStrong:function(a){return 1- --a*a*a*a},easeBothStrong:function(a){return(a*=2)<1?0.5*a*a*a*a:0.5*(2-(a-=2)*a*a*a)},elasticIn:function(a){if(a===0||a===1)return a;return-(i(2,10*(a-=1))*q((a-0.075)*2*n/0.3))},
elasticOut:function(a){if(a===0||a===1)return a;return i(2,-10*a)*q((a-0.075)*2*n/0.3)+1},elasticBoth:function(a){if(a===0||(a*=2)===2)return a;if(a<1)return-0.5*i(2,10*(a-=1))*q((a-0.1125)*2*n/0.45);return i(2,-10*(a-=1))*q((a-0.1125)*2*n/0.45)*0.5+1},backIn:function(a){if(a===1)a-=0.0010;return a*a*((l+1)*a-l)},backOut:function(a){return(a-=1)*a*((l+1)*a+l)+1},backBoth:function(a){if((a*=2)<1)return 0.5*a*a*(((l*=1.525)+1)*a-l);return 0.5*((a-=2)*a*(((l*=1.525)+1)*a+l)+2)},bounceIn:function(a){return 1-
m.bounceOut(1-a)},bounceOut:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375},bounceBoth:function(a){if(a<0.5)return m.bounceIn(a*2)*0.5;return m.bounceOut(a*2-1)*0.5+0.5}};d.Easing=m});
KISSY.add("anim",function(d,s){function n(e,b,f,g,h){if(e=d.get(e)){if(!(this instanceof n))return new n(e,b,f,g,h);var c=d.isPlainObject(f);b=b;this.domEl=e;if(d.isPlainObject(b))b=d.param(b,";").replace(/=/g,":");var j={},k=o.length,p;t.innerHTML='<div style="'+b+'"></div>';for(e=t.firstChild.style;k--;)if(p=e[o[k]])j[o[k]]=i(p);this.props=j;this.targetStyle=b;if(c)c=d.merge(w,f);else{c=d.clone(w);f&&(c.duration=y(f,10)||1);d.isString(g)&&(g=a[g]);d.isFunction(g)&&(c.easing=g);d.isFunction(h)&&
(c.complete=h)}this.config=c;d.isFunction(h)&&this.on(r,h)}}function i(e){var b=y(e);e=(e+"").replace(/^[-\d\.]+/,"");return isNaN(b)?{v:e,u:"",f:l}:{v:b,u:e,f:q}}function q(e,b,f){return(e+(b-e)*f).toFixed(3)}function l(e,b,f){for(var g=2,h,c,j=[],k=[];h=3,c=arguments[g-1],g--;)if(c.substr(0,4)==="rgb(")for(c=c.match(/\d+/g);h--;)j.push(~~c[h]);else if(c.substr(0,1)==="#"){if(c.length===4)c="#"+c.substr(1,1)+c.substr(1,1)+c.substr(2,1)+c.substr(2,1)+c.substr(3,1)+c.substr(3,1);for(;h--;)j.push(parseInt(c.substr(1+
h*2,2),16))}else return b;for(;h--;){g=~~(j[h+3]+(j[h]-j[h+3])*f);k.push(g<0?0:g>255?255:g)}return"rgb("+k.join(",")+")"}var m=d.DOM,a=d.Easing,y=parseFloat,t=m.create("<div>"),o="backgroundColor borderBottomColor borderBottomWidth borderBottomStyle borderLeftColor borderLeftWidth borderLeftStyle borderRightColor borderRightWidth borderRightStyle borderSpacing borderTopColor borderTopWidth borderTopStyle bottom color font fontFamily fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" "),
r="complete",w={duration:1,easing:a.easeNone};d.augment(n,d.EventTarget,{run:function(){var e=this,b=e.config,f=e.domEl,g=b.duration*1E3,h=b.easing,c=d.now(),j=c+g,k=e.props,p={},u;for(u in k)p[u]=i(m.css(f,u));if(e.fire("start")!==false){e.stop();e.timer=d.later(b=function(){var z=d.now(),B=z>j?1:(z-c)/g,x,v,A;for(u in k){x=p[u];v=k[u];if(v.v==0)v.u=x.u;if(x.u!==v.u)x.v=0;m.css(f,u,v.f(x.v,v.v,h(B))+v.u)}if(e.fire("step")===false||(A=z>j)){e.stop();A&&e.fire(r)}},13,true);b();return e}},stop:function(e){var b=
this.domEl,f=this.targetStyle;if(this.timer){this.timer.cancel();this.timer=s}if(e){d.UA.ie&&f.indexOf("opacity")>-1&&m.css(b,"opacity",this.props.opacity.v);b.style.cssText+=";"+f;this.fire(r)}return this}});d.Anim=n});
KISSY.add("anim-node-plugin",function(d,s){function n(b,f,g,h,c){if(f==="toggle")f=(c=i.css(b,l)===m?1:0)?"show":"hide";if(c)i.css(b,l,i.data(b,l)||"");var j={};d.each(e[f],function(k){if(k===a)i.css(b,a,y);else if(k===t){j.opacity=c?1:0;c&&i.css(b,t,0)}else if(k===o){j.height=c?i.css(b,o)||b.naturalHeight:0;c&&i.css(b,o,0)}else if(k===r){j.width=c?i.css(b,r)||b.naturalWidth:0;c&&i.css(b,r,0)}});(new d.Anim(b,j,g,"easeOut",function(){if(!c){var k=b.style,p=k[l];if(p!==m){p&&i.data(b,l,p);k[l]=m}i.css(b,
{height:w,width:w,overflow:w,opacity:1})}h&&d.isFunction(h)&&h()})).run()}var i=d.DOM,q=d.Anim,l="display",m="none",a="overflow",y="hidden",t="opacity",o="height",r="width",w="auto",e={show:[a,t,o,r],fade:[t],slide:[a,o]};d.each([d.Node.prototype,d.NodeList.prototype],function(b){b.animate=function(){var f=d.makeArray(arguments);d.each(this,function(g){q.apply(s,[g].concat(f)).run()});return this};d.each({show:["show",1],hide:["hide",0],toggle:["toggle"],fadeIn:["fade",1],fadeOut:["fade",0],slideDown:["slide",
1],slideUp:["slide",0]},function(f,g){b[g]=function(h,c){i[g]&&arguments.length===0?i[g](this):d.each(this,function(j){n(j,f[0],h,c,f[1])});return this}})})});