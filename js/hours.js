$(function(){
	$.getJSON('/wp-json/posts?type=better_hours')
		.done(function(data){
			// The most recent post
			var content = data[0].content;
			var contentHTML = $.parseHTML(content);
			var locations = $(contentHTML).filter('h2');
			var locationsArr = $.makeArray(locations);
			var locationsCount = locationsArr.length;
			// All locations
			var loc = $(content).siblings('h2');
			// Loop through each location
			$(loc).each(function(){
				// Location name
				var locName = $(this).text();
				// Location Monday-Thursday hours
				var monThurs = $(this).next().next();
				// Friday hours
				var fri = monThurs.next().next();
				// Saturday hours
				var sat = fri.next().next();
				// Sunday hours
				var sun = sat.next().next();
				// Exceptions
				var excepts = sun.next().nextUntil('h2');
				// Count the exceptions
				var exceptsCount = excepts.length;
				// Empty array for the exceptions
				var exceptsArr = [];
				// Empty array for exception dates
				var exceptDateArr = []
				for (var i = 0; i < exceptsCount; i++) {
					// Add each exception to the exceptsArr array
					exceptsArr.push($(excepts[i]).text());
					//
					var exceptArr = exceptsArr[i].split(':');
					var exceptDate = exceptArr[0].trim();
					exceptDateArr.push(exceptDate);
					if (exceptArr[1] !== undefined) {
						var exceptTime = exceptArr[1].trim();
					}
				};
				
				// Set var today
				var today = new Date();
				// The day
				var day = today.getDay();
				// The date
				var dd = today.getDate();
				// The month
				var mm = today.getMonth()+1; // January is 0!
				// The year
				var yyyy = today.getFullYear();
				// Add a 0 to the date string, if it is less than 10
				if(dd<10) {
				    dd='0'+dd
				} 
				// Add a 0 to the month string, if it is less than 10
				if(mm<10) {
				    mm='0'+mm
				}
				// Today's date string
				today = mm+'/'+dd+'/'+yyyy;

				// Holidays & early closings
				if (excepts != '' && today.indexOf(exceptDateArr)) {
					var hoursToday = exceptTime;
				}
				else {
					// Monday, Tuesday, Wednesday, or Thursday
					if (day == 1 || 2 || 3 || 4) {
						var hoursToday = monThurs.text();
					}
					// Friday
					if (day == 5) {
						var hoursToday = fri.text();
					}
					// Saturday
					if (day == 6) {
						var hoursToday = sat.text();
					}
					// Sunday
					if (day == 0) {
						var hoursToday = sun.text();
					}
				}
				console.log(locName+' hours today are '+hoursToday);
			});

		});
});