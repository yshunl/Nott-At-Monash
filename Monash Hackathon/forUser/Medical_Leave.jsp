
<%@page import="java.io.*"%>
<%@page import="javax.servlet.*"%>
<%@page import="javax.servlet.http.*"%>
<%@page import="java.sql.*"%>

<%
String title = "Medical_Leave";
String columns = "NM,ADR,UN";
String[] column1 = columns.split(",");
int columnslen = column1.length;
int index = 0;
int count = 1;
%>

<!DOCTYPE html>
<html lang="en-US">
<head>
	<title>Drag & Drop Bootstrap Form Builder</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="css/form_builder.css"/>
	
	<style>body { background-color: #fafafa; }</style>
	<script>
	
	</script>
</head>
	<body>
	
		<div class="form_builder" style="margin-top: 25px">
		<div class="col-md-4">
			<div class="form-group">
				<label class="control-label form-control-lg">Medical_Leave</label>
			</div>
		</div>
			<form id="myForm" action="../updatedb.jsp" >
			<div  class="col-md-9">
				<div class="form-row">
					<div class="col">
						<div class="form-group">
							<label class="control-label">Name</label>
							<input type="text" name="NM" placeholder="" class="form-control" /><br><br>
							<input type="text" name="NM" placeholder="" class="form-control" /><br><br>
							<input type="text" name="NM" placeholder="" class="form-control" /><br><br>
							
							<div class="NM"></div>
						</div>
					</div>
					<div class="col">
						<div class="form-group">
							<label class="control-label">Address</label>
							<input type="text" name="ADR" placeholder="" class="form-control" /><br><br>
							<input type="text" name="ADR" placeholder="" class="form-control" /><br><br>
							<input type="text" name="ADR" placeholder="" class="form-control" /><br><br>
							
							<div class="ADR"></div>
						</div>
					</div>
					
					<div class="col">
						<div class="form-group">
							<label class="control-label">University Name</label>
							<input type="text" name="UN" placeholder="" class="form-control" /><button type="button" class="save btn btn-primary pull-right" id="0" onclick="test123(this)">Save</button><br><br>
							<input type="text" name="UN" placeholder="" class="form-control" /><button type="button" class="save btn btn-primary pull-right" id="1" onclick="test123(this)">Save</button><br><br>
							<input type="text" name="UN" placeholder="" class="form-control" /><button type="button" class="save btn btn-primary pull-right" id="2" onclick="test123(this)">Save</button><br><br>
							
							<input type="number" name="count" placeholder="" class="form-control" id="count" value="<%=count%>"/>
							
							<div class="UN"></div>
						</div>
					</div>
				</div>
				
				<input type="text" name="column" placeholder="" class="form-control" value="<%=columns%>" style="display:none" />
				<input type="text" name="title" placeholder="" class="form-control" value="<%=title%>" style="display:none" />
				
				<br>
				
			</div>
			
			<div class="col-md-9">
				
				<button type="submit" class="btn btn-primary pull-right" id="submit1">Submit</button>
				
				<button type="button" class="btn btn-primary pull-right" id="addmore">Add More...</button>
				
				<button type="button" class="btn btn-primary pull-right" id="enquire">Enquire</button>
			</div>
			</form>
		</div>
		<div class="container">
					<ul class="pagination pull-right">
						<li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
						<li class="page-item"><a class="page-link" href="#">1</a></li>
						<li class="page-item"><a class="page-link" href="#">2</a></li>
						<li class="page-item"><a class="page-link" href="#">3</a></li>
						<li class="page-item"><a class="page-link" href="#">Next</a></li>
					 </ul>
			</div>
		  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
		  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
		<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
		<script>
			document.getElementById("addmore").onclick = function(){
				var count = parseInt(document.getElementById("count").value) + 1;
				document.getElementById("count").value = count;
				<%
				
				while(index < columnslen){%>
				var html = '<input type="text" name=' + "<%=column1[index]%>" + ' placeholder="" class="form-control" />';
				$('.' + "<%=column1[index]%>").before(html);
				<%
				index++;
				}
				%>
			};

			document.getElementById("enquire").onclick = function(){
				var count = parseInt(document.getElementById("count").value) + 1;
				document.getElementById("count").value = count;
				
				
						<%
						index = 0;
							Connection connection = null;
							try {
							Class.forName("com.mysql.jdbc.Driver").newInstance();
							connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/forms", "root", "root123");
							Statement statement = connection.createStatement();
							String query = "SELECT * FROM medical_leave ORDER BY medical_leave desc";
							//out.println(query);
							ResultSet datavalue = statement.executeQuery(query);
							
								while(datavalue.next()){
									while(index<columnslen){
							%>
										html='<input type="text" name=' + "<%=column1[index]%>" + ' placeholder="" class="form-control" value="<%=datavalue.getString(column1[index]) %>" readonly/>';
										$('.' + "<%=column1[index]%>").after(html);
							<%
									index++;	
									}
									index=0;
								}
							}
							catch (Exception e) {
								out.println("An error occurred.");
							}
						%>	
				

				
				
			};
			
			function test123(obj){
				
				var count = parseInt(obj.id);
				document.getElementById("count").value = count;
				
				document.getElementById("myForm").submit();
				
				};
			
		</script>
		
		
</body>
</html>