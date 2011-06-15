
package com.study; 
import java.beans.BeanInfo;
import java.beans.Introspector;
import java.beans.PropertyDescriptor; 

/**
  * 内省演示例子
  * @author liudong
  */
public class IntrospectorDemo {
    String name;
    public static void main(String[] args) throws Exception{
        IntrospectorDemo demo = new IntrospectorDemo();
        demo.setName( "Winter Lau" );      
        // 如果不想把父类的属性也列出来的话，
        // 那 getBeanInfo 的第二个参数填写父类的信息
        BeanInfo bi = Introspector.getBeanInfo(demo.getClass());
        PropertyDescriptor[] props = bi.getPropertyDescriptors();
        for ( int i=0;i<props.length;i++){
            System.out.println(props[i].getName()+ "=" +
                    props[i].getReadMethod().invoke(demo, null ));
        }
    }     
    public String getName() {
        return name;
    } 
    public void setName(String name) {
        this .name = name;
    }
}