//
// This script stores the most recently selected homepage search tool in localStorage, activating that tool again on page reload. If no tool has been selected, the first search tool will be activated.
// 
$(function(){
  // Search tools
  var resources = $('#resources');
  // The first search tool available in the dropdown
  var resFirst = $('li:first', resources);
  // Check for localstorage using Modernizr
  if (Modernizr.localstorage) {
    // localStorage var
    var activated = localStorage.getItem('activeElement');
    // Check if that var is null
    if (activated === null) {
      // Add active class to first ul#resources option if not saved to localStorage
      resFirst.addClass('active');
      // Get the data-target attribute of the active element
      var activeTar = resFirst.attr('data-target');
      // Set that ID as the activeElement item
      localStorage.setItem('activeElement', activeTar);
      console.log(activeTar);
      console.log(localStorage);
    }
    else {

      var target = 'li[data-target="'+activated+'"]';

      function activateStoredElement() {

        $('li', resources).removeClass('active');
        $(target, resources).addClass('active');

      }
      activateStoredElement();

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
    resFirst.addClass('active');
  }
});