/* ========================================================================
 * Coin Toss
 * by Christopher John Roberts
 * ========================================================================
 * contact.chris.roberts@gmail.com
 * 
 * ======================================================================== */

 /*----------------------------------- TO IMPROVE / ADD --------------------------------

JavaScript

	Later Animate coin flipping
		Alternate between heads and tails before finishing on result
	Download Table as .csv option
	Multiple reset buttons
	Audio effect for reset
	Audio effect for heads
	Audio effect for tails
	Select between different coins / change theme for new coin?
	Easter egg messages after 10, 100, 1000 tosses


Look
	About this project in footer
	Instructions in dropdown

	Color of graphs change to match rest of css
		General look of charts (Legend size, colour etc to match rest of page)
	Table responsive
		Striped etc
	Font awesome on buttons

--------------------------------------------------------------------------------------*/

// Declare total variables and assign to zero
var flipsTotal = 0;
var headsTotal = 0;
var tailsTotal = 0;

// Declare array for chart data
var chartArrayData = [headsTotal, tailsTotal];

// Chart look settings		***-------		Amend later - see to do list above 		 -------***
//							*** (can override individual settings in setup chart functions) ***
Chart.defaults.global.defaultFontColor = '#000000';
Chart.defaults.global.defaultFontFamily = 'Tahoma, Geneva, sans-serif';
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontStyle = 'normal';
Chart.defaults.global.layout.padding = 0;
Chart.defaults.global.legend.display = true;
Chart.defaults.global.legend.position = "bottom";
Chart.defaults.global.legend.labels.fontSize = 16;
Chart.defaults.global.title.display = true;
Chart.defaults.global.title.fontSize = 16;
Chart.defaults.global.title.fontColor = '#000000';
Chart.defaults.global.tooltips.backgroundColor = 'rgba(0,0,0,0.8)';
Chart.defaults.global.tooltips.bodyFontSize = 12;
Chart.defaults.global.tooltips.bodyFontColor = "#ffffff";

// Declare chart variables
var coinPieChart;
var coinBarChart;
var pieChartElement = document.getElementById('pieChart').getContext('2d');
var barChartElement = document.getElementById("barChart").getContext('2d');

// Declare total 
var headsTotalArray = headsTotal;
var tailsTotalArray = tailsTotal;

// Set up empty charts using functions
setUpPieChart(chartArrayData);
setUpBarChart(headsTotalArray, tailsTotalArray);

// Create a table header using createNewElement() function 
// Passing in tr (the element to create), a string that will be replaced, runningTalley (the exisitng element to append to), and tableHeader (the new elements id)
var tableHeader = createNewElement("tr", "will be replaced", "runningTalley", "tableHeader");

// When resetButton is clicked call resetFunction
document.getElementById("resetButton").addEventListener("click", resetFunction);

// Select the HTML element with the id "tableHeader" and set its inner HTML to <th>Toss Number</th><th>Time of Toss</th><th>Result</th>
document.getElementById("tableHeader").innerHTML = "<th>Toss Number</th><th>Time of Toss</th><th>Result</th>";
  
// When the flipCoinButton is clicked pass the debounce function the playAudioFunction (now an anonymous function) and the fire rate limit in milliseconds
document.getElementById("flipCoinButton").addEventListener("click", debounce(function() {
	var coinAudio = document.getElementById("coinAudio"); 
	coinAudio.play(); 
}, 500));  

// When the flipCoinButton is clicked pass the debounce function the flipCoinFunction (now an anonymous function) and the fire rate limit in milliseconds
// flipCoinFunction
// ================
document.getElementById("flipCoinButton").addEventListener("click", debounce(function() {
	
	// When flipCoinFunction is called (when the user presses flipCoinButton) create a timestamp 
	var dateObj = new Date();
	var timeOfFlip = dateObj.toLocaleTimeString();

	// Pick a number at random 0 or 1
	var random = Math.floor(Math.random() * 2);
	var coin;
	var headsImage = "/javascript-projects-resources/imgs/heads.jpg";
	var tailsImage = "/javascript-projects-resources/imgs/tails.jpg";
	var finalImage;
 

	/*###################################################
 	#												  	#
	#					Later 							#
	#					add 							#
	#					Animation 						#
	#					Here 							#
	#													#
	#					spining? alternating images?	#
	#													#
	###################################################*/


	// Add to total number of flips current session
	flipsTotal += 1;

	// If random number is 1 add 1 to heads count
	if (random === 1) {
		coin = "Heads";
		finalImage = headsImage;
		headsTotal += 1;
		document.getElementById("headsOrTails").innerHTML = "Heads"; 
	}

	// If random number is 0 add 1 to tails count
	if (random === 0) {
		coin = "Tails";
		finalImage = tailsImage;
		tailsTotal += 1;
		document.getElementById("headsOrTails").innerHTML = "Tails";
	} 

	document.getElementById("flipsTotal").innerHTML = flipsTotal;
	document.getElementById("headsTotal").innerHTML = headsTotal;
	document.getElementById("tailsTotal").innerHTML = tailsTotal;	
	
	
	// Display finalImage of heads or tails
	document.getElementById("coinImage").src = finalImage;

	// Create a new <tr> element to be appended to the table element with id="runningTalley"
	var tableRowId = "flipNo" + flipsTotal;
 
	var paragraph = createNewElement("tr", "will be replaced", "runningTalley", tableRowId);

	document.getElementById(tableRowId).innerHTML = 
	"<td>" + flipsTotal + "</td><td>" + timeOfFlip + "</td><td>" + coin + "</td>";
	
	// Call functions to create charts
	// First if the charts already exist destroy the previous one and then create the new one
	
	chartArrayData = [headsTotal, tailsTotal];
	
	if (coinPieChart) {
		coinPieChart.destroy();
    }
	
	setUpPieChart(chartArrayData); 
	
	if (coinBarChart) {
		coinBarChart.destroy();
    }
	
	headsTotalArray = [headsTotal];
	tailsTotalArray = [tailsTotal]; 
	
	setUpBarChart(headsTotalArray, tailsTotalArray);	
	
}, 500));


