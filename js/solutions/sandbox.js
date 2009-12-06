/********************************
 * Selecting					*
 ********************************/

// Get all of the div elements that have a class of "module"
$('div.module');

// Come up with three selectors that you could use to get the third item in the #myList unordered list. 
$('#myListItem'); 			// this one is best -- IDs are *always* the fastest selector
$('#myList li:eq(3)');		// this one would be best if the list item didn't have an ID
$('#myList #myListItem');	// this one is redundant

// Get the label for the search input using an attribute selector. 
$('label[for="q"]');

// Figure out how many elements on the page are hidden (hint: .length). 
$(':hidden').length;

// Figure out how many image elements on the page have an alt attribute. 
$('img[alt]').length;

// Get all the odd table rows in the table body.
$('#fruits tbody tr:odd');	
// be sure to specify tbody, otherwise you'll get the tr in the thead too
// note that we used the ID for the table to quickly localize the search



/********************************
 * Traversing					*
 ********************************/

// Get all the image elements on the page; log each image’s alt attribute.
$('img').each(function(i) {
	var $img = $(this);
	console.log($img.attr('alt'));
});

// Get the search input text box, then traverse up to the form and add a class to the form that contains it.
$('input[name="q"]').closest('form').addClass('foo');

// Get the list item inside #myList that has a class of “current” and remove that class from it; add a class of “current” to the next list item.
$('li.current')
	.removeClass('current')
	.next()
		.addClass('current');

// Get the select element inside #specials; traverse your way to the submit button.
$('#specials select').parent().next().find('input.input_submit');

// Get the first list item in the #slideshow element; add the class “current” to it, and then add a class of “disabled” to its sibling elements.
$('#slideshow li:first')
	.addClass('current')
	.siblings()
		.addClass('disabled');
		
		

/********************************
 * Manipulation					*
 ********************************/

// Add five new list items to the end of the unordered list (hint: for (i=0; i<5; i++) { ... }). 
var $ul = $('#myList');
for (i=0; i<5; i++) {
	$('<li>List item ' + i + '</li>').appendTo($ul);
}

// Remove the odd list items (hint: .remove()). 
$('#myList li:odd').remove();

// Add another h2 and another paragraph to div.module. 
$('div.module')
	.append('<h2>new heading</h2>')
	.append('<p>new paragraph</p>');

// Add another option to the select element with a value of “Wednesday”.
$('select').append('<option value="wednesday">Wednesday</option>');

// Add a new div.module to the page after the existing one; put a copy of the existing unordered list inside it.
var $ul = $('#myList');
var $newDiv = $('<div class="module"/>');

$newDiv.append($ul.clone().attr('id', '')).insertAfter('div.module:last');