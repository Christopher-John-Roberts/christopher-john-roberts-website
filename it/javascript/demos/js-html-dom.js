(function(){

// Finding HTML Elements by Id
function elementById(){
	document.getElementById("findElementByIdParagraph").innerHTML = "Hello World!";
}

document.getElementById("findElementByIdButton").addEventListener("click", elementById);

// Finding HTML Elements by Tag Name	
function elementsByTagName(){
	var x = document.getElementsByTagName("p");
	document.getElementById("FindElementByTagNameParagraph").innerHTML = 
	'The text in first paragraph (index 0) is: ' + x[0].innerHTML;
}

document.getElementById("FindElementByTagNameButton").addEventListener("click", elementsByTagName);


// Finding HTML Elements by Class Name
function elementByClassName(){
	document.getElementsByClassName("FindElementByClassNameParagraph")[0].innerHTML = "Hello World!!";
}

document.getElementById("FindElementByClassNameButton").addEventListener("click", elementByClassName);

// Finding HTML Elements by CSS Selectors
function elementByCSSSelector(){
	document.querySelectorAll("p.classSelectorDemo")[0].innerHTML = "Hello World!!!";
}

document.getElementById("classSelectorDemoButton").addEventListener("click", elementByCSSSelector);

//Changing the Value of an Attribute
function changeImage(){
	document.getElementById("image").src = "landscape.jpg";
}

document.getElementById("changeAttributeButton").addEventListener("click", changeImage);

//Changing HTML Style
function changeStyle(){
	document.getElementById("changeStyleParagraph").style.color = "blue";
	document.getElementById("changeStyleParagraph").style.fontFamily = "Arial";
	document.getElementById("changeStyleParagraph").style.fontSize = "larger";
}

document.getElementById("changeStyleButton").addEventListener("click", changeStyle);


// Using Events
// The addEventListener() method
var x = document.getElementById("eventListenerDemoButton");
x.addEventListener("mouseover", mouseOverFunction);
x.addEventListener("click", clickFunction);
x.addEventListener("mouseout", mouseOutFunction);

function mouseOverFunction() {
    document.getElementById("eventListenerDemoParagraph").innerHTML += "Moused over!<br>";
}

function clickFunction() {
    document.getElementById("eventListenerDemoParagraph").innerHTML += "Clicked!<br>";
}

function mouseOutFunction() {
    document.getElementById("eventListenerDemoParagraph").innerHTML += "Moused out!<br>";
}
// Can Pass Parameters and remove event listeners. See https://www.w3schools.com/js/js_htmldom_eventlistener.asp



// Creating New HTML Elements (Nodes)
function addNewElementToEnd(){
	var para = document.createElement("p");
	var node = document.createTextNode("This is new text.");
	para.appendChild(node);
	var element = document.getElementById("exampleDiv1");
	element.appendChild(para);
}

document.getElementById("newElementButton").addEventListener("click", addNewElementToEnd);


// Creating new HTML Elements - insertBefore()
function addNewElementToStart(){
	var para = document.createElement("p");
	var node = document.createTextNode("This is new.");
	para.appendChild(node);

	var element = document.getElementById("exampleDiv2");
	var child = document.getElementById("p1");
	element.insertBefore(para,child);
}

document.getElementById("newElementButton2").addEventListener("click", addNewElementToStart);


// Removing Existing HTML Elements
function removeElement(){
	var parent = document.getElementById("exampleDiv3");
	var child = document.getElementById("pA");
	parent.removeChild(child);
}

document.getElementById("removeElementButton").addEventListener("click", removeElement);

// Replacing HTML Elements 
function replaceElement(){
	var parent = document.getElementById("exampleDiv11");
	var child = document.getElementById("1p");
	var para = document.createElement("p");
	var node = document.createTextNode("This is new.");
	para.appendChild(node);
	parent.replaceChild(para,child);
}

document.getElementById("replaceElementButton").addEventListener("click", replaceElement);

}());