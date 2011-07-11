package com.study.sells;

import java.math.BigDecimal;
import java.util.List;

public class Items {
	private List<Good> goods;
	private BigDecimal basics = new BigDecimal("0");
	private BigDecimal total = new BigDecimal("0");
	public Items(List<Good> goods) {
		this.goods = goods;
	}
	java.text.DecimalFormat   df   =new   java.text.DecimalFormat("###0.00");
	public String finish(){
		StringBuffer sb = new StringBuffer();
		for(Good good:goods){
			sb.append(good.getDescription()+":"+df.format(good.cost().doubleValue())+"\n");
			total =total.add(good.cost());
			basics =basics.add(good.basic);
		}
		sb.append("Sales Taxes:"+df.format(total.subtract(basics).doubleValue())+"\n");
		sb.append("Total:"+df.format(total.doubleValue()));
		System.out.println(sb.toString());
		return sb.toString();
	}
}
