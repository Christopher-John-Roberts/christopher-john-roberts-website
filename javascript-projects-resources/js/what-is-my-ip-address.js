/* ========================================================================
 * What Is My IP Address?
 * by Christopher John Roberts
 * ========================================================================
 * contact.chris.roberts@gmail.com
 * ======================================================================== */

/*----------------------------------- TO IMPROVE / ADD --------------------------------

JavaScript

	Animated spinner icon when loading
	Loading audio
	Ping sound when done
	Buttons to change page style to retro coder look

--------------------------------------------------------------------------------------*/



// Prevent any jQuery code from running before the document is fully loaded 
// by placing jQuery methods inside a document ready event
// Target the HTML document and create a jQuery object
// .ready() method waits until the HTML pages DOM is ready to manipulate
// When the document is fully loaded execute a function
$(document).ready(function(){
	
	$.getJSON("https://jsonip.com/", function(data) {
		var obj = data;
		var ipAddress = obj.ip;
		$("#ipAddress").html(ipAddress); 
	});

	// getJSON.() method to request data from an external server with a HTTP request
	// First parameter of the function (data) holds the content of the request
	$.getJSON('http://ipinfo.io/json', function(data){

		// Create an object to hold the data from the request
		var obj = data;
		// Access the objects properties storing them in variables
		var city = obj.city;
		var country = obj.country;
		var loc = obj.loc; // later split on comma
		var postal = obj.postal;
		var region = obj.region;
		// Select elements based on their id and set the contents of the selected elements to variables
		$("#city").html(city);
		$("#country").html(country);
		$("#loc").html(loc);
		$("#postal").html(postal);
		$("#region").html(region);

	});

	// Another API I played around with that returns ip address information
	// Left in as reference for if ever need to replace one of the above
	$.getJSON("https://api.ipify.org/?format=json", function(data) {
		console.log("This example is only logged to console: " + data.ip);
	});
   
});    