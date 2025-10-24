package com.dongyang.servlet;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class MemberDAO {

<<<<<<< HEAD
	public void test(MemberDTO mdto) {
		Connection conn;
		ResultSet rs;
		try {
//			1단계 - 커넥터 로딩
			Class.forName("com.mysql.cj.jdbc.Driver");
//			2단계 - DB서버에 커넥션
			conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/jspdb", "root", "dongyang");
//			3단계 - SQL로 데이터 조작
			PreparedStatement pstmt = conn.prepareStatement("SELECT * FROM membertbl where memberid=? password=?;");
			pstmt.setString(1, "a1");
			pstmt.setString(1, "1");
			//pstmt.executeUpdate(); // select 이외의 쿼리 실행
			rs = pstmt.executeQuery();
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}finally {
			
		}

//		4단계 - CLOSE
		
	}

=======
	public boolean loginCheck(MemberDTO mdto) {
		Connection conn = null;
		PreparedStatement pstmt =null;
		ResultSet rs = null;
		boolean loginResult = false;
		try {
			conn = JdbcConnectUtil.getConnection();
//			3단계 - SQL로 데이터 조작
			pstmt = conn.prepareStatement("SELECT * FROM membertbl where memberid=? and password=?;");
			pstmt.setString(1,mdto.getMemberid());
			pstmt.setString(2, mdto.getPassword());
			//pstmt.executeUpdate(); // select 이외의 쿼리 실행
			rs = pstmt.executeQuery();
			loginResult = rs.next();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			JdbcConnectUtil.close(conn, pstmt, rs);
		}
		return loginResult;
	}

	public void memberRegister(MemberDTO mdto) {
		Connection conn = null;
		PreparedStatement pstmt =null;

		try {
			conn = JdbcConnectUtil.getConnection();
//			3단계 - SQL로 데이터 조작
			pstmt = conn.prepareStatement("insert into membertbl x,x,x,x values(?,?,?,?);");

			pstmt.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			JdbcConnectUtil.close(conn, pstmt);
		}

	}
>>>>>>> b605d3c (Week07)
	
}
