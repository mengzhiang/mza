
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
--角色表
CREATE TABLE t_perm_role (
  id INTEGER(11) auto_increment NOT NULL primary key COMMENT 'id',
  name VARCHAR(20) NOT NULL COMMENT '角色名称',
  code VARCHAR(20) NOT NULL UNIQUE KEY COMMENT '角色编码',
  detail VARCHAR(300) DEFAULT NULL COMMENT '角色说明'
)COMMENT'权限角色表';
--角色资源关联表
CREATE TABLE t_perm_role_and_resources (
  id INTEGER(11) auto_increment NOT NULL primary key,
  roleid INTEGER(11) NOT NULL,
  resid INTEGER(11) NOT NULL ,
  detail VARCHAR(300) DEFAULT NULL
);
--用户角色关联表
CREATE TABLE t_perm_user_and_role (
  id INTEGER(11) auto_increment NOT NULL primary key,
  userid INTEGER(11) NOT NULL,
  roleid INTEGER(11) NOT NULL ,
  detail VARCHAR(300) DEFAULT NULL
);
--角色表
CREATE TABLE t_perm_role (
  id INTEGER(11) auto_increment NOT NULL primary key,
  name VARCHAR(20) NOT NULL,
  code VARCHAR(20) NOT NULL UNIQUE KEY ,
  detail VARCHAR(300) DEFAULT NULL
);

//显示所有字段
show full columns from t_perm_role;