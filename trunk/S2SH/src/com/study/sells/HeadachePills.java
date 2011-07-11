package com.study.sells;

import java.math.BigDecimal;

/**
 * Created on 2011-7-11
 * <p>名称: </p>
 * <p>描述: [HeadachePills good]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
*/
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
