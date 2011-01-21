package com.mengzhiang.base.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Created on 2010-8-7
 * <p>名称: S2SH工程-公共</p>
 * <p>描述: [自定义一个Annotation]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
*/
@Target(ElementType.METHOD)//目标是方法
@Retention(RetentionPolicy.RUNTIME)//生命期，在代码执行阶段依然存在，所以可以通过反射取过来
public @interface PrivilegeFor {
	int value() default 0;
}
