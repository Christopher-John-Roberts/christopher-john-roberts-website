/* ========================================================================
 * Corporate Buzzword Generator
 * by Christopher John Roberts
 * ========================================================================
 * contact.chris.roberts@gmail.com
 * ======================================================================== */

 /*----------------------------------- TO IMPROVE / ADD --------------------------------

JavaScript

  Audio effect
    either on click of button
    or appearance of buzzword
  Multiple sound effects in an array, randomly chooses one
  Button to Tweet the phrase

--------------------------------------------------------------------------------------*/


// Find element with id "BuzzWordButton" and add an event listener method
// When the element is clicked a function "generateURL" is called
document.getElementById("BuzzWordButton").addEventListener("click", generateURL);


// generateURL
// ===========
// Function that generates a final URL and calls the loadDoc function
function generateURL() {
  // Variables containing URL strings
  // A proxy URL is used as AJAX request is being made from one domain to another / “same-origin policy” 
  // This API enables cross-origin requests to anywhere
  // Creates a request to a url, and includes CORS headers in the response
  var APIURL = "https://corporatebs-generator.sameerkumar.website/";
  var ProxyURL = "https://cors-anywhere.herokuapp.com/"
  // Strings are concatinated to result in a "finalURL" string
  var finalURL = ProxyURL + APIURL;
  // "loadDoc" function is called with the "finalURL" string and "buzzwordFunction" as parameters 
  loadDoc(finalURL, buzzwordFunction);
}


// loadDoc() Function
// ==================
function loadDoc(url, cFunction) {
  // Create an XMLHttpRequest Object
  var xhttp;
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // .onreadystatechange property of the XMLHttpRequest Object 
    // defines a function to be executed when the ready state changes
    xhttp.onreadystatechange = function() {
	  // .readyState property holds the status of the XMLHttpRequest
	  // .status property holds the status (number) of the  XMLHttpRequest Object
    if (this.readyState == 4 && this.status == 200) {
		// If the .readyState propery is 4 AND the .status propery is 200 the response is ready
		// When the response is ready the function passed in as a parameter is called 
    // with the XMLHttpRequest Object (this) as its parameter
      cFunction(this);
    }
  };
  // Concatinate a random number to the end of the url
  url += "?t=" + Math.random(); 
  // Opening request
  xhttp.open("GET", url, true);
  // Sending request
  xhttp.send();
}


// buzzwordFunction() Function
// ===========================
function buzzwordFunction(xhttp) {
  // Convert the response text into a JavaScript object	
  var obj = JSON.parse(xhttp.responseText);
  // Find element with id "BuzzWordHere"
  // Change the inner HTML of the element to a string containing the phrase property of the object
  document.getElementById("BuzzWordHere").innerHTML = "\"" + obj.phrase + "\"";
}





