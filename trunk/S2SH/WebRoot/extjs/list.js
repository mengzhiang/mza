Ext.onReady(function(){
     // 树形配置开始
    var loader = new Ext.tree.TreeLoader({dataUrl: 'user_querytree'});
    loader.processResponse = function(response, node, callback){
        var json = response.responseText;
        try {
            var json = eval("("+json+")");
            node.beginUpdate();
            var o = json["tree"];
            for(var i = 0, len = o.length; i < len; i++){
                var n = this.createNode(o[i]);
                if(n){
                    node.appendChild(n);
                }
            }
            node.endUpdate();
            if(typeof callback == "function"){
                callback(this, node);
            }
        }catch(e){
            this.handleFailure(response);
        }
    };
   //创建树panel
    var tree = new Ext.tree.TreePanel({
        loader: loader,
        title: '菜单',
        region: 'west',
        split: true,
        border: true,
        collapsible: true,
        width: 200,
        minSize: 80,
        maxSize: 200
    });
    
    //给树添加事件
    tree.on("click",function(node){
    	if(!node.leaf){
					return;
				}
           		var tab = tabs.getComponent(node.text);
           		
           		if(tab){
           			tabs.setActiveTab(tab);
           			return;
           		}
           		tab = tabs.add({
           			id:node.text,
           			title:node.text,
           			html:"<iframe id = '"+node.attributes.id+"' src='/S2SH"+node.attributes.url+"' scrolling='no' frameborder='0' width='100%' height='100%'></iframe>",
           			closable:true
           		});

           		tabs.setActiveTab(tab);
    });
    //创建跟节点
    var root = new Ext.tree.AsyncTreeNode({text:'基础信息'});
    tree.setRootNode(root);
    root.expand(true,true);
    
    //tab 配置
    var tabs = new Ext.TabPanel({
 		region: 'center',        
 		width:450,
        activeTab: 0,
        enableTabScroll:true,
        resizeTabs:true,
        frame:true,
        defaults:{autoHeight: true},
        items:[
        	{contentEl:'welcome', title: '欢迎',closable:true}
        ],
        plugins: new Ext.ux.TabCloseMenu()
    });
   
    // 布局开始
    var viewport = new Ext.Viewport({
        layout:'border',
        items:[{
            region: 'north',
            contentEl: 'north-div',
            height: 95,
            bodyStyle: 'background-image:url(../images/bkjw1_01.png);'
        },{
            region: 'south',
            contentEl: 'south-div',
            height: 20,
            bodyStyle: 'background-color:#BBCCEE;'
        },tree,tabs]
    });
});
//屏蔽右键菜单
//document.oncontextmenu = function()
//{
//	//return false;
//}