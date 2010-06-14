#!/bin/bash

input=jquery-fundamentals-book.xml

base=`pwd`

# Next is a hack for cross-platform win/linux absolute file for Java
absolute=`echo $base | sed 's|/\([a-z]\)/|/\1:/|'`

xalan=scripts/libs/xalan
xslthlJar=scripts/libs/xslthl/xslthl-2.0.1.jar
xsl=scripts/libs/docbook-xsl
xslChunked=xsl/xhtml-chunked.xsl
xslAllInOne=xsl/xhtml.xsl
xslFO=xsl/fo.xsl
fop=scripts/libs/fop
outputAllInOne=pub/html/jquery-fundamentals-book.html
outputChunked=pub/html/index.html
outputFO=pub/fo/jquery-fundamentals-book.fo
outputPDF=pub/pdf/jquery-fundamentals-book.pdf

if [ ! -f $xalan/xalan.jar ]; then
	echo "Xalan not found. Run install script: ./scripts/install.sh"
	exit
fi

if [ ! -f $xsl_template ]; then
	echo "XSL stylesheets not found. Run install script: ./scripts/install.sh"
	exit
fi

if [ ! -d "pub" ]; then
	mkdir pub
fi

if [ ! -d "pub/html" ]; then
	mkdir pub/html
fi

if [ ! -d "pub/fo" ]; then
	mkdir pub/fo
fi

if [ ! -d "pub/pdf" ]; then
	mkdir pub/pdf
fi

#cp -Rf imgs pub/html
cp style/* pub/html
cp -Rf $xsl/images pub/html

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
    
:'
#lets skip fop stuff for now

java \
	-Djava.endorsed.dirs=$xalan  \
    -cp "$xalan/xalan.jar;$xalan/xml-apis.jar;$xalan/xercesImpl.jar;$xsl/extensions/xalan27.jar;$xslthlJar" \
    -Dorg.apache.xerces.xni.parser.XMLParserConfiguration=org.apache.xerces.parsers.XIncludeParserConfiguration \
	org.apache.xalan.xslt.Process \
    -in $input  \
    -out $outputFO  \
    -xsl $xslFO  \
    -param use.extensions 1 \
    -param highlight.xslthl.config "file://$absolute/scripts/libs/xslthl/highlighters/xslthl-config.xml" \
    -param highlight.source 1

#cp -Rf imgs $fop

cd $fop
java \
	-jar "build/fop.jar" \
	-fo ../../../$outputFO -pdf ../../../$outputPDF
	
cd $base

#rm -rf $fop/imgs
'
