<?xml version='1.0'?> 
<xsl:stylesheet  
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:xslthl="http://xslthl.sf.net"
 	version="1.0"> 

<xsl:import href="../scripts/libs/docbook-xsl/xhtml-1_1/chunk.xsl"/>
<xsl:import href="../scripts/libs/docbook-xsl/highlighting/common.xsl"/>
<xsl:import href="../scripts/libs/docbook-xsl/xhtml-1_1/highlight.xsl"/>

<xsl:param name="html.stylesheet">blueprint.css style.css</xsl:param>

<xsl:param name="toc.section.depth">1</xsl:param>

<xsl:param name="generate.toc">
 article   toc,title
 book      toc,title,example,title
 chapter   toc,title,example,title
 part      toc,title,example,title
 reference toc,title
</xsl:param>
	
<xsl:param name="html.stylesheet">blueprint.css style.css</xsl:param>

<!-- BEGIN XSLTHL OVERRIDES  -->
<xsl:template match="xslthl:keyword" mode="xslthl">
  <span class="hl-keyword"><xsl:apply-templates mode="xslthl"/></span>
</xsl:template>

<xsl:template match="xslthl:string" mode="xslthl">
  <span class="hl-string"><xsl:apply-templates mode="xslthl"/></span>
</xsl:template>

<xsl:template match="xslthl:doccomment" mode="xslthl">
  <span class="hl-doccomment"><xsl:apply-templates mode="xslthl"/></span>
</xsl:template>

<xsl:template match="xslthl:comment" mode="xslthl">
  <span class="hl-comment"><xsl:apply-templates mode="xslthl"/></span>
</xsl:template>

<xsl:template match="xslthl:directive" mode="xslthl">
  <span class="hl-directive"><xsl:apply-templates mode="xslthl"/></span>
</xsl:template>

<xsl:template match="xslthl:tag" mode="xslthl">
  <span class="hl-tag"><xsl:apply-templates mode="xslthl"/></span>
</xsl:template>

<xsl:template match="xslthl:attribute" mode="xslthl">
  <span class="hl-attribute"><xsl:apply-templates mode="xslthl"/></span>
</xsl:template>

<xsl:template match="xslthl:value" mode="xslthl">
  <span class="hl-value"><xsl:apply-templates mode="xslthl"/></span>
</xsl:template>
<!-- BEGIN XSLTHL OVERRIDES  -->


	<!-- ===== Override to wrap content in extra divs ====-->
	<xsl:template name="chunk-element-content">
	  <xsl:param name="prev"/>
	  <xsl:param name="next"/>
	  <xsl:param name="nav.context"/>
	  <xsl:param name="content">
	    <xsl:apply-imports/>
	  </xsl:param>
	
	  <xsl:call-template name="user.preroot"/>
	
	  <html>
	    <xsl:call-template name="html.head">
	      <xsl:with-param name="prev" select="$prev"/>
	      <xsl:with-param name="next" select="$next"/>
	    </xsl:call-template>
	
	    <body>
	      <div class="container">
			<div class="span-18 push-3">
		      <xsl:call-template name="body.attributes"/>
		      <xsl:call-template name="user.header.navigation"/>
		
		      <xsl:call-template name="header.navigation">
		        <xsl:with-param name="prev" select="$prev"/>
		        <xsl:with-param name="next" select="$next"/>
		        <xsl:with-param name="nav.context" select="$nav.context"/>
		      </xsl:call-template>
		
		      <xsl:call-template name="user.header.content"/>
		
		      <xsl:copy-of select="$content"/>
		
		      <xsl:call-template name="user.footer.content"/>
		
		      <xsl:call-template name="footer.navigation">
		        <xsl:with-param name="prev" select="$prev"/>
		        <xsl:with-param name="next" select="$next"/>
		        <xsl:with-param name="nav.context" select="$nav.context"/>
		      </xsl:call-template>
		
		      <xsl:call-template name="user.footer.navigation"/>
		     </div>
	      </div>
	    </body>
	  </html>
	  <xsl:value-of select="$chunk.append"/>
	</xsl:template>



</xsl:stylesheet>
