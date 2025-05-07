

function loadDoc(url, cFunction) {
  var xhttp;
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
  };
  url += "?t=" + Math.random()
  xhttp.open("GET", url, true);
  xhttp.send();
}

function myFunction1(xhttp) {
  var obj = JSON.parse(xhttp.responseText);
  document.getElementById("demo01").innerHTML = obj.name + " enjoys " + obj.hobbies[0] + ", " + obj.hobbies[1] + ", " + obj.hobbies[2] + " & " + obj.hobbies[3] + ".";
}

function myFunction2(xhttp) {
  var obj = JSON.parse(xhttp.responseText);
  document.getElementById("demo02").innerHTML = obj.name + " is " + obj.age + " years old.";
}

document.getElementById("button01").addEventListener("click", 
  function(){loadDoc('/content/javascript/demos/json/json_demo.json', myFunction1);});

document.getElementById("button02").addEventListener("click", 
  function(){loadDoc('/content/javascript/demos/json/json_demo.json', myFunction2);});
