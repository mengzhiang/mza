$(document).ready(function() {
	$('.sidelist').mousemove(function() {
		$(this).find('.i-list').show();
		$(this).find('h3').addClass('hover');
	});
	$('.sidelist').mouseleave(function() {
		$(this).find('.i-list').hide();
		$(this).find('h3').removeClass('hover');
	});
	//鼠标在上面时，显示某个页面，不显示其他页面
	$('.main_nav').mousemove(function() {
		var sidebarid = $(this).attr("id");
		$("#"+sidebarid+"_con").show();
		console.log($("#"+sidebarid+"_con").siblings());
		$("#"+sidebarid+"_con").siblings().hide();
	});
	
});

// slideUp
