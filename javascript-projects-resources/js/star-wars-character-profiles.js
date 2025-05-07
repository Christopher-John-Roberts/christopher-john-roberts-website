/* ========================================================================
 * Star Wars Character Profile's
 * by Christopher John Roberts
 * ========================================================================
 * contact.chris.roberts@gmail.com
 * ======================================================================== */

/*----------------------------------- TO IMPROVE / ADD --------------------------------

JavaScript

  Starwars theme playing in background (button to turn it off)
  Audio effect for sumbit button
  Audio effect for wookie button
  Terrain array capitalise each variable

Look
  Instructions in dropdown
  Add all planet images images. save as x.jpg 24 - 61
  Improve CSS for text, select box and buttons
  Twinkerly background  
  Two different CSS themes to choose from - light side & dark side
  Buttons to take you to different sections
    Only revealed when a character has been chosen

-------------------------------------------------------------------------------------*/


// Event Listeners On Buttons
// ==========================
// When characterButton is clicked call characterFunction
document.getElementById("characterButton").addEventListener("click", characterFunction);
// When characterButtonWookiee is clicked call characterFunctionWookiee
document.getElementById("characterButtonWookiee").addEventListener("click", characterFunctionWookiee);


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


// loadDocSync() Function
// ======================
// Same as above however synchronous rather than asynchronous
function loadDocSync(url, cFunction) {
  var xhttp;
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
    } else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
  };
  url += "?t=" + Math.random()
  // synchronous so that films are processed in order of release date
  xhttp.open("GET", url, false);
  xhttp.send();
}


// loadDocWookiee() Function
// =========================
function loadDocWookiee(url, cFunction) {
  var xhttp;
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
    } else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
  };
  url += "?format=wookiee";
  xhttp.open("GET", url, true);
  xhttp.send();
}


// capitalizeFirstLetter Function
// ==============================
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


// selectValueFromDropDownList Function
// ====================================
function selectValueFromDropDownList(id) {
  var e = document.getElementById (id);
  return e.options[e.selectedIndex].value;
}


// removeChildNodesFromElement Function
// ====================================
function removeChildNodesFromElement(elementId) {
  var myNode = document.getElementById(elementId);
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
}


