<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

		<ul data-role="listview" data-theme="a" data-divider-theme="a" > 
	    	<xsl:for-each select="xml/categories/category">
         	  <li><a href="#" onClick="loadme('category','{@name}');"><h3><xsl:value-of select="@name"/></h3><span class="ui-li-count"><xsl:for-each select="result"><xsl:if test="position()=last()"><xsl:value-of select="position()" /></xsl:if></xsl:for-each></span></a></li>
    	    </xsl:for-each>
		</ul>
		
</xsl:template>

</xsl:stylesheet>