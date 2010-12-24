package com.ditest;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;



/**
 * Created on 2010-12-23
 * 测试 MZABeanFactory 模拟spring的依赖注入
 * @author: 孟志昂
 * @email:  mengzha@gmail.com
 * @version:$Revision$
*/
public class MZABeanFactory {
	
	private Map<String,Object> map = new HashMap<String,Object>();
	
	public MZABeanFactory(String string) {
		//初始化一个解析器
		SAXReader reader = new SAXReader();
		try {
			//解析器解析文件或者输入流程文档
			Document doc = reader.read(this.getClass().getClassLoader().getResource("myspring.xml"));
			//得到文档的根元素
			Element root = doc.getRootElement();
			//循环dom树把bean解析并实例化填充map
			for(Iterator iter=root.elementIterator();iter.hasNext();){
				
				Element el = (Element)iter.next();
				String id = el.attribute("id").getValue();
				String clas = el.attribute("class").getValue();
				
				map.put(id, Class.forName(clas).newInstance());
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public Object get(String str){
		return map.get(str);
	}
	public void sayHello(){
		System.out.println("hello");
	}
}
