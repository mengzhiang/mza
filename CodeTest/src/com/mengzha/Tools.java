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
 * Description:[������]
 * 
 * @author:��־�� mengzha@neusoft.com
 */
public class Tools {

	public static List<MyFile> readFolder(String path) {
		List<MyFile> list = new ArrayList<MyFile>();
		// ��ȡ��·���������ļ�
		File f = new File(path);
		// ���������ļ�
		String[] filelist = f.list();
		for (int i = 0; i < filelist.length; i++) {
			// �½�Myfile����װ������
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
				System.out.println("�ļ�û���ҵ�");
				e.printStackTrace();
			} catch (IOException e) {
				System.out.println("�ļ���ȡ����");
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
	 * Description:[���ж�ȡ�����ļ�������ÿ�зֱ�ŵ�list��]
	 * </p>
	 * 
	 * @author:��־�� mengzha@neusoft.com
	 * @update:[����YYYY-MM-DD] [����������]
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
			System.out.println("�ļ�û���ҵ�");
			e.printStackTrace();
		} catch (IOException e) {
			System.out.println("�ļ���ȡ����");
			e.printStackTrace();
		}
		return list;
	}

	/**
	 * Created on 2010-3-13
	 * <p>
	 * Description:[д�ļ�����]
	 * </p>
	 * 
	 * @author:��־�� mengzha@neusoft.com
	 * @update:[����YYYY-MM-DD] [����������]
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
			System.out.println("д���ļ�����");
			e.printStackTrace();
		}
	}

	/**
	 * ������ƴ������
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
