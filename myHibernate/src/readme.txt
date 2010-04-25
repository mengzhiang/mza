思路1：先用JDBC连接数据库
引入jdom包
2：吧sql语句编程动态的，从xml读取信息sql上
3：xml的组织形式和hibernate类似

1:hibernate 如何调用保存方法
session.save(Entity);
通过entity得到entity的class名字，通过名字找到对应的配置信息，读取配置信息并放到map中，
hibernate 在加载过程中肯定把所有的hbm文件都读取一遍放到内存里 了。或者放到了sessionFactory中