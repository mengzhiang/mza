package com.test.handler;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpInputMessage;
import org.springframework.http.HttpOutputMessage;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageNotWritableException;
import org.springframework.http.converter.json.MappingJacksonHttpMessageConverter;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.http.server.ServletServerHttpResponse;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.AbstractHandlerExceptionResolver;

import com.test.exception.business.EcpAjaxBusinessException;
import com.test.exception.business.EcpBusinessException;
import com.test.exception.business.EcpPageBusinessException;
import com.test.exception.system.EcpAjaxSystemException;
import com.test.exception.system.EcpPageSystemException;
import com.test.exception.system.EcpSystemException;
import com.test.message.ExceptionMessage;

public class EcpExceptionResolver extends AbstractHandlerExceptionResolver {

	@Override
	protected ModelAndView doResolveException(HttpServletRequest request,
			HttpServletResponse response, Object handler, Exception ex) {
		try {
			if (ex instanceof EcpBusinessException) {
				if (ex instanceof EcpAjaxBusinessException) {
					return handleEcpAjaxBusinessException((EcpAjaxBusinessException) ex, request,
							response, handler);
				}else if(ex instanceof EcpPageBusinessException){
					return handleEcpPageBusinessException((EcpPageBusinessException) ex, request,
							response, handler);
				}else{
					return handleEcpBusinessException((EcpBusinessException) ex, request,
							response, handler);
				}

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
		 ModelAndView model = new ModelAndView("error");
		 model.addObject("exceptionMessage", ex.getMessage());
		return model;
	}

	private ModelAndView handleEcpSystemException(
			EcpSystemException ex,
			HttpServletRequest request, HttpServletResponse response,
			Object handler) {
		 ModelAndView model = new ModelAndView("error");
		 model.addObject("exceptionMessage", ex.getExceptionMessage());
		return model;
	}

	/**
	 * ϵͳ��ת�쳣
	 * @param ex
	 * @param request
	 * @param response
	 * @param handler
	 * @return
	 */
	private ModelAndView handleEcpPageSystemException(
			EcpPageSystemException ex,
			HttpServletRequest request, HttpServletResponse response,
			Object handler) {
		 ModelAndView model = new ModelAndView("error");
		 model.addObject("exceptionMessage", ex.getExceptionMessage());
		return model;
	}

	private ModelAndView handleEcpAjaxSystemException(
			EcpAjaxSystemException ex,
			HttpServletRequest request, HttpServletResponse response,
			Object handler) throws HttpMessageNotWritableException, IOException {
		//response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
		HttpInputMessage inputMessage = new ServletServerHttpRequest(request);
		HttpOutputMessage outputMessage = new ServletServerHttpResponse(response);
		MediaType contentType = inputMessage.getHeaders().getContentType();
		ExceptionMessage returnValue = ex.getExceptionMessage();
		MappingJacksonHttpMessageConverter messageConverter = new MappingJacksonHttpMessageConverter();
		messageConverter.write(returnValue, contentType, outputMessage);
		return new ModelAndView();
	}

	private ModelAndView handleEcpBusinessException(
			EcpBusinessException ex,
			HttpServletRequest request, HttpServletResponse response,
			Object handler) {
		 ModelAndView model = new ModelAndView("error");
		 model.addObject("exceptionMessage", ex.getExceptionMessage());
		return model;
	}

	private ModelAndView handleEcpAjaxBusinessException(
			EcpAjaxBusinessException ex,
			HttpServletRequest request, HttpServletResponse response,
			Object handler) throws HttpMessageNotWritableException, IOException {
		HttpInputMessage inputMessage = new ServletServerHttpRequest(request);
		HttpOutputMessage outputMessage = new ServletServerHttpResponse(response);
		MediaType contentType = inputMessage.getHeaders().getContentType();
		ExceptionMessage returnValue = ex.getExceptionMessage();
		MappingJacksonHttpMessageConverter messageConverter = new MappingJacksonHttpMessageConverter();
		messageConverter.write(returnValue, contentType, outputMessage);
		return new ModelAndView();
	}

	/**
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
		 ModelAndView model = new ModelAndView("error");
		 model.addObject("exceptionMessage", ex.getExceptionMessage());
		return model;
	}
}
