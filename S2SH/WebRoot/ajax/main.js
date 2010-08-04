function showlist() {
	document.getElementById("content").innerHTML = "";
}
/**
 * 页面高度自适应代码
 */
function SetCwinHeight() {
	var iframeid = document.getElementById("list"); // iframe id
	if (document.getElementById) {
		if (iframeid && !window.opera) {
			if (iframeid.contentDocument
					&& iframeid.contentDocument.body.offsetHeight) {
				iframeid.height = iframeid.contentWindow.document.body.scrollHeight;
			} else if (iframeid.Document && iframeid.Document.body.scrollHeight) {
				iframeid.height = iframeid.Document.body.scrollHeight;
			}
		}
	}

}