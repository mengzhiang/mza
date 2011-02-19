package com.mengzha;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;



/**
 * Created on 2011-2-19
 * Description:[主方法]
 * 
 * @author:孟志昂 mengzha@neusoft.com
 */
public class Main {
	
	public final static String SRC_PATH = "c:\\test\\src";
	public final static String RESULT_PATH = "c:\\test\\result.txt";
	static Logger logger  =  Logger.getLogger(Main. class );
	public static void main(String[] args) {
		
		//1：读取c:\test下所有文件
		List<MyFile> flist = Tools.readFolder(SRC_PATH);
		//2:把数据放入历次成绩List中
		List<ResResult> rlist = new ArrayList<ResResult>();
		for(MyFile file:flist){
			String filename = file.getFilename();
			String filecontent = file.getContent();
			String date = filename.substring(0, 6);
			String[] arr = filecontent.split("\n\r");
			for(int i=1;i<arr.length;i++){
				
				String[] sarr = arr[i].split("\\t");
				ResResult result = new ResResult();
				result.setDate(date);
				//校验email格式是否正确,日志
				Pattern pattern = Pattern.compile("[\\w\\.\\-]+@(neusoft+\\.)+com",Pattern.CASE_INSENSITIVE);
				Matcher matcher = pattern.matcher(sarr[0]);
				if(!matcher.matches()){
					logger.warn("错误数据："+filename+"第"+i+"行");
					continue;
				}
				result.setEmail(sarr[0]);
				result.setName(sarr[1]);
				result.setResult(sarr[2]);
				rlist.add(result);
			}
		}
		//3：整理历次成绩并输出结果
		//准备数据
		Map<String,String> emailMap = new HashMap<String,String>();
		for(ResResult result :rlist){
			String email = result.getEmail();
			if(!emailMap.containsKey(email)){
				emailMap.put(email, result.getResult());
			}
		}
		Map<String,String> nameMap = new HashMap<String,String>();
		for(ResResult result :rlist){
			String email = result.getEmail();
			if(!nameMap.containsKey(email)){
				nameMap.put(email, result.getName());
			}
		}
		//整理结果
		Iterator<Entry<String,String>> it = emailMap.entrySet().iterator();
		List<FinalResult> finallist = new ArrayList<FinalResult>();
		while(it.hasNext()){
			FinalResult finalresult = new FinalResult();
			Entry<String, String> entry = it.next();
			String email = entry.getKey().toString();
			finalresult.setEmail(email);
			finalresult.setName(nameMap.get(email));
			for(ResResult result :rlist){
				if(result.getEmail().equals(email)){
					if(result.getDate().equals("201002")){
						finalresult.setResult1(result.getResult());
					}
					if(result.getDate().equals("201007")){
						finalresult.setResult2(result.getResult());
					}
					if(result.getDate().equals("201011")){
						finalresult.setResult3(result.getResult());
					}
				}
			}
			if(finalresult.getResult1()==null){
				finalresult.setResult1("--");
			}
			if(finalresult.getResult2()==null){
				finalresult.setResult2("--");
			}
			if(finalresult.getResult3()==null){
				finalresult.setResult3("--");
			}
			finallist.add(finalresult);
		}
		//排序
		Collections.sort(finallist,new Comparator());
		//格式化输出结果
		StringBuilder sb = new StringBuilder();
		for(FinalResult rs :finallist){
			sb.append(StringUtils.rightPad(rs.getEmail(), 30)
					+StringUtils.rightPad(rs.getName(),15)
					+StringUtils.leftPad(rs.getResult1(), 4)
					+StringUtils.leftPad(rs.getResult2(), 4)
					+StringUtils.leftPad(rs.getResult3(), 4)+"\r\n");
		}
		System.out.println(sb.toString());
		//输出结果
		Tools.write(RESULT_PATH, sb.toString());
	}

}
