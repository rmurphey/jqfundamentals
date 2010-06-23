/*

Move the #slideshow element to the top of #main.

Write code to cycle through the list items inside the element; 
fade one in, display it for a few seconds, then fade it out and 
fade in the next one.

When you get to the end of the list, start again at the beginning.

Add a counter under the slideshow (2 of 3, etc.) $.fn.prevAll

Add buttons under the counter that let you take manual control
of the slideshow and stop the automatic animation.

*/


$('h1').html('new html').attr()


$(document).ready(function() {
	var timeout, manualMode = false,
	
		$slideshow = $('#slideshow').prependTo('#main'),
	
		$counter = $('<div/>').insertAfter($slideshow),
		
		$controls = $('<div/>').insertAfter($slideshow),
		
		$prevBtn = $('<input/>', {
			type : 'button',
			value : 'previous'
		}).appendTo($controls),
		
		$nextBtn = $('<input/>', {
			type : 'button',
			value : 'next'
		}).appendTo($controls),
		
		$items = $slideshow.find('li').hide(),
		
		total = $items.length, 
		
		updateCounter = function(num) {
			$counter.text(num + ' of ' + total);
		},
		
		getNextItem = function($item) {
			return $item.next().length ? 
				$item.next() : $items.first();
		},
		
		getPrevItem = function($item) {
			return $item.prev().length ?
				$item.prev() : $items.last();
		},
		
		showItem = function($currentItem, $itemToShow) {
			var $itemToShow = 
				$itemToShow || getNextItem($currentItem);
			
			$currentItem.fadeOut(500, function() {
				$itemToShow.fadeIn(500, fadeCallback);
			});
		},
		
		fadeCallback = function() {
			if (manualMode) { return; }

			var $this = $(this),
				$next = getNextItem($this),
				num = $this.prevAll().length + 1;
			
			// update the counter
			updateCounter(num);
						
			// set the timeout for showing
			// the next item in 5 seconds
			timeout = setTimeout(function() {
				showItem($this, $next);
			}, 5000);
		},
		
		handleBtnClick = function(e) {
			console.log(e);
			clearTimeout(timeout);

			manualMode = true;
			
			var $currentItem = $items.filter(':visible'),
				$itemToShow = e.data.prev ? 
					getPrevItem($currentItem) :
					getNextItem($currentItem);
					
			showItem($currentItem, $itemToShow);
		};
		
	$prevBtn.bind('click', { prev : true }, handleBtnClick);
	$nextBtn.bind('click', { next : true }, handleBtnClick);
	
	$items.eq(0).fadeIn(500, fadeCallback);
});