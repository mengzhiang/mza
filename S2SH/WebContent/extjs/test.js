Ext.onReady(function(){
	var viewport = new Ext.Viewport({
		layout:'border',
		items:[{
			region:'north',
			height:40,
			collapsible:true,
			html:'上北'
		},{
			region:'west',
			width:100,
			title:'左西',
			collapsible:true,
			html:'左西'
		},{
			region:'center',
			html:'中间'
		},{
			region:'south',
			collapsible:true,
			height:40,
			html:'下南'
		},{
			region:'east',
			collapsible:true,
			height:40,
			html:'右东'
		}]
	})
});