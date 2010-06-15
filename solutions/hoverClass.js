;(function($){
	$.fn.hoverClass = function(c) {
		return this.each(function() {
			$(this).hover(
				function() {
					$(this).addClass(c);
				},
				function() {
					$(this).removeClass(c);
				}
			);
		});
	};
})(jQuery);