package com.study.sells;

import java.math.BigDecimal;

public class HeadachePills extends Good {
	public BigDecimal cost() {
		return basic;
	}

	@Override
	public String getDescription() {
		return "headache pills";
	}

	public HeadachePills() {
		basic = new BigDecimal("9.75");
		description = "headache pills";
	}
}
