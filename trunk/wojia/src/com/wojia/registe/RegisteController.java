package com.wojia.registe;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RegisteController {
	
	@RequestMapping
	public String test1(){
		return "registe_success";
	}
}
