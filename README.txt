= Welcome to jQuery Fundamentals! =
Thanks for signing up for the jQuery Fundamentals class! In the interest of getting right to work when we meet, I've put together a few notes about things to do before the class. Your help in doing this housekeeping beforehand is much appreciated. 


== Setting up a Server ==
You'll need a server for the AJAX exercises we'll be doing in class, and you'll need to have it set up before you come to class so we can get right to work. You have a couple of options here:

 * Set up a server on your local machine, using tools such as MAMP or WAMP. If you're not familiar with these tools, they are fairly easy ways to get a server up and running on your computer, allowing you to access and modify all files locally.
 * Set up space on a hosted server, such as Dreamhost, MediaTemple, or similar, and access it via FTP or SSH.

If you have questions about how to do this, please don't hesitate to contact me.


== Getting the Code ==
The code we'll be using in class is hosted in a public repository on Github: 

http://github.com/rmurphey/jqfundamentals

You can download a .zip or .tar file of the code, then uncompress it to use it on your server. (If you're git-inclined, then you can fork the repository instead, if you'd like.)


== Software ==
You'll want to have the following tools to make the most of the class:

 * The Firefox browser
 * The Firebug extension for Firefox
 * A plain text editor
 * An FTP or SSH client (if you're not using a local server)


= Course Outline =

== About the Instructor ==
Rebecca Murphey is a front-end architecture consultant based in Durham, NC. She is a regular contributor to JSMag, the magazine for JavaScript professionals; an active member of the jQuery community; and a contributor to an upcoming jQuery Cookbook from O'Reilly.

== Part 1: JavaScript 101 ==
 * JavaScript vs. jQuery
   * DOM manipulation issues
   * Selection issues
   * Traversal issues
   * Cross-browser issues
 * JavaScript fundamentals
   * Logic and operators
   * Booleans, strings, numbers, arrays, objects, and functions
   * Scope and closures

== Part 2: jQuery Basics ==
 * Selectors
   * best practices
   * speed optimizations
   * EXERCISE: get elements on the page
   * find
   * filter
   * is
   * .length
 * Chaining
   * getters and setters
   * EXERCISE: switch the html of two elements
 * CSS
   * changing the style of elements
   * why changing the style of elements via JS is a bad idea (use classes instead)

== Part 3: Accomplishing things with jQuery ==
 * Manipulating
   * append, prepend, appendTo, prependTo
   * remove, empty
   * before, after
   * insertBefore, insertAfter
   * attr
   * val
   * NOTE: add blocks of html all at once, not one element at a time
   * EXERCISE: make all links open in a new window
   * EXERCISE: create a table of contents for the page
 * Traversing
   * next/prev
   * parents, closest, children, siblings
   * EXERCISE: change the content of all the children of an element
 * Events
   * convenience methods (click, mouseover, mouseout, focus, blur, etc.)
   * combination methods (hover, one, toggle)
   * bind and trigger
   * EXERCISE: make clicking on a headilne hide the next element
   * EXERCISE: add/remove a class on an element on hover
   * EXERCISE: use the label for an input as hint text; clear hint on focus
 * Effects
   * built-in effects
     * show/hide
     * fadeIn/fadeOut
     * slideUp/slideDown
     * toggle
   * custom animations
   * EXERCISE: open/close a list when clicked
   * EXERCISE: show a message on the screen, then fade it out

== Part 4: XHR and other Goodies ==
 * XHR (AJAX)
   * choosing a data type
   * POST vs. GET
   * convenience methods vs $.ajax method
   * load, get, post
   * $.ajax
   * EXERCISE: use load to bring in part of a document
   * EXERCISE: use $.ajax to load json for specials
   * EXERCISE: serialize form data and send it to the server as a POST
 * Utility methods
   * trim
   * inArray
   * extend
   * ... and more
 * Plugins
   * Finding
   * Using
   * Writing

= Reference Material =

 * jQuery documentation: 	http://docs.jquery.com
 * jQuery Google Group: 	http://groups.google.com/group/jquery-en
 * Delicious bookmarks:		http://delicious.com/rdmey/jquery-class




= Copyright Notice =
All files in this repository are Copyright (c) 2009 Rebecca Murphey unless otherwise noted in the file. All rights reserved.
