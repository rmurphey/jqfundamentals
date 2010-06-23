$(document).ready(function() {
	var $search = $('#search');
	var $input = $search.find('input.input_text');
	var hint = $search.find('label').remove().text();

	$input
		.val(hint)
		.addClass('hint')
		.bind('focus', function() {
			$input.val('').removeClass('hint');
		})
		.bind('blur', function() {
			if (!$.trim($input.val())) {
				$input.val(hint).addClass('hint');
			}
		});
});
