<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<%@page import="java.io.*"%>
<%@page import="javax.servlet.*"%>
<%@page import="javax.servlet.http.*"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/functions" prefix = "fn" %>
<%@ page import="java.sql.*" %>


<%
String title = request.getParameter("title") ;
String tablecolumn = request.getParameter("tablecolumn");
String formfield2 = request.getParameter("tablefields");
String formfield = formfield2.replace(",.","");
String formlabel2 = request.getParameter("formlabel");
String formlabel = formlabel2.replace(",.","");
String formbox2 = request.getParameter("formbox");
String formbox = formbox2.replace(",.","");


//out.println(title);
Connection connection = null;
try {
Class.forName("com.mysql.jdbc.Driver").newInstance();
connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/forms", "root", "root123");
Statement statement = connection.createStatement();
String query = "CREATE TABLE " + title + tablecolumn;
out.println(query);
statement.executeUpdate(query);

query = "INSERT INTO forms_information(formtitle,formfield,formlabel,formbox) VALUES(\"" + title + "\",\"" + formfield + "\",\"" + formlabel + "\",\"" + formbox + "\")"; 
out.println(query); 
statement.executeUpdate(query);				

} 
catch (Exception e) 
{
out.println("An error occurred.");
}


%>