package com.neusoft;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Search implements Runnable
{
    private String keyWord;
    
    private List<MyFile> filelist;
    
    private String lastResult ="";
    
    public Search(String keyWord,List<MyFile> list)
    {
        this.keyWord = keyWord;
        this.filelist = list;
    }
    
    public void run()
    {
        String regEx = keyWord;
        Pattern p = Pattern.compile(regEx);
        StringBuffer buffer = new StringBuffer();
        buffer.append(keyWord+":");
        boolean flag =false;
        for(MyFile myfile:filelist){
            String content = myfile.getContent();
            Matcher m = p.matcher(content);
            boolean result = m.find();
            if(result){
                buffer.append(myfile.getFilename()+";");
                flag = true;
            }
        }
        if(!flag){
            buffer.append("no result found");
        }
        lastResult =  buffer.toString();
        System.out.println(lastResult);
    }

}
