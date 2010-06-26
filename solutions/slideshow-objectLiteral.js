bank.slideshow = {
	timeout : null,
	manualMode : false,

	settings : {
		fadeDuration : 500,
		interval : 1000,
		prevButtonText : 'Previous',
		nextButtonText : 'Next'
	},
	
	init : function(opts) {
		this.$slideshow = $('#slideshow');
		this.$counter = $('<div/>').insertAfter(this.$slideshow);
		this.$items = $slideshow.find('li').hide();
		this.totalItems = $items.length;
		
		this.$items.eq(0).fadeIn(this.settings.fadeDuration, fadeCallback);
	},
	
	getNextItem : function($item) {
		return $item.next().length ? 
			$item.next() : this.$items.first();
	},
	
	getPrevItem : function($item) {
		return $item.prev().length ? 
			$item.prev() : this.$items.last();
	},
	
	showItem : function($curr, $toShow) {
		var $toShow = $toShow || getNextItem($curr),
			self = this;
		
		$curr.fadeOut(this.fadeDuration, function() {
			$toShow.fadeIn(this.fadeDuration, function() {
				var showingEl = this;
				
				$.proxy(function() {
					this.showCallback(showingEl);
				}, self);
			});
		});
	},
	
	showCallback : function(showingEl) {
		if (this.manualMode) { return; }

		var $showingEl = $(el),
			$next = getNextItem($showingEl),
			num = $showingEl.prevAll().length + 1;
		
		this.updateCounter(num);
					
		this.timeout = setTimeout(
			// must be $.proxy'd, otherwise
			// "this" will be the window object
			$.proxy(function() {
				this.showItem($showingEl, $next);
			}, this), 
		this.interval);	
	},
	
	setupButtons : function() {
		var $controls = $('<div/>').insertAfter(this.$slideshow);
		
		$('<input/>', {
			type : 'button',
			value : this.prevButtonText
		})
		.appendTo($controls)
		.bind(
			'click', 
			{ prev : true }, 
			$.proxy(this.handleButton, this)
		);
		
		$('<input/>', {
			type : 'button',
			value : this.nextButtonText
		})
		.appendTo($controls)
		.bind(
			'click', 
			{ prev : false }, 
			$.proxy(this.handleButton, this)
		);
	},
	
	updateCounter : function(curr) {
		this.$counter.text(curr + ' of ' + this.totalItems);
	},
	
	handleButton : function(e) {
		if (!this.manualMode) {
			clearTimeout(this.timeout);
			this.manualMode = true;
		}
		
		this.showItem(
			this.$items.filter(':visible'), 
			$itemToShow = e.data.prev ? 
				this.getPrevItem($currentItem) :
				this.getNextItem($currentItem)
		);
	}
};

$(document).ready(function() {
	slideshow.init();
	setTimeout(function() {
		slideshow.settings.fadeDuration = 300;		
	}, 5000);
});








