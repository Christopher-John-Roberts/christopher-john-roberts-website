
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
          var obj = JSON.parse(this.responseText);
          document.getElementById("demo01").innerHTML = obj.name + " enjoys " + obj.hobbies[0] + ", " + obj.hobbies[1] + ", " + obj.hobbies[2] + " & " + obj.hobbies[3] + ".";
      }
  };
  xhttp.open("GET", "/content/javascript/demos/json/json_demo.json" + "?t=" + Math.random(), true);
  xhttp.send();
}

document.getElementById("button01").addEventListener("click", loadDoc);

