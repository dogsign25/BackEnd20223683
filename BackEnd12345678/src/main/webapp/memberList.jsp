<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.*, com.dongyang.servlet.MemberDTO" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원목록</title>
</head>
<body>
	<%@  include file="header.jsp" %>
	<h1> 회원목록 </h1>
<% 
	ArrayList<MemberDTO> mList = (ArrayList<MemberDTO>)request.getAttribute("vlist");
if(mList==null || mList.size() <= 0){
	response.sendRedirect("index.jsp");
} else{
%>

	<table border="1">
		<tr>
			<th>아이디</th><th>암호</th><th>이름</th><th>이메일</th>
		</tr>
<% 
	for(MemberDTO dto : mList){
%>
		<tr>
		<td><%= dto.getMemberid() %></td>
		<td><%= dto.getPassword() %></td>
		<td><%= dto.getName() %></td>
		<td><%= dto.getEmail() %></td>
	</tr>
<%	
	}
%>				
<%	
}
%>	
	</table>	
	
<% 
out.println("<h1>" + request.getContextPath() + "</h1>");
out.println("<h1>" + request.getRequestURI() + "</h1>");
out.println("<h1>" + request.getRequestURL() + "</h1>");
%>	
	
	
	
	
	
	
	
	
	
	
	
</body>
</html>