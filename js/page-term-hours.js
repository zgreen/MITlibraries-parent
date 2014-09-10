// Today
var today, d, m, yyyy;
today = new Date();
d = today.getDate();
m = today.getMonth() + 1;
yyyy = today.getFullYear();
today = m + "/" + d + "/" + yyyy;

// Day of week
var day = moment()
						.format('dddd')
						.toLowerCase();

$.ajax({
		cache: false,
		url: "/wp-content/themes/libraries/term-hours.json",
		dataType: "json"
	})
	.done(function(json) {
		// The terms
		var terms = json.terms;

		for (var i = 0; i < terms.length; i++) {
			// Check each term for start/end dates
			var termStart = terms[i].termStart;
			var termEnd = terms[i].termEnd;
			// Check the range (using Moment.js w/ Twix plugin)
			var termActive = moment
												.twix(termStart, termEnd, {parseStrict: true})
												.isCurrent();
			// Set the active term
			if (termActive === true) {
				var theTerm = terms[i];
			}
		};;
		// Active term locations
		var locations = theTerm.locations;

		for (var i = 0; i < locations.length; i++) {
			// Empty exceptions arr for each location
			var exceptionsArr = [];
			// Find the first exception that matches today's date
			var exceptions = _.findWhere(locations[i].exceptions, {"date" : today});
			// Set the open/closed hours if there is an exception...
			if (exceptions != undefined) {
				var todayOpen = '<%= '+'"'+exceptions.open+'"'+' %>';
				var todayClosed = '<%= '+'"'+exceptions.closed+'"'+' %>';
			}
			// or else use today's default hours
			else {
				var todayOpen = '<%= '+day+'.open %>';
				var todayClosed = '<%= '+day+'.closed %>';
			}
			// The template for term-hours.html
			var compiled = _.template(
				'<tr>' +
					'<td>' +
						'<%= locationName %>' +
					'</td>' +
					'<td>' +
						todayOpen +
					'</td>' +
					'<td>' +
						todayClosed +
					'</td>' +
				'</tr>'
			);
			// Set this for each location
			var html = compiled(locations[i]);
			$('#table-today').append(html);
		};
		// Append term start and end times
		$('#date-term-begin').text(theTerm.termStart);
		$('#date-term-end').text(theTerm.termEnd);
	})