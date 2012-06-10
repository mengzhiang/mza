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
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.AbstractHandlerExceptionResolver;

import com.test.exception.business.EcpAjaxBusinessException;
import com.test.exception.business.EcpBusinessException;
import com.test.exception.business.EcpPageBusinessException;
import com.test.exception.system.EcpAjaxSystemException;
import com.test.exception.system.EcpPageSystemException;
import com.test.exception.system.EcpSystemException;
import com.test.message.ExceptionMessage;

/**
 * 
 * @author mza
 *
 */
public class EcpExceptionResolver extends AbstractHandlerExceptionResolver {

	@Override
	protected ModelAndView doResolveException(HttpServletRequest request,
			HttpServletResponse response, Object handler, Exception ex) {
		try {
			//handler business exception
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
			} 
			//handler system exception
			else if (ex instanceof EcpSystemException) {
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
				return handleEcpException((Exception) ex, request,
						response, handler);
			}
		} catch (Exception handlerException) {
			logger.warn("Handling of [" + ex.getClass().getName()
					+ "] resulted in Exception", handlerException);
		}
		return null;
	}
	
	/**
	 * handler ajax business exception
	 * @param ex
	 * @param request
	 * @param response
	 * @param handler
	 * @return
	 * @throws HttpMessageNotWritableException
	 * @throws IOException
	 */
	private ModelAndView handleEcpAjaxBusinessException(
			EcpAjaxBusinessException ex,
			HttpServletRequest request, HttpServletResponse response,
			Object handler) throws HttpMessageNotWritableException, IOException {
		//get input and output message 
		HttpInputMessage inputMessage = new ServletServerHttpRequest(request);
		HttpOutputMessage outputMessage = new ServletServerHttpResponse(response);
		//get contentType
		MediaType contentType = inputMessage.getHeaders().getContentType();
		ExceptionMessage returnValue = ex.getExceptionMessage();
		//convert java object to json
		MappingJacksonHttpMessageConverter messageConverter = new MappingJacksonHttpMessageConverter();
		//write to responseMessage
		messageConverter.write(returnValue, contentType, outputMessage);
		return new ModelAndView();
	}
	
	/**
	 * handler page business exception
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
		 //forward to error.jsp
		 ModelAndView model = new ModelAndView("error");
		 //put errorMessage to modelmap
		 model.addObject("exceptionMessage", ex.getExceptionMessage());
		return model;
	}
	/**
	 * handler page system exception
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
	
	/**
	 * handler ajax System Exception
	 * @param ex
	 * @param request
	 * @param response
	 * @param handler
	 * @return
	 * @throws HttpMessageNotWritableException
	 * @throws IOException
	 */
	private ModelAndView handleEcpAjaxSystemException(
			EcpAjaxSystemException ex,
			HttpServletRequest request, HttpServletResponse response,
			Object handler) throws HttpMessageNotWritableException, IOException {
		//get input and output message 
		HttpInputMessage inputMessage = new ServletServerHttpRequest(request);
		HttpOutputMessage outputMessage = new ServletServerHttpResponse(response);
		//get contentType
		MediaType contentType = inputMessage.getHeaders().getContentType();
		ExceptionMessage returnValue = ex.getExceptionMessage();
		//convert java object to json
		MappingJacksonHttpMessageConverter messageConverter = new MappingJacksonHttpMessageConverter();
		//write to responseMessage
		messageConverter.write(returnValue, contentType, outputMessage);
		return new ModelAndView();
	}


	private ModelAndView handleEcpSystemException(
			EcpSystemException ex,
			HttpServletRequest request, HttpServletResponse response,
			Object handler) {
		 ModelAndView model = new ModelAndView("error");
		 model.addObject("exceptionMessage", ex.getExceptionMessage());
		return model;
	}


	private ModelAndView handleEcpBusinessException(
			EcpBusinessException ex,
			HttpServletRequest request, HttpServletResponse response,
			Object handler) {
		 ModelAndView model = new ModelAndView("error");
		 model.addObject("exceptionMessage", ex.getExceptionMessage());
		return model;
	}

	private ModelAndView handleEcpException(
			Exception ex,
			HttpServletRequest request, HttpServletResponse response,
			Object handler) {
		 ModelAndView model = new ModelAndView("error");
		 model.addObject("exceptionMessage", ex.getMessage());
		return model;
	}

}
