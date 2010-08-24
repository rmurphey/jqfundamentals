#!/bin/sh

# Script is from 
# http://github.com/recess/the-book-of-recess/blob/master/scripts/install.sh
# Now with lots of small changes

# Prerequisites:
#	Java

# bail out if things get ugly
set -e

# make sure we have a download option before continuing
if  which curl >/dev/null 2>&1; then
    GET='curl -L -o'
elif which wget >/dev/null 2>&1; then
    GET='wget -O'
else
    echo "Can't find curl or wget. Get one and try again."
    exit 1
fi

# move to relevant working directory
cd `dirname $0`

if [ -d libs ]; then
    cd libs
else
    mkdir libs
    cd libs
fi

# Install necessary components for Docbook Publishing
#	1) Xalan
#	2) Docbook XSL NS Stylesheets

# Xalan Install
if [ ! -f xalan.zip ]; then
	echo "Downloading and extracting Xalan"
	$GET xalan.zip http://mirrors.ibiblio.org/pub/mirrors/apache/xml/xalan-j/xalan-j_2_7_1-bin-2jars.zip
	unzip xalan.zip -d xalan
fi

# FOP Install
if [ ! -f fop.zip ]; then
	echo "Downloading and extracting FOP"
	$GET fop.zip http://mirrors.ibiblio.org/pub/mirrors/apache/xmlgraphics/fop/binaries/fop-1.0-bin.zip
	unzip fop.zip -d fop
fi

# DocBook NS XSL Stylesheets
if [ ! -f docbook-xsl.zip ]; then
	echo "Downloading and extracting DocBook XSL NS"
	$GET docbook-xsl.zip http://sourceforge.net/projects/docbook/files/docbook-xsl/1.75.2/docbook-xsl-1.75.2.zip/download
	unzip docbook-xsl.zip -d docbook-xsl
fi

# XSL Syntax Highlight
if [ ! -f xslthl.zip ]; then
	echo "Downloading and extracting XSLT Syntax Highlighting"
	$GET xslthl.zip http://sourceforge.net/projects/xslthl/files/xslthl/2.0.2/xslthl-2.0.2.zip/download
	unzip xslthl.zip -d xslthl
fi

echo
echo
echo "The DocBook XSL tools have been installed."
echo "Publish with: ./scripts/publish.sh or ./scripts/publish-pdf.sh"
