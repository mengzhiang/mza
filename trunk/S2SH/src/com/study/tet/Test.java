package com.study.tet;

public class Test{ 
       private static int i=0; 
       //static是类变量，跟实例无关，所有类的实例共享一个变量，如果多线程需要考虑同步
       //final 是不能修改的变量。如果是方法 这个方法是不能被子类重写的，如果是类，则是不能由其他类继承
       public int getNext(){ 
          return i++; 
       } 
    } 