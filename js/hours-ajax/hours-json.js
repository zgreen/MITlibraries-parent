$(function(){
	$.getJSON('http://mitlibraries.dev/wp-content/themes/libraries/hours.json', function(data){
		$('.hours-ajax').append(data.terms.spring2014.locations.barker.hoursDefault);
	});
});
