// the function showPic takes 1 argument that will be a node on the page, specifically an <a> tag
function showPic(whichPic) {
	// grab the value of the href attribute from the clicked link and store in a variable
	var source = whichPic.getAttribute("href");
	// grab a reference to the placeholder image and store
	var placeholder = document.getElementById("placeholder");
	// change the src attribute on our placeholder image and set it to our source reference from the value of the href that has been clicked
	placeholder.setAttribute("src", source);
	// grab the value of the title attribute from the clicked link and store in a variable
	var text = whichPic.getAttribute("title");
	// grab a reference to the placeholder description text
	var description = document.getElementById("description");
	// this will grab the valueof the clicked link's title and set it in the placeholder texts text node
	description.firstChild.nodeValue = text;
};

function countBodyChildren() {
	// grab the <body> tag and store the reference
	var body_element = document.getElementsByTagName("body")[0];
	// returns the number of nodes from the body element array
	//alert(body_element.childNodes.length);
	// retunrs the number of the nodeValue (should return 1)
	//alert(body_element.nodeType)
}
//window.onload = countBodyChildren;

// by attempting to grab the nodeValue of the <p> tag, it returns null because there is no text, it's empty, i need the childNodes value
//alert(description.nodeValue);
// this is the correct way to get the nodeValue of the text from the <p> tag
// alert(description.childNodes[0].nodeValue);
// childNodes[0] == firstChild
// childNodes[childNodes.length-1] == lastChild
//alert(description.firstChild.nodeValue);

// nodeType
// nodeType returns a number
// Elements have a nodeType value of 1
// Attributes have a nodeType value of 2
// Text nodes have a nodeType value of 3