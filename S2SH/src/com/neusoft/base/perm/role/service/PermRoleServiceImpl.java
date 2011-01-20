package com.neusoft.base.perm.role.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.annotation.Resource;

import org.apache.commons.beanutils.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.neusoft.base.dao.PaginationSupport;
import com.neusoft.base.perm.resmodel.dao.PermResModelTreeDao;
import com.neusoft.base.perm.resmodel.model.PermResModelTreeEntity;
import com.neusoft.base.perm.role.dao.PermRoleDao;
import com.neusoft.base.perm.role.model.PermRole;
import com.neusoft.base.perm.role.model.PermRoleTreeModel;
import com.neusoft.base.perm.user.dao.PermUserDao;
import com.neusoft.base.perm.user.model.PermUser;

//  更改“XXXX”为您的模块名成
@Service
public class PermRoleServiceImpl implements PermRoleService{
	@Resource
	private PermRoleDao dao;

	public void setDao(PermRoleDao dao) {
		this.dao = dao;
	}
	
	/**
	 * 资源模块dao
	 */
	@Resource
	private PermResModelTreeDao resdao;

	public void setResdao(PermResModelTreeDao resdao) {
		this.resdao = resdao;
	}
	/**
	 * 用户dao
	 */
	@Resource
	private PermUserDao userdao;
	
	public void setUserdao(PermUserDao userdao) {
		this.userdao = userdao;
	}
	
	public PaginationSupport listpage(int startIndex,int pageSize) {
		return dao.findPageByCriteria(startIndex,pageSize);
	}
	public void save(PermRole model){
		dao.saveOrUpdate(model);
	}
	public String delAll(List<PermRole> list) {
		dao.deleteAll(list);
		return "success";
	}
	public PermRole getById(long id) {
		return dao.get(id);
	}
	
	public List<PermRoleTreeModel> getTree() {
		List<PermRoleTreeModel> tmlist = geneTree(0,0);
		return tmlist;
	}
	
	private List<PermRoleTreeModel> geneTree(long parentid,int level){
		List<PermRoleTreeModel> treelist = new ArrayList<PermRoleTreeModel>();
		List<PermRole> list = dao.findByProperty("parentid", (int)parentid);
		for(PermRole pr :list){
			PermRoleTreeModel prm = new PermRoleTreeModel();
			prm.setId(pr.getId());
			prm.setCode(pr.getCode());
			prm.setName(pr.getName());
			prm.setText(pr.getName());
			prm.setDetail(pr.getDetail());

			if(isleaf(pr.getId())){
				prm.setLeaf(true);
			}else{
				prm.setLeaf(false);
				prm.setChildren(geneTree(pr.getId(),0));
			}
			treelist.add(prm);
		}
		return treelist;
	}
	
	private boolean isleaf(long id){
		List<PermRole> list = dao.findByProperty("parentid",(int)id);
		if(list.size()>0){
			return false;
		}else{
			return true;
		}
	}

	/**
	 *  Created on 2011-1-19
	 * <p>Description:[保存角色和资源信息]</p>
	 * @author:孟志昂
	 * @email: mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 */
	public String saveRoleWithResModel(long sid, String resModelIds) {
		//对比角色所属资源信息的id和传过来的id有没有区别，如果有新增或者删除则保存，否则提示没有修改。
		//1:取得当前角色包含的资源信息
		PermRole role = dao.get(sid);
		Set<PermResModelTreeEntity> resset =  role.getPermResModelTreeEntity();
		//2：取得前台传过来的资源信息。
		String[] arr = resModelIds.split(",");
		Set<PermResModelTreeEntity> newset = new HashSet<PermResModelTreeEntity>();
		for(int i =0;i<arr.length;i++){
			if(StringUtils.hasLength(arr[i])){
				PermResModelTreeEntity model = resdao.get(Long.parseLong(arr[i]));
				newset.add(model);
			}
			
		}
		//如果修改了，则重新保存信息
		if(!resset.equals(newset)){
			role.setPermResModelTreeEntity(newset);
			dao.save(role);
			return "success";
		}else{
			return "nomodify";
		}

	}

	/**
	 *  Created on 2011-1-19
	 * <p>Description:[保存角色包含的用户信息]</p>
	 * @author:孟志昂
	 * @email: mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 */
	public String saveRoleWithUser(long sid, String resModelIds) {
		//对比角色所属资源信息的id和传过来的id有没有区别，如果有新增或者删除则保存，否则提示没有修改。
		//1:取得当前角色包含的资源信息
		PermRole role = dao.get(sid);
		Set<PermUser> userset =  role.getPermUser();
		//2：取得前台传过来的资源信息。
		String[] arr = resModelIds.split(",");

		for(int i =0;i<arr.length;i++){
			PermUser model = userdao.get(Long.parseLong(arr[i]));
			userset.add(model);
		}
		//如果修改了，则重新保存信息
			role.setPermUser(userset);
			dao.save(role);
			return "success";

	}

	/**
	 *  Created on 2011-1-20
	 * <p>Description:[删除角色包含的用户信息]</p>
	 * @author:孟志昂
	 * @email: mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 */
	public String deleteRoleWithUser(long sid, String resModelIds) {
		PermRole role = dao.get(sid);
		Set<PermUser> userset =  role.getPermUser();
		String[] arr = resModelIds.split(",");

		for(int i =0;i<arr.length;i++){
			PermUser model = userdao.get(Long.parseLong(arr[i]));
			userset.remove(model);
		}
		//如果修改了，则重新保存信息
			role.setPermUser(userset);
			dao.save(role);
			return "success";
	}
}
