/* slideshow */
var slideshow = {
	
	config : {
		autoAdvance : true,
		selector : '#hero',
		container : '#main',
		interval : 5000
	},
	
	init : function() {
		
		slideshow.$hero = $(slideshow.config.selector)
			.prependTo(slideshow.config.container)
			.addClass('js-slideshow');

		slideshow.$items = slideshow.$hero.find('li').hide();
		slideshow.totalItems = slideshow.$items.length;
		
		slideshow.createNav();
		
		slideshow.show(slideshow.$items.filter(':first')); 
		
		if (slideshow.config.autoAdvance) {
			slideshow.interval = 
				setInterval(
					slideshow.showNext, 	
					slideshow.config.interval
				);
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
		$item.siblings().hide();
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
			return slideshow.$items.eq(0);
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
		var num = slideshow.getCurrentItem().prevAll().length + 1;
		var text = num + ' of ' + slideshow.totalItems;
		slideshow.$counter.text(text);
	}
};

$(document).ready(function() {
	slideshow.init();
});