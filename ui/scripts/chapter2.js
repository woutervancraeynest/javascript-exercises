/* -----Variables-----*/
// this is declaration of variables
var mood;
var age;

// shorthand for declaration of multiple variables
var mood, age;

// assigment of variables
mood = "happy";
age = 30;

// shorthand for assignment of mulitple variables
mood = "happy", age = 30;

// this is declaration and assignment of variables
var mood = "happy";
var age = 30;

// shorthand for declaration and assignment of multiple variables
var mood = "happy", age = 30;
//alert(mood);
//alert(age);

// example of bad sytax; causes an error on load
// var my mood = "happy";


/* -----Data Types-----*/
// a string literal
var age = "thirty three";

// a numeric literal
var age = 30;

// example of escaping characters using "\"
var height = "about 5'10\" tall";
//alert(height);

// example of floating point numbers & negative numbers
var age = 33.25;
var temperature = -20;
//alert(temperature);

// boolean
var sleeping = true;
//alert(sleeping);

// example of the difference between boolean and string
// married is set to true
var married = true 
// this case, married is a string containing the word "true"
var married = "true"

/* -----Arrays------ */
// this sets the variable beatles to an Array with a length of 4
var beatles = Array(4);

// this sets the variable beatles to an Array with an undetermined length
var beatles = Array();

// populating an array is when you add elements to the Array
beatles[0] = "John";
beatles[1] = "Paul";
beatles[2] = "George";
beatles[3] = "Ringo";

// shorthand for populating an Array
var beatles = Array("John", "Paul", "George", "Ringo");

// even shorter version of populating an array
var beatles = ["John", "Paul", "George", "Ringo"];

// populating an Array with numeric values
var years = Array(1940, 1941, 1942, 1943);

// populating an Array with mixed data types
var lennon = Array("John", 1940, false);

// an element of an array can be a variable, this would assign the string John to the first element in the beatles Array
var name = "John";
beatles[0] = name;

// the value of one array being assigned to an element of another array
var names = Array("John", "Paul", "George", "Ringo");
beatles[1] = names[3];

// arrays can hold arrays
var lennon = Array("John", 1940, false);
var beatles = Array();
beatles[0] = lennon;
//alert(beatles[0][0]);

// associative arrays
var lennon = Array();
lennon["name"] = "John";
lennon["year"] = 1940;
lennon["living"] = false;
//alert(beatles[0]["name"]);

// an associative array containing a numeric array
var beatles = Array();
beatles[0] = lennon;

// an associative array containing an associative array
var beatles = Array();
beatles["vocalist"] = lennon;
//alert(beatles["vocalist"]["name"]);

/* -----Operations----- */
var total = (1 + 4) * 5;
//alert(total);

// calculations with variables
var fahrenheit = 95;
var celsius = (fahrenheit - 32) / 1.8;
//alert(celsius);

// incrementation
var year = year + 1;
// is the same as
year++;

// concatenation
var message = "I am feeling " + "happy";
var mood = "happy";
var message = "I am feeling " + mood;

// an example of a numeric literal being converted to a string literal
var year = 2005;
var message = "The year is " + year;
//alert("10" + 20);
//alert(10 + 20);

// an example of concatenation and assignment or addition and assignment using +=
var year = 2005;
var message = "The year is ";
message += year;
//alert(message);

/* -----Conditionals----- */
// if statement
if (1 > 2) {
	alert("The world has gone mad");
};

// shorthand if statement
if (1 > 2) alert ("The world has gone mad");

// if else statement
if (1 > 2) {
	alert("The world has gone mad!");
} else {
	//alert("All is well with the world");
};

// comparison operators
var my_mood = "happy";
var your_mood = "sad";
if (my_mood == your_mood) {
	//alert("We both feel the same");
};

if (my_mood != your_mood) {
	//alert("We're feeling different moods.");
};

// logical operators (operands)
// the AND operator holds true if both operands are true
var num = 22;
if (num >= 5 && num <= 10) {
	//alert("the number is in the right range");
};

// the OR operator holds true if one operand is true;
if (num > 10 || num < 5) {
	//alert("The number is not in the right range");
};

// the NOT operator works on single operand; whatever Boolean value is returned gets reversed
if ( !(1 > 2)) {
	//alert("All is well with the world");
};

/* -----Looping Statements----- */
// while loop - will only execute if the condition returns true
var count = 1;
/* while (count < 11) {
	alert(count);
	count++;
}; */

// do...while loop - will execute at least once even if condition is false
var count = 1;
/*do {
	alert(count);
	count++;
} while (count < 1); */

// for loop
for (var count = 1; count < 11; count++) {
	//alert(count);
};

// using a for loop to access an arrays elements
var beatles = Array("John", "Paul", "George", "Ringo");
for (var count = 0; count < beatles.length; count++) {
	//alert(beatles[count]);
};

/* -----Functions----- */
function shout() {
	var beatles = Array("John", "Paul", "George", "Ringo");
	for (var name = 0; name < beatles.length; name++) {
		alert(beatles[name]);
	};
};
//shout();

// example of a function using arguments
function multiply(num1, num2) {
	var total = num1 * num2;
	return total;
};
var total = multiply(5,3);
//alert(total);

function convertToCelsius(temp) {
	var result = temp - 32;
	result = result / 1.8;
	return result;
}

var temp_fahrenheit = 95;
var temp_celsius = convertToCelsius(temp_fahrenheit);
//alert(temp_celsius);

// variable scope
function square(num) {
	var total = num * num;
	return total;
};
var total = 50;
var number = square(20);
//alert(total);

/* -----Objects----- */
// arrays are native objects, using the new keyword, you can create a new instance of an Array object
var beatles = new Array();
// you can access the length property of an arrays object
beatles.length

// Math object
var num = 7.561;
var num = Math.round(num);
//alert(num);

// Date object
var current_date = new Date();
var today = current_date.getHours();
//alert(today);

// String Object
var string1 = new String();
string1 = "Hello";

// length property
//alert(string1.length);

// charAt() method
var lastChar = string1.charAt(string1.length - 1);
//alert(lastChar);

// charCodeAt() method
var charCode = string1.charCodeAt(string1.length -1);
//alert(charCode);

// fromCharCode() method
var string1;
var string1 = String.fromCharCode(65,66,67);
//alert(string1);

var aThruZ = "";
var charCode;
for (charcode = 65; charcode <= 90; charcode++) {
	aThruZ = aThruZ + String.fromCharCode(charcode) + "\n";
}
//document.write(aThruZ);

// host objects are not supplied by the Javascript language, but by the environment in which its running (the browser)
// examples are Form, Image, Element
// another type of object though that has access to all information on a web page is the Document object, hence DOM.