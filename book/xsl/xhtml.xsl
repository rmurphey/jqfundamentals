<?xml version='1.0'?> 
<xsl:stylesheet  
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:xslthl="http://xslthl.sf.net"
 	version="1.0"> 


<xsl:import href="../scripts/libs/docbook-xsl/docbook-xsl-1.75.2/xhtml-1_1/docbook.xsl"/>
<xsl:import href="../scripts/libs/docbook-xsl/docbook-xsl-1.75.2/highlighting/common.xsl"/>
<xsl:import href="../scripts/libs/docbook-xsl/docbook-xsl-1.75.2/xhtml-1_1/highlight.xsl"/>

<xsl:param name="html.stylesheet">blueprint.css style.css</xsl:param>

<xsl:param name="generate.toc">
 book      toc,title,example,title
</xsl:param>

<xsl:param name="toc.section.depth">2</xsl:param>

<xsl:template name="user.header.content">
  <script><![CDATA[
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-143877-9']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
  ]]></script>
</xsl:template>

<xsl:template name="user.footer.content">
  <hr/>
  <p class="copyright">Copyright <a>
    <xsl:attribute name="href">http://www.rebeccamurphey.com</xsl:attribute>
    Rebecca Murphey</a>, released under the 
  <a>
    <xsl:attribute name="href">http://creativecommons.org/licenses/by-sa/3.0/us/</xsl:attribute>
	Creative Commons Attribution-Share Alike 3.0 United States license</a>.
  </p>
</xsl:template>
	

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

<xsl:template match="*" mode="process.root">
  <xsl:variable name="doc" select="self::*"/>

  <xsl:call-template name="user.preroot"/>
  <xsl:call-template name="root.messages"/>

  <html>
    <head>
      <xsl:call-template name="system.head.content">
        <xsl:with-param name="node" select="$doc"/>
      </xsl:call-template>
      <xsl:call-template name="head.content">
        <xsl:with-param name="node" select="$doc"/>
      </xsl:call-template>
      <xsl:call-template name="user.head.content">
        <xsl:with-param name="node" select="$doc"/>
      </xsl:call-template>
    </head>
    <body>
 	 <div class="container">
  	 <div class="span-18 push-3">
      <xsl:call-template name="body.attributes"/>
      <xsl:call-template name="user.header.content">
        <xsl:with-param name="node" select="$doc"/>
      </xsl:call-template>
      <xsl:apply-templates select="."/>
      <xsl:call-template name="user.footer.content">
        <xsl:with-param name="node" select="$doc"/>
      </xsl:call-template>
   	  </div>
      </div>
    </body>
  </html>
  <xsl:value-of select="$html.append"/>
</xsl:template>

</xsl:stylesheet>
