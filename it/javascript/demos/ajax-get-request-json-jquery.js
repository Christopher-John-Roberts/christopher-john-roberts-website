



$(document).ready(function(){
	
$("#button01").click(function(){
	$.getJSON("/content/javascript/demos/json/json_demo.json" + "?t=" + Math.random(), function(json){
		var obj = json;
		$("#demo01").html(obj.name + " enjoys " + obj.hobbies[0] + ", " + obj.hobbies[1] + ", " + obj.hobbies[2] + " & " + obj.hobbies[3] + ".");
	});
});

});       



