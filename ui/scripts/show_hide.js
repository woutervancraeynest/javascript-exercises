var moreLink;
window.onload = function() {
	moreLink = document.getElementById("clickMore");
	moreLink.onclick = show;
}

var show = function() {
	var items = document.getElementsByTagName("li");
	for (i=0; i<items.length; i++) {
		//printd(items[i].className);
		if (items[i].className == "hide") {
			items[i].style.display = "list-item";
			moreLink.innerHTML = "less";
		}
	}
	moreLink.onclick = hide;
	return false;
}

var hide = function() {
	var items = document.getElementsByTagName("li");
	for (i=0; i<items.length; i++) {
		//printd(items[i].className);
		if (items[i].className == "hide") {
			items[i].style.display = "none";
			moreLink.innerHTML = "more";
		}
	}
	moreLink.onclick = show;
	return false;
}