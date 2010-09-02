package com.neusoft.base.perm.privilege.aop;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

import com.neusoft.base.perm.privilege.service.PermService;
import com.neusoft.base.perm.resource.model.PermResource;
import com.neusoft.base.perm.role.model.PermRole;
import com.neusoft.struts2.user.model.User;

@Component
@Aspect
public class PrivilegeService {

	@Resource
	private PermService permService;

	public void setPermService(PermService permService) {
		this.permService = permService;
	}

	/**
	 * Created on 2010-8-6
	 * <p>
	 * Description:[权限控制]
	 * </p>
	 * 
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @throws Throwable
	 */
	@Before("execution(* com.neusoft.struts2.user.service.UserService.* (..))")
	public void test(JoinPoint jp) throws Throwable {
		// 取得改方法的信息。
		// 代理的类
		Object target = jp.getTarget();
		// 切入的方法名
		String methodName = jp.getSignature().getName();
		// 切入的方法类型
		Object[] parmeters = jp.getArgs();
		// 去得方法类型组成的字符串
		String parmetypestr = "";
		for (int i = 0; i < parmeters.length; i++) {
			parmetypestr = parmetypestr + parmeters[i].getClass().getName()
					+ ",";
		}
		if (parmetypestr.endsWith(",")) {
			parmetypestr = parmetypestr.substring(0, parmetypestr.length() - 1);
		}
		String resource = target.getClass().getName() + "." + methodName + "("
				+ parmetypestr + ")";

		/**
		 * 1：从Session中去得当前登录人的ID,权限信息
		 * 2：通过当前方法去和权限信息的方法比对，看是否有符合的方法，如果有继续，否则抛出无权限异常
		 */
		// 模拟一个用户信息
		User user = new User();
		user.setId(2);
		// 模拟用户的权限信息，通过userID取得权限list。
		// 模拟一个角色，取得该角色对应的资源list
		PermRole permrole = new PermRole();
		permrole.setId(1);
		List<PermResource> reslist = permService.getPermResourceByPermRole(permrole);
		
		
		
		
		// 循环拼成字符串发到map里
		Map<Long, String> map = new HashMap<Long, String>();
		for (PermResource res : reslist) {
			// 如果是方法类型的不是URL的拼成方法
			if (res.getReslx() == "1") {
				StringBuilder sb = new StringBuilder();
				sb.append(res.getClasstype_name()).append(".").append(
						res.getMethod_name()).append("(");
				if (res.getParametertype_names() != null) {
					sb.append(res.getParametertype_names());
				}
				sb.append(")");
				map.put(res.getId(), sb.toString());
			}

		}

		if (map.containsValue(resource)) {
			System.out.println("有权限");
		} else {
			//throw new PrivilegeNotEnoughException("Not hava enough privilege!");
		}

	}

}
