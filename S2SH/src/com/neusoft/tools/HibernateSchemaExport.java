package com.neusoft.tools;

import java.io.File;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.tool.hbm2ddl.SchemaExport;

public class HibernateSchemaExport {
	public static void main(String[] args){
		File cfgxml = new File("src/hibernate.cfg.xml");
		Configuration config = new Configuration().configure(cfgxml);
		SessionFactory factory = config.buildSessionFactory();
		Session session = factory.openSession();
		Transaction tx =  session.beginTransaction();
		SchemaExport schemaExport = new SchemaExport(config);
		schemaExport.create(true, true);
		tx.commit();
	}
}
