package com.study.tet;

   public class TestB{ 
       public static void main(String[] args){ 
           Test test=new Test(); 
           System.out.println(test.getNext()); 
           Test testObject=new Test(); 
           System.out.println(testObject.getNext()); 
           System.out.println(test.getNext()); 
       } 
    }