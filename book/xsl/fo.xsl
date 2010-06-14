<?xml version='1.0'?> 
<xsl:stylesheet  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"> 
	
<xsl:import href="../scripts/libs/docbook-xsl/fo/docbook.xsl"/>
<xsl:import href="../scripts/libs/docbook-xsl/highlighting/common.xsl"/>
<xsl:import href="../scripts/libs/docbook-xsl/fo/highlight.xsl"/>

<xsl:param name="generate.toc">
 book      toc,title
</xsl:param>

<xsl:param name="toc.section.depth">2</xsl:param>

</xsl:stylesheet>
