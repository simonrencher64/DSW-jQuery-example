$(document).ready(function() {
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("h1").click(function() {
		$("p").removeClass("red");
		$("p").addClass("bright");
		$("img").addClass("border");
	});
	$("h2").click(function() {
		$("p").removeClass("bright");
		$("img").removeClass("border");
		$("p").addClass("red");
	});
	$("#p1").click(function() {
		$(".disappear").toggle();
	});
	$("#freakytoggler").click(function() {
		$("#freaky").toggle();
	});
	$("img").mouseenter(function() {
		$("img").addClass("coolBorder");
	});
	$("img").mouseleave(function() {
		$("img").removeClass("coolBorder");
	});
});
