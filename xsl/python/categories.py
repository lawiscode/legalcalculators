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
id = form.getvalue('id')

print "Content-type:text/html\r\n\r\n"
print "%s" % id
