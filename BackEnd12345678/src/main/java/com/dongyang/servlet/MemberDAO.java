package com.dongyang.servlet;

import java.sql.*;
import java.util.*;

public class MemberDAO {
	Connection conn=null;
	PreparedStatement pstmt=null;
	ResultSet rs=null;
	final String USER_LOGIN = "select * from memberTbl where memberid=? and password=?;";
	final String USER_LIST = "select * from memberTbl;";
	
	public boolean loginCheck(MemberDTO mdto) {
		
		boolean loginResult=false;
		try {
			conn=JdbcConnectUtil.getConnection();
			pstmt=conn.prepareStatement(USER_LOGIN);
			
			pstmt.setString(1, mdto.getMemberid());
			pstmt.setString(2, mdto.getPassword());
			//pstmt.executeUpdate(); // select 이외의 쿼리실행할때
			rs=pstmt.executeQuery();
			loginResult = rs.next();			
		} catch ( SQLException e) {
			e.printStackTrace();
		} finally {
			JdbcConnectUtil.close(conn, pstmt, rs);
		}
		
		return loginResult;	
		
	}
	
	public ArrayList<MemberDTO> selectAll(){
		ArrayList<MemberDTO> aList = new ArrayList<>();
		try {
			conn = JdbcConnectUtil.getConnection();
			pstmt=conn.prepareStatement(USER_LIST);
			rs = pstmt.executeQuery();
			while(rs.next()) {
				MemberDTO dto = new MemberDTO();
				dto.setMemberid(rs.getString("memberid"));
				dto.setPassword(rs.getString("password"));
				dto.setName(rs.getString("name"));
				dto.setEmail(rs.getString("email"));
				aList.add(dto);
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return aList;
	}

	
}
