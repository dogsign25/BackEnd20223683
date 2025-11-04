package com.dongyang.servlet;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletConfig;
import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

@WebServlet("/login.do")
public class LoginServlet extends HttpServlet {

    
	public void init(ServletConfig config) throws ServletException {
		System.out.println("init 호출");
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//step1. 파라미터 받음
		String id=request.getParameter("id");
		String password=request.getParameter("pw");
		
		MemberDTO mdto=new MemberDTO();
		mdto.setMemberid(id);
		mdto.setPassword(password);
		
		MemberDAO mdao=new MemberDAO();
		boolean result=mdao.loginCheck(mdto);
		 
		//step2. JDBC
		if(result){
			//성공
			
			//request.setAttribute("name", "김동양");
			HttpSession session=request.getSession();
			session.setAttribute("name", "김동양");
			
			//ServletContext application=request.getServletContext();
			//application.setAttribute("name", "김동양");
			
			
			//response.sendRedirect("loginOk.jsp");
//			RequestDispatcher dispatcher=request.getRequestDispatcher("loginForm.jsp");
//			dispatcher.forward(request, response);
		} else {
			//실패
			//response.sendRedirect("loginFail.jsp");
		}
		//step3. 응답문서 준비해서 응답
		// redirect vs. forward
		response.sendRedirect("loginForm.jsp");
		
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
