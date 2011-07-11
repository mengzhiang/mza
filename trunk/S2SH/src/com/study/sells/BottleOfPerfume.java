package com.study.sells;

import java.math.BigDecimal;

public class BottleOfPerfume extends Good {
	
	public BottleOfPerfume() {
		super.basic = new BigDecimal("27.99");
		super.description = "bottle bf berfume";
	}

	public BigDecimal cost() {
		return basic;
	}
}
