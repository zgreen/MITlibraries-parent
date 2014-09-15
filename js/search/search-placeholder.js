// Placeholder text changes
$(function searchBy() {
	var optionSelected = $('#search-main select.active option:selected').val();
	if ($('#bartonplus.active').length) {
		if(optionSelected == '') {
			$('input.active').attr('placeholder', 'ex: carbon nanotubes');
		}
		if(optionSelected == 'TI ') {
			$('input.active').attr('placeholder', 'ex: freakonomics');
		}
		if(optionSelected == 'AU ') {
			$('input.active').attr('placeholder', 'ex: noam chomsky');
		}
	}
	if ($('#vera.active').length) {
		if(optionSelected == 'contains') {
			$('input.active').attr('placeholder', 'ex: new eng j of med');
		}
		if(optionSelected == 'startsWith') {
			$('input.active').attr('placeholder', 'ex: journal of cell biology');
		}
		if(optionSelected == 'exactMatch') {
			$('input.active').attr('placeholder', 'ex: web of science');
		}
	}
	if ($('#barton.active').length) {
		if(optionSelected == 'find_WRD') {
			$('input.active').attr('placeholder', 'ex: game design');
		}
		if(optionSelected == 'scan_TTL') {
			$('input.active').attr('placeholder', 'ex: introduction to fluid mechanics');
		}
		if(optionSelected == 'scan_AUT') {
			$('input.active').attr('placeholder', 'ex: shakespeare william');
		}
		if(optionSelected == 'scan_CND') {
			$('input.active').attr('placeholder', 'ex: ta405.t5854');
		}
	}
	if ($('#worldcat.active').length) {
		if(optionSelected == 'keyword') {
			$('input.active').attr('placeholder', 'ex: carbon nanotubes');
		}
		if(optionSelected == 'author') {
			$('input.active').attr('placeholder', 'ex: william shakespeare');
		}
		if(optionSelected == 'title') {
			$('input.active').attr('placeholder', 'ex: introduction to fluid mechanics');
		}
	}
	if ($('#course-reserves.active').length) {
		if(optionSelected == 'scan_CNB') {
			$('input.active').attr('placeholder', 'ex: 21F.108');
		}
		if(optionSelected == 'find_WIN') {
			$('input.active').attr('placeholder', 'ex: cohen');
		}
		if(optionSelected == 'find_WOU') {
			$('input.active').attr('placeholder', 'ex: introduction chemistry');
		}
	}
});