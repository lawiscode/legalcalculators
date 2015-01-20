<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

		<input type="hidden" value=""/>
		<center>What is more important to you?</center><br/>
		<a href="#" onClick="priorities='{priorities/one}';loadme('prefs,results,categories');" data-role="button" style="white-space:normal" data-theme="b"><xsl:value-of select="priorities/one" /></a>
		<h3 align="center">~ OR ~</h3>
		<a href="#" onClick="priorities='{priorities/two}';loadme('prefs,results,categories');" data-role="button" style="white-space:normal" data-theme="b"><xsl:value-of select="priorities/two" /></a>

</xsl:template>

</xsl:stylesheet>