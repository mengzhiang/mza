package com.mengzhiang.tools.cache;

import java.io.Serializable;
import net.sf.ehcache.CacheManager;
import net.sf.ehcache.Ehcache;
import net.sf.ehcache.Element;
import net.sf.ehcache.constructs.blocking.SelfPopulatingCache;

/**
 * Created on 2011-11-21 自填充缓存类
 */
public class SelfPopulatingCacheUtil {
	private SelfPopulatingCacheUtil() {
	};

	private static Ehcache cache;
	static {
		CacheManager manager = CacheManager.create();
		Ehcache ca = manager.getEhcache("cache1");
		MyCacheEntryFactory enf = new MyCacheEntryFactory();
		cache = new SelfPopulatingCache(ca, enf);
	}

	/**
	 * 往cache中加入元素 加入synchronized解决线程同步问题
	 */
	public synchronized static void setEcpCache(Serializable strCacheKey,
			Object o) {
		cache.put(new Element(strCacheKey, o));
	}

	/**
	 * 通过key获取缓存中的数据
	 */
	public static Serializable getEcpCache(Serializable strCacheKey) {
		return cache.get(strCacheKey).getValue();
	}
}
