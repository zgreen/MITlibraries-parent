//
// This script stores the most recently selected homepage search tool in localStorage, activating that tool again on page reload. If no tool has been selected, the first search tool will be activated.
// 
$(function(){
  // Search tools
  var resources = $('#resources');
  // The first search tool available in the dropdown
  var resFirst = $('li:first', resources);
  var searchLimiter = resFirst.data('option');
  var searchTarget = resFirst.data('target');
  // Set the active limiter
  //$('#search-main select.'+searchLimiter).addClass('active');
  // Check for localstorage using Modernizr
  if (Modernizr.localstorage) {
    // localStorage var
    var activated = localStorage.getItem('activeElement');
    // Check if that var is null
    if (activated === null) {
      console.log('nothing stored yet');
      // Add active class to first ul#resources option if not saved to localStorage
      resFirst.addClass('active');
      // Set the active limiter
      $('#search-main select.'+searchLimiter).addClass('active').parent().addClass('active');
      // Set the active search form
      $('#search-main form#'+searchTarget).addClass('input-submit active');
      $('#search-main input.'+searchLimiter).addClass('active')
      searchBy();
      $('#search-main a.search-advanced.'+searchTarget).addClass('active');
      // Get the data-target attribute of the active element
      var activeTar = resFirst.attr('data-target');
      // Set that ID as the activeElement item
      localStorage.setItem('activeElement', activeTar);
      console.log(activeTar);
      console.log(localStorage);

    }
    else {
      
      var target = 'li[data-target="'+activated+'"]';
      console.log(activated);
      $(target, resources).addClass('active');
      var searchLimiter = $(target).data('option');
      // Activate the corresponding search limiter
      $('#search-main select.'+searchLimiter).addClass('active').parent().addClass('active');
      // Activate the corresponding form
      $('#search-main form#'+activated).addClass('input-submit active');
      $('#search-main input.'+searchLimiter).addClass('active');
      $('#search-main a.search-advanced.'+activated).addClass('active');
      console.log('#search-main form#'+activated);
      searchBy();
      

      // Store the data-target of the active element
      function storeTarget() {
        // Get the data-target of the active element
        var activeTar = $('li.active', resources).attr('data-target');
        // Set that value as the activeElement item
        localStorage.setItem('activeElement', activeTar);
      }
      
      resources.on('click', storeTarget);
      
      
    }
  }
  // No localStorage
  else {
    // Activate the first search tool
    resFirst.addClass('active');
  }
});