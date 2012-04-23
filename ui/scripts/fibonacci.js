function fibonacci() {
	// this is the container to print to
	var container = document.getElementById("fibonacci");
	// the first number is hardcoded to 0
	var number1 = 0;
	// the second number is hardcoded to 1
	var number2 = 1;
	// initializing the variable for the total
	var total;

	// loop through 60 iterations
	for (i=0; i<60; i++) {
		// doing the math for the fibonacci sequence (a+b)
		total = number1 + number2;
		// setting the first number the second number
		number1 = number2;
		// setting the second number the total that was just created
		number2 = total;
		// printing out each iterations number2 which is the same as the total
		container.innerHTML += "<li>" + number2 + "</li>";
	}
}

window.onload = function() {
	fibonacci();
}