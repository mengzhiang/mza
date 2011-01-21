package com.mengzhiang.base.utils;

import java.util.ArrayList;
import java.util.Map;
import java.util.regex.Pattern;

import org.apache.struts2.json.JSONException;
import org.apache.struts2.json.JSONPopulator;
import org.apache.struts2.json.JSONUtil;

/**
 * @author faylai
 */

public abstract class JsonUtil {

	/**
	 * 函数介绍 利用 jsonplugin 对象和json字符互转 参数： 返回值：
	 */

	public static String objectToJson(Object obj) {

		try {
			// 最后连个参数 忽略继承关系和忽略空值
			return JSONUtil.serialize(obj, new ArrayList<Pattern>(),
					new ArrayList<Pattern>(), false, false);
		} catch (JSONException e) {
			throw new RuntimeException(e.getCause());
		}

	}

	@SuppressWarnings("unchecked")
	public static Object jsonToObject(String jsonstr, Object target) {
		try {
			JSONPopulator pop = new JSONPopulator();
			Object obj = JSONUtil.deserialize(jsonstr);
			if (obj instanceof Map) {
				pop.populateObject(target, (Map) JSONUtil.deserialize(jsonstr));
				return target;
			} else {
				throw new Exception("不是标准的json 格式");
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e.getCause());
		}

	}
}