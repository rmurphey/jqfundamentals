$(document).ready(function() {
	var $search = $('#search');
	var $input = $search.find('input.input_text');
	var $label = $search.find('label[for="' + $input.attr('name') + '"]');
	var hint = $label.text();

	$input
		.val(hint)
		.addClass('hint')
		.focus(function() {
			$input.val('').removeClass('hint');
		})
		.blur(function() {
			if (!$input.val()) {
				$input.val(hint).addClass('hint');
			}
		});
});
