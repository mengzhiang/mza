package com.study.sells;

import java.math.BigDecimal;

/**
 * Created on 2011-7-11
 * <p>名称: </p>
 * <p>描述: [BasicTax]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
*/
public class BasicTax extends TaxDecorator {
	private Good good;
	public final static BigDecimal BASICTAX_RATE =new BigDecimal("0.10");
	public BasicTax(Good good) {
		this.good = good;
		super.basic = good.basic;
	}
	public BigDecimal cost() {
		return good.cost().add((good.basic.multiply(BASICTAX_RATE)));
	}
	@Override
	public String getDescription() {
		return good.getDescription();
	}
}
