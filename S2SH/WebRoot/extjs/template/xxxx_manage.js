Ext.onReady(function() {
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
			}];
	/**
	 * 3：定义从后来取数据的
	 * ****************************************************************
	 */
	var fields = [{
				name : 'id'
			}, {
				name : 'username'
			}, {
				name : 'password'
			}, {
				name : 'detail'
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
	var win_height = 250;
	var additems = [{
				fieldLabel : '姓名',
				name : 'username',
				allowBlank:false
			}, {
				fieldLabel : '密码',
				name : 'password'
			}, {
				width : 345,
				height : 80,
				name : 'detail',
				xtype : 'textarea',
				fieldLabel : '详细'
			}];
	var edititems = [{
				fieldLabel : 'id',
				name : 'id',
				readOnly : true
			}, {
				fieldLabel : '姓名',
				name : 'username'
			}, {
				fieldLabel : '密码',
				name : 'password'
			}, {
				width : 345,
				height : 80,
				name : 'detail',
				xtype : 'textarea',
				fieldLabel : '详细'
			}];
	/**
	 * ************** 6：自定义查询条件
	 * ****************************************************************
	 */
	var queryitems = [{
				columnWidth : .2,
				layout : 'form',
				items : [{
							name : 'id',
							xtype : 'textfield',
							fieldLabel : 'id'
						}]
			}, {
				columnWidth : .2,
				layout : 'form',
				items : [{
							name : 'username',
							xtype : 'textfield',
							fieldLabel : '姓名'
						}]
			}, {
				columnWidth : .2,
				layout : 'form',
				items : [{
							name : 'password',
							xtype : 'textfield',
							fieldLabel : '密码'
						}]
			}, {
				columnWidth : .2,
				layout : 'form',
				items : [{
							name : 'detail',
							xtype : 'textfield',
							fieldLabel : '详细'
						}]
			}, {
				columnWidth : .2,
				layout : 'form',
				items : [{
							name : 'button',
							xtype : 'button',
							text : '查&nbsp;&nbsp;&nbsp;&nbsp;询',
							handler : function() {
								var object = form_query.getForm().getValues();
								console.log(object);
								var filterArr = new Array;
								if (object.id != "") {
									var idfilter = {
										name : 'id',
										type : 'long',
										property : 'id',
										condition : '=',
										value : object.id
									}
									filterArr.push(idfilter);
								}
								if (object.username != "") {
									var namefilter = {
										name : 'name',
										type : 'String',
										property : 'username',
										condition : 'like',
										value : "%" + object.username + "%"
									}
									filterArr.push(namefilter);
								}
								if (object.password != "") {
									var pwdfilter = {
										name : 'pwd',
										type : 'String',
										property : 'password',
										condition : 'like',
										value : "%" + object.password + "%"
									}
									filterArr.push(pwdfilter);
								}
								if (object.detail != "") {
									var detailfilter = {
										name : 'detail',
										type : 'String',
										property : 'detail',
										condition : 'like',
										value : "%" + object.detail + "%"
									}
									filterArr.push(detailfilter);
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
							}
						}]
			}]

	/** ***************************************************************************************** */
	//初始化提示信息		
	Ext.QuickTips.init();
	var cm = new Ext.grid.ColumnModel(columns);
	var store = new Ext.data.Store({
				proxy : new Ext.data.HttpProxy({
							url : 'permUser_listpage'
						}),
				reader : new Ext.data.JsonReader({
							totalProperty : "paginationSupport.totalCount",
							root : "paginationSupport.items"
						}, fields)
			});
	store.load({
				params : {
					start : 0,
					limit : 15
				}
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
								url : 'permUser_save',
								method : 'post',
								waitMsg : '正在保存',
								timeout : 10000,
								success : function(form, action) {
									Ext.Msg.alert("提示", "保存成功!");
									win.hide();
									grid.store.reload();
								},
								failure : function(form, action) {
									if(action.result.errors){
										//Ext.Msg.alert("提示", action.result.errors.username);
									}else{
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
								url : 'permUser_save',
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
				labelWidth : 50,
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
												url : 'permUser_delAll',
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
				anchor : '100% 10%',
				labelAlign : 'right',
				labelWidth : 50,
				buttonAlign : 'center',
				frame : true,
				width : 630,
				layout : 'column',
				items : queryitems
			});
	// 创建布局
	var viewport = new Ext.Viewport({
				layout : 'anchor',
				items : [form_query, grid]
			});
});