// parseResponseText Function
// ==========================
function parseResponseText(xhttp) {
  return JSON.parse(xhttp.responseText);
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


// filmFunction
// ============
function filmFunction(xhttp){

  // Store film in an object named filmObj
  var filmObj = parseResponseText(xhttp);

  // Save properties of filmObj into variables
  filmTitle = filmObj.title;
  filmEpisodeNo = filmObj.episode_id;
  filmOpening = filmObj.opening_crawl;
  filmDirector = filmObj.director;
  filmProducer = filmObj.producer;
  filmReleaseDate = filmObj.release_date;
  
  var episodeImage;
  
  if (filmEpisodeNo == 1){
	  episodeImage = "<span class=\"swg swg-ep1 swg-6x swg-fw\"></span><br />"
  }
  else if (filmEpisodeNo == 2){
	  episodeImage = "<span class=\"swg swg-ep2 swg-6x\"></span><br />"
  }
  else if (filmEpisodeNo == 3){
	  episodeImage = "<span class=\"swg swg-ep3 swg-6x\"></span><br />"
  }
  else if (filmEpisodeNo == 4){
	  episodeImage = "<span class=\"swg swg-ep4 swg-6x\"></span><br />"
  }
  else if (filmEpisodeNo == 5){
	  episodeImage = "<span class=\"swg swg-ep5 swg-6x\"></span><br />"
  }
  else if (filmEpisodeNo == 6){
	  episodeImage = "<span class=\"swg swg-ep6 swg-6x\"></span><br />"
  }
  else if (filmEpisodeNo == 7){
	  episodeImage = "<span class=\"swg swg-sw-alt swg-6x\"></span><br />"
  }


  // Create an id for a new element
  var divId = "Ep" + filmEpisodeNo;

  // Create a new div element to be appended to the element with id="films"
  var div = createNewElement("div", "will be replaced", "films", divId);

  document.getElementById(divId).innerHTML = 
    "<h3>" + filmTitle + " - " + "Episode: " + filmEpisodeNo + "</h3>" + 
	  "<div class=\"filmIcon\">" +
	  episodeImage + "</div>" +
    "<p><strong>Director: </strong>" + filmDirector + "</p>" +
    "<p><strong>Producer(s): </strong>" + filmProducer + "</p>" +
    "<p><strong>Release Date: </strong>" + filmReleaseDate + "</p><br />" +
    "<p>" + filmOpening + "</p><br /><br /><br />";
}


// speciesFunction
// ===============
function speciesFunction(xhttp){

  // Store species in an object named speciesObj
  var speciesObj = parseResponseText(xhttp);

  // Save properties of speciesObj into variables
  var speciesName = speciesObj.name;
  var speciesClassification = speciesObj.classification;
  var speciesDesignation = speciesObj.designation;
  var speciesAverageHeight = speciesObj.average_height;
  var speciesAverageLifespan = speciesObj.average_lifespan;
  var speciesLanguage = speciesObj.language;
  var speciesHomeworldURL = speciesObj.homeworld;

  // Capitalize the first letter of some of the properties
  speciesClassification = capitalizeFirstLetter(speciesClassification);
  speciesDesignation = capitalizeFirstLetter(speciesDesignation);
  speciesAverageHeight = capitalizeFirstLetter(speciesAverageHeight);
  speciesAverageLifespan = capitalizeFirstLetter(speciesAverageLifespan);  
  speciesLanguage = capitalizeFirstLetter(speciesLanguage); 

  // Create an id for a new element
  var divId = speciesName;

  // Create a new div element to be appended to the element with id="species"
  var div = createNewElement("div", "will be replaced", "species", divId);

  // Print stats to the new element
  document.getElementById(divId).innerHTML = 
    "<h2 class=\"species\">Species: " + speciesName + " </h2>" +
  	"<table class=\"table table-responsive table-condensed\">" +
  	"<tbody>" +
  	"<tr><td><strong>Classification: </strong></td><td>" + speciesClassification + "</td></tr>" +
  	"<tr><td><strong>Designation: </strong></td><td>" + speciesDesignation + "</td></tr>" +
  	"<tr><td><strong>Average Height: </strong></td><td>" + speciesAverageHeight + " centimeters" + "</td></tr>" +
  	"<tr><td><strong>Average Lifespan: </strong></td><td>" + speciesAverageLifespan + " years" + "</td></tr>" +
  	"<tr><td><strong>Language: </strong></td><td>" + speciesLanguage  + "</td></tr>" +
  	"</tbody>" +
  	"</table>" +
  	"<div id=\"species\"></div>";
	    	  	  
/*
      "<h2>Species: " + speciesName + " </h2>" +
      "<p><strong>Classification: </strong>" + speciesClassification + "</p>" +
      "<p><strong>Designation: </strong>" + speciesDesignation + "</p>" +
      "<p><strong>Average Height: </strong>" + speciesAverageHeight + " centimeters" + "</p>" +
      "<p><strong>Average Lifespan: </strong>" + speciesAverageLifespan + " years" + "</p>" +
      "<p><strong>Language: </strong>" + speciesLanguage + "</p>";
*/	  
	  
}


// speciesFunctionWookiee
// ======================
function speciesFunctionWookiee(xhttp){

  // Store species in an object named speciesObj
  var speciesObj = parseResponseText(xhttp);

  // Save properties of speciesObj into variables
  var speciesName = speciesObj.whrascwo;
  var speciesClassification = speciesObj.oaanraccahwwahoaraaoahoowh;
  var speciesDesignation = speciesObj.wawocahrrwhraaoahoowh;
  var speciesAverageHeight = speciesObj.rahoworcrarrwo_acwoahrracao;
  var speciesAverageLifespan = speciesObj.rahoworcrarrwo_anahwwwocakrawh;
  var speciesLanguage = speciesObj.anrawhrrhurarrwo;
  var speciesHomeworldURL = speciesObj.acooscwoohoorcanwa;

  // Capitalize the first letter of some of the properties
  speciesClassification = capitalizeFirstLetter(speciesClassification);
  speciesDesignation = capitalizeFirstLetter(speciesDesignation);
  speciesAverageHeight = capitalizeFirstLetter(speciesAverageHeight);
  speciesAverageLifespan = capitalizeFirstLetter(speciesAverageLifespan);  
  speciesLanguage = capitalizeFirstLetter(speciesLanguage); 

  // Create an id for a new element
  var divId = speciesName;

  // Create a new div element to be appended to the element with id="species"
  var div = createNewElement("div", "will be replaced", "species", divId);

  // Print stats to the new element
  document.getElementById(divId).innerHTML = 
    "<h2 class=\"species\">Whrascwo: " + speciesName + " </h2>" +
  	"<table class=\"table table-responsive table-condensed\">" +
  	"<tbody>" +
  	"<tr><td><strong>Oaanraccahwwahoaraaoahoowh: </strong></td><td>" + speciesClassification + "</td></tr>" +
  	"<tr><td><strong>Wawocahrrwhraaoahoowh: </strong></td><td>" + speciesDesignation + "</td></tr>" +
  	"<tr><td><strong>Rahoworcrarrwo Acwoahrracao: </strong></td><td>" + speciesAverageHeight + " cm" + "</td></tr>" +
  	"<tr><td><strong>Rahoworcrarrwo Anahwwwocakrawh: </strong></td><td>" + speciesAverageLifespan + " yrs" + "</td></tr>" +
  	"<tr><td><strong>Anrawhrrhurarrwo: </strong></td><td>" + speciesLanguage  + "</td></tr>" +
  	"</tbody>" +
  	"</table>" +
  	"<div id=\"species\"></div>";
	  	  
/*
      "<h2>Whrascwo: " + speciesName + " </h2>" +
      "<p><strong>Oaanraccahwwahoaraaoahoowh: </strong>" + speciesClassification + "</p>" +
      "<p><strong>Wawocahrrwhraaoahoowh: </strong>" + speciesDesignation + "</p>" +
      "<p><strong>Rahoworcrarrwo Acwoahrracao: </strong>" + speciesAverageHeight + " cm" + "</p>" +
      "<p><strong>Rahoworcrarrwo Anahwwwocakrawh: </strong>" + speciesAverageLifespan + " yrs" + "</p>" +
      "<p><strong>Anrawhrrhurarrwo: </strong>" + speciesLanguage + "</p>";
*/
	
}


// homeworldFunction
// =================
function homeworldFunction(xhttp){

  // Store homeworld in an object named homeworldObj  
  var homeworldObj = parseResponseText(xhttp);

  // Save properties of homeworldObj into variables
  var homeworldName = homeworldObj.name;
  var homeworldClimate =  homeworldObj.climate; 
  var homeworldTerrain =  homeworldObj.terrain;
  var homeworldOrbitalPeriod = homeworldObj.orbital_period;
  var homeworldRotationalPeriod = homeworldObj.rotation_period;
  var homeworldDiameter = homeworldObj.diameter;
  var homeworldPopulation = homeworldObj.population;
  var homeworldSurfaceWater = homeworldObj.surface_water;
  var homeworldUrl = homeworldObj.url;

  // Capitalize the first letter of some of the properties
  homeworldClimate = capitalizeFirstLetter(homeworldClimate);
  homeworldTerrain = capitalizeFirstLetter(homeworldTerrain);

  if (homeworldName == "unknown") {
     document.getElementById("homeworld").innerHTML = "<h2>Home World: Unknown</h2>";
  }
  else {

  // Get planet id to use in img string
  var array = homeworldUrl.split("/");
  var lastElement = array.pop();
  var id = array.pop();    

  // Print stats to the element with id="homeworld"
  document.getElementById("homeworldArea1").innerHTML = 
    "<h2 class=\"homeWorld\">Home World: " + homeworldName + " </h2>" +
  	"<table class=\"table table-responsive table-condensed\">" +
  	"<tbody>" +
  	"<tr><td><strong>Climate: </strong></td><td>" + homeworldClimate + "</td></tr>" +
  	"<tr><td><strong>Terrain: </strong></td><td>" + homeworldTerrain + "</td></tr>" +
  	"<tr><td><strong>Surface Water: </strong></td><td>" + homeworldSurfaceWater + "%" + "</td></tr>" +
  	"<tr><td><strong>Diameter: </strong></td><td>" + homeworldDiameter + " km" + "</td></tr>" +
  	"<tr><td><strong>Rotational Period: </strong></td><td>" + homeworldRotationalPeriod  + " hours" + "</td></tr>" +
  	"<tr><td><strong>Orbital Period: </strong></td><td>" + homeworldOrbitalPeriod + " days" + "</td></tr>" +
  	"<tr><td><strong>Population: </strong></td><td>" + homeworldPopulation + "</td></tr>" +
  	"</tbody>" +
  	"</table>" +
  	"<div id=\"species\"></div>";     

/*
    "<h2>Home World: " + homeworldName + " </h2>" +
    "<p><strong>Climate: </strong>" + homeworldClimate + "</p>" +
    "<p><strong>Terrain: </strong>" + homeworldTerrain + "</p>" +
    "<p><strong>Surface Water: </strong>" + homeworldSurfaceWater + "%" + "</p>" +
    "<p><strong>Diameter: </strong>" + homeworldDiameter + " km" + "</p>" +
    "<p><strong>Rotational Period: </strong>" + homeworldRotationalPeriod + " hours" + "</p>" +
    "<p><strong>Orbital Period: </strong>" + homeworldOrbitalPeriod + " days" + "</p>" +
    "<p><strong>Population: </strong>" + homeworldPopulation + "</p>";     
*/
	
  document.getElementById("homeworldArea2").innerHTML = 
  	"<p class=\"h2\">" + "&nbsp;" + "</h2>" +  
  	"<img src=\"/javascript-projects-resources/imgs/starwars_images/planets/" + id +".jpg\" class=\"img-fluid img-responsive img-rounded center-block planetImageBorder\">";
  }
}


// homeworldFunctionWookiee
// ========================
function homeworldFunctionWookiee(xhttp){

  // Store homeworld in an object named homeworldObj  
  var homeworldObj = parseResponseText(xhttp);

  // save properties of homeworldObj into variables
  var homeworldName = homeworldObj.whrascwo;
  var homeworldClimate =  homeworldObj.oaanahscraaowo; 
  var homeworldTerrain =  homeworldObj.aoworcrcraahwh;
  var homeworldOrbitalPeriod = homeworldObj.oorcrhahaoraan_akworcahoowa;
  var homeworldRotationalPeriod = homeworldObj.rcooaoraaoahoowh_akworcahoowa;
  var homeworldDiameter = homeworldObj.waahrascwoaoworc;
  var homeworldPopulation = homeworldObj.akooakhuanraaoahoowh;
  var homeworldSurfaceWater = homeworldObj.churcwwraoawo_ohraaoworc;
  var homeworldUrl = homeworldObj.hurcan;


  // Capitalize the first letter of some of the properties
  homeworldClimate = capitalizeFirstLetter(homeworldClimate);
  homeworldTerrain = capitalizeFirstLetter(homeworldTerrain);

  if (homeworldName == "unknown") {
     document.getElementById("homeworld").innerHTML = "<h2>acooscwoohoorcanwa: Unknown</h2>";
  }
  else {

  // Get planet id to use in img string
  var array = homeworldUrl.split("/");
  var lastElement = array.pop();
  var id = array.pop();        

  // Print stats to the element with id="homeworld"
  document.getElementById("homeworldArea1").innerHTML = 
    "<h2 class=\"homeWorld\">Acooscwoohoorcanwa: " + homeworldName + " </h2>" +
  	"<table class=\"table table-responsive table-condensed\">" +
  	"<tbody>" +
  	"<tr><td><strong>Oaanahscraaowo: </strong></td><td>" + homeworldClimate + "</td></tr>" +
  	"<tr><td><strong>Aoworcrcraahwh: </strong></td><td>" + homeworldTerrain + "</td></tr>" +
  	"<tr><td><strong>Churcwwraoawo Ohraaoworc: </strong></td><td>" + homeworldSurfaceWater + "%" + "</td></tr>" +
  	"<tr><td><strong>Waahrascwoaoworc: </strong></td><td>" + homeworldDiameter + " km" + "</td></tr>" +
  	"<tr><td><strong>Ecooaoraaoahoowh Akworcahoowa: </strong></td><td>" + homeworldRotationalPeriod  + " hrs" + "</td></tr>" +
  	"<tr><td><strong>Oorcrhahaoraan Akworcahoowa: </strong></td><td>" + homeworldOrbitalPeriod + " dys" + "</td></tr>" +
  	"<tr><td><strong>Akooakhuanraaoahoowh: </strong></td><td>" + homeworldPopulation + "</td></tr>" +
  	"</tbody>" +
  	"</table>" +
  	"<div id=\"species\"></div>";      
  
/*  
    "<h2>Acooscwoohoorcanwa: " + homeworldName + " </h2>" +
    "<p><strong>Oaanahscraaowo: </strong>" + homeworldClimate + "</p>" +
    "<p><strong>Aoworcrcraahwh: </strong>" + homeworldTerrain + "</p>" +
    "<p><strong>Churcwwraoawo Ohraaoworc: </strong>" + homeworldSurfaceWater + "%" + "</p>" +
    "<p><strong>Waahrascwoaoworc: </strong>" + homeworldDiameter + " km" + "</p>" +
    "<p><strong>Ecooaoraaoahoowh Akworcahoowa: </strong>" + homeworldRotationalPeriod + " hrs" + "</p>" +
    "<p><strong>Oorcrhahaoraan Akworcahoowa: </strong>" + homeworldOrbitalPeriod + " dys" + "</p>" +
    "<p><strong>Akooakhuanraaoahoowh: </strong>" + homeworldPopulation + "</p>";
*/
		 
  document.getElementById("homeworldArea2").innerHTML = 
    "<p class=\"h2\">" + "&nbsp;" + "</h2>" +  
    "<img src=\"/javascript-projects-resources/imgs/starwars_images/planets/" + id +".jpg\" class=\"img-fluid img-responsive img-rounded center-block planetImageBorder\">";  
  }
}


// personFunction
// ==============
function personFunction(xhttp){
  
  // Store person in an object named personObj
  var personObj = parseResponseText(xhttp);
  
  // Save properties of personObj into variables
  var personName = personObj.name;                      //string
  var personGender = personObj.gender;                  //string
  var personBirthYear = personObj.birth_year;           //string
  var personEyeColor = personObj.eye_color;             //string
  var personHairColor = personObj.hair_color;           //string
  var personHeight = personObj.height;                  //string
  var personMass = personObj.mass;                      //string
  var personSkinColor = personObj.skin_color;           //string
  var personHomeworld = personObj.homeworld;            //string url
  var personFilms = personObj.films;                    //array url's
  var personSpecies = personObj.species;                //array url's
  var personUrl = personObj.url;                      

  // Capitalize the first letter of some of the properties
  personGender = capitalizeFirstLetter(personGender);
  personEyeColor = capitalizeFirstLetter(personEyeColor);
  personHairColor = capitalizeFirstLetter(personHairColor);
  personSkinColor = capitalizeFirstLetter(personSkinColor);

  // Get person id to use in img string
  var array = personUrl.split("/");
  var lastElement = array.pop();
  var id = array.pop();

  // Print stats to the element with id="person"
  document.getElementById("personArea1").innerHTML =  
    "<h2 class=\"name\">" + personName + "</h2>" +
    "<img src=\"/javascript-projects-resources/imgs/starwars_images/people/" + id +".jpg\" class=\"img-fluid img-responsive img-rounded center-block profileImageBorder\">";

  document.getElementById("personArea2").innerHTML = 
  	"<p class=\"h2\">" + "&nbsp;" + "</h2>" +
  	"<table class=\"table table-responsive table-condensed\"" +
  	"<tbody>" +
  	"<tr><td><strong text-align=\"left\">Gender: </strong></td><td>" + personGender + "</td></tr>" +
  	"<tr><td><strong text-align=\"left\">Birth Year: </strong></td><td>" + personBirthYear + "</td></tr>" +
  	"<tr><td><strong>Eye Color: </strong></td><td>" + personEyeColor + "</td></tr>" +
  	"<tr><td><strong>Hair Color: </strong></td><td>" + personHairColor + "</td></tr>" +
  	"<tr><td><strong>Height: </strong></td><td>" + personHeight  + " centimeters" + "</td></tr>" +
  	"<tr><td><strong>Mass: </strong></td><td>" + personMass + " kilograms" + "</td></tr>" +
  	"<tr><td><strong>Skin Color: </strong></td><td>" + personSkinColor + "</td></tr>" +
  	"</tbody>" +
  	"</table>" +
  	"<div id=\"species\"></div>"; 
  
 /* 
  "<p class=\"h2\">" + "&nbsp;" + "</h2>" +  
  "<p><strong>Gender: </strong>" + personGender + "</p>" +
  "<p><strong>Birth Year: </strong>" + personBirthYear + "</p>" +
  "<p><strong>Eye Color: </strong>" + personEyeColor + "</p>" +
  "<p><strong>Hair Color: </strong>" + personHairColor + "</p>" +
  "<p><strong>Height: </strong>" + personHeight + " centimeters" + "</p>" +
  "<p><strong>Mass: </strong>" + personMass + " kilograms" + "</p>" +
  "<p><strong>Skin Color: </strong>" + personSkinColor + "</p>" +
  "<div id=\"species\"></div>";
 */
  
  // Pass personHomeworld as a parameter to loadDoc with homeworldFunction as a callback function
  loadDoc(personHomeworld, homeworldFunction);

  // Create new h2 element to put the title "Films" into in the element with id="films". New element has an id of "filmsTitle"
  createNewElement("h2", "Films", "films", "filmsTitle");

  // Sort person films array into order of url's (order of release year)
  personFilms.sort();

  // Loop through personFilms array getting each filmURL
  var personFilmsLength = personFilms.length;
  var i;
  for (i = 0; i < personFilmsLength; i++) {
    var filmURL = personFilms[i];
    // Pass filmURL as a parameter to loadDocSync with filmFunction as a callback function
    // Synchronous so that films are processed in order of release date
    loadDocSync(filmURL, filmFunction);
  }

  // Loop through personSpecies array getting each speciesURL
  var personSpeciesLength = personSpecies.length;
  var i;
  for (i = 0; i < personSpeciesLength; i++) {
    var speciesURL = personSpecies[i];
    //Pass speciesURL as a parameter to loadDoc with speciesFunction as a callback function
    loadDoc(speciesURL, speciesFunction);
  }

}


// personFunctionWookie
// ====================
function personFunctionWookiee(xhttp){
  
  // Store person in an object named personObj
  var personObj = parseResponseText(xhttp);

  // Save properties of personObj into variables
  var personName = personObj.whrascwo;                      //string
  var personGender = personObj.rrwowhwaworc;                //string
  var personBirthYear = personObj.rhahrcaoac_roworarc;      //string
  var personEyeColor = personObj.worowo_oaooanoorc;         //string
  var personHairColor = personObj.acraahrc_oaooanoorc;      //string
  var personHeight = personObj.acwoahrracao;                //string
  var personMass = personObj.scracc;                        //string
  var personSkinColor = personObj.corahwh_oaooanoorc;       //string
  var personHomeworld = personObj.acooscwoohoorcanwa;       //string url
  var personFilms = personObj.wwahanscc;                    //array url's
  var personSpecies = personObj.cakwooaahwoc;               //array url's
  var personUrl = personObj.hurcan;  
  
  // Capitalize the first letter of some of the properties
  personGender = capitalizeFirstLetter(personGender);
  personEyeColor = capitalizeFirstLetter(personEyeColor);
  personHairColor = capitalizeFirstLetter(personHairColor);
  personSkinColor = capitalizeFirstLetter(personSkinColor);

  // Get person id to use in img string
  var array = personUrl.split("/");
  var lastElement = array.pop();
  var id = array.pop();

  // Print stats to the element with id="person"
  document.getElementById("personArea1").innerHTML = 
    "<h2 class=\"name\">" + personName + "</h2>" +
    "<img src=\"/javascript-projects-resources/imgs/starwars_images/people/" + id +".jpg\" class=\"img-fluid img-responsive img-rounded center-block profileImageBorder\">";

  document.getElementById("personArea2").innerHTML = 
  	"<p class=\"h2\">" + "&nbsp;" + "</h2>" +
  	"<table class=\"table table-responsive table-condensed\"" +
  	"<tbody>" +
  	"<tr><td><strong>Rrwowhwaworc: </strong></td><td>" + personGender + "</td></tr>" +
  	"<tr><td><strong>Rhahrcaoac Roworarc: </strong></td><td>" + personBirthYear + "</td></tr>" +
  	"<tr><td><strong>Worowo Oaooanoorc: </strong></td><td>" + personEyeColor + "</td></tr>" +
  	"<tr><td><strong>Acraahrc Oaooanoorc: </strong></td><td>" + personHairColor + "</td></tr>" +
  	"<tr><td><strong>Acwoahrracao: </strong></td><td>" + personHeight  + " cm" + "</td></tr>" +
  	"<tr><td><strong>Scracc: </strong></td><td>" + personMass + " kg" + "</td></tr>" +
  	"<tr><td><strong>Corahwh Oaooanoorc: </strong></td><td>" + personSkinColor + "</td></tr>" +
  	"</tbody>" +
  	"</table>" +
  	"<div id=\"species\"></div>"; 
  
/*  
  "<p class=\"h2\">" + "&nbsp;" + "</h2>" +
  "<p><strong>Rrwowhwaworc: </strong>" + personGender + "</p>" +
  "<p><strong>Rhahrcaoac Roworarc: </strong>" + personBirthYear + "</p>" +
  "<p><strong>Worowo Oaooanoorc: </strong>" + personEyeColor + "</p>" +
  "<p><strong>Acraahrc Oaooanoorc: </strong>" + personHairColor + "</p>" +
  "<p><strong>Acwoahrracao: </strong>" + personHeight + " cm" + "</p>" +
  "<p><strong>Scracc: </strong>" + personMass + " kg" + "</p>" +
  "<p><strong>Corahwh Oaooanoorc: </strong>" + personSkinColor + "</p>" +
  "<div id=\"species\"></div>";
*/  
  
  // Convert personHomeworld url from wookiee into English
  var array = personHomeworld.split("/");
  var lastElement = array.pop();
  var secondToLastElement = array.pop();

  personHomeworld = "https://swapi.co/api/planets/" + secondToLastElement + "/";

  // Pass personHomeworld as a parameter to loadDoc with homeworldFunction as a callback function
  loadDocWookiee(personHomeworld, homeworldFunctionWookiee);


/* REMOVED FILMS FROM WOOKIEE - UNTRANSLATABLE OBJECT
  // Create new h2 element to put the title "Films" into in the element with id="films"
  createNewElement("h2", "Films", "films");

  // Sort person films array into order of url's (order of release year)
  personFilms.sort();

  // Loop through personFilms array getting each filmURL
  var personFilmsLength = personFilms.length;
  var i;
  for (i = 0; i < personFilmsLength; i++) {
    var filmURL = personFilms[i];

    // Convert filmURL from wookiee into English

    var array = filmURL.split("/");
    var lastElement = array.pop();
    var secondToLastElement = array.pop();

    filmURL = "https://swapi.co/api/films/" + secondToLastElement + "/";

    // Pass filmURL as a parameter to loadDocSync with filmFunction as a callback function
    // Synchronous  so that films are processed in order of release date
    console.log(filmURL);
    loadDocSync(filmURL, filmFunction);
  }
*/


  // Loop through personSpecies array getting each speciesURL
  var personSpeciesLength = personSpecies.length;
  var i;
  for (i = 0; i < personSpeciesLength; i++) {
    var speciesURL = personSpecies[i];

    // Convert speciesURL from wookiee into English
    var array = speciesURL.split("/");
    var lastElement = array.pop();
    var secondToLastElement = array.pop();

    speciesURL = "https://swapi.co/api/species/" + secondToLastElement + "/";

    // Pass speciesURL as a parameter to loadDoc with speciesFunction as a callback function
    loadDocWookiee(speciesURL, speciesFunctionWookiee);
  }

}


// characterFunction
// =================
function characterFunction() {
  // Get select value from drop down list, storing it in a variable named character
  var character = selectValueFromDropDownList("character")

  // Unhide div elements
  // Find hidden elements (they have class name "hiddenElement")
  var hiddenElements = document.getElementsByClassName("initiallyHidden");
  // Loop through hiddenElements setting the class name to shownElement
  var hiddenElementsLength = hiddenElements.length;
  for(i = 0; i < hiddenElementsLength; i++) {
    var hiddenElement = hiddenElements[i];
    hiddenElement.className = "section initiallyHidden shownElement"
  } 
  
  // Add the character to the personURL
  var personURL = "https://swapi.co/api/people/";
  personURL += character + "/";
  // Pass the personURL as a parameter to loadDoc with personFunction as a callback function
  loadDoc(personURL, personFunction);

  // Remove any child nodes of the films element (which may have been added by previous results)
  removeChildNodesFromElement("films");
}


// characterFunctionWookiee
// ========================
function characterFunctionWookiee() {
  // Get select value from drop down list, storing it in a variable named character
  var character = selectValueFromDropDownList("character")

  // Unhide div elements
  // Find hidden elements (they have class name "hiddenElement")
  var hiddenElements = document.getElementsByClassName("initiallyHidden");
  // Loop through hiddenElements setting the class name to shownElement
  var hiddenElementsLength = hiddenElements.length;
  for(i = 0; i < hiddenElementsLength; i++) {
    var hiddenElement = hiddenElements[i];
    hiddenElement.className = "section initiallyHidden shownElement"
  } 
  
  // Add the character to the personURL
  var personURL = "https://swapi.co/api/people/";
  personURL += character + "/";
  // Pass the personURL as a parameter to loadDoc with personFunction as a callback function
  loadDocWookiee(personURL, personFunctionWookiee);

  // Remove any child nodes of the films element (which may have been added by previous results)
  removeChildNodesFromElement("films");
}