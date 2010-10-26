package com.neusoft.testcase;

 import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;

import com.neusoft.base.perm.privilege.service.PermService;
import com.neusoft.base.perm.resmodel.service.PermResModelTreeService;
import com.neusoft.base.perm.role.service.PermRoleService;
import com.neusoft.base.perm.user.service.PermUserService;
   
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
     public void testlistpage() {  
         // fail("Not yet implemented");  
//         System.out.println("test FindAll()---size "  
//                 + permRoleService.listpage(0, 10).getItems().size());  
     }  
   
     @Test  
    // @Rollback(true)  
    //保护数据库现场，让事物不提交，直接rollback  
     public void testWriteSysparameterSysparamconf() {  
//         System.out.println("test WriteSysparameter...");          
//         PermRole role = new PermRole();  
//         role.setName("test");
//         role.setCode("test");
//         role.setParentid(1);
//         permRoleService.save(role);
//         PermResModelTreeEntity model = new PermResModelTreeEntity();
//         model.setCode("test");
//         model.setName("test");
//         model.setParentid(1);
//         permResModelTreeService.save(model);
//         Set set = new HashSet();
//         set.add(model);
//         PermUser pu = new PermUser();
//         pu.setUsername("test");
//         pu.setPassword("22");
//         permUserService.save(pu);
//         Set set = new HashSet();
//         set.add(pu);
//         role.setPermUser(set);
//         permRoleService.save(role);
    	 //级联保存没有问题，是使用spring测试框架无法级联保存。
    	 permService.saveRoleAndUser();
         
   
     }  
   
 }  
