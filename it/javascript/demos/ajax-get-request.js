
function loadDoc() {
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
      document.getElementById("demo01").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "/content/javascript/demos/txt/ajax_info.txt" + "?t=" + Math.random(), true);
  xhttp.send();
}

document.getElementById("button01").addEventListener("click", loadDoc);
