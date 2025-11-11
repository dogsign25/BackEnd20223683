<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.*, com.dongyang.servlet.MemberDTO"%> 
<%@ page errorPage="errorMessage.jsp" %>
<%@ page buffer="10kb" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%@ include file="header.jsp" %>
<%ArrayList<MemberDTO> mlist = (ArrayList<MemberDTO>)request.getAttribute("vlist"); 
request.setAttribute("malist", mlist);
%>

<h1> 회원목록2 </h1>
<% int age = Integer.parseInt("aaa"); %>

<c:if test="${loginCheck == null}">
	<a href="Login.jsp">로그인</a>
</c:if>

이름 : ${name}<br>
로그인 여부 : ${loginCheck}<br>

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
<%	}
%>				
<c:forEach items="${malist}" var="dto">
	<tr>
		<td>${dto.memberid}</td>
		<td>${dto.password}</td>
		<td>${dto.name}</td>
		<td>${dto.email}</td>
	</tr>
</c:forEach>



	</table>	
	
<% 
out.println("<h1>" + request.getContextPath() + "</h1>");
out.println("<h1>" + request.getRequestURI() + "</h1>");
out.println("<h1>" + request.getRequestURL() + "</h1>");
%>	
</body>
</html>