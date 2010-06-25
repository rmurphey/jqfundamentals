/*

= Portlets Exercise =

== Setup ==

Create a new portlets.html file in the exercises directory.

Create a new portlets.js file in the exercises/js directory.

Include jQuery and portlets.js in your html page.




== The Task ==
http://github.com/janl/mustache.js/
http://github.com/rmurphey/large-jquery-apps/
Create a portlet creator using the module pattern. 

Usage:

	var myPortlet = Portlet({
		title : 'Curry',
		source : 'exercises/data/html/curry.html',
		initialState : 'open' // or 'closed'
	});
	
	myPortlet.$element.appendTo('body');
	
Each portlet should be a div with a title, a content area, a button to open/close the portlet, a button to remove the portlet, and a button to refresh the portlet.

It should also be possible to accomplish the following tasks programmatically:

myPortlet.open(); // force open state
myPortlet.close(); // force close state
myPortlet.toggle(); // toggle open/close state
myPortlet.refresh(); // refresh the content
myPortlet.destroy(); // remove the portlet from the page
myPortlet.setSource('exercises/data/html/onions.html'); // change the source


*/