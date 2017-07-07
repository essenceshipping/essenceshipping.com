$(document).ready(function(){
$('.slider').slider({full_width: true});
$('select').material_select();
$('.dest-description').css({"height":($('.collapsible').height()+'px')});
$('.collapsible-header').click(function(){
  $('.dest-description').css({"height":($('.collapsible').height()+'px')});
});
$('.dropdown-button').dropdown({
  inDuration: 300,
  outDuration: 225,
  constrain_width: false, // Does not change width of dropdown to that of the activator
  hover: false, // Activate on hover
  gutter: 0, // Spacing from edge
  belowOrigin: true, // Displays dropdown below the button
  alignment: 'left' // Displays dropdown with edge aligned to the left of button
}
);
$('.button-collapse').sideNav({
      menuWidth: 200, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
});
