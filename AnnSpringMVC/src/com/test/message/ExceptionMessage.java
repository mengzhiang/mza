package com.test.message;

/**
 * ������ʾ��Ϣ
 * @author mza
 *
 */
public class ExceptionMessage {
	
	public ExceptionMessage(String message, String detail) {
		super();
		this.message = message;
		this.detail = detail;
	}
	//���û�������ʾ��Ϣ
	private String message;
	//��������Ա������ϸ������Ϣ��Ĭ�����أ�
	private String detail;
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
	
}
