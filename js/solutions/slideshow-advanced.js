/* slideshow */
var slideshow = {
	
	config : {
		autoAdvance : true,
		selector : '#hero',
		container : '#main'
	},
	
	init : function(config) {
		
		var config = config || {};
		$.extend(slideshow.config, config);
		
		slideshow.$hero = $(slideshow.config.selector).prependTo(slideshow.config.container)
			.addClass('js-slideshow');
		slideshow.$items = slideshow.$hero.find('li').hide();
		
		slideshow.$items.each(function(i) {
			$(this).data('number', i + 1);
		});
		
		slideshow.totalItems = slideshow.$items.length;
		
		slideshow.createNav();
		
		slideshow.show(slideshow.$items.filter(':first')); 
		
		if (slideshow.config.autoAdvance) {
			slideshow.interval = 
				setInterval(slideshow.showNext, 2000);
		}
	},
	
	createNav : function() {
		slideshow.$next = $('<p>Next</p>')
			.insertAfter(slideshow.$hero)
			.click(function() {
				clearInterval(slideshow.interval);
				slideshow.showNext();
			});
		slideshow.$counter = $('<p></p>')
			.insertAfter(slideshow.$hero);
		slideshow.$prev = $('<p>Prev</p>')
			.insertAfter(slideshow.$hero)
			.click(function() {
				clearInterval(slideshow.interval);
				slideshow.showPrev();
			});
	},
	
	showNext : function() {
		slideshow.show(slideshow.getNextItem());
	},
	
	showPrev : function() {
		slideshow.show(slideshow.getPrevItem());
	},
	
	show : function($item) {
		slideshow.hide($item.siblings());
		$item.fadeIn(500);
		slideshow.updateCounter();
	},
	
	hide : function($items) {
		$items.hide();
	},
	
	getCurrentItem : function() {
		return slideshow.$items.filter(':visible');
	},
	
	getNextItem : function() {
		var $current = slideshow.getCurrentItem();
		if ($current.next().length) {
			return $current.next();
		} else {
			return slideshow.$items.filter(':first');
		}
	},
	
	getPrevItem : function() {
		var $current = slideshow.getCurrentItem();
		if ($current.prev().length) {
			return $current.prev();
		} else {
			return slideshow.$items.filter(':last');
		}
	},
	
	updateCounter : function() {
		var text = slideshow.getCurrentItem().data('number') 
			+ ' of ' + slideshow.totalItems;
		slideshow.$counter.text(text);
	}
};

$(document).ready(function() {
	slideshow.init();
});