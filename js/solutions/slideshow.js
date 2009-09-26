$(document).ready(function() {
	// move the slideshow up to the top
	var $slideshow = $('#hero');
	$slideshow.prependTo('#main');

	// create the counter element
	var $counter = $('<div/>')
		.insertAfter($slideshow);
	
	// get the items and figure out
	// how many of them there are;
	// we'll use this in the counter later
	var $items = $slideshow.find('li').hide();
	var total = $items.length;
	
	// the function to run when 
	// an animation is complete
	var callback = function() {
		var $this = $(this);
		
		// figure out the position of
		// the current item
		var num = $this.prevAll().length + 1;
		
		// figure out which is the
		// next item
		var $next = $this.next().length ?
			$this.next() : $items.eq(0);
			
		// update the counter
		$counter.text(num + ' of ' + total);
			
		// set the timeout for showing
		// the next item in 5 seconds
		setTimeout(function() {
			// fade out the current element
			$this.fadeOut(500, function() {
				// show the next element,
				// run this same callback
				// when done
				$next.fadeIn(500, callback);
			});
		}, 5000);
	};
	
	$items.eq(0).fadeIn(500, callback);
});