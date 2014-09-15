// Mimic a <select> element with a <ul>
$('#resources').on('click', 'li', function(event) {
	// All available resources	
	var resourcesAll = $('#resources li');
	// Cancel if the li has a link in it
	if ($(this).hasClass('has-link')) {
		return;
	}
	else {
		// To show or hide the parent <ul>
		$(this).parent().toggleClass('active');
		// Remove active class from any <li> that has it...
		$(resourcesAll).removeClass('active');
		// And add the class to the <li> that gets clicked
		$(this).toggleClass('active');
		
		// Get the main text of the currently selected <li>
		var selectedText = $('#resources li.active .main').text();
		// Show this text above the dropdown (when active), along with select arrows SVG, mimicing a <select>
		if ($('#resources').hasClass('active')) {
			// Open
			$('.wrap-select--resources .selected').text(selectedText).append('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="8.071px" height="14px" viewBox="0 0 8.071 14" enable-background="new 0 0 8.071 14" xml:space="preserve" class="select-arrows"><path d="M0.069 8.74c0.08-0.159 0.252-0.264 0.436-0.274 0.023 0 1.743-0.104 3.531-0.104s3.508 0.104 3.53 0.104C7.751 8.476 7.911 8.581 8.003 8.74c0.092 0.161 0.092 0.356 0 0.517 -1.364 2.431-3.508 4.517-3.6 4.598 -0.206 0.194-0.528 0.194-0.734 0 -0.091-0.081-2.235-2.167-3.6-4.598C-0.023 9.096-0.023 8.901 0.069 8.74M8.003 5.259c-0.08 0.16-0.252 0.264-0.437 0.275 -0.022 0-1.742 0.103-3.53 0.103S0.528 5.535 0.505 5.535C0.321 5.523 0.161 5.419 0.069 5.259c-0.092-0.161-0.092-0.355 0-0.516 1.365-2.431 3.508-4.517 3.6-4.598 0.206-0.194 0.528-0.194 0.734 0 0.092 0.081 2.235 2.167 3.6 4.598C8.095 4.904 8.095 5.099 8.003 5.259"></path></svg>').addClass('active');
		}
		// Remove the text when the dropdown is closed
		else {
			// Closed
			$('.wrap-select--resources .selected').text('').removeClass('active');
			// Remove any input text
			$('#search-main input').val('');
			$(this).trigger('search-change');
		}
		// // Get the class of the selected resource
		// var searchSelected = $('#resources li.active').attr('data-target');
		// // Apply this class, as an id, to the form.
		// $('#search-main form').attr('id', searchSelected);
	}
});
// Close the faux select menu when clicking outside it 
$(document).on('click', function(event){
	if(!$('#resources.active').has(event.target).length == 0) {
		return;
	}
	else {
		$('#resources').removeClass('active');
		$('#search-main .selected').removeClass('active').text('');
	}
});