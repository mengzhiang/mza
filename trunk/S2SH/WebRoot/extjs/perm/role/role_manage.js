Ext.onReady(function() {
	// 角色树
	var loader = new Ext.tree.TreeLoader({
				dataUrl : 'permRole_querytree'
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
	var tree = new Ext.tree.TreePanel({
				loader : loader,
				width : 200
			});
	var root = new Ext.tree.AsyncTreeNode({
				text : '系统角色'
			});
	tree.setRootNode(root);
	root.expand(true, true);
	// 资源树
	var res_loader = new Ext.tree.TreeLoader({
				dataUrl : 'permResModelTree_queryMuTree',
				baseParams : {
					sid : 0
				}
			});
	res_loader.processResponse = function(response, node, callback) {
		var json = response.responseText;
		try {
			var json = eval("(" + json + ")");
			node.beginUpdate();
			var o = json["mutree"];
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
	// 资源树功能按钮
	var ttb = new Ext.Toolbar()
	ttb.add(new Ext.Button({
				text : '保存',
				handler : function() {
					// 获取树的信息
					var nodes = res_tree.getChecked();
					var idarr = [];
					for (var i = 0; i < nodes.length; i++) {
						idarr.push(nodes[i].id);
					}
					console.log(idarr.join(","));
					Ext.Ajax.request({
								url : 'permRole_saveRoleWithResModel',
								success : function(action) {
									Ext.Msg.alert("提示", "保存成功!");
									res_root.reload();
									res_root.expand(true, true);
								},
								failure : function(action) {
									if (action.result.errors) {
									} else {
										Ext.Msg.alert("提示", "保存失败");
									}
								},
								params : {
									sid : modelid,
									resModelIds : idarr.join(",")
								}
							});

				}
			}));
	var res_tree = new Ext.tree.TreePanel({
				tbar : ttb,
				loader : res_loader,
				width : 400,
				hidden : true
			});
	var res_root = new Ext.tree.AsyncTreeNode({
				text : '基础信息'
			});
	res_tree.setRootNode(res_root);
	res_root.expand(true, true);
	// 角色树点击事件
	var modelid = "";
	tree.on("click", function(node) {
				if (node.leaf) {
					modelid = node.attributes.id;
					var loader = new Ext.tree.TreeLoader({
								dataUrl : 'permResModelTree_queryMuTree',
								baseParams : {
									sid : modelid
								}
							});
					loader.processResponse = function(response, node, callback) {
						var json = response.responseText;
						try {
							var json = eval("(" + json + ")");
							node.beginUpdate();
							var o = json["mutree"];
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
					res_tree.loader = loader;
					res_root.reload();
					res_root.expand(true, true);
					res_tree.show();
					var filterArr = new Array;
					if (id != "") {
						var idfilter = {
							name : 'modelid',
							type : 'long',
							property : 'id',
							condition : '=',
							value : modelid
						}
						filterArr.push(idfilter);
					}
					var data = {
						filters : filterArr
					}
					store.baseParams.strFilter = Ext.encode(data);
					store.load({
								params : {
									start : 0,
									limit : 15
								}
							});
					grid.show();
				}
			});

	// 角色所属用户列表
	var sm = new Ext.grid.CheckboxSelectionModel();
	Ext.QuickTips.init();
	var store = new Ext.data.Store({
		proxy : new Ext.data.HttpProxy({
					url : 'permRole_listpage'
				}),
		reader : new Ext.data.JsonReader({
					totalProperty : "paginationSupport.items[0].permUser.length",
					root : "paginationSupport.items[0].permUser"
				}, [{
							name : 'id'
						}, {
							name : 'username'
						}, {
							name : 'password'
						}, {
							name : 'detail'
						}])
	});
	var pagtolbar = new Ext.PagingToolbar({
				pageSize : 15,
				store : store,
				displayInfo : true,
				displayMsg : "显示第{0}到{1}条记录，一共{2}条",
				emptyMsg : "没有记录"
			});

	var tb = new Ext.Toolbar();
	tb.add(new Ext.Button({
				text : '删除用户',
				handler : function() {
					var record = sm.getSelections();
					if (sm.getCount() < 1) {
						Ext.MessageBox.alert("提示", "请选择要删除的用户！");
						return;
					};
					Ext.MessageBox.confirm('请确认', '确定删除该用户？', function(btn) {
								if (btn == 'yes') {
									var idarr = [];
									for (var i = 0; i < record.length; i++) {
										idarr.push(record[i].id);
									}
									Ext.Ajax.request({
												url : 'permRole_deleteRoleWithUser',
												success : function(action) {
													Ext.Msg
															.alert("提示",
																	"删除成功!");
													grid.store.reload();
												},
												failure : function(action) {
													if (action.result.errors) {
													} else {
														Ext.Msg.alert("提示",
																"删除失败");
													}
												},
												params : {
													sid : modelid,
													resModelIds : idarr
															.join(",")
												}
											});
								}
							});

				}
			}));
	tb.add(new Ext.Button({
		text : '新增用户',
		handler : function() {
			var win = new Ext.Window({
				title : '添加用户',
				layout : 'fit',
				width : 500,
				height : 300,
				closeAction : 'hide',
				draggable : true,
				modal : true,
				items : [user_grid],
				buttons : [{
							text : '确定',
							align : 'center',
							handler : function() {
								var record = user_sm.getSelections();
								var idarr = [];
								for (var i = 0; i < record.length; i++) {
									idarr.push(record[i].id);
								}

								Ext.Ajax.request({
											url : 'permRole_saveRoleWithUser',
											success : function(action) {
												Ext.Msg.alert("提示", "保存成功!");
												grid.store.reload();
											},
											failure : function(action) {
												if (action.result.errors) {
												} else {
													Ext.Msg.alert("提示", "保存失败");
												}
											},
											params : {
												sid : modelid,
												resModelIds : idarr.join(",")
											}
										});
							}
						}]
			});
			win.show();
		}
	}));
	var grid = new Ext.grid.GridPanel({
				title : '权限系统用户列表',
				region : 'center',
				autoHeight : true,
				store : store,
				cm : new Ext.grid.ColumnModel([sm, {
							header : '编号',
							dataIndex : 'id'
						}, {
							header : '姓名',
							dataIndex : 'username'
						}, {
							header : '密码',
							dataIndex : 'password'
						}, {
							header : '详细',
							dataIndex : 'detail'
						}]),
				closable : true,
				tbar : tb,
				bbar : pagtolbar,
				sm : sm,
				hidden : true
			});
	// 所有用户列表
	var user_sm = new Ext.grid.CheckboxSelectionModel();
	var user_store = new Ext.data.Store({
				proxy : new Ext.data.HttpProxy({
							url : 'permUser_listpage'
						}),
				reader : new Ext.data.JsonReader({
							totalProperty : "paginationSupport.totalCount",
							root : "paginationSupport.items"
						}, [{
									name : 'id'
								}, {
									name : 'username'
								}, {
									name : 'password'
								}, {
									name : 'detail'
								}])
			});
	user_store.load({
				params : {
					start : 0,
					limit : 15
				}
			});
	var user_grid = new Ext.grid.GridPanel({
				region : 'center',
				autoHeight : true,
				store : user_store,
				cm : new Ext.grid.ColumnModel([user_sm, {
							header : '编号',
							dataIndex : 'id'
						}, {
							header : '姓名',
							dataIndex : 'username'
						}, {
							header : '密码',
							dataIndex : 'password'
						}, {
							header : '详细',
							dataIndex : 'detail'
						}]),
				closable : true,
				bbar : new Ext.PagingToolbar({
							pageSize : 15,
							store : user_store,
							displayInfo : true,
							displayMsg : "显示第{0}到{1}条记录，一共{2}条",
							emptyMsg : "没有记录"
						}),
				sm : user_sm
			});
	// 创建布局
	var viewport = new Ext.Viewport({
				renderTo : document.body,
				layout : 'border',
				items : [{
							title : '系统角色',
							region : 'west',
							split : true,
							width : 200,
							layout : 'fit',
							items : [tree]
						}, {
							region : 'center',
							split : true,
							layout : 'fit',
							items : [new Ext.TabPanel({
										activeTab : 1,
										items : [{
													title : '用户信息',
													items : [grid]
												}, {
													title : '授权',
													items : [res_tree]
												}]
									})]
						}]
			});
});