package com.wojia.test.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created on 2010-12-14
 * <p>名称: 我家_rest风格测试</p>
 * <p>描述: [因为html没有put和delete支持所以需要ajax支持。]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
*/
public class RestController {
	@RequestMapping(method = RequestMethod.GET)
	public String list(){
		return "login/login_success";
	}

	@RequestMapping(method = RequestMethod.POST)
	public String create(){
		return "login/login_failure";
	}
	
	@RequestMapping(method = RequestMethod.PUT)
	public String update(){
		return "login/login_failure";
	}
	
	@RequestMapping(method = RequestMethod.DELETE)
	public String delete(){
		return "login/login_failure";
	}
}
