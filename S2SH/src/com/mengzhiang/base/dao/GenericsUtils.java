package com.mengzhiang.base.dao;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * 
 * Generics的util类.
 * 
 * 
 * 
 * @author sshwsfc
 * 
 */

public class GenericsUtils {

	private static final Log log = LogFactory.getLog(GenericsUtils.class);

	private GenericsUtils() {

	}

	/**
	 * 
	 * 通过反射,获得定义Class时声明的父类的范型参数的类型. 如public BookManager extends GenricManager
	 * 
	 * 
	 * 
	 * @param clazz
	 *            The class to introspect
	 * 
	 * @return the first generic declaration, or
	 * 
	 * Object.class
	 * 
	 * if cannot be determined
	 * 
	 */

	public static Class getSuperClassGenricType(Class clazz) {
		//得到父类的类型。比如UserDaoImpl的父类就是BaseDao的类型
		return getSuperClassGenricType(clazz, 0);

	}

	/**
	 * 
	 * 通过反射,获得定义Class时声明的父类的范型参数的类型. 如public BookManager extends GenricManager
	 * 
	 * 
	 * 
	 * @param clazz
	 *            clazz The class to introspect
	 * 
	 * @param index
	 *            the Index of the generic ddeclaration,start from 0.
	 * 
	 * @return the index generic declaration, or
	 * 
	 * Object.class
	 * 
	 * if cannot be determined
	 * 
	 */

	public static Class getSuperClassGenricType(Class clazz, int index) {
		//得到clazz父类的类型。
		Type genType = clazz.getGenericSuperclass();
		//如果父类有参数。
		if (!(genType instanceof ParameterizedType)) {

			log.warn(clazz.getSimpleName()
					+ "'s superclass not ParameterizedType");

			return Object.class;

		}
		//返回父类的第一个参数
		Type[] params = ((ParameterizedType) genType).getActualTypeArguments();

		if (index >= params.length || index < 0) {

			log.warn("Index: " + index + ", Size of " + clazz.getSimpleName()
					+ "'s Parameterized Type: "

					+ params.length);

			return Object.class;

		}

		if (!(params[index] instanceof Class)) {

			log
					.warn(clazz.getSimpleName()
							+ " not set the actual class on superclass generic parameter");

			return Object.class;

		}

		return (Class) params[index];

	}
}