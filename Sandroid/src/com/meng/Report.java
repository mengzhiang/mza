package com.meng;

import java.text.DecimalFormat;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.TextView;

public class Report extends Activity {

	private static final String TAG = "ZHA";
	//��������ҳ������ʱִ��
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.report);
		Log.v(TAG, "find_view");
		findView();
		showResults();
		setListener();
	}

	private TextView result, suggest;
	private Button button_back;

	//��ʼ������Ԫ�ز���ֵ
	private void findView() {
		result = (TextView) findViewById(R.id.result);
		suggest = (TextView) findViewById(R.id.suggest);
		button_back = (Button) findViewById(R.id.submit);
	}
	//���㲢��ʾ���
	private void showResults() {
		DecimalFormat nf = new DecimalFormat("0.00");
		Bundle bundle = this.getIntent().getExtras();
		double height = Double.parseDouble(bundle.getString("KEY_HEIGHT")) / 100;
		double weight = Double.parseDouble(bundle.getString("KEY_WEIGHT"));
		double BMI = weight / (height * height);
		result.setText("��� BMI �� " + nf.format(BMI));
		if (BMI > 25) {
			suggest.setText(R.string.advice_heavy);
		} else if (BMI < 20) {
			suggest.setText(R.string.advice_light);
		} else {
			suggest.setText(R.string.advice_average);
		}
	}

	//��Ԫ�����ü�����
	private void setListener() {
		button_back.setOnClickListener(backMain);
	}

	//�½�һ��onclick��������
	private OnClickListener backMain = new OnClickListener() {
		@Override
		public void onClick(View view) {
			//�ر�ҳ��
			Report.this.finish();
		}
	};
}
