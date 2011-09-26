package com.study.init;

public class StaticBlock {
	protected static int i;
	//static 块在类加载时执行 只执行一次。
	 static{
		i=10;
	}
	
}
