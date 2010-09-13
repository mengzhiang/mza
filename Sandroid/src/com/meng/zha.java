package com.meng;

import java.text.DecimalFormat;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class zha extends Activity {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        findView();
        setListener();
    }
    
	private EditText fieldheight,fieldweight;
	private TextView result,suggest;
	private Button button_calc;
	
	private void findView()
	{
		fieldheight = (EditText)findViewById(R.id.height);
		fieldweight = (EditText)findViewById(R.id.weight);
		result = (TextView)findViewById(R.id.result);
		suggest = (TextView)findViewById(R.id.suggest);
		button_calc = (Button)findViewById(R.id.submit);
	}
	
	private void setListener(){
		button_calc.setOnClickListener(calcBMI);
	}
	
    private OnClickListener calcBMI = new OnClickListener(){
		@Override
		public void onClick(View view) {
			Intent intent = new Intent();
			intent.setClass(zha.this, Report.class);
			Bundle bundle = new Bundle();
			bundle.putString("KEY_HEIGHT",fieldheight.getText().toString());
			bundle.putString("KEY_WEIGHT",fieldweight.getText().toString());
			intent.putExtras(bundle);
			startActivity(intent);
		}
	
    };
    
    private void openOptionsDialog() {
    	//Toast.makeText(zha.this, "BMI 计算器", Toast.LENGTH_SHORT).show();
        new AlertDialog.Builder(zha.this)
        .setTitle(R.string.about_title)
        .setMessage(R.string.about_msg)
        .setPositiveButton("确认", new DialogInterface.OnClickListener() {
			@Override
			public void onClick(DialogInterface dialog, int which) {
			}
		})
		.setNegativeButton("主页", new DialogInterface.OnClickListener() {
			@Override
			public void onClick(DialogInterface dialog, int which) {
				Uri uri = Uri.parse("http://mengzhiang.com");
				Intent intent = new Intent(Intent.ACTION_VIEW,uri);
				startActivity(intent);
			}
		})
        .show();
    }

    /**
     * 添加menu事件，添加按钮
     */
    private static final int MENU_ABOUT = Menu.FIRST;
    private static final int MENU_QUIT = Menu.FIRST+1;
    
	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		super.onCreateOptionsMenu(menu);
		menu.add(0, MENU_ABOUT, 0, "关于");
		menu.add(0, MENU_QUIT, 0,"结束" );
		return true;
	}

	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		 super.onOptionsItemSelected(item);
		 switch(item.getItemId()){
		 	case MENU_ABOUT:
			 	openOptionsDialog();
			 	break;
		 	case MENU_QUIT:
		 		finish();
		 		break;
		 }
		 return true;
	};
 
}