//
// This script stores the most recently selected homepage search tool in localStorage, activating that tool again on page reload. If no tool has been selected, the first search tool will be activated.
// 
$(function(){
  // Search tools
  var resources = $('#resources'),
  // The first search tool available in the dropdown
      resFirst = $('li:first', resources),
  // The option number
      searchLimiter = resFirst.data('option'),
  // The target, e.g. "bartonplus" or "vera"
      searchTarget = resFirst.data('target'),
      activated,
      activeTar,
      target;

  // Store the data-target of the active element
  function storeTarget() {
    // Get the data-target of the active element
    activeTar = $('li.active', resources).attr('data-target');
    // Set that value as the activeElement item
    localStorage.setItem('activeElement', activeTar);
  }

  // Check for localstorage using Modernizr
  if (Modernizr.localstorage) {
    // localStorage var
    activated = localStorage.getItem('activeElement');
    // Check if that var is null
    if (activated === null) {
      console.log('nothing stored yet');
      // Add active class to first ul#resources option if not saved to localStorage
      resFirst.addClass('active');
      // Set the active limiter
      $('#search-main select.'+searchLimiter).addClass('active').parent().addClass('active');
      // Set the active search form
      $('#search-main form#'+searchTarget).addClass('input-submit active');
      $('#search-main input.'+searchLimiter).addClass('active');
      // Run searchBy function, which sets the correct placeholder text
      searchBy();
      $('#search-main a.search-advanced.'+searchTarget).addClass('active');
      // Get the data-target attribute of the active element
      activeTar = resFirst.attr('data-target');
      // Set that ID as the activeElement item
      localStorage.setItem('activeElement', activeTar);
      console.log(activeTar);
      console.log(localStorage);

    }
    else {
      target = 'li[data-target="'+activated+'"]';
      console.log(activated);
      $(target, resources).addClass('active');
      searchLimiter = $(target).data('option');
      // Activate the corresponding search limiter
      $('#search-main select.'+searchLimiter).addClass('active').parent().addClass('active');
      // Activate the corresponding form
      $('#search-main form#'+activated).addClass('input-submit active');
      $('#search-main input.'+searchLimiter).addClass('active');
      $('#search-main a.search-advanced.'+activated).addClass('active');
      console.log('#search-main form#'+activated);
      // Run searchBy function, which sets the correct placeholder text
      searchBy();
      
      resources.on('click', storeTarget);     
    }
  }
  // No localStorage
  else {
    // Add active class to first ul#resources option if not saved to localStorage
      resFirst.addClass('active');
      // Set the active limiter
      $('#search-main select.'+searchLimiter).addClass('active').parent().addClass('active');
      // Set the active search form
      $('#search-main form#'+searchTarget).addClass('input-submit active');
      $('#search-main input.'+searchLimiter).addClass('active');
      // Run searchBy function, which sets the correct placeholder text
      searchBy();
      $('#search-main a.search-advanced.'+searchTarget).addClass('active');
  }
});