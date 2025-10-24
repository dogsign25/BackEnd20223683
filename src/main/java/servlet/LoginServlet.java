package servlet;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletConfig;
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
		System.out.println("init 시작");
	}

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String memberid = request.getParameter("memberid");
		String password = request.getParameter("password");
	
		MemberDTO mdto = new MemberDTO();
		MemberDAO mdao = new MemberDAO();
		
		mdto.setMemberid(memberid);
		mdto.setPassword(password);
		boolean logincheck = mdao.loginCheck(mdto);
		
		System.out.println("id = " + memberid);
		System.out.println("password = " + password);
		
		if(logincheck) {
			String name = mdao.getNameById(memberid);
			HttpSession session = request.getSession();
			session.setAttribute("name", name);
			RequestDispatcher dispatcher = request.getRequestDispatcher("LoginForm.jsp");
			dispatcher.forward(request, response);
			//response.sendRedirect("LoginOk.jsp");
		}
		else {
			RequestDispatcher dispatcher =  request.getRequestDispatcher("LoginForm.jsp");
			dispatcher.forward(request, response);
		}
		
		
	}


}
