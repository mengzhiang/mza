Jet().$package(function(N){(function(){var k={targetFrame:void 0,exportInstaller:false,useNative:true,useInnerText:true},i;if(window.jsxpath)i=window.jsxpath;else{var q=document.getElementsByTagName("script");q=q[q.length-1].src;i={};if(q=q.match(/\?(.*)$/)){q=q[1].split("&");for(var w=0,H=q.length;w<H;w++){var t=q[w].split("="),L=t[0];t=t[1];if(t!=void 0)if(t=="false"||/^-?\d+$/.test(t))t=eval(t);i[L]=t}}}for(var I in k)I in i||(i[I]=k[I]);i.hasNative=!!(document.implementation&&document.implementation.hasFeature&&
document.implementation.hasFeature("XPath",null));if(!(i.hasNative&&i.useNative&&!i.exportInstaller)){var n,u,v,A,B,h,s,m,C,x,o,y,z,E,J=new (function(){var a=navigator.userAgent;if(RegExp==void 0){if(a.indexOf("Opera")>=0)this.opera=true;else if(a.indexOf("Netscape")>=0)this.netscape=true;else if(a.indexOf("Mozilla/")==0)this.mozilla=true;else this.unknown=true;if(a.indexOf("Gecko/")>=0)this.gecko=true;if(a.indexOf("Win")>=0)this.windows=true;else if(a.indexOf("Mac")>=0)this.mac=true;else if(a.indexOf("Linux")>=
0)this.linux=true;else if(a.indexOf("BSD")>=0)this.bsd=true;else if(a.indexOf("SunOS")>=0)this.sunos=true}else{if(/AppleWebKit\/(\d+(?:\.\d+)*)/.test(a)){this.applewebkit=RegExp.$1;if(RegExp.$1.charAt(0)==4)this.applewebkit2=true;else this.applewebkit3=true}else if(typeof Components=="object"&&(/Gecko\/(\d{8})/.test(a)||navigator.product=="Gecko"&&/^(\d{8})$/.test(navigator.productSub)))this.gecko=RegExp.$1;if(typeof opera=="object"&&typeof opera.version=="function"){this.opera=opera.version();this["opera"+
this.opera[0]+this.opera[2]]=true}else if(typeof opera=="object"&&/Opera[\/ ](\d+\.\d+)/.test(a))this.opera=RegExp.$1;else if(!this.ie)if(/Safari\/(\d+(?:\.\d+)*)/.test(a))this.safari=RegExp.$1;else if(/NetFront\/(\d+(?:\.\d+)*)/.test(a))this.netfront=RegExp.$1;else if(/Konqueror\/(\d+(?:\.\d+)*)/.test(a))this.konqueror=RegExp.$1;else if(a.indexOf("(compatible;")<0&&/^Mozilla\/(\d+\.\d+)/.test(a)){this.mozilla=RegExp.$1;if(/\([^(]*rv:(\d+(?:\.\d+)*).*?\)/.test(a))this.mozillarv=RegExp.$1;if(/Firefox\/(\d+(?:\.\d+)*)/.test(a))this.firefox=
RegExp.$1;else if(/Netscape\d?\/(\d+(?:\.\d+)*)/.test(a))this.netscape=RegExp.$1}else this.unknown=true;if(a.indexOf("Win 9x 4.90")>=0)this.windows="ME";else if(/Win(?:dows)? ?(NT ?(\d+\.\d+)?|\d+|ME|Vista|XP)/.test(a)){this.windows=RegExp.$1;if(RegExp.$2)this.winnt=RegExp.$2;else switch(RegExp.$1){case "2000":this.winnt="5.0";break;case "XP":this.winnt="5.1";break;case "Vista":this.winnt="6.0";break}}else if(a.indexOf("Mac")>=0)this.mac=true;else if(a.indexOf("Linux")>=0)this.linux=true;else if(/(\w*BSD)/.test(a))this.bsd=
RegExp.$1;else if(a.indexOf("SunOS")>=0)this.sunos=true}}),F=function(a){var b=F.prototype;a=a.match(b.regs.token);for(var c=0,d=a.length;c<d;c++)b.regs.strip.test(a[c])&&a.splice(c,1);for(var e in b)a[e]=b[e];a.index=0;return a};F.prototype.regs={token:/\$?(?:(?![0-9-])[\w-]+:)?(?![0-9-])[\w-]+|\/\/|\.\.|::|\d+(?:\.\d*)?|\.\d+|"[^"]*"|'[^']*'|[!<>]=|(?![0-9-])[\w-]+:\*|\s+|./g,strip:/^\s/};F.prototype.peek=function(a){return this[this.index+(a||0)]};F.prototype.next=function(){return this[this.index++]};
F.prototype.back=function(){this.index--};F.prototype.empty=function(){return this.length<=this.index};var D=function(a,b,c){this.node=a;this.position=b||1;this.last=c||1};k=function(){};k.prototype.number=function(a){a=this.evaluate(a);if(a.isNodeSet)return a.number();return+a};k.prototype.string=function(a){a=this.evaluate(a);if(a.isNodeSet)return a.string();return""+a};k.prototype.bool=function(a){a=this.evaluate(a);if(a.isNodeSet)return a.bool();return!!a};var G=function(){};G.parsePredicates=
function(a,b){for(;a.peek()=="[";){a.next();if(a.empty())throw Error("missing predicate expr");var c=n.parse(a);b.predicate(c);if(a.empty())throw Error("unclosed predicate expr");if(a.next()!="]"){a.back();throw Error("bad token: "+a.next());}}};G.prototyps=new k;G.prototype.evaluatePredicates=function(a,b){var c,d,e,f;f=this.reverse;c=this.predicates;a.sort();for(var g=b||0,j=c.length;g<j;g++){b=c[g];var l=[];d=a.list();for(var p=0,r=d.length;p<r;p++){e=f?r-p:p+1;exrs=b.evaluate(new D(d[p],e,r));
switch(typeof exrs){case "number":exrs=e==exrs;break;case "string":exrs=!!exrs;break;case "object":exrs=exrs.bool();break}exrs||l.push(p)}p=l.length-1;for(r=0;p>=r;p--)a.del(l[p])}return a};if(!window.BinaryExpr&&window.defaultConfig)window.BinaryExpr=null;n=function(a,b,c){this.op=a;this.left=b;this.right=c;this.datatype=n.ops[a][2];this.needContextPosition=b.needContextPosition||c.needContextPosition;this.needContextNode=b.needContextNode||c.needContextNode;if(this.op=="=")if(!c.needContextNode&&
!c.needContextPosition&&c.datatype!="nodeset"&&c.datatype!="void"&&b.quickAttr){this.quickAttr=true;this.attrName=b.attrName;this.attrValueExpr=c}else if(!b.needContextNode&&!b.needContextPosition&&b.datatype!="nodeset"&&b.datatype!="void"&&c.quickAttr){this.quickAttr=true;this.attrName=c.attrName;this.attrValueExpr=b}};n.compare=function(a,b,c,d,e){c=c.evaluate(e);d=d.evaluate(e);if(c.isNodeSet&&d.isNodeSet){c=c.list();a=d.list();d=0;for(e=c.length;d<e;d++)for(var f=0,g=a.length;f<g;f++)if(b(m.to("string",
c[d]),m.to("string",a[f])))return true;return false}if(c.isNodeSet||d.isNodeSet){if(c.isNodeSet){a=c;c=d}else{a=d;c=c}e=a.list();a=typeof c;d=0;for(f=e.length;d<f;d++)if(b(m.to(a,e[d]),c))return true;return false}if(a=="="||a=="!="){if(typeof c=="boolean"||typeof d=="boolean")return b(!!c,!!d);if(typeof c=="number"||typeof d=="number")return b(+c,+d);return b(c,d)}return b(+c,+d)};n.ops={div:[6,function(a,b,c){return a.number(c)/b.number(c)},"number"],mod:[6,function(a,b,c){return a.number(c)%b.number(c)},
"number"],"*":[6,function(a,b,c){return a.number(c)*b.number(c)},"number"],"+":[5,function(a,b,c){return a.number(c)+b.number(c)},"number"],"-":[5,function(a,b,c){return a.number(c)-b.number(c)},"number"],"<":[4,function(a,b,c){return n.compare("<",function(d,e){return d<e},a,b,c)},"boolean"],">":[4,function(a,b,c){return n.compare(">",function(d,e){return d>e},a,b,c)},"boolean"],"<=":[4,function(a,b,c){return n.compare("<=",function(d,e){return d<=e},a,b,c)},"boolean"],">=":[4,function(a,b,c){return n.compare(">=",
function(d,e){return d>=e},a,b,c)},"boolean"],"=":[3,function(a,b,c){return n.compare("=",function(d,e){return d==e},a,b,c)},"boolean"],"!=":[3,function(a,b,c){return n.compare("!=",function(d,e){return d!=e},a,b,c)},"boolean"],and:[2,function(a,b,c){return a.bool(c)&&b.bool(c)},"boolean"],or:[1,function(a,b,c){return a.bool(c)||b.bool(c)},"boolean"]};n.parse=function(a){for(var b,c,d,e=[];;){if(a.empty())throw Error("missing right expression");d=y.parse(a);b=a.next();if(!b)break;c=(c=this.ops[b])&&
c[0];if(!c){a.back();break}for(;e.length&&c<=this.ops[e[e.length-1]][0];)d=new n(e.pop(),e.pop(),d);e.push(d,b)}for(;e.length;)d=new n(e.pop(),e.pop(),d);return d};n.prototype=new k;n.prototype.evaluate=function(a){return n.ops[this.op][1](this.left,this.right,a)};n.prototype.show=function(a){a=a||"";var b="";b+=a+"binary: "+this.op+"\n";a+="    ";b+=this.left.show(a);b+=this.right.show(a);return b};if(!window.UnaryExpr&&window.defaultConfig)window.UnaryExpr=null;y=function(a,b){this.op=a;this.expr=
b;this.needContextPosition=b.needContextPosition;this.needContextNode=b.needContextNode};y.ops={"-":1};y.parse=function(a){return this.ops[a.peek()]?new y(a.next(),y.parse(a)):z.parse(a)};y.prototype=new k;y.prototype.datatype="number";y.prototype.evaluate=function(a){return-this.expr.number(a)};y.prototype.show=function(a){a=a||"";var b="";b+=a+"unary: "+this.op+"\n";a+="    ";b+=this.expr.show(a);return b};if(!window.UnionExpr&&window.defaultConfig)window.UnionExpr=null;z=function(){this.paths=
[]};z.ops={"|":1};z.parse=function(a){var b,c;c=x.parse(a);if(!this.ops[a.peek()])return c;b=new z;for(b.path(c);;){if(!this.ops[a.next()])break;if(a.empty())throw Error("missing next union location path");b.path(x.parse(a))}a.back();return b};z.prototype=new k;z.prototype.datatype="nodeset";z.prototype.evaluate=function(a){for(var b=this.paths,c=new h,d=0,e=b.length;d<e;d++){var f=b[d].evaluate(a);if(!f.isNodeSet)throw Error("PathExpr must be nodeset");c.merge(f)}return c};z.prototype.path=function(a){this.paths.push(a);
if(a.needContextPosition)this.needContextPosition=true;if(a.needContextNode)this.needContextNode=true};z.prototype.show=function(a){a=a||"";var b="";b+=a+"union:\n";a+="    ";for(var c=0;c<this.paths.length;c++)b+=this.paths[c].show(a);return b};if(!window.PathExpr&&window.defaultConfig)window.PathExpr=null;x=function(a){this.filter=a;this.steps=[];this.datatype=a.datatype;this.needContextPosition=a.needContextPosition;this.needContextNode=a.needContextNode};x.ops={"//":1,"/":1};x.parse=function(a){var b,
c,d;if(this.ops[a.peek()]){b=a.next();c=a.peek();if(b=="/"&&(a.empty()||c!="."&&c!=".."&&c!="@"&&c!="*"&&!/(?![0-9])[\w]/.test(c)))return u.root();d=new x(u.root());if(a.empty())throw Error("missing next location step");c=o.parse(a);d.step(b,c)}else if(c=u.parse(a))if(this.ops[a.peek()])d=new x(c);else return c;else{c=o.parse(a);d=new x(u.context());d.step("/",c)}for(;;){if(!this.ops[a.peek()])break;b=a.next();if(a.empty())throw Error("missing next location step");d.step(b,o.parse(a))}return d};x.prototype=
new k;x.prototype.evaluate=function(a){var b=this.filter.evaluate(a);if(!b.isNodeSet)throw Exception("Filter nodeset must be nodeset type");a=this.steps;for(var c=0,d=a.length;c<d&&b.length;c++){var e=a[c][1],f=b.iterator(e.reverse),g=b,j;if(!e.needContextPosition&&e.axis=="following"){for(j=f();b=f();j=b)if(J.applewebkit2){g=false;var l=b;do if(l==j){g=true;break}while(l=l.parentNode);if(!g)break}else try{if(!j.contains(b))break}catch(p){if(!(b.compareDocumentPosition(j)&8))break}b=e.evaluate(new D(j))}else if(!e.needContextPosition&&
e.axis=="preceding"){j=f();b=e.evaluate(new D(j))}else{j=f();l=0;for(b=e.evaluate(new D(j),false,g,l);j=f();){l++;b.merge(e.evaluate(new D(j),false,g,l))}}}return b};x.prototype.step=function(a,b){b.op=a;this.steps.push([a,b]);this.quickAttr=false;if(this.steps.length==1)if(a=="/"&&b.axis=="attribute"){a=b.test;if(!a.notOnlyElement&&a.name!="*"){this.quickAttr=true;this.attrName=a.name}}};x.prototype.show=function(a){a=a||"";var b="";b+=a+"path:\n";a+="    ";b+=a+"filter:\n";b+=this.filter.show(a+
"    ");if(this.steps.length){b+=a+"steps:\n";a+="    ";for(var c=0;c<this.steps.length;c++){var d=this.steps[c];b+=a+"operator: "+d[0]+"\n";b+=d[1].show(a)}}return b};if(!window.FilterExpr&&window.defaultConfig)window.FilterExpr=null;u=function(a){this.primary=a;this.predicates=[];this.datatype=a.datatype;this.needContextPosition=a.needContextPosition;this.needContextNode=a.needContextNode};u.parse=function(a){var b,c;b=a.peek();c=b.charAt(0);switch(c){case "$":b=E.parse(a);break;case "(":a.next();
b=n.parse(a);if(a.empty())throw Error('unclosed "("');if(a.next()!=")"){a.back();throw Error("bad token: "+a.next());}break;case '"':case "'":b=A.parse(a);break;default:if(isNaN(+b))if(s.types[b])return null;else if(/(?![0-9])[\w]/.test(c)&&a.peek(1)=="(")b=v.parse(a);else return null;else b=C.parse(a);break}if(a.peek()!="[")return b;b=new u(b);G.parsePredicates(a,b);return b};u.root=function(){return new v("root-node")};u.context=function(){return new v("context-node")};u.prototype=new G;u.prototype.evaluate=
function(a){a=this.primary.evaluate(a);if(!a.isNodeSet){if(this.predicates.length)throw Error("Primary result must be nodeset type if filter have predicate expression");return a}return this.evaluatePredicates(a)};u.prototype.predicate=function(a){this.predicates.push(a)};u.prototype.show=function(a){a=a||"";var b="";b+=a+"filter: \n";a+="    ";b+=this.primary.show(a);if(this.predicates.length){b+=a+"predicates: \n";a+="    ";for(var c=0;c<this.predicates.length;c++)b+=this.predicates[c].show(a)}return b};
if(!window.NodeUtil&&window.defaultConfig)window.NodeUtil=null;m={to:function(a,b){var c,d=b.nodeType;if(d==1&&i.useInnerText&&!J.applewebkit2){c=b.textContent;c=c==void 0||c==null?b.innerText:c;c=c==void 0||c==null?"":c}if(typeof c!="string")if(d==9||d==1){b=d==9?b.documentElement:b.firstChild;c="";stack=[];for(w=0;b;){do{if(b.nodeType!=1)c+=b.nodeValue;stack[w++]=b}while(b=b.firstChild);for(;w&&!(b=stack[--w].nextSibling););}}else c=b.nodeValue;switch(a){case "number":return+c;case "boolean":return!!c;
default:return c}},attrPropMap:{name:"name","class":"className",dir:"dir",id:"id",name:"name",title:"title"},attrMatch:function(a,b,c){return!b||c==null&&a.hasAttribute&&a.hasAttribute(b)||c!=null&&a.getAttribute&&a.getAttribute(b)==c?true:false},getDescendantNodes:function(a,b,c,d,e,f,g){f&&f.delDescendant(b,g);if(e&&d=="id"&&b.getElementById)(b=b.getElementById(e))&&a.match(b)&&c.push(b);else if(e&&d=="name"&&b.getElementsByName){f=b.getElementsByName(e);g=0;for(var j=f.length;g<j;g++){b=f[g];if(J.opera?
b.name==e&&a.match(b):a.match(b))c.push(b)}}else if(e&&d=="class"&&b.getElementsByClassName){f=b.getElementsByClassName(e);g=0;for(j=f.length;g<j;g++){b=f[g];b.className==e&&a.match(b)&&c.push(b)}}else if(a.notOnlyElement)(function(l){for(var p=arguments.callee,r=l.firstChild;r;r=r.nextSibling){m.attrMatch(r,d,e)&&a.match(r.nodeType)&&c.push(r);p(r)}})(b);else{f=a.name;if(b.getElementsByTagName)if(f=b.getElementsByTagName(f))for(g=0;b=f[g++];)m.attrMatch(b,d,e)&&c.push(b)}return c},getChildNodes:function(a,
b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)m.attrMatch(b,d,e)&&a.match(b)&&c.push(b);return c}};if(!window.Step&&window.defaultConfig)window.Step=null;o=function(a,b){this.axis=a;this.reverse=o.axises[a][0];this.func=o.axises[a][1];this.test=b;this.predicates=[];this._quickAttr=o.axises[a][2]};o.axises={ancestor:[true,function(a,b,c,d,e,f,g){for(;b=b.parentNode;){f&&b.nodeType==1&&f.reserveDelByNode(b,g,true);a.match(b)&&c.unshift(b)}return c}],"ancestor-or-self":[true,function(a,b,c,d,e,f,g){do{f&&
b.nodeType==1&&f.reserveDelByNode(b,g,true);a.match(b)&&c.unshift(b)}while(b=b.parentNode);return c}],attribute:[false,function(a,b,c){if(b=b.attributes)if(a.notOnlyElement&&a.type==0||a.name=="*"){a=0;for(var d;d=b[a];a++)c.push(d)}else(d=b.getNamedItem(a.name))&&c.push(d);return c}],child:[false,m.getChildNodes,true],descendant:[false,m.getDescendantNodes,true],"descendant-or-self":[false,function(a,b,c,d,e,f,g){m.attrMatch(b,d,e)&&a.match(b)&&c.push(b);return m.getDescendantNodes(a,b,c,d,e,f,g)},
true],following:[false,function(a,b,c,d,e){do for(var f=b;f=f.nextSibling;){m.attrMatch(f,d,e)&&a.match(f)&&c.push(f);c=m.getDescendantNodes(a,f,c,d,e)}while(b=b.parentNode);return c},true],"following-sibling":[false,function(a,b,c,d,e,f,g){for(;b=b.nextSibling;){f&&b.nodeType==1&&f.reserveDelByNode(b,g);a.match(b)&&c.push(b)}return c}],namespace:[false,function(a,b,c){return c}],parent:[false,function(a,b,c){if(b.nodeType==9)return c;if(b.nodeType==2){c.push(b.ownerElement);return c}b=b.parentNode;
a.match(b)&&c.push(b);return c}],preceding:[true,function(a,b,c,d,e){var f=[];do f.unshift(b);while(b=b.parentNode);for(var g=1,j=f.length;g<j;g++){var l=[];for(b=f[g];b=b.previousSibling;)l.unshift(b);for(var p=0,r=l.length;p<r;p++){b=l[p];m.attrMatch(b,d,e)&&a.match(b)&&c.push(b);c=m.getDescendantNodes(a,b,c,d,e)}}return c},true],"preceding-sibling":[true,function(a,b,c,d,e,f,g){for(;b=b.previousSibling;){f&&b.nodeType==1&&f.reserveDelByNode(b,g,true);a.match(b)&&c.unshift(b)}return c}],self:[false,
function(a,b,c){a.match(b)&&c.push(b);return c}]};o.parse=function(a){var b,c;if(a.peek()=="."){b=this.self();a.next()}else if(a.peek()==".."){b=this.parent();a.next()}else{if(a.peek()=="@"){b="attribute";a.next();if(a.empty())throw Error("missing attribute name");}else if(a.peek(1)=="::"){if(!/(?![0-9])[\w]/.test(a.peek().charAt(0)))throw Error("bad token: "+a.next());b=a.next();a.next();if(!this.axises[b])throw Error("invalid axis: "+b);if(a.empty())throw Error("missing node name");}else b="child";
c=a.peek();if(/(?![0-9])[\w]/.test(c.charAt(0)))if(a.peek(1)=="("){if(!s.types[c])throw Error("invalid node type: "+c);c=s.parse(a)}else c=B.parse(a);else if(c=="*")c=B.parse(a);else throw Error("bad token: "+a.next());b=new o(b,c)}G.parsePredicates(a,b);return b};o.self=function(){return new o("self",new s("node"))};o.parent=function(){return new o("parent",new s("node"))};o.prototype=new G;o.prototype.evaluate=function(a,b,c,d){var e=a.node;if(!b&&this.op=="//")if(!this.needContextPosition&&this.axis==
"child")if(this.quickAttr){a=this.attrValueExpr?this.attrValueExpr.string(a):null;d=m.getDescendantNodes(this.test,e,new h,this.attrName,a,c,d);d=this.evaluatePredicates(d,1)}else{d=m.getDescendantNodes(this.test,e,new h,null,null,c,d);d=this.evaluatePredicates(d)}else{e=new o("descendant-or-self",new s("node"));c=e.evaluate(a,false,c,d).list();d=null;e.op="/";a=0;for(e=c.length;a<e;a++)if(d)d.merge(this.evaluate(new D(c[a]),true));else d=this.evaluate(new D(c[a]),true);d=d||new h}else{if(this.needContextPosition)d=
c=null;if(this.quickAttr){a=this.attrValueExpr?this.attrValueExpr.string(a):null;d=this.func(this.test,e,new h,this.attrName,a,c,d);d=this.evaluatePredicates(d,1)}else{d=this.func(this.test,e,new h,null,null,c,d);d=this.evaluatePredicates(d)}c&&c.doDel()}return d};o.prototype.predicate=function(a){this.predicates.push(a);if(a.needContextPosition||a.datatype=="number"||a.datatype=="void")this.needContextPosition=true;if(this._quickAttr&&this.predicates.length==1&&a.quickAttr){this.attrName=a.attrName;
this.attrValueExpr=a.attrValueExpr;this.quickAttr=true}};o.prototype.show=function(a){a=a||"";var b="";b+=a+"step: \n";a+="    ";if(this.axis)b+=a+"axis: "+this.axis+"\n";b+=this.test.show(a);if(this.predicates.length){b+=a+"predicates: \n";a+="    ";for(var c=0;c<this.predicates.length;c++)b+=this.predicates[c].show(a)}return b};if(!window.NodeType&&window.defaultConfig)window.NodeType=null;s=function(a,b){this.name=a;this.literal=b;switch(a){case "comment":this.type=8;break;case "text":this.type=
3;break;case "processing-instruction":this.type=7;break;case "node":this.type=0;break}};s.types={comment:1,text:1,"processing-instruction":1,node:1};s.parse=function(a){var b,c,d;b=a.next();a.next();if(a.empty())throw Error("bad nodetype");d=a.peek().charAt(0);if(d=='"'||d=="'")c=A.parse(a);if(a.empty())throw Error("bad nodetype");if(a.next()!=")"){a.back();throw Error("bad token "+a.next());}return new s(b,c)};s.prototype=new k;s.prototype.notOnlyElement=true;s.prototype.match=function(a){return!this.type||
this.type==a.nodeType};s.prototype.show=function(a){a=a||"";var b="";b+=a+"nodetype: "+this.type+"\n";if(this.literal){a+="    ";b+=this.literal.show(a)}return b};if(!window.NameTest&&window.defaultConfig)window.NameTest=null;B=function(a){this.name=a.toLowerCase()};B.parse=function(a){if(a.peek()!="*"&&a.peek(1)==":"&&a.peek(2)=="*")return new B(a.next()+a.next()+a.next());return new B(a.next())};B.prototype=new k;B.prototype.match=function(a){var b=a.nodeType;if(b==1||b==2)if(this.name=="*"||this.name==
a.nodeName.toLowerCase())return true;return false};B.prototype.show=function(a){a=a||"";var b="";b+=a+"nametest: "+this.name+"\n";return b};if(!window.VariableReference&&window.defaultConfig)window.VariableReference=null;E=function(a){this.name=a.substring(1)};E.parse=function(a){a=a.next();if(a.length<2)throw Error("unnamed variable reference");return new E(a)};E.prototype=new k;E.prototype.datatype="void";E.prototype.show=function(a){a=a||"";var b="";b+=a+"variable: "+this.name+"\n";return b};if(!window.Literal&&
window.defaultConfig)window.Literal=null;A=function(a){this.text=a.substring(1,a.length-1)};A.parse=function(a){a=a.next();if(a.length<2)throw Error("unclosed literal string");return new A(a)};A.prototype=new k;A.prototype.datatype="string";A.prototype.evaluate=function(){return this.text};A.prototype.show=function(a){a=a||"";var b="";b+=a+"literal: "+this.text+"\n";return b};if(!window.Number&&window.defaultConfig)window.Number=null;C=function(a){this.digit=+a};C.parse=function(a){return new C(a.next())};
C.prototype=new k;C.prototype.datatype="number";C.prototype.evaluate=function(){return this.digit};C.prototype.show=function(a){a=a||"";var b="";b+=a+"number: "+this.digit+"\n";return b};if(!window.FunctionCall&&window.defaultConfig)window.FunctionCall=null;v=function(a){var b=v.funcs[a];if(!b)throw Error(a+" is not a function");this.name=a;this.func=b[0];this.args=[];this.datatype=b[1];if(b[2])this.needContextPosition=true;this.needContextNodeInfo=b[3];this.needContextNode=this.needContextNodeInfo[0]};
v.funcs={"context-node":[function(){if(arguments.length!=0)throw Error("Function context-node expects ()");var a;a=new h;a.push(this.node);return a},"nodeset",false,[true]],"root-node":[function(){if(arguments.length!=0)throw Error("Function root-node expects ()");var a,b;a=new h;b=this.node;b.nodeType==9?a.push(b):a.push(b.ownerDocument);return a},"nodeset",false,[]],last:[function(){if(arguments.length!=0)throw Error("Function last expects ()");return this.last},"number",true,[]],position:[function(){if(arguments.length!=
0)throw Error("Function position expects ()");return this.position},"number",true,[]],count:[function(a){if(arguments.length!=1||!(a=a.evaluate(this)).isNodeSet)throw Error("Function count expects (nodeset)");return a.length},"number",false,[]],id:[function(a){var b,c,d,e,f,g;if(arguments.length!=1)throw Error("Function id expects (object)");b=this.node;g=b.nodeType==9?b:b.ownerDocument;a=a.string(this);b=a.split(/\s+/);c=new h;d=0;for(H=b.length;d<H;d++){e=b[d];f=g.getElementById(e);if(J.opera&&
f&&f.id!=e)for(var j=g.getElementsByName(e),l=0,p=j.length;l<p;l++){f=j[l];f.id==e&&c.push(f)}else f&&c.push(f)}c.isSorted=false;return c},"nodeset",false,[]],"local-name":[function(a){var b;switch(arguments.length){case 0:b=this.node;break;case 1:if((a=a.evaluate(this)).isNodeSet){b=a.first();break}default:throw Error("Function local-name expects (nodeset?)");}return""+b.nodeName.toLowerCase()},"string",false,[true,false]],name:[function(){return v.funcs["local-name"][0].apply(this,arguments)},"string",
false,[true,false]],"namespace-uri":[function(){return""},"string",false,[true,false]],string:[function(a){switch(arguments.length){case 0:a=m.to("string",this.node);break;case 1:a=a.string(this);break;default:throw Error("Function string expects (object?)");}return a},"string",false,[true,false]],concat:[function(){if(arguments.length<2)throw Error("Function concat expects (string, string[, ...])");for(var a="",b=0,c=arguments.length;b<c;b++)a+=arguments[b].string(this);return a},"string",false,
[]],"starts-with":[function(a,b){if(arguments.length!=2)throw Error("Function starts-with expects (string, string)");a=a.string(this);b=b.string(this);return a.indexOf(b)==0},"boolean",false,[]],contains:[function(a,b){if(arguments.length!=2)throw Error("Function contains expects (string, string)");a=a.string(this);b=b.string(this);return a.indexOf(b)!=-1},"boolean",false,[]],substring:[function(a,b,c){var d,e;a=a.string(this);b=b.number(this);switch(arguments.length){case 2:c=a.length-b+1;break;
case 3:c=c.number(this);break;default:throw Error("Function substring expects (string, string)");}b=Math.round(b);c=Math.round(c);d=b-1;e=b+c-1;return e==Infinity?a.substring(d<0?0:d):a.substring(d<0?0:d,e)},"string",false,[]],"substring-before":[function(a,b){var c;if(arguments.length!=2)throw Error("Function substring-before expects (string, string)");a=a.string(this);b=b.string(this);c=a.indexOf(b);if(c==-1)return"";return a.substring(0,c)},"string",false,[]],"substring-after":[function(a,b){if(arguments.length!=
2)throw Error("Function substring-after expects (string, string)");a=a.string(this);b=b.string(this);var c=a.indexOf(b);if(c==-1)return"";return a.substring(c+b.length)},"string",false,[]],"string-length":[function(a){switch(arguments.length){case 0:a=m.to("string",this.node);break;case 1:a=a.string(this);break;default:throw Error("Function string-length expects (string?)");}return a.length},"number",false,[true,false]],"normalize-space":[function(a){switch(arguments.length){case 0:a=m.to("string",
this.node);break;case 1:a=a.string(this);break;default:throw Error("Function normalize-space expects (string?)");}return a.replace(/\s+/g," ").replace(/^ /,"").replace(/ $/,"")},"string",false,[true,false]],translate:[function(a,b,c){if(arguments.length!=3)throw Error("Function translate expects (string, string, string)");a=a.string(this);b=b.string(this);c=c.string(this);for(var d=[],e=0,f=b.length;e<f;e++){var g=b.charAt(e);d[g]||(d[g]=c.charAt(e)||"")}var j="";e=0;for(f=a.length;e<f;e++){g=a.charAt(e);
var l=d[g];j+=l!=void 0?l:g}return j},"string",false,[]],"boolean":[function(a){if(arguments.length!=1)throw Error("Function boolean expects (object)");return a.bool(this)},"boolean",false,[]],not:[function(a){if(arguments.length!=1)throw Error("Function not expects (object)");return!a.bool(this)},"boolean",false,[]],"true":[function(){if(arguments.length!=0)throw Error("Function true expects ()");return true},"boolean",false,[]],"false":[function(){if(arguments.length!=0)throw Error("Function false expects ()");
return false},"boolean",false,[]],lang:[function(){return false},"boolean",false,[]],number:[function(a){switch(arguments.length){case 0:a=m.to("number",this.node);break;case 1:a=a.number(this);break;default:throw Error("Function number expects (object?)");}return a},"number",false,[true,false]],sum:[function(a){var b,c,d,e;if(arguments.length!=1||!(a=a.evaluate(this)).isNodeSet)throw Error("Function sum expects (nodeset)");b=a.list();d=c=0;for(e=b.length;d<e;d++)c+=m.to("number",b[d]);return c},
"number",false,[]],floor:[function(a){if(arguments.length!=1)throw Error("Function floor expects (number)");a=a.number(this);return Math.floor(a)},"number",false,[]],ceiling:[function(a){if(arguments.length!=1)throw Error("Function ceiling expects (number)");a=a.number(this);return Math.ceil(a)},"number",false,[]],round:[function(a){if(arguments.length!=1)throw Error("Function round expects (number)");a=a.number(this);return Math.round(a)},"number",false,[]]};v.parse=function(a){var b,c=new v(a.next());
for(a.next();a.peek()!=")";){if(a.empty())throw Error("missing function argument list");b=n.parse(a);c.arg(b);if(a.peek()!=",")break;a.next()}if(a.empty())throw Error("unclosed function argument list");if(a.next()!=")"){a.back();throw Error("bad token: "+a.next());}return c};v.prototype=new k;v.prototype.evaluate=function(a){return this.func.apply(a,this.args)};v.prototype.arg=function(a){this.args.push(a);if(a.needContextPosition)this.needContextPosition=true;var b=this.args;if(a.needContextNode)b.needContexNode=
true;this.needContextNode=b.needContextNode||this.needContextNodeInfo[b.length]};v.prototype.show=function(a){a=a||"";var b="";b+=a+"function: "+this.name+"\n";a+="    ";if(this.args.length){b+=a+"arguments: \n";a+="    ";for(var c=0;c<this.args.length;c++)b+=this.args[c].show(a)}return b};var K={uuid:1,get:function(a){return a.__jsxpath_id__||(a.__jsxpath_id__=this.uuid++)}};if(!window.NodeSet&&window.defaultConfig)window.NodeSet=null;h=function(){this.length=0;this.nodes=[];this.seen={};this.idIndexMap=
null;this.reserveDels=[]};h.prototype.isNodeSet=true;h.prototype.isSorted=true;h.prototype.merge=function(a){this.isSorted=false;if(a.only)return this.push(a.only);if(this.only){var b=this.only;delete this.only;this.push(b);this.length--}a=a.nodes;b=0;for(var c=a.length;b<c;b++)this._add(a[b])};h.prototype.sort=function(){if(!this.only)if(!this.sortOff)if(!this.isSorted){this.isSorted=true;this.idIndexMap=null;this.nodes.sort(function(a,b){if(a==b)return 0;if(a.compareDocumentPosition){var c=a.compareDocumentPosition(b);
if(c&2)return 1;if(c&4)return-1;return 0}else{c=a;var d=b;a=a;b=b;for(var e=0,f=0;a=a.parentNode;)e++;for(;b=b.parentNode;)f++;if(e>f){for(;e--!=f;)c=c.parentNode;if(c==d)return 1}else if(f>e){for(;f--!=e;)d=d.parentNode;if(c==d)return-1}for(;(a=c.parentNode)!=(b=d.parentNode);){c=a;d=b}for(;c=c.nextSibling;)if(c==d)return-1;return 1}})}};h.prototype.reserveDelByNodeID=function(a,b,c){if(a=this.createIdIndexMap()[a])if(c&&this.length-b-1>a||!c&&b<a)this.reserveDels.push({value:a,order:String.fromCharCode(a),
toString:function(){return this.order},valueOf:function(){return this.value}})};h.prototype.reserveDelByNode=function(a,b,c){this.reserveDelByNodeID(K.get(a),b,c)};h.prototype.doDel=function(){if(this.reserveDels.length){for(var a=this.length<65536?this.reserveDels.sort(function(d,e){return e-d}):this.reserveDels.sort(function(d,e){return e-d}),b=0,c=a.length;b<c;b++)this.del(a[b]);this.reserveDels=[];this.idIndexMap=null}};h.prototype.createIdIndexMap=function(){if(this.idIndexMap)return this.idIndexMap;
else{for(var a=this.idIndexMap={},b=this.nodes,c=0,d=b.length;c<d;c++){var e=K.get(b[c]);a[e]=c}return a}};h.prototype.del=function(a){this.length--;if(this.only)delete this.only;else{a=this.nodes.splice(a,1)[0];if(this._first==a){delete this._first;delete this._firstSourceIndex;delete this._firstSubIndex}delete this.seen[K.get(a)]}};h.prototype.delDescendant=function(a,b){if(!this.only){var c=a.nodeType;if(!(c!=1&&c!=9))if(!J.applewebkit2){if(!a.contains)if(c==1){var d=a;a={contains:function(e){return e.compareDocumentPosition(d)&
8}}}else a={contains:function(){return true}};c=this.nodes;for(b=b+1;b<c.length;b++)if(a.contains(c[b])){this.del(b);b--}}}};h.prototype._add=function(a,b){var c=this.seen,d=K.get(a);if(c[d])return true;c[d]=true;this.length++;b?this.nodes.unshift(a):this.nodes.push(a)};h.prototype.unshift=function(a){if(this.length){if(this.only){var b=this.only;delete this.only;this.unshift(b);this.length--}return this._add(a,true)}else{this.length++;this.only=a}};h.prototype.push=function(a){if(this.length){if(this.only){var b=
this.only;delete this.only;this.push(b);this.length--}return this._add(a)}else{this.length++;this.only=a}};h.prototype.first=function(){if(this.only)return this.only;this.nodes.length>1&&this.sort();return this.nodes[0]};h.prototype.list=function(){if(this.only)return[this.only];this.sort();return this.nodes};h.prototype.string=function(){var a=this.only||this.first();return a?m.to("string",a):""};h.prototype.bool=function(){return!!(this.length||this.only)};h.prototype.number=function(){return+this.string()};
h.prototype.iterator=function(a){this.sort();var b=this;if(a){c=0;return function(){var d=b.length-c++-1;if(b.only&&d==0)return b.only;return b.nodes[d]}}else{var c=0;return function(){if(b.only&&c++==0)return b.only;return b.nodes[c++]}}};k=function(a){a=a||this;var b=a.document;a.XPathExpression=function(c){if(!c.length)throw a.Error("no expression");c=this.lexer=F(c);if(c.empty())throw a.Error("no expression");this.expr=n.parse(c);if(!c.empty())throw a.Error("bad token: "+c.next());};a.XPathExpression.prototype.evaluate=
function(c,d){return new a.XPathResult(this.expr.evaluate(new D(c)),d)};a.XPathResult=function(c,d){if(d==0)switch(typeof c){case "object":d++;case "boolean":d++;case "string":d++;case "number":d++}this.resultType=d;switch(d){case 1:this.numberValue=c.isNodeSet?c.number():+c;return;case 2:this.stringValue=c.isNodeSet?c.string():""+c;return;case 3:this.booleanValue=c.isNodeSet?c.bool():!!c;return;case 4:case 5:case 6:case 7:this.nodes=c.list();this.snapshotLength=c.length;this.index=0;this.invalidIteratorState=
false;break;case 8:case 9:this.singleNodeValue=c.first();return}};a.XPathResult.prototype.iterateNext=function(){return this.nodes[this.index++]};a.XPathResult.prototype.snapshotItem=function(c){return this.nodes[c]};a.XPathResult.ANY_TYPE=0;a.XPathResult.NUMBER_TYPE=1;a.XPathResult.STRING_TYPE=2;a.XPathResult.BOOLEAN_TYPE=3;a.XPathResult.UNORDERED_NODE_ITERATOR_TYPE=4;a.XPathResult.ORDERED_NODE_ITERATOR_TYPE=5;a.XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE=6;a.XPathResult.ORDERED_NODE_SNAPSHOT_TYPE=
7;a.XPathResult.ANY_UNORDERED_NODE_TYPE=8;a.XPathResult.FIRST_ORDERED_NODE_TYPE=9;b.createExpression=function(c){return new a.XPathExpression(c,null)};b.evaluate=function(c,d,e,f){return b.createExpression(c,null).evaluate(d,f)}};var M;if(i.targetFrame)if(I=document.getElementById(i.targetFrame))M=I.contentWindow;if(i.exportInstaller)window.install=k;if(!i.hasNative||!i.useNative)k(M||window)}})();N.dom.xpath=function(k,i,q){switch(arguments.length){case 0:k="/";i=document;q=false;break;case 1:i=
document;q=false;break;case 2:if(typeof i=="string"){i=$(i);q=false}else if(Object.isElement(i))q=false;else{q=i;i=document}break;default:i=$(i);break}var w=q?7:6;k=document.createExpression(k,null);w=k.evaluate(i,w,null);for(var H=[],t=0,L=w.snapshotLength;t<L;t++)H.push(Element.extend(w.snapshotItem(t)));return H}});