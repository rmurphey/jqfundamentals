$(document).ready(function() {
	var $search = $('#search');
	var $input = $search.find('input.input_text');
	var hint = $search.find('label').remove().text();

	$input
		.val(hint)
		.addClass('hint')
		.one('focus', function() {
			$input.val('').removeClass('hint');
		});
});
