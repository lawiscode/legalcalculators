#!/usr/local/bin/python2.7

# ========================================
# Input: user ID
# Output: XML list all citations, grouped 
# by categories.   
# ========================================

# Import modules for CGI handling 
import cgi, cgitb 

# Create instance of FieldStorage 
form = cgi.FieldStorage() 

# Get data from fields
user_id = form.getvalue('user_id')

print "Content-type:text/xml\r\n"
print "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
print "<results>"
print "<category name=\"Education\">"
print "		<result>" 
print "			<title>Title Goes Here 1</title>" 
print "			<type>background check</type>" 
print "		</result>" 
print "		<result>" 
print "			<title>Title Goes Here 2</title>" 
print "			<type>background check</type>" 
print "		</result>" 
print "</category>"
print "<category name=\"Employment\">"
print "		<result>" 
print "			<title>Title Goes Here 1</title>" 
print "			<type>background check</type>" 
print "		</result>" 
print "		<result>" 
print "			<title>Title Goes Here 2</title>" 
print "			<type>background check</type>" 
print "		</result>" 
print "</category>"
print "</results>"
