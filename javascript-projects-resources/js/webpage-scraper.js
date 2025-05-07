/* ========================================================================
 * Page Scraper
 * by Christopher John Roberts
 * ========================================================================
 * contact.chris.roberts@gmail.com
 * ======================================================================== */

 /*----------------------------------- TO IMPROVE / ADD --------------------------------

JavaScript

	For link in table show code tags
	Other Images eg NHS site
	Spinner added to indicate downloading
	Audio effects for click of submit button, loading and downloading
	Timestamp of when download button clicked - added to downloaded file name
    Remove duplicates
    Ability to sort / organize results (alphabetical)
	Add additional forms of validation to check that acceptable URL entered
	If empty array returned (ie non found) show message notifying user
	If response is error - display a message
	Ability to paste in a list of web pages in csv format
		Array.foreach - append to table
		Separate  any duplicate code out into functions
	Do something with Google search (image search)
	
--------------------------------------------------------------------------------------*/

// Button Click Events
// ===================
// When urlSubmitButton is clicked call submittedURLFunction
document.getElementById("urlSubmitButton").addEventListener("click", submittedURLFunction);

// When downloadData01 & downloadData02 buttons are clicked call downloadDataFunction
document.getElementById("downloadData01").addEventListener("click", downloadDataFunction);
document.getElementById("downloadData02").addEventListener("click", downloadDataFunction);


// downloadDataFunction
// ====================
function downloadDataFunction(){
	// Get select value from drop down list (using selectValueFromDropDownList function),
	// storing it in a variable named scrapePageFor
	var scrapePageFor = selectValueFromDropDownList("scrapePageFor");
	
	// Get the url submitted storing it in a variable queryURL
	var queryURL = document.getElementById("urlField").value;

	// Define proxyURL to be concatinated with queryURL
	var proxyURL = "https://cors-anywhere.herokuapp.com/";

	// Concatinate proxyURL and queryURL storing in a variable named finalURL
	var finalURL = proxyURL + queryURL;	
	
	// If queryURL is an empty string add message to instuctions area of page
	// *** Later add other forms of validation to check that acceptable URL entered ***
	if (queryURL == "") {
    	document.getElementById("instructions").innerHTML = "You must <strong>Enter A URL</strong> the box above";
    }
	// If option 1 is selected from the drop down list call downloadLinkFunction passing in finalURL
    else if (scrapePageFor === "1"){
		downloadLinkFunction(finalURL);
	}
	// If option 2 is selected from the drop down list call downloadEmailFunction passing in finalURL
    else if (scrapePageFor === "2"){
		downloadEmailFunction(finalURL);
	}	
	// If option 3 is selected from the drop down list call downloadImageFunction passing in finalURL	
	else if (scrapePageFor === "3"){
		downloadImageFunction(finalURL);
    }		
    else {
    	document.getElementById("instructions").innerHTML = "Something went wrong";
    }
}


// submittedURLFunction
// ====================
function submittedURLFunction(){
	// Hide download buttons, remove table etc by calling the resetFunction
	resetFunction();
	
	// Get select value from drop down list (using selectValueFromDropDownList function),
	// storing it in a variable named scrapePageFor
	var scrapePageFor = selectValueFromDropDownList("scrapePageFor");

	// Get the url submitted storing it in a variable queryURL
	var queryURL = document.getElementById("urlField").value;

	// Define proxyURL to be concatinated with queryURL	
	var proxyURL = "https://cors-anywhere.herokuapp.com/";

	// Concatinate proxyURL and queryURL storing in a variable named finalURL
	var finalURL = proxyURL + queryURL;	

	// If queryURL is an empty string add message to instuctions area of page
	// *** Later add other forms of validation to check that acceptable URL entered ***	
    if (queryURL == "") {
    	document.getElementById("instructions").innerHTML = "You must <strong>Enter A URL</strong> in the box above";

		// Remove any table body on the page 
		// by passing id "generatedTable" into the removeChildNodesFromElement Function
		removeChildNodesFromElement("generatedTable");
	}
    else if (scrapePageFor === "1"){
    	// If option 1 is selected from the drop down list set the innerHTML of the table header
    	// and call linkFunction passing in queryURL and finalURL
    	document.getElementById("tableHeader").innerHTML = "<th>Link Text</th><th>Link URL</th><th>Link</th>";
    	linkFunction(queryURL, finalURL);
    }	
	
    else if (scrapePageFor === "2"){
    	// If option 2 is selected from the drop down list set the innerHTML of the table header
    	// and call emailFunction passing in queryURL and finalURL
    	document.getElementById("tableHeader").innerHTML = "<th>Email No</th><th>Email Address</th>";
    	emailFunction(queryURL, finalURL);
    }	

    else if (scrapePageFor === "3"){
    	// If option 1 is selected from the drop down list set the innerHTML of the table header
    	// and call imageFunction passing in queryURL and finalURL
    	document.getElementById("tableHeader").innerHTML = 
    		"<th>Image No</th><th>Image URL</th><th>Image</th>";
		imageFunction(queryURL, finalURL);
	}
	else {
		document.getElementById("instructions").innerHTML = "Something went wrong with your download";
	}
}


