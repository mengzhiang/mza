Ext.onReady(function() {
	// 树形配置开始
	var loader = new Ext.tree.TreeLoader({
				dataUrl : 'permResModelTree_querytree'
			});
	loader.processResponse = function(response, node, callback) {
		var json = response.responseText;
		try {
			var json = eval("(" + json + ")");
			node.beginUpdate();
			var o = json["tree"];
			for (var i = 0, len = o.length; i < len; i++) {
				var n = this.createNode(o[i]);
				if (n) {
					node.appendChild(n);
				}
			}
			node.endUpdate();
			if (typeof callback == "function") {
				callback(this, node);
			}
		} catch (e) {
			this.handleFailure(response);
		}
	};
	// 创建树panel
	var tree = new Ext.tree.TreePanel({
				loader : loader,
				region : 'west',
				width : 250

			});
	var add_leaf_item = {
			text : '新增下级菜单项',
			handler : function() {
				console.log(this.ownerCt);
				var btn_submit = new Ext.Button({
							text : '提交',
							handler : function() {
								var bsform = form.getForm();
								console.log(bsform);
								bsform.doAction('submit', {
											url : 'permMenu_save',
											method : 'post',
											waitMsg : '正在保存',
											timeout : 10000,
											success : function(form, action) {
												Ext.Msg.alert("提示", "保存成功!");
												root.reload();
												root.expand(true, true);
												Ext.get("form").dom.innerHTML = "";
											},
											failure : function(form, action) {
												Ext.Msg.alert("提示", "保存失败");
											}
										});
							}
						});
				var form = new Ext.form.FormPanel({
							labelAlign : 'right',
							labelWidth : 70,
							frame : true,
							height : 150,
							width : 300,
							defaultType : 'textfield',
							buttonAlign : 'center',
							items : [{
										xtype : 'fieldset',
										title : '新增菜单项',
										defaultType : 'textfield',
										items : [{
													fieldLabel : '菜单项名称',
													name : 'title'
												}, {
													name : 'parentid',
													hidden : true,
													hideLabel : true
												}, {
													name : 'number',
													hidden : true,
													hideLabel : true
												}, {
													name : 'leaf',
													hidden : true,
													hideLabel : true
												}, {
													fieldLabel : 'URL地址',
													name : 'url'
												}]
									}],
							buttons : [btn_submit]
						});
				var selNode = tree.getSelectionModel().selNode;
				var attr = selNode.attributes;
				var record = new Ext.data.Record({
							parentid : attr.id,
							leaf : 1,
							url : '',
							number : 0
						});
				form.getForm().loadRecord(record);
				// 如果已经存在form则删除重新加载
				if (Ext.get("form").dom.children.length > 0) {
					Ext.get("form").dom.innerHTML = "";
					form.render("form");
				} else {
					form.render("form");
				}
			}
		};
	var add_fold_item = {
			text : '新增下级菜单夹',
			handler : function() {
				console.log(this.ownerCt);
				var btn_submit = new Ext.Button({
							text : '提交',
							handler : function() {
								var bsform = form.getForm();
								console.log(bsform);
								bsform.doAction('submit', {
											url : 'permMenu_save',
											method : 'post',
											waitMsg : '正在保存',
											timeout : 10000,
											success : function(form, action) {
												Ext.Msg.alert("提示", "保存成功!");
												root.reload();
												root.expand(true, true);
												Ext.get("form").dom.innerHTML = "";
											},
											failure : function(form, action) {
												Ext.Msg.alert("提示", "保存失败");
											}
										});
							}
						});
				var form = new Ext.form.FormPanel({
							labelAlign : 'right',
							labelWidth : 70,
							frame : true,
							height : 130,
							width : 300,
							defaultType : 'textfield',
							buttonAlign : 'center',
							items : [{
										xtype : 'fieldset',
										title : '新增菜单夹',
										defaultType : 'textfield',
										items : [{
													fieldLabel : '菜单夹名称',
													name : 'title'
												}, {
													name : 'parentid',
													hidden : true,
													hideLabel : true
												}, {
													name : 'number',
													hidden : true,
													hideLabel : true
												}, {
													name : 'leaf',
													hidden : true,
													hideLabel : true
												}, {
													name : 'url',
													hidden : true,
													hideLabel : true
												}]
									}],
							buttons : [btn_submit]
						});
				var selNode = tree.getSelectionModel().selNode;
				var attr = selNode.attributes;
				var record = new Ext.data.Record({
							parentid : attr.id,
							leaf : 0,
							url : '',
							number : 0
						});
				form.getForm().loadRecord(record);
				// 如果已经存在form则删除重新加载
				if (Ext.get("form").dom.children.length > 0) {
					Ext.get("form").dom.innerHTML = "";
					form.render("form");
				} else {
					form.render("form");
				}
			}
		};
		var delete_item = {
			text : '删除',
			handler : function() {
				var node = tree.getSelectionModel().selNode;
				Ext.MessageBox.confirm('请确认', '确定删除该菜单？', function(btn) {
							if (btn == 'yes') {
								var leaf = 0;
								if (node.attributes.leaf) {
									leaf = 1;
								}
								var parentid = 0;
								if (node.parentNode) {
									parentid = node.parentNode.attributes.id
								}
								var record = new Ext.data.Record({
											id : node.attributes.id,
											title : node.attributes.text,
											parentid : parentid,
											leaf : leaf,
											url : node.attributes.url
										});
								var delRecords = new Array;
								delRecords.push(record.data);
								var data = {
									list : delRecords
								}
								Ext.Ajax.request({
											headers : {
												contentType : "application/json"
											},
											method : 'POST',
											url : 'permMenu_delAll',
											success : function(request) {
												Ext.Msg.alert('信息', '删除成功');
												root.reload();
												root.expand(true, true);
												Ext.get("form").dom.innerHTML = "";
											},
											failure : function() { // 发送失败的回调函数
												Ext.Msg.alert("错误",
														"与后台联系的时候出现了问题");
											},
											params : {
												strJson : Ext.encode(data)
											}
										});
							} else {
								return;
							}
						});
			}
		};
	// 注册右键事件
	var contextmenu_fold = new Ext.menu.Menu({
		id : "theContextMenu",
		items : []
	});
	
	var contextmenu_leaf = new Ext.menu.Menu({
		id : "theContextMenu",
		items : [{
			text : '删除',
			handler : function(node) {
				var node = tree.getSelectionModel().selNode;
				Ext.MessageBox.confirm('请确认', '确定删除该菜单？', function(btn) {
							if (btn == 'yes') {
								var leaf = 0;
								if (node.attributes.leaf) {
									leaf = 1;
								}
								var parentid = 0;
								if (node.parentNode) {
									parentid = node.parentNode.attributes.id
								}
								var record = new Ext.data.Record({
											id : node.attributes.id,
											title : node.attributes.text,
											parentid : parentid,
											leaf : leaf,
											url : node.attributes.url
										});
								var delRecords = new Array;
								delRecords.push(record.data);
								var data = {
									list : delRecords
								}
								Ext.Ajax.request({
											headers : {
												contentType : "application/json"
											},
											method : 'POST',
											url : 'permMenu_delAll',
											success : function(request) {
												Ext.Msg.alert('信息', '删除成功');
												root.reload();
												root.expand(true, true);
												Ext.get("form").dom.innerHTML = "";
											},
											failure : function() { // 发送失败的回调函数
												Ext.Msg.alert("错误",
														"与后台联系的时候出现了问题");
											},
											params : {
												strJson : Ext.encode(data)
											}
										});
							} else {
								return;
							}
						});
			}
		}]
	});
	tree.on("contextmenu", function(node, e) {
				e.preventDefault();
				node.select();
				if (node.leaf) {
					contextmenu_fold.removeAll();
					contextmenu_fold.addItem(delete_item);
				} else {
					contextmenu_fold.removeAll();
					contextmenu_fold.addItem(add_fold_item);
					contextmenu_fold.addItem(add_leaf_item);
					contextmenu_fold.addItem(delete_item);
				}
				contextmenu_fold.showAt(e.getXY());
			});
	// 给树添加事件
	tree.on("click", function(node) {

				var btn_submit = new Ext.Button({
							text : '提交',
							handler : function() {
								var bsform = form.getForm();
								console.log(bsform);
								bsform.doAction('submit', {
											url : 'permMenu_save',
											method : 'post',
											waitMsg : '正在保存',
											timeout : 10000,
											success : function(form, action) {
												Ext.Msg.alert("提示", "保存成功!");
												root.reload();
												root.expand(true, true);
												Ext.get("form").dom.innerHTML = "";
											},
											failure : function(form, action) {
												Ext.Msg.alert("提示", "保存失败");
											}
										});
							}
						});
				if (node.leaf) {
					var items = [{
								fieldLabel : '编号',
								name : 'id',
								readOnly :true
							}, {
								fieldLabel : '名称',
								name : 'title'
							}, {
								name : 'url',
								fieldLabel : 'url地址'
							}, {
								name : 'parentid',
								hidden : true,
								hideLabel : true
							}, {
								name : 'leaf',
								hidden : true,
								hideLabel : true
							}];
				} else {
					var items = [{
								fieldLabel : '编号',
								name : 'id',
								readOnly :true
							}, {
								fieldLabel : '名称',
								name : 'title'
							}, {
								name : 'url',
								fieldLabel : 'url地址',
								hidden : true,
								hideLabel : true
							}, {
								name : 'parentid',
								hidden : true,
								hideLabel : true
							}, {
								name : 'leaf',
								hidden : true,
								hideLabel : true
							}];
				}
				var form = new Ext.form.FormPanel({
							labelAlign : 'right',
							labelWidth : 70,
							frame : true,
							height : 180,
							width : 300,
							defaultType : 'textfield',
							buttonAlign : 'center',
							items : [{
										xtype : 'fieldset',
										title : '菜单信息',
										defaultType : 'textfield',
										items : items
									}],
							buttons : [btn_submit]
						});
				var leaf = 0;
				if (node.attributes.leaf) {
					leaf = 1;
				}
				var parentid = 0;
				if (node.parentNode) {
					parentid = node.parentNode.attributes.id;
				} else {
					Ext.get("form").dom.innerHTML = "";
					return;
				}
				var record = new Ext.data.Record({
							id : node.attributes.id,
							title : node.attributes.text,
							parentid : parentid,
							leaf : leaf,
							url : node.attributes.url
						});
				form.getForm().loadRecord(record);
				// 如果已经存在form则删除重新加载
				if (Ext.get("form").dom.children.length > 0) {
					Ext.get("form").dom.innerHTML = "";
					form.render("form");
				} else {
					form.render("form");
				}
			});
	// 创建跟节点
	var root = new Ext.tree.AsyncTreeNode({
				text : '基础信息'
			});
	tree.setRootNode(root);
	root.expand(true, true);
	// 创建布局
	var viewport = new Ext.Viewport({
				layout : 'border',
				items : [tree, {
							region : 'center',
							contentEl : 'form'
						}]
			});
});