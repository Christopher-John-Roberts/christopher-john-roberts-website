


$(document).ready(function(){
	
$("#button01").click(function(){
	$.get("/content/javascript/demos/txt/ajax_info.txt" + "?t=" + Math.random(), function(data, status){
		$("#demo01").html(data);
	});
});

});