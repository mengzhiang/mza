package com.ditest;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;



/**
 * Created on 2010-12-23
 * ���� MZABeanFactory ģ��spring������ע��
 * @author: ��־��
 * @email:  mengzha@gmail.com
 * @version:$Revision$
*/
public class MZABeanFactory {
	
	private Map<String,Object> map = new HashMap<String,Object>();
	
	public MZABeanFactory(String string) {
		//��ʼ��һ��������
		SAXReader reader = new SAXReader();
		try {
			//�����������ļ��������������ĵ�
			Document doc = reader.read(this.getClass().getClassLoader().getResource("myspring.xml"));
			//�õ��ĵ��ĸ�Ԫ��
			Element root = doc.getRootElement();
			//ѭ��dom����bean������ʵ�������map
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
