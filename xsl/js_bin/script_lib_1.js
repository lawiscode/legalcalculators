function loadXMLDoc(dname)
{
if (window.XMLHttpRequest)
  {
  xhttp=new XMLHttpRequest();
  }
else
  {
  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xhttp.open("GET",dname,false);
xhttp.send("");
return xhttp.responseXML;
}

function loadme (myname,citation) {
	// console.log('String: '+myname);
	var myStringArray = myname.split(",");
	for (var i = 0; i < myStringArray.length; i++) {
		//console.log('i: '+i);
		//console.log('Load: '+myStringArray[i]);
		// -----------------
		//   home
		// -----------------
		if (myStringArray[i] == 'home') {
			xml=loadXMLDoc("python/one.py");
			xsl=loadXMLDoc("xml/subdomains.2011-12-22.xsl");
			// code for IE
			if (window.ActiveXObject)
				{
				ex=xml.transformNode(xsl);
				$('#home_v').html(ex).trigger("create");
				}
			// code for Mozilla, Firefox, Opera, etc.
			else if (document.implementation && document.implementation.createDocument)
				{
				xsltProcessor=new XSLTProcessor();
				xsltProcessor.importStylesheet(xsl);
				resultDocument = xsltProcessor.transformToFragment(xml,document);
				$('#home_v').html(resultDocument).trigger("create");
				}				
  		} else if (myStringArray[i] == 'prefs_prompt') {
			xml=loadXMLDoc("python/new_user.py");
			if (i == 0) { 	
				prefs_oe = 0;
				$.mobile.changePage('#prefs_prompt');
			}
  		} else if (myStringArray[i] == 'prefs') {
			var whereto = "";
			if (prefs_oe == 0) { 
				prefs_oe = 1;
				whereto = "prefs_odd";
			} else {
				prefs_oe = 0;
				whereto = "prefs_even";
			}

			xml=loadXMLDoc("python/priorities.py");
			xsl=loadXMLDoc("xsl/priorities.xsl");
			// code for IE
			if (window.ActiveXObject)
				{
				ex=xml.transformNode(xsl);
				$('#content_'+whereto).html(ex).trigger("create");
				}
			// code for Mozilla, Firefox, Opera, etc.
			else if (document.implementation && document.implementation.createDocument)
				{
				xsltProcessor=new XSLTProcessor();
				xsltProcessor.importStylesheet(xsl);
				resultDocument = xsltProcessor.transformToFragment(xml,document);
				$('#content_'+whereto).html(resultDocument).trigger("create");
				}		
			if (i == 0) {
				$.mobile.changePage('#'+whereto, { transition: "slide"}); 
			}

  		} else if (myStringArray[i] == 'results') {
			xml=loadXMLDoc("python/results.py");

  		
  		} else if (myStringArray[i] == 'categories') {
			xml=loadXMLDoc("python/categories.py");
  		
  		
  		} else if (myStringArray[i] == 'result') {
			xml=loadXMLDoc("python/result.py");	
	  		$.mobile.changePage('#result');
  		}		
  		
	} // end for each name
} // end loadme

function backtoprefs () {
	if (prefs_oe == 0) { 
		prefs_oe = 1;
		$.mobile.changePage('#prefs_odd', { reverse: "true" }); 
	} else {
		prefs_oe = 0;
		$.mobile.changePage('#prefs_even', { reverse: "true" }); 
	}
}