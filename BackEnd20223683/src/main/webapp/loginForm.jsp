<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1> 로그인 </h1>

<% //자바코드: 스크립트릿 
	String na = (String)session.getAttribute("name");
	
	if(na!=null){
		//로그인 성공
		//로그아웃버튼
%>
	<form action="logout.do" method="post">
		<input type=submit value=로그아웃>
	</form>
<%	
	} else { 
		//로그인 실패
		//Form 태그
%>
	<form action="login.do" method="get">
		아이디 : <input type="text" name="id"><br>
		암호  :  <input type="text" name="pw"><br>
		<input type="submit"><input type="reset">
	</form>
<%
	}
%>


<input type="checkbox">아이디 저장

</body>
</html>