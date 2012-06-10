(function($){
    // Attach this new method to jQuery
    $.fn.extend({
        // This is where you write your plugin's name
        debug: function() {
            // options
            var defaults = {
                autoOpen: "true",
                message: ""
            }
            var options = $.extend(defaults, options);
            // a public method
            this.methodName = function () {
                // call this method via $.pluginname().methodName();
            };
            // Iterate over the current set of matched elements
            return this.each(function() {
                var o = options;
            	$("<div></div>").attr({
					id:'dialog',
					title:"ϵͳ��ʾ"
				}).html($(this)).dialog({
					closeOnEscape : true,
					autoOpen : true,
					width : 450,
					modal : true
				});
            });
        }
    });
})(jQuery);
