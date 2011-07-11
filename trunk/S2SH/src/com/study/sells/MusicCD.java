package com.study.sells;

import java.math.BigDecimal;

/**
 * Created on 2011-7-11
 * <p>名称: </p>
 * <p>描述: [new MusicCD class]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
*/
public class MusicCD extends Good {
	
	public MusicCD() {
		super.basic = new BigDecimal("14.99");
		super.description = "music cd";
	}
	
	public BigDecimal cost() {
		return basic;
	}
}
