$(document).ready(function() {
	$('li')
		.click(function() {
			$(this)
				.addClass('current')
				.siblings()
					.removeClass('current');
		})
		.addClass('pointer');
});