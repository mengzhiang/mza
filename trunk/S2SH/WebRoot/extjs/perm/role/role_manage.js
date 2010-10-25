Ext.onReady(function() {
	// 树形配置开始
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
	// 创建树panel
	var tree = new Ext.tree.TreePanel({
				loader : loader,
				width : 200
			});
			
	/**********************************第二个树资源树*************************************************/
	var res_loader = new Ext.tree.TreeLoader({dataUrl: 'permResModelTree_queryMuTree'});
    res_loader.processResponse = function(response, node, callback){
        var json = response.responseText;
        try {
            var json = eval("("+json+")");
            node.beginUpdate();
            var o = json["mutree"];
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
    var res_tree = new Ext.tree.TreePanel({
        loader: res_loader,
        width: 200
    });
    var res_root = new Ext.tree.AsyncTreeNode({text:'基础信息'});
    res_tree.setRootNode(res_root);
    res_root.expand(true,true);
	/***********************************************************************************/
	var add_leaf_item = {
		text : '新增下级菜单项',
		handler : function() {
			var btn_submit = new Ext.Button({
						text : '提交',
						handler : function() {
							var bsform = form.getForm();
							console.log(bsform);
							bsform.doAction('submit', {
										url : 'permResModelTree_save',
										method : 'post',
										waitMsg : '正在保存',
										timeout : 10000,
										success : function(form, action) {
											Ext.Msg.alert("提示", "保存成功!");
											root.reload();
											root.expand(true, true);
											win.hide();
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
						height : 117,
						width : 300,
						defaultType : 'textfield',
						buttonAlign : 'center',
						items : [{
									fieldLabel : '资源包编码',
									name : 'code'
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
									fieldLabel : '资源包名称',
									name : 'name'
								}],
						buttons : [btn_submit]
					});

			var selNode = tree.getSelectionModel().selNode;
			var attr = selNode.attributes;
			var record = new Ext.data.Record({
						parentid : attr.id,
						leaf : 1,
						number : 0
					});
			form.getForm().loadRecord(record);
			var win = new Ext.Window({
						title : "新增资源包",
						width : 300,
						height : 150,
						closeAction : 'hide',
						draggable : true,
						modal : true,// 模态窗口，后面不能操作
						items : [form]
					});
			win.show();
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
										url : 'permResModelTree_save',
										method : 'post',
										waitMsg : '正在保存',
										timeout : 10000,
										success : function(form, action) {
											Ext.Msg.alert("提示", "保存成功!");
											root.reload();
											root.expand(true, true);
											win.hide();
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
						height : 117,
						width : 300,
						defaultType : 'textfield',
						buttonAlign : 'center',
						items : [{
									fieldLabel : '资源包编码',
									name : 'code'
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
									fieldLabel : '资源包名称',
									name : 'name'
								}],
						buttons : [btn_submit]
					});
			var selNode = tree.getSelectionModel().selNode;
			var attr = selNode.attributes;
			var record = new Ext.data.Record({
						parentid : attr.id,
						leaf : 0,
						number : 0
					});
			form.getForm().loadRecord(record);
			var win = new Ext.Window({
						title : "新增资源包",
						width : 300,
						height : 150,
						closeAction : 'hide',
						draggable : true,
						modal : true,// 模态窗口，后面不能操作
						items : [form]
					});
			win.show();
		}
	};
	var delete_item = {
		text : '删除',
		handler : function() {
			var node = tree.getSelectionModel().selNode;
			Ext.MessageBox.confirm('请确认', '确定删除该资源包吗？', function(btn) {
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
										name : node.attributes.text,
										parentid : parentid,
										leaf : leaf,
										code : node.attributes.url
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
										url : 'permResModelTree_delAll',
										success : function(request) {
											Ext.Msg.alert('信息', '删除成功');
											root.reload();
											root.expand(true, true);
											Ext.get("form").dom.innerHTML = "";
										},
										failure : function() { // 发送失败的回调函数
											Ext.Msg
													.alert("错误",
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
				if (node.leaf) {
					var modelid = node.attributes.id;
					var filterArr = new Array;
					if (id != "") {
						var idfilter = {
							name : 'modelid',
							type : 'String',
							property : 'modelid',
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
					form_query.getForm().reset();
				}
			});
	// 创建跟节点
	var root = new Ext.tree.AsyncTreeNode({
				text : '系统角色'
			});
	tree.setRootNode(root);
	root.expand(true, true);
	/**
	 * 1:选择框 ******************************************************
	 */
	var sm = new Ext.grid.CheckboxSelectionModel();
	/**
	 * 2：定义grid列头和对应的属性名
	 * ***************************************************************
	 */
	var columns = [sm, {
				header : '编号',
				dataIndex : 'id',
				width : 50
			}, {
				header : '资源名称',
				dataIndex : 'name'
			}, {
				header : '资源编码',
				dataIndex : 'code'
			}, {
				header : '资源类型',
				dataIndex : 'reslx',
				width : 70
			}, {
				header : 'URL地址',
				dataIndex : 'url',
				width : 70
			}, {
				header : '类名',
				dataIndex : 'classtype_name',
				width : 250
			}, {
				header : '方法名',
				dataIndex : 'method_name',
				width : 70
			}, {
				header : '参数',
				dataIndex : 'parametertype_names',
				width : 90
			}];
	/**
	 * 3：定义从后来取数据的
	 * ****************************************************************
	 */
	var fields = [{
				name : 'id'
			}, {
				name : 'modelid'
			}, {
				name : 'name'
			}, {
				name : 'code'
			}, {
				name : 'reslx'
			}, {
				name : 'url'
			}, {
				name : 'classtype_name'
			}, {
				name : 'method_name'
			}, {
				name : 'parametertype_names'
			}];
	/**
	 * 4：更改“xxxx”为模块的小写名称。因为后台匹配好了。
	 * ****************************************************************
	 */

	/**
	 * 5：新增form的items,编辑的items 新增form的大小，和编辑页面大小
	 * ****************************************************************
	 */
	var win_width = 500;
	var win_height = 300;
	var additems = [{
				fieldLabel : 'modelid',
				name : 'modelid',
				hidden : true,
				hideLabel : true
			}, {
				fieldLabel : '资源名称',
				name : 'name',
				width : 340
			}, {
				fieldLabel : '资源编码',
				name : 'code',
				width : 340
			}, {
				fieldLabel : '资源类型',
				name : 'reslx',
				width : 340,
				xtype : "combo",
				store : new Ext.data.SimpleStore({
							fields : ['value', 'text'],
							data : [['0', 'URL'], ['1', '方法']]
						}),
				displayField : 'text',
				valueField : 'value',
				mode : 'local'
			}, {
				fieldLabel : 'URL地址',
				name : 'url',
				width : 340
			}, {
				fieldLabel : '类名',
				name : 'classtype_name',
				width : 340
			}, {
				fieldLabel : '方法名',
				name : 'method_name',
				width : 340
			}, {
				fieldLabel : '参数',
				name : 'parametertype_names',
				width : 340
			}];
	var edititems = [{
				fieldLabel : 'id',
				name : 'id',
				readOnly : true,
				width : 340
			}, {
				fieldLabel : 'modelid',
				name : 'modelid',
				hidden : true,
				hideLabel : true
			}, {
				fieldLabel : '资源名称',
				name : 'name',
				width : 340
			}, {
				fieldLabel : '资源编码',
				name : 'code',
				width : 340
			}, {
				fieldLabel : '资源类型',
				name : 'reslx',
				width : 340,
				xtype : "combo",
				store : new Ext.data.SimpleStore({
							fields : ['value', 'text'],
							data : [['0', 'URL'], ['1', '方法']]
						}),
				displayField : 'text',
				valueField : 'value',
				mode : 'local'
			}, {
				fieldLabel : 'URL地址',
				name : 'url',
				width : 340
			}, {
				fieldLabel : '类名',
				name : 'classtype_name',
				width : 340
			}, {
				fieldLabel : '方法名',
				name : 'method_name',
				width : 340
			}, {
				fieldLabel : '参数',
				name : 'parametertype_names',
				width : 340
			}];
	/**
	 * ************** 6：自定义查询条件
	 * ****************************************************************
	 */
	var queryitems = [{
				columnWidth : .3,
				layout : 'form',
				items : [{
							name : 'id',
							xtype : 'textfield',
							fieldLabel : '编码'
						}, {
							width : 141,
							name : 'reslx',
							xtype : 'textfield',
							fieldLabel : '资源类型',
							xtype : "combo",
							store : new Ext.data.SimpleStore({
										fields : ['value', 'text'],
										data : [['0', 'URL'], ['1', '方法']]
									}),
							displayField : 'text',
							valueField : 'value',
							mode : 'local'
						}, {
							name : 'method_name',
							xtype : 'textfield',
							fieldLabel : '方法名'
						}]
			}, {
				columnWidth : .3,
				layout : 'form',
				items : [{
							name : 'name',
							xtype : 'textfield',
							fieldLabel : '资源名称'
						}, {
							name : 'url',
							xtype : 'textfield',
							fieldLabel : 'URL地址'
						}, {
							name : 'parametertype_names',
							xtype : 'textfield',
							fieldLabel : '参数名'
						}]
			}, {
				columnWidth : .3,
				layout : 'form',
				items : [{
							name : 'code',
							xtype : 'textfield',
							fieldLabel : '资源编码'
						}, {
							name : 'classtype_name',
							xtype : 'textfield',
							fieldLabel : '类名'
						}, {
							layout : 'form',
							items : [{
								name : 'button',
								xtype : 'button',
								text : '查&nbsp;&nbsp;&nbsp;&nbsp;询',
								handler : function() {
									var object = form_query.getForm()
											.getValues();
									console.log(object);
									var filterArr = new Array;
									var selNode = tree.getSelectionModel().selNode;
									if (!selNode) {
										return;
									}
									var attr = selNode.attributes;
									var modelid = attr.id;
									var modelfilter = {
										name : 'modelid',
										type : 'String',
										property : 'modelid',
										condition : '=',
										value : modelid
									}
									filterArr.push(modelfilter);
									if (object.id != "") {
										var filter = {
											name : 'id',
											type : 'long',
											property : 'id',
											condition : '=',
											value : object.id
										}
										filterArr.push(filter);
									}
									if (object.name != "") {
										var filter = {
											name : 'name',
											type : 'String',
											property : 'name',
											condition : 'like',
											value : "%" + object.name + "%"
										}
										filterArr.push(filter);
									}
									if (object.code != "") {
										var filter = {
											name : 'code',
											type : 'String',
											property : 'code',
											condition : 'like',
											value : "%" + object.code + "%"
										}
										filterArr.push(filter);
									}
									if (object.reslx != "") {
										var filter = {
											name : 'reslx',
											type : 'String',
											property : 'reslx',
											condition : 'like',
											value : "%" + object.reslx + "%"
										}
										filterArr.push(filter);
									}
									if (object.url != "") {
										var filter = {
											name : 'url',
											type : 'String',
											property : 'url',
											condition : 'like',
											value : "%" + object.url + "%"
										}
										filterArr.push(filter);
									}
									if (object.classtype_name != "") {
										var filter = {
											name : 'classtype_name',
											type : 'String',
											property : 'classtype_name',
											condition : 'like',
											value : "%" + object.classtype_name
													+ "%"
										}
										filterArr.push(filter);
									}
									if (object.method_name != "") {
										var filter = {
											name : 'method_name',
											type : 'String',
											property : 'method_name',
											condition : 'like',
											value : "%" + object.method_name
													+ "%"
										}
										filterArr.push(filter);
									}
									if (object.parametertype_names != "") {
										var filter = {
											name : 'parametertype_names',
											type : 'String',
											property : 'parametertype_names',
											condition : 'like',
											value : "%"
													+ object.parametertype_names
													+ "%"
										}
										filterArr.push(filter);
									}
									var data = {
										filters : filterArr
									}
									store.baseParams.strFilter = Ext
											.encode(data);
									store.load({
												params : {
													start : 0,
													limit : 15
												}
											});
								}
							}]
						}]
			}]

	/** ***************************************************************************************** */
	// 初始化提示信息
	Ext.QuickTips.init();
	var cm = new Ext.grid.ColumnModel(columns);
	var store = new Ext.data.Store({
				proxy : new Ext.data.HttpProxy({
							url : 'permRes_listpage'
						}),
				reader : new Ext.data.JsonReader({
							totalProperty : "paginationSupport.totalCount",
							root : "paginationSupport.items"
						}, fields)
			});
	// 创建翻页对象
	var pagtolbar = new Ext.PagingToolbar({
				pageSize : 15,
				store : store,
				displayInfo : true,
				displayMsg : "显示第{0}到{1}条记录，一共{2}条",
				emptyMsg : "没有记录"
			});
	var btn_add_submit = new Ext.Button({
				text : '提交',
				handler : function() {
					var bsform = form_add.getForm();
					console.log(bsform);
					bsform.doAction('submit', {
								url : 'permRes_save',
								method : 'post',
								waitMsg : '正在保存',
								timeout : 10000,
								success : function(form, action) {
									Ext.Msg.alert("提示", "保存成功!");
									win.hide();
									grid.store.reload();
								},
								failure : function(form, action) {
									if (action.result.errors) {
										// Ext.Msg.alert("提示",
										// action.result.errors.username);
									} else {
										Ext.Msg.alert("提示", "保存失败");
									}
								}
							});
				}
			});
	// 修改提交
	var btn_edit_submit = new Ext.Button({
				text : '提交',
				handler : function() {
					var bsform = form_edit.getForm();
					bsform.doAction('submit', {
								url : 'permRes_save',
								method : 'post',
								waitMsg : '正在保存',
								timeout : 10000,
								success : function(form, action) {
									Ext.Msg.alert("提示", "保存成功!");
									win_edit.hide();
									grid.store.reload();
								},
								failure : function(form, action) {
									Ext.Msg.alert("提示", "保存失败！");
								}
							});
				}
			});
	// 新增返回
	var btn_add_back = new Ext.Button({
				text : '返回',
				handler : function() {
					win.hide();
				}
			});
	// 修改返回
	var btn_edit_back = new Ext.Button({
				text : '返回',
				handler : function() {
					win_edit.hide();
				}
			});
	// 新增form
	var form_add = new Ext.form.FormPanel({
				labelAlign : 'right',
				labelWidth : 80,
				height : win_height - 33,
				frame : true,
				border : 0,
				defaultType : 'textfield',
				buttonAlign : 'center',
				items : additems,
				buttons : [btn_add_submit, btn_add_back]
			});
	// 修改form
	var form_edit = new Ext.form.FormPanel({
				labelAlign : 'right',
				labelWidth : 80,
				frame : true,
				height : win_height - 33,
				defaultType : 'textfield',
				buttonAlign : 'center',
				items : edititems,
				buttons : [btn_edit_submit, btn_edit_back]
			});
	// 创建按钮
	var tb = new Ext.Toolbar();
	var win = new Ext.Window({
				title : "新增用户",
				width : win_width,
				height : win_height,
				closeAction : 'hide',
				draggable : true,
				modal : true,// 模态窗口，后面不能操作
				items : [form_add]
			});
	// 修改窗口
	var win_edit = new Ext.Window({
				title : "修改用户",
				width : win_width,
				height : win_height,
				closeAction : 'hide',
				draggable : true,
				modal : true,// 模态窗口，后面不能操作
				items : [form_edit]
			});
	// 新增按钮
	var btn_add = new Ext.Button({
				text : '新增',
				handler : function() {
					form_add.getForm().reset();
					var selNode = tree.getSelectionModel().selNode;
					var attr = selNode.attributes;
					var record = new Ext.data.Record({
								modelid : attr.id
							});
					form_add.getForm().loadRecord(record);
					win.show();
				}
			});
	// 修改按钮
	var btn_edit = new Ext.Button({
				text : '修改',
				handler : function() {
					if (sm.getCount() != 1) {
						Ext.MessageBox.alert("提示", "请选择一条数据！");
						return;
					};
					form_edit.getForm().reset();
					win_edit.show();
					var record = sm.getSelected();
					form_edit.getForm().loadRecord(record);
				}
			});
	// 删除按钮
	var btn_del = new Ext.Button({
				text : '删除',
				handler : function() {
					if (sm.getCount() < 1) {
						Ext.MessageBox.alert("提示", "请选择要删除的数据！");
						return;
					};
					Ext.MessageBox.confirm('请确认', '确定删除该用户？', function(btn) {
								if (btn == 'yes') {
									var records = sm.getSelections();
									var rl = records.length;
									var delRecords = new Array;
									for (var i = 0; i < rl; i++) {
										delRecords.push(records[i].data);
									}
									var data = {
										list : delRecords
									}
									Ext.Ajax.request({
												headers : {
													contentType : "application/json"
												},
												method : 'POST',
												url : 'permRes_delAll',
												success : function(request) {
													Ext.Msg.alert('信息', '删除成功');
													grid.store.reload();
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
			});

	tb.add(btn_add);
	tb.add(btn_edit);
	tb.add(btn_del);
	// 创建grid
	var grid = new Ext.grid.GridPanel({
				title : '权限系统用户列表',
				region : 'center',
				autoHeight : true,
				store : store,
				cm : cm,
				closable : true,// tab 可关闭
				tbar : tb,
				bbar : pagtolbar,
				sm : sm,
				hidden : true
			});

	// 创建form
	var form_query = new Ext.form.FormPanel({
				region : 'north',
				title : '查询',
				labelAlign : 'right',
				labelWidth : 80,
				buttonAlign : 'center',
				frame : true,
				width : 800,
				height : 150,
				layout : 'column',
				items : queryitems
			});
	// 创建布局
//	var res_viewport = new Ext.Panel({
//				layout : 'border',
//				items : [form_query, grid]
//			});
//	var res_viewport = new Ext.Panel({
//				layout : 'border',
//				items : [res_tree]
//			});
	var tabs = new Ext.TabPanel({
				activeTab : 1,
				items : [{
							title : '用户信息',
							items :[grid]
						}, {
							title : '授权',
							items :[res_tree]
						}]
			});
	// 创建布局
	var viewport = new Ext.Viewport({
				renderTo : document.body,
				layout : 'border',
				items : [{
							title : '现有菜单',
							region : 'west',
							split : true,
							width : 200,
							layout : 'fit',
							items : [tree]
						}, {
							region : 'center',
							split : true,
							layout : 'fit',
							items : [tabs]
						}]
			});
});