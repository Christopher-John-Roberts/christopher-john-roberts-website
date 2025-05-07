/* ========================================================================
 * Space Facts
 * by Christopher John Roberts
 * ========================================================================
 * contact.chris.roberts@gmail.com
 * 
 * ======================================================================== */

 /*----------------------------------- TO IMPROVE / ADD --------------------------------

JavaScript

	Add icons of people for the number of people in space 
	Add a map to show the position of the ISS

--------------------------------------------------------------------------------------*/


// Prevent any jQuery code from running before the document is fully loaded 
// by placing jQuery methods inside a document ready event
// Target the HTML document and create a jQuery object
// .ready() method waits until the HTML pages DOM is ready to manipulate
// When the document is fully loaded execute a function
$(document).ready(function(){

	// getJSON.() method to request data from an external server with a HTTP request
	// First parameter of the function (json) holds the content of the request
	$.getJSON("http://api.open-notify.org/astros.json", function(json) {
		
		// Create an object to hold the JSON from the request
		var obj = json;
		
		// Access the objects properties storing them in variables
		var totalPeopleInSpace = obj.number;
		var peopleArray = obj.people;
		
		// Select HTML element with the id "totalPeopleInSpace" 
		// and set the elements content to the variable "totalPeopleInSpace"
	  	$("#totalPeopleInSpace01").html(totalPeopleInSpace);
		$("#totalPeopleInSpace02").html(totalPeopleInSpace);
		
		// For each element in the "peopleArray" call a function
		// that selects the HTML element with the id "peopleInSpace" 
		// and append a concatinated string
		peopleArray.forEach(function(element) {
			 $('#peopleInSpace').append("<p>Name: " + element.name + 
			 	"<br />" + "Craft: " + element.craft + "</p><br />");
		});
	});


	// Call getAndUpdateISS() function
	getAndUpdateISS();


	// getAndUpdateISS() uses a getJSON.() method to request data from an external server 
	// with a HTTP request as above
	// setTimeout method of the HTML DOM Window Object passes the function into itself 
	// to update every 5 seconds
	function getAndUpdateISS(){
		$.getJSON("http://api.open-notify.org/iss-now.json", function(json) {
			var obj = json;
			var position = obj.iss_position;
			var latitude = position.latitude;
			var longitude = position.longitude;
		  $("#issPositionLatitude").html(latitude);
		  $("#issPositionLongitude").html(longitude);
		});
		setTimeout(getAndUpdateISS, 5000);
	}

});  















