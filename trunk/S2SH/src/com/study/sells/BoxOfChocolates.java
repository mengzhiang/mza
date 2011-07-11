package com.study.sells;

import java.math.BigDecimal;

public class BoxOfChocolates extends Good {
	
	public BoxOfChocolates() {
		super.basic = new BigDecimal("10.00");
		super.description = "box of chocolates";
	}

	public BigDecimal cost() {
		return basic;
	}
}
