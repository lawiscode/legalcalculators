function merge() {
	var r=confirm("Are you sure you want to merge the selected people?");
	if (r==true){
		document.getElementById('to_merge').value = $( "FORM" ).serialize();
		document.forms["PPL_FORM"].submit();
	}
}

function split_profile() {
	document.getElementById('to_split').value = $( "FORM" ).serialize();
	document.forms["PRS_FORM"].submit();
}

function shortcuts() {
	//alert('hey');
	// see http://www.west-wind.com/WestwindWebToolkit/samples/Ajax/html5andCss3/keycodechecker.aspx
	var isCtrl = false;
	$('#home').keyup(function (e) {
		if(e.which == 17) isCtrl=false;
	}).keydown(function (e) {
		if(e.which == 17) isCtrl=true;
		if (e.which == 37 && isCtrl == true) {
		   //alert('left arrow');
		   $.mobile.changePage('home.cgi?o=0', { reloadPage:true });
		   return false;
		} else if (e.which == 39 && isCtrl == true) {
		   //alert('right arrow');
		   $.mobile.changePage('home.cgi?o=1', { reloadPage:true });
		   return false;
		} else if (e.which == 97 && isCtrl == true) {
		   alert('1');
		   return false;
		} else if (e.which == 98 && isCtrl == true) {
		   //alert('2');
		   $.mobile.changePage('ppl.cgi', { reloadPage:true });
		   return false;
		} else if (e.which == 99 && isCtrl == true) {
		   alert('3');
		   return false;
		} else if (e.which == 100 && isCtrl == true) {
		   alert('4');
		   return false;
		} else if (e.which == 101 && isCtrl == true) {
		   alert('5');
		   return false;
		}
	});
}

function count_badge(what) {
	var xmlHttpReq = false;
    var self = this;
    // Mozilla/Safari
    if (window.XMLHttpRequest) {
        self.xmlHttpReq = new XMLHttpRequest();
    }
    // IE
    else if (window.ActiveXObject) {
        self.xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
    }
    self.xmlHttpReq.open('POST', '/zeno/ajax_count.cgi', true);
    self.xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    self.xmlHttpReq.onreadystatechange = function() {
        if (self.xmlHttpReq.readyState == 4) {
			if (self.xmlHttpReq.responseText != 0) {
				//$('#'+what).html('<font size=-1>'+self.xmlHttpReq.responseText+'</font>').fadeIn();
				//alert(self.xmlHttpReq.responseText);
				document.getElementById(what).innerHTML = "<font size=-1>"+self.xmlHttpReq.responseText+"</font>";
				document.getElementById(what).style.display = "block";
			}
			if (what == 'court_count') { count_badge('radar_count'); }
		}
	}
	self.xmlHttpReq.send(getquerystring_counts(what));
}

function getquerystring_counts(what) { 
    qstr =  'what=' + escape(what);  
	// NOTE: no '?' before querystring
    return qstr;
}

function update_settings() {
	var home_screen = $('input[name="home_screen"]:checked').val();
	var court_count = document.getElementById('court_count').value;
	var event_count = document.getElementById('event_count').value;
	var radar_warning = document.getElementById('radar_warning').value;
	var ref = $('input[name="ref"]:checked').val();
	var xmlHttpReq = false;
    var self = this;
    // Mozilla/Safari
    if (window.XMLHttpRequest) {
        self.xmlHttpReq = new XMLHttpRequest();
    }
    // IE
    else if (window.ActiveXObject) {
        self.xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
    }
    self.xmlHttpReq.open('POST', '/zeno/ajax_settings.cgi', true);
    self.xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    self.xmlHttpReq.onreadystatechange = function() {
        if (self.xmlHttpReq.readyState == 4) {
			if (self.xmlHttpReq.responseText == '0') {
				alert('error');
			} 
		}
	}
	self.xmlHttpReq.send(getquerystring_settings(home_screen,court_count,event_count,radar_warning,ref));
}

