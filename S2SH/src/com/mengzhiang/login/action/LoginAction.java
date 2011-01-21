package com.mengzhiang.login.action;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Random;

import javax.annotation.Resource;
import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.mengzhiang.base.action.BaseAction;
import com.mengzhiang.base.perm.privilege.service.PermService;
import com.mengzhiang.base.perm.user.model.PermUser;
import com.mengzhiang.base.perm.user.service.PermUserService;

@Controller
@Scope("prototype")
public class LoginAction extends BaseAction {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5133585599464228486L;
	private PermUser permUser;
	@Resource
	private PermService permService;
	@Resource
	private PermUserService permUserService;

	private String yzm;

	private String yzmjpgName;

	public String getYzm() {
		return yzm;
	}

	public void setYzm(String yzm) {
		this.yzm = yzm;
	}

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

	public void setPermService(PermService permService) {
		this.permService = permService;
	}

	public void setPermUserService(PermUserService permUserService) {
		this.permUserService = permUserService;
	}

	public String getYzmjpgName() {
		return yzmjpgName;
	}

	public void setYzmjpgName(String yzmjpgName) {
		this.yzmjpgName = yzmjpgName;
	}

	@Override
	public String execute() {
		return SUCCESS;
	}

	public String login() {
		String info = permService.checkUserAccount(permUser);
		if (info.equals("true")) {
			this.setFlag("success");
			HttpSession session = ServletActionContext.getRequest()
					.getSession();
			session.setAttribute("currentUser", permUserService.findByProperty(
					"username", permUser.getUsername()).get(0));
		} else {
			this.setFlag(info);
		}
		;
		return SUCCESS;
	}

	public String logout() {
		HttpSession session = ServletActionContext.getRequest().getSession();
		session.removeAttribute("currentUser");
		return SUCCESS;
	}

	public String geneImg() throws IOException {
		BufferedImage img = new BufferedImage(68, 22,
				BufferedImage.TYPE_INT_RGB);
		// 得到该图片的绘图对象
		Graphics g = img.getGraphics();
		Random r = new Random();
		Color c = new Color(200, 150, 255);
		g.setColor(c);
		// 填充整个图片的颜色
		g.fillRect(0, 0, 68, 22);
		// 向图片中输出数字和字母
		StringBuffer sb = new StringBuffer();
		char[] ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".toCharArray();
		int index, len = ch.length;
		for (int i = 0; i < 4; i++) {
			index = r.nextInt(len);
			g
					.setColor(new Color(r.nextInt(88), r.nextInt(188), r
							.nextInt(255)));
			g.setFont(new Font("Arial", Font.BOLD | Font.ITALIC, 22));// 输出的字体和大小
			g.drawString("" + ch[index], (i * 15) + 3, 18);// 写什么数字，在图片的什么位置画
			sb.append(ch[index]);
		}
		HttpServletResponse response = ServletActionContext.getResponse();
		HttpSession session = ServletActionContext.getRequest().getSession();
		session.setAttribute("piccode", sb.toString());
		this.setYzm(sb.toString());
		String path = this.getClass().getClassLoader().getResource("")
				.getPath();
		String picName = String.valueOf(r.nextInt(1000));
		this.setYzmjpgName(picName);
		// 保存文件在webroot的temp路径下文件
		path = path.substring(1, path.length() - 16) + "\\temp\\yzm\\"
				+ picName + ".jpg";
		File file = new File(path);

		FileOutputStream fos_jpg = null;
		fos_jpg = new FileOutputStream(path);
		ImageIO.write(img, "JPG", fos_jpg);
		session.setAttribute("fileName", path);
		fos_jpg.close();

		return SUCCESS;
	}
}
