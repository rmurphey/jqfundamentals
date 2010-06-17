#!/bin/bash

# Script is from http://github.com/recess/the-book-of-recess/blob/master/scripts/install.sh

# Prerequisites:
#	Java

if [ ! -d "./scripts/libs" ]; then
	mkdir "scripts/libs"
fi
cd scripts/libs

# Install necessary components for Docbook Publishing
#	1) Xalan
#	2) Docbook XSL NS Stylesheets

# Xalan Install
if [ ! -f xalan.zip ]; then
	echo "Downloading and extracting Xalan"
	curl -o xalan.zip http://mirrors.ibiblio.org/pub/mirrors/apache/xml/xalan-j/xalan-j_2_7_1-bin-2jars.zip
	unzip xalan.zip -d xalan
fi

# FOP Install
if [ ! -f fop.zip ]; then
	echo "Downloading and extracting FOP"
	curl -o fop.zip http://mirrors.ibiblio.org/pub/mirrors/apache/xmlgraphics/fop/binaries/fop-0.95-bin.zip
	unzip fop.zip -d fop
fi

# DocBook NS XSL Stylesheets
if [ ! -f docbook-xsl.zip ]; then
	echo "Downloading and extracting DocBook XSL NS"
	curl -o docbook-xsl.zip http://voxel.dl.sourceforge.net/sourceforge/docbook/docbook-xsl-ns-1.75.0.zip
	unzip docbook-xsl.zip -d docbook-xsl
fi

# XSL Syntax Highlight
if [ ! -f xslthl.zip ]; then
	echo "Downloading and extracting XSLT Syntax Highlighting"
	curl -o xslthl.zip http://voxel.dl.sourceforge.net/sourceforge/xslthl/xslthl-2.0.1.zip
	unzip xslthl.zip -d xslthl
fi

echo "The DocBook XSL tools have been installed."
echo "Publish with: ./scripts/publish.sh"
