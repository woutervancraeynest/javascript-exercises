function calcDate(date, offset) {
	// convert to milliseconds using getTime()
	// then add the offset using getTimezoneOffset() which returns in minutes,
	// so you need to convert to milliseconds by mulitplying 1000 milliseconds per second and 60 seconds per minute
	// this creates the current UTC time from current client location
	utc = date.getTime() + (date.getTimezoneOffset() * 1000 * 60);
	
	// create new Date object for different city
	// using the UTC time created in milliseconds plus the 5 hour offset converted to milliseconds
	newDate = new Date(utc + (1000 * 60 * 60 * offset));

	// return time
	return newDate;
}


function countdown() {
	// create the current date
	var currentDate = new Date();
	// create the target date; this one is hard coded to Black Friday (yyyy, mm, dd)
	var targetDate = new Date(2010, 10, 29);

	// conversions
	var seconds = 1000;
	var minutes = seconds * 60;
	var hours = minutes * 60;
	var days = hours * 24;
	var years = days * 365;

	// get the difference between the target time and the current time (in milliseconds);
	var t = targetDate.getTime() - currentDate.getTime();
	var d = t/days;
	var h = t/hours;
	var m = t/minutes;
	var s = t/seconds;

	// this takes the time difference in hours, divides it by 24 hours in a day, and takes the remainder
	var x = h%24;
	// this takes the time difference in minutes, divides it by 60 minutes in a hour, and takes the remainder
	var y = m%60;
	// this takes the time difference in seconds, divides it by 60 seconds in a minute, and takes the remainder
	var z = s%60;
	//alert(x);

	// printing out black Friday's time
	var targetDayContainer = document.getElementById("blackFriday");
	targetDayContainer.innerHTML = targetDate;

	// the day container, printing out the days til black Friday
	var daysContainer = document.getElementById("days");
	daysContainer.innerHTML = Math.floor(d);

	// the hours container, printing out the hours til black Friday
	var hoursContainer = document.getElementById("hours");
	hoursContainer.innerHTML = Math.floor(x);

	// the minutes container, printing out the minutes til black Friday
	var minutesContainer = document.getElementById("minutes");
	minutesContainer.innerHTML = Math.floor(y);

	// the day container, printing out the days til black Friday
	var secondsContainer = document.getElementById("seconds");
	secondsContainer.innerHTML = Math.floor(z);
	
	// setting an infinite loop function that run itself every second
	setTimeout("countdown()", 1000);
}

window.onload = function() {
	countdown();
}