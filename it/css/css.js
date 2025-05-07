/* ========================================================================
 * One Page, Multiple Styles
 * by Christopher John Roberts
 * ========================================================================
 * contact.chris.roberts@gmail.com
 * 
 * ======================================================================== */


// Button Click Event Listeners
// ============================
//
// Event listeners on each CSS No. button that trigger calling the applyCss function 
// passing in the element id and path to css file

document.getElementById("css01Button").addEventListener("click", function(){
	applyCss("css01", "/it/css/css01.css");
});

document.getElementById("css02Button").addEventListener("click", function(){
	applyCss("css02", "/it/css/css02.css");
});

document.getElementById("css03Button").addEventListener("click", function(){
	applyCss("css03", "/it/css/css03.css");
});

/*###########################################
											
	Add any fututre additional css button 	
	event listeners ---> Here <---			
											
############################################*/


// Event listener on button element with id "noStylesButton"
// Calls clearStyles function and then sets the href attribute of
// link element with id "noStylesButton" to an empty string
// effectively removing access to the Bootsrap 3 stylesheet 
document.getElementById("noStylesButton").addEventListener("click", function(){
	clearStyles();
	document.getElementById("bootstrap3Default").href = "";
});

// Event listener on button element with id "bootstrap3DefaultButton" that triggers
//  calling the applyCss function passing in the element id and path to the bootstrap.min.css file
document.getElementById("bootstrap3DefaultButton").addEventListener("click", function(){
	applyCss("bootstrap3Default", "/css/bootstrap.min.css");
});


// clearStyles Function
// -----------------
function clearStyles() {
	// Save all elements with a class of "css" in an HTML Collection Object variable named "cssClass"
	var cssClass = document.getElementsByClassName("css");
	// Save the length of the "cssClass" HTML Collection Object in a variable named "cssClassLength"
	var cssClassLength = cssClass.length;
	
	// Loop through the "cssClass" HTML Collection Object 
	// setting the href attribute of each element to an empty string ""
	var i;
	for(i=0; i<cssClassLength; i++) {
		cssClass[i].href = "";	
	}
}

// applyCss Function
// -------------------
function applyCss(id, path){
	// Remove any exisiting styles by calling the clearStyles Function
	clearStyles();
	// Apply the default bootstrap css file 
	// (in the event that the href has been set to an empty string in above code)
	document.getElementById("bootstrap3Default").href = "/css/bootstrap.min.css";
	// Set the href attribute of the element to the css file path
	document.getElementById(id).href = path;
	
}









