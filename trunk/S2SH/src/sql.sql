-- MySQL dump 10.13  Distrib 5.1.49, for Win32 (ia32)
--
-- Host: localhost    Database: bbs
-- ------------------------------------------------------
-- Server version	5.1.49-community

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `bbs`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `S2SH` /*!40100 DEFAULT CHARACTER SET gbk */;

USE `S2SH`;

--
-- Table structure for table `t_perm_res_model_tree`
--

DROP TABLE IF EXISTS `t_perm_res_model_tree`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_perm_res_model_tree` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `parentid` int(11) NOT NULL COMMENT '父节点ID',
  `name` varchar(100) NOT NULL COMMENT '资源包名称',
  `code` varchar(100) DEFAULT NULL COMMENT '资源包编码',
  `number` int(11) DEFAULT NULL COMMENT 'number',
  `leaf` int(4) DEFAULT NULL COMMENT 'leaf',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=gbk COMMENT='资源树表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_perm_res_model_tree`
--

LOCK TABLES `t_perm_res_model_tree` WRITE;
/*!40000 ALTER TABLE `t_perm_res_model_tree` DISABLE KEYS */;
INSERT INTO `t_perm_res_model_tree` VALUES (1,0,'权限管理','qxgl',0,0),(2,1,'用户管理','yhgl',0,1),(13,1,'test','test',0,0);
/*!40000 ALTER TABLE `t_perm_res_model_tree` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_perm_resources`
--

DROP TABLE IF EXISTS `t_perm_resources`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_perm_resources` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `modelid` int(11) DEFAULT NULL,
  `name` varchar(20) NOT NULL COMMENT '资源名称',
  `code` varchar(20) NOT NULL COMMENT '资源码',
  `url` varchar(20) DEFAULT NULL COMMENT 'url',
  `classtype_name` varchar(50) DEFAULT NULL COMMENT '类名',
  `method_name` varchar(20) DEFAULT NULL COMMENT '方法名',
  `parametertype_names` varchar(300) DEFAULT NULL COMMENT '参数',
  `reslx` varchar(20) DEFAULT NULL COMMENT '资源类型',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=gbk COMMENT='权限资源表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_perm_resources`
--

LOCK TABLES `t_perm_resources` WRITE;
/*!40000 ALTER TABLE `t_perm_resources` DISABLE KEYS */;
INSERT INTO `t_perm_resources` VALUES (1,2,'用户查询记录数','user_getTotal','','com.neusoft.struts2.user.service.UserServiceImpl','getTotal','','方法'),(2,2,'用户翻页查询','user_listpage','','com.neusoft.struts2.user.service.UserServiceImpl','listpage','com.neusoft.base.dao.Page','方法'),(9,3,'pers2','pers2',NULL,NULL,NULL,NULL,NULL),(10,2,'1','1','1','1','1','1',NULL),(25,2,'123','123','123','123','123','123','123'),(26,2,'123','123','123333','213','123','123','URL'),(27,2,'123','123','123','123','123','123','123'),(28,2,'2','2','2','2','2','2','2'),(29,2,'2','2','2','2','2','2','URL2'),(30,2,'22','2','2','2','2','2','2'),(31,2,'3','3','3','3','3','3','3'),(32,2,'4','4','4','4','4','4','4'),(33,2,'5','6','55','55','5','5','5'),(34,2,'6','6','6','6','6','6','6'),(35,2,'7','7','7','7','7','7','7'),(36,2,'8','8','8','8','88','8','8'),(37,2,'9','9','9','9','9','9','9'),(38,3,'3234','234','4','4','4','4','URL'),(39,3,'5','5','5','5','5','65','方法');
/*!40000 ALTER TABLE `t_perm_resources` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_perm_role`
--

DROP TABLE IF EXISTS `t_perm_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_perm_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(20) NOT NULL COMMENT '角色名称',
  `code` varchar(20) NOT NULL COMMENT '角色编码',
  `detail` varchar(300) DEFAULT NULL COMMENT '角色说明',
  `parentid` int(11) DEFAULT NULL COMMENT '父节点',
  `number` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=gbk COMMENT='权限角色表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_perm_role`
--

LOCK TABLES `t_perm_role` WRITE;
/*!40000 ALTER TABLE `t_perm_role` DISABLE KEYS */;
INSERT INTO `t_perm_role` VALUES (1,'管理员','admin','管理员',0,0),(2,'普通用户','user','普通用户',0,0),(30,'测试角色1','role_test1',NULL,0,0),(31,'role1','role1',NULL,0,0);
/*!40000 ALTER TABLE `t_perm_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_perm_role_and_resources`
--

DROP TABLE IF EXISTS `t_perm_role_and_resources`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_perm_role_and_resources` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `roleid` int(11) NOT NULL COMMENT '角色ID',
  `resid` int(11) NOT NULL COMMENT '资源ID',
  `detail` varchar(300) DEFAULT NULL COMMENT '说明',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=gbk COMMENT='角色资源对应表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_perm_role_and_resources`
--

LOCK TABLES `t_perm_role_and_resources` WRITE;
/*!40000 ALTER TABLE `t_perm_role_and_resources` DISABLE KEYS */;
INSERT INTO `t_perm_role_and_resources` VALUES (16,31,13,NULL),(17,31,2,NULL),(20,30,1,NULL),(21,30,2,NULL),(22,30,13,NULL);
/*!40000 ALTER TABLE `t_perm_role_and_resources` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_perm_user`
--

DROP TABLE IF EXISTS `t_perm_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_perm_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `username` varchar(20) NOT NULL COMMENT '用户名',
  `password` varchar(20) NOT NULL COMMENT '密码',
  `detail` varchar(300) DEFAULT NULL COMMENT '说明',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=gbk COMMENT='用户表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_perm_user`
--

LOCK TABLES `t_perm_user` WRITE;
/*!40000 ALTER TABLE `t_perm_user` DISABLE KEYS */;
INSERT INTO `t_perm_user` VALUES (1,'test','123','123'),(3,'234','234','234'),(5,'345','345','345'),(6,'aaa','aaa','aaa'),(9,'33','33','33'),(10,'3456','345','345'),(17,'测试用户1','123123',NULL),(21,'user1','user1',NULL);
/*!40000 ALTER TABLE `t_perm_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_perm_user_and_role`
--

DROP TABLE IF EXISTS `t_perm_user_and_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_perm_user_and_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `userid` int(11) NOT NULL COMMENT '用户ID',
  `roleid` int(11) NOT NULL COMMENT '角色ID',
  `detail` varchar(300) DEFAULT NULL COMMENT '说明',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=gbk COMMENT='用户角色关联表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_perm_user_and_role`
--

LOCK TABLES `t_perm_user_and_role` WRITE;
/*!40000 ALTER TABLE `t_perm_user_and_role` DISABLE KEYS */;
INSERT INTO `t_perm_user_and_role` VALUES (9,9,31,NULL),(14,3,30,NULL),(15,5,30,NULL),(16,21,31,NULL);
/*!40000 ALTER TABLE `t_perm_user_and_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_test_tree`
--

DROP TABLE IF EXISTS `t_test_tree`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_test_tree` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `parentid` int(11) NOT NULL COMMENT '父节点ID',
  `title` varchar(100) NOT NULL COMMENT '标题',
  `number` int(11) DEFAULT NULL COMMENT 'number',
  `leaf` int(4) DEFAULT NULL COMMENT 'leaf',
  `url` varchar(500) DEFAULT NULL COMMENT 'url',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=gbk COMMENT='测试树表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_test_tree`
--

LOCK TABLES `t_test_tree` WRITE;
/*!40000 ALTER TABLE `t_test_tree` DISABLE KEYS */;
INSERT INTO `t_test_tree` VALUES (1,0,'权限管理',0,0,'test'),(2,3,'用户维护',0,1,'/extjs/user_list.jsp'),(3,0,'业务应用',0,0,'/extjs/test.html'),(4,1,'用户管理',0,1,'/extjs/perm/user/user_manage.jsp'),(5,1,'菜单管理',0,1,'/extjs/perm/menu/menu_manage.jsp'),(24,1,'资源管理',0,1,'/extjs/perm/res/res_manage.jsp'),(25,1,'角色管理',0,1,'/extjs/perm/role/role_manage.jsp');
/*!40000 ALTER TABLE `t_test_tree` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_user`
--

DROP TABLE IF EXISTS `t_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_user` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `pwd` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=gbk;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_user`
--

LOCK TABLES `t_user` WRITE;
/*!40000 ALTER TABLE `t_user` DISABLE KEYS */;
INSERT INTO `t_user` VALUES (2,'孟志昂','333'),(4,'何建南','啊啊'),(9,'孟志昂','345'),(12,'孟志昂','123'),(18,'孟志昂','123'),(24,'孟志昂','123'),(25,'孟志昂','123'),(26,'孟志昂','123'),(27,'孟志昂','123'),(28,'孟志昂','123'),(29,'孟志昂','123'),(30,'孟志昂','123'),(31,'孟志昂','123'),(32,'孟志昂','123'),(33,'孟志昂','123'),(34,'孟志昂','123'),(35,'孟志昂','123'),(36,'孟志昂','123'),(37,'孟志昂','123'),(38,'孟志昂','123'),(39,'22','22'),(40,'333','333'),(41,'33',''),(42,'1234','234234'),(43,'test','特色'),(44,'test','3333'),(45,'333','333'),(46,'test','test'),(47,'test2','test3'),(48,'test2','test3'),(49,'333','3333333'),(50,'test  ','3333'),(51,'test','test'),(56,'333','333'),(57,'3333333','3333'),(58,'234234234','234234234'),(59,'333','3333333'),(60,'234234','234234'),(61,'额外人','wer'),(62,'333','333'),(63,'222','222'),(64,'444','444'),(65,'33','33'),(66,'222','222'),(67,'孟志昂','3333'),(68,'孟志昂','6666'),(69,'test','test'),(70,'123','123'),(71,'hibernate','test');
/*!40000 ALTER TABLE `t_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2011-01-21 15:39:48
