input=src/en-US/jquery-fundamentals-book.xml

base=`pwd`

absolute=`echo $base | sed 's|/\([a-z]\)/|/\1:/|'`

xsl=scripts/libs/docbook-xsl/docbook-xsl-1.75.2
epubgen=$xsl/epub/bin/dbtoepub
outputEPUB=release/epub/jquery-fundamentals-book.epub

if [ ! -d "release/epub" ]; then
	mkdir -p release/epub
fi

$epubgen -c style/epub.css \
                -o $outputEPUB $input

# code purists, do not go after this line
if [ ! -d "release/tmp" ]; then
        mkdir -p release/tmp
fi

cd release/tmp

# Add fonts and fix content.opf
unzip -a $base/$outputEPUB
cp $base/fonts/* OEBPS/
pwd
ls -la ../../fonts/fonts-elements.xml
sed -e '/<manifest>/r ../../fonts/fonts-elements.xml' < OEBPS/content.opf > content.opf
mv content.opf OEBPS/content.opf
zip -r $base/$outputEPUB *

cd $base
rm -Rf release/tmp
