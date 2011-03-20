V ?= 0

PREFIX = .
SRC_DIR = ${PREFIX}/book
INC_DIR = ${SRC_DIR}/include
DIST_DIR = ${PREFIX}/publish

BOOK = ${DIST_DIR}/index.html

TMPLPRE = '1h;1!H;$${;g;s/\(.*\)<%CONTENT%>\(.*\)/\1/g;p;}'
TMPLPOST = '1h;1!H;$${;g;s/\(.*\)<%CONTENT%>\(.*\)/\2/g;p;}'

book:
	@@mkdir -p ${DIST_DIR}
	@@bk=`sed -n ${TMPLPRE} ${SRC_DIR}/site.html`; \
	end=`sed -n ${TMPLPOST} ${SRC_DIR}/site.html`; \
	for file in ${SRC_DIR}/part*; do \
		body=`cat $$file/ch*`; \
		pre=`sed -n ${TMPLPRE} $$file/template.html`; \
		post=`sed -n ${TMPLPOST} $$file/template.html`; \
		bk="$$bk $$pre $$body $$post"; \
	done; \
	echo "$$bk $$end" > ${BOOK}
	@@cp -rf ${INC_DIR}/* ${DIST_DIR}/
	@@echo "Created ${BOOK} and copied the contents of ${INC_DIR} into ${DIST_DIR}."

clean:
	@@echo "Removing Distribution directory:" ${DIST_DIR}
	@@rm -rf ${DIST_DIR}

.PHONY: book clean
