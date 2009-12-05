$(document).ready(function() {
	$('#nav li')
		// when a nav item is hovered,
		// add a class to it and show
		// any children ULs (dropdowns)
		.hover(function() {
			$(this)
				.addClass('hover')
				.find('ul').show();
		}, function() {
			$(this) // list item that was clicked
				.removeClass('hover')
				.find('ul').hide();
		})
		
		// make the nav items appear clickable
		.css({'cursor':'pointer'})
		
		// make the nav items actually clickable
		.click(function() {
			window.location.href = 
			$(this).find('a').attr('href');
		});
});