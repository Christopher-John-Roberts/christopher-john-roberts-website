

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
  document.getElementById("demo01").innerHTML = xhttp.responseText;
}

function myFunction2(xhttp) {
  document.getElementById("demo02").innerHTML = xhttp.responseText;
}

document.getElementById("button01").addEventListener("click", 
  function(){loadDoc('/content/javascript/demos/txt/ajax_info.txt', myFunction1);});

document.getElementById("button02").addEventListener("click", 
  function(){loadDoc('/content/javascript/demos/txt/ajax_info2.txt', myFunction2);});

