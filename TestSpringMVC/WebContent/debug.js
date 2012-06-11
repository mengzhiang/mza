$(function() {

	$("body").keyup(function(e) {
		if (e.ctrlKey && e.shiftKey && e.keyCode == 69) {
			if ($(".debug_message").is(":hidden")) {
				$(".debug_message").show();
			} else {
				$(".debug_message").hide();
			}
		}
	});
});
