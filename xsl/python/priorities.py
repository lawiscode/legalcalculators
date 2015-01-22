#!/usr/local/bin/python2.7

# ========================================
# Input: user ID, priorities (string of 
# relative ranking or priority to win last
# match up?)
# Output: XML list of match-up.   
# ========================================

# Import modules for CGI handling 
import cgi, cgitb 
# Create instance of FieldStorage 
form = cgi.FieldStorage() 
# Get data from fields
id = form.getvalue('id')

print "Content-type:text/xml\r\n"
print "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
print "<priorties>"
print "	<one>Alpha</one>"
print "	<two>Beta</two>"
print "</priorties>"
