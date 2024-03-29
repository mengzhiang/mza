package com.mengzhiang.base.cache;

/**
 * 通用缓存任务类，执行一个简单的缓存任务
 * @author shajunxing
 */
public abstract class CachedTask<T> {

    private String key;

    public String getKey() {
        return key;
    }

    public CachedTask(String key) {
        this.key = key;
    }

    public abstract T run();
}
