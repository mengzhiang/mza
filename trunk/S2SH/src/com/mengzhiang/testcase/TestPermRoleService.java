package com.mengzhiang.testcase;

 import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.mengzhiang.base.perm.privilege.service.PermService;
import com.mengzhiang.base.perm.resmodel.service.PermResModelTreeService;
import com.mengzhiang.base.perm.role.service.PermRoleService;
import com.mengzhiang.base.perm.user.service.PermUserService;
   
 public class TestPermRoleService extends AbstractServiceTransactionalTests {  
   
     @Autowired  
     private PermRoleService permRoleService;  
     
     @Autowired  
     private PermResModelTreeService permResModelTreeService;  
     
     @Autowired  
     private PermUserService permUserService;  
     
     @Autowired  
     private PermService permService;  
     
   
     @Override  
     String[] getOtherConfigs() {  
         return new String[] { applicationContextFile };  
     }  
    
   
     @Test  
    // @Rollback(true)  
    //保护数据库现场，让事物不提交，直接rollback  
     public void testWriteSysparameterSysparamconf() {  
    	 //级联保存没有问题，是使用spring测试框架无法级联保存。
    	 permService.saveRoleAndUser();
     }  
   
 }  
