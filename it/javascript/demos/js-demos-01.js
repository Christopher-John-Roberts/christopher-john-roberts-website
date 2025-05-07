
(function(){

var x = 20;
var y = typeof x;

var name = "Chris";
var firstLetter = name[0];
var array = name.split("");
var length = array.length;

// console.log() method to display data
// it can be used for debugging purposes

console.log("This is an example of using the console.log() method to display data. It can be used for debugging purposes.");


// Print A Variable
document.getElementById("printAVariableParagraph").innerHTML = "x = " + x;

// typeof
document.getElementById("typeOfParagraph").innerHTML = "typeof x: " + y;

// Print A Variable Concatinated With A String
document.getElementById("concatParagraph").innerHTML = "My name is " + name;

// Interpolation
document.getElementById("interpolationParagraph").innerHTML = (`My name is ${name}`);

// Extract A Letter From A String
document.getElementById("firstLetterInStringParagraph").innerHTML = "The first letter of " + name + " is " + firstLetter;

// Create An Array From A String
document.getElementById("arrayFromStringParagraph").innerHTML = name + " as an array is: " + array + " (created using .split()).";

// Find Length Of An Array
document.getElementById("lengthOfArrayParagraph").innerHTML = "The length of array: \"" + array + "\" is " + length + " .";

// Loop Through Array Elements
var i;
var temp;
var total;

for (i = 0; i < length; i++){
	temp = array[i];
	total += "<br />" + temp;
	document.getElementById("loopArrayElementsParagraph").innerHTML = total;
}	

// Object Method
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

document.getElementById("objectMethodParagraph").innerHTML = "person.fullName() = " + person.fullName();

// Change Style Of Element JS
function changeButtonFunction(){
	document.getElementById("changeStyleJSButton").style.color = "green";
}

document.getElementById("changeStyleJSButton").addEventListener("click", changeButtonFunction);

// Change Style Of Element jQuery
$(document).ready(function(){
	
	$("#changeStylejQueryButton").click(function(){
		$("#changeStylejQueryButton").css({"color":"green"});
	});

});


}());
