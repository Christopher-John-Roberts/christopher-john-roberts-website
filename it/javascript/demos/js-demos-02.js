
(function(){

// Display Date and Time using Date()
function date(){
	document.getElementById("dateAndTimeParagraph").innerHTML = Date();
}

document.getElementById("dateAndTimeButton").addEventListener("click", date);

// Display Date and Time using Date() *** using jQuery ***
$(document).ready(function(){
	
	$("#dateAndTimeButtonjQuery").click(function(){
		var time = Date();
		$("#dateAndTimeParagraphjQuery").text(time);
	});

});

// Change HTML Styles (CSS)
function changeFontSize(){
	document.getElementById("changeFontSizeParagraph").style.fontSize = "35px";
}

document.getElementById("changeFontSizeButton").addEventListener("click", changeFontSize);


// Hide HTML Elements
function hideElement(){
	document.getElementById("hideElementParagraph").style.display = "none";
}

document.getElementById("hideElementButton").addEventListener("click", hideElement);




// Show HTML Elements
function showElement(){
	document.getElementById("showElementParagraph").style.display = "block";
}

document.getElementById("showElementButton").addEventListener("click", showElement);


// Using window.alert()
function alertPopUp(){
	window.alert("Alert message here");
}

document.getElementById("alertButton").addEventListener("click", alertPopUp);


// Multiple statements on one line is allowed
var a, b, c;
a = 1; b = 2; c = a + b;
document.getElementById("multipleStatementsDemo").innerHTML = c;


// JavaScript Line Length and Line Breaks

document.getElementById("lineBreakDemo").innerHTML =
"Demo of a line break after an operator";



// Statements In Code Blocks
function codeBlockFunction() {
    document.getElementById("statement1").innerHTML = "JavaScript code blocks are written between { and }.";
    document.getElementById("statement2").innerHTML = "By clicking the above button a function was called executing two statements.";
}

document.getElementById("codeBlockButton").addEventListener("click", codeBlockFunction);



// One Statement, Many Variables
var person1 = "John Doe", carName = "Volvo", 
price = 200;

document.getElementById("oneStatementManyVariables").innerHTML = "The variable person is: " + person1 + 
" The variable carName is: " + carName + " The variable price is: " + price + 
"<br>All the above variables where declared in the same statement.";


// Function
function multiplicationFunction(p1, p2) {
    return p1 * p2;
}

document.getElementById("functionParagraph").innerHTML = multiplicationFunction(5, 10);

// The () Operator
document.getElementById("functionWithoutBrackets").innerHTML = multiplicationFunction;

// Functions Used as Variable Values<
document.getElementById("functionUsedAsVariable").innerHTML = 
"The result of the function when passed the arguments 2 and 4 is: " +
multiplicationFunction(2, 4);

// String Length Property
var exampleString = "I am an example string";
var stringLength = exampleString.length;

document.getElementById("stringLengthProperty").innerHTML = 
"exampleString is: " + exampleString + 
"<br>The length of exampleString is: " 
+ exampleString.length;

// Finding a String in a String - The indexOf() method
document.getElementById("indexOf").innerHTML = 
"The indexOf \"an\" in exampleString is: " 
+ exampleString.indexOf("an");

// Finding a String in a String - The lastIndexOf() method
document.getElementById("lastIndexOf").innerHTML = 
"The lastIndexOf \"an\" in exampleString is: " 
+ exampleString.lastIndexOf("an");

// Searching for a String in a String - The search() method
document.getElementById("search").innerHTML = 
"Using search() method on exampleString: " 
+ exampleString.search("an");


// Converting to Upper & Lower Case
document.getElementById("toUpperCase").innerHTML = 
"Using toUpperCase() method: " + exampleString.toUpperCase()
+ "<br>All string methods return a new string. They don't modify the original string.<br>" +
"For example exampleString is still: " + exampleString;

// Arrays
var carsArray = [	"Saab", 
					"Volvo", 
					"BMW"
];

document.getElementById("array").innerHTML = 
"carsArray is: " + carsArray +
" The first element in the array carsArray[0] is: " + carsArray[0];

// Changing an Array Element
carsArray[1] = "Land Rover";

document.getElementById("changeArrayElement").innerHTML = 
"carsArray is now: " + carsArray +
" The second element in the array carsArray[0] is now: " 
+ carsArray[1];

// Array Length Property
var carsArrayLength = carsArray.length;

document.getElementById("arrayLength").innerHTML = 
"The length of carsArray is: " + carsArrayLength;

// Looping Array Elements
var loopText, i;
loopText = "<ul>";

for (i = 0; i < carsArray.length; i++) {
    loopText += "<li>" + carsArray[i] + "</li>";
}

loopText += "</ul>";

document.getElementById("loopArray").innerHTML = loopText;

// Array.forEach() function
var forEachText = "<ul>";

carsArray.forEach(forEachFunction);

forEachText += "</ul>";

document.getElementById("arrayForEach").innerHTML = forEachText;

function forEachFunction(element) {
    forEachText += "<li>" + element + "</li>";
} 

// Array push() method
var push = carsArray.push("Mini");

document.getElementById("pushMethod").innerHTML = 
"Using push the carsArray is now: " +
carsArray + "<br>The array length is now " + push;

// Array pop() method
var poppedElement = carsArray.pop();

document.getElementById("popMethod").innerHTML = 
"poppedElement is: " +
poppedElement + "<br>The array is now: " + carsArray;

// Array shift() method
var shiftedElement = carsArray.shift();

document.getElementById("shiftMethod").innerHTML = 
"shiftedElement is: " +
shiftedElement + "<br>The array is now: " + carsArray;

// Array unshift() method
var unshift = carsArray.unshift("Volvo");

document.getElementById("unshiftMethod").innerHTML = 
"Using unshift(\"Volvo\") the carsArray is now: " +
carsArray + "<br>The array length is now " + unshift;

// Converting Arrays to Strings
// The toString() method
var arrayToString = carsArray.toString();

// The join() method joins 
var joinArray = carsArray.join(" * ")

document.getElementById("arrayToString").innerHTML = 
carsArray + " converted to a (comma seperated) string is: " + 
arrayToString + 
" and as a string with \" * \" used as a seperator it is: " + 
joinArray;

// Sorting an Array - sort() method
var sortedCarsArray = carsArray.sort();

document.getElementById("sortMethod").innerHTML = 
carsArray + 
" sorted alphabetically using .sort() method: " 
+ sortedCarsArray;

// Reversing an Array - reverse() method
var descendingSortedCarsArray = sortedCarsArray.reverse();

document.getElementById("reverseMethod").innerHTML = 
"The alphabetically sorted array in descending order " +
"(using .sort() method) is: " + descendingSortedCarsArray;

// Numeric Sort - Ascending
var numbersArray = [0.5, 99, 23, 1535424, 24, 10.4, 9999, 17e5, 0.8886];

numbersArraySorted = numbersArray.sort(function(a, b){return a - b});

document.getElementById("numericSort").innerHTML = 
numbersArray + " sorted is: " + numbersArraySorted;

// Numeric Sort - Descending
document.getElementById("descNumericSort").innerHTML = 
"Sorted decending is: " +
numbersArraySorted.sort(function(a, b){return b - a});

// Conditional (Ternary) Operator
function voteFunction() {
    var age, voteable;
    age = document.getElementById("age").value;
    voteable = (age < 18) ? "Too young":"Old enough";
    document.getElementById("ternatryOperatorParagraph").innerHTML = 
	voteable + " to vote.";
}

document.getElementById("voteButton").addEventListener("click", voteFunction);

// if, else and else if
function timeFunction() {
    var time, message;
    time = document.getElementById("time").value;
    if (time < 12) {
    	message = "good morning";
    }
    else if (time < 17) {
    	message = "good afternoon";
    }
    else if (time < 20) {
    	message = "good evening";
    }    
    else if (time < 24) {
    	message = "good night";
    } 
    else {
    	message = "not a valid time";
    }      
    document.getElementById("conditionalParagraph").innerHTML = message;
}

document.getElementById("timeButton").addEventListener("click", timeFunction);

// For Loop
function forLoopFunction() {
	var text = "";
	var i;
	var value = document.getElementById("forLoop").value;
	for (i = 0; i < value; i++) {
		text += "The number is " + i + "<br>";
	}
	document.getElementById("forLoopParagraph").innerHTML = text;
}

document.getElementById("forLoopButton").addEventListener("click", forLoopFunction);

// while loop
function whileLoopFunction() {
	var text = "";
	var i = 0;
	var value = document.getElementById("whileLoop").value;
	while (i < value) {
    	text += "<br>The number is " + i;
   	 	i++;
	}
	document.getElementById("whileLoopParagraph").innerHTML = text;
}

document.getElementById("whileLoopButton").addEventListener("click", whileLoopFunction);


//The Do/While Loop
function doWhileLoopFunction() {
	var text = "";
	var i = 0;
	var value = document.getElementById("doWhileLoop").value;
	do {
    	text += "<br>The number is " + i;
   	 	i++;
	}
	while (i < value);
	document.getElementById("doWhileLoopParagraph").innerHTML = text;
}

document.getElementById("doWhileLoopButton").addEventListener("click", doWhileLoopFunction);

//OBJECTS
var person = {
	firstName: "Christopher",
	middleName: "John",
	lastName: "Roberts",
	age: 31,
	language: "English",
	eyeColor: "Brown",
	hobbies:["coding", "swing dancing", "photography", "travel"],
	fullName: function(){
		return this.firstName + " " + this.middleName + " " + this.lastName;
	},
	personNationality: function(){
		return this.firstName + " " + this.middleName + " " + this.lastName
		+ " is " + this.nationality + ".";
	},
	get lang() {
       return this.language;
    },
    set lang(value) {
        this.language = value;
    }
};

document.getElementById("objectParagraph").innerHTML = 
person["firstName"] + 
" is " + person["age"] + 
" years old.";

// for...in Loop
var txt = "";
var x;

for (x in person) {
    txt += person[x] + "<br />";
}

document.getElementById("objectForInParagraph").innerHTML = 
"for...in loop for person object: <br />" +
 txt;

//Adding New Properties
person.nationality = "British";

document.getElementById("addNewPropertyParagraph").innerHTML =
"With new property of nationality added " + 
person.firstName + " is " + person.nationality + ".";

//Accessing Object Methods
document.getElementById("accessingMethods").innerHTML = 
"Accessing a method of an object: " 
+ person.personNationality();

//Adding a Method to an Object
person.sayHello = function () {
    return this.firstName + " says \"Hello!\"";
};

document.getElementById("addingAMethod").innerHTML = 
person.sayHello();


// Getters and setters
// Display data from the object using a getter:
document.getElementById("getterParagraph").innerHTML = person.lang;

// Set a property using set:
person.lang = "Welsh";
// Display data from the object:
document.getElementById("setterParagraph").innerHTML = person.language;



// Object Types (Blueprints) (Classes)

// Object Constructors
// Constructor function for Human objects
// It is considered good practice to name constructor functions with an upper-case first letter.
function Human(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "English"; // This way object properties can have default values.
}

// Objects of the same type are created by calling the constructor function with the new keyword
// Create a Human object
var friend1 = new Human("Matty", "Hawker", 32, "Brown");
var friend2 = new Human("Olly", "Morris", 30, "Blue");

// Display objects
document.getElementById("displayObjects").innerHTML =
"friend1: " + friend1.firstName + "<br />" +
"friend2: " + friend2.firstName;



// Object Prototypes
Human.prototype.school = "St David\'s";

document.getElementById("objectPrototypeDemo").innerHTML =
friend1.firstName + " went to " + friend1.school;



// Self-Invoking Function
(function () {
    document.getElementById("selfInvokingFunction").innerHTML = "Hello! I called myself";
})();










}());



