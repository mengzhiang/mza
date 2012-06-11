package com.test.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.AbstractHandlerExceptionResolver;

import com.test.exception.business.EcpAjaxBusinessException;
import com.test.exception.business.EcpBusinessException;
import com.test.exception.business.EcpPageBusinessException;
import com.test.exception.system.EcpAjaxSystemException;
import com.test.exception.system.EcpPageSystemException;
import com.test.exception.system.EcpSystemException;

public class EcpExceptionResolver extends AbstractHandlerExceptionResolver {

	@Override
	protected ModelAndView doResolveException(HttpServletRequest request,
			HttpServletResponse response, Object handler, Exception ex) {
		try {
			//ҵ���쳣
			if (ex instanceof EcpBusinessException) {
				if (ex instanceof EcpAjaxBusinessException) {
					// �ѷ��ؽ��д��response���С�����ԭ����
					// ҵ����Ϣ ��UE��ʾ����ϸ����div����
					return handleEcpAjaxBusinessException((EcpAjaxBusinessException) ex, request,
							response, handler);
				}else if(ex instanceof EcpPageBusinessException){
					return handleEcpPageBusinessException((EcpPageBusinessException) ex, request,
							response, handler);
				}else{
					return handleEcpBusinessException((EcpBusinessException) ex, request,
							response, handler);
				}
				//ϵͳ�쳣
			} else if (ex instanceof EcpSystemException) {
				if (ex instanceof EcpAjaxSystemException) {
					return handleEcpAjaxSystemException((EcpAjaxSystemException) ex, request,
							response, handler);
				}else if(ex instanceof EcpPageSystemException){
					return handleEcpPageSystemException((EcpPageSystemException) ex, request,
							response, handler);
				}else{
					return handleEcpSystemException((EcpSystemException) ex, request,
							response, handler);
				}
			} else {
				return handleEcpException((MissingServletRequestParameterException) ex, request,
						response, handler);
			}
		} catch (Exception handlerException) {
			logger.warn("Handling of [" + ex.getClass().getName()
					+ "] resulted in Exception", handlerException);
		}
		return null;
	}

	private ModelAndView handleEcpException(
			MissingServletRequestParameterException ex,
			HttpServletRequest request, HttpServletResponse response,
			Object handler) {
		// TODO Auto-generated method stub
		return null;
	}

	private ModelAndView handleEcpSystemException(
			EcpSystemException ex,
			HttpServletRequest request, HttpServletResponse response,
			Object handler) {
		// TODO Auto-generated method stub
		return null;
	}

	private ModelAndView handleEcpPageSystemException(
			EcpPageSystemException ex,
			HttpServletRequest request, HttpServletResponse response,
			Object handler) {
		 ModelAndView model = new ModelAndView("error.jsp");
		 model.addObject("exceptionMessage", ex.getExceptionMessage());
		return model;
	}

	private ModelAndView handleEcpAjaxSystemException(
			EcpAjaxSystemException ex,
			HttpServletRequest request, HttpServletResponse response,
			Object handler) {
		// TODO Auto-generated method stub
		return null;
	}

	private ModelAndView handleEcpBusinessException(
			EcpBusinessException ex,
			HttpServletRequest request, HttpServletResponse response,
			Object handler) {
		// TODO Auto-generated method stub
		return null;
	}

	private ModelAndView handleEcpAjaxBusinessException(
			EcpAjaxBusinessException ex,
			HttpServletRequest request, HttpServletResponse response,
			Object handler) {
		// TODO Auto-generated method stub
		return null;
	}

	/**
	 * ����ҵ���ת�쳣
	 * @param ex
	 * @param request
	 * @param response
	 * @param handler
	 * @return
	 */
	private ModelAndView handleEcpPageBusinessException(
			EcpPageBusinessException ex,
			HttpServletRequest request, HttpServletResponse response,
			Object handler) {
		 ModelAndView model = new ModelAndView("error.jsp");
		 model.addObject("exceptionMessage", ex.getExceptionMessage());
		return model;
	}
}
