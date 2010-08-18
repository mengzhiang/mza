Ext.onReady(function() {
	var sm = new Ext.grid.CheckboxSelectionModel();
	var cm = new Ext.grid.ColumnModel([sm, {
				header : '编号',
				dataIndex : 'id'
			}, {
				header : '姓名',
				dataIndex : 'name'
			}, {
				header : '密码',
				dataIndex : 'pwd'
			}]);
	var store = new Ext.data.Store({
				proxy : new Ext.data.HttpProxy({
							url : 'user_listpage'
						}),
				reader : new Ext.data.JsonReader({
							totalProperty : "totalcount",
							root : "users"
						}, [{
									name : 'id'
								}, {
									name : 'name'
								}, {
									name : 'pwd'
								}])
			});
	store.load({
				params : {
					start : 0,
					limit : 20
				}
			});
	// 创建翻页对象
	var pagtolbar = new Ext.PagingToolbar({
				pageSize : 10,
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
								url : 'user_save',
								method : 'post',
								waitMsg : '正在保存',
								timeout : 10000,
								success : function(form, action) {
									Ext.Msg.alert("提示", "保存成功!");
									win.hide();
									grid.store.reload();
								},
								failure : function(form, action) {
									Ext.Msg.alert("提示", "保存失败！");
								}
							});

				}
			});
	// 修改提交
	var btn_edit_submit = new Ext.Button({
				text : '提交',
				handler : function() {
					var bsform = form_edit.getForm();
					console.log(bsform);
					bsform.doAction('submit', {
								url : 'user_save',
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
				labelWidth : 50,
				frame : true,
				defaultType : 'textfield',
				buttonAlign : 'center',
				items : [{
							fieldLabel : '姓名',
							name : 'name'
						}, {
							fieldLabel : '密码',
							name : 'pwd',
							inputType : 'password'
						}],
				buttons : [btn_add_submit, btn_add_back]
			});
	// 新增form
	var form_edit = new Ext.form.FormPanel({
				labelAlign : 'right',
				labelWidth : 50,
				frame : true,
				defaultType : 'textfield',
				buttonAlign : 'center',
				items : [{
							fieldLabel : 'id',
							name : 'id',
							readOnly : true
						}, {
							fieldLabel : '姓名',
							name : 'name'
						}, {
							fieldLabel : '密码',
							name : 'pwd'
						}],
				buttons : [btn_edit_submit, btn_edit_back]
			});
	// 创建按钮
	var tb = new Ext.Toolbar();
	var win = new Ext.Window({
				title : "新增用户",
				width : 500,
				height : 300,
				closeAction : 'hide',
				draggable : true,
				modal : true,// 模态窗口，后面不能操作
				items : [form_add]
			});
	// 修改窗口
	var win_edit = new Ext.Window({
				title : "修改用户",
				width : 500,
				height : 300,
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
					Ext.MessageBox.confirm('请确认', '确定删除该用户？', function(btn) {
								if (btn == 'yes') {
									var records = sm.getSelections();
									var rl = records.length;
									var delRecords = new Array;
									for (var i = 0; i < rl; i++) {
										delRecords.push(records[i].data);
									}
									var data = {
										users:delRecords
									}
									Ext.Ajax.request({
												headers : {
													contentType : "application/json"
												},
												method : 'POST',
												url : 'user_delAll',
												success : function(request) {
													Ext.Msg.alert('信息', '删除成功');
													grid.store.reload();
												},
												failure : function() { // 发送失败的回调函数
													Ext.Msg.alert("错误",
															"与后台联系的时候出现了问题");
												},
												params : {
													strJson : Ext
															.encode(data)
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
				anchor : '100%',
				viewConfig : {
					forceFit : true
				},
				autoHeight : true,
				store : store,
				cm : cm,
				closable : true,// tab 可关闭
				tbar : tb,
				bbar : pagtolbar,
				sm : sm
			});

	// 创建form
	var form_query = new Ext.form.FormPanel({
				title : '查询',
				viewConfig : {
					forceFit : true
				},
				anchor : '100% 20%',
				defaultType : 'textfield',
				labelAlign : 'right',
				labelWidth : 50,
				buttonAlign : 'center',
				frame : true,
				width : 220,

				items : [{
							fieldLabel : '文本框'
						}],
				buttons : [{
							text : '按钮'
						}]
			});
	// 创建布局
	var viewport = new Ext.Viewport({
				layout : 'anchor',
				items : [form_query, grid]
			});
});