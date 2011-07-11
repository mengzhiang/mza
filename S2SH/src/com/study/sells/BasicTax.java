package com.study.sells;

import java.math.BigDecimal;

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
