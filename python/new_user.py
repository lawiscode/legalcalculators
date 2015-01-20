#!/usr/local/bin/python2.7

# ========================================
# Input: charge and demographic data
# Output: simple text user ID 
# ========================================

# Import modules for CGI handling 
import cgi, cgitb 

# Create instance of FieldStorage 
form = cgi.FieldStorage() 

# Get data from fields
user_id = form.getvalue('user_id')
charge = form.getvalue('charge')
citizenship = form.getvalue('citizenship')
gender = form.getvalue('gender')

print "Content-type:text/xml\r\n"
print "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
print "<user>"
print "	<id>0012</id>" 
print "	<n>2,3457</n>" 
print "</user>"
