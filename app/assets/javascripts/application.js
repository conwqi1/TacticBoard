// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap 
//= require typeahead.js
//= require underscore
//= require backbone
//= backbone.modal-min.js
//= require moment
//= require bootstrap-datetimepicker
//= require trello_video
//= require jquery-ui/
//= require jquery.simplesidebar.min.js
//= require_tree ../templates
//= require_tree ./utils
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers
//= require_tree .

$(function(){
  $("#sign_in_as_guest").on('click', function(){
    $('#user_email').val('guest@gmail.com');
    $('#user_password').val('password');
  });
});

// $(function(){
//   $('#card_block').sortable();
// });




// $(function(){
//   $('').sortable({
//
//   });
// });

