package com.study.init;
//java类的加载 重点：
//1:静态成员变量只加载一遍。
//2：静态成员不能是局部变量。
//3：类先加载内部成员 然后 执行构造方法。
//4：先加载静态内部成员，然后加载非静态的内部成员。
import static com.study.Print.print;

class Bowl{
	Bowl(int marker){
		print("Bowl("+marker+")");
	}
	void f1(int marker){
		print("f1("+marker+")");
	}
}

class Table {
	static Bowl bowl1 = new Bowl(1);
	Table(){
		print("Table()");
		bowl2.f1(1);
	}
	void f2(int marker){
		print("f2("+marker+")");
	}
	static Bowl bowl2 = new Bowl(2);
}
class Cupboard{
	Bowl bowl3 =  new Bowl(3);
	static Bowl bowl4 = new Bowl(4);
	Cupboard(){
		print("Cupboard()");
		bowl4.f1(2);
	}
	void f3(int marker){
		print("f3("+marker+")");
	}
	static Bowl bowl5 = new Bowl(5);
}
public class StaticInitialzation {
	int i =0;
	public static void main(String[] args) {
		print("Create new Cupboard() in main");
		new Cupboard();
		print("create new cupboard in main");
		new Cupboard();
		table.f2(1);
		cupboard.f3(1);
	}
	
	static Table table = new Table();
	static Cupboard cupboard = new Cupboard();
}

/**解答
 * 首先加载StaticInitialzation类，初始化类中的两个变量。
 * 引起加载Table和Cupboard。
 * 加载Table，引起加载bowl1和bowl2，然后调用Table的构造函数Table()，然后执行bowl2的f1方法。
 * 加载Cupboard。首先加载静态的bowl4和bowl5，然后加载非静态的bowl3，然后构造函数，然后bowl4的方法。
 * 然后进入main函数。
 * 创建一个新的Cupboard实例。只加载非静态的Bowl3，不在加载静态的Bowl4和5，静态的只加载一次。
 * 执行table的f2(1)方法和cupload的f3方法。
 * 
 *                    StaticInitialzation
 *                Table            Cupboard
 *   bowl1 bowl2 Table() f1(1)   Bowl(4) Bowl(5) Bowl(3) Cupboard() f1(2)
Bowl(1)
Bowl(2)
Table()
f1(1)
Bowl(4)
Bowl(5)
Bowl(3)
Cupboard()
f1(2)
Create new Cupboard() in main
Bowl(3)
Cupboard()
f1(2)
create new cupboard in main
Bowl(3)
Cupboard()
f1(2)
f2(1)
f3(1)
 */