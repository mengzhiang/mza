package com.study.collection.Array;

public class User {
	public int id;
	public String  name;
	public int age;

//	public int compareTo(User user) {
//		if(this.age>user.age){
//			return 1;
//		}else if(this.age<user.age){
//			return -1;
//		}else{
//			return 0;
//		}
//	}
	public User(int id, String name, int age) {
		this.id = id;
		this.name = name;
		this.age = age;
	}
	public User(int id, String name) {
		this.id = id;
		this.name = name;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
}
