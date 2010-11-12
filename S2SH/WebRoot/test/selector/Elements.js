/*
LICENSE: http://creativecommons.org/licenses/by-nc-sa/3.0
*/
function Elements(){
    this.initialize();
}
Elements.prototype = function (){
    var args;
    var diff;
    var uid = 1;
    document.firstChild.uid = uid++;
    var tpl = {
        finder:
        {
            tpl:
            'key = node.uid || (node.uid = uid++);' +
            'key += "[@]" + {arg};' +
            'var #nodes = rcc[key] || (rcc[key] = node.getElementsBy@({arg}));' +
            'for (var #i=0,#l=#nodes.length; #i<#l; #i++){' +
                'if ((node = #nodes[#i])&&{test}){' +
                    '{next}' +
                '}' +
            '}' +
            '#nodes = null;',
            '#': 'if ((node = node.getElementById({arg})) && {test}){{next}}',
            '~':
            'var #hash = #hash || {};' +
            'var #node = node;' +
            'while (#node = #node.nextSibling){' +
                'key = #node.uid || (#node.uid = uid++);' +
                'if (key in #hash){' +
                    'break;' +
                '} else {' +
                    'node = #node;' +
                    'if (node.nodeType===1 && {test}){' +
                        '{next}' +
                    '}' +
                '}' +
                '#hash[key] = null'+
            '}',
            '*':
            'key = node.uid || (node.uid = uid++);' +
            'var #nodes = rcc[key] || (rcc[key] = node.all || node.getElementsByTagName("*"));' +
            'for (var #i=0,#l=#nodes.length; #i<#l; #i++){' +
                'node = #nodes[#i];' +
                'if ({test}){' +
                    '{next}' +
                '}' +
            '}' +
            '#nodes = null;',
            '>':
            'var #nodes = node.children || node.childNodes;' +
            'for (var #i=0,#l=#nodes.length; #i<#l; #i++){' +
                'node = #nodes[#i];' +
                'if (node.nodeType===1 && {test}){' +
                    '{next}' +
                '}' +
            '}' +
            '#nodes = null;',
            '+':
            'var #node = node;' +
            'while (#node = #node.nextSibling){' +
                'node = #node;' +
                'if (node.nodeType == 1 && {test}){' +
                    '{next}' +
                '}' +
                'break;' +
            '}',
            order: { '#': 1, 'N': 2, '.': 3, 'T': 4 }
        },
        passer:
        {
            tpl:
            'var #hash = #hash || {};' +
            'var #pass = [false];' +
            'var #node = node;' +
            'while (#node = #node.@){' +
                'key = #node.uid || (#node.uid = uid++);' +
                'if (key in #hash){' +
                    'pass = #pass[0] = #hash[key][0];' +
                    'break;' +
                '} else {' +
                    'pass = false;' +
                    'node = #node;' +
                    'if (node.nodeType === 1 && {test}){' +
                        '{pass}' +
                    '}' +
                    'if (pass){' +
                        'break;' +
                    '}' +
                '}' +
                '#hash[key] = #pass;'+
            '}' +
            '#pass[0] = pass;',
            '+':
            'var #node = node;' +
            'while (#node = #node.previousSibling){' +
                'node = #node;' +
                'if (node.nodeType===1 && {test}){' +
                    '{pass}' +
                '}' +
                'break;' +
            '}',
            '<':
            'var pass = false;' +
            'var #node = node;' +
            '{pass}' +
            'if (pass){' +
                'node = #node;' +
                '{next}' +
            '}'
        },
        query:
        'function query({args}){' +
            'var node, key, hash = this.hash;' +
            'this.push = Array.prototype.push;' +
            '{code}' +
            'delete this.push;' +
            'return this;' +
        '}' +
        ';(function (args){' +
            'return function (){' +
                'return query.apply(this, args);' +
            '}' +
        '})(args);',
        collect:
        'key = node.uid || (node.uid = uid++);' +
        'if (!(key in hash)){' +
            'this.push(node);' +
            'hash[key] = null;' +
        '}'
    };
    tpl.finder['T'] = tpl.finder.tpl.replace(/@/g, 'TagName');
    tpl.finder['N'] = tpl.finder.tpl.replace(/@/g, 'Name');
    tpl.finder['.'] = tpl.finder.tpl.replace(/@/g, 'ClassName');
    tpl.passer[' '] = tpl.passer.tpl.replace(/@/g, 'parentNode');
    tpl.passer['~'] = tpl.passer.tpl.replace(/@/g, 'previousNode');
    if (!('getElementsByClassName' in document)){
        delete tpl.finder['.'];
        delete tpl.finder.order['.'];
    }
    var gen = {
        args: { gen: function (){
            var ARGS = [];
            for (var i=0,l=args.length; i<l; i++) ARGS[i] = i+1;
            return '$'+ARGS.join(',$');
        } },
        attr: { gen: function (name){
            if (name == 'href'){
                return 'node.getAttribute("href",2)';
            } else if (name == 'className'){
                return 'node.className';
            } else {
                return 'node.getAttribute("'+name+'")';
            }
        } },
        template: { gen: function (tpl){
            var ctxt = this;
            var suffix;
            return tpl.replace(/\{(\w+)\}|#(\w+)/g, function (m, p1, p2){
                if (p1){
                    return ctxt[p1] || m;
                } else {
                    suffix = suffix || diff++;
                    return p2 + suffix;
                }
            });
        } },
        tester:
        {
            gen:
            function (i){
                var tests = [];
                while (i < this.length){
                    var token = this[i++];
                    var test = gen.tester[token.tag].apply(null, token);
                    if (test){
                        tests.push(test);
                    }
                }
                return tests.length ? '('+tests.join(')&&(')+')' : 'true';
            },
            'T': function (tagName){ return 'node.tagName.toUpperCase()==$'+args.push(tagName.toUpperCase()); },
            '#': function (id){ return 'node.id===$'+args.push(id); },
            '.': function (className){ return gen.tester['~='].call(this, 'className', className); },
            '[': function (name){ return gen.attr.gen(name); },
            '=': function (name, value){ return gen.attr.gen(name)+'==$'+args.push(value);  },
            '!=': function (name, value){ return gen.attr.gen(name)+'!=$'+args.push(value); },
            '|=': function (name, value){ return '$'+args.push(new RegExp('^'+value+'(-.*)?'))+'.test('+gen.attr.gen(name)+')'; },
            '~=': function (name, value){ return '$'+args.push(new RegExp('\\b'+value+'\\b'))+'.test('+gen.attr.gen(name)+')'; },
            '*=': function (name, value){ return '('+gen.attr.gen(name)+'||"").indexOf($'+args.push(value)+')>=0'; },
            '^=': function (name, value){ return '('+gen.attr.gen(name)+'||"").indexOf($'+args.push(value)+')==0'; },
            '$=': function (name, value){ return '(key='+gen.attr.gen(name)+')&&(key.lastIndexOf($'+args.push(value)+')==key.length-'+value.length+')'; },
            'nth-child': function (a, b, l){ if (a || b){ return '(index.call(node,'+l+')-'+b+')'+(a?'%'+a:'')+'===0'; } },
            'only-child': function (){ return 'node.parentNode.nodeCount===1'; },
            'first-child': function (){ return gen.tester['nth-child'].call(this, 0, 1); },
            'last-child': function (){ return gen.tester['nth-child'].call(this, 0, 1, true); },
            'nth-last-child': function (a, b){ return gen.tester['nth-child'].call(this, a, b, true); },
            'not': function (token){ return '!('+gen.tester[token.tag].apply(null, token)+')'; },
            'contains': function (text){ return '$'+args.push(new RegExp(text))+'.test(node.textContent||node.innerText||"")'; }
        },
        finder: { gen: function (i, b){
            if (i == this.length){ return tpl.collect; }
            var next = gen.finder.gen.call(this, i+1, false);
            //TODO: clean this.
            if (b){
                next = gen.template.gen.call({
                    next: next
                }, gen.passer.gen.call(this, i, true));
            }
            var seq = this[i];
            var tag = seq.tag || ' ';
            if (tag === ' ' || b){
                var token = seq[0];
                tag = token.tag;
            }
            if (!(tag in tpl.finder)){
                tag = '*';
                token = null;
            }
            return gen.template.gen.call({
                test: gen.tester.gen.call(seq, token ? 1 : 0),
                next: next,
                arg: token ? '$'+args.push(token[0]) : undefined
            }, tpl.finder[tag]);
        } },
        passer: { gen: function (i, b){
            var pass = (i == 0) ? 'pass = true;' : gen.passer.gen.call(this, i-1);
            var tag = b ? '<' : (this[i].tag || ' ');
            return gen.template.gen.call({
                pass: pass,
                test: !b ? gen.tester.gen.call(this[i], 0) : undefined
            }, tpl.passer[tag]);
        } },
        group: { gen: function (){
            var ret = [];
            for (var i=0,l=this.length; i<l; i++){
                ret[i] = gen.chain.gen.call(this[i]);
            }
            return ret.join('');
        } },
        chain: { gen: function (){
            var i = this.length;
            var p, q = 9999;
            while (i > 0){
                p = tpl.finder.order[this[i-1][0].tag] || 9999;
                if (p > q) break;
                q = p;
                i --;
            }
            return 'node=document;' + gen.finder.gen.call(this, i, i!==0);
        } }
    };
    function index(last){
        if (!('nodeIndex' in this)){
            var p = this.parentNode;
            var index = 1;
            var nodes = p.children || p.childNodes;
            for (var i=0,l=nodes.length; i<l; i++){
                var node = nodes[i];
                if (node.nodeType === 1){
                    node.nodeIndex = index ++;
                }
            }
            p.nodeCount = index - 1;
        }
        if (last){
            return this.parentNode.nodeCount - this.nodeIndex + 1;
        } else {
            return this.nodeIndex;
        }
    }
    var re = /^(\s)*([,\+>~])?\s*(?:\:(not|has)\(\s*)?\*?([\[\.\:#])?\s*([\w\u0080-\uFFFF_-]*)(?:\s*([~!\|\*\^\$]?\=|\()(?:([^\)\]"']+)|\s*"((?:[^"]|`")*)"\s*))?(\)|\])?(?:\s*\))?/;
    function getxt(){
        var txt;
        if ((txt = RegExp.$7) && /^\s*(\w+)\s*$/.test(txt)){
            txt = RegExp.$1;
        } else if (txt = RegExp.$8){
            txt = txt.replace(/`(`*")/g, '$1');
        } else {
            txt = '';
        }
        return txt;
    }
    function abnth(tmp){
        var a = 0, b = 0;
        if (/^\s*(?:(even|odd)|(\d*)\s*n\s*[\+\-]?\s*(\d*))\s*$/.test(tmp)){
            if (tmp = RegExp.$1){
                if (tmp === "even"){
                    a = 2; b = 0;
                } else if (tmp === 'odd'){
                    a = 2; b = 1;
                }
            } else {
                tmp = RegExp.$2 || 0;
                a = Number(tmp);
                tmp = RegExp.$3+RegExp.$4 || 0;
                b = Number(tmp);
            }
        }
        this.push(a);
        this.push(b);
    }
    function parse(src){
        var tmp;
        var seq = [];
        var chain = [seq];
        var group = [chain];
        while (src && re.test(src)){
            src = RegExp.rightContext;
            if (tmp = RegExp.$2 || RegExp.$1){
                if (!RegExp.$2) tmp = ' ';
                if (seq.length <= 0) seq.push({tag: '*', length: 0});
                seq = [];
                if (tmp === ','){
                    chain = [seq];
                    group.push(chain);
                } else {
                    seq.tag = tmp;
                    chain.push(seq);
                }
            }
            var tag = RegExp.$3;
            if (tmp = RegExp.$4 || RegExp.$5){
                if (!RegExp.$4) tmp = 'T';
                var token = [];
                token.tag = tmp;
                switch (tmp){
                case 'T': token.push(RegExp.$5.toUpperCase()); break;
                case '#': case '.': token.push(RegExp.$5); break;
                case '[':
                    tmp = RegExp.$5;
                    if (tmp === 'class') tmp = 'className';
                    token.push(tmp);
                    if (tmp = RegExp.$6){
                        token.tag = tmp;
                        token.push(getxt());
                    }
                    break;
                case ':':
                    tmp = token.tag = RegExp.$5;
                    if (tmp === 'contains'){
                        token.push(getxt());
                        break;
                    } else if (tmp.indexOf('nth') == '0'){
                        abnth.call(token, RegExp.$7);
                    }
                    break;
                default: throw '';
                }
                if (tag){
                    token = [token];
                    token.tag = tag;
                }
                seq.push(token);
            }
        }
        return group;
    }
    var gcc = {};
    var rcc = {};
    var fcc = {};
    function build(src){
        var ret;
        if (ret = fcc[src]){ return ret; }
        args = [];
        diff = 11;
        var group = gcc[src] || (gcc[src] = parse(src));
        src = gen.template.gen.call({
            code: gen.group.gen.call(group),
            args: gen.args.gen()
        }, tpl.query);
        ret = eval(src);
        args = null;
        return fcc[src] = ret;
    }
    this.query = function(src){
        return rcc[src] || (rcc[src] = build(src).call(new Elements));
    };
    return {
        length: 0,
        initialize: function (){
            this.hash = {};
        }
    };
}.call(Elements);
document.getElementsBySelector = Elements.query;