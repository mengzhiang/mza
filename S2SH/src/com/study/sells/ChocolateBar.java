package com.study.sells;

import java.math.BigDecimal;

public class ChocolateBar extends Good {
	public BigDecimal cost() {
		return basic;
	}

	public ChocolateBar() {
		basic = new BigDecimal("0.85");
		description = "chocolate bar";
	}
}
