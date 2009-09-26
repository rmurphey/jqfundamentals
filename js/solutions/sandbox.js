/*
- get the third list item (hint: eq())
- change its color to red
- change the color of the rest of the list items to blue
- *without doing another selection*, find the div.module and remove the class "module"
*/

$(document).ready(function() {
	var $li = $('li').eq(2);

	$li.css('color', 'red')
		.siblings()
			.css('color', 'blue');
			
	$li.parent().prev() // div.module
		.removeClass('module');
});

/*	
- get the h1
- store its text in a variable
- use the stored text as the text for the first list item
*/
$(document).ready(function() {
	$('li:first').text( $('h1').text() );
});

/*	
bonus points:
- change the background color of *every other* table row (hint: use :odd or :even)
*/
$(document).ready(function() {
	$('tr:odd').css({ 'backgroundColor' : '#ccc' });
});

/*
example showing find() and not()
*/
$(document).ready(function() {
	$('ul')
		.addClass('rounded')
		.find('li').not('.foo')
			.css('color', 'blue');
});

/*
playing with list items
*/
$(document).ready(function() {
	var $firstListItem = $('li:first');
	
	$firstListItem
	 	.addClass('current')
	 	.siblings()
	 	.removeClass('current');

	var liColor = $('ul')
		.css('border', '1px solid red')
		.children()
			.css('color', 'blue')
			.css('color');
		
	console.log(liColor); // 'blue'
});

$(document).ready(function() {
	/* appending */
	$('li')
		.each(function(i) {
			var $li = $(this);
			$('<span/>')
				.text(' number: ' + i)
				.appendTo($li);
		})
		.append('<span> hello</span>');
	
	/* cloning and inserting */
	$('li').each(function() {
		var $li = $(this);
		var $newLi = $li.clone();
		
		$newLi.text('new ' + $newLi.text());
		
		$newLi.insertAfter($li);
	});
	
	var $newUl = $('ul').clone();
	
	$('<div/>')
		.insertAfter('h1')
		.append($newUl);
	
});


/*
manipulation exercises
 
- add five new list items to the end of the unordered list (hint: for (i=0; i<5; i++) { ... } )
*/

$(document).ready(function() {
	var $ul = $('ul');
	var myListItems = [];

	for (var i=0; i<5; i++) {
		// $ul.append('<li>this is my list item</li>');
		var text = 'this is my list item #' + i;
		myListItems.push('<li>' + text + '</li>');
	}

	var myNewHtml = myListItems.join('');
	$ul.append(myNewHtml);
});


/* 
- remove the odd list items (hint: .remove())
*/
$(document).ready(function() {
	var $li = $('li:odd').remove();
});

/* 
- add another h2 and another paragraph to div.module
*/
$(document).ready(function() {
	var $module = $('div.module');

	$module.append('<h2>new headline</h2>');
	$module.append('<p>new paragraph</p>');
});


$(document).ready(function() {
	/*
	- add a new div.module to the page after the existing one; put a copy of the existing unordered list inside it.
	*/
	var $module = $('div.module');
	var $newUl = $('ul').clone();
	
	var $newModule = $('<div/>')
		.addClass('module')
		.append($newUl)
		.insertAfter($module);
		
	/* make list items clickable; mark the current one */
	$('li').click(function() {
		var $this = $(this);
	
		$this.siblings().removeClass('current');
	
		if ($this.hasClass('current')) {
			$this.removeClass('current');
		} else {
			$this.addClass('current');
		}
	});
});

$(document).ready(function() {
	/* toggle (event) */
	$('td').toggle(
		function() {
			var $td = $(this);
			$td.addClass('current');
		},
		function() {
			var $td = $(this);
			$td.removeClass('current');
		}
	);

	/* mark a clicked <a>; log the href */
	$('a').click(function(e) {
		e.preventDefault();
		
		var $a = $(this);
		$a.addClass('clicked');
		
		console.log($a.attr('href'));
	});
	
	/* hover */
	$('li').hover(
		function() {
			$(this).addClass('current');
		}, 
		function() {
			$(this).removeClass('current');
		}
	);
	
	/* click on p, simulate click on <a> */
	$('p:first').click(function(e) {
  		var href = $(this).find('a').attr('href');
		window.location.href = href;
	});
	
	/* timeouts and intervals */
	var myTimeout = setTimeout(function() {
		alert('hi');
	}, 5000);
	
	var myInterval = setInterval(function() {
		console.log('hello');
	}, 1000);

	$('p').click(function() {
		clearTimeout(myTimeout);
		clearInterval(myInterval);
	});

	/* animation */
	$('h1').next('p').hide();
	
	$('h1').click(function() {
		$(this).next('p').slideToggle();
	});
	
	$('div.module h2').toggle(
		function() {
			$(this).next().slideUp();
		},
		function() {
			$(this).next().slideDown();
		}
	);
	
	$('div.module h2').click(function() {
		$(this).next().slideToggle();
	});
	
	$('ul li')
		.css('position', 'relative')
		.toggle(
			function() {
				$(this).animate({
					left : '20px'
				}, 500);
			},
			function() {
				$(this).animate({
					left : '0px'
				}, 500);
			}
		);
	
});