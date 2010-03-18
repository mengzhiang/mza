package com.neusoft;

import java.util.List;

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
public class Main
{
    public final static String SRC_PATH = "c:\\text\\src";
    public final static String SEARCH_PATH = "c:\\text\\search.txt";
    public final static String RESULT_PATH = "c:\\text\\result.txt";
    
    public static void main(String[] args){
        List<String> searchlist = Tools.readFile(SEARCH_PATH);
        List<MyFile> filelist = Tools.readFolder(SRC_PATH);
        //StringBuffer allbuffer = new StringBuffer(); 
        for(String str:searchlist){
            Thread t = new Thread(new Search(str,filelist));
            t.run();
        }
    }
}
