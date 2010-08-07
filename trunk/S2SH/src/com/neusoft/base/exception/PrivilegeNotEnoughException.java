package com.neusoft.base.exception;

/**
 * Created on 2010-8-7
 * <p>名称: S2SH工程-异常处理</p>
 * <p>描述: [权限不足异常]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
*/
public class PrivilegeNotEnoughException extends RuntimeException {
	
	private static final long serialVersionUID = 2795785600441240468L;

	public PrivilegeNotEnoughException(String msg){
		super(msg);
	}
}
