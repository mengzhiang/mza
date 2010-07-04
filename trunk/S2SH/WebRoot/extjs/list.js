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
        autoHeight: true,
        renderTo: 'grid',
        store: store,
        cm: cm,
        bbar :pagtolbar
    });
});