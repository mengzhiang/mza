package com.meng;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.EditText;

public class zha extends Activity {
	// ����ʱִ��
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.main);
		findView();
		restorePrefs();
		setListener();
	}

	public static final String PREF = "BMI_PREF";
	public static final String PREF_HEIGHT = "BMI_HEIGHT";

	// ��ȡƫ������
	private void restorePrefs(){
		SharedPreferences settings = getSharedPreferences(PREF, 0);
		String pref_height = settings.getString(PREF_HEIGHT, "");
		if(!"".equals(PREF_HEIGHT)){
			fieldheight.setText(pref_height);
			fieldweight.requestFocus();
		}
    }

	private EditText fieldheight, fieldweight;
	private Button button_calc;

	private void findView() {
		fieldheight = (EditText) findViewById(R.id.height);
		fieldweight = (EditText) findViewById(R.id.weight);
		button_calc = (Button) findViewById(R.id.submit);
	}

	private void setListener() {
		button_calc.setOnClickListener(calcBMI);
	}

	private OnClickListener calcBMI = new OnClickListener() {
		@Override
		public void onClick(View view) {
			Intent intent = new Intent();
			intent.setClass(zha.this, Report.class);
			Bundle bundle = new Bundle();
			bundle.putString("KEY_HEIGHT", fieldheight.getText().toString());
			bundle.putString("KEY_WEIGHT", fieldweight.getText().toString());
			intent.putExtras(bundle);
			startActivity(intent);
		}

	};

	private void openOptionsDialog() {
		// Toast.makeText(zha.this, "BMI ������", Toast.LENGTH_SHORT).show();
		new AlertDialog.Builder(zha.this).setTitle(R.string.about_title)
				.setMessage(R.string.about_msg).setPositiveButton("ȷ��",
						new DialogInterface.OnClickListener() {
							@Override
							public void onClick(DialogInterface dialog,
									int which) {
							}
						}).setNegativeButton("��ҳ",
						new DialogInterface.OnClickListener() {
							@Override
							public void onClick(DialogInterface dialog,
									int which) {
								Uri uri = Uri.parse("http://mengzhiang.com");
								Intent intent = new Intent(Intent.ACTION_VIEW,
										uri);
								startActivity(intent);
							}
						}).show();
	}

	/**
	 * ���menu�¼�����Ӱ�ť
	 */
	private static final int MENU_ABOUT = Menu.FIRST;
	private static final int MENU_QUIT = Menu.FIRST + 1;

	// ���а�ť��ʾ����
	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		super.onCreateOptionsMenu(menu);
		menu.add(0, MENU_ABOUT, 0, "����");
		menu.add(0, MENU_QUIT, 0, "����");
		return true;
	}

	// ����ѡ��ѡ���¼�������
	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		super.onOptionsItemSelected(item);
		switch (item.getItemId()) {
		case MENU_ABOUT:
			openOptionsDialog();
			break;
		case MENU_QUIT:
			finish();
			break;
		}
		return true;
	}

	// ������ͣ����������ƫ���趨
	@Override
	protected void onPause() {
		super.onPause();
		SharedPreferences settings = getSharedPreferences(PREF, 0);
		settings.edit()
				.putString(PREF_HEIGHT, fieldheight.getText().toString())
				.commit();
	};

}