function getquerystring_settings(home_screen,court_count,event_count,radar_warning,ref) { 
    qstr = 'home_screen=' + escape(home_screen) + '&court_count=' + escape(court_count) + '&event_count=' + escape(event_count) + '&radar_warning=' + escape(radar_warning) + '&ref=' + escape(ref);  
	// NOTE: no '?' before querystring
    return qstr;
}

function logcheck() {
	var user = document.getElementById('user').value;
	var pwd = document.getElementById('pwd').value;
	var pers_log = document.getElementById('pers_log').checked;
	var xmlHttpReq = false;
    var self = this;
    // Mozilla/Safari
    if (window.XMLHttpRequest) {
        self.xmlHttpReq = new XMLHttpRequest();
    }
    // IE
    else if (window.ActiveXObject) {
        self.xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
    }
    self.xmlHttpReq.open('POST', '/zeno/ajax_logcheck.cgi', true);
    self.xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    self.xmlHttpReq.onreadystatechange = function() {
        if (self.xmlHttpReq.readyState == 4) {
			if (self.xmlHttpReq.responseText != '0') {
				if (pers_log) { var cookietime = '100000'; } else { var cookietime = ''; }
				createCookie('login',user+':'+self.xmlHttpReq.responseText,cookietime);
				//document.location.href='home.cgi';
				$.mobile.changePage('home.cgi', { reloadPage:true });
			} else {
				document.getElementById("error_msg").style.background = "yellow";
				document.getElementById("error_msg").style.border = "solid 1px red";
				document.getElementById("error_msg").style.padding = "1px 15px 1px 15px";
				document.getElementById("error_msg").style.margin = "0 0 20px 0";
				var error_msg = document.getElementById("error_msg").innerHTML;
				if (user && pwd) {
					var error_plus = "<p>This username-password pair isn't in our records. Please try again. If you don't remember your password, you can email David Colarusso (<a href='mailto:dcolarusso@publiccounsel.net?subject=Forgotten Password'>dcolarusso@publiccounsel.net</a>), but remember, David is still carrying cases. So it may take a while for him to get back to you.</p>";
				} else if (user) {
					var error_plus = "<p>You must enter a password. Please try again.</p>";
				} else {
					var error_plus = "<p>You must enter a username. Please try again. This is the same as the first part of your CPCS email address (i.e., the part before the @).</p>";				
				}
				document.getElementById("error_msg").innerHTML = error_msg + error_plus;
				if (user) {
					document.FORM.pwd.select();;
				} else {
					document.FORM.user.focus();
				}
			} 
		}
	}
	self.xmlHttpReq.send(getquerystring_login(user,pwd,pers_log));
}

function getquerystring_login(user,pwd,pers_log) { 
    qstr = 'user=' + escape(user) + '&pwd=' + escape(pwd) + '&pers_log=' + escape(pers_log);  
	// NOTE: no '?' before querystring
    return qstr;
}

function squash_bug(page,passed,form_name,desc,from) {
	var values = $(form_name).serialize();
	if (values == "") { values = "null"; }
	
	var form = document.createElement("form");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/zeno/squash_bug.cgi");

	// setting form target to a window named 'formresult'
	//form.setAttribute("target", "_self");

	var hiddenField = document.createElement("input");              
	hiddenField.setAttribute("name", "page");
	hiddenField.setAttribute("value", page);
	form.appendChild(hiddenField);

	var hiddenField = document.createElement("input");              
	hiddenField.setAttribute("name", "passed");
	hiddenField.setAttribute("value", passed);
	form.appendChild(hiddenField);

	var hiddenField = document.createElement("input");              
	hiddenField.setAttribute("name", "inpage");
	hiddenField.setAttribute("value", values);
	form.appendChild(hiddenField);

	var hiddenField = document.createElement("input");              
	hiddenField.setAttribute("name", "desc");
	hiddenField.setAttribute("value", desc);
	form.appendChild(hiddenField);

	var hiddenField = document.createElement("input");              
	hiddenField.setAttribute("name", "from");
	hiddenField.setAttribute("value", window.location.pathname+window.location.search);
	form.appendChild(hiddenField);

	document.body.appendChild(form);

	// creating the 'formresult' window with custom features prior to submitting the form
	//window.open('/zeno/squash_bug.cgi', 'formresult', 'scrollbars=no,menubar=no,height=600,width=550,resizable=yes,toolbar=no,status=no');
	//$('#form').submit();
	form.submit();
}

