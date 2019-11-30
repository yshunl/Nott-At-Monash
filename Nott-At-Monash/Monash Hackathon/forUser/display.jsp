<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<%@page import="java.io.*"%>
<%@page import="javax.servlet.*"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="javax.servlet.http.*"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/functions" prefix = "fn" %>
<%@ page import="java.sql.*" %>



<!DOCTYPE html>
<html lang="en-US">
<head><title>Drag & Drop Bootstrap Form Builder</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">
	<link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"><link rel="stylesheet" href="css/form_builder.css"/>
	<style>body { background-color: #fafafa; }</style>
</head>

<body>
	<div class="form_builder" style="margin-top: 25px">
		<div class="col-md-4">
			<div class="form-group">
				<label class="control-label form-control-lg">Medical_Leave</label>
			</div>
		</div>
		<%
Connection connection = null;
try {
Class.forName("com.mysql.jdbc.Driver").newInstance();
connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/forms", "root", "root123");
Statement statement = connection.createStatement();
String query = "SELECT * FROM medical_leave";
//out.println(query);
ResultSet datavalue = statement.executeQuery(query);
datavalue.next();
datavalue.next();
String name = datavalue.getString("NM");
String description = datavalue.getString("DESCP");
%>
			<div class="col-md-4">
				<div class="form-group">
					<label class="control-label">Name</label>
					<input type="text" name="NM" placeholder="" class="form-control" value="<%out.println(name);%>" readonly/>
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label class="control-label">Description</label>
					<textarea class="form-control" rows="5" name="DESCP" placeholder="" readonly><%out.println(description);%></textarea>
				</div>
			</div>
		
		
			<br>
			
			
	</div>
</body>
</html>
<%

			
//out.println(description);
} 
catch (Exception e) 
{
out.println("An error occurred.");
}

%>
