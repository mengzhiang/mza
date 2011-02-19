package com.mengzha;
/**
 * Created on 2011-2-19
 * Description:[¶Ô±ÈÆ÷]
 * 
 * @author:ÃÏÖ¾°º mengzha@neusoft.com
 */
class Comparator implements java.util.Comparator<FinalResult> {

	public int compare(FinalResult fr1, FinalResult fr2) {
		return Tools.getHexString(new String(new char[] { fr1.getName().toCharArray()[0] }), "gb2312")
		.compareTo(
				Tools.getHexString(new String(new char[] { fr2.getName().toCharArray()[0] }),
						"gb2312"));
	}
}