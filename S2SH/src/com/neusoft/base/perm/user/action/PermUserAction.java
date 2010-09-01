package com.neusoft.base.perm.user.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.neusoft.base.action.BaseAction;
import com.neusoft.base.perm.user.model.PermUser;
import com.neusoft.base.perm.user.service.PermUserService;
import com.neusoft.base.utils.JsonUtil;
import com.opensymphony.xwork2.ModelDriven;

@Controller
@Scope("prototype")
public class PermUserAction extends BaseAction implements ModelDriven<PermUser> {

	/**
	 * <p>
	 * Description:[字段功能描述]
	 * </p>
	 */
	private static final long serialVersionUID = 6386120048313640262L;
	private PermUser permUser = new PermUser();// 这里要手动new一下
	private List<PermUser> list;

	private long sid;
	@Resource
	private PermUserService permUserService;

	public void setPermUserService(PermUserService permUserService) {
		this.permUserService = permUserService;
	}

	@Override
	public String execute() {
		return SUCCESS;
	}

	public String listpage() {
		this.setPaginationSupport(permUserService.listpage(this.getStart(),
				this.getLimit()));
		this.setSuccess(true);
		return SUCCESS;
	}

	public String load() {
		permUser = permUserService.getById(sid);
		return SUCCESS;
	}

	public String save() {
		if(!isUnique()){
			this.setSuccess(false);
			this.addFieldError("username", "用户名已存在！");
		}else{
			permUserService.save(permUser);
			this.setSuccess(true);	
		}
		return SUCCESS;
	}

	public String delAll() {
		JsonUtil.jsonToObject(this.getStrJson(), this);
		permUserService.delAll(this.getList());
		return SUCCESS;
	}
	
	private boolean isUnique(){
		return permUserService.isUnique(permUser);
	}

	public long getSid() {
		return sid;
	}

	public void setSid(long sid) {
		this.sid = sid;
	}

	public PermUser getPermUser() {
		return permUser;
	}

	public void setPermUser(PermUser permUser) {
		this.permUser = permUser;
	}

	public List<PermUser> getList() {
		return list;
	}

	public void setList(List<PermUser> list) {
		this.list = list;
	}

	public PermUser getModel() {
		return permUser;
	}
}
