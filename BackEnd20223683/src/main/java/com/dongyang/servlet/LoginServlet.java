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
		// step1. 파라미터 받음
		String id = request.getParameter("id");
		String password = request.getParameter("pw");
		
		MemberDTO mdto = new MemberDTO();
		mdto.setMemberid(id);
		mdto.setPassword(password);
		
		MemberDAO mdao = new MemberDAO();
		mdao.test(mdto);
		
		// step2. JDBC
		if(id.equals("dong") && password.equals("123")) {
			//성공
			
			//request.setAttribute("name", "김동양"); //리퀘스트 영역에 저장
			
			HttpSession session = request.getSession(); // 세션 영역에 저장
			session.setAttribute("name", "김동양");
			
			//ServletContext application = request.getServletContext(); //어플리케이션 영역에 저장
			//application.setAttribute("name", "김동양");
			
			//response.sendRedirect("loginOk.jsp"); //redirect 방식
			RequestDispatcher dispatcher = request.getRequestDispatcher("loginForm.jsp"); //forwarding 전달
			dispatcher.forward(request, response);
		} else {
			//실패
			//response.sendRedirect("loginFail.jsp");
			request.getRequestDispatcher("loginFail.jsp"); //forwarding 전달
		}
		
		// step3. 응답문서 준비해서 응답
		//개발자의 의도에 의해서 원하는 페이지로 틀을 바꾸는 방법
		//redirect vs forward 방법
		
		
		
		System.out.println("id값 : "+ id);
		System.out.println("password값 : " + password);
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
