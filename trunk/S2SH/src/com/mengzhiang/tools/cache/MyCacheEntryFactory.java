package com.mengzhiang.tools.cache;

import net.sf.ehcache.constructs.blocking.CacheEntryFactory;
public class MyCacheEntryFactory implements CacheEntryFactory
{
   public Object createEntry(Object key) throws Exception
   {
	   if(key.equals("product")){
		   //去后台取商品信息并返回
		   return new Object();
	   }else{
		   //去得其他的缓存信息并返回
		   return new Object();
	   }
   }    
}