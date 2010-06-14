$('li').each(function() {
	this.innerHTML = 'foo';
});

$('li').html('foo');

$('#myCheckbox').click(function() {
	if (this.checked) {
		
	}
});


$('li:first').get(0).innerHTML = ''

$('#staff li').one('click', function() {
	var $li = $(this);
	$.getScript('/js/staff.js', function() {
		showStaffDetails($li);
	});
});


$.ajax();

/_v/1233/js/foo.js
/_v/1234/js/foo.js
/js/foo.js



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