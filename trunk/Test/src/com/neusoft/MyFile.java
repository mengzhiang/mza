package com.neusoft;


/**
 * Created on 2010-3-13
 * 文件基类
 * @author:[孟志昂]
 * @email:[mengzha@neusoft.com]
 * @version        1.0
*/
public class MyFile
{
    private String filename;
    private String content;
    
    /**
     * <p>Description:取得filename</p>
     * @return String filename.
     */
    public String getFilename()
    {
        return filename;
    }
    /**
     * <p>Description:设置filename</p>
     * @param filename The filename to set.
     */
    public void setFilename(String filename)
    {
        this.filename = filename;
    }
    /**
     * <p>Description:取得content</p>
     * @return String content.
     */
    public String getContent()
    {
        return content;
    }
    /**
     * <p>Description:设置content</p>
     * @param content The content to set.
     */
    public void setContent(String content)
    {
        this.content = content;
    }

}
