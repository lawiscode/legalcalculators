#!/usr/local/bin/python2.7

# ========================================
# Input: user ID and result/citation ID
# Output: XML of citation data  
# ========================================

# Import modules for CGI handling 
import cgi, cgitb 

# Create instance of FieldStorage 
form = cgi.FieldStorage() 

# Get data from fields
user_id = form.getvalue('user_id')
citation_id = form.getvalue('citation_id')

print "Content-type:text/xml\r\n"
print "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
print "<citation>"
print "	<body>lorum ipsum</body>" 
print "</citation>"
