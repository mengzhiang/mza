//package com.study.jiami;
//
//
//    import java.security.interfaces.RSAPrivateKey;
//    import java.security.interfaces.RSAPublicKey;
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
//     * @struts.action validate="true"
//     */
//    public class IndexAction extends Action {
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
//                HttpServletRequest request, HttpServletResponse response)throws Exception {
//            RSAPublicKey rsap = (RSAPublicKey) RSAUtil.getKeyPair().getPublic();
//            String module = rsap.getModulus().toString(16);
//            String empoent = rsap.getPublicExponent().toString(16);
//            System.out.println("module");
//            System.out.println(module);
//            System.out.println("empoent");
//            System.out.println(empoent);
//            request.setAttribute("m", module);
//            request.setAttribute("e", empoent);
//            return mapping.findForward("login");
//        }
//    }