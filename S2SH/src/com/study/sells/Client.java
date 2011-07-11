package com.study.sells;

import java.util.ArrayList;
import java.util.List;

import junit.framework.TestCase;

/**
 * Created on 2011-7-11
 * <p>名称: </p>
 * <p>描述: [TestCase for the Seels taxs]</p>
 * <p>版本: Copyright (c) 2010</p>
 * @author: 孟志昂
 * @email:  mengzhiang@gmail.com
 * @version:$Revision$
*/
public class Client extends TestCase{


	public void testSellOne() {
		Good book = new Book();
		Good cd = new MusicCD();
		cd = new BasicTax(cd);
		Good chocolateBar = new ChocolateBar();
		List<Good> list = new ArrayList<Good>();
		list.add(book);
		list.add(cd);
		list.add(chocolateBar);
		Items item1 = new Items(list);
		item1.finish();
	}

	public void testSellTwo() {
		Good boxOfChocolates = new BoxOfChocolates();
		boxOfChocolates = new ImportTax(boxOfChocolates);
		Good bottleOfPerfume = new BottleOfPerfume();
		bottleOfPerfume = new ImportTax(bottleOfPerfume);
		List<Good> list = new ArrayList<Good>();
		list.add(boxOfChocolates);
		list.add(bottleOfPerfume);
		Items item1 = new Items(list);
		item1.finish();
	}
	
	public void testSellThree() {
		Good bottleOfPerfume = new BottleOfPerfume();
		bottleOfPerfume = new ImportTax(bottleOfPerfume);
		Good bottleOfPerfumet = new BottleOfPerfume();
		Good headachePills = new HeadachePills();
		Good boxOfChocolates = new BoxOfChocolates();
		boxOfChocolates = new ImportTax(boxOfChocolates);
		List<Good> list = new ArrayList<Good>();
		list.add(bottleOfPerfume);
		list.add(bottleOfPerfumet);
		list.add(boxOfChocolates);
		list.add(headachePills);
		Items item1 = new Items(list);
		item1.finish();
	}
}
