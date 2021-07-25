function getQueryStringValue(key) {
	return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

const redirect = getQueryStringValue("redirect");
console.log("redirect", redirect)
if (document.location.pathname === '/' && redirect) {
	document.location.assign(`${document.location.origin}/#/${redirect}`);
}