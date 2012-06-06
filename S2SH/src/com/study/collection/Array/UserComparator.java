package com.study.collection.Array;

import java.util.Comparator;
public class UserComparator implements Comparator<User>{
	@Override
	public int compare(User user1, User user2) {
		if(user1.age<user2.age){
			return 1;
		}else if(user1.age>user2.age){
			return -1;
		}else{
			return 0;
		}
	}
}
