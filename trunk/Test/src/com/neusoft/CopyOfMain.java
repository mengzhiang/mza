package com.neusoft;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created on 2010-3-13
 * <p>Title:       ����ִ�е�������</p>
 * <p>Description: [���������Ҫ���ܽ���]</p>
 * <p>Copyright:   Copyright (c) 2009</p>
 * <p>Company:     ��������ɷ����޹�˾</p>
 * <p>Department:  ���������ҵ��</p>
 * @author:[��־��]
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
            //���������ʽ
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
                    //��װ�ַ�����result.txtд������
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
        System.out.println("��ѯ��ϣ���������c:\\text\\result.txt");
    }
}
