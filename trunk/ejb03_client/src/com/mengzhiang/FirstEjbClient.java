package com.mengzhiang;

import java.util.Hashtable;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;

public class FirstEjbClient {
	public static void main(String[] args) throws NamingException {
//		Hashtable env = new Hashtable();
//		env.put(Context.INITIAL_CONTEXT_FACTORY,
//				"org.jnp.interfaces.NamingContextFactory");
//		env.put(Context.PROVIDER_URL, "localhost");
//		env.put("java.naming.factory.url.pkgs",
//				"org.jboss.naming:org.jnp.interfaces");
//		Context ctx = new InitialContext(env);
		InitialContext init = new InitialContext();
		FirstEjb ejb = (FirstEjb)init.lookup("FirstEjbBean/remote");
		System.out.println(ejb.sayHello());
	}
}
