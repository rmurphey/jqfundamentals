$(document).ready(function() {
	$('#nav li')
		.hover(function() {
			$(this)
				.addClass('hover')
				.find('ul').slideDown();

		}, function() {
			$(this)
				.removeClass('hover')
				.find('ul').slideUp();
		})
		.click(function() {
			var $li = $(this);

			$('a', $li); // $li.find('a');

			var href = $li.find('a').attr('href');
			window.location.href = href;
		})
		.css({cursor:'pointer'});
});