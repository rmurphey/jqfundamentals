var modal = {
	initialized : false,
	
	init : function() {
		if (modal.initalized) { return; }
		
		modal.$m = $('<div id="modal"/>')
			.appendTo('body')
			.hide();
			
		modal.$c = $('<div id="modal_content"/>')
			.appendTo(modal.$m);

		modal.$o = $('<div id="overlay"/>')
			.appendTo('body')
			.hide()
			.css({opacity:0.8})
			.click(modal.hide);
			
		modal.$h = $('<p class="closer">Close</p>')
			.insertBefore(modal.$c)
			.click(modal.hide);

		modal.initialized = true;
	},
	
	show : function() {
		modal.init();
		modal.$m.fadeIn(300);
		modal.$o.show();
	},
	
	populate : function(html) {
		modal.init();
		modal.$c.html(html);
		modal.show();
	},
	
	hide : function() {
		modal.init();
		modal.$m.fadeOut(300);
		modal.$o.hide();
	}
};

$(document).ready(function() {
	var $links = $('#menus a');
	if ($links.length) {
		$links.click(function(e) {
			e.preventDefault();
			var href = $(this).attr('href');
			$.ajax({
				url : href,
				dataType : 'html',
				type : 'GET',
				success : function(html) {
					modal.populate(html);
				}
			});
		});
	}
});