// imageFunction
// =============
function imageFunction(queryURL, finalURL) {
	// Clear instructions from any previous searches
	document.getElementById("instructions").innerHTML = ""; // could populate with default instructions
		
	// Show the spinner by setting the style of the element with the id "spinner" to "block"
	document.getElementById("spinner").style.display = "block";
		
	// Create a pagraph in the urlSubmitted Div with a string of the url submitted 
	createNewElement("p", "URL Submitted: " + queryURL, "urlSubmitted", "submittedURL")

	// Pass finalURL into a jQuery get request calling a function passing in the response to the request
	$.get(finalURL, function(response) {
		// Define allMatchingImageArray setting it to an empty array to store arrays of images in		
		var allMatchingImageArray = [];

		// Use regular expression to find all image tags in the response from the request
		// Push the image tags into allMatchingImageArray
		response.replace(/<img\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/g, function () {              // /<img([\w\W]+?)[\/]?>/g   " src="http://www.christopher-john-roberts.appspot.…ive center-block" alt="Christopher John Roberts" "
			allMatchingImageArray.push(Array.prototype.slice.call(arguments, 1, 4))						//   /<img\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/g         "http://www.christopher-john-roberts.appspot.com/co…ges/cartoons/christopher_john_roberts_reading.png"
		});

		// Define lengthOfAllMatchingImageArray for use in a for loop
		var lengthOfAllMatchingImageArray = allMatchingImageArray.length;

		// Define i for use in the for loop
		var i;

		// Loop through the allMatchingImageArray
		for (i = 0; i < lengthOfAllMatchingImageArray; i++){
			// For the current element in the loop assign it to the variable individualImageArray
			var individualImageArray = allMatchingImageArray[i];
			// Set the variable individualImage to the first element of the individualImageArray
			var individualImage = individualImageArray[0];

			var imageNo = i + 1;
			var imageTableRowId = "imageNo" + imageNo;
			
			// Create a new <tr> element to be appended to the table element with id="generatedTable"		 
			createNewElement("tr", "will be replaced", "generatedTable", imageTableRowId);

			// Set the innerHTML of the table header
			document.getElementById(imageTableRowId).innerHTML = 
				"<td>" + imageNo + "</td><td>" + individualImage + "</td><td>" + "<img src=\"" + 
				individualImage + "\" class=\"img-fluid img-responsive center-block\"  />" + "</td>";
		}
		
		// Hide the spinner by setting the style of the element with the id "spinner" to "none" 
		document.getElementById("spinner").style.display = "none";

		// Display download button's by setting their elements to "block"
		document.getElementById("downloadData01").style.display = "block";
		document.getElementById("downloadData02").style.display = "block";		
	});
};


