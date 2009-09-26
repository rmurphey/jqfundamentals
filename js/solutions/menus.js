$(document).ready(function() {
	var cache = {};
	
	$('<div class="container"/>')
		.css({
			border : '1px solid #ccc',
			padding : '5px'
		})
		.appendTo('#menus > li')
		.hide();
		
	$('#menus a').click(function(e) {
		e.preventDefault();
		
		var $a = $(this);
		var $container = $a.closest('ul')
			.siblings('div.container');
		
		var href = $a.attr('href');
		var hash = href.split('#')[1];
		var url = 'html/' + hash + '.html';
			
		var callback = function(html) {
			if (!cache[hash]) {
				cache[hash] = html;
			}
			$container.html(cache[hash]).show();
		};

		if (cache[hash]) {
			callback(cache[hash]);
		} else {
			$.ajax({
				type : 'get',
				dataType : 'html',
				url : url,
				success : function(html) {
					callback(html);
				}
			});
		}
		
	});
});
