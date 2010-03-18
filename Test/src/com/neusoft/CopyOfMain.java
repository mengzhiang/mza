package com.neusoft;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created on 2010-3-13
 * <p>Title:       程序执行的主方法</p>
 * <p>Description: [描述该类概要功能介绍]</p>
 * <p>Copyright:   Copyright (c) 2009</p>
 * <p>Company:     东软软件股份有限公司</p>
 * <p>Department:  软件开发事业部</p>
 * @author:[孟志昂]
 * @email:[mengzha@neusoft.com]
 * @version        1.0
*/
public class CopyOfMain
{
    public final static String SRC_PATH = "c:\\text\\src";
    public final static String SEARCH_PATH = "c:\\text\\search.txt";
    public final static String RESULT_PATH = "c:\\text\\result.txt";
    
    public static void main(String[] args){
        List<String> searchlist = Tools.readFile(SEARCH_PATH);
        List<MyFile> filelist = Tools.readFolder(SRC_PATH);
        StringBuffer allbuffer = new StringBuffer();
        for(String str:searchlist){
            //组成正则表达式
            String regEx = str;
            Pattern p = Pattern.compile(regEx);
            StringBuffer buffer = new StringBuffer();
            buffer.append(str+":");
            boolean flag =false;
            for(MyFile myfile:filelist){
                String content = myfile.getContent();
                Matcher m = p.matcher(content);
                boolean result = m.find();
                if(result){
                    //组装字符串往result.txt写入数据
                    buffer.append(myfile.getFilename()+";");
                    flag = true;
                }
            }
            if(!flag){
                buffer.append("no result found");
            }
            String result = buffer.toString();
            if(result.endsWith(";")){
                result = result.substring(0, result.length()-1);
            }
            allbuffer.append(result+"\n");
        }
        Tools.write(RESULT_PATH,allbuffer.toString());
        System.out.println("查询完毕，结果输出在c:\\text\\result.txt");
    }
}