// emailFunction
// =============
	function emailFunction(queryURL, finalURL) {
	// Clear instructions from any previous searches
	document.getElementById("instructions").innerHTML = ""; // could populate with default instructions

	// Show the spinner by setting the style of the element with the id "spinner" to "block"
	document.getElementById("spinner").style.display = "block";

	// Create a pagraph in the urlSubmitted Div with a string of the url submitted 
	createNewElement("p", "URL Submitted: " + queryURL, "urlSubmitted", "submittedURL")

	// Pass finalURL into a jQuery get request calling a function passing in the response to the request
	$.get(finalURL, function(response) {
		// Define allMatchingImageArray setting it to an empty array to store arrays of emails in			
		var allMatchingEmailsArray = [];

		// Use regular expression to find all email tags in the response from the request
		// Push the email tags into allMatchingEmailsArray		
		response.replace(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi, function () {
			allMatchingEmailsArray.push(Array.prototype.slice.call(arguments, 1, 4))
		});

		// Define lengthOfAllMatchingImageArray for use in a for loop		
		var lengthOfAllMatchingEmails = allMatchingEmailsArray.length;

		// Define i for use in the for loop		
		var i;

		// Loop through allMatchingEmailsArray		
		for (i = 0; i < lengthOfAllMatchingEmails; i++){
			// For the current element in the loop assign it to the variable individualEmailArray
			var individualEmailArray = allMatchingEmailsArray[i];			
			// Set the variable individualEmail to the first element of the individualEmailArray
			var individualEmail = individualEmailArray[0];

			var emailNo = i + 1
			var emailTableRowId = "emailNo" + emailNo;

			// Create a new <tr> element to be appended to the table element with id="generatedTable"
			var paragraph = createNewElement("tr", "will be replaced", "generatedTable", emailTableRowId);

			// Set the innerHTML of the table header
			document.getElementById(emailTableRowId).innerHTML = 
				"<td>" + (i + 1) + "</td><td>" + individualEmail + "</td>";
		}

		// Hide the spinner by setting the style of the element with the id "spinner" to "none" 		
		document.getElementById("spinner").style.display = "none";

		// Display download button's by detting their elements to "block"
		document.getElementById("downloadData01").style.display = "block";
		document.getElementById("downloadData02").style.display = "block";		
	});
};


// linkFunction
// =============
function linkFunction(queryURL, finalURL) {
	// Clear instructions from any previous searches	
	document.getElementById("instructions").innerHTML = ""; // could populate with default instructions

	// Show the spinner by setting the style of the element with the id "spinner" to "block"
	document.getElementById("spinner").style.display = "block";

	// Create a pagraph in the urlSubmitted Div with a string of the url submitted 	
	createNewElement("p", "URL Submitted: " + queryURL, "urlSubmitted", "submittedURL")

	// Pass finalURL into a jQuery get request calling a function passing in the response to the request
	$.get(finalURL, function(response) {
		// Define allMatchingLinksArray setting it to an empty array to store arrays of links in	
		var allMatchingLinksArray = [];

		// Use regular expression to find all link tags in the response from the request
		// Push the link tags into allMatchingLinksArray		
		response.replace(/[^<]*(<a href="([^"]+)">([^<]+)<\/a>)/g, function () {
			allMatchingLinksArray.push(Array.prototype.slice.call(arguments, 1, 4))
		});

		// Define lengthOfAllMatchingLinksArray for use in a for loop	
		var lengthOfAllMatchingLinksArray = allMatchingLinksArray.length;

		// Define i for use in the for loop	
		var i;

		// Loop through allMatchingLinksArray		
		for (i = 0; i < lengthOfAllMatchingLinksArray; i++){
			// For the current element in the loop assign it to the variable individualLinkArray
			var individualLinkArray = allMatchingLinksArray[i];

			// Set the variable linkTitle to the third element of the individualLinkArray			
			var linkTitle = individualLinkArray[2];
			// Set the variable linkURL to the second element of the individualLinkArray			
			var linkURL = individualLinkArray[1];
			// Set the variable link to the first element of the individualLinkArray			
			var link = individualLinkArray[0];

			var linkNo = i + 1
			var linkTableRowId = "linkNo" + linkNo;

			// Create a new <tr> element to be appended to the table element with id="generatedTable"					 
			var paragraph = createNewElement("tr", "will be replaced", "generatedTable", linkTableRowId);
			
			// Set the innerHTML of the table header			
			document.getElementById(linkTableRowId).innerHTML = 
			"<td>" + linkTitle + "</td><td>" + linkURL + "</td><td>" + link + "</td>";
		}

		// Hide the spinner by setting the style of the element with the id "spinner" to "none" 		
		document.getElementById("spinner").style.display = "none";

		// Display download button's by detting their elements to "block"
		document.getElementById("downloadData01").style.display = "block";
		document.getElementById("downloadData02").style.display = "block";		
	});
};


