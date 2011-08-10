package com.study.innerClass.Sequence;

//类似于Iterator 
public interface Selector {
boolean end();//是否最后一个
Object current();//返回当前
void next();//查找下一个
}
