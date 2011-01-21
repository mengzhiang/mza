package com.mengzhiang.testcase;

import com.mengzhiang.base.perm.privilege.service.PermServiceImpl;


public class TestService {

    
	public static void main(String[] args) {
		PermServiceImpl perm = new PermServiceImpl();
		perm.saveRoleAndUser();

	}

}
