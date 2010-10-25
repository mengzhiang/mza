package com.neusoft.testcase;

 import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;

import com.neusoft.base.perm.role.model.PermRole;
import com.neusoft.base.perm.role.service.PermRoleService;
   
 public class TestPermRoleService extends AbstractServiceTransactionalTests {  
   
     @Autowired  
     private PermRoleService permRoleService;  
   
     @Override  
     String[] getOtherConfigs() {  
         return new String[] { applicationContextFile };  
     }  
   
     @Test  
     public void testlistpage() {  
         // fail("Not yet implemented");  
//         System.out.println("test FindAll()---size "  
//                 + permRoleService.listpage(0, 10).getItems().size());  
     }  
   
     @Test  
     @Rollback(true)  
    //保护数据库现场，让事物不提交，直接rollback  
     public void testWriteSysparameterSysparamconf() {  
         System.out.println("test WriteSysparameter...");          
         PermRole role = new PermRole();  
         role.setName("test");
         role.setCode("test");
         role.setParentid(1);
         permRoleService.save(role);
   
     }  
   
 }  
