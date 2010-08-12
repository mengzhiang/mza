

1：这是我搭建的第一个ssh框架
Struts2 2.1.6
Spring 2.5.6
hibernate 3.3.2

中间遇到的问题
最难的Spring中配置hibernate扫描，注意最后面一定不要加上*,*可以加在中间

1:加入spring 事务控制
2:完成struts2标签做的增删改查
3：加入extjs来完成增删改查
4：加入dojo的grid来完成的增删改查
5：加入jquery来完成增删改查
6：试试jfreechart来完成报表的尝试
7：尝试下工作流jbpm
8：尝试自己解析grid来拼table

9:分页
10:按字段查询，把前台查询条件拼到线程变量里，传给后台。

2010，4.4 加入struts2-json-plugin-2.1.8.1.jar
          更改struts2配置文件，extends="json-default"
          把jsp文件都放在s2sh文件夹下
          现在访问列表返回的是一个json串，需要解析，下一步做
          
          参考文章
          http://hi.baidu.com/clking419/blog/item/503abb18079b250535fa41b5.html
-----------------------------------------------------------------------------------

2010-05-02
想法：自己写个标签，写上属性，来个表格

1：明天加上拖动
2:明天加上分页
http://www.blogjava.net/wujun/archive/2009/06/12/65890.html

http://tech.ddvip.com/2009-01/1232558101106757.html


给这个系统加上一个登陆页面，实现登陆功能，转到主页面，然后加个登出按钮。

翻页的封装可以用线程变量 然后创建一个上下文，直接再封装一层就直接分页了，unieap如此实现的。
          
          动态树。
          http://yahaitt.javaeye.com/blog/207696    
          
          引入jfreechart  jar包
          
          三个 一个是struts2插件jar包还有jfreechart包还有jcommon包
          
          http://localhost:8080/S2SH/jfreechart/test.jsp
          数据暂时保存在application中 重启服务就没了。
          
   我把你给我的iTextAsian.jar放到了LIB下，然后设置
    Font        name:    宋体 
    PDF font name:   STSong-Light 
    PDF  Encoding:  UniGB-UCS2-H(Chinese Siplified)
    PDF   Embeded: √
    
    
  下一步工作
  hibernate查询如何完成用DetchedCritial来做 
    

			