// downloadImageFunction
// =====================
function downloadImageFunction(finalURL) {
	// Pass finalURL into a jQuery get request calling a function passing in the response to the request
	$.get(finalURL, function(response) {
		// Define allMatchingImageArray setting it to an empty array to store arrays of images in
		var allMatchingImageArray = [];

		// Use regular expression to find all image tags in the response from the request
		// Push the link tags into allMatchingImageArray	
		response.replace(/<img\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/g, function () {              // /<img([\w\W]+?)[\/]?>/g   " src="http://www.christopher-john-roberts.appspot.…ive center-block" alt="Christopher John Roberts" "
			allMatchingImageArray.push(Array.prototype.slice.call(arguments, 1, 4))						//   /<img\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/g         "http://www.christopher-john-roberts.appspot.com/co…ges/cartoons/christopher_john_roberts_reading.png"
		});

		// Define lengthOfAllMatchingImageArray for use in a for loop	 
		var lengthOfAllMatchingImageArray = allMatchingImageArray.length;

		// Define allMatchingImageArrayForCSV setting it to an empty array to data from for loop
		var allMatchingImageArrayForCSV = [];
		
		var i;
		for (i = 0; i < lengthOfAllMatchingImageArray; i++){
			var individualImageArray = allMatchingImageArray[i];
			var individualImage = individualImageArray[0];
			var imageNo = i + 1;

			var newArray = [imageNo, individualImage, 
				"<img src=\"" + individualImage + 
				"\" class=\"img-fluid img-responsive center-block\"  />"];

			allMatchingImageArrayForCSV.push(newArray);
		}	
			
		allMatchingImageArrayForCSV.unshift(["Image No", "Image URL", "Image"]);

		let csvContent = "data:text/csv;charset=utf-8,";
		allMatchingImageArrayForCSV.forEach(function(rowArray){
			let row = rowArray.join(",");
			csvContent += row + "\r\n";
		}); 

		
		var encodedUri = encodeURI(csvContent);
		var link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", "webpage_images_data.csv");
		document.body.appendChild(link); // Required for FF

		link.click(); // This will download the data file named "my_data.csv"	
	});
};


// downloadEmailFunction
// =====================
function downloadEmailFunction(finalURL) {
	// Pass finalURL into a jQuery get request calling a function passing in the response to the request
	$.get(finalURL, function(response) {

		// Define allMatchingEmailsArray setting it to an empty array to store arrays of emails in
		var allMatchingEmailsArray = [];

		// Use regular expression to find all emails in the response from the request
		// Push the emails into allMatchingEmailsArray	
		response.replace(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi, function () {
			allMatchingEmailsArray.push(Array.prototype.slice.call(arguments, 1, 4))
		});

		// Define lengthOfAllMatchingEmails for use in a for loop	 
		var lengthOfAllMatchingEmails = allMatchingEmailsArray.length; 
		
		// Define allMatchingEmailsArrayForCSV setting it to an empty array to data from for loop
		var allMatchingEmailsArrayForCSV = [];
		
		var i;
		for (i = 0; i < lengthOfAllMatchingEmails; i++){
			allMatchingEmailsArray[i].pop();

			allMatchingEmailsArray[i].pop();

			allMatchingEmailsArray[i].unshift(i + 1);
			allMatchingEmailsArrayForCSV.push(allMatchingEmailsArray[i]);
		}	
		
		allMatchingEmailsArrayForCSV.unshift(["Email No", "Email Address"]);
	
		let csvContent = "data:text/csv;charset=utf-8,";
		allMatchingEmailsArrayForCSV.forEach(function(rowArray){
			let row = rowArray.join(",");
			csvContent += row + "\r\n";
		}); 

		var encodedUri = encodeURI(csvContent);
		var link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", "webpage_emails_data.csv");
		document.body.appendChild(link); // Required for FF

		link.click(); // This will download the data file named "my_data.csv"
	});
};


