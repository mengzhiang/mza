package com.test.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.test.exception.business.EcpAjaxBusinessException;
import com.test.exception.business.EcpPageBusinessException;
import com.test.exception.system.EcpSystemException;

/**
 * SpringMVC simple controller
 * 
 * @author mza
 * 
 */
@Controller
@RequestMapping("/hello")
public class HelloController {

	@RequestMapping("/normal")
	public String normal(ModelMap modelmap, HttpServletRequest request) {
		return "normal";
	}
	/**
	 * @param modelmap
	 * @param request
	 * @return
	 */
	@RequestMapping("/pageBusi")
	public String pageBusi(ModelMap modelmap, HttpServletRequest request) {
		throw new EcpPageBusinessException("您没有权限下单，请联系管理员","没有找到该客户对应的销售组织");
	}
	/**
	 * @param modelmap
	 * @param request
	 * @return
	 */
	@RequestMapping("/pageSys")
	public String pageSys(ModelMap modelmap, HttpServletRequest request){	
		throw new EcpSystemException(new NullPointerException());	
	}
	
	/**
	 * @param modelmap
	 * @param request
	 * @return
	 */
	@RequestMapping("/ajaxBusi")
	@ResponseBody
	public String ajaxBusi(ModelMap modelmap, HttpServletRequest request){	
		throw new EcpAjaxBusinessException("创建订单失败！","税额，含税单价，含税净价不能为空或0");	
	}

	/**
	 * @param modelmap
	 * @param request
	 * @return
	 */
	@RequestMapping("/ajaxSys")
	@ResponseBody
	public String ajaxSys(ModelMap modelmap, HttpServletRequest request){	
		throw new EcpSystemException(new NullPointerException());	
	}
	
	/**
	 * @param modelmap
	 * @param request
	 * @return
	 */
	@RequestMapping("/ajaxNormal")
	@ResponseBody
	public String ajaxNormal(ModelMap modelmap, HttpServletRequest request){
		return "ajaxNormal";
	}
}
