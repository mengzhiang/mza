package com.study.sells;

import java.math.BigDecimal;

public class Book extends Good {
	
	public Book() {
		basic = new BigDecimal(12.49);
		description = "book";
	}

	public BigDecimal cost() {
		return basic;
	}
}
