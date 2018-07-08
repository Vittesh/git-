$(document).ready(function(){
	$('.button').click(function(){
		$('.Scroll').show("slide",{direction:"right"},1000);
	});
	$('#cloose').click(function(){
		$('.Scroll').hide("slide",{direction:"left"},1000);
	});
});