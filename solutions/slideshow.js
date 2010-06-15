$(document).ready(function() {
	// move the slideshow up to the top
	var $slideshow = $('#slideshow');
	$slideshow.prependTo('#main');

	// create the counter element
	var $counter = $('<div/>')
		.insertAfter($slideshow);
	
	var $items = $slideshow.find('li').hide();
	var total = $items.length;
	
	var callback = function() {
		var $this = $(this);
		
		var num = $this.prevAll().length + 1;
		
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