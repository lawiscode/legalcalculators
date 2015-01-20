<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

		<font size="+1">I've found <b><xsl:value-of select="user/n" /></b> potential collateral consequences.</font>
		<p>
		I'd like to order these by relevance to you, but I'll need to ask a few questions to do that. Alternatively, you can skip to a generic ordering.
		</p>	
		<a href="#prefs_odd" data-role="button">customize your results</a>
		<a href="#categories" data-role="button">skip to generic ordering</a>

</xsl:template>

</xsl:stylesheet>