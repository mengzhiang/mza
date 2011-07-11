package com.study.tet;

public class TestStr {
	public static void main(String[] args){
		 String a=new String("a"); 
		    String b="b"; 
		    String c=a+b; 
		    StringBuffer strBuf=new StringBuffer(); 
		    strBuf.append("a"); 
		    strBuf.append("b"); 
		    String d=strBuf.toString(); 
		    StringBuilder strBuilder=new StringBuilder(); 
		    strBuilder.append("a"); 
		    strBuilder.append("b"); 
		    String e=strBuilder.toString(); 
		    System.out.println(e);
		    
		    for(int i=0;i<5;i++){
		    	System.out.println("i="+i);
		    	for(int j=0;j<5;j++){
		    		if(j==3){
		    			//continue;//是退出这次循环后面的不执行。
		    			//return;//之后所有的代码都不执行
		    			break;//退出多重循环，后面的还可以执行
		    		}
		    		System.out.println("j="+j);
		    	}
		    }
		    System.out.println("zuihou");
		    
	}
}
