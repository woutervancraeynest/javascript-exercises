function slider(itemsPerPage) {

	// grabbing access to the ol element
	var sliderList = document.getElementById("sliderList");
	// grabbing access to the li's within the ol element
	var listItem = sliderList.getElementsByTagName("li");
	// grab a reference to the next button for when the user clicks next
	var nextButton = document.getElementById("next");
	// grab a reference to the previous button for when the user clicks previous
	var prevButton = document.getElementById("prev");
	// setting my page count to 0 as a starting point
	var pageCount = 0;

	// initializing public variables so that all functions have access to these variables
	var pageWidth;
	// this variable is passed in through the function as an argument
	var itemsPerPage;
	var listItemWidth = (listItem.length != 0) ? listItem[0].offsetWidth : 0;
	var pageTotal;
	// calculating the total number of pages for evaluating when the user can and cannot click previous/next
	var totalNoPages = listItem.length/itemsPerPage;

	// commented this out because its only grabbing the width of the last item as the loop will reset the value each time
	// looping through all of the list items to calculate the width of each item
	//for (i=0; i<listItem.length; i++) {
		// setting the listItemWidth variable to the width of each element
		//listItemWidth = listItem[i].offsetWidth;
	//}
	// use the width of each li to calculate the width a page will be
	pageWidth = listItemWidth * itemsPerPage;

	// create an anonymous function for the next button
	nextButton.onclick = function() {
		// check to see that that the page count is greater than 0 and never greater than the total number of pages and then increment the page count
		// there is a - 1 for the total number of pages because I've started the count at 0 which is not the true 1st page
		if ((totalNoPages - 1) > pageCount > 0) { pageCount++ };
		// set the left css property of the ol listing to the calculated value
		// this value is calculated by multiplying the width of each page by the page count; need to concatenate with "px" to correctly set it to a string, as opposed to an integer
		sliderList.style.left = "-" + (pageWidth * pageCount) + "px";

		//console.log("page count = " + pageCount);
		//console.log(sliderList.style.left);
	}

	// create an anonymous function for the previous button
	prevButton.onclick = function() {
		// check to see that that the page count is never less than 0 then decrement the page count
		if (pageCount > 0) { pageCount-- };
		// set the left css property of the ol listing to the calculated value
		// this value is calculated by multiplying the width of each page by the page count; need to concatenate with "px" to correctly set it to a string, as opposed to an integer
		sliderList.style.left = "-" + (pageWidth * pageCount) + "px";

		//console.log("page count = " + pageCount);
		//console.log(sliderList.style.left);
	}
	//console.log("page count = " + pageCount);
}

window.onload = function() {
	// run the function on window load with the specified argument (items per page)
	slider(3);
}