// resetFunction
// =============
function resetFunction() {
	// Set all total variables back to zero
	flipsTotal = 0;
	headsTotal = 0;
	tailsTotal = 0;

	// chartArrayData back to starting values
	chartArrayData = [headsTotal, tailsTotal];
	
	// Set HTML elements back to their starting values
	document.getElementById("headsOrTails").innerHTML = "";
	document.getElementById("coinImage").src = "/javascript-projects-resources/imgs/heads.jpg";
	document.getElementById("flipsTotal").innerHTML = "0";
	document.getElementById("headsTotal").innerHTML = "0";
	document.getElementById("tailsTotal").innerHTML = "0";
	
	// Remove table by . . .
	// Calling removeChildNodesFromElement() function passing in the HTML element with the id of "runningTalley"
	removeChildNodesFromElement("runningTalley");

	// Re-create table header using the createNewElement() function 
	var tableHeader = createNewElement("tr", "will be replaced", "runningTalley", "tableHeader");
	document.getElementById("tableHeader").innerHTML = "<th>Toss Number</th><th>Time of Toss</th><th>Result</th>";
	
	// Call functions to create charts
	// First, if the charts already exist, destroy them and then create new one's
	if (coinPieChart) {
		coinPieChart.destroy();
    }
	
	setUpPieChart(chartArrayData); 
	
	if (coinBarChart) {
		coinBarChart.destroy();
    }
	
	// Turn heads and tails total's into arrays for use in the setting up chart function
	headsTotalArray = [headsTotal];
	tailsTotalArray = [tailsTotal];
	
	setUpBarChart(headsTotalArray, tailsTotalArray);	
}


// createNewElement Function
// =========================
function createNewElement(tagName, text, existingElementIdToAppendTo, newElementId) {
  // Create new HTML element to put text into
  var para = document.createElement(tagName);
  // Add an id attribute to the new element
  para.setAttribute("id", newElementId);
  // Create new text node to put text into
  var node = document.createTextNode(text);
  // Append the text node to the new element
  para.appendChild(node);

  // Find existing element by id
  var element = document.getElementById(existingElementIdToAppendTo);
  // Append the new element the existing element
  element.appendChild(para);
}


// removeChildNodesFromElement Function
// ====================================
function removeChildNodesFromElement(elementId) {
  var myNode = document.getElementById(elementId);
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
}


// setUpPieChart Function
// ======================
function setUpPieChart(chartArrayData) {
	coinPieChart = new Chart(pieChartElement,{
		type: 'pie',
		data: {
			datasets: [{
				data: chartArrayData,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)'
				],
				hoverBackgroundColor: [
					'rgba(255, 99, 132)',
					'rgba(54, 162, 235)'           
				],
				hoverBorderColor: [
					'rgba(255, 99, 132)',
					'rgba(54, 162, 235)'          
				],
				borderWidth: 1,
				hoverBorderWidth: 5,
				label: ["Heads or Tails"]
			}],
			labels: [
				'Heads',
				'Tails'
			]
		},
	   options: {
			cutoutPercentage: 0,
			responsive: true,
			responsiveAnimationDuration: 0,
			legend: {
				position: 'bottom',
			},			
			title: {
				display: true,
				text: 'Heads or Tails Pie Chart'
			},

	   }
	});	
}


// setUpBarChart Function
// ======================
function setUpBarChart(headsTotalArray, tailsTotalArray) {
	coinBarChart = new Chart(barChartElement, {
		type: 'bar',
		data: {
			datasets: [{
				data: headsTotalArray,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)'
				],
				hoverBackgroundColor: [
					'rgba(255, 99, 132)'          
				],
				hoverBorderColor: [
					'rgba(255, 99, 132)'         
				], 
				borderWidth: 1,
				hoverBorderWidth: 5,
				label: 'Heads'
			}, {
				data: tailsTotalArray,
				backgroundColor: [
					'rgba(54, 162, 235, 0.2)'
				],
				borderColor: [
					'rgba(54, 162, 235, 1)'
				],
				hoverBackgroundColor: [
					'rgba(54, 162, 235)'         
				],
				hoverBorderColor: [
					'rgba(54, 162, 235)'      
				], 
				borderWidth: 1,
				hoverBorderWidth: 5,
				label: 'Tails'
			}],
		},
		options: {
			responsive: true,
			responsiveAnimationDuration: 0,
			legend: {
				position: 'bottom',
				labels: {
                // This more specific font property overrides the global property
                fontColor: '#000000'
				}	
			},
			title: {
				display: true,
				text: 'Heads or Tails Bar Chart'
			},
			layout: {
				// This more specific property overrides the global property
				padding: {
					left: 0,
					right: 0,
					top: 0,
					bottom: 0
				}
			},	
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});
}



// debounce Function
// =================
//
// To ensure task doesn't fire to often
// Limits the rate at which a function can fire
//
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
