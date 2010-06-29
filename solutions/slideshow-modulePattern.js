var slideshow = function() {
	var timeout, manualMode = false,

		$slideshow = $('#slideshow'),

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
	
	return {
		manualMode : manualMode
	};
};

$(document).ready(function() {
	var mySlideshow = slideshow();
	// mySlideshow.manualMode = true;
});
