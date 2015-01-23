<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:param name="category"/>

<xsl:template match="/">

		<ul data-role="listview" data-filter="true" data-filter-placeholder="Search results..." data-filter-theme="b" data-theme="a" data-divider-theme="a" >
	    	<xsl:for-each select="xml/categories/category/result"> 
	    		<xsl:if test="../@name=$category">
			    	  <li><a href="#" onClick="loadme('result','{citation_id}');"><xsl:value-of select="title"/></a></li>
			    </xsl:if>
    	    </xsl:for-each>
		</ul>
		
</xsl:template>

</xsl:stylesheet>