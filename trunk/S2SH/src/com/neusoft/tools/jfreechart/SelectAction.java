package com.neusoft.tools.jfreechart;

import java.awt.Font;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartRenderingInfo;
import org.jfree.chart.ChartUtilities;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.axis.CategoryAxis;
import org.jfree.chart.axis.CategoryLabelPositions;
import org.jfree.chart.axis.ValueAxis;
import org.jfree.chart.entity.StandardEntityCollection;
import org.jfree.chart.plot.CategoryPlot;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.chart.title.TextTitle;
import org.jfree.data.category.CategoryDataset;
import org.jfree.data.category.DefaultCategoryDataset;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

@Controller
@Scope("prototype") 
public class SelectAction extends ActionSupport {

	private JFreeChart chart;// 必须提供该属性，提供getter方法，且名字要为chart

	private List<String> interest;// 这是接收用户选择的项目

	public JFreeChart getChart() {// 需要自己产生JFreeChart对象
		JFreeChart chart = ChartFactory.createBarChart3D("爱好兴趣调查", "项目", "比例",
				createDataset(), PlotOrientation.VERTICAL, true, true, true);

		TextTitle tt = chart.getTitle();
		tt.setFont(new Font("黑体", Font.BOLD, 20));

		chart.getLegend().setItemFont(new Font("宋体", Font.ITALIC, 10));

		CategoryPlot plot = chart.getCategoryPlot();
		CategoryAxis domainAxis = plot.getDomainAxis();
		domainAxis.setLabelFont(new Font("宋体", Font.ITALIC, 14));
		domainAxis.setTickLabelFont(new Font("宋体", Font.ITALIC, 14));
		domainAxis.setCategoryLabelPositions(CategoryLabelPositions.UP_45);

		ValueAxis valueAxis = plot.getRangeAxis();
		valueAxis.setLabelFont(new Font("宋体", Font.ITALIC, 14));
		valueAxis.setTickLabelFont(new Font("宋体", Font.ITALIC, 14));
		
		ChartRenderingInfo info = new ChartRenderingInfo(new StandardEntityCollection()); 
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		String path = this.getClass().getClassLoader().getResource("").getPath();
		//保存文件在webroot的temp路径下文件
		path = path.substring(1, path.length()-16)+ "\\temp\\sport.jpg"; 
		File file = new File(path);  
		try {
			FileOutputStream fos_jpg = null;  
			  fos_jpg = new FileOutputStream(path);  
			   
			  ChartUtilities.writeChartAsJPEG(fos_jpg, 0.9f, chart, 500, 300, null);  
			request.setAttribute("fileName",path);
			fos_jpg.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return chart;
	}

	public List<String> getInterest() {
		return interest;
	}

	public void setChart(JFreeChart chart) {
		this.chart = chart;
	}

	public void setInterest(List<String> interest) {
		this.interest = interest;
	}

	@Override
	public String execute() throws Exception {
		this.getChart();
		return SUCCESS;
	}

	@SuppressWarnings("unchecked")
	public Map addSelectResult(List<String> list) {// 应该从数据库中取，
		// 这里只是为了模拟，放在Application中
		ActionContext context = ActionContext.getContext();
		Map map = context.getApplication();
		for (String str : list) {
			if (null == map.get(str)) {
				map.put(str, 1);
			} else {
				map.put(str, (Integer) map.get(str) + 1);
			}
		}
		return map;
	}

	@SuppressWarnings("unchecked")
	public CategoryDataset createDataset() {// 收集数据，并产生相应的Dataset
		DefaultCategoryDataset dataset = new DefaultCategoryDataset();
		Map map = addSelectResult(this.getInterest());

		dataset.setValue((Integer) map.get("football"), "a", "足球");
		dataset.setValue((Integer) map.get("basketball"), "b", "篮球");
		dataset.setValue((Integer) map.get("volleyball"), "c", "排球");
		dataset.setValue((Integer) map.get("pingpong"), "d", "乒乓球");
		dataset.setValue((Integer) map.get("badminton"), "e", "羽毛球");

		return dataset;
	}
	
	
}
