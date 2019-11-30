
<%@page import="java.io.*"%>
<%@page import="javax.servlet.*"%>
<%@page import="javax.servlet.http.*"%>
<%@page import="java.sql.*"%>

<%
String title = "Testing123";
String columns = "NM";
%>

<!DOCTYPE html><html lang="en-US"><head><title>Drag & Drop Bootstrap Form Builder</title><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1" /><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" ><link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"><link rel="stylesheet" href="css/form_builder.css"/><style>body { background-color: #fafafa; }</style></head><body><div class="form_builder" style="margin-top: 25px"><div class="col"><div class="form-group"><label class="control-label form-control-lg">Testing123</label></div></div><form action="../updatedb.jsp"><div  class="col-md-4"><div class="col"><div class="form-group"><label class="control-label">Number</label><input type="number" name="NM" placeholder="" class="form-control" /></div></div><input type="text" name="column" placeholder="" class="form-control" value="<%=columns%>" style="display:none" /><input type="text" name="title" placeholder="" class="form-control" value="<%=title%>" style="display:none" /><br></div><div class="col-md-4"><button type="submit" class="btn btn-primary pull-right">Submit</button></div></form></div></body></html>