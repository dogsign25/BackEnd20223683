package com.dongyang.servlet;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class MemberDAO {

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

	
}
