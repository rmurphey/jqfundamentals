$(document).ready(function() {

	$('ul li')
		.click(function(e) {
			var $this = $(this);
			console.log($this.text());
			console.log($this.attr('id'));
			console.log(
				$this.next().remove()
			);
			$this.parent().prependTo('body');
		});
	
	/**
	 * 
	 */

	/*
	$('#myDiv h2')
		.click(function(e) {
			$(this).siblings().slideToggle();
		})
		.hover(function() {
			$(this).addClass('hover');
		}, function() {
			$(this).removeClass('hover');
		});;
	
	$('ul li').click(function(e) {
		$(this).addClass('selected')
			.siblings().removeClass('selected');
	});
	
	$('td')
		.hover(function() {
			$(this).addClass('hover');
		}, function() {
			$(this).removeClass('hover');
		})
		.click(function(e) {
			var text = $(this).text();
			$.ajax({
				url: 'dummy.php',
				type: 'POST',
				dataType: 'json',
				data: { text: text },
				
				success: function(resp) {
					console.dir(resp);
				}
			});
			
			$(this).text('hello');
		});
	*/
});
