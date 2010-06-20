#!/bin/bash

input=src/en-US/jquery-fundamentals-book.xml

base=`pwd`

# Next is a hack for cross-platform win/linux absolute file for Java
absolute=`echo $base | sed 's|/\([a-z]\)/|/\1:/|'`

xalan=scripts/libs/xalan/xalan-j_2_7_1
xslthlJar=scripts/libs/xslthl/xslthl-2.0.2.jar
xsl=scripts/libs/docbook-xsl/docbook-xsl-1.75.2

xslChunked=xsl/xhtml-chunked.xsl
xslAllInOne=xsl/xhtml.xsl

outputAllInOne=release/html/jquery-fundamentals-book.html
outputChunked=release/html/index.html

if [ ! -f $xalan/xalan.jar ]; then
	echo "Xalan not found. Run install script: ./scripts/install.sh"
	exit
fi

if [ ! -f $xsl_template ]; then
	echo "XSL stylesheets not found. Run install script: ./scripts/install.sh"
	exit
fi

if [ ! -d "release" ]; then
	mkdir release
fi

if [ ! -d "release/html" ]; then
	mkdir release/html
fi

#cp -Rf imgs release/html
cp style/* release/html
cp -Rf $xsl/images release/html

#chunked html
java \
	-Djava.endorsed.dirs=$xalan  \
    -cp "$xalan/xalan.jar;$xalan/xml-apis.jar;$xalan/xercesImpl.jar;$xsl/extensions/xalan27.jar;$xslthlJar" \
    -Dorg.apache.xerces.xni.parser.XMLParserConfiguration=org.apache.xerces.parsers.XIncludeParserConfiguration \
	 org.apache.xalan.xslt.Process \
    -in $input  \
    -out $outputChunked  \
    -xsl $xslChunked  \
	-param keep.relative.image.uris 0 \
    -param use.extensions 1 \
    -param highlight.xslthl.config "file://$absolute/scripts/libs/xslthl/highlighters/xslthl-config.xml" \
    -param highlight.source 1

#all-in-one html
java \
	-Djava.endorsed.dirs=$xalan  \
    -cp "$xalan/xalan.jar;$xalan/xml-apis.jar;$xalan/xercesImpl.jar;$xsl/extensions/xalan27.jar;$xslthlJar" \
    -Dorg.apache.xerces.xni.parser.XMLParserConfiguration=org.apache.xerces.parsers.XIncludeParserConfiguration \
	org.apache.xalan.xslt.Process \
    -in $input  \
    -out $outputAllInOne  \
    -xsl $xslAllInOne  \
	-param keep.relative.image.uris 0 \
    -param use.extensions 1 \
    -param highlight.xslthl.config "file://$absolute/scripts/libs/xslthl/highlighters/xslthl-config.xml" \
    -param highlight.source 1
    