function announcement() {
    var xmlHttpReq = false;
    var self = this;
    // Mozilla/Safari
    if (window.XMLHttpRequest) {
        self.xmlHttpReq = new XMLHttpRequest();
    }
    // IE
    else if (window.ActiveXObject) {
        self.xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
    }
    self.xmlHttpReq.open('POST', '/zeno/ajax_msg.cgi', true);
    self.xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    self.xmlHttpReq.onreadystatechange = function() {
        if (self.xmlHttpReq.readyState == 4) {
			if (self.xmlHttpReq.responseText != '') {
				document.getElementById("announcement").style.background = "#FFE6CC";
				document.getElementById("announcement").style.border = "solid 1px #555";
				document.getElementById("announcement").style.padding = "10px 15px 10px 15px";
				document.getElementById("announcement").style.margin = "0 0 20px 0";
				document.getElementById("announcement").innerHTML = self.xmlHttpReq.responseText;
			}
		}
	}
    self.xmlHttpReq.send();
}

function check_browser() {
	if (document.createElement("input").placeholder == undefined) {
		document.getElementById("error_msg").style.background = "yellow";
		document.getElementById("error_msg").style.border = "solid 1px red";
		document.getElementById("error_msg").style.padding = "1px 15px 1px 15px";
		document.getElementById("error_msg").style.margin = "0 0 20px 0";
		var error_msg = document.getElementById("error_msg").innerHTML;
		document.getElementById("error_msg").innerHTML = error_msg + "<p>Your browser does not support an HTML 5 feature used by this site. To access all features, please update or change your browser. The newest versions of these common browsers should do the trick: <a href='http://www.google.com/chrome/' target=_blank>Chrome</a>, <a href='http://www.mozilla.org/en-US/firefox/new/' target=_blank>Firefox</a>, or <a href='http://windows.microsoft.com/en-us/internet-explorer/download-ie' target=_blank>Internet Explorer</a>.</p>";
	}
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function getCookie(c_name) {
	var c_value = document.cookie;
	var c_start = c_value.indexOf(" " + c_name + "=");
	if (c_start == -1)
	  {
	  c_start = c_value.indexOf(c_name + "=");
	  }
	if (c_start == -1)
	  {
	  c_value = null;
	  }
	else
	  {
	  c_start = c_value.indexOf("=", c_start) + 1;
	  var c_end = c_value.indexOf(";", c_start);
	  if (c_end == -1)
	  {
	c_end = c_value.length;
	}
	c_value = unescape(c_value.substring(c_start,c_end));
	}
	return c_value;
}

function writeCookie(days) {
	if (document.getElementById("nick").checked) { button1 = 1; } else { button1 = 0; }
	if (document.getElementById("soundex").checked) { button2 = 1; } else { button2 = 0; }
	//if (document.getElementById("damerau").checked) { button3 = 1; } else { button3 = 0; }
	//createCookie('settings', button1 + '' + button2 + '' + button3,days);
	createCookie('settings', button1 + '' + button2,days);
}

function imposeSettings() {
	//var c_value = getCookie('settings');
	//if (c_value.charAt(0) == 1) {
	//	$('input[name="nick"]').prop('checked', true).checkboxradio('refresh');
	//}
//if (c_value.charAt(1) == 1) {
	//	$('input[name="soundex"]').prop('checked', true).checkboxradio('refresh');
	//}
	//if (c_value.charAt(2) == 1) {
	//	$('input[name="damerau"]').prop('checked', true).checkboxradio('refresh');
	//}
}