package com.study.sells;

import java.math.BigDecimal;

public abstract class Good {
	String description = "Unkown Good";
	public BigDecimal basic = new BigDecimal("0");
	public String getDescription() {
		return description;
	}
	public abstract BigDecimal cost();
}
