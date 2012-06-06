//package com.mengzhiang.tools.cache;
//
//import java.util.Collection;
//
//import net.sf.ehcache.CacheException;
//import net.sf.ehcache.Ehcache;
//import net.sf.ehcache.Element;
//import net.sf.ehcache.constructs.blocking.CacheEntryFactory;
//import net.sf.ehcache.constructs.blocking.SelfPopulatingCache;
//
//import org.apache.naming.resources.CacheEntry;
//
//public class MyDataAccessClass 
//{
//private final Ehcache cache;
//public MyDataAccessClass(Ehcache cache)
//{
//   cache.registerCacheWriter(new MyCacheWriter());
//   MyCacheEntryFactory f = new MyCacheEntryFactory();
//   this.cache = new SelfPopulatingCache(cache, f);
//}
///* read some data - notice the cache is treated as an SOR.  
//* the application code simply assumes the key will always be available
//*/
//public V readSomeData(K key) 
//{
//   return cache.get(key);
//}
///* write some data - notice the cache is treated as an SOR, it is 
//* the cache's responsibility to write the data to the SOR. 
//*/
//public void writeSomeData(K key, V value) 
//{
//   cache.put(new Element(key, value);
//}
///**
//* Implement the CacheEntryFactory that allows the cache to provide
//* the read-through strategy
//*/
//private class MyCacheEntryFactory implements CacheEntryFactory
//{
//   public Object createEntry(Object key) throws Exception
//   {
//       return readDataFromDataStore(key);
//   }    
//}
///**
//* Implement the CacheWriter interface which allows the cache to provide
//* the write-through or write-behind strategy.
//*/
//private class MyCacheWriter implements CacheWriter 
//   public CacheWriter clone(Ehcache cache) throws CloneNotSupportedException;
//   {
//       throw new CloneNotSupportedException();
//   }
//    public void init() { }
//   void dispose() throws CacheException { } 
//    void write(Element element) throws CacheException;
//   {
//       writeDataToDataStore(element.getKey(), element.getValue());
//   }
//    void writeAll(Collection elements) throws CacheException
//   {
//       for (Element element : elements) {
//           write(element);
//       }
//   }
//    void delete(CacheEntry entry) throws CacheException
//   {
//       deleteDataFromDataStore(element.getKey());
//   }
//    void deleteAll(Collection entries) throws CacheException
//   {
//       for (Element element : elements) {
//           delete(element);
//       }
//   }
//}

