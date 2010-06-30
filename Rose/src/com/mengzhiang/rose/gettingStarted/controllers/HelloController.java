package com.mengzhiang.rose.gettingStarted.controllers;

import java.util.Date; 

import org.springframework.beans.factory.annotation.Autowired; 
 
import net.paoding.rose.web.InvocationLocal; 
 
public class HelloController { 
 
    @Autowired 
    private InvocationLocal inv; 
 
 
    public String world() { 
        inv.addModel("now", new Date()); 
        return "hello-world"; 
    } 
}