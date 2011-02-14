/********************************
 * Selecting					*
 ********************************/

// Get all of the div elements that have a class of "module"
$('div.module');



// Come up with three selectors that you could use to get the third item in the #myList unordered list.

$('#myListItem');
// this one is best -- IDs are *always* the fastest selector

$('#myList li:eq(2)');
// this one would be best if the list item didn't have an ID

$('#myList #myListItem');
// this one is redundant



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

// Add five new list items to the end of the unordered list #myList
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

// Add a new div.module to the page after the last one;
// put a copy of one of the existing images inside of it
var $img = $('img:first');
var $newDiv = $('<div class="module"/>');

$newDiv.append($img.clone()).insertAfter('div.module:last');


/*
var myObject = {
	foo : 'bar',
	bim : 'baz',
	bop : 'beep'
};

var myArray = [ 1, 3, 5, 7 ];

$.each(myObject, function(k, v) {
	console.log(k, v);
});

$.each(myArray, function(i, v) {
	console.log('the value at position ' + i + ' is ' + v);
});

$('li').each(function(i) {
	var $li = $(this);
});

var myArray = [ 1, 3, 5, 7 ];
if ($.inArray(1, myArray)) {
	console.log('found it');
}


/*

$('#loading')
	.ajaxStart(function() {
		if (showLoader) {
			$(this).addClass('visible');
		}
	})
	.ajaxStop(function() {
		$(this).removeClass('visible');
	});


var myCallback = function(r) {
	console.dir(r);
	console.log(r.monday.color);
};


showLoader = true;
$.getScript('/json/specials.json', { foo : 'bar'}, myCallback);





$.ajax({
	method : "POST",
	dataType : "json",
	data : {
		foo : 'bar'
	},
	url : "/json/specials.json",
	success : myCallback
});


resp[id].foo


/*

$('p')
	.addClass('foo')
	.text('hello world')
	;



var settings = 'hello world' + 1; // hello world1
var myNumber = new Number(3);

myNumber + '2'; // 32

$(document).ready(function() {

	var settings = 'hello rebecca';



});

alert(foo);


var foo = true;
var bar = 1;
var bim = 'john';

foo && bar && bim; // 'john'
bar || foo || bim; // 1

if (myVal) {

}

var myArray = [];
{};

if (myArray.length) {

}

myFunction && myFunction();



for (var i = 0; i<5; i++) {
	console.log(i);
}



var myArray = [
	'1',
	2,
	'hello',
	[ 'foo', 'bar' ],
	function() {
		alert('hello');
	}
];

myArray[3][0]; 	// 'foo'
myArray[4]();

// myArray[myArray.length] = 'bar';
myArray.push('bar');
myArray.unshift('new beginning thing');

myArray.shift();
myArray.pop();


var g = 'hello';

var myObject = {
	myName : 'super object!',
	sayName : function(greet) {
		g = 'world';
	}
};

myObject.sayName();
console.log(g);

var myFunction = function() {
	console.log(arguments.length);
};

var myOtherFunction = function() {
	return 'hello everybody!!!';
};

myFunction();

$ = Prototype;
$('myId');

(function($){
	$('#myId')
})(jQuery);


var $ = function(selector, context) {
	// ...
}

for (var i=0; i<5; i++) {
	var myParagraph = $('<p>my element ' + i + '</p>');

	$p.appendTo('body');

	$p.click(function() {
		alert(i);
	});

	$p.click(
		function() { alert(i); }
	);
}




$('#myId'); // string, css selector
$('<p/>'); // string, html fragment
$(function() { }); // function, to be run on doc ready

*/
