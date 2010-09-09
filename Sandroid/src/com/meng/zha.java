package com.meng;

import java.text.DecimalFormat;

import android.app.Activity;
import android.app.AlertDialog;
import android.os.Bundle;
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
			double height = Double.parseDouble(fieldheight.getText().toString())/100;
			double weight = Double.parseDouble(fieldweight.getText().toString());

			double BMI = weight / (height * height);
			
			DecimalFormat nf = new DecimalFormat("0.00");
			result.setText("ÄãµÄ BMI ÊÇ "+nf.format(BMI));
			if(BMI>25){
				suggest.setText(R.string.advice_heavy);
			}else if(BMI<20){
				suggest.setText(R.string.advice_light);
			}else{
				suggest.setText(R.string.advice_average);
			}
			openOptionsDialog();
		}
	
    };
    
    private void openOptionsDialog() {
        new AlertDialog.Builder(zha.this)
        .setTitle(R.string.about_title)
        .setMessage(R.string.about_msg)
        .show();
    };
    
}