(function($) {
	
	$.fn.slideshow = function(opts) {
		
		var settings = $.extend({}, $.fn.slideshow.defaults, opts);
		
		return this.each(function() {

			var timeout, manualMode = false,

				$slideshow = $(this),

				$counter = $('<div/>').insertAfter($slideshow),

				$controls = $('<div/>').insertAfter($slideshow),

				$prevBtn = $('<input/>', {
					type : 'button',
					value : settings.prevButtonText
				}).appendTo($controls),

				$nextBtn = $('<input/>', {
					type : 'button',
					value : settings.nextButtonText
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

					$currentItem.fadeOut(settings.fadeDuration, function() {
						$itemToShow.fadeIn(settings.fadeDuration, fadeCallback);
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
					}, settings.interval);
				},

				handleBtnClick = function(e) {
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

			$items.eq(0).fadeIn(settings.fadeDuration, fadeCallback);
		});
	};
	
	$.fn.slideshow.defaults = {
		fadeDuration : 1000,
		interval : 5000,
		prevButtonText : 'previous',
		nextButtonText : 'next'
	};
	
})(jQuery);

$('#slideshow').slideshow();