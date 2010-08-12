
create database bbs;
use bbs;

create table t_user 
( 
id int(3) auto_increment not null primary key, 
name varchar(50) , 
pwd varchar(50)
);

insert into t_user(name,pwd) values("孟志昂","123");
insert into t_user(name,pwd) values("孟志昂","123");
insert into t_user(name,pwd) values("孟志昂","123");
insert into t_user(name,pwd) values("孟志昂","123");
insert into t_user(name,pwd) values("孟志昂","123");
insert into t_user(name,pwd) values("孟志昂","123");
insert into t_user(name,pwd) values("孟志昂","123");
insert into t_user(name,pwd) values("孟志昂","123");
insert into t_user(name,pwd) values("孟志昂","123");
insert into t_user(name,pwd) values("孟志昂","123");

create table t_user 
( 
id int(3) auto_increment not null primary key, 
name varchar(50) , 
pwd varchar(50)
);

--资源表
CREATE TABLE t_perm_resources (
  id INTEGER(11) auto_increment NOT NULL primary key COMMENT 'id',
  name VARCHAR(20) NOT NULL COMMENT '资源名称',
  code VARCHAR(20) NOT NULL UNIQUE KEY COMMENT '资源码',
  reslx INTEGER NOT NULL COMMENT '资源类型0是URL1是方法',
  url VARCHAR(20) DEFAULT NULL COMMENT 'url',
  classtype_name VARCHAR(50) DEFAULT NULL COMMENT '类名',
  method_name VARCHAR(20) DEFAULT NULL COMMENT '方法名',
  parametertype_names VARCHAR(300) DEFAULT NULL COMMENT '参数'
)COMMENT'权限资源表';
INSERT INTO `t_perm_resources` (`id`, `name`, `code`, `reslx`, `url`, `classtype_name`, `method_name`, `parametertype_names`) VALUES 
  (1, '用户查询记录数', 'user_getTotal', 1, NULL, 'com.neusoft.struts2.user.service.UserServiceImpl', 'getTotal', NULL),
  (2, '用户翻页查询', 'user_listpage', 1, NULL, 'com.neusoft.struts2.user.service.UserServiceImpl', 'listpage', 'com.neusoft.base.dao.Page');

  
  --角色表
CREATE TABLE t_perm_role (
  id INTEGER(11) auto_increment NOT NULL primary key COMMENT 'id',
  name VARCHAR(20) NOT NULL COMMENT '角色名称',
  code VARCHAR(20) NOT NULL UNIQUE KEY COMMENT '角色编码',
  detail VARCHAR(300) DEFAULT NULL COMMENT '角色说明'
)COMMENT'权限角色表';
INSERT INTO `t_perm_role` (`id`, `name`, `code`, `detail`) VALUES 
  (1, '管理员', 'admin', '管理员'),
  (2, '普通用户', 'user', '普通用户');
  
--角色资源关联表
CREATE TABLE t_perm_role_and_resources (
  id INTEGER(11) auto_increment NOT NULL primary key COMMENT 'id',
  roleid INTEGER(11) NOT NULL COMMENT '角色ID',
  resid INTEGER(11) NOT NULL  COMMENT '资源ID',
  detail VARCHAR(300) DEFAULT NULL COMMENT '说明'
)COMMENT'角色资源对应表';
INSERT INTO `t_perm_role_and_resources` (`id`, `rolecode`, `rescode`, `detail`) VALUES 
  (1, 'admin', 'user_getTotal', '管理员可以查询用户数量'),
  (2, 'user', 'user_listpage', '普通用户可以查询用户信息');

--用户角色关联表
CREATE TABLE t_perm_user_and_role (
  id INTEGER(11) auto_increment NOT NULL primary key COMMENT 'id',
  username INTEGER(11) NOT NULL COMMENT '用户ID',
  rolecode INTEGER(11) NOT NULL  COMMENT '角色ID',
  detail VARCHAR(300) DEFAULT NULL COMMENT '说明'
)COMMENT'用户角色关联表';
--用户表
CREATE TABLE t_perm_user (
  id INTEGER(11) auto_increment NOT NULL primary key COMMENT 'id',
  username VARCHAR(20) NOT NULL UNIQUE KEY COMMENT '用户名',
  password VARCHAR(20) NOT NULL  COMMENT '密码',
  detail VARCHAR(300) DEFAULT NULL COMMENT '说明'
)COMMENT'用户表';

//显示所有字段
show full columns from t_perm_role;

--用户表
CREATE TABLE t_test_tree (
  id INTEGER(11) auto_increment NOT NULL primary key COMMENT 'id',
  parentid INTEGER(11) NOT NULL  COMMENT '父节点ID',
  title VARCHAR(100) NOT NULL  COMMENT '标题',
  number INTEGER(11)  COMMENT 'number',
  leaf INTEGER(4)  COMMENT 'leaf',
  url VARCHAR(500) DEFAULT NULL COMMENT 'url'
)COMMENT'测试树表';

INSERT INTO `t_test_tree` (`id`, `parentid`, `title`,`number`, `leaf`) VALUES 
  (1, '0', 'n1',0, '0'),
  (2, '1', 'n1l1',0,'1'),
  (3, '0', 'n2',0, '1');
  
  