<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

		<b><xsl:value-of select="citation/name" /></b> 
		<p><xsl:value-of select="citation/concat" /></p>
		<h2><xsl:value-of select="citation/title" /></h2>
		<p><b>Trigger: </b> <xsl:value-of select="citation/triggere" /> <xsl:value-of select="citation/addtrigger" /></p>
		<p><b>Duration: </b><xsl:value-of select="citation/durationcat" /></p>
		<textarea style="border: solid 1px #FFF" readonly="true"><xsl:value-of select="citation/condet" /></textarea>
		<textarea style="border: solid 1px #FFF" readonly="true"><xsl:value-of select="citation/addoff" /></textarea>

</xsl:template>

</xsl:stylesheet>