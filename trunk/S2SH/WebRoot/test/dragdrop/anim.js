MZA.ready(function(){
	var D = MZA.dom;
	var E = MZA.event;
	var F = MZA.form;
	
	var div = D.find("#div");
	var alpha =100;
	var opacity =1;
	function movefade(){
		div.style.top = parseInt(div.offsetTop)+10+"px"; 
		alpha = alpha-5;
		div.style.filter =  "alpha(opacity="+alpha+")";
		opacity = opacity-0.05
		div.style.opacity = opacity;
		if(parseInt(div.offsetTop)>500){
			clearInterval(movetimer);	
			alert("wancheng");
		}
	}
	function getTime(){
		return new Date().getTime();
	}
	var begin = getTime();
	var speed =0;
	var downspeed = 10;
	var hr = D.find("#ground");
	hr.style.top ="700px";
	div.style.top = "0px";
	var down = true;
	function bond(){
		if(down){
			speed =speed+0.1;
			div.style.top = parseInt(div.offsetTop)+speed+"px"; 
		}else{
			speed =speed-0.1;
			div.style.top = parseInt(div.offsetTop)-speed+"px"; 
		}
		
		if(parseInt(div.offsetTop)>600){
			down = false;	
			downspeed =downspeed-downspeed*0.2 ;
			speed = downspeed;
		}
		if(speed <0){
			down = true;
		}
		if(downspeed<0){
			clearInterval(movetimer);
		}
	}
	var movetimer = setInterval(bond,4);
		
});