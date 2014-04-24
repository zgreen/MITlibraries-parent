$(function(){
	var day = moment().format('dddd');
	var libName = $('h1 .libraryName').html();
	var special = moment().format('YYYYMMDD');
	console.log(special);
		
	if (day == 'Monday', 'Tuesday', 'Wednesday', 'Thursday') {
		if (libName == 'Barker Library'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .barker .hours-default');
		}
		if (libName == 'Dewey Library'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .dewey .hours-default');
		}
		if (libName == 'Hayden Library'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .hayden .hours-default');
		}
		if (libName == 'Institute Archives & Special Collections'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .iasc .hours-default');
		}
		if (libName == 'Lewis Music Library'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .lewis .hours-default');
		}
		if (libName == 'Rotch Library'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .rotch .hours-default');
		}
		if (libName == 'Document Services'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .docs .hours-default');
		}
		if (libName == 'Library Storage Annex'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .lsa .hours-default');
		}
	}
	if (day == 'Friday') {
		if (libName == 'Barker Library'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .barker .hours-fri');
		}
		if (libName == 'Dewey Library'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .dewey .hours-fri');
		}
		if (libName == 'Hayden Library'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .hayden .hours-fri');
		}
		if (libName == 'Institute Archives & Special Collections'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .iasc .hours-fri');
		}
		if (libName == 'Lewis Music Library'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .lewis .hours-fri');
		}
		if (libName == 'Rotch Library'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .rotch .hours-fri');
		}
		if (libName == 'Document Services'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .docs .hours-fri');
		}
		if (libName == 'Library Storage Annex'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .lsa .hours-fri');
		}
	}
	if (day == 'Saturday') {
		if (libName == 'Barker Library'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .barker .hours-sat');
		}
		if (libName == 'Dewey Library'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .dewey .hours-sat');
		}
		if (libName == 'Hayden Library'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .hayden .hours-sat');
		}
		if (libName == 'Institute Archives & Special Collections'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .iasc .hours-sat');
		}
		if (libName == 'Lewis Music Library'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .lewis .hours-sat');
		}
		if (libName == 'Library Storage Annex'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .lsa .hours-sat');
		}
	}
	if (day == 'Sunday') {
		if (libName == 'Barker Library'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .barker .hours-sun');
		}
		if (libName == 'Dewey Library'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .dewey .hours-sun');
		}
		if (libName == 'Hayden Library'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .hayden .hours-sun');
		}
		if (libName == 'Institute Archives & Special Collections'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .iasc .hours-sun');
		}
		if (libName == 'Lewis Music Library'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .lewis .hours-sun');
		}
		if (libName == 'Rotch Library'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .rotch .hours-sun');
		}
		if (libName == 'Document Services'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .docs .hours-sun');
		}
		if (libName == 'Library Storage Annex'){
			$('.hours-ajax').load('http://mitlibraries.dev/wp-content/themes/libraries/hours.html .lsa .hours-sun');
		}
	}
});