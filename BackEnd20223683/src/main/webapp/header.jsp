<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
	<h3> 메뉴 : 
<%
	String na1 = (String)session.getAttribute("name");
	String menu1 = null;
	if(na1!=null){
		menu1="<a href=edit.jsp>마이페이지</a>";
		
	} else {
		menu1="<a href=loginForm.jsp>로그인</a>";
	}
		
%>
	<%= menu1 %>
	</h3>
	