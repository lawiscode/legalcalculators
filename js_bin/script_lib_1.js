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

	$.mobile.loading('show');
	
	// console.log('String: '+myname);
	var myStringArray = myname.split(",");
	for (var i = 0; i < myStringArray.length; i++) {
		//console.log('i: '+i);
		//console.log('Load: '+myStringArray[i]);
		// -----------------
		//   Prefs
		// -----------------
		if (myStringArray[i] == 'prefs_prompt') {
		    console.log('new user');
			priorities = "";
			xml=loadXMLDoc("python/new_user.py?"+$( "FORM" ).serialize());
			user_id = xml.getElementsByTagName("id")[0].childNodes[0].nodeValue;
			document.getElementById('user_id').value = user_id;
			n_results = xml.getElementsByTagName("n")[0].childNodes[0].nodeValue + " Results";
			document.getElementById('n_results').innerHTML = n_results;
			document.getElementById('n_results_too').innerHTML = n_results;
			xsl=loadXMLDoc("xsl/new_user.xsl");
			// code for IE
			if (window.ActiveXObject)
				{
				ex=xml.transformNode(xsl);
				$('#content_prefs_promt').html(ex).trigger("create");
				}
			// code for Mozilla, Firefox, Opera, etc.
			else if (document.implementation && document.implementation.createDocument)
				{
				xsltProcessor=new XSLTProcessor();
				xsltProcessor.importStylesheet(xsl);
				resultDocument = xsltProcessor.transformToFragment(xml,document);
				$('#content_prefs_promt').html(resultDocument).trigger("create");
				}		
			if (i == 0) { 	
				prefs_oe = 0;
				$.mobile.loading('hide');
				$.mobile.changePage('#prefs_prompt');
			}
  		} else if (myStringArray[i] == 'prefs') {
			console.log('load prefereces');
			var whereto = "";
			if (prefs_oe == 0) { 
				prefs_oe = 1;
				whereto = "prefs_odd";
			} else {
				prefs_oe = 0;
				whereto = "prefs_even";
			}
			var vcall = "";
			if(priorities != "") { vcall = "&p="+priorities; }
			xml=loadXMLDoc("python/priorities.py?user_id="+user_id+vcall);
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
				$.mobile.loading('hide');
				$.mobile.changePage('#'+whereto, { transition: "fade"}); 
			}

  		} else if (myStringArray[i] == 'results') {
			console.log('load results');
			xml=loadXMLDoc("python/results.py?user_id="+user_id);
			xsl=loadXMLDoc("xsl/results.xsl");
			// code for IE
			if (window.ActiveXObject)
				{
				ex=xml.transformNode(xsl);
				$('#content_results').html(ex).trigger("create");
				}
			// code for Mozilla, Firefox, Opera, etc.
			else if (document.implementation && document.implementation.createDocument)
				{
				xsltProcessor=new XSLTProcessor();
				xsltProcessor.importStylesheet(xsl);
				resultDocument = xsltProcessor.transformToFragment(xml,document);
				$('#content_results').html(resultDocument).trigger("create");
				}		
  		} else if (myStringArray[i] == 'categories') {
			console.log('load result categories');
			xml=loadXMLDoc("python/categories.py?user_id="+user_id);
			xsl=loadXMLDoc("xsl/categories.xsl");
			// code for IE
			if (window.ActiveXObject)
				{
				ex=xml.transformNode(xsl);
				$('#content_categories').html(ex).trigger("create");
				}
			// code for Mozilla, Firefox, Opera, etc.
			else if (document.implementation && document.implementation.createDocument)
				{
				xsltProcessor=new XSLTProcessor();
				xsltProcessor.importStylesheet(xsl);
				resultDocument = xsltProcessor.transformToFragment(xml,document);
				$('#content_categories').html(resultDocument).trigger("create");
				}		
				
			xsl=loadXMLDoc("xsl/categories_results.xsl");
			// code for IE
			if (window.ActiveXObject)
				{
				ex=xml.transformNode(xsl);
				$('#content_cat_results').html(ex).trigger("create");
				}
			// code for Mozilla, Firefox, Opera, etc.
			else if (document.implementation && document.implementation.createDocument)
				{
				xsltProcessor=new XSLTProcessor();
				xsltProcessor.importStylesheet(xsl);
				resultDocument = xsltProcessor.transformToFragment(xml,document);
				$('#content_cat_results').html(resultDocument).trigger("create");
				}	
		} else if (myStringArray[i] == 'result') {
			console.log('load a single result');
			xml=loadXMLDoc("python/result.py?user_id="+user_id+"&citation_id="+citation);	
			xsl=loadXMLDoc("xsl/result.xsl");
			// code for IE
			if (window.ActiveXObject)
				{
				ex=xml.transformNode(xsl);
				$('#content_result').html(ex).trigger("create");
				}
			// code for Mozilla, Firefox, Opera, etc.
			else if (document.implementation && document.implementation.createDocument)
				{
				xsltProcessor=new XSLTProcessor();
				xsltProcessor.importStylesheet(xsl);
				resultDocument = xsltProcessor.transformToFragment(xml,document);
				$('#content_result').html(resultDocument).trigger("create");
				}		
			$.mobile.loading('hide');
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