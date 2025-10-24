<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>LoginForm</title>
</head>
<body>
<h1>로그인 폼</h1>
<% String na = (String)session.getAttribute("name"); 
	if(na!=null){ 
	//로그인 성공 시 
%>
	<h1><%= na %> 로그인 성공</h1>
	<form action="logout.do" method="post">
	<input type="submit" value="로그아웃">
	</form>
<%	
	} else {
	//로그인 실패 시	
%>
<form action="login.do" method="get">
아이디 입력 : <input type="text" name="memberid"><br>
암호 입력 : <input type="text" name="password"><br>
<button type="submit">로그인</button><button type="reset">초기화</button>
</form>
<% } %>
<a href="CreateAccount.jsp">회원가입</a>
</body>
</html>