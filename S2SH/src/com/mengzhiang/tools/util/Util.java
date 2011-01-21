package com.mengzhiang.tools.util;

import java.io.File;

/**
 * Created on 2010-8-16
 * <p>
 * 名称: S2SH工程-工具类
 * </p>
 * <p>
 * 描述: [删除某个文件夹和文件]
 * </p>
 * <p>
 * 版本: Copyright (c) 2010
 * </p>
 * 
 * @author: 孟志昂
 * @email: mengzhiang@gmail.com
 * @version:$Revision$
 */
public class Util {
	// 删除文件夹
	// param folderPath 文件夹完整绝对路径

	public static void delFolder(String folderPath) {
		try {
			delAllFile(folderPath); // 删除完里面所有内容
			String filePath = folderPath;
			filePath = filePath.toString();
			java.io.File myFilePath = new java.io.File(filePath);
			myFilePath.delete(); // 删除空文件夹
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// 删除指定文件夹下所有文件
	// param path 文件夹完整绝对路径
	public static boolean delAllFile(String path) {
		boolean flag = false;
		File file = new File(path);
		if (!file.exists()) {
			return flag;
		}
		if (!file.isDirectory()) {
			return flag;
		}
		String[] tempList = file.list();
		File temp = null;
		for (int i = 0; i < tempList.length; i++) {
			if (path.endsWith(File.separator)) {
				temp = new File(path + tempList[i]);
			} else {
				temp = new File(path + File.separator + tempList[i]);
			}
			if (temp.isFile()) {
				temp.delete();
			}
			if (temp.isDirectory()) {
				delAllFile(path + "/" + tempList[i]);// 先删除文件夹里面的文件
				delFolder(path + "/" + tempList[i]);// 再删除空文件夹
				flag = true;
			}
		}
		return flag;
	}
}