// downloadLinkFunction
// ====================
function downloadLinkFunction(finalURL) {
	// Pass finalURL into a jQuery get request calling a function passing in the response to the request	
	$.get(finalURL, function(response) {

		// Define allMatchingEmailsArray setting it to an empty array to store arrays of emails in
		var allMatchingLinksArray = [];

		// Use regular expression to find all emails in the response from the request
		// Push the emails into allMatchingEmailsArray	
		response.replace(/[^<]*(<a href="([^"]+)">([^<]+)<\/a>)/g, function () {
			allMatchingLinksArray.push(Array.prototype.slice.call(arguments, 1, 4))
		});
		
		// Define lengthOfAllMatchingEmails for use in a for loop
		var lengthOfAllMatchingLinksArray = allMatchingLinksArray.length;

		// Define allMatchingEmailsArrayForCSV setting it to an empty array to data from for loop		
		var allMatchingLinksArrayForCSV = [];
		
		var i;
		for (i = 0; i < lengthOfAllMatchingLinksArray; i++){
			var individualLinkArray = allMatchingLinksArray[i];
			var linkTitle = individualLinkArray[2];  
			var linkURL = individualLinkArray[1];
			var link = individualLinkArray[0];			
			var newArray = [linkTitle, linkURL, link];
			allMatchingLinksArrayForCSV.push(newArray); 
		}
	
		allMatchingLinksArrayForCSV.unshift(["Link Text", "Link URL", "Link"]);
	
		let csvContent = "data:text/csv;charset=utf-8,";
		allMatchingLinksArrayForCSV.forEach(function(rowArray){
			let row = rowArray.join(",");
			csvContent += row + "\r\n";
		}); 

		var encodedUri = encodeURI(csvContent);
		var link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", "webpage_links_data.csv");
		document.body.appendChild(link); // Required for FF

		link.click(); // This will download the data file named "my_data.csv"
	});
};


// resetFunction
// =============
function resetFunction() {
	// Hide download button by setting their style to "none"
	document.getElementById("downloadData01").style.display = "none";
	document.getElementById("downloadData02").style.display = "none";
	
	// Remove any table body on the page 
	// by passing id "generatedTable" into the removeChildNodesFromElement Function
	removeChildNodesFromElement("generatedTable");
	
	// Remove any children of the urlSubmitted div
	// by passing id "urlSubmitted" into the removeChildNodesFromElement Function
	removeChildNodesFromElement("urlSubmitted");

	// Create a table header using the createNewElement() function 
	// by passing in tr (the element to create), a string that will be replaced, 
	// generatedTable (the existing element to append to), and tableHeader (the new elements id)
	var tableHeader = createNewElement("tr", "will be replaced", "generatedTable", "tableHeader");
}


// createNewElement Function
// =========================
function createNewElement(tagName, text, existingElementIdToAppendTo, newElementId) {
  // create new html element to put text into
  var para = document.createElement(tagName);
  // add an id attribute to the new element
  para.setAttribute("id", newElementId);
  //create new text node to put text into
  var node = document.createTextNode(text);
  //append the text node to the new element
  para.appendChild(node);

  //find existing element by ID
  var element = document.getElementById(existingElementIdToAppendTo);
  //append the new element the existing element
  element.appendChild(para);
}


// removeChildNodesFromElement Function
// ====================================
function removeChildNodesFromElement(id) {
	var myNode = document.getElementById(id);
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	}
}


// selectValueFromDropDownList Function
// ====================================
function selectValueFromDropDownList(id) {
	var element = document.getElementById(id);
	return element.options[element.selectedIndex].value;
}
