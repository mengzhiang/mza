package com.mengzhiang.base.cache;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import javax.sql.rowset.CachedRowSet;

import com.mchange.v2.c3p0.ComboPooledDataSource;


/**
 * JDBC助手类
 * @author shajunxing
 */
public class JDBCHelper {

    private final static Logger logger = Logger.getLogger(JDBCHelper.class.getName());
    private static ComboPooledDataSource cpds;
    private static ThreadLocal<Connection> threadLocal = null;
    private static Cache<CachedRowSet> queryCache = new Cache<CachedRowSet>(10000);
    private static String url = "jdbc:mysql://localhost:3306/bbs?user=root&password=123456";

    static {
    	
		try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}	
    }

    /**
     * 获取连接
     * @return 可用的连接
     * @throws java.sql.SQLException
     */
    public static Connection getConnection() throws SQLException {
        Connection conn = threadLocal.get();
        if (conn == null) {
            conn = DriverManager.getConnection(url);
            conn.setAutoCommit(false);
        }
        return conn;
    }

    /**
     * 关闭连接
     * @param conn 连接
     */
    public static void closeConnection() {
        Connection conn = threadLocal.get();
        threadLocal.set(null);
        if (conn != null) {
            try {
                conn.close();
            } catch (SQLException ex) {
                logger.severe("关闭Connection失败：" + ex);
            }
        }
    }

    /**
     * 提交事务
     * @throws java.sql.SQLException
     */
    public static void commit() throws SQLException {
        getConnection().commit();
    }

    /**
     * 回滚事务
     */
    public static void rollback() {
        try {
            getConnection().rollback();
        } catch (SQLException ex) {
            logger.severe("事务回滚异常：" + ex);
        }
    }

    /**
     * 关闭声明
     * @param stmt 声明
     */
    public static void close(Statement stmt) {
        if (stmt != null) {
            try {
                stmt.close();
            } catch (SQLException ex) {
                logger.severe("关闭Statement失败：" + ex);
            }
        }
    }

    /**
     * 关闭结果集
     * @param rs 结果集
     */
    public static void close(ResultSet rs) {
        if (rs != null) {
            try {
                rs.close();
            } catch (SQLException ex) {
                logger.severe("关闭ResultSet失败：" + ex);
            }
        }
    }

    /**
     * 获取一个缓存行集对象
     * @return 缓存行集对象
     */
    private static CachedRowSet getCachedRowSet() {
        CachedRowSet ret = null;
        try {
            ret = (CachedRowSet) Class.forName("com.sun.rowset.CachedRowSetImpl").newInstance();
        } catch (InstantiationException ex) {
            logger.severe(ex.toString());
        } catch (IllegalAccessException ex) {
            logger.severe(ex.toString());
        } finally {
            return ret;
        }
    }

    /**
     * 查询
     * @param sql SQL语句
     * @return 查询结果
     */
    public static CachedRowSet query(String sql) {
        CachedRowSet crs = getCachedRowSet();
        if (crs == null) {
            return null;
        }

        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;
        try {
            conn = getConnection();
            stmt = conn.createStatement();
            rs = stmt.executeQuery(sql);
            crs.populate(rs);
            return crs;
        } catch (SQLException ex) {
            logger.severe(ex.toString());
            return null;
        } finally {
            close(rs);
            close(stmt);
            closeConnection();
        }
    }

    /**
     * 缓存查询
     * @param sql SQL语句
     * @return 查询结果
     */
    public static CachedRowSet cachedQuery(final String sql) {
        return queryCache.doCachedTask(new CachedTask<CachedRowSet>(sql) {

            @Override
            public CachedRowSet run() {
                return query(sql);
            }
        });
    }

    public static void clearCache() {
        queryCache.clear();
    }

    public static long getCacheHitCount() {
        return queryCache.getHitCount();
    }

    public static long getCacheVisitedCount() {
        return queryCache.getVisitedCount();
    }

    public static void main(String[] args) throws SQLException {
        for (int i = 0; i < 2; i++) {
            Thread th = new Thread(new Runnable() {

                public void run() {
                    CachedRowSet rs = JDBCHelper.query("select name from t_user order by name");
                    if (rs != null) {
                        try {
                            List<String> ids = new ArrayList<String>();
                            while (rs.next()) {
                                ids.add(rs.getString("name"));
                            }
                            logger.info(ids.toString());
                        } catch (SQLException ex) {
                            logger.severe(ex.toString());
                        }
                    }
                }
            });
            th.start();
        }
    }
}
