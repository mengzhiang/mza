package com.study.sells;

import java.math.BigDecimal;

/**
 * Created on 2011-7-11
 * <p>名称: S2SH工程-用户模块</p>
 * <p>描述: [concrete class TobaccoTax ]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
*/
public class TobaccoTax extends TaxDecorator {
	private Good good;
	
	public final static BigDecimal IMPORTTAX_RATE =new BigDecimal("0.05");
	public TobaccoTax(Good good) {
		this.good = good;
		super.basic = good.basic;
	}

	public BigDecimal cost() {
		return good.cost().add(good.basic.multiply(IMPORTTAX_RATE));
	}

	public String getDescription() {
		return "Tobacco"+ good.getDescription();
	}
}
