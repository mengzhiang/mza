Ext.onReady(function(){
	var cm = new Ext.grid.ColumnModel([
        {header:'编号',dataIndex:'id'},
        {header:'姓名',dataIndex:'name'},
        {header:'密码',dataIndex:'pwd'}
    ]);

    var store = new Ext.data.Store({
        proxy: new Ext.data.HttpProxy({url:'user_listpage'}),
        reader: new Ext.data.JsonReader({
        	totalProperty:"totalcount",
        	root :"users"
        }, [
            {name: 'id'},
            {name: 'name'},
            {name: 'pwd'}
        ])
    });
    store.load(
    	{params:{start:0,
    			limit:10}}
    	);
	//创建翻页对象
    var pagtolbar = new Ext.PagingToolbar({
        	pageSize :10,
        	store:store,
        	displayInfo:true,
        	displayMsg:"显示第{0}到{1}条记录，一共{2}条",
        	emptyMsg:"没有记录"
        });
    //创建grid
    var grid = new Ext.grid.GridPanel({
    	title: 'grid',
    	region :'center',
        autoHeight:true,
        store: store,
        cm: cm,
        closable :true,//tab 可关闭
        tbar :new Ext.Toolbar(['添加','修改','删除']),
        bbar :pagtolbar
    });
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
        title: 'west',
        region: 'west',
        split: true,
        border: true,
        collapsible: true,
        width: 120,
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
           			html:"234234234",
           			closable:true
           		});
           		tabs.setActiveTab(tab);
    });
    //创建跟节点
    var root = new Ext.tree.AsyncTreeNode({text:'偶是根'});
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
            grid,
            {contentEl:'markup', title: 'Long Text',closable:true}
        ],
        plugins: new Ext.ux.TabCloseMenu()
    });
   
    // 布局开始
    var viewport = new Ext.Viewport({
        layout:'border',
        items:[{
            region: 'north',
            contentEl: 'north-div',
            height: 80,
            bodyStyle: 'background-color:#BBCCEE;'
        },{
            region: 'south',
            contentEl: 'south-div',
            height: 20,
            bodyStyle: 'background-color:#BBCCEE;'
        },tree,tabs]
    });
    /**
     * {
            region: 'center',
            split: true,
            border: true,
            layout: 'border',
            items: [grid]
        }
     */
//    var win = new Ext.Window({
//    	width:400,
//    	height:300,
//    	layout:'fit',
//    	items :[grid]
//    });
//    win.show();
});