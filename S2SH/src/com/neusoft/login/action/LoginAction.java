package com.neusoft.login.action;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.neusoft.base.action.BaseAction;
import com.neusoft.base.perm.model.PermUser;
import com.neusoft.struts2.user.service.UserService;

@Controller
@Scope("prototype") 
public class LoginAction extends BaseAction {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 5133585599464228486L;
	private PermUser permUser;
	@Resource
	private UserService userService;
	
	private String flag;

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	public PermUser getPermUser() {
		return permUser;
	}

	public void setPermUser(PermUser permUser) {
		this.permUser = permUser;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	@Override
	public String execute(){
		return SUCCESS;
	}
	
	public String login(){
		this.setFlag("success");
		return SUCCESS;
	}
}
