<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

		<ul data-role="listview" data-filter="true" data-filter-placeholder="Search results..." data-filter-theme="b" data-theme="a" data-divider-theme="a" >
	    	<xsl:for-each select="xml/results/result">
         	  <li><a href="#" onClick="loadme('result','{citation_id}');"><h3><xsl:value-of select="title"/></h3><p><xsl:value-of select="type"/></p></a></li>
    	    </xsl:for-each>
		</ul>

</xsl:template>

</xsl:stylesheet>