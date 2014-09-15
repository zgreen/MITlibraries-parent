//
// Search
//

$(function(){

	function searchBySwitch() {
		// Get the value of the active "search-by" option
		var optionSelected = $('#search-main select.active option:selected').val();
		// Change the value on select change
		$('#search-main select.active').change(function(){
			var optionSelected = $('#search-main select.active option:selected').val();
			searchBy();
			// Remove any input text
			//$('#search-main input').val('');
		});

	}

	searchBySwitch();

	// Handles hidden fields
	function hiddenFields() {
		// Get the value of the "search by" select element
		var selectVal = $('#search-main select.active').val();
		// Remove any hidden fileds
		$('#search-main form .hidden-fields').html('');
		// Add hidden fields, respective of search selected
		if ($('#bartonplus.active').length) {
			$('#bartonplus .hidden-fields')
				.append("<input name='direct' value='true' type='hidden'>")
				.append("<input name='scope' value='site' type='hidden'>")
				.append("<input name='site' value='eds-live' type='hidden'>")
				.append("<input name='authtype' value='ip,guest' type='hidden'>")
				.append("<input name='custid' value='s8978330' type='hidden'>")
				.append("<input name='profile' value='eds' type='hidden'>")
				.append("<input name='groupid' value='main' type='hidden'>")
				.append('<input name="bquery" value="" type="hidden">');
		}
		// Vera
		if($('#vera.active').length) {
			$('#vera .hidden-fields')
				.append("<input type='hidden' name='param_perform_save' value='searchTitle' />")
				.append("<input type='hidden' name='param_chinese_checkbox_save' value='0' />")
				.append("<input type='hidden' name='param_type_save' value='textSearch' />")
				.append("<input type='hidden' name='param_type_value' value='textSearch' />")
				.append("<input type='hidden' name='param_jumpToPage_value' value='' />")
				.append("<input type='hidden' name='param_services2filter_save' value='getAbstract' />")
				.append("<input type='hidden' name='param_services2filter_save' value='getFullTxt' />");
			// Check the select val...
			if (selectVal == 'contains') {
				// and append a radio input to the form
				$('#vera').append('<input type="radio" name="param_textSearchType_value" id="contains" value="contains" checked="checked" class="radio" />')
			}
			if (selectVal == 'startsWith') {
				$('#vera').append('<input type="radio" name="param_textSearchType_value" id="startsWith" value="startsWith" class="radio" checked="checked" />');
			}
			if (selectVal == 'exactMatch') {
				$('#vera').append('<input type="radio" name="param_textSearchType_value" id="exactMatch" value="exactMatch" class="radio" checked="checked" />')
			}
		}
		if($('#barton.active').length) {
			$('#barton').append("<input type='hidden' name='func' value='scan'/>")
			// Keyword search
			if (selectVal == 'find_WRD') {
				$('#barton').append('<input type="radio" name="code" id="bartonkeyword" value="find_WRD" checked="checked" class="radio" />');
			}
			// Title search
			if (selectVal == 'scan_TTL') {
				$('#barton').append('<input type="radio" name="code" id="bartontitle" value="scan_TTL" class="radio" checked="checked" />');
			}
			// Author search
			if (selectVal == 'scan_AUT') {
				$('#barton').append('<input type="radio" name="code" id="bartonauthor" value="scan_AUT" class="radio" checked="checked" />');
			}
			// Call number search
			if (selectVal == 'scan_CND') {
				$('#barton').append('<input type="radio" name="code" id="bartoncallnumber" value="scan_CND" class="radio" checked="checked" />');
			}
		}
		// Worldcat
		if($('#worldcat.active').length) {
			$('#worldcat .hidden-fields')
				.append("<input type='hidden' name='qt' value='wc_org_mit'/>")
				.append("<input type='hidden' name='qt' value='affiliate'/>");
		}
		// Course reserves
		if($('#course-reserves.active').length) {
			$('#course-reserves .hidden-fields')
				.append("<input type='hidden' name='func' value=''/>");
			// Course number search
			if(selectVal == 'scan_CNB') {
				$('#course-reserves').append('<input name="code" id="coursenumber" value="scan_CNB" checked="checked" type="radio" class="radio" />');
			}
			// Instructor keyword search
			if(selectVal == 'find_WIN') {
				$('#course-reserves').append('<input name="code" id="instructorkeyword" value="find_WIN" type="radio" class="radio" checked="checked" />');
			}
			if(selectVal == 'find_WOU') {
				$('#course-reserves').append('<input name="code" id="coursenamekeyword" value="find_WOU" type="radio" class="radio" checked="checked" />');
			}
		}
		// Site Search
		if($('#site-search.active').length) {
			$('#site-search .hidden-fields')
				.append('<input type="hidden" name="cx" value="016240528703941589557:i7wrbu9cdxu" />')
				.append('<input type="hidden" name="ie" value="UTF-8" />');
		}
	}

	// Handles the toggling of forms
	$('#search-main').on('click', '#resources', function(event){
		// Hide all forms on option change
		$('#search-main form').removeClass('input-submit active');
		// Hide all inputs on option change
		$('#search-main input').removeClass('active');
		// Get the value of the selected option...
		var resourceOption = $('#resources li.active').attr('data-option');
		// ...and show the corresponding form
		$('#search-main input.'+resourceOption).parent().addClass('active input-submit');
		// ...and active input
		$('#search-main input.'+resourceOption).addClass('active');
		// Repeat for keyword selects
		$('.keywords').parent().removeClass('active');
		$('.keywords').removeClass('active');
		$('#search-main .keywords.'+resourceOption).addClass('active');
		$('#search-main .keywords.'+resourceOption).parent().addClass('active');
		// Trigger option-change (better to use callback function?)
		$(this).trigger('option-change');
		// Advanced search
		var searchSelected = $('#resources li.active').attr('data-target');
		$('#search-main a.search-advanced').removeClass('active');
		$('#search-main a.search-advanced.'+searchSelected).addClass('active');
	});

	// Run searchBy on option-change event
	$('#search-main').on('option-change', function(){
		searchBySwitch();
		searchBy();
	});

	// On form submit
	$('#search-main form').on('submit', function(){
		// Remove added inputs
		$('#search-main input[type="hidden"], #search-main input[type="radio"]').remove();
		// Get the query entered...
		var searchQuery = $('input.active', this).val();
		if (searchQuery == '') {
			// Show alert if no search term is entered
			alert('Please enter a search term.');
			// Is this proper?
			return false;
		}
		else {
		// Get the value of the "search by" select element
		var selectVal = $('#search-main select.active').val();
			// Barton...
			if ($('#bartonplus.active').length) {
				// Set the correct action for the BartonPlus form
				$('#bartonplus')
					.attr('action', 'http://search.ebscohost.com/login.aspx')
					.attr('method', 'get')
					.attr('target', '_top');
				// Add hidden fields
				hiddenFields();
				// Add search query to the bquery value, along with the select val, which sends it along to EDS
				$('input[name="bquery"]', this).val((selectVal+searchQuery).replace(/"/g, '&quot;'));
			}
			// Vera...
			if ($('#vera.active').length) {
				// Vera actions
				$('#vera')
					.attr('action', 'http://owens.mit.edu/sfx_local/az/mit_all')
					.attr('name', 'az_user_form')
					.attr('method', 'get')
					.attr('accept-charset', 'UTF-8')
					.addClass('searchform');
				// Add hidden fields
				hiddenFields();
				// Add the query val
				$('input.active', this)
					.attr('name','param_pattern_value')
					.attr('id','param_pattern_value')
					.addClass('searchtext')
					.val(searchQuery);
			}
			// Barton
			if($('#barton.active').length) {
				// Split the query
				var splitOptions = selectVal.split('_');
				$('#barton')
					.addClass('searchform')
					.attr('action', 'http://library.mit.edu/F/')
					.attr('name', 'booksearch')
					.attr('method', 'get');

				// Add hidden fields
				hiddenFields();
				$('input.active', this)
					.attr('name', 'request')
					.attr('type', 'text')
					.attr('id', 'bookrequest')
					.val(searchQuery);
				// Set the val of the checked option
				$('#barton input[name = "code"]:checked').val(splitOptions[1]);
				// What is F8?
				if ( splitOptions[0] == "find" || splitOptions[0] == "F8" ) {
					$("#barton .hidden-fields").append("<input type='hidden' name='func' value='find-b'/>");
					$("#barton input[name = 'code']").attr("name","find_code");
				}
				else {
					$("#barton .hidden-fields").append("<input type='hidden' name='func' value='scan'/>");
					$("#barton input[name = 'code']").attr("name","scan_code");
					$("#barton input.searchtext").attr("name","scan_start");
				}
			}
			// Worldcat
			if($('#worldcat.active').length) {
				$(this).attr('action', 'http://mit.worldcat.org/search');
				// Add hidden fields
				hiddenFields();
				$('input.active', this).attr('method','get');
				if (selectVal == 'keyword') {
					$('input.active', this)
						.attr("name","q")
						.val(searchQuery);
				}
				if (selectVal == 'author') {
					var searchQuery = 'au:'+$('input.active', this).val();
					$('#worldcat.active').append('<input type="hidden" name="q" value="'+searchQuery+'" />');
				}
				if (selectVal == 'title') {
					var searchQuery = 'ti:'+$('input.active', this).val();
					$('#worldcat.active').append('<input type="hidden" name="q" value="'+searchQuery+'" />');
				}
			}
			// Course Reserves
			if($('#course-reserves.active').length) {
				$('#course-reserves')
					.addClass('searchform')
					.addClass('barton')
					.attr('action', 'http://library.mit.edu/F/')
					.attr('method', 'get')
					.attr('name', 'getInfo');
				$('input.active', this)
					.attr('name', 'request')
					.val(searchQuery);
				// Add hidden fields
				hiddenFields();
				// Split the query
				var splitOptions = selectVal.split('_');
				$("#course-reserves input[name = 'code']:checked").val(splitOptions[1]);
				$("#course-reserves .hidden-fields").append("<input type='hidden' name='local_base' value='u-mit30'/>");
				if (splitOptions[0] == "find") {	
					$("#course-reserves .hidden-fields input[name = 'func']").val("find-b");
					$("#course-reserves input[name = 'code']").attr("name","find_code");
				} else {
					$("#course-reserves .hidden-fields input[name = 'func']").val("scan");
					$("#course-reserves input[name = 'code']").attr("name","scan_code");
					$("#course-reserves input[name = 'request']").attr("name","scan_start");
				};
			}
			// Site Search
			if($('#site-search.active').length) {
				$(this)
					.attr('action', 'http://www.google.com/cse');
				hiddenFields();
				$('input.active', this)
					.attr('name', 'q')
					.val(searchQuery);
				$('button', this)
					.attr('name', 'sa')
					.attr('value', 'Search');
			}
		}
	});
});