(function($) {
	$.fn.stripe = function(color) {
		var $table = this;
		$table.find('tbody tr:odd td').css('backgroundColor', color);
		return $table;
	};
})(jQuery);

// usage: $('#myTable').stripe('#cccccc');
