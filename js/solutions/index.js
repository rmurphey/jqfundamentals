$(document).ready(function() {
	
	var $slideshow = $('#hero');

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
	

	// move the slideshow up to the top
	$slideshow.prependTo('#main');

	// set up the slideshow
	$slideshow.find('li')
	
		// hide all the list items
		.hide()
		
		// bind the click behavior: 
		// fade out the current item,
		// then fade in the next item
		.click(function(){
			
			// assign the clicked element 
			// to a variable
			var $this = $(this);
		
			// is there a next item? if not, 
			// use the first item as the next
			var $next = $this.next();

			if (! $next.length) {
				$next = $slideshow.find('li:first');
			}
			
			// do the fade out, then the fade in
			$this.fadeOut(500, function() {
				$next.fadeIn(500);
			});
		})
		
		// show the first item
		.eq(0).show();
});
