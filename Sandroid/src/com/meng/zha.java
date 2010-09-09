package com.meng;

import java.text.DecimalFormat;

import android.app.Activity;
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
        
        //通过id找到按钮submit并注册事件
        Button button = (Button)findViewById(R.id.submit);
        button.setOnClickListener(calcBMI);
    }
    
    private OnClickListener calcBMI = new OnClickListener(){

		@Override
		public void onClick(View view) {
			//1：取得height和weight的值。
			EditText fieldheight = (EditText)findViewById(R.id.height);
			EditText fieldweight = (EditText)findViewById(R.id.weight);
			
			double height = Double.parseDouble(fieldheight.getText().toString())/100;
			double weight = Double.parseDouble(fieldweight.getText().toString());
			//2：计算结果
			double BMI = weight / (height * height);
			//3：给result赋值
			TextView result = (TextView)findViewById(R.id.result);
			//格式化结果保留两位小数
			DecimalFormat nf = new DecimalFormat("0.00");
			
			result.setText("你的 BMI 是 "+nf.format(BMI));
			
			TextView suggest = (TextView)findViewById(R.id.suggest);
			if(BMI>25){
				suggest.setText(R.string.advice_heavy);
			}else if(BMI<20){
				suggest.setText(R.string.advice_light);
			}else{
				suggest.setText(R.string.advice_average);
			}
		}
    	
    };
    
}