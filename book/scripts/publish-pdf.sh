input=src/en-US/jquery-fundamentals-book.xml

base=`pwd`

absolute=`echo $base | sed 's|/\([a-z]\)/|/\1:/|'`

xalan=scripts/libs/xalan/xalan-j_2_7_1
xslthlJar=scripts/libs/xslthl/xslthl-2.0.2.jar
xsl=scripts/libs/docbook-xsl/docbook-xsl-ns-1.75.2
xslFO=xsl/fo.xsl
fop=scripts/libs/fop/fop-0.95
outputFO=release/fo/jquery-fundamentals-book.fo
outputPDF=release/pdf/jquery-fundamentals-book.pdf

if [ ! -d "release" ]; then
	mkdir release
fi

if [ ! -d "release/fo" ]; then
	mkdir release/fo
fi

if [ ! -d "release/pdf" ]; then
	mkdir release/pdf
fi

#fo
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

cp -Rf imgs $fop

#fo -> pdf
cd $fop
java \
	-jar "build/fop.jar" \
	-fo ../../../../$outputFO -pdf ../../../../$outputPDF
	
cd $base

#rm -rf $fop/imgs
