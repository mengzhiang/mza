package com.study.designPattern.factory.factory5;

public class EletroCar implements Vehicle{
	private EletroCar(){};
	public void run() {
	}
	public static Factory factory = new Factory(){

		public Vehicle make() {
			return new EletroCar();
		}
		
	};
}
