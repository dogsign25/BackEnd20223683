package servlet;

import java.sql.*;

public class MemberDAO {
	public void memberRegister (MemberDTO mdto) {
		Connection conn = null;
		PreparedStatement pstmt = null;
		
		try {
			conn = JdbcConnectUtil.getConnection();
			pstmt = conn.prepareStatement("insert into memberTbl (memberid, password, name, email) values(?,?,?,?);");
			pstmt.setString(1, mdto.getMemberid());
			pstmt.setString(2, mdto.getPassword());
			pstmt.setString(3, mdto.getName());
			pstmt.setString(4, mdto.getEmail());
			pstmt.executeUpdate();
			System.out.println("등록 성공");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			JdbcConnectUtil.close(conn, pstmt);
		}
	}
	
	public boolean loginCheck (MemberDTO mdto) {
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		boolean loginResult = false;
		
		try {
			conn=JdbcConnectUtil.getConnection();
			pstmt = conn.prepareStatement("select * from memberTbl where memberid=? and password=?;");
			pstmt.setString(1,mdto.getMemberid());
			pstmt.setString(2, mdto.getPassword());
			rs=pstmt.executeQuery();
			loginResult = rs.next();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			JdbcConnectUtil.close(conn, pstmt);
			try {
				rs.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return loginResult;
	}
	
	public String getNameById(String memberid) {
	    Connection conn = null;
	    PreparedStatement pstmt = null;
	    ResultSet rs = null;
	    String name = null;

	    try {
	        conn = JdbcConnectUtil.getConnection();
	        pstmt = conn.prepareStatement("SELECT name FROM memberTbl WHERE memberid=?");
	        pstmt.setString(1, memberid);
	        rs = pstmt.executeQuery();

	        if (rs.next()) {
	            name = rs.getString("name");
	        }
	    } catch (SQLException e) {
	        e.printStackTrace();
	    } finally {
	        JdbcConnectUtil.close(conn, pstmt);
	    }
	    return name;
	}
}
