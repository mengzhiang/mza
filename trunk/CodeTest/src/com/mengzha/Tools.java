package com.mengzha;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created on 2011-2-19
 * Description:[工具类]
 * 
 * @author:孟志昂 mengzha@neusoft.com
 */
public class Tools {

	public static List<MyFile> readFolder(String path) {
		List<MyFile> list = new ArrayList<MyFile>();
		// 读取改路径下所有文件
		File f = new File(path);
		// 遍历所有文件
		String[] filelist = f.list();
		for (int i = 0; i < filelist.length; i++) {
			// 新建Myfile对象并装入数据
			MyFile myfile = new MyFile();
			myfile.setFilename(filelist[i]);
			File file = new File(path + "\\" + filelist[i]);
			String output = "";
			try {
				BufferedReader input = new BufferedReader(new FileReader(file));
				StringBuffer buffer = new StringBuffer();
				String text;
				while ((text = input.readLine()) != null) {
					buffer.append(text + "\n\r");
				}
				;
				output = buffer.toString();
				input.close();
			} catch (FileNotFoundException e) {
				System.out.println("文件没有找到");
				e.printStackTrace();
			} catch (IOException e) {
				System.out.println("文件读取错误");
				e.printStackTrace();
			}
			myfile.setContent(output);
			// System.out.println(output);
			list.add(myfile);
		}
		return list;
	}

	/**
	 * Created on 2010-3-13
	 * <p>
	 * Description:[按行读取单个文件，并把每行分别放到list里]
	 * </p>
	 * 
	 * @author:孟志昂 mengzha@neusoft.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @return List<String>
	 * @param path
	 * @return
	 */
	public static List<String> readFile(String path) {
		File file = new File(path);
		List<String> list = new ArrayList<String>();
		try {
			BufferedReader input = new BufferedReader(new FileReader(file));
			String text;
			while ((text = input.readLine()) != null) {
				list.add(text);
			}
			input.close();
		} catch (FileNotFoundException e) {
			System.out.println("文件没有找到");
			e.printStackTrace();
		} catch (IOException e) {
			System.out.println("文件读取错误");
			e.printStackTrace();
		}
		return list;
	}

	/**
	 * Created on 2010-3-13
	 * <p>
	 * Description:[写文件方法]
	 * </p>
	 * 
	 * @author:孟志昂 mengzha@neusoft.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @return void
	 * @param path
	 * @param content
	 */
	public static void write(String path, String content) {
		String s = new String();
		String s1 = new String();
		try {
			File f = new File(path);
			if (f.exists()) {
				// f.delete();
			} else {
				f.createNewFile();
			}

			BufferedReader input = new BufferedReader(new FileReader(f));

			while ((s = input.readLine()) != null) {
				s1 += s + "\n";
			}
			input.close();
			s1 += content;

			BufferedWriter output = new BufferedWriter(new FileWriter(f));
			output.write(s1);
			output.close();
		} catch (Exception e) {
			System.out.println("写入文件错误");
			e.printStackTrace();
		}
	}

	/**
	 * 按汉语拼音排序
	 * 
	 * @param s
	 * @param charset
	 * @return
	 */
	public static String sort(String s, String charset) {
		char[] c = s.toCharArray();
		for (int i = 0; i < c.length - 1; i++) {
			for (int j = i + 1; j < c.length; j++) {
				if (getHexString(new String(new char[] { c[i] }), charset)
						.compareTo(
								getHexString(new String(new char[] { c[j] }),
										charset)) > 0) {
					char temp = c[i];
					c[i] = c[j];
					c[j] = temp;
				}
			}
		}
		return new String(c);
	}

	public static String getHexString(String s, String charset) {
		byte[] b = null;
		StringBuffer sb = new StringBuffer();
		try {
			b = s.getBytes(charset);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		for (int i = 0; i < b.length; i++) {
			sb.append(Integer.toHexString(b[i] & 0xFF));
		}
		return sb.toString();
	}
}
