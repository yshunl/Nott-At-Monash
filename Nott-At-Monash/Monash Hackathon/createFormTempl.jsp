<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<%@page import="java.io.*"%>
<%@page import="javax.servlet.*"%>
<%@page import="javax.servlet.http.*"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/functions" prefix = "fn" %>
<%@ page import="java.sql.*" %>

<%
String html = request.getParameter("html");
String title = request.getParameter("title");
String updatecolumn2 = request.getParameter("updatecolumn");
String updatecolumn = updatecolumn2.replace(",.","");

//JSP File creation
		String strPath = "../applications/Application-9.7.0/Generic-9.7.0_war/dragdropform/forUser/" + title + ".jsp";
		File strFile = new File(strPath);
		boolean fileCreated = strFile.createNewFile();
	//Writing into the JSP File
		Writer objWriter = new BufferedWriter(new FileWriter(strFile));

		
		objWriter.write("\n");
		
		objWriter.write("<");
		objWriter.write("%@page import=\"java.io.*\"%");	
		objWriter.write(">");
		objWriter.write("\n");

		objWriter.write("<");
		objWriter.write("%@page import=\"javax.servlet.*\"%");	
		objWriter.write(">");
		objWriter.write("\n");

		objWriter.write("<");
		objWriter.write("%@page import=\"javax.servlet.http.*\"%");
		objWriter.write(">");
		objWriter.write("\n");

		objWriter.write("<");
		objWriter.write("%@page import=\"java.sql.*\"%");
		objWriter.write(">");
		objWriter.write("\n\n");
	
	//Body of the JSP File
		objWriter.write("<");
		objWriter.write("%");
		objWriter.write("\n");
		objWriter.write("String title = \"" + title + "\";\n");
		objWriter.write("String columns = \"" + updatecolumn + "\";\n");
		objWriter.write("String[] column1 = columns.split(\",\");");
		objWriter.write("\n");
		objWriter.write("int columnslen = column1.length;");
		objWriter.write("int index = 0;");
		objWriter.write("int count = 1;");
		objWriter.write("%");
		objWriter.write(">\n\n");
		
		objWriter.write(html);
		
//Close HTML File after writing
	objWriter.flush();	
	objWriter.close();
	
	

%>