var Portlet = function(config) {
	
	var state = config.initialState,
		url = config.source,
		title = config.title,
		
		$element = $('<div class="portlet">' +
			'<ul class="actions"></ul>' +
			'<h2>' + title + '</h2>' +
			'<div class="content"></div>' +
		'</div>'),
		
		$content = $element.find('div.content'),
		$actions = $element.find('ul.actions'),
		
		actions = {
			"destroy" : { 
				text : "Close", 
				action : function() {
					$element.remove();
				} 
			},
			
			"refresh" : { 
				text : "Refresh", 
				action : function() {
					$content.load(url);
				} 
			},
			
			"toggle" : { 
				text : "Show/Hide", 
				action : function() {
					$content.toggle();
					state = state == 'open' ? 'closed' : 'open';
				} 
			}
		},
		
		open = function() {
			if (state == 'open') { return; }
			actions.toggle.action();
		},
		
		close = function() {
			if (state == 'closed') { return; }
			actions.toggle.action();
		},
		
		setSource = function(src) {
			url = src;
			actions.refresh.action();
		},
		
		_setupActions = function() {
			var html = '';
				
			jQuery.each(actions, function(c, t) {
				html += '<li class="' + c + '">' + t.text + '</li>';
			});
			
			$actions
				.append(html)
				.delegate('li', 'click', function(e) {
					actions[$(this).attr('class')].action();
				});
		};
	
	_setupActions();
	actions.refresh.action();
	
	if (state == 'closed') { 
		$content.hide(); 
	}
	
	// $.subscribe('/portlets/open', open);
	// $.subscribe('/portlets/close', close);
		
	return {
		toggle : actions.toggle.action,
		refresh : actions.refresh.action,
		destroy : actions.destroy.action,
		open : open,
		close : close,
		setSource : setSource,
		$element : $element
	};
};