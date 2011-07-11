package com.study.sells;

import java.math.BigDecimal;

public class ImportTax extends TaxDecorator {
	private Good good;
	
	public final static BigDecimal IMPORTTAX_RATE =new BigDecimal("0.05");
	public ImportTax(Good good) {
		this.good = good;
		super.basic = good.basic;
	}

	public BigDecimal cost() {
		return good.cost().add((good.basic.multiply(IMPORTTAX_RATE)));
	}

	public String getDescription() {
		return "imported "+ good.getDescription();
	}
}
