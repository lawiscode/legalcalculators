<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

		<ul data-role="listview" data-filter="true" data-filter-placeholder="Search results..." data-filter-theme="b" data-theme="a" data-divider-theme="a" >
			<li><a href="#" onClick="loadme('result','01');"><h3>Citation One</h3><p>[more info]</p></a></li>
			<li><a href="#" onClick="loadme('result','02');"><h3>Citation Two</h3><p>[more info]</p></a></li>
			<li><a href="#" onClick="loadme('result','03');"><h3>Citation Three</h3><p>[more info]</p></a></li>
			<li><a href="#" onClick="loadme('result','04');"><h3>Citation Four</h3><p>[more info]</p></a></li>
			<li><a href="#" onClick="loadme('result','05');"><h3>Citation Six</h3><p>[more info]</p></a></li>
			<li><a href="#" onClick="loadme('result','06');"><h3>Citation Seven</h3><p>[more info]</p></a></li>
			<li><a href="#" onClick="loadme('result','07');"><h3>Citation Eight</h3><p>[more info]</p></a></li>
		</ul>

</xsl:template>

</xsl:stylesheet>