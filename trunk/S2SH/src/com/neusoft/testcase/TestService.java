package com.neusoft.testcase;

import com.neusoft.base.perm.privilege.service.PermServiceImpl;


public class TestService {

    
	public static void main(String[] args) {
		PermServiceImpl perm = new PermServiceImpl();
		perm.saveRoleAndUser();

	}

}
