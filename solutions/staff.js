$(document).ready(function() {
	
	/*
	$('#staff li').one('click', function(e) {
		var $li = $(this);
		var id = $li.attr('data-staffId');
		
		$.ajax({
			type : 'GET',
			dataType : 'json',
			url : '/json/staff.json',
			success : function(resp) {
				var $p = $('<p/>')
					.insertAfter($li.find('h2'))
					.html(
						resp[id].lastName + ' is ' + 
						resp[id].age
					);
				
				$li.click(function() {
					$p.toggle();
				});
			}
		});
	});
	*/

	/*
	var peopleCache, 
	
		showDetails = function($li, d) {
			peopleCache = peopleCache || d;
			
			var id = $li.attr('data-staffId');
			
			$li.find('h2')
				.after('<p>' + 
					d[id].lastName + ' is ' + 
					d[id].age + 
				'</p>');
		};
		
	$('#staff li').one('click', function() {
		var $li = $(this);
		
		if (peopleCache) {
			showDetails($li, peopleCache);
			return;
		}
		
		$.ajax({
			type : 'GET',
			url : '/json/staff.json',
			dataType : 'json',
			success : function(resp) {
				showDetails($li, resp);
			}
		});
	});
	*/
	
	
});