package com.mengzhiang.tools.cache;

import java.io.Serializable;

import net.sf.ehcache.CacheManager;
import net.sf.ehcache.Ehcache;
import net.sf.ehcache.Element;

public class CacheUtil {
	private CacheUtil(){};
	private static Ehcache cache;
	static{
		CacheManager manager = CacheManager.create();
		cache =manager.getEhcache("cache1");
	}
	
	
	/**
	 * 往cache中加入元素
	 * 加入synchronized解决线程同步问题
	 */
	public synchronized static void put(Serializable key,Object o){
		cache.put(new Element(key,o));
	}
	/**
	 * 通过key获取缓存中的数据
	 */
	public static Serializable get(Serializable key){
		return cache.get(key).getValue();
	}
	/**
	 * 判断缓存中是否有
	 */
	public static boolean isInCache(Serializable key){
		return cache.isKeyInCache(key);
	}
}
