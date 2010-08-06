package com.neusoft.tools.jasper;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.jasperreports.engine.JRDataSource;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.JasperRunManager;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import net.sf.jasperreports.engine.util.JRLoader;

import org.apache.struts2.ServletActionContext;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.neusoft.struts2.user.model.User;
import com.neusoft.struts2.user.service.UserService;
import com.opensymphony.xwork2.ActionSupport;
@SuppressWarnings("serial")
@Controller
@Scope("prototype") 
public class JsperAction extends ActionSupport{
	
	@Resource
	private UserService userService;
	
	public void setUserService(UserService userService) {
		this.userService = userService;
	}
	
	/**
	 *  Created on 2010-8-6
	 * <p>Description:[读取jasper对象,生成pdf文件，保存并下载]</p>
	 * @author:孟志昂
	 * @email: mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 */
	@Override
	public String execute() throws Exception {

		//得到工程路径	
		String path = this.getClass().getClassLoader().getResource("").getPath();
		//取数据
		List<User> list = userService.list(new User());
		//转换成jsper数据源
		JRDataSource dataSource = new JRBeanCollectionDataSource(list);
		String reportFilePath = path.substring(1, path.length()-16)+ "\\jasper\\report2.jasper"; 
		 //读取jsper文件转换成jsperreport对象
         JasperReport report = (JasperReport) JRLoader.loadObject(reportFilePath);
		
         //传递参数         
         Map parameters = new HashMap();
         parameters.put("getId", "4");
         
         //生成pdf 
         byte[] bytes = JasperRunManager.runReportToPdf(report,parameters,dataSource);
         
 		
		//保存文件在webroot的temp路径下文件
		path = path.substring(1, path.length()-16)+ "\\temp\\test.pdf"; 
		
         File   file   =   new   File(path);  

         FileOutputStream fos=new FileOutputStream(path,true);   
         fos.write(bytes);   
         fos.flush();     
         fos.close();
         
         File f = new File(path);
         FileInputStream fin = new FileInputStream(f);
         HttpServletResponse response = ServletActionContext.getResponse();
         response.reset();//设置为没有缓存
         response.setContentType("application/x-download;charset=GBK");
         response.setHeader("Content-Disposition", "attachment;filename=test.pdf");

       /*attachment是以附件下载的形式，inline是以线上浏览的形式。
        * 当点击“保存”的时候都可以下载，
        * 当点击“打开”的时候attachment是在本地机里打开，inline是在浏览器里打开。*/
         OutputStream output = response.getOutputStream();
         byte[] buf = new byte[1024];
         int r = 0;
         while ((r = fin.read(buf, 0, buf.length)) != -1) {
         output.write(buf, 0, r);
         }
         response.getOutputStream().flush();
         response.getOutputStream().close();
		return SUCCESS;
	}
}
