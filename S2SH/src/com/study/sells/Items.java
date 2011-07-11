package com.study.sells;

import java.math.BigDecimal;
import java.util.List;

/**
 * Created on 2011-7-11
 * <p>名称: </p>
 * <p>描述: [Items for all goods]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
*/
public class Items {
	private List<Good> goods;
	private BigDecimal basics = new BigDecimal("0");
	private BigDecimal total = new BigDecimal("0");
	public Items(List<Good> goods) {
		this.goods = goods;
	}
	java.text.DecimalFormat   df   =new   java.text.DecimalFormat("###0.00");
	/**
	 *  Created on 2011-7-11 
	 * <p>Description:[finsh the item]</p>
	 * @author 孟志昂 mengzhiang@gmail.com
	 * @update:[日期YYYY-MM-DD] [更改人姓名]
	 * @return
	 */
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
