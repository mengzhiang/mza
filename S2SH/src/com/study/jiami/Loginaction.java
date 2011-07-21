//import java.math.BigInteger;
//    import javax.servlet.http.HttpServletRequest;
//    import javax.servlet.http.HttpServletResponse;
//    import org.apache.struts.action.Action;
//    import org.apache.struts.action.ActionForm;
//    import org.apache.struts.action.ActionForward;
//    import org.apache.struts.action.ActionMapping;
//    import com.sunsoft.struts.util.RSAUtil;
//    /**
//     * MyEclipse Struts
//     * Creation date: 06-28-2008
//     *
//     * XDoclet definition:
//     * @struts.action path="/login" name="loginForm" input="/login.jsp" scope="request" validate="true"
//     * @struts.action-forward name="error" path="/error.jsp"
//     * @struts.action-forward name="success" path="/success.jsp"
//     */
//    public class LoginAction extends Action {
//        /*
//         * Generated Methods
//         */
//        /**
//         * Method execute
//         * @param mapping
//         * @param form
//         * @param request
//         * @param response
//         * @return ActionForward
//         */
//        public ActionForward execute(ActionMapping mapping, ActionForm form,
//                HttpServletRequest request, HttpServletResponse response) throws Exception{
//            //LoginForm loginForm = (LoginForm) form;
//            String result = request.getParameter("result");
//            System.out.println("原文加密后为：");
//            System.out.println(result);
//            byte[] en_result = new BigInteger(result, 16).toByteArray();
//            System.out.println("转成byte[]"+new String(en_result));
//            byte[] de_result = RSAUtil.decrypt(RSAUtil.getKeyPair().getPrivate(),en_result);
//            System.out.println("还原密文：");
//            System.out.println(new String(de_result));
//            StringBuffer sb = new StringBuffer();
//            sb.append(new String(de_result));
//            System.out.println(sb.reverse().toString());
//            return mapping.findForward("success");
//        }
//    }