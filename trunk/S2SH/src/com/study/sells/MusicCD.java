package com.study.sells;

import java.math.BigDecimal;

public class MusicCD extends Good {
	
	public MusicCD() {
		super.basic = new BigDecimal("14.99");
		super.description = "music cd";
	}
	
	public BigDecimal cost() {
		return basic;
	}
}
