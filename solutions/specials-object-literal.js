$(document).ready(function() {
	var specials = {
		config : {
			dataUrl : 'json/specials.json',
			containerType : '<div/>'
		},
		
		init : function() {
			$('#specials li.buttons').remove();
			
			specials.$container = $(specials.config.containerType)
				.appendTo('#specials');
			
			$('#specials select')
				.bind('change', specials.handleChange)
		},
		
		getAjaxConfig : function() {
			return {
				url : specials.config.dataUrl,
				type : 'get',
				dataType : 'json',
				success : specials.handleResponse
			};
		},
		
		cache : null,
		
		handleResponse : function(json) {
			var html = specials.buildHtmlFromJson(json);
			specials.cache = html;
			specials.$container.html(html);
		},
		
		getData : function(val) {
			if (specials.cache) {
				specials.handleResponse(specials.cache);
				return;
			}
			
			$.ajax(specials.getAjaxConfig());
		},
		
		handleChange : function(e) {
			var $select = $(this);
			if (!$select.val()) {
				specials.$container.empty();
				return;
			}
			
			specials.getData($select.val());
		},
		
		buildHtmlFromJson : function() {
			// ...
			return('hello');
		}
	};
	
	specials.init();
});
