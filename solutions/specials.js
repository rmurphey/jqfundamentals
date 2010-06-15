$(document).ready(function() {
	var $specials = $('#specials');
	$specials.find('li.buttons').remove();

	var cachedResponse = null;

	var $details = $('<div/>').appendTo($specials);

	var handleResponse = function(specials, val) {
		var daySpecial = specials[val];

		var html = '<h3>' + daySpecial.title + '</h3>';
		html += '<p>' + daySpecial.text + '</p>';

		$details.html(html);
		$('<img/>')
			.attr('src', daySpecial.image)
			.appendTo($details);

		$details.css('color', daySpecial.color);
	};

	var $select = $specials.find('select')
		.change(function() {
			var val = $select.val();
			if (!val) { 
				$details.empty();
				return; 
			}

			if (cachedResponse) {
				handleResponse(cachedResponse, val);
			} else {
				$.ajax({
					type : 'get',
					dataType : 'json',
					url : 'json/specials.json',
					success : function(specials) {
						cachedResponse = specials;
						handleResponse(specials, val);
					}
				});

			}
		});
});
