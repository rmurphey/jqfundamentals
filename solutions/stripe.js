(function($) {
	$.fn.stripe = function(color) {
		return this.find('tbody tr:odd td').css('backgroundColor', color);
	};
})(jQuery);

// usage: $('#myTable').stripe('#cccccc');
