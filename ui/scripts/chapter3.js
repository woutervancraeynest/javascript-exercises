/* -----getElementById();-----*/
// typeof operater - Detects whether its a string, number, function, Boolean, or object
//alert(typeof document.getElementById("Chapter3"));
document.getElementById("Chapter3");

/* -----getElementsByTagName();----- */
// returns an array of tags, takes one argument - the tag
//alert(document.getElementsByTagName("dd").length);
document.getElementsByTagName("h3");
//var testObject = document.getElementById("test");
//alert(document.getElementsByTagName("li").length);

// shows the typeof operator to show if its a Boolean, number, etc.
//alert(typeof document.getElementById("purchases");

// shows the length property on the getElementsByTagName method of the document
//alert(document.getElementsByTagName("li").length);

// grabs the collection of list items and alerts their type to show they're objects
for (var i = 0; i < document.getElementsByTagName("li").length; i++) {
	//alert(typeof document.getElementsByTagName("li")[i]);
}

// grabs the collection of list items and alerts their type to show they're objects using shorthand and variables
var items = document.getElementsByTagName("li");
for (var i = 0; i < items.length; i++) {
	//alert(typeof items[i]);
}

// grabs all elements on the document using the wildcard tag
//alert(document.getElementsByTagName("*").length);

// grabs the collection of list items within the ul#purchases, and alerts that they're all objects
var shopping = document.getElementById("purchases");
var items = shopping.getElementsByTagName("*");
//alert(items.length);
for (var i = 0; i < items.length; i++) {
	//alert(typeof items[i]);
}

// grabs the collection of p tags, then alerts the title attributes
var paragraphs = document.getElementsByTagName("p");
for (var i = 0; i < paragraphs.length; i++) {
	//alert(paragraphs[i].getAttribute("title"));
}

// this will grab the title attribute from all p tags, checks if title is not equal to null
var paragraphs = document.getElementsByTagName("p");
for (var i = 0; i < paragraphs.length; i++) {
	var title_text = paragraphs[i].getAttribute("title");
	if (title_text != null) {
		//alert(title_text);
	}
}

// this will grab the title attribute from all p tags, checks if title exists shows inline if statement
var paragraphs = document.getElementsByTagName("p");
for (var i = 0; i < paragraphs.length; i++) {
	var title_text = paragraphs[i].getAttribute("title");
	//if (title_text) alert(title_text);
}

// this will test to show that setAttribute actually works; returns null and then the value
var shopping = document.getElementById("purchases");
//alert(shopping.getAttribute("title"));
shopping.setAttribute("title", "a list of goods");
//alert(shopping.getAttribute("title"));

// this will grab the collection of paragraphs, and insert a new title into all paragraphs
var paragraphs = document.getElementsByTagName("p");
for (var i = 0; i < paragraphs.length; i++) {
	var title_text = paragraphs[i].getAttribute("title");
	if (title_text) {
		paragraphs[i].setAttribute("title", "brand new title text");
		alert(paragraphs[i].getAttribute("title"));
	}
}