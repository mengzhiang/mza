package com.study.sells;

import java.math.BigDecimal;

/**
 * Created on 2011-7-11
 * <p>名称: ThoughtWork测试 SELLS TAXS</p>
 * <p>描述: [所有商品父类]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
*/
public abstract class Good {
	String description = "Unkown Good";
	//record basic price for calculate the taxs
	public BigDecimal basic = new BigDecimal("0");
	public String getDescription() {
		return description;
	}
	public abstract BigDecimal cost();
}
