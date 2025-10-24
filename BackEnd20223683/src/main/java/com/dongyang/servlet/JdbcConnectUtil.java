package com.dongyang.servlet;

import java.sql.*;

public class JdbcConnectUtil {

	public static Connection getConnection() {
		Connection conn=null;
		//1단계/2단계
		try {
//			1단계 - 커넥터 로딩
			Class.forName("com.mysql.cj.jdbc.Driver");
//			2단계 - DB서버에 커넥션
			conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/jspdb", "root", "dongyang");
			
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}
		return conn;
	}
	
	public static void close(Connection con, PreparedStatement pstmt) {
		//4단계-select쿼리 이외의 쿼리작업시
		try {
			con.close();
			pstmt.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	public static void close(Connection con, PreparedStatement pstmt, ResultSet rs) {
		//4단계-select쿼리 작업시
		try {
			con.close();
			pstmt.close();
			rs.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	}
	
}
