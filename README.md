# jQuery Fundamentals Training Material #

This repository contains evolving content to be used as teaching material for a
jQuery Fundamentals class, including exercises, solutions, and a web-based
book.

If you're looking for the latest release of the book, visit
<http://jqfundamentals.com/book/>.

## Contributing ##

This material is licensed under the Creative Commons Attribution-Share Alike
3.0 US license because I am eager to see other people contribute to it. Pull
requests are welcome and encouraged! Check out the Issues page for the project
to see the most recent list of things that still need to be done.

Want to contribute? Fork the repo, make your changes, and submit a pull
request. The source for the book itself is in the `/book/` folder.

## Reporting Issues ##

Your feedback is essential to improving jQuery Fundamentals; if you see an
error or an opportunity for improvement, please [open an
issue](https://github.com/rmurphey/jqfundamentals/issues). When reporting
issues, be sure to include the following:

- A clear sentence, in the title of the issue, that summarizes the issue as an
  action item. For example, "Add information about other JavaScript consoles"
  is a good issue title; "Chapter 1" is not.
- A longer description of the issue in the description area, as appropriate.
- Links to any resources that would help resolve the issue or material that
  would provide further clarification.

## Suggesting Changes to Content ##

If you'd like to suggest a change to the book, the *strong* preference is that
you submit a [pull request](http://help.github.com/pull-requests/) rather than
describing your proposed change in an issue. Once a pull request is submitted,
it will be reviewed for inclusion.

## Suggesting Additions to Content ##

If you've come across a blog post or other resource that would be great for
inclusion in jQuery Fundamentals, please [open an
issue](https://github.com/rmurphey/jqfundamentals/issues) with a link to the
resource, and indicate in the issue whether you've already discussed inclusion
of the resource with the author.


## Using this Repository to Generate the HTML Book ##

For editing and collaborating purposes, the contents of jQuery Fundamentals is
broken into parts and chapters. If you would like to build an HTML version,
simply type `make` in your terminal or console in the root folder of the
project. If you are a windows user, you'll need either [GNU Make for
Windows](http://gnuwin32.sourceforge.net/packages/make.htm) or
[cygwin](http://cygwin.com/). For example:

- Clone the jqfundamentals repository to your local machine<br>
`> git clone https://github.com/rmurphey/jqfundamentals.git`
- Change to the newly cloned repository's directory<br>
`> cd jqfundamentals`
- Make the book<br>
`> make`

This will create a folder called `/publish/` with the `index.html` file
contents of the `/book/include/` folder inside of it.

## Using this Material ##

You are welcome to use this material according to the terms of the
[license](http://creativecommons.org/licenses/by-sa/3.0/us/); if
you're using it to teach a class, I'd love for you to let me know about it.

# Copyright & Licensing #

This material is Copyright &copy;2011 Rebecca Murphey and licensed under the
[Creative Commons Attribution-Share Alike 3.0 United States
license](http://creativecommons.org/licenses/by-sa/3.0/us/). You are free to
copy, distribute, transmit, and remix this work, provided you attribute the
work to Rebecca Murphey as the original author and reference [this
repository](http://github.com/rmurphey/jqfundamentals). If you alter,
transform, or build upon this work, you may distribute the resulting work only
under the same, similar or a compatible license. Any of the above conditions
can be waived if you get permission from the copyright holder. For any reuse or
distribution, you must make clear to others the license terms of this work. The
best way to do this is with a link to the [Creative Commons Attribution-Share
Alike 3.0 United States
license](http://creativecommons.org/licenses/by-sa/3.0/us/).
