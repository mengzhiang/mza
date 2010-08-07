
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
  id INTEGER(11) auto_increment NOT NULL primary key,
  name VARCHAR(20) NOT NULL,
  code VARCHAR(20) NOT NULL UNIQUE KEY ,
  reslx INTEGER NOT NULL,
  url VARCHAR(20) DEFAULT NULL,
  classtype_name VARCHAR(50) DEFAULT NULL,
  method_name VARCHAR(20) DEFAULT NULL,
  parametertype_names VARCHAR(300) DEFAULT NULL
);
--角色表
CREATE TABLE t_perm_role (
  id INTEGER(11) auto_increment NOT NULL primary key,
  name VARCHAR(20) NOT NULL,
  code VARCHAR(20) NOT NULL UNIQUE KEY ,
  detail VARCHAR(300) DEFAULT NULL
);
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
