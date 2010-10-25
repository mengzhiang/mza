package com.study;

import org.apache.commons.mail.EmailAttachment;
import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.MultiPartEmail;

public class EmailTest {

	/**
	 * Created on 2010-8-6
	 * <p>
	 * Description:[方法功能中文描述]
	 * </p>
	 * 
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @param args
	 * @throws EmailException 
	 */
	public static void main(String[] args) throws EmailException {
	/*	//SimpleEmail email = new SimpleEmail();
		HtmlEmail email = new HtmlEmail();
		email.setTLS(true);
		email.setHostName("smtp.gmail.com");
		email.setAuthentication("mengzhiang@gmail.com", "m19860906"); // 用户名和密码
		try {
			email.addTo("mengzha@neusoft.com"); // 接收方
			email.setFrom("mengzhiang@gmail.com"); // 发送方
			email.setSubject("java邮件测试标题"); // 标题
			email.setCharset("GB2312");   //防止中文乱码
			//email.setMsg("java邮件测试内容"); // 内容
			email.setHtmlMsg("<hr/><a href='http://www.google.com'>java邮件测试内容</a>"); // 内容
			email.send();

		} catch (EmailException e) {
			e.printStackTrace();
		}
		*/
		//发送一个带附件的
		//创建一个Email附件   
		EmailAttachment emailattachment = new EmailAttachment();  
		emailattachment.setPath("C:\\1.txt"); 
		emailattachment.setDisposition(EmailAttachment.ATTACHMENT);   
		emailattachment.setDescription("This is Smile picture"); 
		emailattachment.setName("test.txt");   
		
		 //     创建一个email   
		   
        MultiPartEmail multipartemail = new MultiPartEmail();   
        multipartemail.setTLS(true);
        multipartemail.setHostName("smtp.gmail.com");   
   
        multipartemail.addTo("mengzha@neusoft.com", "mengzha");   
   
        multipartemail.setFrom("mengzhiang@gmail.com", "mengzhiang");   
   
        multipartemail.setAuthentication("mengzhiang@gmail.com", "m19860906");   
   
        multipartemail.setSubject("This is a attachment Email");   
   
        multipartemail.setMsg("this a attachment Eamil Test");   
   
        //添加附件   
   
        multipartemail.attach(emailattachment);   
   
        //发送邮件   
   
        multipartemail.send();   
   
       System.out.println("The attachmentEmail send sucessful!!!");   
	}

}
