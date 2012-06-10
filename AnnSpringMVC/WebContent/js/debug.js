$(function() {
	document.onkeyup = function(e) {
		var theEvent = window.event || e;
		var code = theEvent.keyCode || theEvent.which;
		if (theEvent.ctrlKey && theEvent.shiftKey && code == 84) {
			if ($(".debug_message").is(":hidden")) {
				$(".debug_message").show();
			} else {
				$(".debug_message").hide();
			}
		}
	};
});
