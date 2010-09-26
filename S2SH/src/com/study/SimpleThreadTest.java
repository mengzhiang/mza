package com.study;

/**
 * 继承Thread类和实现Runnbale接口的区别是， 继承Thread类不能共享线程变量， 实现Runnable则可以共享线程变量。
 * join()方法线程强制运行，当这个线程执行完成之后其他线程才能运行 需要同步的方法写在同步方法中 synchronized 代码块分四种：
 * 1：普通代码块，直接写在方法中的 用{}括起来的部分 2：构造代码块, 写在类中，直接用{}括起来，在构造方法执行前执行
 * 3：静态代码块，用static关键字修饰{}括起来的部分，优先构造代码块执行，并且只执行一次。 4：同步代码块，用synchronized 修饰的
 */

public class SimpleThreadTest {

	public static void main(String[] args) {
		ThreadTestTwo tt1 = new ThreadTestTwo("名字");
		Thread t1 = new Thread(tt1, "线程1");
		Thread t2 = new Thread(tt1, "线程2");
		// Thread t1 = new ThreadTest("甲票点");
		// Thread t2 = new ThreadTest("乙票点");

		t1.start();
		// try {
		// t1.join();
		// } catch (InterruptedException e) {
		// e.printStackTrace();
		// }
		// try {
		// Thread.sleep(5000);
		// } catch (InterruptedException e) {
		// e.printStackTrace();
		// }
		t2.start();
	}
}

class ThreadTest extends Thread {
	String name;
	int count = 100;

	public ThreadTest(String name) {
		this.name = name;
	}

	@Override
	public void run() {
		while (count > 0) {
			System.out.println(Thread.currentThread().getName() + "卖票"
					+ count--);
		}
	}
}

class ThreadTestTwo implements Runnable {
	String name;
	int count = 10;

	public ThreadTestTwo(String name) {
		this.name = name;
	}

	public void run() {
		while (count > 0) {
			synchronized (this) {
				if (count > 0) {
					try {
						Thread.sleep(100);
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
					System.out.println(Thread.currentThread().getName() + "卖票"
							+ count--);
				}
			}

		}
	}

	public synchronized void selTicket() {
		// 需要同步的方法写在同步方法中

	}
}