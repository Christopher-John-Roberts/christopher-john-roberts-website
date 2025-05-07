

/* ========================================================================
 * Magic 8 Ball
 * by Christopher John Roberts
 * ========================================================================
 * contact.chris.roberts@gmail.com
 * 
 * ======================================================================== */

 /*----------------------------------- TO IMPROVE / ADD --------------------------------

JavaScript

  Animate skake 	
  Audio effect for sumbit button
  Only reveal "Question" and answer upon successful submission of a question


Look
  About this project in footer
  Instructions in dropdown

 
----------------------------------------------------------------------------------------*/


// When shakeButton is clicked call shakeFunction
document.getElementById("shakeButton").addEventListener("click", shakeFunction);

// Array of x number of answers (can be extended)
var answersArray = [
	"this is answer 1",
	"this is answer 2",
	"this is answer 3",
	"this is answer 4",
	"this is answer 5",
	"this is answer 6",
	"this is answer 7",
	"this is answer 8",
	"this is answer 9",
	"this is answer 10"
];

// Store the length of the answers array in a variable
var answersArrayLength = answersArray.length;


// shakeFunction
// =============
function shakeFunction() {
	// Take user input for a question when they submit button
	// Set the variable character to the value of the questionField element
	// Store in variable

	// Remove any inner html from the instructions area that may have been generated from previous searches
    document.getElementById("instructions").innerHTML = "";
    //document.getElementById("question").innerHTML = "";
    //document.getElementById("answer").innerHTML = "";


    var question = document.getElementById("questionField").value;

    if (question !== "") {
    	
					// pick a random number between 0 - x-1 (answersArray.length)
					var random = Math.floor(Math.random() * answersArrayLength);


				// get the random number element from the array storying in variable answer
					var answer = answersArray[random];
				/*

				shaking animation id="magic8BallImage"

				*/


				// print question on screen
				document.getElementById("question").innerHTML = question;
				// print answer on screen
				document.getElementById("answer").innerHTML = answer;

				document.getElementById("questionField").value = "";

    }

    else {
    	document.getElementById("instructions").innerHTML = "you must enter a queston";
    		
				document.getElementById("question").innerHTML = "";

				document.getElementById("answer").innerHTML = "";
    }



}









